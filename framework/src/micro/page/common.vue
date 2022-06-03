<!--
 * @Author: shen
 * @Date: 2022-05-16 16:06:17
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 16:48:39
 * @Description: 
-->
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Loading } from '@micro/components'
import { useStore } from '@/hooks'
import microApps from '@/micro-apps'

const props = defineProps({
  keepAlive: {
    type: Boolean,
    default: true,
  },
  microIndex: {
    type: Number,
    default: 0,
  },
})

const micro = microApps[props.microIndex]

if (!micro) {
  throw new Error('子应用配置不存在')
}

const spinning = ref(false)
const attrs = useAttrs()
const router = useRouter()

const { state, dispatch } = useStore()

const isCache = computed(() => state.app.cacheMicroNames.includes(micro.name!))

const formatUrl = process.env.NODE_ENV === 'production' ? window.location.origin + '/' + micro.name : 'http://' + window.location.hostname + ':' + micro.devPort + '/' + micro.name

const onMicroCreated = () => {
  if (!isCache.value) {
    spinning.value = true
  }
}

const onMicroBeforemount = () => {
  dispatch('app/setCacheMicroName', micro.name)
}

const onMicroMounted = () => {
  spinning.value = false
}

const onMicroUnmount = () => {
  spinning.value = false
}

const onMicroError = () => {
  spinning.value = false
}

const onDataChange = (e: CustomEvent) => {
  const { path } = e.detail.data
  if (typeof path === 'string') {
    router.push(path)
  }
}
</script>

<template>
  <div class="micro-container">
    <Loading :spinning="spinning" class="loading" />
    <micro-app
      v-bind="attrs"
      :url="formatUrl"
      :name="micro.name"
      :baseroute="`/${micro.name}`"
      :keep-alive="keepAlive"
      @created="onMicroCreated"
      @beforemount="onMicroBeforemount"
      @mounted="onMicroMounted"
      @unmount="onMicroUnmount"
      @error="onMicroError"
      @datachange="onDataChange"
    ></micro-app>
  </div>
</template>

<style lang="scss" scoped>
.micro-container {
  position: relative;
  height: 100%;
  .loading {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }
}
</style>
