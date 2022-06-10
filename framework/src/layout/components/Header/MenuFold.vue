<!--
 * @Author: shen
 * @Date: 2022-06-05 19:22:45
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:07:10
 * @Description: 
-->
<script setup lang="ts">
import { McSvgIcon } from '@micro/components'
import { useInjectLayout } from '../../context/LayoutContext'

const { collapse, updateCollapse } = useInjectLayout()

const onCollapse = () => {
  updateCollapse(!collapse.value)
}
</script>

<template>
  <div @click="onCollapse" class="mc-layout__collapse">
    <span id="sidebar-trigger">
      <McSvgIcon :name="collapse ? 'menu-unfold' : 'menu-fold'" />
    </span>
  </div>
</template>

<style scoped lang="scss">
.mc-layout__collapse {
  margin-right: 14px;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  box-sizing: border-box;
  transition: color 0.1s;
  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
