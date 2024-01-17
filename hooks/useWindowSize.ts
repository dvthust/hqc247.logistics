import { useState, useEffect } from "react"
import throttle from 'lodash/throttle'

const getDimensionsObject = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  }
}

export default function useWindowSize(limit: any) {
  let [windowSize, setWindowSize] = useState(getDimensionsObject())

  const measure = () => setWindowSize(getDimensionsObject())

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = throttle(measure, limit ? limit : 100)

      window.addEventListener("resize", listener)
      return () => window.removeEventListener("resize", listener)
    }
  }, [])

  return windowSize
}
