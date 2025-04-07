
import React from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3/SCSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
  ];

  const otherSkills = [
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Styled Components', level: 85 },
    { name: 'Figma', level: 70 },
    { name: 'Git/GitHub', level: 80 },
    { name: 'Responsive Design', level: 95 },
    { name: 'UI/UX Principles', level: 75 },
  ];

  return (
    <section id="skills" className="section">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">Minhas Habilidades</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar experiências web excepcionais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 animate-drift">
          <h3 className="text-xl font-semibold mb-6">Desenvolvimento Front-end</h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 animate-float">
          <h3 className="text-xl font-semibold mb-6">Outras Habilidades</h3>
          <div className="space-y-6">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'].map((tech) => (
          <div 
            key={tech}
            className="flex items-center justify-center p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-primary/50 transition-colors animate-side-to-side"
          >
            <span className="font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
