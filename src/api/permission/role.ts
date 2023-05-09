import requests from '@/utils/request'
const baseUrl = '/permission'
const api={
  get:baseUrl+'/getRole',
  update:baseUrl+'/updateRole',

}
//获取菜单列表
export const reqGetRole = () =>
  requests({
    url: api.get,
    method: 'get',
  })

//新增或修改菜单
export const reqAddOrUpdateRole = (data: any) =>
{
  if(data.roleId){
    return requests({
      url: api.update,
      method: 'put',
      data
    })
  }
}