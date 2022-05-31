/*
 * @Author: shen
 * @Date: 2022-05-28 16:24:04
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 07:32:05
 * @Description:
 */
const file = require.context('./', true, /\.ts/)
const modules: { [prop: string]: any } = {}
file.keys().forEach((key) => {
  const name = key.replace('.ts', '').replace('./', '')
  if (name !== 'index') {
    modules[name] = file(key).default || file(key)
  }
})

export default modules
