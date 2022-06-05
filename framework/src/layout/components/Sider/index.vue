<!--
 * @Author: shen
 * @Date: 2022-05-20 20:57:17
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 14:36:24
 * @Description: 
-->
<script setup lang="ts">
import { useInjectLayout } from '../../context/LayoutContext'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

const { collapse, prefixCls, updateCollapse } = useInjectLayout()

const onCollapse = () => {
  updateCollapse(!collapse.value)
}
</script>

<template>
  <Logo />
  <Menu />
  <div @click="onCollapse" :class="`${prefixCls}__collapse`">
    <span id="sidebar-trigger">
      <svg v-if="collapse" viewBox="64 64 896 896" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"
        ></path>
      </svg>
      <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="menu-unfold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"
        ></path>
      </svg>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.mc-layout__collapse {
  width: 100%;
  padding: 0 14px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
  color: #333;
  box-sizing: border-box;
  border-top: 1px solid #f0f0f0;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
