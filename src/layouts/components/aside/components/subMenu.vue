<template>
  <template v-for="item in filterRoutes">
    <!-- 有子项 -->
    <el-sub-menu v-if="item.children.length > 1" :key="item.path" :index="item.path">
      <template #title>
        <el-icon>
          <i :class="item.icon" style="font-size: 17px; margin-right: 5px"></i>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group v-for="itemChildrens in item.children" :key="itemChildrens.path">
        <el-menu-item @click="asideStore.pushPath(itemChildrens)" :index="itemChildrens.path">
          <el-icon>
            <i :class="itemChildrens.icon" style="font-size: 17px; margin-right: 5px"></i>
          </el-icon>
          <span>{{ itemChildrens.meta.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <!-- 无子项 -->
    <el-menu-item v-else :index="item.meta.title" :key="item.path + '-item'" @click="asideStore.pushPath(item)">
      <i :class="item.icon" style="font-size: 17px; margin-right: 5px"></i>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
const { filterRoutes } = asideStore
</script>
<style scoped></style>
