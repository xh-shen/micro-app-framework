<!--
 * @Author: shen
 * @Date: 2022-06-05 15:46:15
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 16:18:51
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/hooks'

const { state, dispatch } = useStore()

const themeColor = computed(() => state.app.themeColor)

const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', '#c71585'])

const onThemeColor = (color: string) => {
  dispatch('app/setThemeColor', color)
}
</script>

<template>
  <span class="header-theme"><ElColorPicker :model-value="themeColor" :predefine="predefineColors" @change="onThemeColor" /></span>
</template>

<style scoped lang="scss">
.header-theme {
  :deep(.el-color-picker__trigger) {
    position: relative;
    top: -1px;
    height: 20px;
    width: 20px;
    padding: 3px;
  }
}
</style>
