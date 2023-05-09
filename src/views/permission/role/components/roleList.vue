<template>
  <el-button type="primary" @click="edit" icon="plus">添加角色</el-button>
  <el-button type="danger" class="delete" icon="delete">批量删除</el-button>
 <span class="parentBorder">显示边框: <el-switch v-model="parentBorder" /></span>
  <el-input v-model="search" placeholder="请输入角色名称搜索" :suffix-icon="Search" style="border-radius: 400px; margin-left: 30px; width: 200px"></el-input>
  <el-table @selection-change="handleSelectionChange" :border="parentBorder" :data="filterRoleList" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column align="center" prop="name" label="名称" width="100" />
    <el-table-column prop="code" label="状态" width="70">
      <template #default="scope">
        <el-tag :type="scope.row.code ? 'success' : 'danger'">{{ scope.row.code ? '启用' : '禁用' }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="date" label="创建时间" width="200">
      <template #default="scope">
        <p class="i-ic:round-alarm"></p>
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="remarks" label="备注" width="" />
    <el-table-column align="center" label="操作" width="100">
      <template #default="scope">
        <p @click="edit(scope.row)" style="color: rgb(106, 158, 226)" class="i-line-md:edit"></p>
        <p @click="deleteRole(scope.row.roleId)" style="color: rgb(255, 0, 0)" class="i-material-symbols:delete-outline"></p>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted,computed,defineEmits} from 'vue'
import { usePermissionRoleStore } from '@/store/permission/role'
import { Search } from '@element-plus/icons-vue'
const permissionRoleStore = usePermissionRoleStore()
const parentBorder = ref(true)
const selected = ref([])
let search = ref('')

//将被选择的行的数据存储在selected中
const handleSelectionChange = (val: any) => {
  selected.value = val
}
//删除角色
const deleteRole = (val: any) => {
  permissionRoleStore.deleteRole(val)
}
//获取角色列表
onMounted(() => {
  permissionRoleStore.getRoleList()
})
//搜索
const filterRoleList=computed(()=>{
  return permissionRoleStore.roleList.filter((data: any) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase()))
})
//子调用父方法
const emits = defineEmits(['openDrawer'])
//添加和编辑 ---> 打开抽屉
const edit = (val:any) => {
  emits('openDrawer',val)
}
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

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

</style>
