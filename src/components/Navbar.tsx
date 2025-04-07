
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary">
      <div className="container-fluid h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-gradient">
            FB
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Habilidades
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projetos
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </div>

        <div className="hidden md:block">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Currículo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-secondary">
          <div className="flex flex-col space-y-4 p-4">
            <a 
              href="#home" 
              className="py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#skills" 
              className="py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </a>
            <a 
              href="#projects" 
              className="py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#contact" 
              className="py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Currículo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
