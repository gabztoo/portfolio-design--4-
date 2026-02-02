"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronRight, Sword, Shield, Cpu } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: "legendary" | "epic" | "rare" | "common";
  description: string;
  responsibilities?: string[];
  techStack?: string[];
  icon: "sword" | "shield" | "cpu";
}

const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Grupo Bringel Oficial",
    period: "jul 2025 - presente",
    duration: "7 meses",
    location: "Manaus, AM",
    type: "legendary",
    icon: "cpu",
    description: "Desenvolvimento de sistemas web corporativos, APIs escaláveis e interfaces modernas.",
    responsibilities: [
      "Implementação de autenticação JWT e controle seguro de acesso",
      "Estruturação de projetos com arquitetura modular",
      "Desenvolvimento de gerador de CRUDs em Node.js baseado em schemas JSON",
      "Criação de documentação automática de APIs (Swagger/Redoc)",
      "Front-end com Angular, TypeScript, PrimeNG e TailwindCSS",
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Angular", "TypeScript", "Node.js", "TailwindCSS"],
  },
  {
    title: "Founder & Software Engineer",
    company: "Perpetuo",
    period: "jan 2026 - presente",
    duration: "1 mês",
    location: "Remoto",
    type: "epic",
    icon: "sword",
    description: "Construindo um AI Gateway focado em execução confiável de LLMs em produção.",
    responsibilities: [
      "Implementando roteamento inteligente por custo, latência e tipo de requisição",
      "Desenvolvendo failover automático entre provedores (OpenAI, Anthropic, Google)",
      "Criando camadas de controle de custos, observabilidade e logs",
      "Definindo arquitetura BYOK-first (sem revenda de modelos, sem vendor lock-in)",
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
    description: "Suporte técnico de 1º e 2º nível, configuração de infraestrutura e gestão de ativos.",
    responsibilities: [
      "Formatação e configuração de máquinas (domínio, IP, VPNs)",
      "Suporte presencial e remoto (AnyDesk, VNC)",
      "Configuração de impressoras, roteadores e políticas de rede",
      "Gestão de contas, permissões e licenças (Microsoft 365, Adobe)",
      "Controle de chamados e ativos via GLPI",
    ],
    techStack: ["Windows Server", "VPN", "DHCP", "GLPI", "Microsoft 365"],
  },
  {
    title: "Estagiário de Suporte Técnico",
    company: "Hospital Santa Júlia",
    period: "nov 2024 - abr 2025",
    duration: "6 meses",
    location: "Manaus, AM",
    type: "common",
    icon: "shield",
    description: "Suporte técnico hospitalar com foco em segurança e integração de rede.",
    responsibilities: [
      "Formatação e configuração de máquinas (domínio, VPNs, IP)",
      "Suporte técnico presencial e remoto",
      "Garantia de resolução rápida e eficiente de incidentes",
    ],
    techStack: ["Windows", "VPN", "AnyDesk", "VNC", "Networking"],
  },
];

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
};

const IconComponent = ({ icon }: { icon: "sword" | "shield" | "cpu" }) => {
  switch (icon) {
    case "sword":
      return <Sword className="w-5 h-5" />;
    case "shield":
      return <Shield className="w-5 h-5" />;
    case "cpu":
      return <Cpu className="w-5 h-5" />;
  }
};

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="experience" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-block border border-primary/50 px-4 py-2 mb-4">
            <span className="text-primary text-sm tracking-widest">{"// CAREER_LOG"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary animate-glow-pulse">
            {">"} Experiência Profissional
          </h2>
          <p className="text-muted-foreground mt-2">Missões completadas e em andamento</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const colors = typeColors[exp.type];
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`relative mb-12 md:mb-16 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 ${colors.border} ${colors.bg} transform -translate-x-1/2 ${colors.glow}`}
                  style={{ top: "24px" }}
                />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    isLeft ? "md:mr-[52%] md:pr-8" : "md:ml-[52%] md:pl-8"
                  }`}
                >
                  <div
                    className={`border ${colors.border} bg-card p-6 relative overflow-hidden transition-all duration-300 hover:${colors.glow}`}
                  >
                    {/* Rarity badge */}
                    <div
                      className={`absolute top-0 right-0 ${colors.bg} ${colors.text} px-3 py-1 text-xs tracking-wider border-l border-b ${colors.border}`}
                    >
                      {colors.label}
                    </div>

                    {/* Header */}
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

                    {/* Meta info */}
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

                    {/* Description */}
                    <p className="text-foreground/80 mb-4 border-l-2 border-primary/50 pl-3">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    {exp.responsibilities && (
                      <div className="mb-4">
                        <p className="text-primary text-sm mb-2">{"// OBJECTIVES"}</p>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="text-sm text-foreground/70 flex items-start gap-2"
                            >
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/20">
                        {exp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 border border-primary/50 text-primary bg-primary/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Corner decorations */}
                    <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${colors.border} opacity-50`} />
                    <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${colors.border} opacity-50`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* XP Summary */}
        <div className="mt-12 border border-primary/50 p-6 bg-card text-center">
          <p className="text-primary text-sm mb-2">{"// TOTAL_EXPERIENCE"}</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div>
              <span className="text-2xl font-bold text-[#ffd700]">1+</span>
              <p className="text-xs text-muted-foreground">Anos Dev</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#ff6b35]">4</span>
              <p className="text-xs text-muted-foreground">Missões</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#00d4ff]">19+</span>
              <p className="text-xs text-muted-foreground">Meses XP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
