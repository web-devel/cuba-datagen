import React, {Component} from "react";
import Login, {LoginDetails} from "./login/Login";
import ModelSettings from "./ModelSettings";
import * as cuba from "cuba-js-sdk";
import IMetaClassInfo = cuba.IMetaClassInfo;

import "./app.css";

interface State {
  apiUrl: string;
  metadata?: IMetaClassInfo[];
}

export default class App extends Component<any, State> {

  private cubaApp: cuba.CubaApp;

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: 'http://localhost:8080/app/rest/'
    };
  }

  onLoginSubmit = (details: LoginDetails) => {
    this.cubaApp = new cuba.CubaApp("", details.apiUrl);
    this.cubaApp.login(details.login, details.password).then(() => {
      this.loadMetadata();
    }).catch(() => {
      alert('Failed to log in');
    });
  };

  onProceedAsAnonymous = (details: LoginDetails) => {
    this.cubaApp = new cuba.CubaApp("", details.apiUrl);
    this.loadMetadata();
  };

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