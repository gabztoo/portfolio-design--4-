"use client"

import { useMemo } from "react"
import { useLanguage } from "@/components/portfolio/language-context"

const glyphs = [">", "_", "█", "░", "{", "}", "/", "\\", "0", "1", "#"]

export function LanguageTransitionOverlay() {
  const { isSwitching, switchKey } = useLanguage()

  const particles = useMemo(() => {
    return Array.from({ length: 34 }).map((_, index) => ({
      id: `${switchKey}-${index}`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.35}s`,
      duration: `${0.9 + Math.random() * 0.6}s`,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
    }))
  }, [switchKey])

  if (!isSwitching) return null

  return (
    <div className="language-shift-overlay" aria-hidden>
      <div className="language-shift-scanline" />
      <div className="language-shift-center">TRANSLATING...</div>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="language-shift-char"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        >
          {particle.glyph}
        </span>
      ))}
    </div>
  )
}
