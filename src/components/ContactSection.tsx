
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
                <a href="mailto:fxbastian88@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  fxbastian88@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/felix-saint-9b7573287/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  /in/felix-saint-9b7573287
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 text-primary mr-4" />
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a href="https://github.com/FXBastian" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  /FXBastian
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
            <div className="flex items-center">
              <svg aria-hidden="true" className="h-5 w-5 text-green-400 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="M16 3h5v5"/><path d="M15 10l6.5-6.5"/></svg>
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <a href="https://wa.me/5567981518078" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  +55 67 98151-8078
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-medium mb-4">Me siga nas redes sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/FXBastian" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/felix-saint-9b7573287/" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="mailto:fxbastian88@gmail.com" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                target="_blank" rel="noopener noreferrer" aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://wa.me/5567981518078" 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-green-400/20 transition-colors"
                target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              >
                <svg aria-hidden="true" className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="M16 3h5v5"/><path d="M15 10l6.5-6.5"/></svg>
              </a>
            </div>
          </div>
        </Card>
        
        <div className="animate-float">
          {/* Formulário sem backend: envia via mailto */}
          <form
            action="mailto:fxbastian88@gmail.com"
            method="GET"
            className="space-y-6"
            onSubmit={e => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.querySelector('#name') as HTMLInputElement)?.value;
              const email = (form.querySelector('#email') as HTMLInputElement)?.value;
              const subject = (form.querySelector('#subject') as HTMLInputElement)?.value;
              const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value;
              const mailto = `mailto:fxbastian88@gmail.com?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`)}`;
              window.open(mailto, '_blank');
            }}
          >
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
            <Button type="submit" className="w-full shine-button">
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensagem
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">O envio é feito via e-mail direto (mailto).</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
