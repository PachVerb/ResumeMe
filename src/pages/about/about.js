/*
 * @Author: wangshan
 * @Date: 2022-02-26 03:05:20
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 21:10:55
 * @Description:
 */
import React from "react";
import ForceGraph3D from "3d-force-graph";
export default class About extends React.Component {
  state = {
    grah: null,
  };
  componentDidMount() {
    // // console.log(window.SpriteText);
    this.grah = ForceGraph3D()(document.getElementById("3d-graph"))
      .jsonUrl("/mock/miserable.json")
      .nodeAutoColorBy("group")
      .nodeThreeObject((node) => {
        const sprite = new window.SpriteText(node.id);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      });
    this.grah.width(window.innerWidth);
    this.grah.height(window.innerHeight);
    this.grah.d3Force("charge").strength(-120);
  }
  componentWillUnmount() {
    this.grah.onEngineStop();
  }
  render() {
    return <div id="3d-graph"></div>;
  }
}
