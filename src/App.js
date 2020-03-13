import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      users: [1,2],
    }
  }

  UNSAFE_componentWillMount() {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( json => this.setState({users: json}))
  }

  setFilter(e) {
    this.setState({filter: e.target.value})
  }

  render() {
    let users = this.state.users;
    if(this.state.filter) {
      users = users.filter( v => v.name.includes(this.state.filter));
    }
    console.log(this.state.filter);
    return (
      <div>
        <input onChange={this.setFilter.bind(this)} />  
        {users.map( (v,i) => <UserWidget key={i} user={v} /> )}
      </div>
    )
  }
}

const UserWidget = (props) =>
      <div>
        <h2>{props.user.name}</h2>
        <p><strong>username: </strong>{props.user.username}</p>      
        <p><strong>email: </strong>{props.user.email}</p>      
      </div>


// class UserWidget extends React.Component {
//   render(){
//     return (
//       <div>
//         <h2>{this.props.user.name}</h2>
//         <p><strong>username: </strong>{this.props.user.username}</p>      
//         <p><strong>email: </strong>{this.props.user.email}</p>      
//       </div>
//     )
//   }
// }

export default App;