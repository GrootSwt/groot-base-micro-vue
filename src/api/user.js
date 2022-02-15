import { deleteRequest, getRequest, postRequest, putRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-system/user/'

// 用户授权
export function authorization (data) {
  return putRequest(ROOT_PATH + 'authorization', data)
}

// 更改用户信息
export function modifyUserInfo (data) {
  return putRequest(ROOT_PATH + 'modifyUserInfo', data)
}

// 设置头像
export function modifyAvatar (data) {
  return putRequest(ROOT_PATH + 'modifyAvatar', data)
}

// 分页条件查询用户
export function pageableSearchUser (data) {
  let url = ROOT_PATH + `pageableSearch?page=${data.page - 1}&size=${data.size}`
  if (data.searchForm.username !== '') {
    url += `&s_username=${data.searchForm.username}`
  }
  if (data.searchForm.roleName !== '') {
    url += `&s_roleName=${data.searchForm.roleName}`
  }
  return getRequest(url)
}

// 批量删除用户
export function batchDeleteUser (data) {
  return deleteRequest(ROOT_PATH + `batchDelete?idArr=${data}`)
}

// 提交新增或保存用户
export function addOrEditUser (data) {
  return postRequest(ROOT_PATH + 'addOrEditUser', data)
}

// 更改用户状态
export function changeUserEnabled (data) {
  return putRequest(ROOT_PATH + 'changeUserEnabled', data)
}

// 更改密码
export function changePassword (data) {
  return putRequest(ROOT_PATH + 'changePassword', data)
}

// 登录名是否存在
export function loginNameIsExist (loginName) {
  return getRequest(ROOT_PATH + `${loginName}/loginNameIsExist`)
}

// 联系方式是否存在
export function phoneNumberIsExist (phoneNumber) {
  return getRequest(ROOT_PATH + `${phoneNumber}/phoneNumberIsExist`)
}

// 电子邮件是否存在
export function emailIsExist (email) {
  return getRequest(ROOT_PATH + `${email}/emailIsExist`)
}
