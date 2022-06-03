<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 23:17:01
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'Dashboard',
}
</script>
<script setup lang="ts">
import CountSales from './components/CountSales.vue'
import CountVisits from './components/CountVisits.vue'
import CountPayments from './components/CountPayments.vue'
import CountOperate from './components/CountOperate.vue'
</script>

<template>
  <ElRow :gutter="15">
    <ElCol v-bind="{ lg: 6, md: 12, xs: 24 }">
      <CountSales />
    </ElCol>
    <ElCol v-bind="{ lg: 6, md: 12, xs: 24 }">
      <CountVisits />
    </ElCol>
    <ElCol v-bind="{ lg: 6, md: 12, xs: 24 }">
      <CountPayments />
    </ElCol>
    <ElCol v-bind="{ lg: 6, md: 12, xs: 24 }">
      <CountOperate />
    </ElCol>
  </ElRow>
</template>
