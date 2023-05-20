import { reactive } from 'vue'
import { asyncRoutes } from '@/router/asyncRoutes'
//为admin默认添加所有权限
const arr = []
for (let i = 1; i <= asyncRoutes.length; i++) {
  arr.push(i)
}

export let roleData = reactive([
  { roleId: 1, name: 'Boss', remarks: '超级管理员', date: '2023/5/7 00:00:00', menuIdList: [...arr], code: true },
  { roleId: 2, name: 'tourist', remarks: '游客', date: '2023/5/8 23:39:00', menuIdList: [2, 3, 401], code: true },
  { roleId: 3, name: 'text', remarks: '测试', date: '2023/5/8 23:39:00', menuIdList: [301, 4], code: false },
])

