/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 11:43:12
 * @Description:
 */
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')
const { iconsRoot } = require('@micro/internal')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// function addStyleResource(rule) {
//   rule
//     .use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [path.resolve(__dirname, './src/styles/imports.styl')],
//     })
// }

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    port: process.env.VUE_APP_PORT,
    proxy: {
      '/api': {
        target: 'https://zhuanlan.zhihu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `$theme-color: red;`,
      },
    },
  },
  chainWebpack: (config) => {
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach((type) => addStyleResource(config.module.rule('sass').oneOf(type)))
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^micro-app/.test(tag),
        }
        return options
      })
      .end()

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
