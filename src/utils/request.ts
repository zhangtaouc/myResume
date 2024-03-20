import axios from 'axios'
import { responseData, requestData } from '@/map/interface'

// 1. 创建axios对象
const request = axios.create({
  // baseURL: 'request://testapi.xuexiluxian.cn',
})

// 2. 请求拦截器
request.interceptors.request.use(
  (config: any) => {
    console.warn('请求参数', config)
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 3. 响应拦截器
request.interceptors.response.use(
  response => {
    console.warn('响应参数', response)
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export function httpGet(url: string): Promise<responseData> {
  return request({
    url,
    method: 'get'
  })
}

export function httpPost(
  url: string,
  data: requestData
): Promise<responseData> {
  return request({
    url,
    method: 'post',
    data
  })
}
