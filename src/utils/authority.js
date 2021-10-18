import { getCookie } from '@/utils/cookies'

export default function (auth) {
  if (!auth) {
    return false
  }
  const authority = getCookie('authority')
  const authList = authority.split(',')
  console.log(authList, auth)
  for (const a of authList) {
    if (a === auth) return true
  }
  return false
}
