import requests from '@/utils/request'
import { baseUrl } from '@/api/permission/baseUrl'
const api = {
  get: baseUrl + '/getUser',
  update: baseUrl + '/updateUser',
  delete: baseUrl + '/deleteUser',
}
//获取用户列表
export const reqGetUserList = () =>
  requests({
    url: api.get,
    method: 'get',
  })

//修改用户
export const reqUpdateUser = (data: any) =>
  requests({
    url: api.update,
    method: 'put',
    data,
  })
//删除用户
export const reqDeleteUser = (username:any) =>{
  return requests({
    url: api.delete + `/${username}`,
    method: 'delete',
  })
}