import * as React from "react";
import {FormEvent} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Actions, login} from "../../redux/actions";

interface Props {
  login(login: string, pass: string): void;
}

interface State {
  username: string;
  password: string;
}

class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {username: 'admin', password: 'admin'};
  }

  handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    const {username, password} = this.state;
    return (
      <form onSubmit={this.handleLoginFormSubmit}>
        <input
          value={username}
          onChange={e => this.setState({username: e.target.value})}
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

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  login(username: string, pass: string): void {
    dispatch(login(username, pass));
  }
});

export default connect(null, mapDispatchToProps)(Login);