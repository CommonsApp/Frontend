import React, { Component } from 'react'
import TabBar from './navigation/TabBar'
import '../sass/layout.scss'

export default class Layout extends Component {
  renderTitle() {
    if (this.props.titleComp) {
      return this.props.titleComp;
    } else {
      return (
        <div className="layout-header-title">
          <p className="layout-header-title-plain">Commons</p>
        </div>
      );
    }
  }

  renderLeft() {
    if (this.props.leftComp) {
      return this.props.leftComp;
    } else {
      return <div/>
    }
  }

  renderRight() {
    if (this.props.rightComp) {
      return this.props.rightComp;
    } else {
      return <div/>
    }
  }

  render() {
    return (
      <div className="layout-container">
        <div className="layout-header">
          <div className="layout-header-side-container">
            {this.renderLeft()}
          </div>
          {this.renderTitle()}
          <div className="layout-header-side-container">
            {this.renderRight()}
          </div>
        </div>

        <div className="layout-content">
          {this.props.children}
        </div>

        <TabBar {...this.props}/>
      </div>
    )
  }
}
