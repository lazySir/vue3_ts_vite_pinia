<template>
  <div class="tagBox-container">
    <el-tag
      v-for="(item, index) in tagList"
      :effect="nightTheme"
      :type="nightClass"
      :key="item.meta.title"
      @click="tagBoxStore.pushRoute(item.name)"
      @close="tagBoxStore.deleteTag(index)"
      :closable="index !== 0"
    >
      <div>
        <p v-if="globalStore.isShowTabIcon" :class="item.icon"></p>
        {{ item.meta.title }}
      </div>
    </el-tag>
    <More class="more"></More>
  </div>
</template>
<script lang="ts" setup>
import { useTagBoxStore } from '@/store/tagBox'
import { useSwitchStore } from '@/store/switch'
import { storeToRefs } from 'pinia'
import {useGolbalStore} from '@/store/global'
import More from '@/layouts/components/tagBox/components/more.vue'
const globalStore = useGolbalStore()
const tagBoxStore = useTagBoxStore()
const { tagList } = storeToRefs(tagBoxStore)
const switchStore = useSwitchStore()
const { nightTheme, nightClass } = storeToRefs(switchStore)
</script>
<style scoped>
@import './index.scss';
</style>
