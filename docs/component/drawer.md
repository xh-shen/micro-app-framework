---
title: Drawer 抽屉
---

# Drawer 抽屉

基于Element Plus封装，重新定制了布局样式。

## 基础用法

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

:::demo 设置`v-model`属性控制抽屉的状态。

drawer/basic

:::

## 自定义位置

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。

:::demo 通过`direction`属性设置抽屉位置。 该属性的值可以是：`rtl`、`ltr`、`ttb`或`btt`。

drawer/direction

:::

## 自定义大小

抽屉的默认宽度或高度为 30%。

:::demo 通过`size`属性设置抽屉大小。

drawer/size

:::

## 自定义样式

抽屉的头部和容器都可以定制化样式。

:::demo 通过`body-style`和`header-style`属性定制化抽屉的样式。

drawer/custom-style

:::

## 额外操作

抽屉的头部右侧区域可以自定义内容。

:::demo 通过`extra`具名插槽设置内容吧。

drawer/extra

:::

## 无标题

抽屉的某些场景不需要显示标题。

:::demo 通过隐藏关闭按钮及不设置标题，同时不能有title和extra插槽，即可隐藏标题。

drawer/no-title

:::

## 抽屉表单

抽屉的某些场景不需要显示标题。

:::demo 通过隐藏关闭按钮及不设置标题，同时不能有title和extra插槽，即可隐藏标题。

drawer/custom-form

:::

## 嵌套抽屉

抽屉组件拥有多层嵌套的方法。

:::demo 需要设置 model-value 属性，它的类型是 boolean,当为 true 时显示 Drawer。

drawer/nesting

:::

## 属性

| 属性             | 说明                                        | 类型            | 可选值             | 默认值 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------- |
| model-value / v-model | 是否显示 Drawer                                                                                                                                                                                                                                                                                   | `boolean`                                                                                                                                                | —                     | false   |
| append-to-body        | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须为**true**                                                                                                                                                                                                 | `boolean`                                                                                                                                                | —                     | true   |
| before-close          | 关闭前的回调，会暂停 Drawer 的关闭                                                                                                                                                                                                                                                                     | `function(done)，done 用于关闭 Drawer` | —                     | —       |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Drawer                                                                                                                                                                                                                                                        | `boolean`                                                                                                                                                | —                     | true    |
| custom-class          | Drawer 的自定义类名                                                                                                                                                                                                                                                                                 | `string`                                                                                                                                                 | —                     | —       |
| destroy-on-close      | 控制是否在关闭 Drawer 之后将子元素全部销毁                                                                                                                                                                                                                                           | `boolean`                                                                                                                                                | -                     | false   |
| direction             | Drawer 打开的方向                                                                                                                                                                                                                                                                                   | `Direction`                                                                                                                                              | rtl / ltr / ttb / btt | rtl     |
| show-close            | 是否显示关闭按钮                                                                                                                                                                                                                                                          | `boolean`                                                                                                                                                | —                     | true    |
| size                  | Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释 | number / `string`                                                                                                                                        | -                     | '30%'   |
| title                 | Drawer 的标题，也可通过具名 slot （见下表）传入                                                                                                                                                                                                           | `string`                                                                                                                                                 | —                     | —       |
| modal-class           | 遮罩层的自定义类名                                                                                                                                                                                                                                                                        | `string`                                                                                                                                                 | -                     | -       |
| header-style      | 页头自定义样式                              | `CSSProperties` | -                  | -      |
| body-style        | 容器自定义样式                              | `CSSProperties` | -                  | -      |

## 插槽

| 插槽名	   | 说明          |
| ------ | ------------- |
| -      | Drawer 的内容     |
| title | Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| extra  | Drawer header右上角自定义区域 |

## Drawer Methods

| 名称        | 说明                                                     |
| ----------- | --------------------------------------------------------------- |
| handleClose | 用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法 |

## Drawer Events

| 事件名称	 | 说明              | 参数  |
| ---------- | -----------     | --------- |
| open       | Drawer 打开的回调   | —         |
| opened     | Drawer 打开动画结束时的回调   | —         |
| close      | Drawer 关闭的回调 | —         |
| closed     | Drawer 关闭动画结束时的回调  | —         |
