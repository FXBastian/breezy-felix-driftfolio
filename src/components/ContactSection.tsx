
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">Entre em Contato</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tem um projeto em mente ou quer conversar? Estou disponível para novas oportunidades!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="p-6 bg-secondary/30 animate-drift">
          <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:felix@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  felix@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  /in/felixbastian
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Github className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  /felixbastian
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">Localização</h4>
                <p className="text-muted-foreground">Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium mb-4">Me siga nas redes sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Card>
        
        <div className="animate-float">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  required 
                  className="bg-secondary/30"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="bg-secondary/30"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Assunto
              </label>
              <Input 
                id="subject" 
                placeholder="Como posso ajudar?" 
                required 
                className="bg-secondary/30"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <Textarea 
                id="message" 
                placeholder="Sua mensagem aqui..." 
                rows={5} 
                required 
                className="bg-secondary/30"
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
