import React, { Component } from 'react'
import Layout from '../Layout'
import request from 'superagent'
import Dotdotdot from 'react-dotdotdot'
import { Link } from 'react-router-dom'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import '../../sass/legislation.scss'

export default class LegislationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bill: {}
    };
  }

  componentWillMount() {
    console.log(this)
    request
      .get('https://www.govtrack.us/api/v2/bill/'+this.props.match.params.id)
      .end((err, res) => {
        if (err || !res.ok) {
          console.log('Couldn\'t complete request to govtrack :(')
        } else {
          this.setState({
            loaded: true,
            bill: res.body
          });
        }
      });
  }

  renderCoSponsors() {
    if (this.state.bill.cosponsors.length >= 1) {
      var coSponsors = this.state.bill.cosponsors.map((cosponsor) => {
        return (
          <img key={cosponsor.id} src={"https://www.govtrack.us/data/photos/"+cosponsor.id+"-50px.jpeg"} alt={cosponsor.name}/>
        );
      });
      return (
        <div className="section">
          <p className="section-label">Co-Sponsors</p>
          <div className="section-content section-content-horizontal">
            {coSponsors}
          </div>
        </div>
      );
    }
  }

  renderView() {
    return (
      <div>
        <div className="section">
          <p className="section-label">Bill Title</p>
          <p className="section-content">{this.state.bill.title_without_number}</p>
        </div>
        <div className="section">
          <p className="section-label">Sponsor</p>
          <p className="section-content">{this.state.bill.sponsor.name}</p>
        </div>
        {this.renderCoSponsors()}
        <div className="section">
          <p className="section-label">Current Status</p>
          <p className="section-content">{this.state.bill.current_status_description}</p>
        </div>
      </div>
    );
  }

  renderTitle() {
    return (
      <div className="layout-header-title">
        <p className="layout-header-title-primary">{this.state.bill.display_number}</p>
        <p className="layout-header-title-secondary">{this.state.bill.sponsor.name}</p>
      </div>
    );
  }

  renderLeftComp() {
    return (
      <Link to="/legislation"><FaAngleLeft color="green" size="30"/></Link>
    );
  }

  render() {
    if (!this.state.loaded)
      return <p>Loading...</p>;

    return (
      <div>
        <Layout
          titleComp={this.renderTitle()}
          leftComp={this.renderLeftComp()}
          {...this.props}>
          <div className="legislation">
            {this.renderView()}
          </div>
        </Layout>
      </div>
    )
  }
}
