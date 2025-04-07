
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma de e-commerce com interface intuitiva, carrinho de compras e sistema de pagamento.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      image: '/placeholder.svg',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Aplicativo de Tarefas',
      description: 'App de gerenciamento de tarefas com funcionalidades de arrastar e soltar, categorias e lembretes.',
      tech: ['TypeScript', 'React', 'Redux', 'Styled Components'],
      image: '/placeholder.svg',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Dashboard Analítico',
      description: 'Dashboard interativo com gráficos e visualizações de dados para análise de métricas de negócios.',
      tech: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
      image: '/placeholder.svg',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="bg-secondary/50 py-24">
      <div className="section">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-4">Meus Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e relevantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-background border border-secondary hover:border-primary/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 3 === 0 ? 'animate-float' : index % 3 === 1 ? 'animate-side-to-side' : 'animate-drift'
                  }`}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
