<!--
 * @Author: shen
 * @Date: 2022-06-10 13:08:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-17 22:15:51
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormLabel as FormLabelType } from '../interface'
import { onMounted, ref } from 'vue'
import { ElCol } from 'element-plus'
import { useInjectForm } from '../context/FormContext'
import FormLabel from './FormLabel.vue'

const props = defineProps({
  label: [String, Number, Function] as PropType<FormLabelType>,
  groupKey: [String, Number],
  tooltip: String,
  fieldProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
})

const groupRef = ref<any>()

const { layoutType, addTab } = useInjectForm()

onMounted(() => {
  if (layoutType.value === 'TabsForm' && groupRef.value) {
    addTab({
      key: props.groupKey!,
      label: props.label!,
      el: groupRef.value?.$el,
    })
  }
})
</script>

<template>
  <ElCol :span="24" ref="groupRef">
    <div class="mc-form__group">
      <div class="mc-form__group-header">
        <div class="mc-form__group-label">
          <FormLabel :label="label" :tooltip="tooltip" />
        </div>
      </div>
    </div>
  </ElCol>
</template>

<style scoped lang="scss"></style>
