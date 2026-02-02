"use client"

import { useEffect, useRef } from "react"

interface MatrixEffectProps {
  isActive: boolean
  onComplete?: () => void
}

const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF"

export function MatrixEffect({ isActive, onComplete }: MatrixEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const columns = Math.floor(window.innerWidth / 20)
    
    // Create matrix columns
    for (let i = 0; i < columns; i++) {
      setTimeout(() => {
        createColumn(container, i * 20)
      }, Math.random() * 500)
    }

    // End effect after 5 seconds
    const timeout = setTimeout(() => {
      onComplete?.()
    }, 5000)

    return () => {
      clearTimeout(timeout)
      container.innerHTML = ""
    }
  }, [isActive, onComplete])

  if (!isActive) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    />
  )
}

function createColumn(container: HTMLElement, x: number) {
  const length = 10 + Math.floor(Math.random() * 20)
  const delay = Math.random() * 2

  for (let i = 0; i < length; i++) {
    setTimeout(() => {
      const char = document.createElement("span")
      char.className = "matrix-char"
      char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)]
      char.style.left = `${x}px`
      char.style.top = "-20px"
      char.style.animationDelay = `${delay}s`
      char.style.animationDuration = `${2 + Math.random() * 3}s`
      
      // Fade effect for tail
      if (i < 3) {
        char.style.opacity = "1"
        char.style.textShadow = "0 0 10px #00FF41, 0 0 20px #00FF41"
      } else {
        char.style.opacity = `${1 - (i / length) * 0.8}`
      }

      container.appendChild(char)

      // Remove after animation
      setTimeout(() => {
        char.remove()
      }, 5000)
    }, i * 50)
  }
}
