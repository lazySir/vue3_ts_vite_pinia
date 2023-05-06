import requests from '@/utils/request'
const api={
  login:'/login',
  register:'/register',
  logout:'/logout'
}
export const reqLogin = (username: any, password: any) =>
  requests({
    url:api.login,
    method: 'post',
    data: {
      username,
      password,
    },
  })
export const reqRegister = (username: any, password: any, email: any) =>
  requests({
    url: api.register,
    method: 'post',
    data: {
      username,
      password,
      email,
    },
  })
export const reqLogout = () =>
  requests({
    url: api.logout,
    method: 'post',
  })
