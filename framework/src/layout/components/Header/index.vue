<!--
 * @Author: shen
 * @Date: 2022-06-05 14:53:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:21:50
 * @Description: 
-->
<script setup lang="ts">
import { ElHeader } from 'element-plus'
import MenuFold from './MenuFold.vue'
import TagsView from '../TagsView/index.vue'
import Search from './Search.vue'
import Notice from './Notice.vue'
import Screenfull from './Screenfull.vue'
import SelectTheme from './SelectTheme.vue'
import UserDropdown from './UserDropdown.vue'
import SelectLang from './SelectLang.vue'
</script>

<template>
  <ElHeader class="mc-layout__header">
    <MenuFold />
    <TagsView />
    <div class="mc-layout__header-right">
      <Search class="mc-layout__header-active mc-layout__header-search" />
      <Notice class="mc-layout__header-active mc-layout__header-notice" />
      <Screenfull class="mc-layout__header-active mc-layout__header-fullscreen" />
      <SelectTheme class="mc-layout__header-active mc-layout__header-theme" />
      <UserDropdown />
      <SelectLang />
    </div>
  </ElHeader>
</template>

<style scoped lang="scss">
.mc-layout__header {
  display: flex;
  align-items: center;
  height: 48px !important;
  line-height: 48px;
  width: 100%;
  padding: 0 10px;
  background: #fff;
  font-size: 18px;
  z-index: 9;
  &-active {
    cursor: pointer;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    vertical-align: middle;
    transition: all 0.3s;
    height: 48px;
    box-sizing: border-box;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  &-search {
    display: inline-flex;
    align-items: center;
    :deep(.mc-svg-icon) {
      position: relative;
      top: 1px;
    }
    &:hover {
      background: #fff;
    }
  }
  &-notice {
    padding: 0;
  }
}
</style>
