<template>
  <el-button type="danger" class="delete" icon="delete">批量删除</el-button>
  <span class="parentBorder">显示边框: <el-switch v-model="parentBorder" /></span>
  <el-table @selection-change="handleSelectionChange" :border="parentBorder" :data="roleData" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column align="center" prop="name" label="名称" width="100" />
    <el-table-column prop="code" label="状态" width="70">
      <template #default="scope">
        <el-tag :type="scope.row.code ? 'success' : 'danger'">{{ scope.row.code ? '启用' : '禁用' }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="date" label="创建时间" width="200" >
      <template #default = 'scope'>
        <p class="i-ic:round-alarm"></p>
        <span>{{  scope.row.date}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="remarks" label="备注" width="" />
    <el-table-column align="center" label="操作" width="100">
      <template #default="scope">
        <p style="color: rgb(106, 158, 226)" class="i-line-md:edit"></p>
        <p style="color: rgb(255, 0, 0)" class="i-material-symbols:delete-outline"></p>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
const parentBorder = ref(true)
const selected = ref([])
//将被选择的行的数据存储在selected中
const handleSelectionChange = (val:any)=> {
  selected.value = val
}
let roleData = reactive([
  { roleId: 1, name: 'Boss', remarks: '超级管理员', date: '2023/5/7 00:00:00', menuIdList: [1, 2, 3, 4], code: true },
  { roleId: 2, name: 'tourist', remarks: '游客', date: '2023/5/8 23:39:00', menuIdList: [2, 3, 4], code: true },
  { roleId: 3, name: 'text', remarks: '测试', date: '2023/5/8 23:39:00', menuIdList: [3, 4], code: false },
])
</script>
<style lang="scss" scoped>
.el-table {
  margin-top: 10px;
}
p {
  float: left;
  font-size: 17px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba($color: rgba(124, 123, 123, 0.726), $alpha: 1);
  }
}
.parentBorder {
  float: right;
}
.delete {
  margin-left: 10px;
}
</style>
