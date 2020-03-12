import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {

  render() {
    return (
      <div>
        <strong>Hey {this.props.name}, your number is {this.props.count}</strong>
      </div>
    )
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string,
}

App.defaultProps = {
  name: 'No-name',
}

export default App;