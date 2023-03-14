<template>
  <el-switch @change='toggleDark' v-model="value2" class="mt-2" style="--el-switch-on-color: #0d0d0d; --el-switch-off-color: #8B8989" inline-prompt active-icon="Moon" inactive-icon="Sunny" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const value2 = ref(true)
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
<style scoped>
.el-switch {
  margin-left: 15px;
}
</style>
