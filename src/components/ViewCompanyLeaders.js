import React, { Component } from "react";
import { Link } from "react-router-dom";

import LeaderDiversityService from "../services/LeaderDiversityService";

class ViewCompanyLeaders extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id: this.props.match.params.id,
        leaders: []
    }
  }
  componentDidMount(){
    
    console.info();
   // if (this.props.match && this.props.match.params.id) {
    LeaderDiversityService.getAllDiversityLeadersUsingCompanyId(this.state.id ).then( res => {
        this.setState({leaders: res.data});
    })
  //}
  }  
  render() {
    return (
      <div className="list row"> 
        <h1>Company Leaders</h1>
        <table border="2">
          <thead>
            <th>Name</th>
            <th>Gender</th>
            <th>Ethnicity</th>
            <th>Is Lgbt</th>
            <th>Is Veteran</th>
            <th>Is Disable</th>
            <th>Is Percentage</th>
          </thead>
          <tbody>
              {this.state.leaders && this.state.leaders.map((leaderDiversity, index) => (
                <tr key={leaderDiversity.id}>
                  
                    <td>{leaderDiversity.name}</td>
                    <td>{leaderDiversity.gender}</td>
                    <td>{leaderDiversity.ethnicity}</td>
                    <td>{leaderDiversity.isLgbt}</td>
                    <td>{leaderDiversity.isVeteran}</td>
                    <td>{leaderDiversity.isDisable}</td>
                    <td>{leaderDiversity.sharePercentage}</td>
                  
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewCompanyLeaders