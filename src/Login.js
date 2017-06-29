import React from "react";
import Input from "antd/lib/input";
import "antd/lib/input/style/css"

class Login extends React.Component {

  render() {
    return (
      <div>
        <Input placeholder="REST url"/>
      </div>
    )
  }

}

export default Login;