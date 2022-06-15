/*
 * @Author: shen
 * @Date: 2022-06-08 10:32:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 23:15:57
 * @Description:
 */

import { withInstall } from '@micro/utils'
import Form from './src/Form.vue'
import QueryFilter from './src/QueryFilter.vue'
import './src/form.scss'

export const McForm = withInstall(Form, {
  Query: QueryFilter,
})

export default McForm

export { QueryFilter as McQueryFilter }

export * from './src/interface'

export type FormInstance = InstanceType<typeof Form>
export type QueryFilterInstance = InstanceType<typeof QueryFilter>
