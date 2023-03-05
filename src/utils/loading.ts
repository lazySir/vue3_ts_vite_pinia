//加载动画
import { ElLoading } from 'element-plus'
let loading:any;
//配置加载动画接口
interface Options{
  lock:boolean,
  text:string,
  background:string
}
//配置加载动画
const options:Options={
  lock:true,
  text:'加载中...',
  background:'rgba(0,0,0,0.7)'
}
//开始加载
export const startLoading = () => {
 loading= ElLoading.service(options)
}
//结束加载
export const endLoding=()=>{
  loading.close()
}