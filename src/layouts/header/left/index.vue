<template>
  <div class='wrapper'>
    <!-- 收缩与否 -->
    <Hamburger></Hamburger>
    <!-- 面包屑-->
   <BreadCrumb></BreadCrumb>
  </div>
</template>

<script setup lang='ts'>
import BreadCrumb from '@/layouts/header/left/components/breadCrumb.vue'
import Hamburger from '@/layouts/header/left/components/hamburger.vue'

</script>

<style  scoped>

@import './index.scss'
</style>
