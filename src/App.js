import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloudServerOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { NavLink, Route } from "react-router-dom";
import { Clock } from "./Clock/Clock";
import SearchContainer from "./Search/SearchContainer";
import InfoSearch from "./InfoSearch/InfoSearch";
import YourWeatherContainer from "./YourWeather/YourWeatherContainer";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <header className="header"><Clock /></header>
        <main>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/search">Search your weather:</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<CloudServerOutlined />}>
                <NavLink to="/infosearch">How to search:</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 , height: "20px" }}>
              {React.createElement(
                this.state.collapsed ? ArrowRightOutlined : ArrowLeftOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background contentimg"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route exact path="/search" render={() => <SearchContainer/>} />
              <Route exact path="/infosearch" render={() => <InfoSearch />} />
              <Route exact path="/yourweather" render={() => <YourWeatherContainer />} />
            </Content>
          </Layout>
        </Layout>
        </main>
        <footer className="footer">Weather App 1.0</footer>
      </div>
    );
  }
}

export default App;
