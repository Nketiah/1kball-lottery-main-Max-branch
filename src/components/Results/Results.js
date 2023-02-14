import React, { useState, useEffect } from "react";
import { Wrapper, Content, Heading, TableHeader } from "./styles";
import images from "../../constants/images"
import Text from "../Text/Text";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import datas from "../../data.json";
import { Table, Pagination, Spin } from "antd";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io"
import ApiData from "../Apis/ApiData";



// import {CustomMaterialPagination} from "./Material";

const Results = ({hidePage}) => {


  const [toggle, setToggle] = useState(false);
  const [toggleArray, setToggleArray] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [game_names, setGameNames] = useState([]);
  const [game_category, setGameCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(datas.length);
  const [gameNamePlaceholder, setGameNamePlaceholder] = useState("5D GAME")
 

 

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
  
    //fetchData("http://192.168.199.120/1kball/dev/api/v1/1kball1min");
    
    fetchDefaultData()

    getFirstGame()
    


  }, []);


  


  // http://192.168.199.120/1kball/dev/
  const fetchDefaultData = async (url = "http://89.47.162.79/1kball/dev/api/v1/gamecat") => {
    const {data} = await axios.get(url)

         

    //const newData = data.filter((element) => element !== data.))

    setGameNames(data);
    setLoading(false);

    console.log("Game names  ",data);
    // <ApiData data={[1,3,4]} />

 }


 const getFirstGame = async () => {
    const response = await axios.get("http://89.47.162.79/1kball/dev/api/v1/1kball1min")
    setData(response.data);
 }



 const getEachDataFromUrl = async (url, index, count, e) => {

      e.target.className = "is-active";
      
      e.currentTarget.addEventListener("blur", (ex)=> {
        e.target.className = "";
      })
    
   const {data} = await axios.get(url)
 
    setData(data); 

 }




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
   
 


  const getGameCategoryData = async (uri, game_name) => {
    const {data} = await axios.get(uri);
    let count = 0
     data.forEach((d)=> {
      d.count = count++
    })
    setGameCategory(data)
    setGameNamePlaceholder(game_name)
  }

 
  /////My custom code


  if(hidePage)  return null

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
            className="nav m-margin flex-column nav-pills me-2 col-lg-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="horizontal"
          >
           {/* {
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
              {element.category_name}
            </button>
            )) } */}


           {  
             game_names.map((game, parent_index)=>
             
            //  <li className="nav-item dropdown" key={index}>
            <li className="" key={parent_index}>
            
              <a
                className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href={`${'#collapsePane_' + game.catid}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapsePane"
                onClick={()=> getGameCategoryData(game.game_url,game.category_name)}
              >
                {game.category_name} <IoIosArrowDown />
              </a>
              <ul
                className="collapse nav-list-pane  bg-white text-black"
                id={`${'collapsePane_' + game.catid}`}
              >
                {
                  game_category.map((category, index)=>
                  <li key={index}>
                  
                  <a
                    onClick={(e)=> getEachDataFromUrl(category.data_url, index, category.count, e)}
                    className='nav-link nav-links-list m-links-list-item nav-item is-active'
                    id={`${'v-pills-profile-tab_' + index}`}
                    data-bs-toggle={`${'pill_' + index + '_' + parent_index}`}
                    data-bs-target={`${'#v-pills-profile_' + index}`}
                    type="button"
                    role="tab"
                    href="#"
                    aria-controls={`${'v-pills-profile_' + index}`}
                    aria-selected="false"
                  >
                   <p style={{marginLeft:"3px"}}> {category.game_name}</p>
                  </a>
                </li>
                   )
                 }

              </ul>
            </li>

            )
           }



            {/* <li className="nav-item dropdown">
           
              <a
                className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapsePane"
                role="button"
                aria-expanded="false"
                aria-controls="collapsePane"
              >
                3 D <img src={images.downArrowIcon} alt="ss" />
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
        
              </ul>
            </li>


 */}






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
                    <div className="table-responsive" style={{zIndex:"0px"}}>
                      <TableHeader>{gameNamePlaceholder}</TableHeader>
                      <Spin spinning={loading}>
                      <Table
                      style={{zIndex:"0px"}}
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
                      style={{zIndex:"0px" , position:"relative"}}
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
