import React, { Component } from "react";
import { Link } from "react-router-dom";
import CompanyDiversityService from "../services/CompanyDiversityService";
export default class CompanyDiversityList1 extends Component {
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

      viewLeaders(id){
        this.props.history.push(`/companyLeaders/${id}`);
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
              <th>Duns Name</th>
              <th>Duns Number</th>
              <th>county</th>
              <th>phone</th>
              <th>city</th>
              <th>State</th>
              <th>ZipCode</th>
              <th>Action</th>
            </thead> 
          <tbody>
          {companyDiversityInfos && companyDiversityInfos.map((companyDiversity, index) => (
      <tr key={companyDiversity.id}>
         
           <td>{companyDiversity.dunsName}</td> 
           <td>{companyDiversity.dunsNumber}</td>
            <td>{companyDiversity.county}</td>
            <td>{companyDiversity.phone}</td>
            <td>{companyDiversity.city}</td>
            <td>{companyDiversity.state}</td>
            <td>{companyDiversity.city}</td>
            <td><button onClick={ () => this.viewLeaders(companyDiversity.id)} >Leaders</button></td>
          {/* { companyDiversity.leaders && companyDiversity.leaders.map((leader, index1) => (
          <span>{leader.name}</span>

            ))}\ */}
            
            {/* {companyDiversity.leaders && companyDiversity.leaders.map((leader, index1) => (
            <tr>
           <td>{leader.name}</td>
           <td>{leader.companyName}</td>
           <td>{leader.mobileNumber}</td>
           <td>{leader.emailId}</td> </tr>
          
        ))}  */}
        
      </tr>
       ))}
      </tbody>
      </table>
      </div>
      
    );
  

      }
    }