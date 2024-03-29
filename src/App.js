/*
 * @Author: wangshan
 * @Date: 2022-01-27 17:47:47
 * @LastEditors: wangshan
 * @LastEditTime: 2022-03-03 11:43:23
 * @Description:
 */
import Home from "@/pages/home/home.js";
import About from "@/pages/about/about.js";
import Layout from "@/layout/basicLayout.js";
import { Routes, Route, Navigate } from "react-router-dom";
import "@/App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
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
