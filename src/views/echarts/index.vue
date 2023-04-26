<template>
  <el-row>
    <!-- 左侧展示 -->
    <el-col :span="8" style="padding-right: 10px">
      <leftComponent></leftComponent>
    </el-col>
    <!-- 右侧展示 -->
    <!-- <el-col :span="16" style="padding-left: 10px"> -->
    <!-- <RightCompont></RightCompont> -->
    <!-- </el-col> -->
  </el-row>
</template>

<script lang="ts" setup>
import leftComponent from '@/views/echarts/left/index.vue'
</script>
<style scoped></style>
