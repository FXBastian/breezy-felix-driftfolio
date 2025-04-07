
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50 py-24">
      <div className="section">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão pelo desenvolvimento front-end.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-side-to-side">
            <img 
              src="/placeholder.svg" 
              alt="Félix trabalhando" 
              className="rounded-lg shadow-xl max-w-sm w-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg mb-6">
              Olá! Sou <span className="text-primary font-semibold">Félix Bastian</span>, 
              desenvolvedor front-end apaixonado por criar interfaces que combinam estética e funcionalidade.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Minha jornada na programação começou quando descobri o poder de transformar linhas de código em 
              experiências visuais interativas. Desde então, tenho me dedicado a aperfeiçoar minhas habilidades
              e acompanhar as tendências e melhores práticas do desenvolvimento web.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Acredito que o bom design deve ser acessível, responsivo e centrado no usuário. Trabalho com foco
              em criar soluções que não apenas pareçam boas, mas que também entreguem uma experiência excepcional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-secondary/50 border-secondary hover:border-primary/50 transition-colors">
                <h3 className="font-semibold mb-1">Educação</h3>
                <p className="text-sm text-muted-foreground">Bacharelado em Ciência da Computação</p>
              </Card>
              
              <Card className="p-4 bg-secondary/50 border-secondary hover:border-primary/50 transition-colors">
                <h3 className="font-semibold mb-1">Experiência</h3>
                <p className="text-sm text-muted-foreground">+3 anos de desenvolvimento front-end</p>
              </Card>
              
              <Card className="p-4 bg-secondary/50 border-secondary hover:border-primary/50 transition-colors">
                <h3 className="font-semibold mb-1">Localização</h3>
                <p className="text-sm text-muted-foreground">Brasil</p>
              </Card>
              
              <Card className="p-4 bg-secondary/50 border-secondary hover:border-primary/50 transition-colors">
                <h3 className="font-semibold mb-1">Disponibilidade</h3>
                <p className="text-sm text-muted-foreground">Disponível para projetos</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
