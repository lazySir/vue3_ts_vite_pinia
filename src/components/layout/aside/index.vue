<template>
  <div class="container">
    <!-- @open="handleOpen" @close="handleClose" -->
    <el-menu :collapse="asideStore.isCollapse" active-text-color="#ffd04b" background-color="#191A20" class="el-menu-vertical-demo" default-active="2" text-color="#fff">
      <logoForm  />
      <!-- 无子项 -->
      <noChildren />
      <!-- 有子项 -->
      <hasChildren />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import noChildren from './noChildren.vue' //没有子项的菜单
import hasChildren from './hasChildren.vue'//有子菜单的菜单
import logoForm from './logo.vue'
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>

<style lang="scss">

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.container {
  height: 100%;
}

//让el-menu铺满整个容器
.container {
  height: 100vh;
}

.el-menu {
  height: 100%;
}
</style>
