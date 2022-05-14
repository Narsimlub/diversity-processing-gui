import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyDiversityList.css";
import CompanyDiversityService from "../services/CompanyDiversityService";

export default class CompanyDiversityList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
       // this.removeAllTutorials = this.removeAllTutorials.bind(this);
       // this.searchTitle = this.snpm earchTitle.bind(this);
        this.state = {
          companyDiversityInfos: [],
          currentCompanyDiversityInfo: null,
          currentIndex: -1,
          searchTitle: ""
        };
      }
      componentDidMount() {
        this.retrieveTutorials();
      }
      onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
          searchTitle: searchTitle
        });
      }
      retrieveTutorials() {
        CompanyDiversityService.getAllCompanies()
          .then(response => {
            this.setState({
                companyDiversityInfos: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      refreshList() {
        this.retrieveTutorials();
        this.setState({
          currentTutorial: null,
          currentIndex: -1
        });
      }
      setActiveTutorial(companyDiversityInfo, index) {
        this.setState({
          currentCompanyDiversityInfo: companyDiversityInfo,
          currentIndex: index
        });
      }
     
      
      render() {
        
        const { searchTitle, companyDiversityInfos, currentcompanyDiversityInfo, currentIndex } = this.state;
    return (


      <div className="list row"> 
          <h1>Company Diversity List</h1>

          <section class="grid-container">
            <div class="grid-item">Company Name</div>
            <div class="grid-item">Contact Name</div>
            <div class="grid-item">E-mail</div>
            <div class="grid-item">Action</div>
           </section> 
           
          {companyDiversityInfos && companyDiversityInfos.map((companyDiversity, index) => (
      
           <section class="container" key={companyDiversity.id}>
            <div class="grid-item">{companyDiversity.companyName}</div>
            <div class="grid-item">{companyDiversity.mobileNumber}</div>
            <div class="grid-item">{companyDiversity.emailId}</div>
            <div class="grid-item">Show Leaders</div>
            
{/*             
            {companyDiversity.leaders && companyDiversity.leaders.map((leader, index1) => (
            <section class="container1" key={companyDiversity.id}>
              <div class="item-a">{leader.name}</div>
              <div class="item-b">{leader.companyName}</div>
              <div class="item-c">{leader.mobileNumber}</div>
              <div class="item-d">{leader.emailId}</div>
              <div class="item-e">{leader.id} Show Leaders</div>
            </section>
             ))}  */}

          </section>
       ))}     
        </div>
      
    );
  

      }
    }