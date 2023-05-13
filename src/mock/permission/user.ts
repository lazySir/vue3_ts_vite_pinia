import { userInfo } from '@/mock/user/data'
const userList = userInfo
export default {
  //获取用户列表
  getUserList: () => {
    return {
      code: 200,
      data: userList,
      message: '获取用户列表成功',
    }
  },
  //更新用户列表
  updateUser: (req: any, res: any) => {
    const user = JSON.parse(req.body)
    update(user)
    return {
      code: 200,
      message: '更新用户成功',
    }
  },
  //删除用户
  deleteUser: (req: any, res: any) => {
    const { url } = req
    const reg = new RegExp('/[^/]+/[^/]+/[^/]+/(.*)')
    const username = url.match(reg)[1]
    if (username == 'admin') {
      return {
        code: 205,
        message: '不能删除admin用户',
      }
    } else {
      deleteUser(username)
      return {
        code: 200,
        message: '删除用户成功',
      }
    }
  },
}
function update(val: any) {
  const index = userList.findIndex((item) => item.username === val.username)
  if (index !== -1) {
    val.updateTime = new Date().toLocaleString('zh-CN')
    userList[index] = { ...userList[index], ...val }
  }
}
function deleteUser(val: any) {
  const index = userList.findIndex((item) => item.username === val)
  if (index !== -1) {
    userList.splice(index, 1)
  }
}
