import { getRequest, postRequest, putRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-user/'

// 登录
export function login (data) {
  return postRequest(ROOT_PATH + 'login', data)
}

// 根据角色id获取菜单树
export function getMenuTree (data) {
  return getRequest(ROOT_PATH + `menu/getMenuListByRoleId/${data.roleId}`)
}

// 用户授权
export function authorization (data) {
  return putRequest(ROOT_PATH + 'user/authorization', data)
}

// 更改用户信息
export function modifyUserInfo (data) {
  return putRequest(ROOT_PATH + 'user/modifyUserInfo', data)
}

// 设置头像
export function modifyAvatar (data) {
  return putRequest(ROOT_PATH + 'user/modifyAvatar', data)
}
