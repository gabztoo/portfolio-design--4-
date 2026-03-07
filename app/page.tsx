"use client"

import { useState, useCallback, useEffect } from "react"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { MatrixEffect } from "@/components/portfolio/matrix-effect"
import { LanguageProvider, useLanguage } from "@/components/portfolio/language-context"
import { LanguageSwitcher } from "@/components/portfolio/language-switcher"
import { LanguageTransitionOverlay } from "@/components/portfolio/language-transition-overlay"
import { useKonamiCode } from "@/hooks/use-konami-code"
import { useSudoHireMe } from "@/hooks/use-sudo-hire-me"
import { useTextSelection } from "@/hooks/use-text-selection"
import { useWindowSize } from "@/hooks/use-window-size"

function PortfolioContent() {
  const { language } = useLanguage()
  const [showMatrix, setShowMatrix] = useState(false)
  const [showSecretMessage, setShowSecretMessage] = useState(false)
  const [showSudoMessage, setShowSudoMessage] = useState(false)
  const [showTinyMessage, setShowTinyMessage] = useState(false)
  const [showHireAnimation, setShowHireAnimation] = useState(false)
  const [retroMode, setRetroMode] = useState(false)

  const texts = {
    pt: {
      unlocked: "🎮 ACHIEVEMENT UNLOCKED!",
      konami: "Você encontrou o Konami Code!",
      xp: "+1000 XP de curiosidade",
      sudoPassword: "[sudo] password for recruiter: ********",
      validating: "✓ Validating credentials...",
      checking: "✓ Checking availability...",
      granted: "✓ Access granted!",
      hiring: "🚀 HIRING PROCESS INITIATED",
      sending: "Enviando currículo para contato@gabrielgadelha.dev...",
      tiny: "🐜 Modo formiga detectado!",
      retro: "RETRO MODE: ON",
    },
    en: {
      unlocked: "🎮 ACHIEVEMENT UNLOCKED!",
      konami: "You found the Konami Code!",
      xp: "+1000 curiosity XP",
      sudoPassword: "[sudo] password for recruiter: ********",
      validating: "✓ Validating credentials...",
      checking: "✓ Checking availability...",
      granted: "✓ Access granted!",
      hiring: "🚀 HIRING PROCESS INITIATED",
      sending: "Sending resume to contato@gabrielgadelha.dev...",
      tiny: "🐜 Ant mode detected!",
      retro: "RETRO MODE: ON",
    },
    es: {
      unlocked: "🎮 LOGRO DESBLOQUEADO!",
      konami: "Has encontrado el Código Konami!",
      xp: "+1000 XP de curiosidad",
      sudoPassword: "[sudo] password for recruiter: ********",
      validating: "✓ Validando credenciales...",
      checking: "✓ Verificando disponibilidad...",
      granted: "✓ Acceso concedido!",
      hiring: "🚀 PROCESO DE CONTRATACION INICIADO",
      sending: "Enviando CV a contato@gabrielgadelha.dev...",
      tiny: "🐜 Modo hormiga detectado!",
      retro: "MODO RETRO: ON",
    },
  }[language]

  const handleKonami = useCallback(() => {
    setShowSecretMessage(true)
    setTimeout(() => setShowSecretMessage(false), 5000)
  }, [])

  useKonamiCode(handleKonami)

  const handleSudoHireMe = useCallback(() => {
    setShowSudoMessage(true)
    setTimeout(() => setShowSudoMessage(false), 5000)
  }, [])

  useSudoHireMe(handleSudoHireMe)

  const handleHireSelection = useCallback(() => {
    if (!showHireAnimation) {
      setShowHireAnimation(true)
      setTimeout(() => setShowHireAnimation(false), 3000)
    }
  }, [showHireAnimation])

  useTextSelection(handleHireSelection)

  const handleTinyWindow = useCallback(() => {
    setShowTinyMessage(true)
    setTimeout(() => setShowTinyMessage(false), 3000)
  }, [])

  useWindowSize(handleTinyWindow)

  const handleTripleClick = useCallback(() => {
    setShowMatrix(true)
  }, [])

  const handleRetroMode = useCallback(() => {
    setRetroMode((prev) => !prev)
  }, [])

  useEffect(() => {
    if (retroMode) {
      document.documentElement.style.setProperty("--primary", "#ffb000")
      document.documentElement.style.setProperty("--glow-primary", "0 0 10px #ffb000, 0 0 20px #ffb00050, 0 0 30px #ffb00030")
    } else {
      document.documentElement.style.setProperty("--primary", "#00FF41")
      document.documentElement.style.setProperty("--glow-primary", "0 0 10px #00FF41, 0 0 20px #00FF4150, 0 0 30px #00FF4130")
    }
  }, [retroMode])

  return (
    <main className={`min-h-screen bg-background text-foreground relative crt-effect ${retroMode ? "retro-mode" : ""}`}>
      <LanguageSwitcher />
      <LanguageTransitionOverlay />

      <MatrixEffect isActive={showMatrix} onComplete={() => setShowMatrix(false)} />

      {showSecretMessage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-card border border-primary p-8 text-center glow-green animate-fade-in-up">
          <p className="text-primary text-2xl font-bold mb-2">{texts.unlocked}</p>
          <p className="text-muted-foreground">{texts.konami}</p>
          <p className="text-primary text-sm mt-4">{texts.xp}</p>
        </div>
      )}

      {showSudoMessage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black border border-primary p-6 font-mono text-left animate-fade-in-up min-w-[400px]">
          <p className="text-muted-foreground text-sm mb-2">$ sudo hire me</p>
          <p className="text-primary text-sm mb-1">{texts.sudoPassword}</p>
          <p className="text-green-400 text-sm mb-1">{texts.validating}</p>
          <p className="text-green-400 text-sm mb-1">{texts.checking}</p>
          <p className="text-green-400 text-sm mb-3">{texts.granted}</p>
          <p className="text-primary font-bold">{texts.hiring}</p>
          <p className="text-muted-foreground text-xs mt-3">{texts.sending}</p>
        </div>
      )}

      {showTinyMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card border border-primary px-4 py-2 animate-fade-in-up">
          <p className="text-primary text-sm font-bold">{texts.tiny}</p>
        </div>
      )}

      {showHireAnimation && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute text-2xl animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            >
              {["💼", "✨", "🚀", "💻", "⭐"][Math.floor(Math.random() * 5)]}
            </span>
          ))}
        </div>
      )}

      {retroMode && (
        <div className="fixed top-4 right-4 z-50 bg-card border border-primary px-3 py-1 animate-fade-in">
          <p className="text-primary text-xs font-bold">{texts.retro}</p>
        </div>
      )}

      <HeroSection onTripleClick={handleTripleClick} onRetroMode={handleRetroMode} />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}


