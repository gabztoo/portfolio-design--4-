"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, FileDown, FolderOpen, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onTripleClick: () => void
  onRetroMode: () => void
}

export function HeroSection({ onTripleClick, onRetroMode }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Gabriel Gadelha"
  const clickCountRef = useRef(0)
  const retroClickCountRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const retroTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const handleNameClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    clickCountRef.current += 1
    
    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0
      onTripleClick()
    } else {
      timeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0
      }, 500)
    }
  }

  const handleAvatarClick = () => {
    if (retroTimeoutRef.current) {
      clearTimeout(retroTimeoutRef.current)
    }
    
    retroClickCountRef.current += 1
    
    if (retroClickCountRef.current >= 10) {
      retroClickCountRef.current = 0
      onRetroMode()
    } else {
      retroTimeoutRef.current = setTimeout(() => {
        retroClickCountRef.current = 0
      }, 2000)
    }
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden scanline">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#00FF4108_1px,transparent_1px),linear-gradient(90deg,#00FF4108_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Character Select Frame */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="border border-primary/50 bg-card/80 backdrop-blur-sm p-8 md:p-12 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

          {/* Header */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span>CHARACTER SELECT</span>
            <span className="flex-1 border-t border-primary/30" />
          </div>

          {/* Name with typing effect */}
          <div className="mb-4">
            <span className="text-muted-foreground text-lg">{">"} </span>
            <h1 
              className="inline text-4xl md:text-6xl font-bold text-primary animate-glow-pulse cursor-pointer select-none"
              onClick={handleNameClick}
            >
              {displayText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>_</span>
            </h1>
          </div>

          {/* Class */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-muted-foreground text-sm">CLASSE:</span>
            <span 
              className="text-primary text-xl border border-primary/30 px-3 py-1 bg-primary/5 cursor-pointer select-none hover:border-primary transition-colors"
              onClick={handleAvatarClick}
              title="Clique várias vezes..."
            >
              Full-stack Developer
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatItem label="LEVEL" value="Junior" />
            <StatItem label="XP" value="1+- Ano" />
            <StatItem label="MISSÕES" value="10+" />
            <StatItem label="STATUS" value="Online" isOnline />
          </div>

          {/* CTA Buttons - Game Menu Style */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:glow-green transition-all border-0 gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              VER PROJETOS
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary gap-2 bg-transparent"
              asChild
            >
              <a href="https://github.com/gabztoo" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GITHUB
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary gap-2 bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/gabrielgadelha-ti" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary gap-2 bg-transparent"
              asChild
            >
              <a href="/GABRIEL GADELHA - DEV FULLSTACK.pdf" download="Gabriel Gadelha - Dev Fullstack.pdf">
                <FileDown className="w-4 h-4" />
                DOWNLOAD CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">SCROLL DOWN</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}

function StatItem({ label, value, isOnline }: { label: string; value: string; isOnline?: boolean }) {
  return (
    <div className="border border-primary/20 bg-primary/5 p-3 text-center">
      <div className="text-muted-foreground text-xs mb-1">{label}</div>
      <div className="text-primary font-bold flex items-center justify-center gap-2">
        {isOnline && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
        {value}
      </div>
    </div>
  )
}
