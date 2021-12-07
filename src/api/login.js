import { postRequest } from '@/plugins/request'

// 登录
export function login (data) {
  return postRequest('/login', data)
}
