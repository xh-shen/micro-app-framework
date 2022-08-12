---
title: 主题
---

# 主题

当前架构`ui`基于`element-plus`进行二次开发，主题和`element-plus`保持一致。

您可以在`packages/theme`目录下查看或修改主题色及其他全局变量或样式。

## 使用全局样式

在主子应用的入口`main.ts`中导入全局样式，根据项目需求自定义设定。
```ts
import { createApp } from 'vue'
import { setupGlobalIcons } from '@micro/icons'
import { setupI18n } from './locale'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupMicro } from './micro'
import { setupTheme } from './theme'
import { setupIcons } from './icons'

import App from './App.vue'

import './permission'

// 此处为全局样式
import '@micro/theme/index.scss'

import 'nprogress/nprogress.css'
import './assets/styles/index.scss'

console.log(process.env)

const app = createApp(App)
setupGlobalIcons()
setupIcons()
setupMicro()
setupTheme()
setupRouter(app)
setupStore(app)
setupI18n(app)
app.mount('#app')
```

## 使用变量

变量分为`css变量`和`scss变量`，根据需求场景不同，选择不同的方式。

- **css变量：** 不需要导入，加载到项目后，可以在任何样式中使用，**主题色**建议使用css变量`--el-color-primary`。

- **scss变量：** 需要在程序中导入才能使用，目前没有做全局自动导入。

```vue
<script lang="ts">
export default {
  name: 'User',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useGlobalData } from '@micro/hooks'
const count = ref(0)
const { userInfo } = useGlobalData()

const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div class="test">用户管理 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
  <div>{{ userInfo }}</div>
</template>

<style lang="scss" scoped>
@use '@micro/theme/common/var' as *;

.test {
  color: $color-text-regular;
}
</style>

```

::: warning

scss版本更新，`@import`导入方式即将废弃，请使用`@use`的方式，具体查看scss文档。

:::

## 外部子应用

由于外部子应用不在一个框架体系内，ui样式无法统一，需自行控制，主题色会通过全局事件的方式传递给子应用，需要自行做主题变更。