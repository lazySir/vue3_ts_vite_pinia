<template>
  <el-switch @change='switchStore.changeTheme' v-model="night" class="mt-2" style="--el-switch-on-color: #0d0d0d; --el-switch-off-color: #8B8989" inline-prompt active-icon="Moon" inactive-icon="Sunny" />
</template>

<script setup lang="ts">
import {useSwitchStore} from '@/store/switch'
import {storeToRefs} from 'pinia'
const switchStore = useSwitchStore()
const {night} = storeToRefs(switchStore)
</script>
<style scoped>
.el-switch {
  margin-left: 15px;
}
</style>
