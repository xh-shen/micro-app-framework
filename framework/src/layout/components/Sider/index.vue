<!--
 * @Author: shen
 * @Date: 2022-05-20 20:57:17
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 21:23:32
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

const props = defineProps({
  collapse: Boolean,
})

const siderWidth = computed(() => (props.collapse ? '48px' : '208px'))
</script>

<template>
  <ElAside :width="siderWidth" class="mc-layout__aside">
    <Logo />
    <Menu />
  </ElAside>
</template>

<style lang="scss" scoped>
.mc-layout__aside {
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  z-index: 10;
  transition: width 0.2s;
}
</style>
