import React, {Component} from "react";

class App extends Component {

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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.apiUrl}/>
        <button>Ok</button>
      </form>
    )
  }
}

export default App;