<template>
  <div class="header-container">
    <div class="l-container">
      <leftContent />
    </div>
    <div class="r-container">
      <rightContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import leftContent from '@/components/layout/header/left/index.vue'
import rightContent from '@/components/layout/header/right/index.vue'
</script>

<style scoped>
.header-container {
  height: 55px;
  /* --el-header-height: 55px; */
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
</style>
