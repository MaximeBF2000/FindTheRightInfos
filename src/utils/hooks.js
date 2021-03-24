import { useState, useEffect } from "react"

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(ps => !ps)
  return [value, toggle, setValue]
}

export const useError = (duration = 3000) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    let timeout = setTimeout(() => {
      error && setError(null) 
    }, duration)

    return () => clearTimeout(timeout)
  }, [error])

  return [error, setError]
}