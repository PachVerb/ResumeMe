/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 01:50:55
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
function test() {
  setTimeout(() => {
    console.log(111);
  }, 100);
}
