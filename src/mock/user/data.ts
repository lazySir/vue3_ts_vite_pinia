import Mock from 'mockjs'
import { reactive } from 'vue'
export let userInfo = reactive([
  {
    username: 'admin',
    password: 'admin',
    name: 'admin',
    roleIdList: [1, 2, 3],
    code: true,
    //mock模拟头像
    avatar: Mock.mock('@image(200x200,@color)'),
    email: '969060742@qq.com',
    createTIme: '2021-07-02 13:00:00',
    updateTIme: '2023-5-10 12:00:00',
  },
  {
    username: 'user',
    password: '12345',
    name: 'user',
    roleIdList: [2],
    code: true,
    //mock模拟头像
    avatar: Mock.mock('@image(200x200,@color)'),
    email: 'xxxxx@qq.com',
    createTIme: '2021-08-01 13:00:00',
    updateTIme: '2023-5-10 12:00:00',
  },
  {
    username: 'test',
    password: '12345',
    name: '测试',
    code: false,
    avatar: Mock.mock('@image(200x200,@color)'),
    //mock模拟头像
    roleIdList: [3],
    email: 'xxxxx@qq.com',
    createTIme: '2021-08-02 13:00:00',
    updateTIme: '2023-5-10 12:00:00',
  },
])
