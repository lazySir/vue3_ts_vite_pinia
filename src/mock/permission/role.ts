import { roleData } from '@/mock/permission/data/roleData'
let roleList = [...roleData]
export default {
  //模拟获取角色列表接口
  getRoleList(req: any, res: any) {
    return {
      code: 200,
      message: '获取角色列表成功',
      data: roleList,
    }
  },
  //模拟修改角色接口
  updateRole(req: any, res: any) {
    const data = JSON.parse(req.body)
    update(data)
    return {
      code: 200,
      message: `修改${data.name}成功`,
    }
  },
  //新增角色接口
  addRole(req: any, res: any) {
    const data = JSON.parse(req.body)
    add(data)
    return {
      code: 200,
      message: `新增${data.name}成功`,
    }
  },
  //删除角色接口
  deleteRole(req: any, res: any) {
    const { url } = req
    const reg = /\d/g
    const roleId = url.match(reg).join('')
    del(roleId)
    return {
      code: 200,
      message: `删除成功`,
    }
  },
  //批量删除角色
  deleteRoles(req: any, res: any) {
    const ids = JSON.parse(req.body)
    deleteRoles(ids)
    return {
      code: 200,
      message: `批量删除成功`,
    }
  },
}
function update(val: any) {
  //根据val.roleId找到roleList中对应的角色 并将角色修改为val
  const index = roleList.findIndex((item: any) => item.roleId == val.roleId)
  roleList[index] = val
}
function add(val: any) {
  val.date = new Date().toLocaleString('zh-CN')
  val.roleId = roleList[roleList.length - 1].roleId + 1
  //将val添加到roleList中
  roleList.push(val)
}

function del(val: any) {
  //根据val.roleId找到roleList中对应的角色 并将qi角色从roleList中删除
  const index = roleList.findIndex((item: any) => item.roleId == val)
  roleList.splice(index, 1)
}
function deleteRoles(arr: any) {
  //根据arr里的数字找到roleList中对应的角色 并将qi角色从roleList中删除
  arr.forEach((item: number) => {
    roleList = roleList.filter((item1) => item1.roleId != item)
  })
}
