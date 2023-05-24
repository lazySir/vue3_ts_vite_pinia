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
import leftContent from '@/layouts/components/header/left/index.vue'
import rightContent from '@/layouts/components/header/right/index.vue'
</script>

<style scoped>
@import  './index.scss'
</style>
