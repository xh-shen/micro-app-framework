<!--
 * @Author: shen
 * @Date: 2022-05-16 16:06:17
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 08:40:34
 * @Description: 
-->
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Loading } from '@micro/components'
import { useStore } from '@/hooks'

const props = defineProps({
  name: String,
  url: {
    type: String,
    required: true,
  },
  keepAlive: {
    type: Boolean,
    default: true,
  },
  baseroute: String,
})

const spinning = ref(false)
const attrs = useAttrs()
const router = useRouter()

const { state, dispatch } = useStore()

const isCache = computed(() => state.app.cacheMicroNames.includes(props.name!))

const formatUrl = process.env.NODE_ENV === 'production' ? window.location.origin + props.baseroute : props.url + props.baseroute

const onMicroCreated = () => {
  if (!isCache.value) {
    spinning.value = true
  }
}

const onMicroBeforemount = () => {
  dispatch('app/setCacheMicroName', props.name)
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
      :name="name"
      :baseroute="baseroute"
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
