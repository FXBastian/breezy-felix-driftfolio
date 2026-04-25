
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container-fluid w-full max-w-full px-2 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-gradient">
              FB
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desenvolvedor Front-End especializado em criar interfaces modernas e intuitivas.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Félix Bastian. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
