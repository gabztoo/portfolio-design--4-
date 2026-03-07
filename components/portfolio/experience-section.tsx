"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Briefcase, MapPin, Calendar, ChevronRight, Sword, Shield, Cpu } from "lucide-react"
import { useLanguage } from "@/components/portfolio/language-context"

interface Experience {
  title: string
  company: string
  period: string
  duration: string
  location: string
  type: "legendary" | "epic" | "rare" | "common"
  description: string
  responsibilities?: string[]
  techStack?: string[]
  icon: "sword" | "shield" | "cpu"
}

const typeColors = {
  legendary: {
    border: "border-[#ffd700]",
    text: "text-[#ffd700]",
    bg: "bg-[#ffd700]/10",
    glow: "glow-legendary",
    label: "LEGENDARY",
  },
  epic: {
    border: "border-[#ff6b35]",
    text: "text-[#ff6b35]",
    bg: "bg-[#ff6b35]/10",
    glow: "glow-epic",
    label: "EPIC",
  },
  rare: {
    border: "border-[#00d4ff]",
    text: "text-[#00d4ff]",
    bg: "bg-[#00d4ff]/10",
    glow: "glow-rare",
    label: "RARE",
  },
  common: {
    border: "border-[#a0a0a0]",
    text: "text-[#a0a0a0]",
    bg: "bg-[#a0a0a0]/10",
    glow: "",
    label: "COMMON",
  },
}

const IconComponent = ({ icon }: { icon: "sword" | "shield" | "cpu" }) => {
  switch (icon) {
    case "sword":
      return <Sword className="w-5 h-5" />
    case "shield":
      return <Shield className="w-5 h-5" />
    case "cpu":
      return <Cpu className="w-5 h-5" />
  }
}

