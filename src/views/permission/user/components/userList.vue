<template>
  <el-input v-model="search" placeholder="输入账号查询"></el-input>
  <span class="parentBorder"> 边框: <el-switch v-model="parentBorder" /> </span>
  <el-table :border="parentBorder" :data="filterUserList" style="width: 100%">
    <el-table-column header-align="center" align="center" label="头像" width="100px">
      <template #default="scope">
        <el-image style="width: 50px; height: 50px; border-radius: 50%" :src="scope.row.avatar" fit="cover"></el-image>
      </template>
    </el-table-column>
    <el-table-column header-align="center" align="center" prop="username" label="账号" width="100px"> </el-table-column>
    <el-table-column header-align="center" align="center" prop="name" label="用户昵称" width="150px"> </el-table-column>
    <el-table-column header-align="center" align="center" prop="email" label="邮箱"> </el-table-column>
    <el-table-column header-align="center" align="center" label="角色">
      <template #default="scope">
        <el-tag class="roleList" v-for="item in scope.row.roleList" :type="item.code ? 'success' : 'danger'" :key="item.roleId">
          {{ item.name }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="code" label="状态" width="70">
      <template #default="scope">
        <el-tag :type="scope.row.code ? 'success' : 'danger'">{{ scope.row.code ? '正常' : '禁用' }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column header-align="center" align="center" prop="createTime" label="创建时间"> </el-table-column>
    <el-table-column header-align="center" align="center" prop="updateTime" label="更新时间"> </el-table-column>
    <el-table-column header-align="center" align="center" label="操作">
      <template #default="scope">
        <el-button @click="edit(scope.row)" type="primary" icon="edit"></el-button>
        <el-popconfirm cancel-button-text="取消" confirm-button-text="确认" @confirm="deleteUser(scope.row.username)" :title="`确定删除${scope.row.username}?`">
          <template #reference>
            <el-button type="danger" icon="delete"></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineEmits,computed} from 'vue'
import { usePermissionUserStore } from '@/store/permission/user'
const permisssionUserStore = usePermissionUserStore()
const parentBorder = ref(true)
const search =ref('')
const filterUserList = computed(()=>{
  return permisssionUserStore.userList.filter((item:any)=>item.username.includes(search.value))
})
onMounted(() => {
  permisssionUserStore.getUserList()
})
const emits = defineEmits(['openDrawer'])
//编辑按钮
const edit = (val: any) => {
  emits('openDrawer', val)
}
//删除按钮
const deleteUser = (val: any) => {
  permisssionUserStore.deleteUser(val)
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 150px;
}
.search {
  margin-left: 10px;
  margin-right: 10px;
}
.el-table {
  margin-top: 10px;
}
.parentBorder {
  float: right;
}
.roleList {
  margin: 0 5px;
}
</style>
