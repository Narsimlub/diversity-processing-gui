import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeaderDiversityService from "../services/LeaderDiversityService";
export default class LeaderDiversityList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        //this.removeAllTutorials = this.removeAllTutorials.bind(this);
        //this.searchTitle = this.searchTitle.bind(this);
        this.state = {
          leaderDiversities: [],
          currentTutorial: null,
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
        LeaderDiversityService.getAllDiversityLeaders()
          .then(response => {
            this.setState({
              leaderDiversities: response.data
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
      setActiveTutorial(tutorial, index) {
        this.setState({
          currentTutorial: tutorial,
          currentIndex: index
        });
      }
     
      
      render() {
        const { searchTitle, leaderDiversities, currentTutorial, currentIndex } = this.state;
        return (
          <div className="list row"> 
          <h1>Leader Diversity List</h1>
          <table border="2">
            <thead>
              <td>Name</td>
              <td>Company Name</td>
              <td>Mobile Number</td>
              <td>E-mail</td>
              <td>Gender</td>
            </thead>
          <tbody>
          {leaderDiversities && leaderDiversities.map((leaderDiversity, index) => (
      <tr key={leaderDiversity.id}>
         
           <td>{leaderDiversity.name}</td>
           <td>{leaderDiversity.companyName}</td>
           <td>{leaderDiversity.mobileNumber}</td>
           <td>{leaderDiversity.emailId}</td>
           <td>{leaderDiversity.gender}</td>
        
      </tr>
       ))}
      </tbody>
      </table>
      </div>
          );
      }
    }