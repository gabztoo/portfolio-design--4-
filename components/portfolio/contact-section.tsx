"use client"

import React, { useMemo, useState } from "react"
import Script from "next/script"
import { Mail, Linkedin, Github, MessageSquare, Gamepad2, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/portfolio/language-context"

export function ContactSection() {
  const { language } = useLanguage()
  const [showEasterEggs, setShowEasterEggs] = useState(false)

  const content = {
    pt: {
      title: "PARTY UP",
      intro: "Procurando um desenvolvedor para sua próxima quest? Vamos conversar e criar algo incrível juntos!",
      cta: "VAMOS CONVERSAR",
      whatsappText: "Olá Gabriel! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
      secrets: "SECRETS",
      eggsTitle: "EASTER EGGS DISPONÍVEIS",
      easter: [
        ["Konami Code", "↑ ↑ ↓ ↓ ← → ← → B A"],
        ["Sudo Hire Me", "Digite \"sudo hire me\" em qualquer lugar"],
        ["Matrix Rain", "Clique 3x no nome \"Gabriel Gadelha\" no topo"],
        ["Retro Terminal", "Clique 10x em \"Full-stack Developer\" no topo"],
        ["Skill Curiosity", "Fique 5s com o mouse sobre uma skill"],
        ["Contrate-me!", "Selecione o texto \"contrate-me\" em qualquer lugar"],
        ["XP Boost", "Fique com o mouse sobre um projeto por 2 segundos"],
        ["Modo Formiga", "Redimensione a janela para muito pequeno"],
      ],
      built: "Desenvolvido com",
      rights: "Todos os direitos reservados.",
      linkedinLocale: "pt_BR",
    },
    en: {
      title: "PARTY UP",
      intro: "Looking for a developer for your next quest? Let's talk and build something great together.",
      cta: "LET'S TALK",
      whatsappText: "Hi Gabriel! I saw your portfolio and would like to discuss an opportunity.",
      secrets: "SECRETS",
      eggsTitle: "AVAILABLE EASTER EGGS",
      easter: [
        ["Konami Code", "↑ ↑ ↓ ↓ ← → ← → B A"],
        ["Sudo Hire Me", "Type \"sudo hire me\" anywhere"],
        ["Matrix Rain", "Click the name \"Gabriel Gadelha\" 3x at the top"],
        ["Retro Terminal", "Click \"Full-stack Developer\" 10x at the top"],
        ["Skill Curiosity", "Hover a skill for 5 seconds"],
        ["Hire-me!", "Select the text \"contrate-me\" anywhere"],
        ["XP Boost", "Hover over a project for 2 seconds"],
        ["Ant Mode", "Resize the window to very small"],
      ],
      built: "Built with",
      rights: "All rights reserved.",
      linkedinLocale: "en_US",
    },
    es: {
      title: "PARTY UP",
      intro: "¿Buscas un desarrollador para tu próxima quest? Hablemos y creemos algo increíble juntos.",
      cta: "HABLEMOS",
      whatsappText: "¡Hola Gabriel! Vi tu portafolio y me gustaría conversar sobre una oportunidad.",
      secrets: "SECRETS",
      eggsTitle: "EASTER EGGS DISPONIBLES",
      easter: [
        ["Konami Code", "↑ ↑ ↓ ↓ ← → ← → B A"],
        ["Sudo Hire Me", "Escribe \"sudo hire me\" en cualquier lugar"],
        ["Matrix Rain", "Haz clic 3x en el nombre \"Gabriel Gadelha\" arriba"],
        ["Retro Terminal", "Haz clic 10x en \"Full-stack Developer\" arriba"],
        ["Skill Curiosity", "Mantente 5s sobre una skill"],
        ["Contrátame!", "Selecciona el texto \"contrate-me\" en cualquier lugar"],
        ["XP Boost", "Pasa el mouse sobre un proyecto por 2 segundos"],
        ["Modo Hormiga", "Reduce la ventana a tamaño muy pequeño"],
      ],
      built: "Desarrollado con",
      rights: "Todos los derechos reservados.",
      linkedinLocale: "es_ES",
    },
  }[language]

  const whatsappLink = useMemo(() => {
    return `https://wa.me/5592984182265?text=${encodeURIComponent(content.whatsappText)}`
  }, [content.whatsappText])

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <span className="flex-1 border-t border-primary/30 max-w-[100px]" />
          <h2 className="text-3xl font-bold text-primary">{content.title}</h2>
          <span className="flex-1 border-t border-primary/30 max-w-[100px]" />
        </div>

        <p className="text-muted-foreground mb-8">{content.intro}</p>

        <div className="flex flex-col gap-2 justify-center items-center mb-8">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg py-6 px-8" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5" />
              {content.cta}
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-2">
            WhatsApp: <span className="text-primary">(92) 98418-2265</span>
          </p>
          <p className="text-muted-foreground text-xs">
            Email: <span className="text-primary">anam7615@gmail.com</span>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <SocialLink href="mailto:anam7615@gmail.com" icon={Mail} label="Email" />
          <SocialLink href="https://wa.me/5592984182265" icon={MessageSquare} label="WhatsApp" />
          <SocialLink href="https://linkedin.com/in/gabrielgadelha-ti" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="https://github.com/gabztoo" icon={Github} label="GitHub" />
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <button onClick={() => setShowEasterEggs(!showEasterEggs)} className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-primary transition-colors text-sm group">
            <Gamepad2 className="w-4 h-4" />
            <span>{content.secrets}</span>
            {showEasterEggs ? <EyeOff className="w-4 h-4 group-hover:scale-110 transition-transform" /> : <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />}
          </button>

          {showEasterEggs && (
            <div className="mt-6 p-6 border border-primary/30 bg-primary/5 text-left animate-fade-in">
              <h4 className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
                <span>🎮</span> {content.eggsTitle}
              </h4>
              <ul className="space-y-3 text-sm">
                {content.easter.map(([title, hint], index) => (
                  <li key={`${title}-${index}`} className="flex items-start gap-3">
                    <span className="text-legendary shrink-0">★</span>
                    <div>
                      <span className="text-primary font-medium">{title}</span>
                      <p className="text-muted-foreground text-xs mt-1">{hint}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer strategy="lazyOnload" />
          <div className="badge-base LI-profile-badge" data-locale={content.linkedinLocale} data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="gabrielgadelha-ti" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/gabrielgadelha-ti?trk=profile-badge" target="_blank" rel="noopener noreferrer">
              Gabriel Gadelha
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary">{">"}</span> {content.built}{" "}
            <span className="text-primary">Next.js</span> + <span className="text-primary">TypeScript</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} Gabriel Gadelha. {content.rights}
          </p>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary hover:glow-green transition-all" aria-label={label}>
      <Icon className="w-5 h-5" />
    </a>
  )
}
