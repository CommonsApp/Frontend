import React, { Component } from 'react'
import TabBar from './navigation/TabBar'
import '../sass/layout.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <h1>Welcome to Commons</h1>

        <div className="layout-content">
          {this.props.children}
        </div>

        <TabBar />
      </div>
    )
  }
}
