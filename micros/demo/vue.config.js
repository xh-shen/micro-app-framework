/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:17:15
 * @Description:
 */
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')
const { iconsRoot } = require('@micro/internal')

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
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(iconsRoot).end().exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(iconsRoot)
      .end()
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  configureWebpack: (config) => {
    const plugins = [
      require('unplugin-element-plus/webpack')({
        // options
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
