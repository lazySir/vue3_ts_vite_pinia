import Mock from 'mockjs'
import { reactive } from 'vue'
export let userInfo = reactive([
  {
    username: 'admin',
    password: 'admin',
    role: 'admin',
    //mock模拟头像
    avatar: Mock.mock('@image(200x200,@color)'),
    email: '969060742@qq.com',
  },
  {
    username: 'user',
    password: '12345',
    role: 'user',
    //mock模拟头像
    avatar: Mock.mock('@image(200x200,@color)'),
    email: 'xxxxx@qq.com',
  },
])