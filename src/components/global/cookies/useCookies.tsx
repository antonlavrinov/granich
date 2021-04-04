import { useState, useEffect } from "react"

export const useCookies = () => {
  const [cookies, setCookies] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("cookiesGranich")) {
    } else {
      setCookies(true)
    }
  }, [])

  const removeCookies = () => {
    localStorage.setItem("cookiesGranich", "1")
    setCookies(false)
  }

  return [cookies, removeCookies] as const
}
