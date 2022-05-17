import React, { useState, useEffect, useMemo, useRef,Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import CompanyDiversityService from "../services/CompanyDiversityService";
export default class CompanyDiversityFinal extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCompanyName = this.onChangeSearchCompanyName.bind(this);
        this.retrieveCompanyDiversityInfos = this.retrieveCompanyDiversityInfos.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
       // this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.page = this.setPage.bind(this);
        this.count = this.setCount.bind(this);
        this.pageSize = this.setPageSize.bind(this);
        this.pageSizes = [10, 20,30, 50,100];
        this.searchCompanyName = this.onChangeSearchCompanyName.bind(this);
        
        
        this.state = {
          companyDiversityInfos: [],
          currentCompanyDiversityInfo: null,
          currentIndex: -1,
          searchCompanyName: ""
        };
      }
      onChangeSearchCompanyName = (e) => {
        const searchCompanyName = e.target.value;
        setSearchCompanyName(searchCompanyName);
      };

      getRequestParams(searchCompanyName, page, pageSize)  {
        let params = {};
        if (searchCompanyName) {
          params["companyName"] = searchCompanyName;
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
        this.retrieveCompanyDiversityInfos();
      }
      onChangeCompanyName(e) {
        const companyName = e.target.value;
        this.setState({
          companyName: companyName
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
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Company"
            value={searchCompanyName}
            onChange={onChangeSearchCompanyName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCompanyName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 list">
        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};
      
      
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