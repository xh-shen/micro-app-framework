/*
 * @Author: shen
 * @Date: 2022-06-08 10:32:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 09:08:33
 * @Description:
 */
import type { UseFormValueRes as FormMethods } from './src/hooks/useFormValue'
import { withInstall } from '@micro/utils'
import Form from './src/Form.vue'

import './src/form.scss'

export const McForm = withInstall(Form)
export default McForm

export * from './src/interface'

export type FormInstance = InstanceType<typeof Form>

export type { FormMethods }
