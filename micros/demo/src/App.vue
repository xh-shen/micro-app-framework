<!--
 * @Author: shen
 * @Date: 2022-05-15 22:42:06
 * @LastEditors: shen
 * @LastEditTime: 2022-05-22 06:03:45
 * @Description: 
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
