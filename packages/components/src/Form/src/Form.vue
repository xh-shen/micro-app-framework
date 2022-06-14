<!--
 * @Author: shen
 * @Date: 2022-06-08 10:32:46
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 08:04:38
 * @Description: 
-->
<script lang="ts">
import type { ColProps, FormItemType } from './interface'
import { defineComponent, computed, shallowRef, watch, toRaw, ref } from 'vue'
import { ElForm, FormInstance } from 'element-plus'
import { formProps } from './interface'
import { useProvideForm } from './context/FormContext'
import useFormValues from './hooks/useFormValues'
import useFormItems from './hooks/useFormItems'
import FormWrapper from './components/FormWrapper.vue'
import FormItems from './components/FormItems.vue'
export default defineComponent({
  name: 'McForm',
  props: formProps,
  components: { ElForm, FormWrapper, FormItems },
  setup(props, { expose }) {
    const elFormRef = ref<FormInstance>()

    const EMPTY_LIST: FormItemType[] = []

    const mode = computed(() => props.mode || 'edit')
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

    const { items, genItems, mergeInitialValues } = useFormItems(rawItems, toRaw(props.initialValues))

    const { formValues, updateValue, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate } = useFormValues(mergeInitialValues, elFormRef)

    const instanceMethods = { updateValue, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate }

    useProvideForm({
      mode,
      labelWidth,
      labelPosition,
      disabled,
      colProps,
      genItems,
      formValues,
      updateValue,
    })

    expose({
      ...instanceMethods,
    })

    return {
      items,
      formValues,
      elFormRef,
      ...instanceMethods,
    }
  },
})
</script>

<template>
  <ElForm ref="elFormRef" class="mc-form" :model="formValues" :label-width="labelWidth" :label-position="labelPosition" :disabled="disabled">
    <FormWrapper :gutter="gutter">
      <FormItems :list="items" />
    </FormWrapper>
  </ElForm>
</template>
