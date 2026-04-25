

import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, CircleCheck } from "lucide-react";

// Badges decorativos flutuantes
const badges = [
  { label: "Front-End", color: "bg-cyan-700/90", left: "-18%", top: "12%" },
  { label: "UI Design", color: "bg-pink-700/90", left: "-10%", top: "80%" },
  { label: "React", color: "bg-cyan-900/90", left: "90%", top: "20%" },
  { label: "Clean Code", color: "bg-green-700/90", left: "80%", top: "70%" },
];

const cardData = [
  {
    title: "Educação",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400 mr-2" />,
    text: "Análise e Desenvolvimento de Sistemas",
  },
  {
    title: "Experiência",
    icon: <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />,
    text: "+3 anos de desenvolvimento front-end",
  },
  {
    title: "Localização",
    icon: <MapPin className="w-5 h-5 text-cyan-400 mr-2" />,
    text: "Brasil",
  },
  {
    title: "Disponibilidade",
    icon: <CircleCheck className="w-5 h-5 text-cyan-400 mr-2" />,
    text: "Disponível para projetos",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-secondary/50 py-24 overflow-hidden w-full max-w-full">
      {/* Background decorativo: glow, linhas, grid e pontos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Glow radial */}
        <div className="absolute left-0 top-1/3 w-1/2 h-1/3 blur-3xl opacity-40" style={{background: "radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 70%)"}} />
        {/* Grid tecnológico sutil */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "repeating-linear-gradient(0deg,rgba(36,42,54,0.18) 0px,rgba(36,42,54,0.18) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,rgba(36,42,54,0.18) 0px,rgba(36,42,54,0.18) 1px,transparent 1px,transparent 32px)"}} />
        {/* Pontos decorativos */}
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-cyan-400/10 animate-particle${(i % 4) + 1}`}
            style={{
              width: `${6 + (i % 3) * 2}px`,
              height: `${6 + (i % 3) * 2}px`,
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              opacity: 0.14 + (i % 3) * 0.07,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-full px-2 sm:px-4">
        {/* Título e subtítulo com animação de entrada */}
        <div className="mb-12 text-center animate-fade-in-up [animation-delay:0.1s]">
          <h2 className="text-3xl font-bold text-gradient mb-4">Sobre Mim</h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400/80 to-cyan-700/60" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça um pouco mais sobre minha trajetória e paixão pelo desenvolvimento front-end.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-full">
          {/* Bloco da imagem com moldura, glow, badges e animação */}
          <div className="flex justify-center animate-fade-in-up [animation-delay:0.2s] relative w-full max-w-full">
            <div className="flex items-center justify-center w-full max-w-full">
              {/* Wrapper fixo para moldura giratória */}
              <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" style={{ width: '100%', maxWidth: 352, height: 432 }}>
                {/* Moldura giratória estável */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-cyan-700/40 animate-spin-slow"
                  style={{
                    boxShadow: '0 0 32px 8px #0ea5e9, 0 0 0 8px #0ea5e91a',
                    willChange: 'transform',
                  }}
                />
                {/* Glow atrás da imagem */}
                <div className="absolute left-4 top-4 right-4 bottom-4 bg-gradient-radial from-cyan-700/40 to-transparent rounded-2xl blur-2xl z-0" />
                {/* Imagem principal */}
                <img
                  src="/profile-about.jpg"
                  alt="Félix trabalhando"
                  className="relative w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl border-4 border-zinc-700 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/30 z-10"
                  style={{ willChange: 'transform' }}
                />
                {/* Badges flutuantes decorativos */}
                {badges.map((badge, i) => (
                  <span
                    key={badge.label}
                    className={`absolute flex items-center px-2 py-1 rounded-full text-xs font-semibold shadow-md ${badge.color} text-white/90 animate-badge-float${i+1}`}
                    style={{
                      top: badge.top,
                      left: badge.left,
                      zIndex: 30,
                      filter: 'drop-shadow(0 2px 8px #0008)',
                      opacity: 0.92,
                      pointerEvents: 'none',
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo textual com destaque e animação */}
          <div className="animate-fade-in-up [animation-delay:0.3s] pr-2 md:pr-8 lg:pr-16 xl:pr-24 w-full max-w-full">
            <div className="mb-6">
              <p className="text-lg font-semibold text-cyan-200 mb-3 leading-relaxed">
                Olá! Sou <span className="text-primary font-bold">Félix Bastian</span>, desenvolvedor front-end apaixonado por criar interfaces que combinam estética e funcionalidade.
              </p>
              <span className="block w-10 h-1 rounded-full bg-cyan-700/60 mb-6" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Minha jornada na programação começou quando descobri o poder de transformar linhas de código em experiências visuais interativas. Desde então, tenho me dedicado a aperfeiçoar minhas habilidades e acompanhar as tendências e melhores práticas do desenvolvimento web.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Acredito que o bom design deve ser acessível, responsivo e centrado no usuário. Trabalho com foco em criar soluções que não apenas pareçam boas, mas que também entreguem uma experiência excepcional.
            </p>

            {/* Cards com glassmorphism, ícones e animação escalonada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cardData.map((card, i) => (
                <Card
                  key={card.title}
                  className="p-4 bg-secondary/60 border-secondary/60 glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-400/20 shadow-md flex items-start gap-2 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                >
                  {card.icon}
                  <div>
                    <h3 className="font-semibold mb-1 text-cyan-100">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
        Melhorias visuais:
        - Background: glow, grid, pontos decorativos
        - Imagem: moldura, glow, badges flutuantes, hover
        - Cards: glassmorphism, ícones, hover, animação escalonada
        - Textos: destaque, espaçamento, linhas decorativas
        - Animações: fade-in-up, delays
        - Responsividade: grid, badges, cards
      */}
    </section>
  );
};

export default AboutSection;
