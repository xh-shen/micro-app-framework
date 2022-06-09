<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 13:35:05
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { ElDatePicker } from 'element-plus'
import { useInjectForm } from '../context/FormContext'

defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const { formValue } = useInjectForm()
</script>

<template>
  <ElDatePicker type="date" :model-value="formValue[item.dataIndex]" />
</template>
