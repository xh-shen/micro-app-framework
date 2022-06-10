<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 16:07:44
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { ElDatePicker } from 'element-plus'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const { fieldValue, onValueChange } = useFieldValue(props.item)

const onChange = (value: Event) => {
  onValueChange(value)
}
</script>

<template>
  <ElDatePicker type="date" v-model="fieldValue" @change="onChange" />
</template>
