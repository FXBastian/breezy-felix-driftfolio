

import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Navbar com glassmorphism, scroll state, logo premium, underline animado, menu mobile animado
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Detecta scroll para aplicar glassmorphism mais sólido
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu mobile ao navegar
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-navbar transition-all duration-300${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container-fluid h-16 flex items-center justify-between">
        {/* Logo premium com gradiente, glow e hover */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-xl font-bold logo-gradient logo-glow px-3 py-1 rounded-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            tabIndex={0}
            aria-label="Félix Bastian - Início"
          >
            FB
          </a>
        </div>

        {/* Desktop Menu com underline animado e efeito premium */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="menu-link px-1 py-0.5 transition-all duration-200"
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Ícone premium centralizado e harmônico na Navbar */}
        <div className="hidden md:flex items-center ml-6">
          <span
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-900/80 border border-cyan-700/40 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            style={{ boxShadow: '0 0 16px #06b6d4aa' }}
            tabIndex={0}
            aria-label="Currículo"
          >
            <img
              src="/favicon.ico.png"
              alt="Currículo"
              className="w-10 h-10 object-contain"
              draggable={false}
              style={{ filter: 'drop-shadow(0 0 6px #06b6d4cc)' }}
            />
          </span>
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden text-foreground p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu animado, glass, backdrop, links verticais, botão currículo */}
      {isMenuOpen && (
        <div className="mobile-menu-panel">
          <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-20">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="menu-link text-lg py-2 px-4 w-full text-center rounded-md transition-all duration-200"
                onClick={handleNavClick}
                tabIndex={0}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" className="resume-btn w-full max-w-xs mx-auto" onClick={handleNavClick}>
              Currículo
            </Button>
          </div>
        </div>
      )}
      {/*
        Melhorias visuais:
        - Glassmorphism: .glass-navbar, .scrolled
        - Logo: .logo-gradient, .logo-glow, hover:scale
        - Links: .menu-link, underline animado, translate-y
        - Botão Currículo: .resume-btn, glow, scale
        - Menu mobile: .mobile-menu-panel, animação entrada
        - Sombra premium, borda inferior sutil
        - Acessibilidade: aria-label, aria-expanded, focus-visible
      */}
    </nav>
  );
};

export default Navbar;
