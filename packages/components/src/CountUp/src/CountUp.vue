<!--
 * @Author: shen
 * @Date: 2022-06-03 21:55:05
 * @LastEditors: shen
 * @LastEditTime: 2022-06-23 10:13:37
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McCountUp',
}
</script>
<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'

const props = defineProps({
  delay: {
    type: Number as PropType<number>,
    default: 0,
  },
  duration: {
    type: Number as PropType<number>,
    default: 2,
  },
  endVal: {
    type: Number as PropType<number>,
    required: true,
  },
  options: {
    type: Object as PropType<CountUpOptions>,
  },
})

const emit = defineEmits(['ready'])

const elRef = ref<HTMLElement>()
let instance: any = null
const create = () => {
  if (instance) {
    return
  }
  const countUp = new CountUp(elRef.value as HTMLElement, props.endVal, {
    ...props.options,
    duration: props.duration,
  })
  if (countUp.error) {
    return
  }
  instance = countUp
  if (props.delay < 0) {
    emit('ready', instance, CountUp)
    return
  }
  setTimeout(() => countUp.start(() => emit('ready', countUp, CountUp)), props.delay)
}
onMounted(() => {
  create()
})
onUnmounted(() => {
  instance = null
})
</script>

<template>
  <span ref="elRef" />
</template>
