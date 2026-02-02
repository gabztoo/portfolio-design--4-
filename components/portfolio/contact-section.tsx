"use client"

import React, { useState } from "react"
import Script from "next/script"
import { Mail, Linkedin, Github, MessageSquare, Gamepad2, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [showEasterEggs, setShowEasterEggs] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <span className="flex-1 border-t border-primary/30 max-w-[100px]" />
          <h2 className="text-3xl font-bold text-primary">PARTY UP</h2>
          <span className="flex-1 border-t border-primary/30 max-w-[100px]" />
        </div>

        <p className="text-muted-foreground mb-8">
          Procurando um desenvolvedor para sua próxima quest? 
          Vamos conversar e criar algo incrível juntos!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col gap-2 justify-center items-center mb-8">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg py-6 px-8"
            asChild
          >
            <a 
              href="https://wa.me/5592984182265?text=Ol%C3%A1%20Gabriel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
              VAMOS CONVERSAR
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-2">
            WhatsApp: <span className="text-primary">(92) 98418-2265</span>
          </p>
          <p className="text-muted-foreground text-xs">
            Email: <span className="text-primary">anam7615@gmail.com</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <SocialLink 
            href="mailto:anam7615@gmail.com" 
            icon={Mail} 
            label="Email" 
          />
          <SocialLink 
            href="https://wa.me/5592984182265" 
            icon={MessageSquare} 
            label="WhatsApp" 
          />
          <SocialLink 
            href="https://linkedin.com/in/gabrielgadelha-ti" 
            icon={Linkedin} 
            label="LinkedIn" 
          />
          <SocialLink 
            href="https://github.com/gabztoo" 
            icon={Github} 
            label="GitHub" 
          />
        </div>

        {/* Easter Eggs Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <button
            onClick={() => setShowEasterEggs(!showEasterEggs)}
            className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-primary transition-colors text-sm group"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>SECRETS</span>
            {showEasterEggs ? (
              <EyeOff className="w-4 h-4 group-hover:scale-110 transition-transform" />
            ) : (
              <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            )}
          </button>

          {showEasterEggs && (
            <div className="mt-6 p-6 border border-primary/30 bg-primary/5 text-left animate-fade-in">
              <h4 className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
                <span>🎮</span> EASTER EGGS DISPONÍVEIS
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-legendary shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Konami Code</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      ↑ ↑ ↓ ↓ ← → ← → B A
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-legendary shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Sudo Hire Me</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Digite "sudo hire me" em qualquer lugar
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-epic shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Matrix Rain</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Clique 3x no nome "Gabriel Gadelha" no topo
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-epic shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Retro Terminal</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Clique 10x em "Full-stack Developer" no topo
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rare shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Skill Curiosity</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Fique 5s com o mouse sobre uma skill
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rare shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Contrate-me!</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Selecione o texto "contrate-me" em qualquer lugar
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rare shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">XP Boost</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Fique com o mouse sobre um projeto por 2 segundos
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-common shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Modo Formiga</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Redimensione a janela para muito pequeno
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-common shrink-0">★</span>
                  <div>
                    <span className="text-primary font-medium">Quest Details</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Clique nos cards de projeto para expandir detalhes
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* LinkedIn Badge */}
        <div className="mt-8 flex justify-center">
          <Script 
            src="https://platform.linkedin.com/badges/js/profile.js" 
            async 
            defer 
            strategy="lazyOnload"
          />
          <div 
            className="badge-base LI-profile-badge" 
            data-locale="pt_BR" 
            data-size="medium" 
            data-theme="dark" 
            data-type="VERTICAL" 
            data-vanity="gabrielgadelha-ti" 
            data-version="v1"
          >
            <a 
              className="badge-base__link LI-simple-link" 
              href="https://br.linkedin.com/in/gabrielgadelha-ti?trk=profile-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gabriel Gadelha
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary">{">"}</span> Desenvolvido com{" "}
            <span className="text-primary">Next.js</span> +{" "}
            <span className="text-primary">TypeScript</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} Gabriel Gadelha. Todos os direitos reservados.
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary hover:glow-green transition-all"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}
