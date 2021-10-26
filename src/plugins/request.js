import axios from 'axios'
import router from '@/router/index'
import { Message } from 'element-ui'
import { removeCookie } from '@/utils/cookies'

const instance = axios.create({
  baseURL: '/'
})
//  请求拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
//  响应拦截器
instance.interceptors.response.use(response => {
  return response
}, error => {
  responseErrorHandler(error)
  return Promise.reject(error)
})

// 处理异常信息
function responseErrorHandler (error) {
  if (error.response.status === 401) {
    Message.error('登录信息已过期，请重新登录！')
    removeCookie('token')
    router.push({ path: '/login' })
  } else if (error.response.status === 403) {
    Message.error('登录信息已过期，请重新登录！')
    removeCookie('token')
    router.push({ path: '/login' })
  } else if (error.response.status === 404) {
    Message.error('请求资源的路径或方式不正确！')
  }
}

// get请求，可以将参数放在路径，也可以将参数放入data中
export function getRequest (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post请求
export function postRequest (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// put请求
export function putRequest (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// delete请求
export function deleteRequest (url, data = {}) {
  return new Promise((resolve, reject) => [
    instance.delete(url, {
      params: data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  ])
}

export default instance
