<template>
  <div class="el-container">
    <el-container>
      <el-header>
        <logoForm class="logo"></logoForm>
        <Header class="Header"></Header>
      </el-header>
      <tagBox v-if="globalStore.isShowTab"></tagBox>
      <el-container>
        <el-aside width="auto"><Aside class="aside-container"></Aside></el-aside>
        <el-container>
          <el-main><Main></Main></el-main>
          <el-footer v-if="globalStore.isShowFooter"><Footer></Footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import tagBox from '@/layouts/components/tagBox/index.vue'
import logoForm from '@/layouts/components/logo/index.vue'
import Header from '@/layouts/components/header/index.vue'
import Aside from '@/layouts/components/aside/index.vue'
import Main from '@/layouts/components/main/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import { useGolbalStore } from '@/store/global'
const globalStore = useGolbalStore()
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
