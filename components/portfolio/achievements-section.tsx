"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Flame, Bot, Zap, Container } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Achievement {
  icon: LucideIcon
  emoji: string
  title: string
  description: string
  unlocked: boolean
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    emoji: "🏆",
    title: "First Deploy",
    description: "Primeira aplicação em produção",
    unlocked: true,
  },
  {
    icon: Flame,
    emoji: "🔥",
    title: "100 Commits",
    description: "Mais de 100 commits públicos",
    unlocked: true,
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Integrator",
    description: "Integrou IA em projeto real",
    unlocked: true,
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Full-stack Ready",
    description: "Domina front e back",
    unlocked: true,
  },
  {
    icon: Container,
    emoji: "🐳",
    title: "Container Master",
    description: "Usa Docker em produção",
    unlocked: true,
  },
]

export function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
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
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">ACHIEVEMENTS</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">TROFÉUS DESBLOQUEADOS</span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.title}
              achievement={achievement}
              isVisible={visibleItems.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface AchievementCardProps {
  achievement: Achievement
  isVisible: boolean
}

function AchievementCard({ achievement, isVisible }: AchievementCardProps) {
  const Icon = achievement.icon

  return (
    <div 
      className={`
        border border-primary/30 bg-primary/5 p-4 transition-all duration-500
        hover:border-primary hover:bg-primary/10 hover:glow-green
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 border border-primary/50 bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{achievement.emoji}</span>
            <h3 className="font-bold text-foreground">{achievement.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{achievement.description}</p>
        </div>
      </div>
      {/* Unlocked indicator */}
      <div className="mt-3 pt-3 border-t border-primary/20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-xs">DESBLOQUEADO</span>
      </div>
    </div>
  )
}
