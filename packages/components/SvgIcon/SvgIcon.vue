<!--
 * @Author: shen
 * @Date: 2022-06-04 10:16:08
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 11:40:06
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McSvgIcon',
}
</script>
<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { classNames } from '../../utils'
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  className: {
    type: String as PropType<string>,
    default: '',
  },
  spin: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  rotate: {
    type: Number as PropType<number>,
  },
})
const iconName = computed((): string => `#icon-${props.name}`)

const svgClass = computed(() =>
  classNames({
    'mc-svg-icon': true,
    'mc-svg-icon__spin': props.spin,
    [props.className]: true,
  }),
)

const svgStyle = computed(() =>
  props.rotate
    ? {
        msTransform: `rotate(${props.rotate}deg)`,
        transform: `rotate(${props.rotate}deg)`,
      }
    : {},
)
</script>

<template>
  <svg v-bind="$attrs" aria-hidden="true" :class="svgClass" :style="svgStyle">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped lang="scss">
@use '../../theme/common/var' as *;
.mc-svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  transition: $transition-base;
  &__spin {
    animation: loadingCircle 1s linear infinite;
  }
}

@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
</style>
