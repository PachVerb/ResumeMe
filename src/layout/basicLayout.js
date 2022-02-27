/*
 * @Author: wangshan
 * @Date: 2022-02-27 04:04:01
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 22:07:05
 * @Description:
 */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, Affix } from "antd";
import {
  HomeOutlined,
  GithubOutlined,
  SolutionOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import "./layout.less";

export default class BasicLayout extends React.Component {
  state = {
    current: "Home",
  };
  componentDidMount() {
    if (window.location.pathname != "/home") {
      window.location.replace("/home");
    }
  }
  handleClick(e) {
    return (e) => {
      console.log(this, e);
      this.setState({ current: e.key });
    };
  }

  render() {
    const { current } = this.state;
    return (
      <div className="layout">
        <div className="nav">
          <Affix>
            <div className="nav">
              <Menu
                theme="dark"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  border: "none",
                }}
                onClick={this.handleClick()}
                selectedKeys={current}
                mode="horizontal"
              >
                <Menu.Item key="Home" icon={<HomeOutlined />}>
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="About" icon={<SolutionOutlined />}>
                  <Link to="/about">AboutMe</Link>
                </Menu.Item>
                <Menu.Item key="Github" icon={<GithubOutlined />}>
                  <a target={"_blank"} href="https://github.com/PachVerb">
                    GitHub
                  </a>
                </Menu.Item>
              </Menu>
            </div>
          </Affix>
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="tooBox">
          <ToolOutlined style={{ fontSize: "24px" }} twoToneColor="#eb2f96" />
        </div>
      </div>
    );
  }
}
