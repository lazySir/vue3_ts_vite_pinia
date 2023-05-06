interface MenuData {
  path: string
  name: string
  icon?: string
  title: string
  component: any // 此处需要根据实际类型进行修改
  children?: MenuData[]
}

interface TransformedMenuData {
  menuId: number
  date: string
  name: string
  menuKey: string
  menuValue: string
  icon: string
  level: number
  parentId: number | null
  children: TransformedMenuData[]
}
//处理菜单数据
 export const transformMenuData= (menuData: MenuData[], parentId: number | null = null, level = 1): TransformedMenuData[]=> {
  const result: TransformedMenuData[] = []

  menuData.forEach((menu, index) => {
    const date = new Date().toLocaleString('zh-CN')
    const { name, title, children } = menu
    const menuId = parentId ? parentId * 100 + index : index + 1
    const menuKey = title
    const menuValue = name
    const icon = menu.icon || ''

    const newMenu: TransformedMenuData = {
      menuId,
      date,
      menuKey,
      menuValue,
      icon,
      level,
      parentId,
      name: '超级管理员',
      children: [],
    }

    if (children && children.length > 0) {
      newMenu.children = transformMenuData(children, menuId, level + 1)
    }

    result.push(newMenu)
  })

  return result
}
