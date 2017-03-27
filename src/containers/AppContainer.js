import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-router';

class App extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}

let mapStateToProps = (state) => {
  return {
    reduxState: state
  };
};

export default connect(mapStateToProps, {push})(App);