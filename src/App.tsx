import * as React from 'react';
import './App.css';
import Login from './login/Login';
import {CubaApp, initializeApp} from "@cuba-platform/rest/dist-node/cuba";
import AppUrlForm from "./login/AppUrlForm";
import Main from "./main/Main";
import {connect} from "react-redux";
import {AppState} from "./state";

interface Props {
  loggedIn: boolean;
  appUrl?: string;
  cubaApp?: CubaApp;
}

class App extends React.Component<Props> {

  private handleLogin = () => {
    this.setState({loggedIn: true});
  };

  private handleAppUrlSet = (apiUrl: string) => {
    const cubaApp = initializeApp({apiUrl});
    this.setState({cubaApp});
  };

  render() {
    const {loggedIn, appUrl, cubaApp} = this.props;
    return (
      <div className="App">
        {!cubaApp
          ? <AppUrlForm appUrl={appUrl} onProceed={this.handleAppUrlSet}/>
          : loggedIn
            ? <Main cubaApp={cubaApp}/>
            : <Login onLogin={this.handleLogin} cubaApp={cubaApp}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state: AppState):Props {
  return {
    appUrl: state.appUrl,
    loggedIn: state.loggedIn,
    cubaApp: state.cubaApp
  };
}

export default connect(mapStateToProps)(App);
