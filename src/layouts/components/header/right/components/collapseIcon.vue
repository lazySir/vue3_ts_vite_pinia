<template>
  <el-icon size="20px" @click="changeToggle">
    <i-ic-baseline-zoom-in-map v-if="isToggle" />
    <i-ic-baseline-zoom-out-map v-else />
  </el-icon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const { toggle } = useFullscreen()
const isToggle = ref(false)
const changeToggle = (): void => {
  toggle()
  isToggle.value = !isToggle.value
}
</script>

<style scoped lang="scss">
.el-icon {
  margin-left: 15px;
  cursor: pointer;
}
</style>
