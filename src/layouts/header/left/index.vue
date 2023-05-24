<template>
  <div class="wrapper">
    <!-- 收缩与否 -->
    <Hamburger></Hamburger>
    <!-- 面包屑-->
      <BreadCrumb v-if="globalStore.isShowBread"></BreadCrumb>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/layouts/header/left/components/breadCrumb.vue'
import Hamburger from '@/layouts/header/left/components/hamburger.vue'
import { useGolbalStore } from '@/store/global'
const globalStore = useGolbalStore()
</script>

<style scoped>
@import './index.scss';
</style>
