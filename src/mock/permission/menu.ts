import { menuData } from './data/menuData'
let menuList = [...menuData]
export default {
  //模拟获取菜单接口
  getMenuList(req: any, res: any) {
    return {
      code: 200,
      message: '获取菜单成功',
      data: menuList,
    }
  },
  //模拟新增菜单接口
  addMenu(req: any, res: any) {
    let data = JSON.parse(req.body)
    data = deallAddMenuData(data)
    pushMenu(data)
    return {
      code: 200,
      message: '新增菜单成功',
    }
  },
}
//处理新增菜单数据的方法
function deallAddMenuData(data: any) {
  ;(data.name = '超级管理员'), (data.children = []), (data.date = new Date().toLocaleString('zh-CN'))
  if (data.level == 1) {
    data.menuId = menuList.length + 1
  } else {
    //根据PmenuKey找到对应的父级菜单
    let Pmenu = menuList.find((item: any) => {
      return item.menuKey == data.PmenuKey
    })
    //根据找到的Pmenu找到对应的children获取最后一个的menuId +1 作为新增菜单的menuId
    let lastMenu = Pmenu.children[Pmenu.children.length - 1]
    data.menuId = lastMenu ? lastMenu.menuId + 1 : Pmenu.menuId * 100 + 1
    // data.menuId = lastMenu.menuId? lastMenu.menuId+1:console.log(Pmenu)
  }
  return data
}
//将处理后的数据添加进菜单列表
function pushMenu(data: any) {
  if (data.level == 1) {
    menuList.push(data)
  } else {
    let Pmenu = menuList.find((item: any) => {
      return item.menuKey == data.PmenuKey
    })
    Pmenu.children.push(data)
  }
}
