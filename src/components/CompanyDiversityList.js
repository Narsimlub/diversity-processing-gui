import React, { Component } from "react";
import { Link } from "react-router-dom";
import CompanyDiversityService from "../services/CompanyDiversityService";
export default class CompanyDiversityList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
       // this.removeAllTutorials = this.removeAllTutorials.bind(this);
       // this.searchTitle = this.searchTitle.bind(this);
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
                CompanyDiversityInfos: response.data
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
          <table border="2">
            <thead>
              <td>Company Name</td>
              {/* <td>Name</td>
              <td>Company Name</td>
              <td>mobileNumber</td>
              <td>E-mail</td>*/}
            </thead> 
          <tbody>
          {companyDiversityInfos && companyDiversityInfos.map((companyDiversity, index) => (
      <tr key={companyDiversity.id}>
         
           <td>{companyDiversity.companyName} |
          { companyDiversity.leaders && companyDiversity.leaders.map((leader, index1) => (
          <span>{leader.name}</span>

            ))}
            </td>
           {/* {companyDiversity.leaders && companyDiversity.leaders.map((leader, index1) => (
            
           <td>{leader.name}</td>
           <td>{leader.companyName}</td>
           <td>{leader.mobileNumber}</td>
           <td>{leader.emailId}</td>
          
        ))} */}
        
      </tr>
       ))}
      </tbody>
      </table>
      </div>
      
    );
  

      }
    }