import { reactive } from 'vue'

//定义账号密码类型
interface User {
  username: String
  password: String
}

//收集账号密码
export const loginUser = reactive<User>({
  username: '',
  password: '',
})
//定义账号密码校验规则
interface Rules {
  username: (
    | {
        required: boolean
        message: string
        trigger: string
        min?: undefined
        max?: undefined
      }
    | {
        min: number
        max: number
        message: string
        trigger: string
        required?: undefined
      }
  )[]
  password: (
    | {
        required: boolean
        message: string
        trigger: string
        min?: undefined
        max?: undefined
      }
    | {
        min: number
        max: number
        message: string
        trigger: string
        required?: undefined
      }
  )[]
}
//校验账号密码
export const loginRules = reactive<Rules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 12, message: '账号长度在 3 到 12 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 30, message: '密码长度在 5 到 30 个字符', trigger: 'blur' },
  ],
})
