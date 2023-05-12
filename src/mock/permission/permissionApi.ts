import { baseUrl } from '../baseApi'
const permissionBaseUrl = baseUrl + '/permission'
//菜单管理api
export const permissionMenuApi = {
  get: permissionBaseUrl + '/getMenu',
  add: permissionBaseUrl + '/addMenu',
  update: permissionBaseUrl + '/updateMenu',
  delete: /\/api\/permission\/deleteMenu\/\d+/,
}
//角色管理api
export const permissionRoleApi = {
  get: permissionBaseUrl + '/getRole',
  update: permissionBaseUrl + '/updateRole',
  add: permissionBaseUrl + '/addRole',
  delete: /\/api\/permission\/deleteRole\/\d+/,
  deletes: permissionBaseUrl + '/deleteRoles',
}
//用户管理api
export const permissionUserApi={
  get: permissionBaseUrl + '/getUser',
  update:permissionBaseUrl +'/updateUser'
}