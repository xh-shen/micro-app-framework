/*
 * @Author: shen
 * @Date: 2022-05-29 20:23:40
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 21:35:31
 * @Description:
 */
export default [
  {
    name: 'demo', // 子应用名称，通过子应用项目根目录的.env文件配置 需相同
    devPort: '10001', //子应用开发时的端口号，通过子应用项目根目录的.env文件配置 需相同
    frame: 'vue3', // 默认是vue3, 由于不同的前端框架vue2、vue3、react16、react17等路由跳转上有差异，需要配置是需指定使用的前端框架
  },
  {
    name: 'system',
    devPort: '10002',
    frame: 'vue3',
  },
  // {
  //   name: 'vue2',
  //   devPort: '10003',
  //   frame: 'vue2'
  // },
]
