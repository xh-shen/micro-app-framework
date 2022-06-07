<!--
 * @Author: shen
 * @Date: 2022-06-07 16:13:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-07 22:00:42
 * @Description:
-->

# 部署

写累了，先不写了，先把 nginx 配置贴进来，后续完善文档

## nginx 配置

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
