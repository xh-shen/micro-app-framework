<!--
 * @Author: shen
 * @Date: 2022-06-08 13:50:49
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 21:34:19
 * @Description: 
-->
<script lang="ts">
import { defineComponent } from 'vue'
import { formProps } from './interface'
import InteralForm from './InteralForm.vue'

export default defineComponent({
  name: 'McForm',
  props: formProps,
  components: { InteralForm },
})
</script>

<template>
  <div class="mc-form">
    <InteralForm v-bind="$props" />
  </div>
</template>

<style scoped lang="scss"></style>
