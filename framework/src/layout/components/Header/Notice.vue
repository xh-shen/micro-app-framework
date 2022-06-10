<!--
 * @Author: shen
 * @Date: 2022-06-05 15:31:56
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:07:25
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { ElPopover, ElTabs, ElTabPane, ElBadge } from 'element-plus'
import { McSvgIcon } from '@micro/components'

const active = ref<string>('notice')
</script>

<template>
  <span>
    <ElPopover popper-class="header-notice-popover" placement="bottom-end" trigger="click" width="350px">
      <template #reference>
        <span class="notice-content">
          <ElBadge :value="200" :max="99" type="danger" class="notice-badge" is-dot>
            <McSvgIcon name="notice" />
          </ElBadge>
        </span>
      </template>
      <ElTabs v-model="active">
        <ElTabPane label="通知(10)" name="notice">
          <div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
          </div>
          <div class="notive-btn">
            <span>清空 通知</span>
            <span>查看更多</span>
          </div>
        </ElTabPane>
        <ElTabPane label="消息(5)" name="news">
          <div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
          </div>
          <div class="notive-btn">
            <span>清空 通知</span>
            <span>查看更多</span>
          </div>
        </ElTabPane>
        <ElTabPane label="待办(7)" name="need">
          <div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
            <div class="notice-tab-pane">
              <div class="name">任务名称</div>
              <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
            </div>
          </div>
          <div class="notive-btn">
            <span>清空 通知</span>
            <span>查看更多</span>
          </div>
        </ElTabPane>
      </ElTabs>
    </ElPopover>
  </span>
</template>

<style scoped lang="scss">
.notice-content {
  display: block;
  padding: 0 15px;
}
.notice-badge {
  position: relative;
  top: -1px;
  height: 20px;
  line-height: 20px;
}
.header-notice-popover {
  padding: 12px 0 0 !important;
  .el-tabs__nav-wrap {
    padding-left: 50px;
  }
  .el-tabs__nav-scroll {
    .el-tabs__item {
      height: 45px;
      font-weight: 400;
    }
  }
  .notice-tab-pane {
    padding: 12px 24px;
    color: rgba(0, 0, 0, 0.85);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 1px solid #f0f0f0;
    .name {
      margin-bottom: 8px;
      font-weight: 400;
    }
    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 1.5715;
    }
    &:hover {
      background: #e6f7ff;
    }
  }
  .notive-btn {
    height: 46px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 46px;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px;
    transition: all 0.3s;
    span {
      display: inline-block;
      width: 50%;
      cursor: pointer;
      transition: all 0.3s;
      user-select: none;
      &:not(:only-child):last-child {
        border-left: 1px solid #f0f0f0;
      }
    }
  }
}
</style>
