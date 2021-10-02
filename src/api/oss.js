import { deleteRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-oss/'

export function deleteFileById (data) {
  return deleteRequest(ROOT_PATH + `fileOperation/${data.id}/deleteFileById`)
}
