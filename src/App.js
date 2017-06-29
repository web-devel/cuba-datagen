import React from "react"
import Row from 'antd/lib/row'
import 'antd/lib/row/style/css'
import Col from "antd/lib/col"
import 'antd/lib/col/style/css'
import Login from "./Login"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Login/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;