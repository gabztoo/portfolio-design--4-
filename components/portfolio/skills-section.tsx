"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  level: number
  category: "language" | "framework" | "tool"
  curiosity: string
}

const skills: Skill[] = [
  { name: "Python", level: 85, category: "language", curiosity: "Python foi nomeado em homenagem ao grupo de comédia Monty Python, não à cobra! 🐍" },
  { name: "Node.js", level: 75, category: "framework", curiosity: "O NPM tem mais de 2 milhões de pacotes - se cada um fosse uma pizza, daria pra alimentar uma cidade! 🍕" },
  { name: "React/TS", level: 65, category: "framework", curiosity: "O React foi criado pelo Facebook em 2011 e inicialmente foi criticado por misturar HTML com JS 😅" },
  { name: "Docker", level: 70, category: "tool", curiosity: "A baleia do Docker se chama Moby Dock! Ela carrega contêineres nas costas 🐳" },
  { name: "PostgreSQL", level: 72, category: "tool", curiosity: "O Postgres existe desde 1986 - é mais velho que muitos desenvolvedores que o usam! 🐘" },
  { name: "FastAPI", level: 80, category: "framework", curiosity: "FastAPI é tão rápido que rivaliza com Node.js e Go em performance! ⚡" },
  { name: "Git", level: 78, category: "tool", curiosity: "Linus Torvalds criou o Git em apenas 2 semanas para gerenciar o kernel Linux! 🔥" },
  { name: "Redis", level: 65, category: "tool", curiosity: "Redis significa 'REmote DIctionary Server' e armazena tudo na RAM - velocidade insana! 🚀" },
]

const additionalSkills = [
  "Django", "Flask", "Firebase", "Vite", "Tailwind CSS", 
  "REST APIs", "GraphQL", "Linux", "CI/CD", "AWS", "Vercel"
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">SKILL TREE</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">ATRIBUTOS</span>
        </div>

        {/* XP Bars */}
        <div className="space-y-6 mb-12">
          {skills.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Skills Chips */}
        <div className="border border-primary/30 p-6 bg-primary/5">
          <h3 className="text-primary text-sm mb-4">OUTRAS HABILIDADES</h3>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <span 
                key={skill}
                className="text-sm border border-primary/30 text-primary px-3 py-1 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_#00FF4150] transition-all cursor-default"
              >
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
}

function SkillBar({ skill, isVisible, delay }: SkillBarProps) {
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
        animation: isVisible ? `fade-in-up 0.5s ease-out ${delay}ms forwards` : "none"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-foreground w-24 text-sm">{skill.name}</span>
      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1 relative">
          {/* ASCII-style progress bar */}
          <div className="font-mono text-lg tracking-wider">
            <span className="text-primary">
              {isVisible ? "█".repeat(filledChars) : ""}
            </span>
            <span className="text-muted-foreground/30">
              {"░".repeat(isVisible ? emptyChars : barChars)}
            </span>
          </div>
          {/* Animated underlay */}
          <div 
            className="absolute inset-0 bg-primary/10 origin-left"
            style={{
              transform: isVisible ? `scaleX(${skill.level / 100})` : "scaleX(0)",
              transition: `transform 1s ease-out ${delay}ms`
            }}
          />
        </div>
        <span className="text-primary font-bold w-12 text-right">{skill.level}%</span>
      </div>

      {/* Curiosity Tooltip */}
      {showCuriosity && (
        <div className="absolute left-0 -bottom-16 w-full bg-card border border-primary p-3 z-10 animate-fade-in">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-bold">💡 Curiosidade: </span>
            {skill.curiosity}
          </p>
        </div>
      )}
    </div>
  )
}
