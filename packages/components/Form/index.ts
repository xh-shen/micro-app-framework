/*
 * @Author: shen
 * @Date: 2022-06-08 10:32:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 13:34:03
 * @Description:
 */
import { withInstall } from '@micro/utils'
import Form from './src/Form.vue'
import './src/form.scss'

export const McForm = withInstall(Form)
export default McForm

export * from './src/interface'

export type FormInstance = InstanceType<typeof Form>
