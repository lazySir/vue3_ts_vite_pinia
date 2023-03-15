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
import Header from '@/layouts/header/index.vue'
import Aside from '@/layouts/aside/index.vue'
import Main from '@/layouts/main/index.vue'
import tagBox from '@/layouts/tagBox/index.vue'
import Footer from '@/layouts/footer/index.vue'
</script>
<style scoped>
@import './index.scss'
</style>
