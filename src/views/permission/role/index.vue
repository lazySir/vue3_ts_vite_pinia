<template>
  <el-card>
    <el-button type="primary" icon="plus">添加角色</el-button>
    <el-input  placeholder="请输入角色名称搜索" :suffix-icon="Search" style="border-radius: 400px; margin-left: 30px; width: 200px"></el-input>
    <roleList></roleList>
    
  </el-card>
</template>
<script lang="ts" setup>
import roleList from './components/roleList.vue'
import { Search } from '@element-plus/icons-vue'
</script>
<style scoped>
.el-input{
  float:right;
}
</style>
