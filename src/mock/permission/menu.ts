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
  //模拟修改菜单接口
  updateMenu(req: any, res: any) {
    let data = JSON.parse(req.body)
    data = deallUpdateMenuData(data)
    updateMenu(data)
    return {
      code: 200,
      message: '修改菜单成功',
    }
  },
  //模拟删除接口
  deleteMenu(req: any, res: any) {
    const { url } = req
    const reg = /\d/g
    const menuId = url.match(reg).join('')
    deleteMenu(menuId)
    return {
      code: 200,
      message: '删除菜单成功',
    }
  },
}
//处理新增菜单数据的方法
function deallAddMenuData(data: any) {
  ;(data.name = '超级管理员'), (data.children = []), (data.date = new Date().toLocaleString('zh-CN'))
  if (data.level == 1) {
    data.menuId = menuList.length + 1
  } else {
    data.menuId = data.PmenuId * 100 + 1
  }
  return data
}
//将处理后的数据添加进菜单列表
function pushMenu(data: any) {
  if (data.level == 1) {
    menuList.push(data)
  } else {
    let Pmenu = menuList.find((item: any) => {
      return item.menuId == data.PmenuId
    })
    Pmenu.children.push(data)
  }
}
//处理修改菜单数据的方法
function deallUpdateMenuData(data: any) {
  data.date = new Date().toLocaleString('zh-CN')
  data.name = '超级管理员'
  return data
}
//将处理后的数据修改进菜单列表
function updateMenu(data: any) {
  const { PmenuId } = data
  if (PmenuId) {
    let Pmenu = menuList.find((item: any) => {
      return item.menuId == PmenuId
    })
    let index = Pmenu.children.findIndex((item: any) => {
      return item.menuId == data.menuId
    })
    //将index的属性和data有的属性进行替换 没有的属性不进行替换
    Pmenu.children.splice(index, 1, { ...Pmenu.children[index], ...data })
  } else {
    let index = menuList.findIndex((item: any) => {
      return item.menuId == data.menuId
    })
    //将index的属性和data有的属性进行替换 没有的属性不进行替换
    menuList.splice(index, 1, { ...menuList[index], ...data })
  }
}
//处理删除菜单数据的方法
function deleteMenu(data: any) {
  if (data < 100) {
    //删除的是一级菜单
    let index = menuList.findIndex((item: any) => {
      return item.menuId == data
    })
    menuList.splice(index, 1)
  } else {
    //删除的是二级菜单
    let PmenuId = Math.floor(data / 100)
    let Pmenu = menuList.find((item: any) => {
      return item.menuId == PmenuId
    })
    let index = Pmenu.children.findIndex((item: any) => {
      return item.menuId == data
    })
    Pmenu.children.splice(index, 1)
  }
}
