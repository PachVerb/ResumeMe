/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 04:33:34
 * @Description:
 */
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home/home.js";
import About from "@/pages/about/about.js";
import "@/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
