<!--
 * @Author: shen
 * @Date: 2022-05-16 10:25:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 14:16:56
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McCard',
}
</script>
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { classNames } from '../../utils'
import cardProps from './props'
import SvgIcon from '../SvgIcon'
import Loading from '../Loading'

const props = defineProps(cardProps)
const emit = defineEmits(['collapse'])
const controlCollapsed = ref(props.collapsed)
const collapsed = ref<boolean>(controlCollapsed.value === undefined ? props.defaultCollapsed : controlCollapsed.value)

if (controlCollapsed.value !== undefined) {
  watch(controlCollapsed, () => {
    collapsed.value = controlCollapsed.value as boolean
  })
}

const onCollapse = () => {
  collapsed.value = !collapsed.value
  emit('collapse', collapsed.value)
}

const cardClass = computed(() =>
  classNames({
    'mc-card': true,
    'is-always-shadow': props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover',
    'is-border': props.border,
    'is-collapse': !collapsed.value,
  }),
)

const cardHeaderClass = computed(() =>
  classNames({
    'mc-card__header': true,
    'is-border': props.headerBorder,
  }),
)

const cardFooterClass = computed(() =>
  classNames({
    'mc-card__footer': true,
    'is-border': props.footerBorder,
  }),
)
</script>

<template>
  <div :class="cardClass">
    <Loading :spinning="loading">
      <div v-if="$slots.header || title">
        <div :class="cardHeaderClass" :style="headerStyle">
          <div v-if="collapsible && controlCollapsed === undefined">
            <div class="mc-card__header-collapse" @click="onCollapse">
              <SvgIcon name="right" :rotate="collapsed ? 90 : undefined" />
            </div>
          </div>
          <slot name="header">
            <div class="mc-card__header-title">{{ title }}</div>
            <slot name="extra"></slot>
          </slot>
        </div>
      </div>
      <div class="mc-card__content" v-show="collapsed">
        <div class="mc-card__body" :style="bodyStyle">
          <slot></slot>
        </div>
        <template v-if="$slots.footer">
          <div :class="cardFooterClass" :style="footerStyle">
            <slot name="footer"></slot>
          </div>
        </template>
      </div>
    </Loading>
  </div>
</template>

<style lang="scss" scoped>
@use '../../theme/common/var' as *;
$card-padding-vertical: 15px !default;
$card-padding-horizontal: 20px !default;
.mc-card {
  background-color: $color-white;
  border-radius: $border-radius-base;
  transition: $transition-base;
  &.is-border {
    border: $border-lighter;
  }
  &.is-collapse {
    .mc-card__header {
      border-bottom: 0;
      padding-bottom: $card-padding-vertical;
    }
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $card-padding-vertical $card-padding-horizontal;
    padding-bottom: 0;
    &.is-border {
      border-bottom: $border-lighter;
      padding-bottom: $card-padding-vertical;
    }
    &-title {
      flex: 1;
      color: $color-text-primary;
      font-size: 16px;
      font-weight: 400;
    }
    &-collapse {
      padding: 0 5px;
      color: $color-text-primary;
      cursor: pointer;
    }
  }
  &__content {
    position: relative;
    flex-direction: column;
  }
  &__body {
    position: relative;
    padding: $card-padding-vertical $card-padding-horizontal;
  }
  &__footer {
    position: relative;
    display: flex;
    padding: $card-padding-vertical $card-padding-horizontal;
    padding-top: 0;
    &.is-border {
      padding-top: $card-padding-vertical;
      border-top: $border-lighter;
    }
  }
}
</style>
