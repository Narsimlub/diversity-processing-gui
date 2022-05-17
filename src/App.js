import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CompanyDiversityList1 from "./components/CompanyDiversityList1";
import LeaderDiversityList from "./components/LeaderDiversityList";
import CompanyLeaders from "./components/CompanyLeaders";
import CompanyDiversityList from "./components/CompanyDiversityList";
import LeadersByName from "./components/LeadersByName";
import LeadersDiv from "./components/LeadersDiv";

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
          {/* <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/leaders"} className="nav-link">
                Leader Diversity List
              </Link>
            </li>
           
          </div>  */}
        </nav>
        <div className="container mt-3">

          <Routes>
            <Route exact path="/companies" element={<CompanyDiversityList1 />} />
            <Route exact path="/companiesname" element={<CompanyDiversityList />} />
            <Route exact path="/leaders" element={<LeaderDiversityList />} />
            <Route exact path="/leadersByName" element={<LeadersByName />} />
            <Route exact path="/leadersDivercity" element={<LeadersDiv />} />

            <Route path="/companyLeaders/:id" element={<CompanyLeaders />} />

          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
