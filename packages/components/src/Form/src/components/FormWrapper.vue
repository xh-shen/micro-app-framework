<!--
 * @Author: shen
 * @Date: 2022-06-08 19:59:54
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 09:06:22
 * @Description: 
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ElRow } from 'element-plus'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { useInjectForm } from '../context/FormContext'

defineProps({
  gutter: {
    type: Number,
    default: 20,
  },
})

const emit = defineEmits(['scroll'])

const { layoutType, grid } = useInjectForm()

const wrapRef = ref()

let stop: () => void

onMounted(() => {
  if (layoutType.value === 'TabsForm') {
    const onScroll = useThrottleFn(() => {
      emit('scroll', wrapRef.value?.$el.scrollTop)
    }, 60)
    stop = useEventListener(wrapRef.value?.$el, 'scroll', onScroll)
  }
})

onUnmounted(() => {
  stop && stop()
})
</script>

<template>
  <ElRow ref="wrapRef" :gutter="gutter" class="mc-form__wrapper">
    <slot />
  </ElRow>
</template>
