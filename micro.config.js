/*
 * @Author: shen
 * @Date: 2022-06-01 20:55:14
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 14:39:46
 * @Description:
 */
module.exports = {
  mainDir: 'framework',
  microsDir: 'micros',
  outputDir: 'dist',
  apps: [
    {
      title: '基座项目',
      devScript: 'serve',
      buildScript: 'build',
      devPort: 9000,
      type: 'main',
      appName: 'framework',
    },
    {
      title: '示例项目',
      devScript: 'serve',
      buildScript: 'build',
      devPort: 10001,
      type: 'sub',
      appName: 'demo',
      frame: 'vue3',
    },
    {
      title: '系统管理项目',
      devScript: 'serve',
      buildScript: 'build',
      devPort: 10002,
      type: 'sub',
      appName: 'system',
      frame: 'vue3',
    },
    {
      title: 'vue2测试项目',
      devScript: 'serve',
      buildScript: 'build',
      devPort: 10003,
      type: 'sub',
      appName: 'vue2',
      frame: 'vue2',
    },
  ],
  argvs: {
    argv1: {
      base: {
        title: 'Shene Micro',
        lang: 'zh-cn',
        baseApi: '/api',
        themeColor: '#FF4040',
      },
      dev: {
        test: 'ceshi params',
      },
      uat: {},
      prod: {},
    },
    argv2: {
      base: {
        themeColor: '#409eff',
        title: 'shene micro2',
      },
      dev: {},
      uat: {},
      prod: {},
    },
  },
}
