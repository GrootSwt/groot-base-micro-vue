import { deleteRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-oss/fileOperation/'

export const UPLOAD_URL = '/api' + ROOT_PATH + 'upload/'
export const DOWNLOAD_URL = '/api' + ROOT_PATH + 'download/'

// 根据文件信息id删除文件
export function deleteFileById (data) {
  return deleteRequest(ROOT_PATH + `${data.id}/deleteFileById`)
}
