import React, { useEffect, useState } from 'react'
import { Typography } from 'antd';
import { Card, Col, Row } from 'antd';
import { Statistic } from 'antd';
import dayjs from 'dayjs';
import axios from 'axios';
const { Title } = Typography;

export default function CovidDay() {
    const [data, setData] = useState([])
    async function getCovidDay() {
        const covid = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
        setData(covid.data[0])
    }
    useEffect(() => {
        getCovidDay()
    }, [])
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "30px" }} >
                <Title level={2} strong  >รายงานสถานการณ์ COVID-19 ประจำวันนี้</Title>
            </div>
            <div className="site-card-wrapper">
                <Row gutter={24}>
                    <Col span={8} offset={4}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="Date" bordered={false}>
                            <Title level={3}>{dayjs(data.txn_date).format('DD MMM YYYY')}</Title>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="Update Date" bordered={false}>
                            <Title level={3}>{dayjs(data.update_date).format('DD MMM YYYY')}</Title>
                        </Card>
                    </Col>
                </Row>
            </div>,
            <div className="site-card-wrapper">
                <Row gutter={24}>
                    <Col span={8} offset={4}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="New case" bordered={false}>
                            <Statistic
                                value={data.new_case}
                                precision={0}
                                valueStyle={{ color: '#FF0000' }}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="Total case" bordered={false}>
                            <Statistic
                                value={data.total_case}
                                precision={0}
                                valueStyle={{ color: '#FF0000' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>,
            <div className="site-card-wrapper">
                <Row gutter={24}>
                    <Col span={8} offset={4}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="New case excludeabroad" bordered={false}>
                            <Statistic
                                value={data.new_case_excludeabroad}
                                precision={0}
                                valueStyle={{ color: '#FF0000' }}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ height: "200px", textAlign: "center" }} title="Total case excludeabroad" bordered={false}>
                            <Statistic
                                value={data.total_case_excludeabroad}
                                precision={0}
                                valueStyle={{ color: '#FF0000' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>,
        </>
    )
}

