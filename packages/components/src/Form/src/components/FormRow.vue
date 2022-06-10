<!--
 * @Author: shen
 * @Date: 2022-06-08 19:59:54
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 13:57:40
 * @Description: 
-->
<script setup lang="ts">
import { ElRow } from 'element-plus'

defineProps({
  gutter: {
    type: Number,
    default: 20,
  },
})
</script>

<template>
  <ElRow :gutter="gutter">
    <slot />
  </ElRow>
</template>
