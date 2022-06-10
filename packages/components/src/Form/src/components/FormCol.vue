<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 21:49:05
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType, ColProps } from '../interface'
import { computed } from 'vue'
import { ElCol } from 'element-plus'
import { useInjectForm } from '../context/FormContext'
import FormItem from './FormItem.vue'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const formContext = useInjectForm()

const colProps = computed<ColProps>(() => props.item.colProps || formContext.colProps.value || {})
</script>

<template>
  <ElCol v-bind="colProps">
    <FormItem :item="item" />
  </ElCol>
</template>

<style scoped lang="scss"></style>
