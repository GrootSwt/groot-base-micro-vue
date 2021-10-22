export function StrToDate (str, format) {
  const date = new Date(str)
  const getTwo = (i) => {
    return i < 10 ? '0' : '' + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (i) => {
    switch (i) {
      case 'yyyy':
        return getTwo(date.getFullYear())
      case 'MM':
        return getTwo(date.getMonth() + 1)
      case 'dd':
        return getTwo(date.getDate())
      case 'HH':
        return getTwo(date.getHours())
      case 'mm':
        return getTwo(date.getMonth())
      case 'ss':
        return getTwo(date.getSeconds())
    }
  })
}
