import axios from 'axios'
import { baseURL, timeout, contentType } from './axios'
export const request = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  
})
request.defaults.headers.post['Content-Type'] = contentType

//
let TestToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MDgyMzgxLCJpYXQiOjE2NzM0OTAzODEsImp0aSI6ImFiYjVkNWVlODJiODQ5YWNiNmM0OGZlYzUwNjg1N2QxIiwidXNlcl9pZCI6Mn0.9L88hJyBchyu31oVVPr6Ys6BqmsiUUM7TtCbr3RWR1g'
request.interceptors.request.use(
  config => {
    // if (getToken()) {
    //     config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   }
      config.headers.Authorization = window.sessionStorage.getItem('token') || 'Bearer '+ TestToken
    return config
  },
  error => Promise.error(error)
)
//

request.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      Promise.reject(res)
    }
  },
  error => {
    const { response } = error
    if (response) {
      // The request has been made, but is not in the scope of 2xx
      return Promise.reject(response)
    }
    console.error('network ', error)
    return Promise.reject(error)
  }
)

export default function http(type = 'get', url, params = {}) {
  return new Promise((resolve, reject) => {
    request({
      method: type,
      url,
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
