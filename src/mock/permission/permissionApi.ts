import { baseUrl } from '../baseApi'
const permissionBaseUrl = baseUrl+'/permission'
//菜单管理api
export const permissionMenuApi={
  get:permissionBaseUrl+'/getMenu',
  add:permissionBaseUrl+'/addMenu',
  update:permissionBaseUrl+'/updateMenu',
  delete:/\/api\/permission\/deleteMenu\/\d+/,
}