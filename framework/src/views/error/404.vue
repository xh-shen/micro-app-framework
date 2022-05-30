<!--
 * @Author: shen
 * @Date: 2022-05-24 08:15:35
 * @LastEditors: shen
 * @LastEditTime: 2022-05-30 15:07:12
 * @Description: 
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from '@micro/hooks'

const { t } = useI18n({
  en: {
    error: {
      homeButton: 'Back Home',
      prevButton: 'Back previous',
      tip: 'Sorry, the page you visited was not found',
    },
  },
  'zh-cn': {
    error: {
      homeButton: '返回首页',
      prevButton: '返回上一页',
      tip: '对不起，您访问的页面不存在',
    },
  },
})
const { replace, go } = useRouter()
</script>

<template>
  <div class="page-error">
    <div class="page-error__container">
      <img src="~@/assets/images/404.png" alt="" />
      <p>{{ t('error.tip') }}</p>
      <div>
        <ElButton @click="replace('/')">{{ t('error.homeButton') }}</ElButton>
        <ElButton @click="go(-1)">{{ t('error.prevButton') }}</ElButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-error {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
    p {
      padding: 20px;
    }
  }
}
</style>
