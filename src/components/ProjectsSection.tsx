
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MonitorPlay, Boxes, UserSquare, LayoutDashboard, Gavel, Wallet } from 'lucide-react';

const ProjectsSection = () => {
  // Projetos reais do portfólio
  const projects = [
    {
      title: 'Sistema de Streaming de Vídeo ao Vivo',
      description: 'Plataforma de transmissão ao vivo com chat, autenticação e painel de controle.',
      problem: 'Necessidade de streaming estável e interativo para eventos e creators.',
      solution: 'Infraestrutura escalável, interface moderna e recursos de interação em tempo real.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Socket.io', 'Node.js'],
      icon: MonitorPlay,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian',
    },
    {
      title: 'Estoque-MAX',
      description: 'Sistema de gestão de estoque com dashboard, relatórios e controle de movimentações.',
      problem: 'Dificuldade em controlar estoque e visualizar movimentações em tempo real.',
      solution: 'Dashboard intuitivo, alertas automáticos e relatórios detalhados.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Python', 'PostgreSQL'],
      icon: Boxes,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian',
    },
    {
      title: 'breezy-felix-driftfolio',
      description: 'Portfólio frontend premium com visual cyber/dark, animações e responsividade.',
      problem: 'Destacar habilidades e projetos de forma profissional e moderna.',
      solution: 'Layout premium, animações CSS, acessibilidade e foco em experiência visual.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui'],
      icon: UserSquare,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian/breezy-felix-driftfolio',
    },
    {
      title: 'globoo-digital-hub',
      description: 'Hub digital para gestão de projetos, tarefas e colaboração em equipe.',
      problem: 'Centralizar informações e facilitar a colaboração remota.',
      solution: 'Painéis customizáveis, integrações e notificações em tempo real.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'AWS'],
      icon: LayoutDashboard,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian',
    },
    {
      title: 'advogado-landing-page',
      description: 'Landing page institucional para advogados com foco em captação de clientes.',
      problem: 'Baixa conversão e presença digital pouco profissional.',
      solution: 'Design responsivo, SEO otimizado e formulários de contato eficientes.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Figma'],
      icon: Gavel,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian',
    },
    {
      title: 'Nikel-app-Dev',
      description: 'Aplicativo de controle financeiro pessoal com dashboard e relatórios.',
      problem: 'Dificuldade em acompanhar gastos e metas financeiras.',
      solution: 'Visualização clara, alertas e relatórios automáticos.',
      tech: ['React Native', 'TypeScript', 'Expo', 'PostgreSQL'],
      icon: Wallet,
      liveLink: '#',
      githubLink: 'https://github.com/FXBastian',
    },
  ];

  return (
    <section id="projects" className="bg-secondary/50 py-24 relative">
      <div className="animated-grid"></div>
      <div className="section">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-4 animate-fadeUp">Meus Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fadeUp" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            Vitrine de soluções reais em frontend, automação e cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className={`neon-card group animate-fadeUp`}
                style={{animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both'}}
                tabIndex={0}
                aria-label={`Projeto: ${project.title}`}
              >
                <div className="project-visual">
                  <div className="project-mockup relative">
                    <div className="project-mockup-bar">
                      <span className="project-mockup-dot"></span>
                      <span className="project-mockup-dot"></span>
                      <span className="project-mockup-dot"></span>
                    </div>
                    <div className="flex items-center gap-2 z-10">
                      {Icon && <Icon className="h-7 w-7 text-cyan-400 animate-iconDrift" aria-hidden="true" />}
                      <span className="project-mockup-code">{`<${project.title.replace(/ .*/, '')} />`}</span>
                    </div>
                  </div>
                  <div className="project-overlay"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-cyan-300 flex items-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-green-400 animate-glowPulse" aria-hidden="true" />}
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <div className="mb-2">
                    <span className="text-xs text-cyan-400/80 font-mono">Problema:</span>
                    <span className="ml-1 text-xs text-muted-foreground">{project.problem}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-green-400/80 font-mono">Solução:</span>
                    <span className="ml-1 text-xs text-muted-foreground">{project.solution}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge focus:outline-none"
                        tabIndex={0}
                        aria-label={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="shine-button">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label={`Ver código de ${project.title}`}>
                        <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                        Código
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild className="shine-button">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label={`Ver demo de ${project.title}`}>
                        <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                        Demo Live
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 shine-button">
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
