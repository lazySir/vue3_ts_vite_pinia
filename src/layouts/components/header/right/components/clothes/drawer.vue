<template>
  <el-drawer size="18%" class="drawer" v-model="drawer">
    <template #header>
      <h1 class="title">布局设置</h1>
    </template>
    <template #default>
      <!-- 布局切换 -->
      <el-divider class="divider" content-position="center">
        <el-icon><Notification /></el-icon>
        布局切换
      </el-divider>
      <div class="layout-box mb30">
        <div :class="['layout-item layout-vertical', { 'is-active': layout == 'vertical' }]" @click="setLayout('vertical')">
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="layout == 'vertical'"><CircleCheckFilled /></el-icon>
        </div>

        <div :class="['layout-item layout-classic', { 'is-active': layout == 'classic' }]" @click="setLayout('classic')">
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="layout == 'classic'"><CircleCheckFilled /></el-icon>
        </div>

        <div :class="['layout-item layout-transverse', { 'is-active': layout == 'transverse' }]" @click="setLayout('transverse')">
          <div class="layout-dark"></div>
          <div class="layout-content"></div>
          <el-icon v-if="layout == 'transverse'"><CircleCheckFilled /></el-icon>
        </div>

        <div :class="['layout-item layout-columns', { 'is-active': layout == 'columns' }]" @click="setLayout('columns')">
          <div class="layout-dark"></div>
          <div class="layout-light"></div>
          <div class="layout-content"></div>
          <el-icon v-if="layout == 'columns'"><CircleCheckFilled /></el-icon>
        </div>
      </div>
      <!-- 全局主题 -->
      <el-divider class="divider" content-position="center">
        <el-icon><ColdDrink /></el-icon>
        全局主题
      </el-divider>
      <div class="drawer_item">
        <span>主题颜色</span>
        <themeColor></themeColor>
      </div>
      <div class="drawer_item">
        <span>跟随系统</span>
        <osTheme></osTheme>
      </div>
      <div class="drawer_item">
        <span>暗黑模式</span>
        <darkTheme></darkTheme>
      </div>
      <!-- 界面设置 -->
      <el-divider class="divider" content-position="center">
        <el-icon><Setting /></el-icon>
        界面设置
      </el-divider>
      <div class="drawer_item">
        <span>折叠菜单</span>
        <el-switch @change="globalStore.changeCollapse" v-model="globalStore.isCollapse"></el-switch>
      </div>
      <div class="drawer_item">
        <span>面包屑</span>
        <el-switch v-model="globalStore.isShowBread"></el-switch>
      </div>
      <div class="drawer_item">
        <span>面包屑图标</span>
        <el-switch v-model="globalStore.isShowBreadIcon"></el-switch>
      </div>
      <div class="drawer_item">
        <span>标签栏</span>
        <el-switch v-model="globalStore.isShowTab"></el-switch>
      </div>
      <div class="drawer_item">
        <span>标签栏图标</span>
        <el-switch v-model="globalStore.isShowTabIcon"></el-switch>
      </div>
      <div class="drawer_item">
        <span>页脚</span>
        <el-switch v-model="globalStore.isShowFooter"></el-switch>
      </div>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import { storeToRefs } from 'pinia'
import darkTheme from '@/components/darkSwitch.vue'
import osTheme from '@/components/osSwitch.vue'
import themeColor from '@/components/themeColor.vue'
import { useGolbalStore } from '@/store/global'
const globalStore = useGolbalStore()
const { layout } = storeToRefs(globalStore)
const setLayout = (val: any) => {
  globalStore.setLayout(val)
}
const drawer = ref(false)
const showDrawer = () => {
  drawer.value = true
}
//暴露方法
defineExpose({ showDrawer })
</script>
<style lang="scss" scoped>
@import './drawer.scss';
</style>
