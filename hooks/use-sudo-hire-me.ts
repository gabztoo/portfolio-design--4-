"use client"

import { useEffect, useState, useCallback } from "react"

const TARGET_PHRASE = "sudo hire me"

export function useSudoHireMe(callback: () => void) {
  const [inputBuffer, setInputBuffer] = useState("")

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignore modifier keys and special keys
    if (event.ctrlKey || event.altKey || event.metaKey) return
    if (event.key.length !== 1) return

    setInputBuffer((prev) => {
      const newBuffer = (prev + event.key.toLowerCase()).slice(-TARGET_PHRASE.length)
      
      if (newBuffer === TARGET_PHRASE) {
        callback()
        return ""
      }
      
      return newBuffer
    })
  }, [callback])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return inputBuffer
}
