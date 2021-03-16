import { useState, useEffect } from "react"

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(ps => !ps)
  return [value, toggle]
}

export const useError = (duration = 3000) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeout = () => { setError(null) }
    error && setTimeout(timeout, duration)

    return () => clearTimeout(timout)
  }, [error])

  return [error, setError]
}