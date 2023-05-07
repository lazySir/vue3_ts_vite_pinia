<template>
  <span class="switchBorder"> 父级边框: <el-switch v-model="parentBorder" /> 子级边框: <el-switch v-model="childBorder" /> </span>
  <span class="radioLayout">
    <el-radio-group v-model="tableLayout">
      <el-radio-button label="fixed">均衡</el-radio-button>
      <el-radio-button label="auto">自适应</el-radio-button>
    </el-radio-group>
  </span>
  <el-table :default-sort="{ prop: 'dateTimestamp', order: 'descending' }" :data="filterTableData" :table-layout="tableLayout" stripe row-key="menuId" :border="parentBorder">
    <!-- 子菜单 -->
    <el-table-column type="expand">
      <template #default="props">
        <div>
          <h3>{{ props.row.menuKey }}子路由</h3>
          <el-table :data="props.row.children" :border="childBorder">
            <el-table-column sortable prop="date" label="更新时间">
              <template #default="scope">
                <el-tag type="warning">
                  <el-icon><Timer /></el-icon>
                  <span>{{ scope.row.date }}</span>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="更新用户">
              <template #default="scope">
                <el-tag type="success">
                  <el-icon><User /></el-icon>
                  <span>{{ scope.row.avatar }}</span>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="权限名称">
              <template #default="scope">
                <el-tag type="">
                  <p style="display: inline-block" :class="scope.row.icon"></p>
                  <span>{{ scope.row.title }}</span>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="权限值">
              <template #default="scope">
                <el-tag type="danger">
                  <span>{{ scope.row.name }}</span>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <!-- <el-button type="primary" @click='addOrUpdate({level:scope.row.level,menuKey:scope.row.menuKey})' icon="plus"></el-button> -->
                <!-- 修改 -->
                <el-button type="warning" @click="addOrUpdate({ PmenuId: props.row.menuId, Ptitle: props.row.title, ...scope.row })" icon="edit"></el-button>
                <!-- 删除 -->
                <el-button @click="deleteMenu(scope.row)" type="danger" icon="delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </el-table-column>
    <!-- 父菜单 -->
    <el-table-column sortable prop="date" label="更新时间">
      <template #default="scope">
        <el-tag type="warning">
          <el-icon><Timer /></el-icon>
          <span>{{ scope.row.date }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="更新用户">
      <template #default="scope">
        <el-tag type="success">
          <el-icon><User /></el-icon>
          <span>{{ scope.row.avatar }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="权限名称">
      <template #default="scope">
        <el-tag type="">
          <p style="display: inline-block" :class="scope.row.icon"></p>
          <span>{{ scope.row.title }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="权限值">
      <template #default="scope">
        <el-tag type="danger">
          <span>{{ scope.row.name }}</span>
        </el-tag>
      </template>
    </el-table-column>
    <!-- 搜索 -->
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入权限名称查找" />
      </template>
      <!-- 操作 -->
      <template #default="scope">
        <el-button type="primary" @click="addOrUpdate({ PmenuId: scope.row.menuId, level: scope.row.level, Ptitle: scope.row.title })" icon="plus"></el-button>
        <!-- 修改 -->
        <el-button type="warning" @click="addOrUpdate({ ...scope.row })" icon="edit"></el-button>
        <!-- 删除 -->
        <el-button @click="deleteMenu(scope.row)" type="danger" icon="delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { onMounted, ref, defineEmits, computed } from 'vue'
import { usePermissionMenuStore } from '@/store/permission/menu'
const permissionMenuStore = usePermissionMenuStore()
const parentBorder = ref(false)
const childBorder = ref(false)
const tableLayout = ref('fixed')
//在mounted时发送请求
onMounted(() => {
  permissionMenuStore.getMenuList()
})
//子调用父方法
const emits = defineEmits(['showDialog'])
const addOrUpdate = (row: any) => {
  emits('showDialog', row)
}
//删除菜单
const deleteMenu = (row: any) => {
  permissionMenuStore.deleteMenu(row.menuId)
}
//搜索
const search = ref('')
const filterTableData = computed(() => permissionMenuStore.menuList.filter((data: any) => !search.value || data.title.toLowerCase().includes(search.value.toLowerCase())))
</script>
<style lang="scss" scoped>
@import './menuList.scss'
</style>
