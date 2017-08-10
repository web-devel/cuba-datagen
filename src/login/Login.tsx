import React, {Component} from "react";

interface Props {
  apiUrl: string;
  onLoginSubmit: (details: LoginDetails) => any;
  onProceedAsAnonymous: (details: LoginDetails) => any;
}

export interface LoginDetails {
  apiUrl: string,
  login?: string,
  password?: string
}

export default class Login extends Component<Props, any> {

  private apiUrlInput: HTMLInputElement;
  private loginInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit({
      apiUrl: this.apiUrlInput.value,
      login: this.loginInput.value,
      password: this.passwordInput.value
    });
  };

  onProceedAsAnonymous = () => {
    this.props.onProceedAsAnonymous({
      apiUrl: this.apiUrlInput.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="pure-form pure-form-aligned">
        <fieldset>

          <div className="pure-control-group">
            <label htmlFor="apiUrlInput">REST API URL</label>
            <input id="apiUrlInput"
                   ref={node => this.apiUrlInput = node}
                   value={this.props.apiUrl}
                   style={{width: 240}}/>
          </div>

          <div className="pure-control-group">
            <label>Login (optional)</label>
            <input id="loginInput"
                   ref={node => this.loginInput = node}
                   style={{width: 240}}/>
          </div>

          <div className="pure-control-group">
            <label htmlFor="passwordInput">Password (optional)</label>
            <input id="passwordInput"
                   ref={node => this.passwordInput = node}
                   type="password"
                   style={{width: 240}}/>
          </div>

          <div className="pure-controls" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="pure-button-group" role="group" aria-label="Login buttons">
              <button type="submit" className="pure-button pure-button-primary">Login</button>
              <button type="button" onClick={this.onProceedAsAnonymous} className="pure-button">Anonymous</button>
            </div>
          </div>

        </fieldset>
      </form>
    )
  }

}