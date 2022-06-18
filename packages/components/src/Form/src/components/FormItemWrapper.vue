<!--
 * @Author: shen
 * @Date: 2022-06-18 08:29:09
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 09:27:54
 * @Description: 
-->
<script setup lang="ts">
import { PropType } from 'vue'
import type { ColProps } from '../interface'
import { ElCol } from 'element-plus'

defineProps({
  colProps: {
    type: Object as PropType<Partial<ColProps>>,
  },
})

// const { grid } = useInjectForm()

// const wrapProps = computed(() => {
//   if (grid.value) {
//     return props.colProps
//   }
//   return {}
// })
</script>

<template>
  <ElCol v-bind="colProps">
    <slot />
  </ElCol>
</template>
