import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: 'event demo',
    }
  }

  update(e) {
    this.setState({
      message: e.type,
    })
  }

  render() {
    return (
      <div>
        <h2>Event type {this.state.message}</h2> 
       <input 
          onChange={this.update.bind(this)} 
          // onSelect={this.update.bind(this)} 
          onFocus={this.update.bind(this)} 
          onBlur={this.update.bind(this)} 
          onCopy={this.update.bind(this)}  
          onCut={this.update.bind(this)}  
          onPaste={this.update.bind(this)} 
          // onKeyDown={this.update.bind(this)} 
          // onKeyPress={this.update.bind(this)} 
          // onKeyUp={this.update.bind(this)} 
          onClick={this.update.bind(this)} 
          onContextMenu={this.update.bind(this)} 
          onDoubleClick={this.update.bind(this)} 
          // onMouseMove={this.update.bind(this)} 
          // onMouseOut={this.update.bind(this)} 
          // onMouseOver={this.update.bind(this)} 
          // onMouseUp={this.update.bind(this)} 
          onWheel={this.update.bind(this)}
          onTouchCancel={this.update.bind(this)}
          onTouchEnd={this.update.bind(this)}
          onTouchMove={this.update.bind(this)}
          onTouchStart={this.update.bind(this)}

       />
      </div>
    )
  }
}



export default App;