/*
 * @Author: wangshan
 * @Date: 2022-02-26 03:05:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 04:29:01
 * @Description:
 */
import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  GithubOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./home.less";

export default class About extends React.Component {
  state = {
    current: "Home",
  };
  constructor(props) {
    super(props);
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
      <div style={{ width: "100%" }}>
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
              <Link to="/">Home</Link>
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
        <div className="content"></div>
      </div>
    );
  }
}
