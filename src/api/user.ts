import requests from '@/utils/request'

export const reqLogin = (username: any, password: any) =>
  requests({
    url: '/login',
    method: 'post',
    data: {
      username,
      password,
    },
  })
export const reqRegister = (username: any, password: any, email: any) =>
  requests({
    url: '/register',
    method: 'post',
    data: {
      username,
      password,
      email,
    },
  })
export const reqLogout = () =>
  requests({
    url: '/logout',
    method: 'post',
  })
