import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: 'please write on input',
      count: 0,
    }
  }

  update(e) {
    this.setState({
      message: e.target.value,
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} /> <br/>
        <strong>{this.state.message}, you changed input {this.state.count} times</strong>
      </div>
    )
  }
}

export default App;