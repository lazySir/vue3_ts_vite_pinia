import Mock from 'mockjs'
import userAPI from './user'
Mock.mock('/api/login','post',userAPI.login)
Mock.mock('/api/logout','post',userAPI.logout)
Mock.mock('/api/register','post',userAPI.register)
import permissionMenuAPI from './permission/menu'
Mock.mock('/api/permission/getMenu','get',permissionMenuAPI.getMenuList)