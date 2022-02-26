/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 03:51:01
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@/assets/style/index.css";
import App from "@/App";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