export function ExperienceSection() {
  const { language } = useLanguage()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const content = {
    pt: {
      title: "Experiencia Profissional",
      subtitle: "Missoes completadas e em andamento",
      objectives: "// OBJECTIVES",
      total: "// TOTAL_EXPERIENCE",
      years: "Anos Dev",
      quests: "Missoes",
      months: "Meses XP",
      experiences: [
        {
          title: "Desenvolvedor Full Stack",
          company: "Grupo Bringel Oficial",
          period: "jul 2025 - presente",
          duration: "7 meses",
          location: "Manaus, AM",
          type: "legendary",
          icon: "cpu",
          description: "Desenvolvimento de sistemas web corporativos, APIs escalaveis e interfaces modernas.",
          responsibilities: [
            "Implementacao de autenticacao JWT e controle seguro de acesso",
            "Estruturacao de projetos com arquitetura modular",
            "Gerador de CRUDs em Node.js baseado em schemas JSON",
            "Documentacao automatica de APIs (Swagger/Redoc)",
          ],
          techStack: ["Python", "Django", "PostgreSQL", "Angular", "TypeScript", "Node.js"],
        },
        {
          title: "Founder & Software Engineer",
          company: "Perpetuo",
          period: "jan 2026 - presente",
          duration: "1 mes",
          location: "Remoto",
          type: "epic",
          icon: "sword",
          description: "Construindo um AI Gateway focado em execução confiavel de LLMs em produção.",
          responsibilities: [
            "Roteamento inteligente por custo, latencia e tipo de requisicao",
            "Failover automatico entre provedores (OpenAI, Anthropic, Google)",
            "Camadas de observabilidade, logs e controle de custos",
          ],
          techStack: ["AI/LLM", "Node.js", "TypeScript", "Cloud Architecture"],
        },
        {
          title: "Assistente de Suporte de TI",
          company: "Grupo Bringel Oficial",
          period: "abr 2025 - ago 2025",
          duration: "5 meses",
          location: "Manaus, AM",
          type: "rare",
          icon: "shield",
          description: "Suporte técnico de 1 e 2 nivel, configuração de infraestrutura e gestão de ativos.",
          responsibilities: [
            "Configuracao de maquinas, dominio, IP e VPN",
            "Suporte presencial e remoto",
            "Gestao de contas, permissões e licenças",
          ],
          techStack: ["Windows Server", "VPN", "GLPI", "Microsoft 365"],
        },
        {
          title: "Estagiario de Suporte Tecnico",
          company: "Hospital Santa Julia",
          period: "nov 2024 - abr 2025",
          duration: "6 meses",
          location: "Manaus, AM",
          type: "common",
          icon: "shield",
          description: "Suporte técnico hospitalar com foco em seguranca e integração de rede.",
          responsibilities: [
            "Configuracao de maquinas, dominio e VPN",
            "Atendimento presencial e remoto",
            "Resolucao rapida de incidentes",
          ],
          techStack: ["Windows", "VPN", "AnyDesk", "Networking"],
        },
      ] satisfies Experience[],
    },
    en: {
      title: "Professional Experience",
      subtitle: "Completed and active missions",
      objectives: "// OBJECTIVES",
      total: "// TOTAL_EXPERIENCE",
      years: "Dev Years",
      quests: "Missions",
      months: "XP Months",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Grupo Bringel Oficial",
          period: "Jul 2025 - Present",
          duration: "7 months",
          location: "Manaus, AM",
          type: "legendary",
          icon: "cpu",
          description: "Built enterprise web systems, scalable APIs, and modern interfaces.",
          responsibilities: [
            "Implemented JWT authentication and secure access control",
            "Structured projects with modular architecture",
            "Built a Node.js CRUD generator from JSON schemas",
            "Automated API documentation with Swagger/Redoc",
          ],
          techStack: ["Python", "Django", "PostgreSQL", "Angular", "TypeScript", "Node.js"],
        },
        {
          title: "Founder & Software Engineer",
          company: "Perpetuo",
          period: "Jan 2026 - Present",
          duration: "1 month",
          location: "Remote",
          type: "epic",
          icon: "sword",
          description: "Building an AI gateway focused on reliable LLM execution in production.",
          responsibilities: [
            "Implemented intelligent routing by cost, latency, and request type",
            "Built automatic provider failover (OpenAI, Anthropic, Google)",
            "Created observability, logging, and cost control layers",
          ],
          techStack: ["AI/LLM", "Node.js", "TypeScript", "Cloud Architecture"],
        },
        {
          title: "IT Support Assistant",
          company: "Grupo Bringel Oficial",
          period: "Apr 2025 - Aug 2025",
          duration: "5 months",
          location: "Manaus, AM",
          type: "rare",
          icon: "shield",
          description: "L1/L2 support, infrastructure setup, and asset management.",
          responsibilities: [
            "Configured machines, domain, IP, and VPN",
            "On-site and remote technical support",
            "Managed accounts, permissions, and licenses",
          ],
          techStack: ["Windows Server", "VPN", "GLPI", "Microsoft 365"],
        },
        {
          title: "Technical Support Intern",
          company: "Hospital Santa Julia",
          period: "Nov 2024 - Apr 2025",
          duration: "6 months",
          location: "Manaus, AM",
          type: "common",
          icon: "shield",
          description: "Hospital IT support focused on security and network integration.",
          responsibilities: [
            "Configured machines, domain and VPN",
            "On-site and remote support",
            "Fast incident resolution",
          ],
          techStack: ["Windows", "VPN", "AnyDesk", "Networking"],
        },
      ] satisfies Experience[],
    },
    es: {
      title: "Experiencia Profesional",
      subtitle: "Misiones completadas y en progreso",
      objectives: "// OBJECTIVES",
      total: "// TOTAL_EXPERIENCE",
      years: "Anos Dev",
      quests: "Misiones",
      months: "Meses XP",
      experiences: [
        {
          title: "Desarrollador Full Stack",
          company: "Grupo Bringel Oficial",
          period: "jul 2025 - presente",
          duration: "7 meses",
          location: "Manaus, AM",
          type: "legendary",
          icon: "cpu",
          description: "Desarrollo de sistemas web corporativos, APIs escalables e interfaces modernas.",
          responsibilities: [
            "Implementacion de autenticacion JWT y control seguro de acceso",
            "Estructuracion de proyectos con arquitectura modular",
            "Generador de CRUDs en Node.js con schemas JSON",
            "Documentacion automatica de APIs (Swagger/Redoc)",
          ],
          techStack: ["Python", "Django", "PostgreSQL", "Angular", "TypeScript", "Node.js"],
        },
        {
          title: "Founder & Software Engineer",
          company: "Perpetuo",
          period: "ene 2026 - presente",
          duration: "1 mes",
          location: "Remoto",
          type: "epic",
          icon: "sword",
          description: "Construyendo un AI Gateway enfocado en ejecucion confiable de LLMs en produccion.",
          responsibilities: [
            "Ruteo inteligente por costo, latencia y tipo de solicitud",
            "Failover automatico entre proveedores (OpenAI, Anthropic, Google)",
            "Capas de observabilidad, logs y control de costos",
          ],
          techStack: ["AI/LLM", "Node.js", "TypeScript", "Cloud Architecture"],
        },
        {
          title: "Asistente de Soporte TI",
          company: "Grupo Bringel Oficial",
          period: "abr 2025 - ago 2025",
          duration: "5 meses",
          location: "Manaus, AM",
          type: "rare",
          icon: "shield",
          description: "Soporte técnico nivel 1 y 2, configuracion de infraestructura y gestion de activos.",
          responsibilities: [
            "Configuracion de equipos, dominio, IP y VPN",
            "Soporte presencial y remoto",
            "Gestion de cuentas, permisos y licencias",
          ],
          techStack: ["Windows Server", "VPN", "GLPI", "Microsoft 365"],
        },
        {
          title: "Practicante de Soporte Tecnico",
          company: "Hospital Santa Julia",
          period: "nov 2024 - abr 2025",
          duration: "6 meses",
          location: "Manaus, AM",
          type: "common",
          icon: "shield",
          description: "Soporte técnico hospitalario con foco en seguridad e integracion de red.",
          responsibilities: [
            "Configuracion de equipos, dominio y VPN",
            "Atencion presencial y remota",
            "Resolucion rapida de incidentes",
          ],
          techStack: ["Windows", "VPN", "AnyDesk", "Networking"],
        },
      ] satisfies Experience[],
    },
  }[language]

  const experiences = useMemo(() => content.experiences, [content.experiences])

  useEffect(() => {
    setVisibleItems([])
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [language])

  return (
    <section id="experience" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block border border-primary/50 px-4 py-2 mb-4">
            <span className="text-primary text-sm tracking-widest">{"// CAREER_LOG"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary animate-glow-pulse">
            {">"} {content.title}
          </h2>
          <p className="text-muted-foreground mt-2">{content.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const colors = typeColors[exp.type]
            const isVisible = visibleItems.includes(index)
            const isLeft = index % 2 === 0

            return (
              <div
                key={`${language}-${index}`}
                data-index={index}
                className={`relative mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 ${colors.border} ${colors.bg} transform -translate-x-1/2 ${colors.glow}`} style={{ top: "24px" }} />

                <div className={`ml-8 md:ml-0 ${isLeft ? "md:mr-[52%] md:pr-8" : "md:ml-[52%] md:pl-8"}`}>
                  <div className={`border ${colors.border} bg-card p-6 relative overflow-hidden transition-all duration-300 hover:${colors.glow}`}>
                    <div className={`absolute top-0 right-0 ${colors.bg} ${colors.text} px-3 py-1 text-xs tracking-wider border-l border-b ${colors.border}`}>
                      {colors.label}
                    </div>

                    <div className="flex items-start gap-3 mb-4 pr-20">
                      <div className={`p-2 ${colors.bg} ${colors.text} border ${colors.border}`}>
                        <IconComponent icon={exp.icon} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${colors.text}`}>{exp.title}</h3>
                        <p className="text-foreground flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period} ({exp.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-4 border-l-2 border-primary/50 pl-3">{exp.description}</p>

                    {exp.responsibilities && (
                      <div className="mb-4">
                        <p className="text-primary text-sm mb-2">{content.objectives}</p>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.techStack && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/20">
                        {exp.techStack.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 border border-primary/50 text-primary bg-primary/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${colors.border} opacity-50`} />
                    <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${colors.border} opacity-50`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 border border-primary/50 p-6 bg-card text-center">
          <p className="text-primary text-sm mb-2">{content.total}</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div>
              <span className="text-2xl font-bold text-[#ffd700]">1+</span>
              <p className="text-xs text-muted-foreground">{content.years}</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#ff6b35]">4</span>
              <p className="text-xs text-muted-foreground">{content.quests}</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#00d4ff]">19+</span>
              <p className="text-xs text-muted-foreground">{content.months}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


