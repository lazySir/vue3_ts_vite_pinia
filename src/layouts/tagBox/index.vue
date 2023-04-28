<template>
  <div class="tagBox-container">
    <el-tag v-for="(item, index) in tagList" :effect="nightTheme" :type='nightClass' :key="item.title" @click="tagBoxStore.pushRoute(item.name)" @close="tagBoxStore.deleteTag(index)" :closable="index !== 0">
      <span v-if="item.icon != ''">
        <component style="width: 12px" :is="item.icon"></component>
      </span>

      {{ item.title }}</el-tag
    >
  </div>
</template>
<script lang="ts" setup>
import { useTagBoxStore } from '@/store/tagBox'
import { useSwitchStore } from '@/store/switch'
import { storeToRefs } from 'pinia'
const tagBoxStore = useTagBoxStore()
const { tagList ,deleteTag} = storeToRefs(tagBoxStore)
const switchStore = useSwitchStore()
const { nightTheme,nightClass } = storeToRefs(switchStore)
</script>
<style scoped>
@import './index.scss'
</style>
