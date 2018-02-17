import * as React from "react";
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import {FormEvent} from "react";

interface Props {
  cubaApp: CubaApp;
  onLogin: () => void;
}

interface State {
  login: string;
  password: string;
}

export default class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {login: '', password: ''};
  }

  handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.cubaApp.login(this.state.login, this.state.password)
      .then(() => {
        this.props.onLogin();
      })
      .catch(() => {
        alert('Failed to login');
      });
  };

  render() {
    const {login, password} = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        <input
          value={login}
          onChange={e => this.setState({login: e.target.value})}
          placeholder="Login"
          type="text"
        />
        <input
          value={password}
          onChange={e => this.setState({password: e.target.value})}
          placeholder="Password"
          type="password"
        />
        <button name={"Login"} type="submit">Login</button>
        <button name={"Anon"}>Proceed as anonymous</button>
      </form>
    );
  }
}