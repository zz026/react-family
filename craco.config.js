/*
 * @Name: craco.config
 * @Author: zzw
 * @Date: 2022-03-23 09:56:59
 * @LastEditors: zzw
 * @LastEditTime: 2022-03-23 09:56:59
 * @Description: 
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
};
