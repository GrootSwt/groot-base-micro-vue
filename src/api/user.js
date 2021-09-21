import { getRequest, postRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-user/'

// 登录
export function login (data) {
  return postRequest(ROOT_PATH + 'login', data)
}

// 根据角色id获取菜单树
export function getMenuTree (data) {
  return getRequest(ROOT_PATH + `menu/getMenuListByRoleId/${data.roleId}`)
}
