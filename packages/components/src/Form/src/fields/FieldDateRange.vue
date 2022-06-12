<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-12 13:44:55
 * @Description: 
-->
<script setup lang="ts">
import { ElDatePicker } from 'element-plus'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const { fieldValue, onValueChange } = useFieldValue(props.name)

const onChange = (value: Event) => {
  onValueChange(value)
}
</script>

<template>
  <ElDatePicker class="mc-form__field-date" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" v-model="fieldValue" :style="{ width: width || '100%' }" @change="onChange" />
</template>
