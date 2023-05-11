import Mock from 'mockjs'
//登录注册
import user from './user/user'
import { userApi } from './user/userApi'
Mock.mock(userApi.login, 'post', user.login)
Mock.mock(userApi.logout, 'post', user.logout)
Mock.mock(userApi.register, 'post', user.register)
//权限管理

//权限管理---菜单管理
import permissionMenu from './permission/menu'
import { permissionMenuApi } from './permission/permissionApi'
Mock.mock(permissionMenuApi.get, 'get', permissionMenu.getMenuList)
Mock.mock(permissionMenuApi.add, 'post', permissionMenu.addMenu)
Mock.mock(permissionMenuApi.update, 'put', permissionMenu.updateMenu)
Mock.mock(permissionMenuApi.delete, 'delete', permissionMenu.deleteMenu)
//权限管理--角色管理
import { permissionRoleApi } from './permission/permissionApi'
import permissionRole from './permission/role'
Mock.mock(permissionRoleApi.get, 'get', permissionRole.getRoleList)
Mock.mock(permissionRoleApi.update, 'put', permissionRole.updateRole)
Mock.mock(permissionRoleApi.add, 'post', permissionRole.addRole)
Mock.mock(permissionRoleApi.delete, 'delete', permissionRole.deleteRole)
Mock.mock(permissionRoleApi.deletes, 'delete', permissionRole.deleteRoles)
//权限管理---用户管理
import { permissionUserApi } from './permission/permissionApi'
import permissionUser from './permission/user'
Mock.mock(permissionUserApi.get, 'get', permissionUser.getUserList)
