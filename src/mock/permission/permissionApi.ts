import { baseUrl } from '../baseApi'
const permissionBaseUrl = baseUrl + '/permission'
//菜单管理api
export const permissionMenuApi = {
  get: permissionBaseUrl + '/getMenu',
  add: permissionBaseUrl + '/addMenu',
  update: permissionBaseUrl + '/updateMenu',
  delete: /\/api\/permission\/deleteMenu\/\d+/,
}

export const permissionRoleApi = {
  get: permissionBaseUrl + '/getRole',
  update: permissionBaseUrl + '/updateRole',
  add: permissionBaseUrl + '/addRole',
  delete: /\/api\/permission\/deleteRole\/\d+/,
  deletes: permissionBaseUrl + '/deleteRoles',
}
