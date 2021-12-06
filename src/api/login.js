import { postRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-system/'

// 登录
export function login (data) {
  return postRequest(ROOT_PATH + 'login', data)
}
