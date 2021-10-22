import { deleteRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-oss/'

// 根据文件信息id删除文件
export function deleteFileById (data) {
  return deleteRequest(ROOT_PATH + `fileOperation/${data.id}/deleteFileById`)
}
