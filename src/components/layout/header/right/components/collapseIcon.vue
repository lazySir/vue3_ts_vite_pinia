<template>
  <span @click="changeToggle" class="collapse-icon">
    <img v-if="isToggle" src="@/assets/header/shrink.svg" alt="" />
    <img v-else src="@/assets/header/expand.svg" alt="" />
  </span>
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
span,
img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
span {
  margin-left: 15px;
}
</style>
