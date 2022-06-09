<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 15:50:40
 * @Description: 
-->
<script setup lang="ts">
import { PropType } from 'vue'
import type { FormItem as FormItemType } from '../interface'
import FormCol from './FormCol.vue'

defineProps({
  list: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="(item, index) in list" :key="item.key || item.dataIndex || index">
    <FormCol :item="item" />
  </template>
</template>

<style scoped lang="scss"></style>
