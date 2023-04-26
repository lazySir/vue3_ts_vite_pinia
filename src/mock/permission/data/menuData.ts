import {reactive} from 'vue'

export let menuList =  reactive([
  {
    menuId: 1,
    date: '2023-04-25',
    name: '超级管理员',
    menuKey: '权限管理',
    menuValue: 'Permission',
    icon: 'Lock',
    level: 1,
    children: [
      {
        menuId: 11,
        date: '2023-04-25',
        name: '超级管理员',
        menuKey: '角色管理',
        menuValue: 'role',
        icon: 'Avatar',
        level: 2,
      },
      {
        menuId: 12,
        date: '2023-04-25',
        name: '超级管理员',
        menuKey: '用户管理',
        menuValue: 'user',
        icon: 'User',
        level: 2,
      },
      {
        menuId: 13,
        date: '2023-04-25',
        name: '超级管理员',
        menuKey: '菜单管理',
        menuValue: 'menus',
        icon: 'Menu',
        level: 2,
      },
    ],
  },
])