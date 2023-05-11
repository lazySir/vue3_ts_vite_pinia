<template>
  <el-input placeholder="输入账号查询"></el-input>
  <el-button class="search" type="primary" icon="search">搜索</el-button>
  <span class="parentBorder"> 边框: <el-switch v-model="parentBorder" /> </span>
  <el-button>清空</el-button>
  <el-table :border="parentBorder" :data="permisssionUserStore.userList" style="width: 100%">
    <el-table-column header-align="center" align="center" label="头像" width="100px">
      <template #default="scope">
        <el-image style="width: 50px; height: 50px" :src="scope.row.avatar" fit="cover"></el-image>
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
    <el-table-column header-align="center" align="center" prop="createTIme" label="创建时间"> </el-table-column>
    <el-table-column header-align="center" align="center" prop="updateTIme" label="更新时间"> </el-table-column>
    <el-table-column header-align="center" align="center" label="操作">
      <template #default="scope">
        <el-button type="info" icon="UserFilled"></el-button>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="danger" icon="delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const parentBorder = ref(true)
import { usePermissionUserStore } from '@/store/permission/user'
const permisssionUserStore = usePermissionUserStore()
onMounted(() => {
  permisssionUserStore.getUserList()
})
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
