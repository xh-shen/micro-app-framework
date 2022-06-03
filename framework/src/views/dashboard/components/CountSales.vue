<!--
 * @Author: shen
 * @Date: 2022-06-03 22:19:26
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 22:29:50
 * @Description: 
-->
<script setup lang="ts">
import CountCard from './CountCard.vue'
</script>

<template>
  <CountCard meta="总销售额" footerMeta="总销售额" :total="126560" :footerTotal="12423" prefix="¥ " tip="总销售额">
    <div style="display: inline-block; margin-right: 22px">
      <span>周同比</span>
      <span style="margin-left: 8px">12%</span>
      <span style="display: inline-block; font-size: 12px; color: #f5222d; margin-left: 8px; transform: scale(0.7)">
        <!-- <svg-icon icon-class="triangle-fill" /> -->
      </span>
    </div>
    <div style="display: inline-block">
      <span>日同比</span>
      <span style="margin-left: 8px">11%</span>
      <span style="display: inline-block; font-size: 12px; color: #52c41a; margin-left: 8px; transform: scale(0.7)">
        <!-- <svg-icon icon-class="triangle-fill" rotate="{180}" /> -->
      </span>
    </div>
  </CountCard>
</template>

<style scoped lang="scss"></style>
