<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 21:42:15
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType } from '../interface'
import { computed } from 'vue'

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
    <ElCol v-bind="item.colProps || colProps">
      <FormItem :item="item" />
    </ElCol>
  </template>
</template>

<style scoped lang="scss"></style>
