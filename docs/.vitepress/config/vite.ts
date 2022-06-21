/*
 * @Author: shen
 * @Date: 2022-06-20 08:57:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-21 20:36:34
 * @Description:
 */
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
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
  ssr: {
    noExternal: ['lodash', 'lodash-es'],
  },
  plugins: [
    vueJsx(),
    UnoCSS(),
    MarkdownTransform(),
    Inspect(),
    mkcert(),
    createSvgIconsPlugin({
      iconDirs: [resolve(projRoot, 'packages/icons/svg')],
      symbolId: 'icon-[name]',
    }),
  ],
}
