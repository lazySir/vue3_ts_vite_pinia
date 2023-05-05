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