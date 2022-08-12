---
title: 子应用注册
---

# 子应用注册

对于`Shene Micro`微前端架构来说，把子应用划分为`内部子应用`和`外部子应用`两种。

## 内部子应用

架构设计之内的，技术栈统一，封装及复用，使用简单，目录`/micros`下。

### 添加应用配置

在项目根目录下找到`micro.config.js`配置文件，在`apps`数组下新增一条应用配置即可，`devPort`和`appName`不可以重复。

配置参数详细讲解可以参考[配置](./config)章节。

  ```js
  // micro.config.js
  module.exports = {
    ...,
    apps: [
      ...
  +    {
  +      title: '新的子应用项目',
  +      devScript: 'serve',
  +      buildScript: 'build',
  +      devPort: 10010,
  +      type: 'sub',
  +      appName: 'new-micro-project',
  +      frame: 'vue3',
  +    },
    ],
    ...
  }
  ```

  ### 添加应用项目

  在`micros`目录下，添加一个子应用项目，不可以随意添加，可以复制已有的子应用项目或复制子应用项目模版到`micros`目录下，子应用目录名必须和上一步配置的`appName`相同。

  内部子应用注册时需要注意几点：
  
  1. `vue.config.js`配置，`publicPath`和`port`需要使用环境变量，不可更改。
   ```js
  module.exports = defineConfig({
    publicPath: `/${process.env.VUE_APP_NAME}/`,
    devServer: {
      port: process.env.VUE_APP_PORT,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    ...
  })
  ```
  2. 入口`main.ts`需要导入封装好的`bootstrap`包，包内实现了全局数据通讯、路由拦截等。

   ```ts
  import './public-path'
  import bootstrap from '@micro/bootstrap'
  import routes from './router/routes'
  import { setupI18n } from './locale'
  import { setupIcons } from './icons'
  import { setupGlobalIcons } from '@micro/icons'
  import { setupGlobComp } from '@micro/components'

  bootstrap({ routes }, (app) => {
    setupIcons()
    setupGlobalIcons()
    setupI18n(app)
    setupGlobComp(app)
  })
  ```
  
  具体使用在`packages/bootstrap`目录下查看源码

  后续会实现通过脚手架命令的方式创建子应用，敬请期待。


  ## 外部子应用

  与架构无关的独立的Vue3、Vue2、React技术栈项目，需要自行实现全局状态、主题、多语言的接入。

  外部子应用接入时，请先仔细阅读[micro-app文档](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/start)。

  外部子应用想要获取到当前项目的主题、语言、用户信息、token、环境变量等数据，需要监听全局事件：
  ```js
  window.microApp.addGlobalDataListener((data: Record<string, unknown>) => {
    console.log(data)
  }, true)
  ```