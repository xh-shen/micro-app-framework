<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 10:06:19
 * @Description: 
-->
<script setup lang="ts">
import type { UploadFile, UploadUserFile } from 'element-plus'
import { ref, computed } from 'vue'
import { ElUpload, ElButton } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), []))

const { onValueChange } = useFieldValue<UploadFile>(props.name)

const onChange = (uploadFile: UploadFile) => {
  onValueChange(uploadFile)
  props.onChange?.(uploadFile)
}

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
</script>

<template>
  <ElUpload :file-list="fileList" v-bind="elFieldProps" :disabled="disabled" style="width: 100%" :on-change="onChange">
    <ElButton :disabled="disabled">上传文件</ElButton>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
    </template>
  </ElUpload>
</template>

<style scoped lang="scss"></style>
