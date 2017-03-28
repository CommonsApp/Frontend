import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { linechart as LineChart, suit as Suit, leaflet as Leaflet } from '../icons/'
import '../../sass/tabBar.scss'

export default class TabBar extends Component {
  getColor(path) {
    if (this.props.location.pathname.includes(path)) {
      return "green";
    } else {
      return "black";
    }
  }

  render() {
    return (
      <div className="tab-bar-container">
        <Link className="tab-bar-item" to="/">
          <LineChart fill={this.getColor("/activity")} size="30"/>
          <p className="tab-bar-item-label" style={{color: this.getColor("/activity")}}>Activity</p>
        </Link>
        <Link className="tab-bar-item" to="/members">
          <Suit fill={this.getColor("/members")} size="30"/>
          <p className="tab-bar-item-label" style={{color: this.getColor("/members")}}>Members</p>
        </Link>
        <Link className="tab-bar-item" to="/legislation">
          <Leaflet fill={this.getColor("/legislation")} size="30"/>
          <p className="tab-bar-item-label" style={{color: this.getColor("/legislation")}}>Legislation</p>
        </Link>
      </div>
    )
  }
}
