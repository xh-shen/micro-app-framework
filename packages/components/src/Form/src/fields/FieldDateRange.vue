<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 13:32:58
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
  <ElDatePicker class="mc-form__field-date" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" v-model="fieldValue" :style="{ width: item.width || '100%' }" @change="onChange" />
</template>
