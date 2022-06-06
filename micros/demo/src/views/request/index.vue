<!--
 * @Author: shen
 * @Date: 2022-05-21 14:45:35
 * @LastEditors: shen
 * @LastEditTime: 2022-05-27 10:31:44
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'Request',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { getDoubancolumns } from '@/api/test'

const result = ref()
const getData = async () => {
  const data = await getDoubancolumns()
  result.value = data
}
</script>

<template>
  <div class="message">
    <div class="message-store">
      <div class="message-store-actions">
        <ElButton @click="getData">获取数据</ElButton>
      </div>
      <div class="message-store-result">
        {{ result }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  padding: 0 10px;
  &-store {
    padding: 10px;
    background-color: #fff;
    &-actions {
      padding-bottom: 10px;
      border-bottom: 1px solid #f0f0f0;
    }
    &-result {
      padding-top: 10px;
    }
  }
  &-router {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
  }
}
</style>
