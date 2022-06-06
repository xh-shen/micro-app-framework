<!--
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:30:00
 * @Description: 
-->
<script setup lang="ts">
import type { Lang } from '@micro/hooks'

import { computed } from 'vue'
import { useStore } from './hooks'
import { ElConfigProvider } from 'element-plus'
import { useElementLocale } from '@micro/hooks'

const { state } = useStore()
const lang = computed<Lang>(() => state.app.lang as Lang)
const locale = useElementLocale(lang)
</script>

<template>
  <ElConfigProvider :locale="locale">
    <router-view />
  </ElConfigProvider>
</template>
