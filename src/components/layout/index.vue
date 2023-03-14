<template>
  <div class="el-container">
    <!-- Layout布局  -->
    <el-container>
      <!-- 左边 -->
      <el-aside width="auto"><Aside /></el-aside>
      <!-- 右边 -->
      <el-container>
        <!-- 头部 -->
        <el-header><Header /> </el-header>
        <tagBox></tagBox>
        <!-- 主体展示 -->
        <el-main><Main /></el-main>
         <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/components/layout/header/index.vue'
import Aside from '@/components/layout/aside/index.vue'
import Main from '@/components/layout/main/index.vue'
import tagBox from '@/components/layout/tagBox/index.vue'
import Footer from '@/components/layout/footer/index.vue'
</script>
<style scoped>
.el-header {
  --el-header-padding: 0 0px;
  --el-header-height: 55px;
}
.el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: #f0f2f5;
  height: calc(100vh - 55px - 30px - 30px - 10px);
}
.el-footer {
  height: 30px;
  background: #ffffff;
    border-top: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
