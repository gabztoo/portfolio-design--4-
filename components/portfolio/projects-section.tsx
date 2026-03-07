"use client"

import { useMemo, useState } from "react"
import { Github, ExternalLink, Star, Flame, Gem, Sword, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/portfolio/language-context"

type Rarity = "legendary" | "epic" | "rare" | "common"

interface Project {
  name: string
  tagline: string
  description: string
  details: string[]
  rarity: Rarity
  xp: number
  stack: string[]
  repo: string
  live?: string
  year?: string
  type?: string
}

const rarityConfig = {
  legendary: {
    icon: Star,
    label: "LEGENDARY",
    color: "text-legendary",
    border: "border-legendary/50 hover:border-legendary",
    glow: "hover:glow-legendary",
    bg: "bg-legendary/5",
  },
  epic: {
    icon: Flame,
    label: "EPIC",
    color: "text-epic",
    border: "border-epic/50 hover:border-epic",
    glow: "hover:glow-epic",
    bg: "bg-epic/5",
  },
  rare: {
    icon: Gem,
    label: "RARE",
    color: "text-rare",
    border: "border-rare/50 hover:border-rare",
    glow: "hover:glow-rare",
    bg: "bg-rare/5",
  },
  common: {
    icon: Sword,
    label: "COMMON",
    color: "text-common",
    border: "border-common/50 hover:border-common",
    glow: "",
    bg: "bg-common/5",
  },
}

export function ProjectsSection() {
  const { language } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [showXpMessage, setShowXpMessage] = useState<string | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const content = {
    pt: {
      title: "QUEST LOG",
      completed: "MISSÕES COMPLETADAS",
      detailsLabel: "DETALHES DA QUEST:",
      xpEarned: "XP Ganho:",
      repo: "REPO",
      live: "LIVE",
      clickHint: "clique para detalhes",
      projects: [
        {
          name: "Perpetuo",
          tagline: "AI Gateway e orquestracao de LLMs",
          description: "Gateway de LLMs com multiprovedores, observabilidade e controle de custos para produção.",
          details: [
            "Roteamento inteligente por custo, latencia e complexidade",
            "Failover automatico entre OpenAI, Anthropic e Google",
            "Camadas de observabilidade, tokens e auditoria",
            "Arquitetura BYOK-first sem vendor lock-in",
          ],
          rarity: "legendary",
          xp: 5000,
          stack: ["Python", "Node.js", "AI APIs", "Architecture", "Observability"],
          repo: "https://github.com/gabztoo/Perpetuo",
          year: "2025",
          type: "Produto SaaS",
        },
        {
          name: "Copa Baixada",
          tagline: "Gestao de campeonato com IA",
          description: "PWA full-stack para campeonatos de futebol com verificacao facial e RBAC.",
          details: [
            "React 19 + TypeScript com arquitetura escalavel",
            "Backend serverless com Firebase e Cloud Functions",
            "Integracao com Gemini API para verificacao facial",
            "Deploy automatizado no Firebase Hosting",
          ],
          rarity: "legendary",
          xp: 4500,
          stack: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "Gemini API", "PWA"],
          repo: "https://github.com/gabztoo/copa-baixada",
          year: "Jan 2026 - Atual",
          type: "Freelancer",
        },
        {
          name: "Gasto Recorrente",
          tagline: "Analise de extratos com IA",
          description: "Aplicacao para identificar assinaturas recorrentes automaticamente.",
          details: ["Analise automatica de extratos", "Deteccao com Gemini API", "Interface React + TypeScript"],
          rarity: "epic",
          xp: 3500,
          stack: ["React", "TypeScript", "Firebase", "Gemini API"],
          repo: "https://github.com/gabztoo/gasto-recorrente",
          live: "https://gasto-recorrente.vercel.app",
          year: "2025",
          type: "Projeto Pessoal",
        },
        {
          name: "Chatbot de Suporte Tecnico com IA",
          tagline: "Assistente N1 com Llama2",
          description: "Chatbot de suporte técnico para atendimento de primeiro nivel.",
          details: ["Llama2 via Ollama", "Interface Streamlit", "RAG com LangChain + FAISS"],
          rarity: "epic",
          xp: 3000,
          stack: ["Llama2", "Streamlit", "LangChain", "FAISS", "Python"],
          repo: "https://github.com/gabztoo/chatbot-suporte-ia",
          year: "2025",
          type: "Projeto Academico",
        },
        {
          name: "Resume Maker",
          tagline: "Gerador de currículos Django + LaTeX",
          description: "Sistema para gerar currículos profissionais com alta qualidade de renderizacao.",
          details: ["Backend Django", "Templates personalizaveis", "Renderizacao com LaTeX", "Docker"],
          rarity: "rare",
          xp: 2500,
          stack: ["Python", "Django", "LaTeX", "Docker"],
          repo: "https://github.com/gabztoo/resume-maker",
          year: "2024",
          type: "Projeto Pessoal",
        },
        {
          name: "Bot TI",
          tagline: "Assistente de suporte N1",
          description: "Bot para atendimento técnico inicial e escalonamento de chamados.",
          details: ["Bot de Discord", "Respostas automatizadas", "Escalonamento", "SQLite"],
          rarity: "common",
          xp: 1500,
          stack: ["Python", "Discord.py", "SQLite"],
          repo: "https://github.com/gabztoo/Bot-para-ajuda-de-TI",
          year: "2024",
          type: "Projeto Pessoal",
        },
      ] satisfies Project[],
    },
    en: {
      title: "QUEST LOG",
      completed: "COMPLETED MISSIONS",
      detailsLabel: "QUEST DETAILS:",
      xpEarned: "XP Gained:",
      repo: "REPO",
      live: "LIVE",
      clickHint: "click for details",
      projects: [
        {
          name: "Perpetuo",
          tagline: "AI gateway and LLM orchestration",
          description: "Production-ready LLM gateway with multi-provider routing, observability, and cost controls.",
          details: [
            "Intelligent routing by cost, latency, and complexity",
            "Automatic failover across OpenAI, Anthropic, and Google",
            "Token tracking, logs, and auditing layers",
            "BYOK-first architecture with no vendor lock-in",
          ],
          rarity: "legendary",
          xp: 5000,
          stack: ["Python", "Node.js", "AI APIs", "Architecture", "Observability"],
          repo: "https://github.com/gabztoo/Perpetuo",
          year: "2025",
          type: "SaaS Product",
        },
        {
          name: "Copa Baixada",
          tagline: "Sports championship management with AI",
          description: "Full-stack PWA for football competitions with face verification and RBAC.",
          details: [
            "React 19 + TypeScript architecture",
            "Serverless backend with Firebase and Cloud Functions",
            "Gemini API integration for face verification",
            "Automated Firebase Hosting deploy",
          ],
          rarity: "legendary",
          xp: 4500,
          stack: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "Gemini API", "PWA"],
          repo: "https://github.com/gabztoo/copa-baixada",
          year: "Jan 2026 - Present",
          type: "Freelance",
        },
        {
          name: "Recurring Spend",
          tagline: "AI bank statement analysis",
          description: "Web app that detects recurring subscriptions automatically.",
          details: ["Automated statement analysis", "Gemini-based detection", "React + TypeScript UI"],
          rarity: "epic",
          xp: 3500,
          stack: ["React", "TypeScript", "Firebase", "Gemini API"],
          repo: "https://github.com/gabztoo/gasto-recorrente",
          live: "https://gasto-recorrente.vercel.app",
          year: "2025",
          type: "Personal Project",
        },
        {
          name: "AI Technical Support Chatbot",
          tagline: "Llama2-based N1 assistant",
          description: "Level-1 technical support chatbot for first-contact assistance.",
          details: ["Llama2 via Ollama", "Streamlit interface", "RAG with LangChain + FAISS"],
          rarity: "epic",
          xp: 3000,
          stack: ["Llama2", "Streamlit", "LangChain", "FAISS", "Python"],
          repo: "https://github.com/gabztoo/chatbot-suporte-ia",
          year: "2025",
          type: "Academic Project",
        },
        {
          name: "Resume Maker",
          tagline: "Django + LaTeX resume generator",
          description: "System to generate professional resumes with high-quality rendering.",
          details: ["Django backend", "Custom templates", "LaTeX rendering", "Docker"],
          rarity: "rare",
          xp: 2500,
          stack: ["Python", "Django", "LaTeX", "Docker"],
          repo: "https://github.com/gabztoo/resume-maker",
          year: "2024",
          type: "Personal Project",
        },
        {
          name: "IT Bot",
          tagline: "N1 support assistant",
          description: "Bot for first-level technical support and ticket escalation.",
          details: ["Discord bot", "Automated responses", "Ticket escalation", "SQLite"],
          rarity: "common",
          xp: 1500,
          stack: ["Python", "Discord.py", "SQLite"],
          repo: "https://github.com/gabztoo/Bot-para-ajuda-de-TI",
          year: "2024",
          type: "Personal Project",
        },
      ] satisfies Project[],
    },
    es: {
      title: "QUEST LOG",
      completed: "MISIONES COMPLETADAS",
      detailsLabel: "DETALLES DE LA QUEST:",
      xpEarned: "XP Ganado:",
      repo: "REPO",
      live: "LIVE",
      clickHint: "clic para detalles",
      projects: [
        {
          name: "Perpetuo",
          tagline: "AI gateway y orquestacion de LLMs",
          description: "Gateway de LLMs para produccion con multiproveedor, observabilidad y control de costos.",
          details: [
            "Ruteo inteligente por costo, latencia y complejidad",
            "Failover automatico entre OpenAI, Anthropic y Google",
            "Capas de logs, tokens y auditoria",
            "Arquitectura BYOK-first sin vendor lock-in",
          ],
          rarity: "legendary",
          xp: 5000,
          stack: ["Python", "Node.js", "AI APIs", "Architecture", "Observability"],
          repo: "https://github.com/gabztoo/Perpetuo",
          year: "2025",
          type: "Producto SaaS",
        },
        {
          name: "Copa Baixada",
          tagline: "Gestion de campeonato con IA",
          description: "PWA full-stack para campeonatos de futbol con verificacion facial y RBAC.",
          details: [
            "Arquitectura React 19 + TypeScript",
            "Backend serverless con Firebase y Cloud Functions",
            "Integracion con Gemini API para verificacion facial",
            "Deploy automatizado en Firebase Hosting",
          ],
          rarity: "legendary",
          xp: 4500,
          stack: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "Gemini API", "PWA"],
          repo: "https://github.com/gabztoo/copa-baixada",
          year: "Ene 2026 - Actual",
          type: "Freelance",
        },
        {
          name: "Gasto Recurrente",
          tagline: "Analisis de extractos con IA",
          description: "Aplicacion web para detectar suscripciones recurrentes automaticamente.",
          details: ["Analisis automatico de extractos", "Deteccion con Gemini API", "UI React + TypeScript"],
          rarity: "epic",
          xp: 3500,
          stack: ["React", "TypeScript", "Firebase", "Gemini API"],
          repo: "https://github.com/gabztoo/gasto-recorrente",
          live: "https://gasto-recorrente.vercel.app",
          year: "2025",
          type: "Proyecto Personal",
        },
        {
          name: "Chatbot de Soporte Tecnico con IA",
          tagline: "Asistente N1 con Llama2",
          description: "Chatbot de soporte técnico de primer nivel.",
          details: ["Llama2 con Ollama", "Interfaz Streamlit", "RAG con LangChain + FAISS"],
          rarity: "epic",
          xp: 3000,
          stack: ["Llama2", "Streamlit", "LangChain", "FAISS", "Python"],
          repo: "https://github.com/gabztoo/chatbot-suporte-ia",
          year: "2025",
          type: "Proyecto Academico",
        },
        {
          name: "Resume Maker",
          tagline: "Generador de CV Django + LaTeX",
          description: "Sistema para generar curriculums profesionales con render de alta calidad.",
          details: ["Backend Django", "Templates personalizables", "Render con LaTeX", "Docker"],
          rarity: "rare",
          xp: 2500,
          stack: ["Python", "Django", "LaTeX", "Docker"],
          repo: "https://github.com/gabztoo/resume-maker",
          year: "2024",
          type: "Proyecto Personal",
        },
        {
          name: "Bot TI",
          tagline: "Asistente de soporte N1",
          description: "Bot para soporte técnico inicial y escalamiento de tickets.",
          details: ["Bot para Discord", "Respuestas automaticas", "Escalamiento", "SQLite"],
          rarity: "common",
          xp: 1500,
          stack: ["Python", "Discord.py", "SQLite"],
          repo: "https://github.com/gabztoo/Bot-para-ajuda-de-TI",
          year: "2024",
          type: "Proyecto Personal",
        },
      ] satisfies Project[],
    },
  }[language]

  const projects = useMemo(() => content.projects, [content.projects])

  const handleLongHover = (projectName: string) => {
    setShowXpMessage(projectName)
    setTimeout(() => setShowXpMessage(null), 2000)
  }

  const handleProjectClick = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName)
  }

  const mainProjects = projects.slice(0, 2)
  const otherProjects = projects.slice(2)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">{content.title}</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">{projects.length} {content.completed}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mainProjects.map((project) => (
            <ProjectCard
              key={`${language}-${project.name}`}
              project={project}
              labels={content}
              isMain
              isHovered={hoveredProject === project.name}
              isExpanded={expandedProject === project.name}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onLongHover={() => handleLongHover(project.name)}
              onClick={() => handleProjectClick(project.name)}
              showXpMessage={showXpMessage === project.name}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <ProjectCard
              key={`${language}-${project.name}`}
              project={project}
              labels={content}
              isHovered={hoveredProject === project.name}
              isExpanded={expandedProject === project.name}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onLongHover={() => handleLongHover(project.name)}
              onClick={() => handleProjectClick(project.name)}
              showXpMessage={showXpMessage === project.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  labels: {
    detailsLabel: string
    xpEarned: string
    repo: string
    live: string
    clickHint: string
  }
  isMain?: boolean
  isHovered: boolean
  isExpanded: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onLongHover: () => void
  onClick: () => void
  showXpMessage: boolean
}

function ProjectCard({ project, labels, isMain, isHovered, isExpanded, onMouseEnter, onMouseLeave, onLongHover, onClick, showXpMessage }: ProjectCardProps) {
  const config = rarityConfig[project.rarity]
  const Icon = config.icon

  return (
    <div
      className={`
        relative border ${config.border} ${config.bg} p-6 transition-all duration-300
        ${config.glow} ${isMain ? "md:p-8" : ""} cursor-pointer
        ${isExpanded ? "col-span-1 md:col-span-full lg:col-span-full" : ""}
      `}
      onMouseEnter={() => {
        onMouseEnter()
        setTimeout(() => {
          if (isHovered) onLongHover()
        }, 2000)
      }}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {showXpMessage && <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary font-bold animate-fade-in-up">+{project.xp} XP</div>}

      <div className="flex items-center justify-between mb-3">
        <div className={`flex items-center gap-2 ${config.color} text-sm`}>
          <Icon className="w-4 h-4" />
          <span>{config.label}</span>
          {project.year && <span className="text-muted-foreground text-xs ml-2">• {project.year}</span>}
          {project.type && <span className="text-muted-foreground text-xs">• {project.type}</span>}
        </div>
        <div className={`${config.color} transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      <h3 className={`font-bold text-foreground mb-2 ${isMain ? "text-2xl" : "text-lg"}`}>{project.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>

      {(isMain || isExpanded) && <p className="text-muted-foreground mb-4">{project.description}</p>}

      {isExpanded && (
        <div className="mt-4 mb-6 border-l-2 border-primary/30 pl-4 space-y-2 animate-fade-in">
          <h4 className="text-primary font-semibold text-sm mb-3">{labels.detailsLabel}</h4>
          <ul className="space-y-2">
            {project.details.map((detail, index) => (
              <li key={index} className="text-muted-foreground text-sm flex gap-2">
                <span className="text-primary shrink-0">▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center gap-2 text-primary text-sm mb-4">
        <span className="text-muted-foreground">{labels.xpEarned}</span>
        <span className="font-bold">+{project.xp.toLocaleString()} XP</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs border border-primary/30 text-primary px-2 py-1 hover:border-primary hover:bg-primary/10 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 gap-2 bg-transparent" asChild onClick={(e) => e.stopPropagation()}>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            {labels.repo}
          </a>
        </Button>
        {project.live && (
          <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 gap-2 bg-transparent" asChild onClick={(e) => e.stopPropagation()}>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              {labels.live}
            </a>
          </Button>
        )}
      </div>

      {!isExpanded && <div className="absolute bottom-2 right-2 text-muted-foreground text-xs opacity-50">{labels.clickHint}</div>}
    </div>
  )
}


