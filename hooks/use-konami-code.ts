"use client"

import { useEffect, useState, useCallback } from "react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp", 
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export function useKonamiCode(callback: () => void) {
  const [inputSequence, setInputSequence] = useState<string[]>([])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    setInputSequence((prev) => {
      const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length)
      
      if (newSequence.length === KONAMI_CODE.length) {
        const isMatch = newSequence.every((key, index) => key === KONAMI_CODE[index])
        if (isMatch) {
          callback()
          return []
        }
      }
      
      return newSequence
    })
  }, [callback])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return inputSequence.length
}
