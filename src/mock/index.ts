import Mock from 'mockjs'
//登录注册
import user from './user/user'
import { userApi } from './user/userApi'
Mock.mock(userApi.login,'post',user.login)
Mock.mock(userApi.logout,'post',user.logout)
Mock.mock(userApi.register,'post',user.register)
//权限管理
import permissionMenu from './permission/menu'
import { permissionMenuApi } from './permission/permissionApi'
Mock.mock(permissionMenuApi.get,'get',permissionMenu.getMenuList)
Mock.mock(permissionMenuApi.add,'post',permissionMenu.addMenu)
Mock.mock(permissionMenuApi.update,'put',permissionMenu.updateMenu)
Mock.mock(permissionMenuApi.delete,'delete',permissionMenu.deleteMenu)