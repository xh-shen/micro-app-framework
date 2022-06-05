<!--
 * @Author: shen
 * @Date: 2022-05-20 21:25:30
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 21:55:42
 * @Description: 
-->
<script setup lang="ts">
import { useStore } from '@/hooks'
import { computed } from 'vue'
import { useInjectLayout } from '../../context/LayoutContext'
import MenuItem from './MenuItem.vue'

const { collapse, activePath } = useInjectLayout()

const { state } = useStore()
const menus = computed(() => state.permission.menuTree)
</script>

<template>
  <ElScrollbar class="mc-layout__menu">
    <ElMenu :default-active="activePath" class="mc-layout__sidermenu" :collapse-transition="false" :collapse="collapse" router>
      <MenuItem :menus="menus" />
    </ElMenu>
  </ElScrollbar>
</template>

<style lang="scss">
.mc-layout__menu {
  flex: 1;
  overflow: hidden;
  .el-menu {
    border-right: none;
  }
  .el-menu--collapse {
    width: 48px;

    .el-menu-item,
    .el-sub-menu {
      & > div {
        padding: 0 !important;
        display: flex;
        justify-content: center;
        font-size: 16px;
      }
    }
  }
}
</style>
