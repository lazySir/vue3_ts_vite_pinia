<template>
  <el-card class="home">
    <img class="home-bg" src="@/assets/images/welcome.png" alt="" />
  </el-card>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .home-bg {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
  }
}
</style>
