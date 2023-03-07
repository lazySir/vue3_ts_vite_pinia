<template>
  <div class="common-layout">
    <!-- Layout布局  -->
    <el-container>
      <!-- 左边 -->
      <el-aside width="auto"><Aside /></el-aside>
      <!-- 右边 -->
      <el-container>
        <!-- 头部 -->
        <el-header><Header /></el-header>
        <!-- 主体展示 -->
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from './header/index.vue'
import Aside from './aside/index.vue'
import Main from './main/index.vue'
</script>
<style scoped>
.el-header {
  --el-header-padding: 0 0px;
}
.el-main {
  height: calc(100vh - 64px)
}
</style>
