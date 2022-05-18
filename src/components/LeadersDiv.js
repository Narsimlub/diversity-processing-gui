import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeaderDiversityService from "../services/LeaderDiversityService";
export default class LeadersDiv extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeSearchEthnicity = this.onChangeSearchEthnicity.bind(this);
    this.onChangeSearchGender = this.onChangeSearchGender.bind(this);
    this.onChangeSearchIsDisable = this.onChangeSearchIsDisable.bind(this);
    this.onChangeSearchIisLgbt = this.onChangeSearchIsLgbt.bind(this);
    this.onChangeSearchIsVeteran = this.onChangeSearchIsVeteran.bind(this);
    this.onChangeSearchSharePercentage = this.onChangeSearchSharePercentage.bind(this);
    

    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    //this.removeAllTutorials = this.removeAllTutorials.bind(this);
    ///this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      leaderDiversities: [],
      currentTutorial: null,
      currentIndex: -1,
      searchName: "",
      searchEthnicity: "",
      searchGender: "",
      searchIsDisable: "",
      searchIsLgbt: "",
      searchIsVeteran: "",
      searchSharePercentage: ""   
     };
  }
  componentDidMount() {
    this.retrieveTutorials();
  }
  onChangeSearchName(e) {
    const searchName = e.target.value;
    this.setState({
      searchName: searchName
    });
  }
  onChangeSearchGender(e) {
    const searchGender = e.target.value;
    this.setState({
      searchGender: searchGender
    });
  }
  onChangeSearchIsDisable(e) {
    const searchIsDisable = e.target.value;
    this.setState({
      searchIsDisable: searchIsDisable
    });
  }
  onChangeSearchIsLgbt(e) {
    const searchIsLgbt = e.target.value;
    this.setState({
      searchIsLgbt: searchIsLgbt
    });
  }
  onChangeSearchEthnicity(e) {
    const searchEthnicity = e.target.value;
    this.setState({
      searchEthnicity: searchEthnicity
    });
  }
  onChangeSearchIsVeteran(e) {
    const searchIsVeteran = e.target.value;
    this.setState({
      searchIsVeteran: searchIsVeteran
    });
  }
  onChangeSearchSharePercentage(e) {
    const searchSharePercentage = e.target.value;
    this.setState({
      searchSharePercentage: searchSharePercentage
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
    const { searchName,searchEthnicity,searchGender,searchSharePercentage,searchIsDisable,searchIsLgbt,searchIsVeteran,leaderDiversities, currentTutorial, currentIndex } = this.state;
    return (
      <div className="list row"> 
      <h1>Leaders</h1>
      <div className="col-md-8">
    <div className="input-group mb-6">
    <input
        type="text"
        className="form-control"
        placeholder="name"
        value={searchName}
        onChange={this.onChangeSearchName}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Ethnicity"
        value={searchEthnicity}
        onChange={this.onChangeSearchEthnicity}
      />
      
      <input
        type="text"
        className="form-control"
        placeholder="Gender"
        value={searchGender}
        onChange={this.onChangeSearchGender}
      />
      
      <input
        type="text"
        className="form-control"
        placeholder="sharePercentage"
        value={searchSharePercentage}
        onChange={this.onChangeSearchSharePercentage}
      />
      <input
        type="text"
        className="form-control"
        placeholder="IsDisable"
        value={searchIsDisable}
        onChange={this.onChangeSearchIsDisable}
      />
      <input
        type="text"
        className="form-control"
        placeholder="IsLgbt"
        value={searchIsLgbt}
        onChange={this.onChangeSearchIsLgbt}
      />
      <input
        type="text"
        className="form-control"
        placeholder="IsVeteran"
        value={searchIsVeteran}
        onChange={this.onChangeSearchIsVeteran}
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