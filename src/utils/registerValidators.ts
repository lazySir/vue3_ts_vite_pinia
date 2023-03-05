import { reactive } from 'vue'
//定义账号密码类型
interface User {
  username: string
  password: string
  password2: string
  email: string
}
//收集注册信息
export const registerUser = reactive<User>({
  username: '',
  password: '',
  password2: '',
  email: '',
})
//定义注册信息类型
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
  password2: (
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
    |{
      validator:Function
      trigger: string
    }
  )[]
  email: (
    | {
        required: boolean
        message: string
        trigger: string
        min?: undefined
        max?: undefined
      }
    | {
        message: string
        trigger: string
        required?: undefined
        type:string
      }
  )[]
}
//定义校验密码是否一致
const validatePass2 = (rule: any, value: any, callback: any):void => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerUser.password) {
    callback(new Error("两次输入密码不一致!"))
  } else {
    callback()
  }
}
//定义注册信息校验规则
export const registerRules = reactive<Rules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  password2: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
    {validator:validatePass2,trigger:'blur'}
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },

  ],
})

