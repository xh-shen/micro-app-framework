/*
 * @Author: shen
 * @Date: 2022-06-20 08:57:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 09:59:20
 * @Description:
 */
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { MarkdownTransform } from '../plugins/markdown-transform'

const projRoot = resolve(__dirname, '../../../')

export const vite = {
  server: {
    host: true,
    port: 9999,
    fs: {
      allow: [projRoot],
    },
  },
  plugins: [vueJsx(), UnoCSS(), MarkdownTransform(), Inspect(), mkcert()],
}
