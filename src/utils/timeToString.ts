export const formatTimeToStr = (getTimeStamp: string | number, onlyDay: boolean = false, needSecond: boolean = true, ignoreThisYear: boolean = true): string => {
  const nowYear = new Date().getFullYear()
  const date = new Date(parseInt(getTimeStamp.toString()) * 1000)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  let pickUp = ``
  if (ignoreThisYear && year == nowYear) {
    pickUp = ``
  } else {
    pickUp = `${year}年`
  }

  pickUp = pickUp + `${month}月${day}日`
  if (onlyDay) {
    return pickUp
  } else {
    pickUp = pickUp + ` ${hours}:${min}`
  }
  if (needSecond) {
    pickUp = pickUp + `:${seconds}`
  }
  return pickUp
}