import requests from '@/utils/request'

export const reqGetMenu = () =>
  requests({
    url: '/permission/getMenu',
    method: 'get',
  })
