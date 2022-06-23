<!--
 * @Author: shen
 * @Date: 2022-05-02 19:30:26
 * @LastEditors: shen
 * @LastEditTime: 2022-06-23 09:48:18
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McLoading',
}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<'small' | 'default' | 'large'>,
    default: 'default',
  },
  delay: Number,
  spinning: {
    type: Boolean,
    default: false,
  },
  tip: String,
})

const prefixCls = 'mc-loading'

const loadingClass = computed(() => ({
  [`${prefixCls}`]: true,
  [`${prefixCls}--${props.size}`]: true,
}))

const spiningClass = computed(() => ({
  [`${prefixCls}__spin`]: true,
  [`${prefixCls}__spinning`]: props.spinning,
  [`${prefixCls}__show-text`]: !!props.tip,
}))

const dotClass = computed(() => ({
  [`${prefixCls}__dot`]: true,
  [`${prefixCls}__dot-spin`]: true,
}))

const containerClass = computed(() => ({
  [`${prefixCls}__container`]: true,
  [`${prefixCls}__blur`]: props.spinning,
}))
</script>

<template>
  <div :class="loadingClass">
    <div key="loading" v-if="spinning">
      <div :class="spiningClass">
        <span :class="dotClass">
          <i :class="`${prefixCls}__dot-item`"></i>
          <i :class="`${prefixCls}__dot-item`"></i>
          <i :class="`${prefixCls}__dot-item`"></i>
          <i :class="`${prefixCls}__dot-item`"></i>
        </span>
        <div :class="`${prefixCls}__text`" v-if="!!tip">{{ tip }}</div>
      </div>
    </div>
    <div :class="containerClass" key="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

.mc-loading {
  position: relative;
  height: 100%;
  &__spin {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    color: var(--el-color-primary);
    text-align: center;
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }

  &__spinning {
    opacity: 1;
  }

  &__dot {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10px;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em;
    &-spin {
      transform: rotate(45deg);
      animation: spinRotate 1.2s infinite linear;
    }
    &-item {
      position: absolute;
      display: block;
      width: 9px;
      height: 9px;
      background-color: var(--el-color-primary);
      border-radius: 100%;
      transform: scale(0.75);
      transform-origin: 50% 50%;
      opacity: 0.3;
      animation: spinMove 1s infinite linear alternate;
      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        right: 0;
        bottom: 0;
        animation-delay: 0.8s;
      }
      &:nth-child(4) {
        bottom: 0;
        left: 0;
        animation-delay: 1.2s;
      }
    }
  }

  &__text {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 5px;
    text-shadow: 0 1px 2px #fff;
  }

  &__show-text {
    .mc-loading__dot {
      margin-top: -20px;
    }
    .mc-loading__text {
      display: block;
    }
  }

  &__container {
    position: relative;
    height: 100%;
    transition: opacity 0.3s;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: none \9;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: 0;
      transition: all 0.3s;
      content: '';
      pointer-events: none;
    }
  }

  &__blur {
    clear: both;
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  }
  &--large {
    .mc-loading__dot {
      width: 1.4em;
      height: 1.4em;
      &-item {
        width: 12px;
        height: 12px;
      }
    }
  }

  &--small {
    .mc-loading__dot {
      width: 0.7em;
      height: 0.7em;
      &-item {
        width: 6px;
        height: 6px;
      }
    }
  }
}

@keyframes spinMove {
  to {
    opacity: 1;
  }
}

@keyframes spinRotate {
  to {
    transform: rotate(405deg);
  }
}
</style>
