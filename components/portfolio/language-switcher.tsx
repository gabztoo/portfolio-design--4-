"use client"

import { Languages } from "lucide-react"
import { useLanguage, type Language } from "@/components/portfolio/language-context"

const labels: Record<Language, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 left-4 z-50 border border-primary/60 bg-card/90 backdrop-blur-sm px-2 py-2">
      <div className="flex items-center gap-2">
        <Languages className="w-4 h-4 text-primary" />
        {(Object.keys(labels) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 text-xs border transition-all ${
              language === lang
                ? "border-primary bg-primary/20 text-primary glow-green"
                : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/70"
            }`}
            aria-label={`Switch language to ${lang}`}
          >
            {labels[lang]}
          </button>
        ))}
      </div>
    </div>
  )
}
