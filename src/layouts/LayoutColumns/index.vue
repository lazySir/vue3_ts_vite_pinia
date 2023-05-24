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
        <tagBox v-if="globalStore.isShowTab"></tagBox>
        <!-- 主体展示 -->
        <el-main>
          <Main />
        </el-main>
        <el-footer v-if="globalStore.isShowFooter"><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/layouts/components/header/index.vue'
import Aside from '@/layouts/components/aside/index.vue'
import Main from '@/layouts/components/main/index.vue'
import tagBox from '@/layouts/components/tagBox/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import { useGolbalStore } from '@/store/global'
const globalStore = useGolbalStore()
</script>
<style scoped>
@import './index.scss';
</style>
