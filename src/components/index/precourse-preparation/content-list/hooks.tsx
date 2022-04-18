import { useState, useEffect } from "react"

export const useShowMore = filters => {
  const [contentPagination, setContentPagination] = useState<number>(12)
  const [contentShown, setContentShown] = useState<number>(12)
  useEffect(() => {
    const content = document.querySelectorAll(".content")
    setContentShown(content.length)
  }, [contentPagination, filters])

  return [contentPagination, setContentPagination, contentShown] as const
}
