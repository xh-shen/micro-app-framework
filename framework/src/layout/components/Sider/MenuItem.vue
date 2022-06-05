<!--
 * @Author: shen
 * @Date: 2022-06-05 21:34:45
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 21:54:55
 * @Description: 
-->
<script setup lang="ts">
defineProps({
  menus: {
    type: Object,
  },
})
</script>

<template>
  <template v-for="menu in menus" :key="menu.path">
    <template v-if="menu.children && menu.children.length > 0">
      <ElSubMenu :index="menu.path">
        <template #title>
          <ElIcon class="mc-layout__menu-icon" v-if="menu.icon">
            <mc-svg-icon :name="menu.icon" />
          </ElIcon>
          <span class="mc-layout__menu-title">{{ menu.title }}</span>
        </template>
        <MenuItem :menus="menu.children" />
      </ElSubMenu>
    </template>
    <ElMenuItem :index="menu.path" v-else>
      <ElIcon class="mc-layout__menu-icon" v-if="menu.icon">
        <mc-svg-icon :name="menu.icon" />
      </ElIcon>
      <template #title
        ><span class="mc-layout__menu-title">{{ menu.title }}</span></template
      >
    </ElMenuItem>
  </template>
</template>

<style scoped lang="scss"></style>
