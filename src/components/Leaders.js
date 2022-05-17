import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeaderDiversityService from "../services/LeaderDiversityService";
export default class Leaders extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
          leaderDiversities: [],
          currentTutorial: null,
          currentIndex: -1,
          searchTitle: ""
        };
      }
      const [page, setPage] = useState(1);
      const [count, setCount] = useState(0);
      const [pageSize, setPageSize] = useState(3);
      const pageSizes = [10, 20, 50,100];
      const onChangeSearchTitle = (e) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
      };
   getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};
    if (searchTitle) {
      params["title"] = searchTitle;
    }
    if (page) {
      params["page"] = page - 1;
    }
    if (pageSize) {
      params["size"] = pageSize;
    }
    return params;
  };
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