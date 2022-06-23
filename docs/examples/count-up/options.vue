<!--
 * @Author: shen
 * @Date: 2022-06-23 10:27:56
 * @LastEditors: shen
 * @LastEditTime: 2022-06-23 10:31:45
 * @Description: 
-->
<script setup lang="ts">
import { McCountUp } from '@micro/components'
</script>

<template>
  <McCountUp :end-val="2022" :options="{ prefix: '$' }" />
</template>

<style scoped lang="scss"></style>
