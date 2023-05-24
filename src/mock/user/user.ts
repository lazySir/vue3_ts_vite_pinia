import Mock from 'mockjs'
import { userList } from '@/mock/permission/user'
export default {
  // 模拟登录接口
  login(req: any, res: any) {
    //req.body数据是json数据需要先转化为String
    const { username, password } = JSON.parse(req.body)
    //将username和password与userInfo中的数据进行比
    const user = userList.filter((item) => item.username == username && item.password == password)
    if (user.length > 0 && user[0].code) {
      return {
        code: 200,
        message: '登录成功',
        data: {
          token: Mock.mock('@guid'),
          avatar: user[0].avatar,
          username: user[0].username,
          email: user[0].email,
          name: user[0].name,
          roleIdList: user[0].roleIdList,
        },
      }
    } else if (user[0].code == false) {
      return {
        code: 205,
        message: '账号已被禁用',
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
    const user = userList.filter((item) => item.username == username)
    if (user.length > 0) {
      return {
        code: 205,
        message: '用户名已存在',
      }
    } else {
      userList.push({
        username,
        password,
        name: 'user',
        email,
        roleIdList: [],
        code: true,
        createTime: new Date().toLocaleString('zh-CN'),
        updateTime: new Date().toLocaleString('zh-CN'),
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
