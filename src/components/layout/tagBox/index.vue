<template>
  <div class="tagBox-container">
    <el-tag v-for="(item, index) in tagList" :key="item.title" @click="tagBoxStore.pushRoute(item.name)" @close="tagBoxStore.deleteTag(index)" :closable="index !== 0">
      <span v-if="item.icon != ''">
        <component style="width: 12px" :is="item.icon"></component>
      </span>

      {{ item.title }}</el-tag
    >
  </div>
</template>
<script lang="ts" setup>
import { useTagBoxStore } from '@/store/tagBox'
import { storeToRefs } from 'pinia'
const tagBoxStore = useTagBoxStore()
const { tagList } = storeToRefs(tagBoxStore)
</script>
<style scoped>
.tagBox-container {
  height: 30px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.el-tag {
  margin-left: 5px;
  cursor: pointer;
}
</style>
