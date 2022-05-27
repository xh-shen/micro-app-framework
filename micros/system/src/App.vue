<!--
 * @Author: shen
 * @Date: 2022-05-15 22:42:06
 * @LastEditors: shen
 * @LastEditTime: 2022-05-27 16:27:09
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const { state } = useStore()

const cacheList = computed(() => state.cachePaths.map((path: string) => state.cacheViewName[path] || '').filter((name: string) => !!name))
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
