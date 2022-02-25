/*
 * @Author: wangshan
 * @Date: 2022-02-26 03:05:20
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 03:15:05
 * @Description:
 */
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <main>
        <h2>PachVerb</h2>
        <p>
          全面的分析经典数据结构特点。从概念触发，在借助源码实战分析，经典数据结构的巧妙构思。
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
