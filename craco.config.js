/*
 * @Author: wangshan
 * @Date: 2022-02-26 02:21:24
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 02:24:37
 * @Description:
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
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
