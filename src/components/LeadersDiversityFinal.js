import Pagination from "@material-ui/lab/Pagination";
import { useTable } from "react-table";
import React, { useState, useEffect, useMemo, useRef } from "react";

import LeaderDiversityService from "../services/LeaderDiversityService";

  const LeadersDiversityFinal = (props) => {
    const [companies, setCompanies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const companiesRef = useRef();
  
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
  
    const pageSizes = [20,30, 50];
  
    companiesRef.current = companies;
  
    const onChangeSearchTitle = (e) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
  
    const getRequestParams = (searchTitle, page, pageSize) => {
      let params = {};
  
      if (searchTitle) {
        params["name"] = searchTitle;
      }else{
        params["name"] ="";
      }
  
      if (page) {
        params["page"] = page - 1;
      }
  
      if (pageSize) {
        params["size"] = pageSize;
      }
  
      return params;
    };
  
    const retrieveCompanies = () => {
      const params = getRequestParams(searchTitle, page, pageSize);
      console.info(searchTitle);
      console.info(params.searchTitle);
      LeaderDiversityService.getLeadersbyParams(params)
        .then((response) => {
          const { companies, totalPages } = response.data;
  
          setCompanies(companies);
          setCount(totalPages);
  
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    useEffect(retrieveCompanies, [page, pageSize]);
  
    const refreshList = () => {
      retrieveCompanies();
    };
  
    const findByTitle = () => {
      setPage(1);
      retrieveCompanies();
    };
  
    const openCompanies = (rowIndex) => {
      const id = companiesRef.current[rowIndex].id;
  
      props.history.push("/tutorials/" + id);
    };
  
    const handlePageChange = (event, value) => {
      setPage(value);
    };
  
    const handlePageSizeChange = (event) => {
      setPageSize(event.target.value);
      setPage(1);
    };
  
    const columns = useMemo(
      () => [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Company Name",
          accessor: "companyName",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },,
        {
          Header: "Ethnicity",
          accessor: "ethnicity",
        },
        {
          Header: "IsLgbt",
          accessor: "isLgbt",
        },
        {
          Header: "IsVeteran",
          accessor: "isVeteran",
        },
        {
          Header: "Actions",
          accessor: "actions",
          Cell: (props) => {
            const rowIdx = props.row.id;
            return (
              <div>
                <span onClick={() => openCompanies(rowIdx)}>
                  <i className="far fa-view action mr-2"></i>
                </span>
              </div>
            );
          },
        },
      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data: companies,
    });
  
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
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
  
  export default LeadersDiversityFinal;