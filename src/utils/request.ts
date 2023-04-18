import axios,{InternalAxiosRequestConfig,AxiosResponse} from 'axios'

import {startLoading,endLoding} from './loading'
//引入nprogress 进度条插件
import NProgress from 'nprogress'

//1.利用axios对象的方法create 去创建一个axios实例
const service =axios.create({
  //配置对象
  baseURL:'/api',  //全局地址
  timeout:5000,   //延迟
})
//请求拦截器 ：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
service.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
  //config:配置对象 对象里面里面有一个属性很重要 headers请求头
  //加载动画
  startLoading()
  //进度条
  NProgress.start();
  return config
})
//响应拦截器
service.interceptors.response.use((res:AxiosResponse<any>)=>{
  //成功的回调函数  服务器响应数据回来以后 响应拦截器可以检测到 可以做一些事情
  //关闭加载
  endLoding()
  //关闭进度条
  NProgress.done();	
  return res.data;
}),(error:any)=>{
  //关闭加载
  endLoding()
  //关闭进度条
  NProgress.done();	
  //响应失败的回调函数
  return Promise.reject(new Error(error))
}

//对外暴露
export default service;