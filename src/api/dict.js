import { getRequest } from '@/plugins/request'

const ROOT_PATH = '/micro-dict/'

const DICTIONARY_CATEGORY_ROOT_PATH = ROOT_PATH + 'dictionaryCategory/'

export function pageableSearchDictionaryCategory (data) {
  let url = DICTIONARY_CATEGORY_ROOT_PATH + `pageableSearch?page=${data.page - 1}&size=${data.size}`
  if (data.searchForm.categoryName) {
    url += `&s_categoryName=${data.searchForm.categoryName}`
  }
  if (data.searchForm.dateRange && data.searchForm.dateRange.length === 2) {
    url += `&s_startDate=${data.searchForm.dateRange[0]}`
    url += `&s_endDate=${data.searchForm.dateRange[1]}`
  }
  if (data.searchForm.enabled) {
    url += `&s_enabled=${data.searchForm.enabled}`
  }
  return getRequest(url)
}
