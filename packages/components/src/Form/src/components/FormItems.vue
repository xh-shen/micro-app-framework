<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-12 15:06:38
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType } from '../interface'
import { ElCol } from 'element-plus'
import { useInjectForm } from '../context/FormContext'
import FormItem from './FormItem.vue'

defineProps({
  list: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
})

const { colProps } = useInjectForm()
</script>

<template>
  <template v-for="item in list" :key="item.key">
    <!-- <FormCol :item="item" /> -->
    <ElCol v-bind="item.colProps || colProps">
      <FormItem :item="item" />
    </ElCol>
  </template>
</template>

<style scoped lang="scss"></style>
