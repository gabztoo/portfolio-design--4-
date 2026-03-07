"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

export type Language = "pt" | "en" | "es"

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  isSwitching: boolean
  switchKey: number
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "portfolio-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")
  const [isSwitching, setIsSwitching] = useState(false)
  const [switchKey, setSwitchKey] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "pt" || saved === "en" || saved === "es") {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return

    setIsSwitching(true)
    setSwitchKey((prev) => prev + 1)

    setTimeout(() => {
      setLanguageState(nextLanguage)
      localStorage.setItem(STORAGE_KEY, nextLanguage)
    }, 220)

    setTimeout(() => {
      setIsSwitching(false)
    }, 720)
  }

  const value = useMemo(
    () => ({ language, setLanguage, isSwitching, switchKey }),
    [language, isSwitching, switchKey]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
