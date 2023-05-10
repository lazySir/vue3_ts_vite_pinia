import requests from '@/utils/request'
const baseUrl = '/permission'
const api = {
  get: baseUrl + '/getRole',
  update: baseUrl + '/updateRole',
  add: baseUrl + '/addRole',
  delete: baseUrl + '/deleteRole',
  deletes: baseUrl + '/deleteRoles',
}
//获取菜单列表
export const reqGetRole = () =>
  requests({
    url: api.get,
    method: 'get',
  })

//新增或修改菜单
export const reqAddOrUpdateRole = (data: any) => {
  if (data.roleId) {
    return requests({
      url: api.update,
      method: 'put',
      data,
    })
  } else {
    return requests({
      url: api.add,
      method: 'post',
      data,
    })
  }
}
//删除角色
export const reqDeleteRole = (id: number) =>
  requests({
    url: api.delete + `/${id}`,
    method: 'delete',
  })
//批量删除角色
export const reqDeleteRoles = (ids: any) =>
  requests({
    url: api.deletes,
    method: 'delete',
    data: ids,
  })
