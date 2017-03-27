import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Commons</h1>
        <a>Activity</a>
        <a>Representatives</a>
        <a>Legislation</a>

        {this.props.children}

        <p>Footer goes here!</p>
      </div>
    )
  }
}
