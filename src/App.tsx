import React, {Component} from "react";
import Login from "./login/Login";
import ModelSettings from "./ModelSettings";
import cuba from "cuba-js-sdk";

import "./app.css";

interface State {
  apiUrl: string;
  metadata?: any[]; //todo
}

export default class App extends Component<any, State> {

  private cubaApp: cuba.CubaApp;

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: 'http://localhost:8080/app/rest/'
    };
  }

  onLoginSubmit = (data) => {
    this.initializeCubaApp(data);
    this.cubaApp.login(data.login, data.password).then(() => {
      this.loadMetadata();
    }).catch(() => {
      alert('Failed to log in');
    });
  };

  onProceedAsAnonymous = (data) => {
    this.initializeCubaApp(data);
    this.loadMetadata();
  };

  initializeCubaApp(data) {
    this.cubaApp = cuba.initializeApp({apiUrl: data.apiUrl, name: "cubaDatagen"});
  }

  loadMetadata = () => {
    this.cubaApp.loadMetadata().then((metadata) => {
      this.setState({...this.state, metadata});
    });
    this.cubaApp.loadEntities('sec$User');
    this.cubaApp.getPermissions();
  };

  render() {

    const {apiUrl, metadata} = this.state;

    if (!metadata) {
      return (
        <div className="login-screen">
          <Login apiUrl={apiUrl}
                 onLoginSubmit={this.onLoginSubmit}
                 onProceedAsAnonymous={this.onProceedAsAnonymous}/>
        </div>
      );
    }

    return (
      <div>
        <ModelSettings entityInfos={metadata}/>
      </div>
    )

  }
}