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
axios.interceptors.request.use(
  function(config) {

    if(config && config.headers){
      config.headers.Authorization = window.sessionStorage.getItem('token') || ''
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
