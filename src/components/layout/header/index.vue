<template>
  <div class="el-header">
    <div class="l-content">
      <leftContent />
    </div>
    <div class="r-content">
      <rightContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import leftContent from './left/index.vue'
import rightContent from './right/index.vue'
</script>

<style scoped>

.el-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 0 15px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;

}
</style> 
