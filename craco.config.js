/*
 * @Author: wangshan
 * @Date: 2022-02-26 02:21:24
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-26 02:37:27
 * @Description:
 */
const CracoLessPlugin = require("craco-less");
const path = require("path");
const pathResolve = (pathUrl) => path.resolve(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@hooks": pathResolve("src/hooks"),
      "@pages": pathResolve("src/pages"),
      "@store": pathResolve("src/store"),
      "@utils": pathResolve("src/utils"),
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
