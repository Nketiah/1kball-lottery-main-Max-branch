import React, { useState, useEffect } from "react";
import { Wrapper, Content, Heading, TableHeader } from "./styles";
import images from "../../constants/images"
import Text from "../Text/Text";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import datas from "../../data.json";
import { Table, Pagination, Spin } from "antd";
import axios from "axios";

// import {CustomMaterialPagination} from "./Material";

const Results = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleArray, setToggleArray] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [game_names, setGameNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(datas.length);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleIconClick = (i) => {
    const temp = [...toggleArray];
    temp[i] = !temp[i];
    setToggleArray(temp);
  };

  useEffect(() => {
    // async function fetchData(url) {
     
    //   const response = await fetch(
    //      url
    //   ); 
     
    //   const json = await response.json();
    //   setData(json);
    //   setLoading(false);
    // }
  
    // fetchData("http://192.168.199.120/1kball/dev/api/v1/1kball1min");
    
    fetchDefaultData()

     getFirstGame()
    


  }, []);


  const fetchDefaultData = async (url = "http://192.168.199.120/1kball/dev/") => {
    const {data} = await axios.get(url)

    setGameNames(data);
    setLoading(false);

 }


 const getFirstGame = async () => {
    const response = await axios.get("http://192.168.199.120/1kball/dev/api/v1/1kball1min")
    setData(response.data);

 }



 const getEachDataFromUrl = async (url) => {
   const {data} = await axios.get(url)
   setData(data);
 }


//  const fetchGamNames = async () => {
//   const {data} = await axios.get("http://192.168.199.120/1kball/dev/")
//      data.forEach(ele => {
//       setGameNames((prev)=> [...prev, {game_name: ele.game_name, url: ele.data_url}])
//       console.log("ELE", ele)
//   });
  
// }
// console.log(" Lenght..... ",data.length)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    // console.log(size);
    setCurrentPage(1);
  };
  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    // console.log(pageSize);
    return data.slice((current - 1) * pageSize, current * pageSize);
  };
  const [sortedData, setSortedData] = useState(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));

  const handleTableChange = (pagination, filters, sorter) => {
    const { field, order } = sorter;
    let newData = [...data];
    if (field) {
      newData = newData.sort((a, b) => {
        if (order === 'ascend') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });
      setSortedData(newData);
    }
  }

  const handleTableChanges = (pagination, filters, sorter) => {
    const newData = [...data];
    newData.sort((a, b) => {
      const sortKey = sorter.field;
      console.log(sortKey)
      if (sortKey === 'title') {
        return a[sortKey].localeCompare(b[sortKey]);
      }
      if (sortKey === 'userId') {
        return a[sortKey] - b[sortKey];
      }
    });
    return setSortedData(newData);
  };

  const paginationProps = {
    current: currentPage,
    pageSize: pageSize,
    total: total,
    onChange: handlePageChange,
    showSizeChanger: true,
    onShowSizeChange: handlePageSizeChange,
    showTotal: (total, range) =>
      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
  };


  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  
  const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);

  const columns = [
    // {
    //   title: "#",
    //   dataIndex: "id",
    //   key: "id",
    // },
    {
      title: (filters, sortOrder) => (
        <>
        <img src={images.ArrowDownIcon} alt="ss" />
        <span>DrawCount</span>
        </>
      ),
      sorter: (a,b) => sorter(a.draw_count,b.draw_count),
      // sorter: (a, b) => a.age - b.age,
    sortDirections: ['descend', "ascend"],
      dataIndex: "draw_count",
      
      key: "draw_count",
    },
    {
      title: () => (
        <>
        <img src={images.ArrowIcon} alt="ss" />
        <span>DrawDate</span>
        </>
      ),
      
      sorter: (a, b) => sorter(a.draw_date,b.draw_date),
    
    sortDirections:  ['ascend', 'descend'],
      dataIndex: "draw_date",
      key: "draw_date",
    },
    {
      title: (filters, sortOrder) => (
        <>
        <img src={images.ArrowIcon} alt="ss" />
        <span>DrawNumber</span>
        </>
      ) ,
      sorter: (a, b) => sorter(a.draw_number,b.draw_number),

      dataIndex: "draw_number",
      key: "draw_number",
      className: "letsgo",
      rowId: "ships",
    },
    {
      title: (filters, sortOrder) => (
        <>
        <img src={images.ArrowIcon} alt="ss" />
        <span>DrawTime</span>
        </>
      ) ,
      sorter: (a, b) => sorter(a.draw_time,b.draw_time),

      dataIndex: "draw_time",
      key: "draw_time",
      className: "letsgo",
      rowId: "ships",
    },
  ];
  //const getActions = (type) => {console.log('getting actions')}
  //const paginatedData = currentPage === 1 ? sortedData : getData(currentPage, pageSize);
  /////My custom code
   
  const getDataFromApi = async (uri) => {
    //alert(uri)
  
    //fetchDefaultData(uri)
    getEachDataFromUrl(uri)
  }

  /////My custom code
  return (
    <Wrapper>
      <Content>
        {/* <Text heading={`1K Ball Results`} body="The latest 1kball results are published here immediately after the draw has taken place.
You can view the latest numbers including detailed information of winners and prizes."/> */}
        {/* <Text style={{marginTop: "0"}} heading={`Latest Results`} body="Here are the official LIW Games draw results for A weeks."/> */}
        <div className="text-container">
          <Heading>1K Ball Results</Heading>
          <p>
            The latest 1kball results are published here immediately after the
            draw has taken place.
          </p>
          <p>
            You can view the latest numbers including detailed information of
            winners and prizes.
          </p>
        </div>
        <div className="text-container" style={{ margin: "4rem 0" }}>
          <Heading>Latest Results</Heading>
          <span>Here are the official LIW Games draw results for A weeks.</span>
        </div>
        <div className="d-flex align-items-start justify-content-stretch">
          <div
            className="nav m-margin flex-column nav-pills me-3 col-lg-2"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="horizontal"
          >
           {
            game_names.map((element, index)=> (

            <button
              onClick={(e)=> getDataFromApi(e.target.dataset.uri)}
              className={`nav-link ${index === 0 ? "active" : null}`}
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              data-uri={element.data_url}
            >
              {element.game_name}
            </button>
            )) }

            {/* <li className="nav-item dropdown">
              work on styling the button
              <a
                className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapsePane"
                role="button"
                aria-expanded="false"
                aria-controls="collapsePane"
              >
                5 D <img src={images.downArrowIcon} alt="ss" />
              </a>
              <ul
                className="collapse nav-list-pane  bg-white text-black"
                id="collapsePane"
              >
                <li>
                  <a
                    className="nav-link nav-links-list m-links-list-item"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    href="#"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    data-uri="http://192.168.199.120/1kball/dev/api/v1/"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link m-links-list-item"
                    id="v-pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-disabled"
                    aria-selected="false"
                    data-uri="http://192.168.199.120/1kball/dev/api/v1/"
                  >
                    Another
                  </a>
                </li>
              </ul>
            </li> */}
           
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabIndex="0"
            >
              <div
                className="col-lg-12 m-col-table"
                style={{  }}
              >
                <div className="card shadow border-0">
                  <div className="card-body p-5 bg-white ">
                    <div className="table-responsive">
                      <TableHeader>5 D .. 5D1</TableHeader>
                      <Spin spinning={loading}>
                      <Table
                        columns={columns}
                        dataSource={getData(currentPage, pageSize)}
                        // dataSource={paginatedData}
                        pagination={false}
                        onChange={handleTableChanges}
                        rowClassName={'no-hover'}
                        
                      />
                      <Pagination
                        {...paginationProps}
                        itemRender={itemRender}
                      />
                      </Spin>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabIndex="0"
            >
              <div
                className="col-lg-12 m-col-table"
                style={{ paddingLeft: "0" }}
              >
                <div className="card shadow border-0">
                  <div className="card-body p-5 bg-white ">
                    <div className="table-responsive">
                      <TableHeader>5 D .. 5D1</TableHeader>
                      <Spin spinning={loading}>
                      <Table
                        columns={columns}
                        dataSource={getData(currentPage, pageSize)}
                        // dataSource={paginatedData}
                        pagination={false}
                        onChange={handleTableChanges}
                        rowClassName={'no-hover'}
                        
                      />
                      <Pagination
                        {...paginationProps}
                        itemRender={itemRender}
                      />
                      </Spin>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabIndex="0"
            >
              <div
                className="col-lg-12 m-col-table"
                style={{ paddingLeft: "0" }}
              >
                <div className="card shadow border-0">
                  <div className="card-body p-5 bg-white ">
                    <div className="table-responsive">
                      <TableHeader>5 D .. 5D1</TableHeader>
                      <Spin spinning={loading}>
                      <Table
                        columns={columns}
                        dataSource={getData(currentPage, pageSize)}
                        // dataSource={paginatedData}
                        pagination={false}
                        onChange={handleTableChanges}
                        rowClassName={'no-hover'}
                        
                      />
                      <Pagination
                        {...paginationProps}
                        itemRender={itemRender}
                      />
                      </Spin>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabIndex="0"
            >
              <div
                className="col-lg-12 m-col-table"
                style={{ paddingLeft: "0" }}
              >
                <div className="card shadow border-0">
                  <div className="card-body p-5 bg-white ">
                    <div className="table-responsive">
                      <TableHeader>5 D .. 5D1</TableHeader>
                      <Spin spinning={loading}>
                      <Table
                        columns={columns}
                        dataSource={getData(currentPage, pageSize)}
                        // dataSource={paginatedData}
                        pagination={false}
                        onChange={handleTableChanges}
                        rowClassName={'no-hover'}
                        
                      />
                      <Pagination
                        {...paginationProps}
                        itemRender={itemRender}
                      />
                      </Spin>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabIndex="0"
            >
              <div
                className="col-lg-12 m-col-table"
                style={{ paddingLeft: "0" }}
              >
                <div className="card shadow border-0">
                  <div className="card-body p-5 bg-white ">
                    <div className="table-responsive">
                      <table
                        id="example"
                        style={{ width: "100%" }}
                        className="table "
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>
                              <img src={images.ArrowDownIcon} alt="ss" />
                              Number
                            </th>
                            <th>
                              <img src={images.ArrowIcon} alt="ss" />
                              DrawDate
                            </th>
                            <th>
                              <img src={images.ArrowIcon} alt="ss" />
                              DrawDateXXX
                            </th>
                            <th>
                              <img src={images.ArrowIcon} alt="ss" />
                              DrawTime
                            </th>
                            {/* <th>Start date</th>
                  <th>Salary</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                          </tr>
                          <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                          </tr>
                          <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                          </tr>
                          <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                          </tr>
                          <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                          </tr>
                          <tr>
                            <td>Brielle Williamson</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                          </tr>
                          <tr>
                            <td>Herrod Chandler</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                          </tr>
                          <tr>
                            <td>Rhona Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                          </tr>
                          <tr>
                            <td>Colleen Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                          </tr>
                          <tr>
                            <td>Sonya Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                          </tr>
                          <tr>
                            <td>Jena Gaines</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>Quinn Flynn</td>
                            <td>Support Lead</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                          </tr>
                          <tr>
                            <td>Charde Marshall</td>
                            <td>Regional Director</td>
                            <td>San Francisco</td>
                            <td>36</td>
                          </tr>
                          <tr>
                            <td>Haley Kennedy</td>
                            <td>Senior Marketing Designer</td>
                            <td>London</td>
                            <td>43</td>
                          </tr>
                          <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>Michael Silva</td>
                            <td>Marketing Designer</td>
                            <td>London</td>
                            <td>66</td>
                          </tr>
                          <tr>
                            <td>Paul Byrd</td>
                            <td>Chief Financial Officer (CFO)</td>
                            <td>New York</td>
                            <td>64</td>
                          </tr>
                          <tr>
                            <td>Gloria Little</td>
                            <td>Systems Administrator</td>
                            <td>New York</td>
                            <td>59</td>
                          </tr>
                          <tr>
                            <td>Bradley Greer</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>41</td>
                          </tr>
                          <tr>
                            <td>Dai Rios</td>
                            <td>Personnel Lead</td>
                            <td>Edinburgh</td>
                            <td>35</td>
                          </tr>
                          <tr>
                            <td>Jenette Caldwell</td>
                            <td>Development Lead</td>
                            <td>New York</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>Yuri Berry</td>
                            <td>Chief Marketing Officer (CMO)</td>
                            <td>New York</td>
                            <td>40</td>
                          </tr>
                          <tr>
                            <td>Caesar Vance</td>
                            <td>Pre-Sales Support</td>
                            <td>New York</td>
                            <td>21</td>
                          </tr>
                          <tr>
                            <td>Doris Wilder</td>
                            <td>Sales Assistant</td>
                            <td>Sidney</td>
                            <td>23</td>
                          </tr>
                          <tr>
                            <td>Angelica Ramos</td>
                            <td>Chief Executive Officer (CEO)</td>
                            <td>London</td>
                            <td>47</td>
                          </tr>
                          <tr>
                            <td>Gavin Joyce</td>
                            <td>Developer</td>
                            <td>Edinburgh</td>
                            <td>42</td>
                          </tr>
                          <tr>
                            <td>Jennifer Chang</td>
                            <td>Regional Director</td>
                            <td>Singapore</td>
                            <td>28</td>
                          </tr>
                          <tr>
                            <td>Brenden Wagner</td>
                            <td>Software Engineer</td>
                            <td>San Francisco</td>
                            <td>28</td>
                          </tr>
                          <tr>
                            <td>Fiona Green</td>
                            <td>Chief Operating Officer (COO)</td>
                            <td>San Francisco</td>
                            <td>48</td>
                          </tr>
                          <tr>
                            <td>Shou Itou</td>
                            <td>Regional Marketing</td>
                            <td>Tokyo</td>
                            <td>20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <EmptyComponent />
    </Wrapper>
  );
};

export default Results;
// const sortData = (data) => {
//   // Call slice to create a new Array and prevent mutating it if it's stored in state
//   return data.slice().sort((a, b) => a.myKey - b.myKey);
// }
// const sortableColumns = columns.map(column => {
//   const { sorter, dataIndex, ...otherColumnProps } = column;

//   if (sorter) {
//     const { compare, ...otherSorterProps } = sorter;

//     return {
//       ...otherColumnProps,
//       dataIndex,
//       sorter: {
//         compare: (rowA, rowB) => compare(rowA[dataIndex], rowB[dataIndex]),
//         ...otherSorterProps,
//       }
//     };
//   }

//   return column;
// });