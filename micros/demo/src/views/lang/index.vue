<!--
 * @Author: shen
 * @Date: 2022-05-29 17:40:37
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 19:48:37
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'Lang',
}
</script>
<script setup lang="ts">
import { useI18n } from '@micro/hooks'

const { t } = useI18n({
  en: {
    name: 'name',
  },
  'zh-cn': {
    name: '名称',
  },
})
</script>

<template>
  <div>多语言测试: {{ t('name') }}</div>
  <div>多语言测试: {{ $t('button.confirm') }}</div>
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
