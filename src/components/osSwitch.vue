<template>
  <el-switch @change='switchStore.changeOS' v-model="os" class="mt-2" style=" --el-switch-off-color: #8B8989"  />
</template>

<script setup lang="ts">
import {useSwitchStore} from '@/store/switch'
import {storeToRefs} from 'pinia'
const switchStore = useSwitchStore()
const {os} = storeToRefs(switchStore)
</script>
<style scoped>
.el-switch {
  margin-left: 15px;
}
</style>
