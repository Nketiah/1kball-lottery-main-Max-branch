import { Table, Pagination } from 'antd';
import React, { useState, useEffect } from "react";
import datas from '../../data.json'

// const columns = [
//   { title: 'Name', dataIndex: 'name', key: 'name' },
//   { title: 'Age', dataIndex: 'age', key: 'age' },
// ];

const columns = [
    {
      title: '#',
      selector: (row, i) => i+1,
      dataIndex: 'dob',
      key: 'dob'
      // sortable: true,
    },
    {
      title: 'Number',
      selector: (row, i) => row.name,
    //   sortable: true,
    dataIndex: 'name',
    key: 'name',
    },
    {
      title: 'DrawDate',
      selector: (row, i) => row.phone,
    //   sortable: true,
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'DrawTime',
      dataIndex: 'email',
      key: 'email',
      selector: (row, i) => row.email,
      sortable: true,
      className: 'letsgo',
      rowId: "ships"
    },
  ];
const datax = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 32 },
  { name: 'Bob', age: 21 },
];


const MyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(datas.length);

  console.log(currentPage)
  console.log(pageSize)
  console.log(total)

useEffect(() => {
    async function fetchData() {
      // const response = await fetch(
      //   "../../../data.json"
      // );
      const response =  datas
      // const json = await response.json();
      setData(response);
    }
    fetchData();
  }, [data]);
//   console.log(datas)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    console.log(size)
    setCurrentPage(1);
  }
  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
  };
  const paginationProps = {
    current: currentPage,
    pageSize: pageSize,
    total: total,
    onChange: handlePageChange,
    showSizeChanger: false,
    onShowSizeChange: handlePageSizeChange,
    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
  };
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <>
      <Table columns={columns} dataSource={getData(currentPage, pageSize)} pagination={false} {...paginationProps} />
      <Pagination {...paginationProps} itemRender={itemRender} />
      {/* <Pagination total={500} itemRender={itemRender} /> */}
      {/* <Pagination current={currentPage} total={100} onChange={(page, size) => {setCurrentPage(page); setPageSize(size)}} /> */}

    </>
  );
}
export default MyTable;
