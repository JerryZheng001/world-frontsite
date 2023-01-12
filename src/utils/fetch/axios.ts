import axios from 'axios'
import { getEnv } from '../../utils/base/string'

const URLs = [window.location.protocol, '//', window.location.host, '/']
const isLocalhost = /localhost/gi.test(window.location.hostname)
export const baseURL = isLocalhost ? getEnv('REACT_APP_DEV_REQUEST_URL') : URLs.join('')
export const timeout = 10000
export const contentType = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseURL
axios.defaults.timeout = timeout
axios.defaults.headers.post['Content-Type'] = contentType
let TestToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MDgyMzgxLCJpYXQiOjE2NzM0OTAzODEsImp0aSI6ImFiYjVkNWVlODJiODQ5YWNiNmM0OGZlYzUwNjg1N2QxIiwidXNlcl9pZCI6Mn0.9L88hJyBchyu31oVVPr6Ys6BqmsiUUM7TtCbr3RWR1g'
axios.interceptors.request.use(
  function(config) {

    if(config && config.headers){
      config.headers.Authorization = window.sessionStorage.getItem('token') || 'Bearer '+ TestToken
    }


    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {

    if (response.status !== 200) {
      return Promise.reject(response)
    }
  
    
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)

const Axios = {
  get(url: string, params: { [key: string]: any } = {}) {

    return axios.get(url, { params })
  },
  post(url: string, data: { [key: string]: any } = {}, params = {}) {
    return axios.post(url, data, { params })
  }
}

export default Axios
