"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useLanguage } from "@/components/portfolio/language-context"

interface Skill {
  name: string
  level: number
  category: "language" | "framework" | "tool"
  curiosity: string
}

export function SkillsSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const content = {
    pt: {
      title: "SKILL TREE",
      attrs: "ATRIBUTOS",
      other: "OUTRAS HABILIDADES",
      curiosity: "Curiosidade:",
      skills: [
        { name: "Python", level: 85, category: "language", curiosity: "Python foi nomeado em homenagem ao Monty Python." },
        { name: "Node.js", level: 75, category: "framework", curiosity: "NPM tem milhoes de pacotes publicados." },
        { name: "React/TS", level: 65, category: "framework", curiosity: "React nasceu no Facebook em 2011." },
        { name: "Docker", level: 70, category: "tool", curiosity: "A baleia do Docker se chama Moby Dock." },
        { name: "PostgreSQL", level: 72, category: "tool", curiosity: "PostgreSQL existe desde 1986." },
        { name: "FastAPI", level: 80, category: "framework", curiosity: "FastAPI e focada em performance." },
        { name: "Git", level: 78, category: "tool", curiosity: "Git foi criado em 2 semanas por Linus Torvalds." },
        { name: "Redis", level: 65, category: "tool", curiosity: "Redis guarda dados em memoria para alta velocidade." },
      ] satisfies Skill[],
      additional: ["Django", "Flask", "Firebase", "Vite", "Tailwind CSS", "REST APIs", "GraphQL", "Linux", "CI/CD", "AWS", "Vercel"],
    },
    en: {
      title: "SKILL TREE",
      attrs: "ATTRIBUTES",
      other: "OTHER SKILLS",
      curiosity: "Curiosity:",
      skills: [
        { name: "Python", level: 85, category: "language", curiosity: "Python was named after Monty Python." },
        { name: "Node.js", level: 75, category: "framework", curiosity: "NPM has millions of published packages." },
        { name: "React/TS", level: 65, category: "framework", curiosity: "React was created at Facebook in 2011." },
        { name: "Docker", level: 70, category: "tool", curiosity: "Docker's whale mascot is called Moby Dock." },
        { name: "PostgreSQL", level: 72, category: "tool", curiosity: "PostgreSQL has existed since 1986." },
        { name: "FastAPI", level: 80, category: "framework", curiosity: "FastAPI is designed for high performance." },
        { name: "Git", level: 78, category: "tool", curiosity: "Git was created in two weeks by Linus Torvalds." },
        { name: "Redis", level: 65, category: "tool", curiosity: "Redis stores data in memory for high speed." },
      ] satisfies Skill[],
      additional: ["Django", "Flask", "Firebase", "Vite", "Tailwind CSS", "REST APIs", "GraphQL", "Linux", "CI/CD", "AWS", "Vercel"],
    },
    es: {
      title: "SKILL TREE",
      attrs: "ATRIBUTOS",
      other: "OTRAS HABILIDADES",
      curiosity: "Curiosidad:",
      skills: [
        { name: "Python", level: 85, category: "language", curiosity: "Python fue nombrado por Monty Python." },
        { name: "Node.js", level: 75, category: "framework", curiosity: "NPM tiene millones de paquetes publicados." },
        { name: "React/TS", level: 65, category: "framework", curiosity: "React fue creado en Facebook en 2011." },
        { name: "Docker", level: 70, category: "tool", curiosity: "La ballena de Docker se llama Moby Dock." },
        { name: "PostgreSQL", level: 72, category: "tool", curiosity: "PostgreSQL existe desde 1986." },
        { name: "FastAPI", level: 80, category: "framework", curiosity: "FastAPI esta orientado a alto rendimiento." },
        { name: "Git", level: 78, category: "tool", curiosity: "Git fue creado en dos semanas por Linus Torvalds." },
        { name: "Redis", level: 65, category: "tool", curiosity: "Redis guarda datos en memoria para alta velocidad." },
      ] satisfies Skill[],
      additional: ["Django", "Flask", "Firebase", "Vite", "Tailwind CSS", "REST APIs", "GraphQL", "Linux", "CI/CD", "AWS", "Vercel"],
    },
  }[language]

  const skills = useMemo(() => content.skills, [content.skills])

  useEffect(() => {
    setIsVisible(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [language])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">{content.title}</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">{content.attrs}</span>
        </div>

        <div className="space-y-6 mb-12">
          {skills.map((skill, index) => (
            <SkillBar key={`${language}-${skill.name}`} skill={skill} isVisible={isVisible} delay={index * 100} curiosityLabel={content.curiosity} />
          ))}
        </div>

        <div className="border border-primary/30 p-6 bg-primary/5">
          <h3 className="text-primary text-sm mb-4">{content.other}</h3>
          <div className="flex flex-wrap gap-2">
            {content.additional.map((skill) => (
              <span key={skill} className="text-sm border border-primary/30 text-primary px-3 py-1 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_#00FF4150] transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  skill: Skill
  isVisible: boolean
  delay: number
  curiosityLabel: string
}

function SkillBar({ skill, isVisible, delay, curiosityLabel }: SkillBarProps) {
  const barChars = 14
  const filledChars = Math.round((skill.level / 100) * barChars)
  const emptyChars = barChars - filledChars
  const [showCuriosity, setShowCuriosity] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowCuriosity(true)
    }, 5000)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setShowCuriosity(false)
  }

  return (
    <div
      className="flex items-center gap-4 opacity-0 relative group"
      style={{
        animation: isVisible ? `fade-in-up 0.5s ease-out ${delay}ms forwards` : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-foreground w-24 text-sm">{skill.name}</span>
      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1 relative">
          <div className="font-mono text-lg tracking-wider">
            <span className="text-primary">{isVisible ? "█".repeat(filledChars) : ""}</span>
            <span className="text-muted-foreground/30">{"░".repeat(isVisible ? emptyChars : barChars)}</span>
          </div>
          <div
            className="absolute inset-0 bg-primary/10 origin-left"
            style={{
              transform: isVisible ? `scaleX(${skill.level / 100})` : "scaleX(0)",
              transition: `transform 1s ease-out ${delay}ms`,
            }}
          />
        </div>
        <span className="text-primary font-bold w-12 text-right">{skill.level}%</span>
      </div>

      {showCuriosity && (
        <div className="absolute left-0 -bottom-16 w-full bg-card border border-primary p-3 z-10 animate-fade-in">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-bold">💡 {curiosityLabel} </span>
            {skill.curiosity}
          </p>
        </div>
      )}
    </div>
  )
}


