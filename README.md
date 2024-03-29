# micro-app-framework 

此处开始默认你已经下载了项目代码，项目代码包括底座、基座、0 个或多个子应用。

开始前请检查自己的`node`版本及是否安装`pnpm`包管理器。`node版本需要16以上，pnpm版本需要7以上`

```bash
# 检查node版本
$ node --version
$ v16.15.0
# 检查pnpm版本
$ pnpm --version
$ 7.1.0
# 如果pnpm没有安装
$ npm install pnpm -g
```

::: warning

1. 切记切记，你只能使用 pnpm 安装及运行项目，使用 npm 及 yarn 将不能正常运行
2. 切记切记，以下所有的 shell 脚本都只能在`底座`根目录执行

:::

## 安装依赖

由于网络不稳定，安装可能存在失败的情况，请多次尝试，不建议使用`淘宝源`，最近发现淘宝源同步比较慢，会出现找不到包的情况。

pnpm 安装依赖时会安装所有`pnpm-workspace.yaml`文件内配置的包的依赖，不用进入到每个包单独安装，很方便。

```bash
$ pnpm install
```

## 本地运行

本地运行的前提条件是您已经下载了`基座（主应用）`项目，因为没有启动基座，单独启动子应用是没有意义的。

本地运行是使用自研的[脚手架](./cli)工具运行的，通过[配置](./config)文件`micro.config.js`结合扫描本地存在的应用的一个交互命令行的操作，让您方便的选择启动那些应用。

假设您设置了以下 npm 脚本，这个只是参考示例，请结合项目设置。

```json
{
  "scripts": {
    "dev": "shene-micro dev --argv argv1",
    "dev:argv1": "shene-micro dev --argv argv1",
    "dev:argv2": "shene-micro dev --argv argv2"
  }
}
```

您可以运行 pnpm run dev 命令来选择启动应用吧。

```bash
$ pnpm run dev
```
