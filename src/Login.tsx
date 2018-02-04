import * as React from "react";

export default class Login extends React.Component {

  props: {
    onLogin: () => void
  };

  handleLogin = () => {
    this.props.onLogin();
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input placeholder="Login"/>
        <input placeholder="Password"/>
        <button type="submit">Login</button>
        <button>Proceed as anonymous</button>
      </form>
    );
  }
}