import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import SocialIcons from '@/components/SocialIcons';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Image, LayoutDashboard, WhatsApp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "John Wesley - Desenvolvedor Front-End";
  }, []);

  const services = [
    {
      icon: Code,
      title: "Criação de sites responsivos",
      description: "Sites modernos e otimizados que funcionam perfeitamente em qualquer dispositivo, desde celulares até desktops."
    },
    {
      icon: Image,
      title: "Artes para redes sociais",
      description: "Designs atrativos para Instagram, Facebook e outras plataformas que fortalecem sua presença digital."
    },
    {
      icon: LayoutDashboard,
      title: "Identidade visual e branding",
      description: "Desenvolvimento de logotipos, paletas de cores e materiais visuais que refletem a essência da sua marca."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <Section id="home" fullHeight className="relative pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="w-20 h-1 bg-primary mx-auto md:mx-0"></div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading">
              Olá, eu sou <span className="text-gradient">John Wesley</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Crio sites e experiências visuais para microempreendedores e pequenos negócios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 group"
                asChild
              >
                <a href="#projetos">
                  Ver Portfólio
                  <ArrowDown className="ml-2 transition-transform group-hover:translate-y-1" size={18} />
                </a>
              </Button>
              <SocialIcons className="justify-center md:justify-start" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-primary/20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="John Wesley"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* About Section */}
      <Section id="sobre">
        <SectionTitle 
          title="Sobre Mim" 
          subtitle="Conheça um pouco mais sobre minha trajetória e habilidades"
        />
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-lg text-center">
            Com mais de 5 anos de experiência em desenvolvimento front-end e design digital, 
            me dedico a criar soluções visuais que combinam estética e funcionalidade.
          </p>
          <p className="mb-4 text-lg text-center">
            Meu foco é ajudar pequenos negócios e microempreendedores a terem presença digital 
            profissional e acessível, traduzindo suas necessidades em experiências digitais impactantes.
          </p>
          <p className="text-lg text-center">
            Sou especializado em desenvolvimento web front-end, criação de interfaces, 
            identidade visual e produção de conteúdo para redes sociais.
          </p>
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section id="projetos" className="bg-secondary/30">
        <SectionTitle 
          title="Projetos Recentes" 
          subtitle="Conheça alguns dos trabalhos que desenvolvi"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <ProjectCard
            image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            title="Barbearia do Zé"
            description="Site one-page para barbearia tradicional, com agendamento online e galeria de fotos."
            link="#"
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            title="Delícias da Lu"
            description="Site responsivo para confeitaria artesanal com catálogo de produtos e sistema de pedidos."
            link="#"
          />
        </div>
      </Section>
      
      {/* Services Section */}
      <Section id="serviços">
        <SectionTitle 
          title="Meus Serviços" 
          subtitle="Soluções digitais para impulsionar seu negócio"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 gap-2"
            asChild
          >
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={20} />
              Fale comigo no WhatsApp
            </a>
          </Button>
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section id="contato" className="bg-secondary/30">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Vamos conversar sobre o seu projeto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
            <div className="space-y-4 mb-6">
              <p>
                <span className="text-muted-foreground">Email:</span>{" "}
                <a href="mailto:contato@johnwesley.com" className="hover:text-primary transition-colors">
                  contato@johnwesley.com
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Localização:</span>{" "}
                São Paulo, SP - Brasil
              </p>
            </div>
            <h3 className="text-xl font-bold mb-4">Me siga nas redes</h3>
            <SocialIcons iconSize={24} />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-secondary">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} John Wesley. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
