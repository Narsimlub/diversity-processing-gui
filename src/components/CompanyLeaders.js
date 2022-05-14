import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeaderDiversityService from "../services/LeaderDiversityService";
export default class CompanyLeaders extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.id=this.props.match.params.id;
        //this.removeAllTutorials = this.removeAllTutorials.bind(this);
        //this.searchTitle = this.searchTitle.bind(this);
        this.state = {
          //id: this.props.match.params.id,
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
        LeaderDiversityService.getAllDiversityLeadersUsingCompanyId(this.id)
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
              <th>Name</th>
              <th>Gender</th>
              <th>Ethnicity</th>
              <th>IsLgbt</th>
              <th>Is Veteran</th>
              <th>Is Disable</th>
              <th>Is Percentage</th>
            </thead>
          <tbody>
          {leaderDiversities && leaderDiversities.map((leaderDiversity, index) => (
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