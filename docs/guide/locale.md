---
title: 国际化
---

# 国际化

本节将介绍在项目中如何使用国际化，默认使用中文简体。

架构内把国际化做了二次封装，包含项目本地的国际化及`element-plus`组件库的国际化。

下面以`子应用`为例子，介绍国际化的使用过程：

## 初始化配置

- 在`子应用`的`src`目录下新建`locale`文件夹，并新建`index.ts`入口文件。
- 在`src/locale/index.ts`中导入国际化包`@micro/locale`，此包在`packages/locale`目录下:
```ts
import type { App } from 'vue'

// 创建国际化实例的方法
import { createI18n } from '@micro/locale'

// 子应用内使用的国际化配置src/locale/lang
import messages from './lang'

// createI18n(messages?: Record<string, any>, useGlobal = true)
// 1. messages: 子应用内的国际化数据
// 2. useGlobal: 是否使用全局配置的国际化数据，默认使用，
// 全局配置的国际化数据在`packages/locale/lang`目录下
const i18n = createI18n(messages)

export function setupI18n(app: App): void {
  app.use(i18n)
  app.config.globalProperties.$t = i18n.global.t
}

export default i18n
```

## 导入并注册

在`子应用`入口`main.ts`中导入并注册国际化：

```ts
import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'

// 导入国际化
import { setupI18n } from './locale'

import { setupIcons } from './icons'
import { setupGlobalIcons } from '@micro/icons'
import { setupGlobComp } from '@micro/components'

bootstrap({ routes }, (app) => {
  setupIcons()
  setupGlobalIcons()
  // 注册国际化
  setupI18n(app)

  setupGlobComp(app)
})
```

## 项目内使用

国际化数据分为三个级别：
1. 全局数据：`packages/locale/lang`下的国际化数据
2. 应用内数据：`src/locale/lang`下的国际化数据
3. 页面内数据：`src/views/页面/lang`下的国际化数据

如果不想使用全局的国际化数据，可以在第一步初始化时`const i18n = createI18n(messages,false)`，第二个参数设置为`false`。

具体使用示例请参考`子应用demo`: `micros/demo/src/views/language`页面
```vue
<script lang="ts">
import './lang'
export default {
  name: 'DemoLanguage',
}
</script>
<script setup lang="ts"></script>

<template>
  <div>全局配置的language: {{ $t('button.confirm') }}</div>
  <div>当前子应用配置的language: {{ $t('demo.name') }}</div>
  <div>当前页面配置的language: {{ $t('language.test') }}</div>
</template>
```

## 切换国际化

### 本地国际化信息

由于主子应用很多，所以切换国际化做了封装，在`packages/bootstrap/App.vue`下封装了所有子应用的国际化切换

使用自定义hooks`useMicroI18n`获取当前语言: `packages/hooks/src/useMicroI18n.ts`。

packages/bootstrap/App.vue
```vue

<script setup lang="ts">
import type { Lang } from '../hooks'
import { computed, watch } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useStore } from 'vuex'
import { useElementLocale, useMicroI18n } from '../hooks'

const { state } = useStore()
const lang = computed<Lang>(() => state.lang)
const elLocale = useElementLocale(lang)
const { locale } = useMicroI18n()
const cacheList = computed(() => state.cachePaths.map((path: string) => state.cacheViewName[path] || '').filter((name: string) => !!name))

watch(
  () => lang.value,
  (newLang) => {
    locale.value = newLang
  },
)
</script>

<template>
  <ElConfigProvider :locale="elLocale">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </ElConfigProvider>
</template>
```

packages/hooks/src/useMicroI18n.ts

```ts
import { useI18n as baseUseI18n } from 'vue-i18n'

type Message = { [prop: string]: { [prop: string]: string | Record<string, any> } }

export const useMicroI18n = (messages?: Message) => {
  const { t, mergeLocaleMessage, locale } = baseUseI18n()
  if (messages) {
    for (const key in messages) {
      mergeLocaleMessage(key, messages[key])
    }
  }
  return { t, locale }
}

```

### Element Plus国际化信息

使用自定义hooks`useElementLocale`切换当前Element Plus国际化信息：`packages/hooks/src/useElementLocale.ts`。

packages/hooks/src/useElementLocale.ts
```ts
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const localeMap = {
  'zh-cn': zhCn,
  en,
}

export type Lang = keyof typeof localeMap

export function useElementLocale(lang: ComputedRef<Lang>) {
  const locale = computed(() => localeMap[lang.value])

  return locale
}
```

## 最后

国际化的使用暂时介绍到这里了，介绍的可能不够详细，大家可以参考下源码，有不明白的可以联系我。

