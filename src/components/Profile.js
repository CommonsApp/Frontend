import React, { Component } from 'react'
import Layout from './Layout'

class Welcome extends Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Here is a member profile</h1>
          <Welcome name='Ben'/>
        </Layout>
      </div>
    )
  }
}
