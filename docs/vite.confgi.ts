/*
 * @Author: shen
 * @Date: 2022-06-08 09:29:35
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 14:14:30
 * @Description:
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

const projRoot = resolve(__dirname, '..')

export default defineConfig(async () => {
  return {
    server: {
      host: true,
      fs: {
        allow: [projRoot],
      },
    },
  }
})
