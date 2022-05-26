/*
 * @Author: shen
 * @Date: 2022-05-26 10:29:40
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 10:39:02
 * @Description:
 */
interface Config {
  title: string
  lang: string
  baseApi: string
  timeout: number
  themeColor: string
}

const config: Config = {
  title: 'Shene Micro',
  lang: 'zh-cn',
  baseApi: '/api',
  themeColor: '#409eff',
  timeout: 5000,
}

export default config
