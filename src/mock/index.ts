import Mock from 'mockjs'
import userAPI from './user'
Mock.mock('/api/login','post',userAPI.login)
Mock.mock('/api/logout','post',userAPI.logout)
Mock.mock('/api/register','post',userAPI.register)
import permissionMenuAPI from './permission/menu'
Mock.mock('/api/permission/getMenu','get',permissionMenuAPI.getMenuList)
Mock.mock('/api/permission/addMenu','post',permissionMenuAPI.addMenu)
Mock.mock('/api/permission/updateMenu','put',permissionMenuAPI.updateMenu)
Mock.mock(/\/api\/permission\/deleteMenu\/\d+/,'delete',permissionMenuAPI.deleteMenu)