<!--
 * @Author: shen
 * @Date: 2022-05-29 17:40:37
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:44:52
 * @Description: 
-->
<script lang="ts">
import './lang'
export default {
  name: 'DemoLanguage',
}
</script>
<script setup lang="ts"></script>

<template>
  <div>全局配置的language: {{ $t('button.confirm') }}</div>
  <div>当前子应用配置的language: {{ $t('demo.name') }}</div>
  <div>当前页面配置的language: {{ $t('language.test') }}</div>
</template>
<!-- 
<script lang="ts">
export default {
  name: 'Lang',
}
</script>

<template>
  <div>多语言测试{{ $t('button.confirm') }}</div>
</template> -->
