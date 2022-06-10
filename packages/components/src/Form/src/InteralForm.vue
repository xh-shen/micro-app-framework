<!--
 * @Author: shen
 * @Date: 2022-06-08 10:32:46
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 10:00:18
 * @Description: 
-->
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
import type { ColProps, FormItemType } from './interface'
import { computed, shallowRef, watch, toRaw } from 'vue'
import { ElForm } from 'element-plus'
import { formProps } from './interface'
import { useProvideForm } from './context/FormContext'
import useFormValue from './hooks/useFormValue'
import useFormItems from './hooks/useFormItems'
import FormRow from './components/FormRow.vue'
import FormItems from './components/FormItems.vue'

const props = defineProps(formProps)

const EMPTY_LIST: FormItemType[] = []

const labelWidth = computed(() => props.labelWidth)
const labelPosition = computed(() => props.labelPosition)
const disabled = computed(() => props.disabled)
const colProps = computed(() => props.colProps || ({ span: 6 } as ColProps))

const rawItems = shallowRef<FormItemType[]>([])

watch(
  () => props.formItems,
  () => {
    rawItems.value = toRaw(props.formItems) || EMPTY_LIST
  },
  { immediate: true },
)

const { items, genItems, mergeInitialValue } = useFormItems(rawItems, toRaw(props.initialValue))

const { formValue } = useFormValue(mergeInitialValue)

useProvideForm({
  labelWidth,
  labelPosition,
  disabled,
  colProps,
  genItems,
  formValue,
})
</script>

<template>
  <div class="mc-form__wrapper">
    <ElForm :model="formValue" :label-width="labelWidth" :label-position="labelPosition" :disabled="disabled" :size="size">
      <FormRow :gutter="gutter">
        <FormItems :list="items" />
      </FormRow>
    </ElForm>
  </div>
</template>

<style scoped lang="scss"></style>
