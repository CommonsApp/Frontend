import React, { Component } from 'react'
import Layout from '../Layout'
import request from 'superagent'
import Dotdotdot from 'react-dotdotdot'
import { Link } from 'react-router-dom'
import FaCogs from 'react-icons/lib/fa/cogs'
import '../../sass/list.scss'

export default class Members extends Component {
  render() {
    return (
      <div>
        <Layout {...this.props}>
            <h1>Here is a list of members</h1>
        </Layout>
      </div>
    )
  }
}
