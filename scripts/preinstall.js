/*
 * @Author: shen
 * @Date: 2022-05-20 12:54:14
 * @LastEditors: shen
 * @LastEditTime: 2022-05-20 12:54:18
 * @Description:
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33mThis repository requires using pnpm as the package manager ` + ` for scripts to work properly.\u001b[39m\n`)
  process.exit(1)
}
