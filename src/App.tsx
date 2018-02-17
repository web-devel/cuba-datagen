import * as React from 'react';
import './App.css';
import Login from './login/Login';
import {CubaApp, initializeApp} from "@cuba-platform/rest/dist-node/cuba";
import AppUrlForm from "./login/AppUrlForm";
import Main from "./main/Main";

interface State {
  loggedIn: boolean;
  cubaApp?: CubaApp;
}

interface Props {
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  private handleLogin = () => {
    this.setState({loggedIn: true});
  };

  private handleAppUrlSet = (apiUrl: string) => {
    const cubaApp = initializeApp({apiUrl});
    this.setState({cubaApp});
  };

  render() {
    const {loggedIn, cubaApp} = this.state;
    return (
      <div className="App">
        {!cubaApp
          ? <AppUrlForm appUrl={'http://localhost:8080/app/rest/'} onProceed={this.handleAppUrlSet}/>
          : loggedIn
            ? <Main cubaApp={cubaApp}/>
            : <Login onLogin={this.handleLogin} cubaApp={cubaApp}/>
        }
      </div>
    );
  }
}

export default App;
