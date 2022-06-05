<!--
 * @Author: shen
 * @Date: 2022-05-21 14:45:35
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 14:46:12
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'DemoMessage',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalData, useMicroRouter } from '@micro/hooks'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'

const result = ref()
const drawer = ref(false)
const router = useMicroRouter()
const { userInfo, themeColor, token } = useGlobalData()

const getData = (key: string) => {
  if (key === 'userInfo') {
    result.value = 'userInfo: ' + JSON.stringify(userInfo.value)
  }
  if (key === 'theme') {
    result.value = 'themeColor: ' + themeColor.value
  }
  if (key === 'token') {
    result.value = 'token: ' + token.value
  }
}

const goToHome = () => {
  router.push('/')
}
const goToSystem = () => {
  router.push('/system/user')
}

const goToTable = () => {
  router.push('/demo/table')
}

const onNotice = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const onMessage = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: any) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}

const onDrawer = () => {
  drawer.value = true
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <div class="message">
    <div class="message-store">
      <div class="message-store-actions">
        <!-- <mc-svg-icon name="board" />
        <mc-svg-icon name="breadcrumb" /> -->
        <ElButton @click="getData('userInfo')">获取用户</ElButton>
        <ElButton @click="getData('theme')">获取主题</ElButton>
        <ElButton @click="getData('token')">获取token</ElButton>
      </div>
      <div class="message-store-result">
        {{ result }}
      </div>
    </div>
    <div class="message-router">
      <ElButton @click="goToHome">跳转到主应用</ElButton>
      <ElButton @click="goToSystem">跳转到其他子应用</ElButton>
      <ElButton @click="goToTable">跳转到应用内部</ElButton>
    </div>
    <div class="message-router">
      <ElButton @click="onNotice">Notice通知</ElButton>
      <ElButton @click="onMessage">MessageBox提示</ElButton>
      <ElButton @click="onDrawer">Drawer抽屉</ElButton>
    </div>
  </div>
  <ElDrawer v-model="drawer" title="I am the title" :before-close="handleClose">
    <span>Hi, there!</span>
  </ElDrawer>
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
