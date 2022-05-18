
import React, { useState, useEffect, useMemo, useRef,Component } from "react";

import CompanyDiversityService from "../services/CompanyDiversityService";

class ViewCompany extends Component {

  constructor(props) {
    super(props)

    this.state = {
        name: "",
        company: {}
    }
}

componentDidMount(){
  CompanyDiversityService.getCompaniesByName(this.state.name).then( res => {
        this.setState({company: res.data});
    })
}

onChangeName(e){
  
  //const name1 = e.target.value;
  this.setState({name: e.target.value});
  console.info(this.state.name);
};

findCompany(){
  CompanyDiversityService.getCompaniesByName(this.state.name).then( res => {
    this.setState({company: res.data});
})
};
//useEffect(retrieveCompanies);
  
render() {  
  const { searchTitle } = this.state.name;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findCompany}
              >
                Search
              </button>
            </div>
          </div>
        </div>
  
        <div>
        <h1>Company Info:</h1>
        <table border="2">
            <thead>
              <th>Duns Name</th>
              <th>Duns Number</th>
              <th>county</th>
              <th>phone</th>
              <th>city</th>
              <th>State</th>
              <th>ZipCode</th>
              {/* <th>Action</th> */}
            </thead> 
          <tbody>
          
      <tr key={this.state.company.id}>
         
           <td>{this.state.company.dunsName}</td> 
           <td>{this.state.company.dunsNumber}</td>
            <td>{this.state.company.county}</td>
            <td>{this.state.company.phone}</td>
            <td>{this.state.company.city}</td>
            <td>{this.state.company.state}</td>
            <td>{this.state.company.city}</td>
            {/* <td><button onClick={ () => this.viewLeaders(this.state.company.id)} >Leaders</button></td> */}
         
        
      </tr>
      </tbody>
      </table>
      <div>
        <br/>
      <h1>Leaders:</h1>
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
              {this.state.company.leaders && this.state.company.leaders.map((leaderDiversity, index) => (
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

        </div>
  
      </div>
    )
  }
}
  
  export default ViewCompany