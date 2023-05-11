import requests from '@/utils/request'
import { baseUrl } from './baseUrl'
const api={
  get:baseUrl+'/getMenu',
  add:baseUrl+'/addMenu',
  update:baseUrl+'/updateMenu',
  delete:baseUrl+`/deleteMenu`,
}
//获取菜单列表
export const reqGetMenu = () =>
  requests({
    url: api.get,
    method: 'get',
  })
//新增或修改菜单
export const reqAddOrUpdateMenu = (data: any) =>{
  //更新
  if(data.menuId){
    return requests({
      url: api.update,
      method: 'put',
      data,
    })
  }
  //添加
  else{
    return requests({
      url: api.add,
      method: 'post',
      data
    })
  }
}
export const reqDeleteMenu=(data:any)=>{
  return requests({
    url:api.delete+`/${data}`,
    method:'delete',
  })
}