import requests from '@/utils/request'
import {baseUrl} from '@/api/permission/baseUrl'
const api = {
  get: baseUrl + '/getUser',
}
//获取菜单列表
export const reqGetUserList = () =>
  requests({
    url: api.get,
    method: 'get',
  })

