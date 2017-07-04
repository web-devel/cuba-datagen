import React, {Component} from "react"
import Login from "./login/Login"
import "./app.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: 'http://localhost:8080/app/rest/'
    };
  }

  onLoginSubmit = (e) => {
    console.log(e);
  }

  render() {

    const {apiUrl, metadata} = this.state;

    if (!metadata) {
      return (
        <div className="login-screen">
            <Login apiUrl={apiUrl}
                   onLoginSubmit={this.onLoginSubmit}/>
        </div>
      )
    }

  }
}

export default App;