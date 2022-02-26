/*
 * @Author: wangshan
 * @Date: 2022-02-26 02:21:24
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 03:44:56
 * @Description:
 */
const path = require("path");
const CracoLessPlugin = require("craco-less");

const pathRsolve = (pth) => path.join(__dirname, pth);

module.exports = {
  webpack: {
    alias: {
      "@": pathRsolve("src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
