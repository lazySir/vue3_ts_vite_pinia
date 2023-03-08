<template>
  <div class='wrapper'>
    <!-- 收缩与否 -->
    <Hamburger></Hamburger>
    <!-- 面包屑-->
   <BreadCrumb></BreadCrumb>
  </div>
</template>

<script setup lang='ts'>
import BreadCrumb from './breadCrumb/index.vue'
import Hamburger from './hamburger/index.vue'

</script>

<style  scoped>
.wrapper{
  display: flex;
  align-items: center;
   justify-content: space-between;
}

</style>
