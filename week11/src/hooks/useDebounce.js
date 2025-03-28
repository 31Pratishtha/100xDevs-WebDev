import { useRef } from "react"

export const useDebounce = (searchFn) => {
  let currentClock = useRef

  const fn = () => {
    clearTimeout(currentClock)
    currentClock = setTimeout(searchFn, 500)
  }

  return fn
}