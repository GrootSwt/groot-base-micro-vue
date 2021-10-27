import { deleteRequest, getRequest, postRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-user/'

// 根据角色id获取权限的菜单、操作树
export function getMenuTree (data) {
  return getRequest(ROOT_PATH + `menu/${data.roleId}/getMenuListByRoleId`)
}

// 获取权限列表
export function getAuthorities (data) {
  return getRequest(ROOT_PATH + `menu/${data.roleId}/getAuthorities`)
}

// 获取所有权限的菜单、操作树
export function getAllMenu () {
  return getRequest(ROOT_PATH + 'menu/getAllMenu')
}

// 批量删除权限
export function deleteMenuByIdArr (data) {
  return deleteRequest(ROOT_PATH + `menu/deleteMenuByIdArr?idArr=${data.idArr}`)
}

// 保存权限
export function saveMenu (data) {
  return postRequest(ROOT_PATH + 'menu/saveMenu', data)
}

// 获取权限树 (权限已启用)
export function getAllMenuForUser () {
  return getRequest(ROOT_PATH + 'menu/getAllMenuForUser')
}
