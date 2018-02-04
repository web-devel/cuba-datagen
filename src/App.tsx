import * as React from 'react';
import './App.css';
import Login from './Login';
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import ServerForm from "./ServerForm";

class App extends React.Component {

  state: {
    loggedIn: boolean
    cubaApp?: CubaApp;
  };

  constructor(props: {} = {}) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  private handleLogin = () => {
    this.setState({loggedIn: true});
  };

  private handleServerUrlSet = () => {
    this.setState({cubaAp: new CubaApp()})
  };

  render() {
    const {loggedIn, cubaApp} = this.state;
    return (
      <div className="App">
        {! cubaApp
          ? <ServerForm appUrl={'http://localhost:8080/app'} onProceed={this.handleServerUrlSet}/>
          : loggedIn
            ? <div>You are logged in</div>
            : <Login onLogin={this.handleLogin}/>
        }
      </div>
    );
  }
}

export default App;
