<!--
 * @Author: shen
 * @Date: 2022-05-15 22:42:06
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:35:35
 * @Description: 
-->
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
