import {userInfo} from '@/mock/user/data'
const userList  = userInfo
export default {
  //获取用户列表
  getUserList: () => {
    return {
      code: 200,
      data: userList,
      message: '获取用户列表成功',
    }
  }
}