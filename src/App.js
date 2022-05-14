import React, { Component } from "react";
import {  Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CompanyDiversityList1 from "./components/CompanyDiversityList1";
import LeaderDiversityList from "./components/LeaderDiversityList";
import CompanyLeaders from "./components/CompanyLeaders";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/companies" className="navbar-brand">
          Company Diversity List
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/leaders"} className="nav-link">
                Leader Diversity List
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
        </nav>
        <div className="container mt-3">
        
        <Routes>
            <Route exact path="/companies" element={<CompanyDiversityList1/>} />
            <Route exact path="/leaders" element={<LeaderDiversityList/>} />
            <Route  path="/companyLeaders/:id" element={<CompanyLeaders/>} />
            
        </Routes> 
        </div>
      </div>
    );
  }
}
export default App;
