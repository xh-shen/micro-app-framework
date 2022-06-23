<!--
 * @Author: shen
 * @Date: 2022-06-23 09:06:16
 * @LastEditors: shen
 * @LastEditTime: 2022-06-23 09:12:45
 * @Description: 
-->
<script setup lang="ts">
import { McLoading } from '@micro/components'
</script>

<template>
  <ElSpace :size="40">
    <McLoading :spinning="true" size="small" />
    <McLoading :spinning="true" />
    <McLoading :spinning="true" size="large" />
  </ElSpace>
</template>

<style scoped lang="scss"></style>
