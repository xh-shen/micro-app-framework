<!--
 * @Author: shen
 * @Date: 2022-06-07 10:26:03
 * @LastEditors: shen
 * @LastEditTime: 2022-06-07 20:33:39
 * @Description:
-->

# 目录结构

这里简单介绍一下架构的目录结构及代表的意义，为后续章节做准备。

```
.
├─ docs（文档）
│  ├─ .vitepress
│  │  └─ config.ts
│  ├─ index.md
│  └─ package.json
├─ framework (基座｜主应用)
│  ├─ src
│  ├─ public
│  └─ package.json
├─ internal（内部功能）
│  ├─ index.js
│  └─ package.json
├─ micros（所有子应用）
│  ├─ 子应用1
│  │ ├─ src
│  │ ├─ public
│  │ └─ package.json
│  ├─ 子应用2
│  │ ├─ src
│  │ ├─ public
│  │ └─ package.json
│  └─ ...
├─ node_modules
├─ packages（通用功能）
│  ├─ bootstrap
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ charts
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ components
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ config
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ context
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ hooks
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ locale
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ request
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ theme
│  │ ├─ index.ts
│  │ └─ package.json
│  ├─ utils
│  │ ├─ index.ts
│  │ └─ package.json
│  └─ ...
├─ scripts
├─ ...
├─ micro.config.js（应用环境配置｜超级重要）
├─ pnpm-workspace.yaml（多包配置）
└─ package.json
```
