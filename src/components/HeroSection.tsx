
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Badges de tecnologia para flutuar ao redor do avatar
const techBadges = [
  { name: "React", color: "bg-cyan-700/90", icon: (
    <svg className="w-4 h-4 mr-1 text-cyan-300" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2"/><ellipse cx="12" cy="12" rx="7" ry="3" stroke="#06b6d4" strokeWidth="2"/><ellipse cx="12" cy="12" rx="3" ry="7" stroke="#06b6d4" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#06b6d4"/></svg>
  ) },
  { name: "Next.js", color: "bg-zinc-900/90", icon: (
    <svg className="w-4 h-4 mr-1 text-white" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#000"/><path d="M7 7h2v10H7V7zm4.5 0h2v10h-2V7zm4.5 0h2v10h-2V7z" fill="#fff"/></svg>
  ) },
  { name: "JavaScript", color: "bg-yellow-500/90", icon: (
    <svg className="w-4 h-4 mr-1 text-yellow-300" viewBox="0 0 24 24" fill="none"><path d="M2 2h20v20H2V2z" fill="#F7DF1E"/><path d="M17.1 17.7c-.3.6-.7 1.1-1.5 1.1-.8 0-1.3-.4-1.3-1.1 0-.7.4-1 1.4-1.4l.5-.2c1.5-.6 2.2-1.3 2.2-2.7 0-1.4-1.1-2.3-2.8-2.3-1.2 0-2.1.4-2.7 1.5l1.5.9c.3-.6.6-.8 1.2-.8.6 0 1 .3 1 .8 0 .6-.3.8-1.2 1.2l-.5.2c-1.7.7-2.4 1.4-2.4 2.8 0 1.6 1.2 2.5 2.9 2.5 1.7 0 2.6-.8 3.1-1.8l-1.5-.9zm-7.2.2c-.3.6-.6 1.1-1.4 1.1-.8 0-1.3-.4-1.3-1.1 0-.7.4-1 1.4-1.4l.5-.2c1.5-.6 2.2-1.3 2.2-2.7 0-1.4-1.1-2.3-2.8-2.3-1.2 0-2.1.4-2.7 1.5l1.5.9c.3-.6.6-.8 1.2-.8.6 0 1 .3 1 .8 0 .6-.3.8-1.2 1.2l-.5.2c-1.7.7-2.4 1.4-2.4 2.8 0 1.6 1.2 2.5 2.9 2.5 1.7 0 2.6-.8 3.1-1.8l-1.5-.9z" fill="#222"/></svg>
  ) },
  { name: "UI Design", color: "bg-pink-700/90", icon: (
    <svg className="w-4 h-4 mr-1 text-pink-300" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ec4899" strokeWidth="2"/><path d="M8 15c1.5-2 6.5-2 8 0" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#ec4899"/><circle cx="15" cy="10" r="1" fill="#ec4899"/></svg>
  ) },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 lg:pt-40 pb-8 section overflow-hidden"
    >
      {/* Grid tecnológico de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(36,42,54,0.18) 0px,rgba(36,42,54,0.18) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,rgba(36,42,54,0.18) 0px,rgba(36,42,54,0.18) 1px,transparent 1px,transparent 32px)",
        }}
      />

      {/* Glow radial atrás do texto */}
      <div className="pointer-events-none absolute left-0 top-1/4 w-1/2 h-1/3 z-0 blur-3xl opacity-60" style={{background: "radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 70%)"}} />
      {/* Glow radial atrás do avatar */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-1/2 h-1/2 z-0 blur-3xl opacity-50" style={{background: "radial-gradient(circle at 70% 70%, #0ea5e9 0%, transparent 70%)"}} />

      {/* Partículas decorativas flutuantes */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-cyan-400/10 animate-particle${i % 4 + 1}`}
            style={{
              width: `${6 + (i % 3) * 2}px`,
              height: `${6 + (i % 3) * 2}px`,
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              opacity: 0.18 + (i % 3) * 0.07,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Texto principal com animações de entrada */}
        <div className="order-2 lg:order-1">
          <p className="text-primary font-bold mb-3 uppercase tracking-wider animate-fade-in-up [animation-delay:0.1s]">Olá, eu sou</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground animate-fade-in-up [animation-delay:0.2s]">
            Félix Bastian
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground animate-fade-in-up [animation-delay:0.3s]">
            Desenvolvedor Front-End
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8 animate-fade-in-up [animation-delay:0.4s]">
            Criando experiências digitais impactantes através de código limpo e design robusto.
            Transformando ideias em interfaces interativas de alto desempenho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.5s]">
            <Button className="group bg-zinc-800 hover:bg-zinc-700 text-white font-bold shadow-lg hover:scale-[1.03] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 relative overflow-hidden">
              {/* Glow sutil no hover */}
              <span className="absolute inset-0 pointer-events-none rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{boxShadow: '0 0 32px 8px #06b6d4'}} />
              <span className="relative flex items-center">
                Ver Projetos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 font-bold shadow-md hover:scale-[1.02] transition-all duration-300">
              Entre em Contato
            </Button>
          </div>
        </div>

        {/* Avatar com ring animado, glow e badges flutuantes */}
        <div className="order-1 lg:order-2 flex justify-center mt-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in-up [animation-delay:0.6s]">
            {/* Ring animado externo */}
            <div className="absolute -inset-4 md:-inset-6 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-full h-full rounded-full border-2 border-cyan-700/40 animate-spin-slow" style={{boxShadow: '0 0 32px 8px #0ea5e9, 0 0 0 8px #0ea5e91a'}} />
            </div>
            {/* Glow atrás da imagem */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-700/40 to-transparent rounded-full blur-2xl z-0" />
            {/* Avatar */}
            <img
              src="/Desenvolvedor-Front-END.png"
              alt="Félix Bastian"
              className="w-full h-full object-cover rounded-full border-4 border-zinc-700 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/30"
              style={{willChange: 'transform'}}
            />
            {/* Badges flutuantes */}
            {techBadges.map((badge, i) => (
              <span
                key={badge.name}
                className={`absolute flex items-center px-2 py-1 rounded-full text-xs font-semibold shadow-md ${badge.color} text-white/90 animate-badge-float${i+1}`}
                style={{
                  top: ["10%","80%","20%","70%"][i],
                  left: ["-18%","-10%","90%","80%"][i],
                  zIndex: 30,
                  filter: 'drop-shadow(0 2px 8px #0008)',
                  opacity: 0.92,
                  pointerEvents: 'none',
                }}
              >
                {badge.icon}
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll moderno com linha animada e seta */}
      <div className="flex flex-col items-center justify-center mt-16 z-30 animate-fade-in-up [animation-delay:0.8s]">
        <div className="relative flex flex-col items-center">
          {/* Linha animada */}
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full animate-scroll-line mb-1" />
          {/* Seta bounce */}
          <svg className="w-7 h-7 text-cyan-400 animate-bounce-slow" fill="none" viewBox="0 0 24 24">
            <path d="M12 5v14M12 19l7-7M12 19l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Comentários explicativos das melhorias visuais:
        - Grid tecnológico: div absoluta com background-image linear-gradient.
        - Glows: divs absolutas com radial-gradient e blur.
        - Partículas: spans absolutos animados com opacidade baixa.
        - Badges: spans absolutos animados próximos ao avatar.
        - Avatar: ring animado, glow e microinteração hover.
        - Texto: animações de entrada com delays.
        - Botões: shadow, hover:scale, glow premium no principal.
        - Indicador de scroll: linha animada + seta bounce.
      */}
    </section>
  );
};

export default HeroSection;
