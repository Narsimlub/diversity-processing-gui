import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CompanyDiversityList1 from "./components/CompanyDiversityList1";
import LeaderDiversityList from "./components/LeaderDiversityList";
import CompanyLeaders from "./components/ViewCompanyLeaders";
import CompanyDiversityList from "./components/CompanyDiversityList";
import LeadersByName from "./components/LeadersByName";
import LeadersDiv from "./components/LeadersDiv";
import CompanyDiversityFinal from "./components/CompanyDiversityFinal";
import ViewCompanyLeaders from "./components/ViewCompanyLeaders";
import ViewCompany from "./components/ViewCompany";
import LeadersDiversityFinal from "./components/LeadersDiversityFinal";
//import { Switch } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/* <a href="/companies" className="navbar-brand">
          Company Diversity List
          </a> */}
          <a href="/companiesname" className="navbar-brand">
            Company List
          </a>
          <a href="/leadersByName" className="navbar-brand">
            Leaders
          </a>
          <a href="/leadersDivercity" className="navbar-brand">
            Leaders with Diversity
          </a>
          <a href="/companiesbyname" className="navbar-brand">
          Companies by name
          </a>
          <a href="/leadersdivbyname" className="navbar-brand">
          Leaders by name
          </a>
          <a href="/viewCompany" className="navbar-brand">
          View Company
          </a>
          {/* <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/leaders"} className="nav-link">
                Leader Diversity List
              </Link>
            </li>
           
          </div>  */}
        </nav>
        <div className="container mt-3">

          <Switch>
            <Route exact path="/" component={LeadersDiversityFinal} />
            <Route exact path="/companies" component={CompanyDiversityList1 } />
            <Route exact path="/companiesname" component={CompanyDiversityList } />
            <Route exact path="/leaders" component={LeaderDiversityList } />
            <Route exact path="/leadersByName" component={LeadersByName } />
            <Route exact path="/leadersDivercity" component={LeadersDiv } />
            <Route exact path="/companiesbyname" component={CompanyDiversityFinal } />
            <Route exact path="/leadersdivbyname" component={LeadersDiversityFinal } />
            <Route exact path="/viewCompany" component={ViewCompany} />
            <Route path="/viewLeaders/:id" component={ViewCompanyLeaders} />

          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
