import { useState } from "react"

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(ps => !ps)
  return [value, toggle]
}