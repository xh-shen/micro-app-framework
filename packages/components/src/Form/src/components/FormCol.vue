<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 13:28:50
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType } from '../interface'
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

const { colProps: formColProps } = useInjectForm()

const colProps = computed(() => props.item.colProps || formColProps.value || {})
</script>

<template>
  <ElCol v-bind="colProps">
    <FormItem :item="item" />
  </ElCol>
</template>

<style scoped lang="scss"></style>
