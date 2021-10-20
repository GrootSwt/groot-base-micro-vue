import { getCookie } from '@/utils/cookies'
// 权限校验
export default function (auth) {
  if (!auth) {
    return false
  }
  const authority = getCookie('authority')
  const authList = authority.split(',')
  for (const a of authList) {
    if (a === auth) return true
  }
  return false
}
