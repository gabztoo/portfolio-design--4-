"use client"

import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/components/portfolio/language-context"

export function AboutSection() {
  const { language } = useLanguage()

  const texts = {
    pt: {
      title: "CHARACTER BIO",
      side: "SOBRE",
      role: "Desenvolvedor Full-stack",
      experience: "2+ anos de experiência",
      bio1:
        "Desenvolvedor Full-stack apaixonado por criar soluções tecnológicas que fazem a diferença. Especializado em Python e ecossistema JavaScript, com foco em aplicações web modernas e integração de inteligência artificial.",
      bio2:
        "Sempre em busca de novos desafios e oportunidades para aprender. Acredito que código limpo e bem documentado é a base de qualquer projeto de sucesso. Quando não estou codando, provavelmente estou explorando novas tecnologias ou jogando algum RPG.",
      stamina: "CAFEINADO",
    },
    en: {
      title: "CHARACTER BIO",
      side: "ABOUT",
      role: "Full-stack Developer",
      experience: "2+ years of experience",
      bio1:
        "Full-stack developer passionate about building tech solutions that make a real impact. Specialized in Python and the JavaScript ecosystem, focused on modern web apps and AI integration.",
      bio2:
        "Always looking for new challenges and ways to learn. I believe clean, well-documented code is the foundation of successful projects. When I am not coding, I am probably exploring new tech or playing RPG games.",
      stamina: "CAFFEINATED",
    },
    es: {
      title: "BIO DEL PERSONAJE",
      side: "SOBRE MÍ",
      role: "Desarrollador Full-stack",
      experience: "2+ años de experiencia",
      bio1:
        "Desarrollador Full-stack apasionado por crear soluciones tecnológicas que marcan la diferencia. Especializado en Python y el ecosistema JavaScript, con enfoque en aplicaciones web modernas e integración de inteligencia artificial.",
      bio2:
        "Siempre buscando nuevos desafíos y oportunidades para aprender. Creo que el código limpio y bien documentado es la base de cualquier proyecto exitoso. Cuando no estoy programando, seguramente estoy explorando nuevas tecnologías o jugando RPG.",
      stamina: "CON CAFEÍNA",
    },
  }[language]

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-2xl">{">"}</span>
          <h2 className="text-3xl font-bold text-primary">{texts.title}</h2>
          <span className="flex-1 border-t border-primary/30" />
          <span className="text-muted-foreground text-sm">{texts.side}</span>
        </div>

        <div className="border border-primary/50 bg-card relative">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

          <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center overflow-hidden">
                <Image src="/profile.jpg" alt="Gabriel Gadelha" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-primary border-2 border-background animate-pulse" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Gabriel Gadelha</h3>
              <p className="text-primary mb-4">{texts.role}</p>

              <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Manaus, AM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{texts.experience}</span>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>{texts.bio1}</p>
                <p>{texts.bio2}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/30 px-8 py-4 flex flex-wrap gap-6 justify-center md:justify-start">
            <StatusItem label="HP" value="100/100" color="text-primary" />
            <StatusItem label="MP" value="∞" color="text-rare" />
            <StatusItem label="STAMINA" value={texts.stamina} color="text-epic" />
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
