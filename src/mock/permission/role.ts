import {roleData} from '@/mock/permission/data/roleData'
const roleList = [...roleData]
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
  }
}
function update(val:any){
  //根据val.roleId找到roleList中对应的角色 并将角色修改为val
  const index = roleList.findIndex((item:any)=>item.roleId==val.roleId)
  roleList[index] = val


}