<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 21:46:21
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
import SalesBarChart from './components/SalesBarChart.vue'
import BrowserRadarChart from './components/BrowserRadarChart.vue'
import SalesPieChart from './components/SalesPieChart.vue'
</script>

<template>
  <div class="page-container" style="height: 100%; overflow-y: auto; margin: 0 -10px; padding: 0 10px">
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
    <SalesBarChart />
    <ElRow :gutter="15">
      <ElCol v-bind="{ lg: 12, md: 12, xs: 24 }">
        <BrowserRadarChart />
      </ElCol>
      <ElCol v-bind="{ lg: 12, md: 12, xs: 24 }">
        <SalesPieChart />
      </ElCol>
    </ElRow>
  </div>
</template>
