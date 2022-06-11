<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 15:22:35
 * @Description: 
-->
<script setup lang="ts">
import { PropType } from 'vue'
import type { FormItemType } from '../interface'
import FormCol from './FormCol.vue'

defineProps({
  list: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="item in list" :key="item.key">
    <FormCol :item="item" />
  </template>
</template>

<style scoped lang="scss"></style>
