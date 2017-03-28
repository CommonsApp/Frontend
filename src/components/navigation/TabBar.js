import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/tabBar.scss'

export default class TabBar extends Component {
  render() {
    return (
      <div className="tab-bar-container">
        <Link to="/activity">Activity</Link>
        <Link to="/members">Members</Link>
        <Link to="/legislation">Legislation</Link>
      </div>
    )
  }
}
