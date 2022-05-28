<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-05-27 13:19:54
 * @Description: 
-->
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/hooks'
import { sleep, Message } from '@micro/utils'
import { useTitle } from '@vueuse/core'
import config from '@micro/config'
import logo from '@/assets/images/logo.png'

const loginFormRef = ref()
const loading = ref<boolean>(false)
const route = useRoute()
const title = useTitle()
const { replace } = useRouter()
const { dispatch } = useStore()

title.value = `登录 - ${config.title}`

const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const onLogin = () => {
  ;(loginFormRef.value as any).validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      await sleep(1000)
      const token = '1234567890'
      dispatch('user/setUserInfo', loginForm)
      dispatch('user/setToken', token)
      replace((route.query.redirect as string) || '/')
      Message('登录成功！')
      loading.value = false
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="micro-login">
    <div class="micro-login__container">
      <div class="micro-login__title">
        <img :src="logo" alt="" />
        <span>{{ config.title }}</span>
      </div>
      <div class="micro-login__sub-title">{{ config.title }}是由微前端技术整合的管理系统，无缝接入任何框架</div>
      <el-form ref="loginFormRef" :rules="rules" :model="loginForm" class="micro-login__form">
        <el-form-item prop="username">
          <el-input clearable size="large" v-model="loginForm.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input clearable show-password size="large" v-model="loginForm.password" type="password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" size="large" type="primary" style="width: 100%" @click="onLogin">登录</el-button>
        </el-form-item>
        <p class="micro-login__tip">此处只是模拟登录，作为演示使用</p>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.micro-login {
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 200px;
  background: url('~@/assets/images/login_bg.jpg') no-repeat fixed;
  background-size: cover;
  &__container {
    width: 424px;
  }
  &__title {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
    }
    span {
      margin-left: 20px;
      font-weight: 500;
      font-size: 32px;
    }
  }
  &__sub-title {
    margin-top: 12px;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    text-align: center;
  }
  &__form {
    position: relative;
    margin: 32px 0;
    width: 100%;
    background: #fff;
    padding: 50px 32px 30px;
    border-radius: 0 8px 8px 0;
  }
  &__lang {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &__tip {
    text-align: center;
    color: #a6a6a8;
    font-size: 14px;
  }
}
</style>
