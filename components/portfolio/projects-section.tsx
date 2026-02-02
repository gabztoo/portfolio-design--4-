"use client"

import { useState } from "react"
import { Github, ExternalLink, Star, Flame, Gem, Sword, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const projects: Project[] = [
  {
    name: "Perpetuo",
    tagline: "AI Gateway e Orquestração de LLMs",
    description: "Gateway completo para LLMs com suporte a múltiplos providers, logging, métricas e observabilidade. Arquitetura robusta para produção.",
    details: [
      "Idealizei e desenvolvi o Perpetuo, um gateway de IA focado em orquestração de múltiplos provedores de LLM (OpenAI, Anthropic, Google), garantindo alta disponibilidade, controle de custos e redução de latência.",
      "Implementei roteamento inteligente de requisições baseado em custo, latência e complexidade, evitando o uso de modelos caros para tarefas simples.",
      "Desenvolvi mecanismos de failover automático entre provedores, garantindo continuidade operacional mesmo em falhas de API ou degradação de SLA.",
      "Criei camadas de observabilidade e auditoria de uso, permitindo rastreamento preciso de tokens, custos e decisões de roteamento.",
      "Arquitetura BYOK-first (Bring Your Own Key), evitando vendor lock-in e permitindo que empresas mantenham controle total sobre suas credenciais e consumo de IA.",
      "Projeto orientado a ambientes de produção, com foco em confiabilidade, previsibilidade financeira e escalabilidade para aplicações B2B."
    ],
    rarity: "legendary",
    xp: 5000,
    stack: ["Python", "Node.js", "APIs de IA", "Arquitetura de Sistemas", "Observabilidade"],
    repo: "https://github.com/gabztoo/Perpetuo",
    year: "2025",
    type: "Produto SaaS",
  },
  {
    name: "Copa Baixada",
    tagline: "Sistema de Gestão de Campeonato Esportivo Remoto",
    description: "Aplicação web progressiva (PWA) full-stack para gestão de campeonatos de futebol com verificação facial por IA.",
    details: [
      "Arquitetei e desenvolvi uma aplicação web progressiva (PWA) full-stack para gestão de campeonatos de futebol, utilizando React 19 com TypeScript e backend serverless baseado em Firebase.",
      "Implementei gerenciamento de estado global com Context API e Provider Pattern (Auth, Toast e Modal), garantindo organização e escalabilidade da aplicação.",
      "Utilizei validação de schemas com Zod para assegurar type-safety em runtime e reduzir falhas de integração entre frontend e backend.",
      "Projetei e implementei controle de acesso baseado em papéis (RBAC) com quatro níveis de permissão, garantindo segurança e segregação de responsabilidades.",
      "Desenvolvi backend serverless com Cloud Functions (Node.js) para operações sensíveis e integração com a Google Gemini API.",
      "Modelei dados no Firestore com regras de segurança granulares por collection e role, além de autenticação via Firebase Auth com carregamento de perfil customizado.",
      "Implementei sanitização automática de dados para compatibilidade com o Firestore, evitando inconsistências e erros de persistência.",
      "Integrei verificação facial utilizando Google Gemini API através de Cloud Functions protegidas.",
      "Implementei upload, otimização e crop de imagens com Cloudinary e react-easy-crop no client-side.",
      "Configurei Service Worker para funcionamento offline e cache de assets, garantindo melhor experiência em ambientes com conectividade limitada.",
      "Estruturei pipeline de build com Vite, utilizando tree-shaking otimizado, além de scripts de migração e seed de dados com Firebase Admin SDK.",
      "Realizei deploy automatizado da aplicação via Firebase Hosting."
    ],
    rarity: "legendary",
    xp: 4500,
    stack: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "Gemini API", "Vite", "PWA"],
    repo: "https://github.com/gabztoo/copa-baixada",
    year: "Jan 2026 – Atualmente",
    type: "Freelancer Full-Stack",
  },
  {
    name: "Gasto Recorrente",
    tagline: "Análise de extratos com IA",
    description: "Aplicação web para análise inteligente de gastos recorrentes. Usa Google Gemini para detectar assinaturas automaticamente.",
    details: [
      "Desenvolvido para analisar extratos bancários e identificar gastos recorrentes automaticamente.",
      "Integração com Google Gemini API para detecção inteligente de padrões de assinatura.",
      "Interface responsiva construída com React e TypeScript.",
      "Backend serverless com Firebase para autenticação e persistência de dados."
    ],
    rarity: "epic",
    xp: 3500,
    stack: ["React", "TypeScript", "Firebase", "Gemini API", "Vite"],
    repo: "https://github.com/gabztoo/gasto-recorrente",
    live: "https://gasto-recorrente.vercel.app",
    year: "2025",
    type: "Projeto Pessoal",
  },
  {
    name: "Chatbot de Suporte Técnico com IA",
    tagline: "Assistente de suporte N1 com Llama2",
    description: "Chatbot de suporte técnico nível 1 utilizando Llama2 (Ollama) para automatizar respostas a dúvidas recorrentes.",
    details: [
      "Desenvolvimento de um chatbot de suporte técnico nível 1 utilizando Llama2 (Ollama) para automatizar respostas a dúvidas recorrentes.",
      "Interface interativa construída com Streamlit e orquestração de conversas via LangChain.",
      "Uso de FAISS para busca vetorial e recuperação semântica rápida a partir de base de dados em CSV."
    ],
    rarity: "epic",
    xp: 3000,
    stack: ["Llama2", "Streamlit", "LangChain", "FAISS", "Python"],
    repo: "https://github.com/gabztoo/chatbot-suporte-ia",
    year: "2025",
    type: "Projeto Acadêmico",
  },
  {
    name: "Resume Maker",
    tagline: "Gerador de currículos Django + LaTeX",
    description: "Sistema para gerar currículos profissionais usando Django no backend e LaTeX para renderização de alta qualidade.",
    details: [
      "Sistema completo para geração de currículos profissionais.",
      "Backend em Django com templates personalizáveis.",
      "Renderização em alta qualidade usando LaTeX.",
      "Containerização com Docker para deploy simplificado."
    ],
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
    description: "Bot de suporte técnico para atendimento de primeiro nível. Automatiza respostas e escalonamento de chamados.",
    details: [
      "Bot para Discord focado em suporte técnico de primeiro nível.",
      "Automatiza respostas para dúvidas frequentes.",
      "Sistema de escalonamento automático de chamados.",
      "Persistência de dados com SQLite."
    ],
    rarity: "common",
    xp: 1500,
    stack: ["Python", "Discord.py", "SQLite"],
    repo: "https://github.com/gabztoo/Bot-para-ajuda-de-TI",
    year: "2024",
    type: "Projeto Pessoal",
  },
]

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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [showXpMessage, setShowXpMessage] = useState<string | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

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
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">QUEST LOG</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">{projects.length} MISSÕES COMPLETADAS</span>
        </div>

        {/* Main Projects - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mainProjects.map((project) => (
            <ProjectCard 
              key={project.name}
              project={project} 
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

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <ProjectCard 
              key={project.name}
              project={project}
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
  isMain?: boolean
  isHovered: boolean
  isExpanded: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onLongHover: () => void
  onClick: () => void
  showXpMessage: boolean
}

function ProjectCard({ project, isMain, isHovered, isExpanded, onMouseEnter, onMouseLeave, onLongHover, onClick, showXpMessage }: ProjectCardProps) {
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
      {/* XP Message Easter Egg */}
      {showXpMessage && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary font-bold animate-fade-in-up">
          +{project.xp} XP
        </div>
      )}

      {/* Header with Badge and Expand Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className={`flex items-center gap-2 ${config.color} text-sm`}>
          <Icon className="w-4 h-4" />
          <span>{config.label}</span>
          {project.year && (
            <span className="text-muted-foreground text-xs ml-2">• {project.year}</span>
          )}
          {project.type && (
            <span className="text-muted-foreground text-xs">• {project.type}</span>
          )}
        </div>
        <div className={`${config.color} transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Project Name */}
      <h3 className={`font-bold text-foreground mb-2 ${isMain ? "text-2xl" : "text-lg"}`}>
        {project.name}
      </h3>

      {/* Tagline */}
      <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>

      {/* Description - Always show for main projects or when expanded */}
      {(isMain || isExpanded) && (
        <p className="text-muted-foreground mb-4">{project.description}</p>
      )}

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 mb-6 border-l-2 border-primary/30 pl-4 space-y-2 animate-fade-in">
          <h4 className="text-primary font-semibold text-sm mb-3">DETALHES DA QUEST:</h4>
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

      {/* XP */}
      <div className="flex items-center gap-2 text-primary text-sm mb-4">
        <span className="text-muted-foreground">XP Ganho:</span>
        <span className="font-bold">+{project.xp.toLocaleString()} XP</span>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs border border-primary/30 text-primary px-2 py-1 hover:border-primary hover:bg-primary/10 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-primary/50 text-primary hover:bg-primary/10 gap-2 bg-transparent"
          asChild
          onClick={(e) => e.stopPropagation()}
        >
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            REPO
          </a>
        </Button>
        {project.live && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/50 text-primary hover:bg-primary/10 gap-2 bg-transparent"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              LIVE
            </a>
          </Button>
        )}
      </div>

      {/* Click hint */}
      {!isExpanded && (
        <div className="absolute bottom-2 right-2 text-muted-foreground text-xs opacity-50">
          clique para detalhes
        </div>
      )}
    </div>
  )
}
