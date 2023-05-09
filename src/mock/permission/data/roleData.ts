import { reactive } from 'vue'
export let roleData = reactive([
  { roleId: 1, name: 'Boss', remarks: '超级管理员', date: '2023/5/7 00:00:00', menuIdList: [1, 2, 3, 4], code: true },
  { roleId: 2, name: 'tourist', remarks: '游客', date: '2023/5/8 23:39:00', menuIdList: [2, 3, 4], code: true },
  { roleId: 3, name: 'text', remarks: '测试', date: '2023/5/8 23:39:00', menuIdList: [3, 4], code: false },
])