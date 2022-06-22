<!--
 * @Author: shen
 * @Date: 2022-05-16 10:25:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-22 22:03:34
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McCard',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '@micro/utils'
import { useMergedState } from '@micro/hooks'
import { ElTooltip } from 'element-plus'
import cardProps from './props'
import SvgIcon from '../../SvgIcon'
import Loading from '../../Loading'

const props = defineProps(cardProps)
const emit = defineEmits(['collapse'])

const [mergeCollapsed, setMergeCollapsed] = useMergedState<boolean | undefined>(() => props.defaultCollapsed, {
  value: computed(() => props.collapsed),
  onChange: (val) => {
    emit('collapse', val)
  },
})

const collapsibleButton = computed(() => props.collapsible && props.collapsed === undefined)

const onCollapse = () => {
  if (collapsibleButton.value) {
    setMergeCollapsed(!mergeCollapsed.value)
  }
}

const cardClass = computed(() =>
  classNames({
    'mc-card': true,
    'is-always-shadow': props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover',
    'is-border': props.border,
    'is-collapse': mergeCollapsed.value,
  }),
)

const cardHeaderClass = computed(() =>
  classNames({
    'mc-card__header': true,
    'is-border': props.headerBorder,
    'is-collapsible': collapsibleButton.value,
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
      <div v-if="$slots.header || title || collapsibleButton">
        <div :class="cardHeaderClass" :style="headerStyle" @click="onCollapse">
          <div v-if="collapsibleButton">
            <div class="mc-card__header-collapse">
              <SvgIcon name="right" :rotate="!mergeCollapsed ? 90 : undefined" />
            </div>
          </div>
          <slot name="header">
            <div class="mc-card__header-title">
              <div class="mc-card__header-title-text">
                {{ title }}
              </div>
              <ElTooltip v-if="tooltip" append-to="body" effect="dark" :content="tooltip" placement="top">
                <SvgIcon name="warning" />
              </ElTooltip>
            </div>
            <slot name="extra"></slot>
          </slot>
        </div>
      </div>
      <div class="mc-card__content" v-show="!mergeCollapsed">
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
@use '@micro/theme/common/var' as *;
$card-padding-vertical: 15px !default;
$card-padding-horizontal: 20px !default;
.mc-card {
  background-color: $color-white;
  border-radius: $border-radius-base;
  transition: $transition-base;
  &.is-border {
    border: $border-lighter;
  }
  &:hover {
    &.is-hover-shadow {
      border-color: transparent;
      box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
    }
  }
  &.is-always-shadow {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
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
    &.is-collapsible {
      cursor: pointer;
    }
    &-title {
      display: flex;
      align-items: center;
      flex: 1;
      color: $color-text-primary;
      font-size: 16px;
      font-weight: 500;
      .mc-svg-icon {
        cursor: pointer;
        margin-left: 5px;
        transition: color 0.1s;
        &:hover {
          color: var(--el-color-primary);
        }
      }
    }
    &-collapse {
      font-size: 14px;
      padding: 0 5px 0 0;
      color: $color-text-primary;

      transition: color 0.1s;
      &:hover {
        color: var(--el-color-primary);
      }
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
