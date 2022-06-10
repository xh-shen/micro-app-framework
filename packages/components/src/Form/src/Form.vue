<!--
 * @Author: shen
 * @Date: 2022-06-08 13:50:49
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 17:08:29
 * @Description: 
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formProps } from './interface'
import InteralForm from './InteralForm.vue'

type InteralFormInstance = InstanceType<typeof InteralForm>

export default defineComponent({
  name: 'McForm',
  props: formProps,
  components: { InteralForm },
  setup(_, { expose }) {
    const interalFormRef = ref<InteralFormInstance>()

    const getFormValue = () => {
      return interalFormRef.value?.getFormValue()
    }

    expose({
      /** @description getFormValue form */
      getFormValue,
    })

    return {
      interalFormRef,
      getFormValue,
    }
  },
})
</script>

<template>
  <div class="mc-form">
    <InteralForm ref="interalFormRef" v-bind="$props" />
  </div>
</template>

<style scoped lang="scss"></style>
