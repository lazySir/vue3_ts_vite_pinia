<template>
  <el-drawer size="18%" class="drawer" v-model="drawer">
    <template #header>
      <h1 class="title">布局设置</h1>
    </template>
    <template #default>
      <p>全局主题</p>
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
      <p>界面设计</p>
      <div class="drawer_item">
        <span>折叠菜单</span>
        <el-switch @change="globalStore.changeCollapse" v-model="globalStore.isCollapse"></el-switch>
      </div>
      <div class="drawer_item">
        <span>面包屑</span>
        <el-switch  v-model="globalStore.isShowBread"></el-switch>
      </div>
      <div class="drawer_item">
        <span>面包屑图标</span>
        <el-switch  v-model="globalStore.isShowBreadIcon"></el-switch>
      </div>
      <div class="drawer_item">
        <span>标签栏</span>
        <el-switch  v-model="globalStore.isShowTab"></el-switch>
      </div>
      <div class="drawer_item">
        <span>标签栏图标</span>
        <el-switch  v-model="globalStore.isShowTabIcon"></el-switch>
      </div>
      <div class="drawer_item">
        <span>页脚</span>
        <el-switch  v-model="globalStore.isShowFooter"></el-switch>
      </div>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import darkTheme from '@/components/darkSwitch.vue'
import osTheme from '@/components/osSwitch.vue'
import themeColor from '@/components/themeColor.vue'
import { useGolbalStore } from '@/store/global'
const globalStore = useGolbalStore()
const drawer = ref(false)
const showDrawer = () => {
  drawer.value = true
}
//暴露方法
defineExpose({ showDrawer })
</script>
<style lang="scss" scoped>
.title {
  color: #303133;
  font-size: 17px;
}
p {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #000;
  &:before,
  &:after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #dcdfe6;
    margin: auto;
  }
}
.drawer_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 14px 0;
  color: #000;
}
</style>
