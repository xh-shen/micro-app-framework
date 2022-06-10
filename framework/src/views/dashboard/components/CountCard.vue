<!--
 * @Author: shen
 * @Date: 2022-06-03 22:01:20
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:09:23
 * @Description: 
-->
<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue'
import { ElTooltip } from 'element-plus'
import { McCard, McCountUp, McSvgIcon } from '@micro/components'

defineProps({
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  meta: {
    type: String as PropType<string>,
  },
  total: {
    type: Number as PropType<number>,
  },
  footerMeta: {
    type: String as PropType<string>,
  },
  footerTotal: {
    type: Number as PropType<number>,
  },
  prefix: {
    type: String as PropType<string>,
    default: '',
  },
  footerPrefix: {
    type: String as PropType<string>,
    default: '',
  },
  suffix: {
    type: String as PropType<string>,
    default: '',
  },
  footerSuffix: {
    type: String as PropType<string>,
    default: '',
  },
  contentStyle: {
    type: Object as PropType<CSSProperties>,
  },
  tip: {
    type: String as PropType<string>,
    default: '',
  },
})
</script>

<template>
  <McCard class="count-card" :bodyStyle="{ paddingTop: 0 }" :loading="loading">
    <div class="count-card__body">
      <div class="count-card__content" :style="contentStyle">
        <slot />
      </div>
    </div>
    <template #header>
      <div class="count-card__header">
        <div class="count-card__header-meta">
          <span>{{ meta }}</span>
          <span class="count-card__header-tip">
            <ElTooltip effect="dark" :content="meta || tip" placement="top">
              <McSvgIcon name="warning" />
            </ElTooltip>
          </span>
        </div>
        <div class="count-card__header-total"><McCountUp :delay="100" :end-val="total!" :options="{ prefix, suffix }" /></div>
      </div>
    </template>
    <template #footer>
      <div class="count-card__footer">
        <slot name="footer">
          <span>{{ footerMeta }}</span>
          <span style="margin-left: 8px"> <McCountUp :delay="100" :end-val="footerTotal!" :options="{ prefix: footerPrefix || prefix, suffix: footerSuffix || suffix }" /> </span>
        </slot>
      </div>
    </template>
  </McCard>
</template>

<style scoped lang="scss">
.count-card {
  margin-bottom: 15px;
  &__header {
    width: 100%;
    &-meta {
      display: flex;
      height: 22px;
      line-height: 22px;
      justify-content: space-between;
      align-items: center;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
    &-tip {
      font-size: 18px;
      cursor: pointer;
    }
    &-total {
      height: 38px;
      margin-top: 4px;
      margin-bottom: 0;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.85);
      font-size: 30px;
      line-height: 38px;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
  &__body {
    position: relative;
    height: 46px;
  }
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
  &__footer {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
