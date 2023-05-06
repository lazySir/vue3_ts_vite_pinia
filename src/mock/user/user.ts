import Mock from 'mockjs'
import { userInfo } from './data'
export default {
  // 模拟登录接口
  login(req: any, res: any) {
    //req.body数据是json数据需要先转化为String
    const { username, password } = JSON.parse(req.body)
    //将username和password与userInfo中的数据进行比
    const user = userInfo.filter((item) => item.username == username && item.password == password)
    if (user.length > 0) {
      return {
        code: 200,
        message: '登录成功',
        token: Mock.mock('@guid'),
        avatar: user[0].avatar,
        username: user[0].username,
        email: user[0].email,
        role: user[0].role,
      }
    } else {
      return {
        code: 205,
        message: '用户名或密码错误',
      }
    }
  },
  //模拟注册接口
  register(req: any, res: any) {
    //req.body数据是json数据需要先转化为String
    const { username, password, email } = JSON.parse(req.body)
    //将username和password与userInfo中的数据进行比
    const user = userInfo.filter((item) => item.username == username)
    if (user.length > 0) {
      return {
        code: 205,
        message: '用户名已存在',
      }
    } else {
      userInfo.push({
        username,
        password,
        role: 'user',
        email,
        //mock模拟头像
        avatar: Mock.mock('@image(200x200,@color)'),
      })
      return {
        code: 200,
        message: '注册成功',
      }
    }
  },
  //模拟退出登录接口
  logout(req: any, res: any) {
    return {
      code: 200,
      message: '退出登录成功',
    }
  },
}
