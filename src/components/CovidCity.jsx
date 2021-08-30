import React, { useEffect, useState } from 'react'
import { Table, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;
const columns = [
  {
    title: 'Date',
    dataIndex: 'txn_date',
    key: 'txn_date',
  },
  {
    title: 'Province',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: 'New case',
    dataIndex: 'new_case',
    key: 'new_case',
  },
  {
    title: 'Total case',
    dataIndex: 'total_case',
    key: 'total_case',
  },
  {
    title: 'New case excludeabroad',
    dataIndex: 'new_case_excludeabroad',
    key: 'new_case_excludeabroad',
  },
  {
    title: 'Total case excludeabroad',
    dataIndex: 'total_case_excludeabroad',
    key: 'total_case_excludeabroad',
  },
  {
    title: 'Update Date',
    dataIndex: 'update_date',
    key: 'update_date',
  },
];

export default function CovidCity() {
  const [data, setData] = useState([])
  async function getCovidCity() {
    const covid = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
    setData(covid.data)

  }
  useEffect(() => {
    getCovidCity()

  }, [])
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }} >
        <Title level={2} strong  >รายงานสถานการณ์ COVID-19 ประจำวัน แยกตามรายจังหวัด</Title>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
