
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-primary font-bold mb-3 uppercase tracking-wider">Olá, eu sou</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Félix Bastian
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Desenvolvedor Front-End
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8">
            Criando experiências digitais impactantes através de código limpo e design robusto.
            Transformando ideias em interfaces interativas de alto desempenho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group bg-zinc-800 hover:bg-zinc-700 text-white font-bold">
              Ver Projetos 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 font-bold">Entre em Contato</Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-drift">
            <div className="absolute inset-0 bg-gradient-radial from-zinc-800/30 to-transparent rounded-full blur-xl"></div>
            <img 
              src="/placeholder.svg" 
              alt="Félix Bastian" 
              className="w-full h-full object-cover rounded-full border-4 border-zinc-700"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16">
        <div className="animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
