import React, { Component } from 'react'
import Layout from '../Layout'
import request from 'superagent'
import Dotdotdot from 'react-dotdotdot'
import { Link } from 'react-router-dom'
import FaCogs from 'react-icons/lib/fa/cogs'
import '../../sass/list.scss'

export default class LegislationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
  }

  componentDidMount() {
    request
      .get('https://www.govtrack.us/api/v2/bill?congress=115&order_by=-current_status_date')
      .end((err, res) => {
        if (err || !res.ok) {
          console.log('Couldn\'t complete request to govtrack :(')
        } else {
          this.setState({
            bills: res.body.objects
          });
        }
      });
  }

  renderStatus(bill) {
    var status;
    var color;
    switch (bill.current_status) {
      case "prov_kill_veto":
        status = "Vetoed (No Override Attempt)";
        color = "red";
        break;

      case "fail_second_senate":
        status = "Passed House, Failed Senate";
        color = "red";
        break;

      case "passed_bill":
        status = "Passed House &amp; Senate";
        color = "green";
        break;

      case "passed_constamend":
        status = "Agreed To (Constitutional Amendment Proposal)";
        color = "green";
        break;

      case "pass_back_senate":
        status = "Passed Senate with Changes";
        color = "orange";
        break;

      case "vetoed_override_fail_second_house":
        status = "Vetoed &amp; Override Passed Senate, Failed in House";
        color = "red";
        break;

      case "fail_originating_house":
        status = "Failed House";
        color = "red";
        break;

      case "fail_second_house":
        status = "Passed Senate, Failed House";
        color = "red";
        break;

      case "override_pass_over_house":
        status = "Vetoed &amp; House Overrides (Senate Next)";
        color = "green";
        break;

      case "override_pass_over_senate":
        status = "Vetoed &amp; Senate Overrides (House Next)";
        color = "green";
        break;

      case "pass_back_house":
        status = "Passed House with Changes";
        color = "orange";
        break;

      case "prov_kill_cloturefailed":
        status = "Failed Cloture";
        color = "red";
        break;

      case "enacted_veto_override":
        status = "Enacted — Veto Overridden";
        color = "red";
        break;

      case "passed_concurrentres":
        status = "Agreed To (Concurrent Resolution)";
        color = "green";
        break;

      case "prov_kill_suspensionfailed":
        status = "Failed Under Suspension";
        color = "orange";
        break;

      case "passed_simpleres":
        status = "Agreed To (Simple Resolution)";
        color = "green";
        break;

      case "vetoed_pocket":
        status = "Pocket Vetoed";
        color = "red";
        break;

      case "vetoed_override_fail_originating_house":
        status = "Vetoed &amp; Override Failed in House";
        color = "red";
        break;

      case "conference_passed_senate":
        status = "Conference Report Agreed to by Senate";
        color = "green";
        break;

      case "fail_originating_senate":
        status = "Failed Senate";
        color = "red";
        break;

      case "pass_over_senate":
        status = "Passed Senate";
        color = "green";
        break;

      case "prov_kill_pingpongfail":
        status = "Failed to Resolve Differences";
        color = "orange";
        break;

      case "enacted_signed":
        status = "Enacted — Signed by the President";
        color = "green";
        break;

      case "pass_over_house":
        status = "Passed House";
        color = "green";
        break;

      case "conference_passed_house":
        status = "Conference Report Agreed to by House";
        color = "green";
        break;

      case "reported":
        status = "Ordered Reported by Committee";
        color = "gray";
        break;

      case "vetoed_override_fail_second_senate":
        status = "Vetoed &amp; Override Passed House, Failed in Senate";
        color = "red";
        break;

      case "vetoed_override_fail_originating_senate":
        status = "Vetoed &amp; Override Failed in Senate";
        color = "red";
        break;

      case "enacted_tendayrule":
        status = "Enacted — By 10 Day Rule";
        color = "green";
        break;

      case "introduced":
        status = "Introduced";
        color = "green";
        break;

      case "enacted_unknown":
        status = "Enacted (Unknown Final Step)";
        color = "green";
        break;

      case "referred":
        status = "Referred to Committee";
        color = "gray";
        break;
    }

    return <span className={"status " + color} dangerouslySetInnerHTML={{__html: status}}></span>
  }

  renderSponsor(bill) {
    var classes = "list-item-header-secondary";
    if (bill.sponsor_role.state == "TX") {
      classes = "list-item-header-secondary highlight";
    }

    return (
      <span className={classes}>
        {bill.sponsor_role.title} {bill.sponsor.firstname} {bill.sponsor.lastname} [{bill.sponsor_role.state}]
      </span>
    );
  }

  renderList() {
    return this.state.bills.map((bill) => {
      return (
        <div className="list-item" key={bill.id}>
          <div className="list-item-header">
            <p>{bill.display_number} {this.renderStatus(bill)}</p>
          </div>
          <Dotdotdot clamp={3}>
            <Link className="list-item-content" to={"/legislation/"+bill.id}>
              <p>{bill.title_without_number}</p>
            </Link>
          </Dotdotdot>
          <div className="list-item-footer">
            <p>Sponsor: {this.renderSponsor(bill)}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Layout
          rightComp={<FaCogs color="green" size="30"/>}
          {...this.props}>
          <div className="list">
            {this.renderList()}
          </div>
        </Layout>
      </div>
    )
  }
}
