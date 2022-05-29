<!--
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 07:57:28
 * @Description: 
-->
<script setup lang="ts">
import type { Lang } from '@micro/hooks'
import { computed } from 'vue'
import { useStore } from './hooks'
import { useElementLocale } from '@micro/hooks'

const { state } = useStore()
const lang = computed<Lang>(() => state.app.lang as Lang)
const locale = useElementLocale(lang)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
