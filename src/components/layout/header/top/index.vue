<template>
  <div class="top">
    <div class="l-content">
      <leftContent />
    </div>
    <div class="r-content">
      <rightContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import leftContent from '@/components/layout/header/top/left/index.vue'
import rightContent from '@/components/layout/header/top/right/index.vue'
</script>

<style scoped>
.top {
    height: 55px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
