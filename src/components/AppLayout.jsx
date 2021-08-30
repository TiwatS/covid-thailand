import React from 'react'
import { Layout, Menu } from 'antd';
import CovidDay from './CovidDay';
import CovidCity from './CovidCity';
import { Typography } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';

const { Title } = Typography;

// const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;


function AppLayout() {
  return (
    //   <Layout className="layout">
    //   <Header>
    //     <Menu theme="dark" mode="horizontal">
    //         <Menu.Item >Covid Day</Menu.Item>
    //         <Menu.Item >Covid Day</Menu.Item>
    //     </Menu>
    //   </Header>

    //   <Content style={{ padding: '0 50px' }}>
    //       {/* <CovidDay/> */}
    //       <CovidCity/>
    //   </Content>
    //   <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    // </Layout>
    <Layout>
      <Header>
        <Title style={{ color: 'white', marginTop: "20px" }} level={3}>สถานการณ์ผู้ติดเชื้อ COVID-19 อัพเดทรายวัน</Title>
      </Header>
      <Layout>
        <Sider width={210} className="site-layout-background">
          <Menu
            mode="inline" style={{ height: '100%', borderRight: 0 }}>
            {/* <Router> */}
            <Menu.Item>
              <Link to="/">ประจำวัน</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/insert">ประจำวัน แยกตามรายจังหวัด</Link>
            </Menu.Item>
            {/* </Router> */}
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* <Router> */}
            <Switch>
              <Route exact path="/">
                <CovidDay />
              </Route>
              <Route exact path="/insert">
                <CovidCity />
              </Route>
            </Switch>
            {/* </Router> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
