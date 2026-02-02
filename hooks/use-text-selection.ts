"use client"

import { useEffect, useCallback } from "react"

const TARGET_TEXTS = ["contrate-me", "contrate me", "hire me", "hire-me"]

export function useTextSelection(callback: () => void) {
  const handleSelectionChange = useCallback(() => {
    const selection = window.getSelection()
    if (!selection) return

    const selectedText = selection.toString().toLowerCase().trim()
    
    if (TARGET_TEXTS.some(target => selectedText.includes(target))) {
      callback()
    }
  }, [callback])

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange)
    return () => document.removeEventListener("selectionchange", handleSelectionChange)
  }, [handleSelectionChange])
}
