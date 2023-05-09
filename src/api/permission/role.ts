import requests from '@/utils/request'
const baseUrl = '/permission'
const api={
  get:baseUrl+'/getRole',
}
//获取菜单列表
export const reqGetRole = () =>
  requests({
    url: api.get,
    method: 'get',
  })
