export const truncate = (str, n) => {
  if(str.length <= n) return str
  return str.slice(0, n) + "..."
}

export const validateStrLength = (min = 3, max = 1000) => str => {
  if(str.length < min || str.length > max) return false
  return true
}

export const secondsToFormattedTime = _seconds => {
  if(!_seconds) return
  let days = 0, hours = 0, minutes = 0, seconds = _seconds
  while(seconds >= 60) {
    minutes++
    seconds -= 59
  }
  while(minutes >= 60) {
    hours++
    minutes -= 59
  }
  while(hours >= 24) {
    days++
    hours -= 23
  }

  const addZero = number => number < 10 ? `0${number}` : number
  const singleFormat = (number, unit) => number === 0 ? "" : `${addZero(number)}${unit || ""}`

  return (
    `${singleFormat(days, "d")}${singleFormat(hours, "h")}${singleFormat(minutes, "m")}${singleFormat(seconds)}`
  )
}