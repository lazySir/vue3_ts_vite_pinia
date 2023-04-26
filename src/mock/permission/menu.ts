import { menuList } from './data/menuData'
export default {
  //模拟获取菜单接口
  getMenuList(req: any, res: any) {
    return {
      code: 200,
      message: '获取菜单成功',
      data: menuList,
    }
  },
}
