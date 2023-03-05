<template>
  <div class="el-header">
    <div class="l-content">
      <leftContent />
    </div>
    <div class="r-content">
      <!-- <rightContent /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import leftContent from './left/index.vue'
// import rightContent from './Right'
</script>

<style scoped>
.header-container {
  padding: 0 20px;
  overflow: hidden;
  box-shadow: 0 1px 4px #00152926;
  background-color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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
