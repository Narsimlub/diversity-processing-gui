import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeaderDiversityService from "../services/LeaderDiversityService";
export default class LeadersByName extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    //this.removeAllTutorials = this.removeAllTutorials.bind(this);
    ///this.searchTitle = this.searchTitle.bind(this);
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
  findByTitle(e) {
    LeaderDiversityService.getLeaderDiversityInformation('Malina')
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
        <h1>Leaders</h1>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by full name"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <table border="2">
          <thead>
            <th>Name</th>
            <th>Company Name</th>
            {/* <th>Mobile Number</th>
              <th>Email</th> */}
            <th>Gender</th>
            <th>Nationality</th>
            <th>Religion</th>
            <th>Maritial Status</th>
            <th>Sexual Orientation</th>
            <th>Political Orientation</th>
            <th>Color</th>
            <th>Language</th>
            <th>Ethnicity</th>
            <th>IsLgbt</th>
            <th>isVeteran</th>
            <th>Is Disable</th>
            <th>Is Percentage</th>
            <th>Salary</th>

          </thead>
          <tbody>
            {leaderDiversities && leaderDiversities.map((leaderDiversity, index) => (
              <tr key={leaderDiversity.id}>

                <td>{leaderDiversity.name}</td>
                <td>{leaderDiversity.companyName}</td>
                {/* <td>{leaderDiversity.mobileNumber}</td>
           <td>{leaderDiversity.emailId}</td> */}
                <td>{leaderDiversity.gender}</td>
                <td>{leaderDiversity.nationality}</td>
                <td>{leaderDiversity.religion}</td>
                <td>{leaderDiversity.maritialStatus}</td>
                <td>{leaderDiversity.sexualOrientation}</td>
                <td>{leaderDiversity.politicalOrientation}</td>
                <td>{leaderDiversity.color}</td>
                <td>{leaderDiversity.language}</td>
                <td>{leaderDiversity.ethnicity}</td>
                <td>{leaderDiversity.isLgbt}</td>
                <td>{leaderDiversity.isVeteran}</td>
                <td>{leaderDiversity.isDisable}</td>
                <td>{leaderDiversity.sharePercentage}</td>
                <td>{leaderDiversity.salary}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}