/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 11:07:02
 * @Description:
 */
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: `/${process.env.VUE_APP_NAME}/`,
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: (config) => {
    const plugins = [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 10240,
          deleteOriginalAssets: false,
        }),
      )
    }
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.minimizer.options.compress.drop_console = true
      config.optimization.minimizer[0].options.minimizer.options.compress.drop_debugger = true
      config.optimization.minimizer[0].options.minimizer.options.compress.pure_funcs = ['console.log']
    }

    return {
      plugins,
      resolve: {
        extensions: ['.vue', '.ts'],
        alias: {
          '@': resolve('src'),
          'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      },
    }
  },
})
