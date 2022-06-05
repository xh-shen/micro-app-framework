<!--
 * @Author: shen
 * @Date: 2022-05-20 21:01:18
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 21:25:01
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useInjectLayout } from '../../context/LayoutContext'
import logo from '@/assets/images/logo.png'
import config from '@micro/config'

const { collapse, prefixCls } = useInjectLayout()

const logoClass = computed(() => ({
  [`${prefixCls}__logo`]: true,
  'is-collapse': collapse.value,
}))
</script>

<template>
  <div :class="logoClass">
    <router-link to="/">
      <img :src="logo" alt="logo" />
      <span v-if="!collapse" :class="`${prefixCls}__logo-text`">{{ config.title }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.mc-layout__logo {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4px;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  height: 48px;
  flex-shrink: 1;
  &.is-collapse {
    padding-left: 7px;
    img {
      margin-left: 0;
    }
  }
  img {
    display: inline-block;
    height: 35px;
    margin-left: 5px;
    vertical-align: middle;
    transition: all 0.2s;
  }
  &-text {
    display: inline-block;
    height: 40px;
    margin: 0 0 0 8px;
    color: var(--el-color-primary);
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    vertical-align: middle;
  }
}
</style>
