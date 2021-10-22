import axios from 'axios'
import router from '@/router/index'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { removeCookie } from '@/utils/cookies'

const instance = axios.create({
  baseURL: '/'
})
//  请求拦截器
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})
//  响应拦截器
instance.interceptors.response.use(response => {
  NProgress.done()
  return response
}, error => {
  if (error.response.status === 401) {
    Message.error('登录信息已过期，请重新登录！')
    removeCookie('username')
    removeCookie('token')
    router.push({ path: '/login' })
  } else if (error.response.status === 403) {
    Message.error('登录信息已过期，请重新登录！')
    removeCookie('username')
    removeCookie('token')
    router.push({ path: '/login' })
  }
  return Promise.reject(error)
})

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
