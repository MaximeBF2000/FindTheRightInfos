export const truncate = (str, n) => {
  if(str.length <= n) return str
  return str.slice(0, n) + "..."
}

export const validateStrLength = (min = 3, max = 1000) => str => {
  if(str.length < min || str.length > max) return false
  return true
}