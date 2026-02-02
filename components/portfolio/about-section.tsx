"use client"

import { MapPin, Calendar, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">CHARACTER BIO</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">SOBRE</span>
        </div>

        {/* Character Card */}
        <div className="border border-primary/50 bg-card relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

          <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar Placeholder */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center overflow-hidden">
                <Code2 className="w-16 h-16 text-primary/50" />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-primary border-2 border-background animate-pulse" />
            </div>

            {/* Bio Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Gabriel Gadelha</h3>
              <p className="text-primary mb-4">Full-stack Developer</p>

              {/* Info Tags */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Manaus, AM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>2+ anos de experiência</span>
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Desenvolvedor Full-stack apaixonado por criar soluções tecnológicas que fazem a diferença. 
                  Especializado em Python e ecossistema JavaScript, com foco em aplicações web modernas 
                  e integração de inteligência artificial.
                </p>
                <p>
                  Sempre em busca de novos desafios e oportunidades para aprender. 
                  Acredito que código limpo e bem documentado é a base de qualquer projeto de sucesso.
                  Quando não estou codando, provavelmente estou explorando novas tecnologias ou jogando algum RPG.
                </p>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="border-t border-primary/30 px-8 py-4 flex flex-wrap gap-6 justify-center md:justify-start">
            <StatusItem label="HP" value="100/100" color="text-primary" />
            <StatusItem label="MP" value="∞" color="text-rare" />
            <StatusItem label="STAMINA" value="CAFEINADO" color="text-epic" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatusItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-sm">{label}:</span>
      <span className={`font-bold ${color}`}>{value}</span>
    </div>
  )
}
