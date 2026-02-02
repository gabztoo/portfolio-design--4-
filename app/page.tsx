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
import { useKonamiCode } from "@/hooks/use-konami-code"
import { useSudoHireMe } from "@/hooks/use-sudo-hire-me"
import { useTextSelection } from "@/hooks/use-text-selection"
import { useWindowSize } from "@/hooks/use-window-size"

export default function Portfolio() {
  const [showMatrix, setShowMatrix] = useState(false)
  const [showSecretMessage, setShowSecretMessage] = useState(false)
  const [showSudoMessage, setShowSudoMessage] = useState(false)
  const [showTinyMessage, setShowTinyMessage] = useState(false)
  const [showHireAnimation, setShowHireAnimation] = useState(false)
  const [retroMode, setRetroMode] = useState(false)

  // Konami code easter egg
  const handleKonami = useCallback(() => {
    setShowSecretMessage(true)
    setTimeout(() => setShowSecretMessage(false), 5000)
  }, [])

  useKonamiCode(handleKonami)

  // sudo hire me easter egg
  const handleSudoHireMe = useCallback(() => {
    setShowSudoMessage(true)
    setTimeout(() => setShowSudoMessage(false), 5000)
  }, [])

  useSudoHireMe(handleSudoHireMe)

  // Text selection "contrate-me" easter egg
  const handleHireSelection = useCallback(() => {
    if (!showHireAnimation) {
      setShowHireAnimation(true)
      setTimeout(() => setShowHireAnimation(false), 3000)
    }
  }, [showHireAnimation])

  useTextSelection(handleHireSelection)

  // Tiny window easter egg
  const handleTinyWindow = useCallback(() => {
    setShowTinyMessage(true)
    setTimeout(() => setShowTinyMessage(false), 3000)
  }, [])

  useWindowSize(handleTinyWindow)

  // Triple click easter egg
  const handleTripleClick = useCallback(() => {
    setShowMatrix(true)
  }, [])

  // 10x click on avatar for retro mode
  const handleRetroMode = useCallback(() => {
    setRetroMode((prev) => !prev)
  }, [])

  // Apply retro mode CSS variables
  useEffect(() => {
    if (retroMode) {
      document.documentElement.style.setProperty('--primary', '#ffb000')
      document.documentElement.style.setProperty('--glow-primary', '0 0 10px #ffb000, 0 0 20px #ffb00050, 0 0 30px #ffb00030')
    } else {
      document.documentElement.style.setProperty('--primary', '#00FF41')
      document.documentElement.style.setProperty('--glow-primary', '0 0 10px #00FF41, 0 0 20px #00FF4150, 0 0 30px #00FF4130')
    }
  }, [retroMode])

  return (
    <main className={`min-h-screen bg-background text-foreground relative crt-effect ${retroMode ? 'retro-mode' : ''}`}>
      {/* Matrix Effect */}
      <MatrixEffect 
        isActive={showMatrix} 
        onComplete={() => setShowMatrix(false)} 
      />

      {/* Konami Code Secret Message */}
      {showSecretMessage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-card border border-primary p-8 text-center glow-green animate-fade-in-up">
          <p className="text-primary text-2xl font-bold mb-2">🎮 ACHIEVEMENT UNLOCKED!</p>
          <p className="text-muted-foreground">Você encontrou o Konami Code!</p>
          <p className="text-primary text-sm mt-4">+1000 XP de curiosidade</p>
        </div>
      )}

      {/* Sudo Hire Me Message */}
      {showSudoMessage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black border border-primary p-6 font-mono text-left animate-fade-in-up min-w-[400px]">
          <p className="text-muted-foreground text-sm mb-2">$ sudo hire me</p>
          <p className="text-primary text-sm mb-1">[sudo] password for recruiter: ********</p>
          <p className="text-green-400 text-sm mb-1">✓ Validating credentials...</p>
          <p className="text-green-400 text-sm mb-1">✓ Checking availability...</p>
          <p className="text-green-400 text-sm mb-3">✓ Access granted!</p>
          <p className="text-primary font-bold">🚀 HIRING PROCESS INITIATED</p>
          <p className="text-muted-foreground text-xs mt-3">Enviando currículo para contato@gabrielgadelha.dev...</p>
        </div>
      )}

      {/* Tiny Window Message */}
      {showTinyMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card border border-primary px-4 py-2 animate-fade-in-up">
          <p className="text-primary text-sm font-bold">🐜 Modo formiga detectado!</p>
        </div>
      )}

      {/* Hire Text Selection Animation */}
      {showHireAnimation && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute text-2xl animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            >
              {['💼', '✨', '🚀', '💻', '⭐'][Math.floor(Math.random() * 5)]}
            </span>
          ))}
        </div>
      )}

      {/* Retro Mode Indicator */}
      {retroMode && (
        <div className="fixed top-4 right-4 z-50 bg-card border border-primary px-3 py-1 animate-fade-in">
          <p className="text-primary text-xs font-bold">RETRO MODE: ON</p>
        </div>
      )}

      {/* Sections */}
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
