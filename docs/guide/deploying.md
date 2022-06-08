<!--
 * @Author: shen
 * @Date: 2022-06-07 16:13:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 09:06:37
 * @Description:
-->

# 部署

微前端部署上比单体应用稍微麻烦些，需要注意一些事项，否则可能会出现找不到页面的情况。

## 前言

我们强烈建议你保持开发环境和线上环境路径(即webpack的publicPath)的一致性，以避免在部署后出现问题，无论是基座应用还是子应用。

比如一个应用，在部署时作为文件夹 my-app 放入服务器根目录，那么配置如下：

```js
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '', // bad ❌
  publicPath: '/my-app/', // good 👍
}
```
内部子应用的publicPath通过环境变量的方式已经处理好了，这个只需要关注外接子应用就可以了。

环境变量process.env.VUE_APP_NAM的值是`micro.config.js`文件配置的apps内的应用`appName`
```js
// 内部子应用的vue.config.js
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
}
```

## 打包

打包的命令和`micro.config.js`文件配置有关，在[配置](./config)章节有详细介绍，这里就不说了。

您可以运行`pnpm run build framework --argv argv1 --env prod`命令测试一下吧：

```bash
$ pnpm run build framework --argv argv1 --env prod
```

打包后输出的文件目录是这样的，您可以使用自动化工具或手动的方式，把`framework`移动到您需要的地方。

```
.
├─ dist
│  ├─ framework
└─ └─ ...（若干子应用）
```

## 示例

正常来说只要开发环境和线上环境资源路径一致，并在部署后设置好nginx的跨域即可，在开发环境正常运行的项目，部署到服务器后，理论上也可以正常运行。

但在实际开发中经常会出现地址404、资源丢失等问题，我们以shen-micro为例介绍部署相关内容，以供大家参考。

### 代码仓库目录结构：

省略了部分目录

```
.
├─ framework (基座｜主应用)
│  ├─ src
│  ├─ public
│  └─ package.json
├─ micros（所有子应用）
│  ├─ demo
│  │ ├─ src
│  │ ├─ public
│  │ └─ package.json
│  ├─ system
│  │ ├─ src
│  │ ├─ public
│  │ └─ package.json
│  └─ ...
├─ node_modules
├─ ...
├─ micro.config.js（应用环境配置｜超级重要）
├─ pnpm-workspace.yaml（多包配置）
└─ package.json
```
### 部署到服务器的目录结构：

```
.root(服务器根目录)
├─ framework (基座｜主应用)
├─ demo(子应用1)
├─ system(子应用2)
```


### nginx配置如下：

以下配置仅供参考，具体项目根据实际情况调整。

```nginx

server {
  listen       80;
  server_name  micro.shene.org.cn;
  return 301 https://micro.shene.org.cn$request_uri;
}

server {
  listen       443;
  server_name micro.shene.org.cn;

  ssl on;
  ssl_certificate  /www/nginx/cert/micro-shene/7837690_micro.shene.org.cn.pem;
  ssl_certificate_key  /www/nginx/cert/micro-shene/7837690_micro.shene.org.cn.key;
  ssl_session_timeout 5m;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;
  if ($ssl_protocol = " ") {
    rewrite ^(.*) https://$host$1 permanent;
  }

  location / {
    root /www/nginx/html/micro-shene/framework;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;

    if ($request_filename ~* .*\.(?:htm|html)$)
    {
      add_header Cache-Control "no-store";
    }
  }

  location /demo/ {
    alias /www/nginx/html/micro-shene/demo/;
    add_header Access-Control-Allow-Origin *;
    if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){
      add_header Cache-Control max-age=7776000;
      add_header Access-Control-Allow-Origin *;
    }
    try_files $uri $uri/ /www/nginx/html/micro-shene/framework/;
  }

  location /system/ {
    alias /www/nginx/html/micro-shene/system/;
    add_header Access-Control-Allow-Origin *;
    if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){
      add_header Cache-Control max-age=7776000;
      add_header Access-Control-Allow-Origin *;
    }
    try_files $uri $uri/ /www/nginx/html/micro-shene/framework/;
  }

  location /vue2/ {
    alias /www/nginx/html/micro-shene/vue2/;
    add_header Access-Control-Allow-Origin *;
    if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){
      add_header Cache-Control max-age=7776000;
      add_header Access-Control-Allow-Origin *;
    }
    try_files $uri $uri/ /www/nginx/html/micro-shene/framework/;
  }

  location /api/ {
    proxy_pass https://zhuanlan.zhihu.com/api/;
  }

}
```

### 线上效果如下：

shene-micro:  [https://micro.shene.org.cn](https://micro.shene.org.cn)
