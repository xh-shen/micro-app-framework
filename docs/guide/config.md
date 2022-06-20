---
title: 配置
---

# 配置

## micro.config.js

目前`micro.config.js`是一个必须的配置文件，必须存在于`底座`的根目录，它会被`@shene/micro-cli`脚手架自动加载。

这个文件应该导出一个包含了选项的对象：

```js
// micro.config.js

module.exports = {
  // 选项...
}
```

## mainDir

- Type: `string`
- Default: `'framework'`

  基座（主应用）项目的目录，这个目录不建议更改，如果改动，那么你需要修改几处地方才能使项目正常运行，这个配置是给`@shene/micro-cli`脚手架启动主应用及给主应用注入环境变量使用的，可能设计上是多余的，因为跟下面`apps`配置主应用的`appName`是相同的，而且必须相同，由于脚手架设计初期没考虑到，可能脚手架下一个版本会去掉吧。

## microsDir

- Type: `string`
- Default: `'micros'`

  子应用项目的存放目录，内部子应用会很多，都放在这个目录下，这个目录不建议更改，如果改动，那么你需要修改几处地方才能使项目正常运行，这个配置是给`@shene/micro-cli`脚手架启动子应用及给子应用注入环境变量使用的。

## outputDir

- Type: `string`
- Default: `'dist'`

  当运行 shene-micro build 时生成的生产环境构建文件的目录。注意目标目录的应用内容在构建之前会被清除，它是多个应用构建后存放的目录，应用的每次构建都会清除上一次构建的内容。

  ```
  .
  ├─ dist
  │  ├─ framework（基座构建后）
  │  ├─ demo（子应用构建后）
  └─ └─ ...（若干子应用）
  ```

## apps

- Type: `array`
- Default: `[ { title: '基座项目', devScript: 'serve', buildScript: 'build', devPort: 9000, type: 'main', appName: 'framework', }]`

  项目的应用列表配置，必须包含所有的应用，不管是主应用、内部子应用或者外部子应用，都必须配置。外部子应用的启动端口及路由的 baseUrl 必须跟当前配置的应用项相同，否则无法加载到应用。

  ```js
  module.exports = {
    ...,
    apps: [
      {
        // 本地运行项目时交互命令行选择的应用标题
        title: '基座项目',
        // 当前应用的本地运行脚本，
        // 主应用或子应用项目内的`package.json`的`scripts`脚本内必须存在该脚本
        // 否则无法启动
        devScript: 'serve',
        // 当前应用的打包脚本，
        // 主应用或子应用项目内的`package.json`的`scripts`脚本内必须存在该脚本
        // 否则无法打包
        buildScript: 'build',
        // 主应用或子应用本地运行时的端口号
        devPort: 9000,
        // 应用类型：main | sub
        type: 'main',
        // 应用名称，主应用必须和mainDir配置相同
        appName: 'framework',
      },
      {
        title: '示例项目',
        devScript: 'serve',
        buildScript: 'build',
        devPort: 10001,
        type: 'sub',
        // 应用名称，子应用必须和子应用的目录名相同，同时也是nginx部署时的二级目录
        // 也是路由的baseUrl
        appName: 'demo',
        // 子应用的框架，子应用必须配置
        // 因为主子应用跳转时，不同框架的路由是不同的，需要兼容性处理
        frame: 'vue3',
        // 接入模式：micro | iframe, 这个功能还在开发中...
        // 有些外部应用，可能无法通过子应用的方式接入，那么就需要使用iframe接入
        mode: 'micro',
      },
    ],
  }
  ```

## argvs

- Type: `object`
- Default: `undefined`

  项目的环境变量，如开发、测试、生产等，支持两种配置方式。

  1. 项目单一开发、打包部署

  ```js
  module.exports = {
    ...,
    argvs: {
      // 不同环境下的公共配置，浅合并的方式
      base: {
        // 项目标题，必须
        title: 'Shene Micro',
        // 项目国际化，必须
        lang: 'zh-cn',
        // 项目ajax基础路径，必须
        baseApi: '/api',
        // 项目主题，必须
        themeColor: '#FF4040',
      },
      // dev这个key不可变，本地开发时自动读取
      dev: {
        test: 'ceshi params',
      },
      // 下面这个配置key随意配置
      uat: {},
      prod: {},
    },
  }
  ```

  如何使用呢, `底座`根目录的`package.json`中

  ```json
  {
    "scripts": {
      "dev": "shene-micro dev",
      "build": "shene-micro build"
    }
  }
  ```

  ```bash
  # 本地运行
  $ pnpm run dev
  # 应用打包：framework代表打包的应用名称，同apps中的appName
  # 目前只支持单一应用单独打包
  $ pnpm run build framework --env prod
  $ pnpm run build demo --env uat
  ```

  2. 一套项目开发、打包成多个项目

  ```js
  module.exports = {
    ...,
    argvs: {
      // 这个相当于分组，argv1需与脚本中--argv后面的参数相同，这个key不限制，可以是任何值
      argv1: {
        base: {
          title: 'Shene Micro',
          lang: 'zh-cn',
          baseApi: '/api',
          themeColor: '#FF4040',
        },
        dev: {
          test: 'ceshi params',
        },
        uat: {},
        prod: {},
      },
      argv2: {
        base: {
          themeColor: '#409eff',
          title: 'shene micro2',
        },
        dev: {},
        uat: {},
        prod: {},
      },
    },
  }
  ```

  如何使用呢, `底座`根目录的`package.json`中

  ```json
  {
    "scripts": {
      "dev": "shene-micro dev --argv argv1",
      "dev:argv1": "shene-micro dev --argv argv1",
      "dev:argv2": "shene-micro dev --argv argv2",
      "build": "shene-micro build"
    }
  }
  ```

  ```bash
  # 本地运行
  $ pnpm run dev
  $ pnpm run dev:argv2
  # 打包,framework代表打包的应用名称，同apps中的appName
  $ pnpm run build framework --argv argv1 --env prod
  $ pnpm run build demo --argv argv2 --env uat
  ```

就介绍到这里吧，写文档比较累，可能介绍的不够清楚，多理解吧。
