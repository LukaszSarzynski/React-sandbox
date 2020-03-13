import React from 'react';

class App extends React.Component {

  
  render() {
    
    return (
      <ChildDirection>
        <p>-up-</p>
        <span>-left-</span>
        <span>-right-</span>
        <p>-down-</p>
      </ChildDirection>
    )
  }
}
// <span>left</span> <span>right</span>

class ChildDirection extends React.Component {

  constructor() {
    super();

    this.state = {
      direction: '--'
    }
  }

  changeDirection(direction) {
    this.setState({direction});
  }

  render() {
    let children = this.props.children
    children = React.Children.map(children, child => {
      return React.cloneElement(child, {onMouseOver: this.changeDirection.bind(this,child.props.children)})
    })
    return (
      <div>
        <h1>Go to {this.state.direction}</h1>
        {children}
      </div>
    )
  }
}



export default App;