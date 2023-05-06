import requests from '@/utils/request'
//获取菜单列表
export const reqGetMenu = () =>
  requests({
    url: '/permission/getMenu',
    method: 'get',
  })
//新增或修改菜单
export const reqAddOrUpdateMenu = (data: any) =>{
  //更新
  if(data.menuId){
    return requests({
      url: '/permission/updateMenu',
      method: 'put',
      data,
    })
  }
  //添加
  else{
    return requests({
      url: '/permission/addMenu',
      method: 'post',
      data
    })
  }
}
export const reqDeleteMenu=(data:any)=>{
  return requests({
    url:`/permission/deleteMenu/${data}`,
    method:'delete',
  })
}