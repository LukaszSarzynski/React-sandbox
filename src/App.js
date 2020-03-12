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
        <h2>{this.state.message}, you changed input {this.state.count} times</h2> 
        <InputWidget update={this.update.bind(this)} /> <br/>
        <InputWidget update={this.update.bind(this)} /> <br/>
        <InputWidget update={this.update.bind(this)} /> <br/>
        <InputWidget update={this.update.bind(this)} /> <br/>
      </div>
    )
  }
}

const InputWidget = (props) => 
  <input type="text" onChange={props.update} /> 


export default App;