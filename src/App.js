/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 03:50:41
 * @Description:
 */
import Home from "@/pages/home/home.js";
import About from "@/pages/about/about.js";
import { Routes, Route } from "react-router-dom";
import "@/App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
