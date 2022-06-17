<!--
 * @Author: shen
 * @Date: 2022-06-17 08:55:40
 * @LastEditors: shen
 * @LastEditTime: 2022-06-17 09:03:47
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElTooltip } from 'element-plus'
import { RenderVNode } from '@micro/utils'
import { useInjectForm } from '../context/FormContext'
import cloneDeep from 'lodash-es/cloneDeep'
import SvgIcon from '../../../SvgIcon'

defineProps({
  label: {
    type: [String, Number, Function],
  },
  tooltip: String,
})

const { formValues } = useInjectForm()

const cloneFormValues = computed(() => cloneDeep(formValues.value))
</script>

<template>
  <RenderVNode :vnode="label" :props="{ formValues: cloneFormValues }" />
  <ElTooltip v-if="tooltip" append-to="body" effect="dark" :content="tooltip" placement="top">
    <span style="margin-left: 5px; display: inline-block">
      <SvgIcon name="warning" />
    </span>
  </ElTooltip>
</template>
