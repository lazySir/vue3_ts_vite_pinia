export function transformMenuData(routes: any[], level: number = 1, parentMenuId: number = 0) {
  let currentId = 1
  for (const route of routes) {
    route.menuId = parentMenuId + currentId++
    route.level = level
    route.date = new Date().toLocaleString('zh-CN')
    route.avatar = '超级管理员'

    if (route.children && route.children.length) {
      transformMenuData(route.children, level + 1, (route.menuId * 100))
    }
  }
  return routes
}