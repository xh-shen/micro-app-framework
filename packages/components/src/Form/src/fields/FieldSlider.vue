<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 23:13:35
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElSlider } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const { fieldValue, onValueChange } = useFieldValue<number>(props.name)

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), []))

const onChange = (value: number) => {
  onValueChange(value)
  props.onChange?.(value)
}
</script>

<template>
  <ElSlider v-model="fieldValue" v-bind="elFieldProps" :disabled="disabled" @change="onChange" />
</template>
