<template>
  <el-table :data="permissionMenuStore.menuList" stripe row-key="menuId" border>
    <el-table-column label="更新时间" width="180">
      <template #default="scope">
        <el-tag type="warning">
          <el-icon><Timer /></el-icon>
          <span>{{ scope.row.date }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="更新用户" width="180">
      <template #default="scope">
        <el-tag type="success">
          <el-icon><User /></el-icon>
          <span>{{ scope.row.name }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="权限名称">
      <template #default="scope">
        <el-tag type="primary">
          <el-icon size="mini">
            <component :is="scope.row.icon" />
          </el-icon>
          <span>{{ scope.row.menuKey }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="权限值">
      <template #default="scope">
        <el-tag type="danger">
          <span>{{ scope.row.menuValue }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="primary" icon="plus"></el-button>
        <!-- 修改 -->
        <el-button type="warning" :disabled="isDisabled(scope.row.level)" icon="edit"></el-button>
        <!-- 删除 -->
        <el-button type="danger" :disabled="isDisabled(scope.row.level)" icon="delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { usePermissionMenuStore } from '@/store/permission/menu.ts'
const permissionMenuStore = usePermissionMenuStore()
onMounted(() => {
  permissionMenuStore.getMenuList()
})
//在mounted时发送请求
function isDisabled(row) {
  return row == 1
}
</script>
<style lang="less" scoped>
.el-table {
  width: 100%;
  margin-top: 10px;
}
</style>
