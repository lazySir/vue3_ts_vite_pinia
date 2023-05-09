import {roleData} from '@/mock/permission/data/roleData'

export default {
  //模拟获取角色列表接口
  getRoleList(req: any, res: any) {
    return {
      code: 200,
      message: '获取角色列表成功',
      data: roleData,
    }
  }
}