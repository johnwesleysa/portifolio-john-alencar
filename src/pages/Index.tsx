
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import SocialIcons from '@/components/SocialIcons';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Image, LayoutDashboard } from 'lucide-react';
import SkillBar from '@/components/SkillBar';
import AboutSection from '@/components/AboutSection';
import ContactCards from '@/components/ContactCards';

const skills = [
  { skill: "Python", level: 80 },
  { skill: "HTML", level: 80 },
  { skill: "CSS", level: 80 },
  { skill: "Django", level: 75 },
  { skill: "React", level: 70 },
  { skill: "JavaScript", level: 70 },
  { skill: "TypeScript", level: 70 },
  { skill: "Tailwind", level: 70 },
  { skill: "C#", level: 60 },
  { skill: "Next.js", level: 40 },
  { skill: "SQL", level: 50 },
  { skill: ".NET", level: 30 },
];

const Index = () => {
  useEffect(() => {
    document.title = "John Alencar - Desenvolvedor Front-End";
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
      <Section
        id="home"
        fullHeight
        className="relative min-h-screen flex items-center pt-10 overflow-hidden"
      >
        {/* IMAGEM BACKGROUND COMPOSIÇÃO */}
        <img
          src="/images/perfil-home.png"
          alt="John alencar"
          className="hidden md:block absolute bottom-0 right-[-40px] sm:right-0 md:right-12 lg:right-24 xl:right-40 2xl:right-56 h-full max-h-[90vh] object-contain z-0 pointer-events-none select-none"
        />

        {/* CONTEÚDO EM PRIMEIRO PLANO */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="w-20 h-1 bg-primary mx-auto md:mx-0"></div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading animate-fade-in">
              Olá, eu sou{" "}
              <span className="text-gradient animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                John alencar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-in">
              Crio sites e experiências visuais para microempreendedores e pequenos negócios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 group hover-scale"
                asChild
              >
                <a href="#projetos">
                  Ver Portfólio
                  <ArrowDown
                    className="ml-2 transition-transform group-hover:translate-y-1"
                    size={18}
                  />
                </a>
              </Button>
              <SocialIcons className="justify-center md:justify-start" />
            </div>
          </div>
        </div>
      </Section>



      
      {/* About Section */}
      <AboutSection />

      {/* Skills Section - two columns, 3D effect on scroll */}
      <Section id="skills" className="animate-fade-in" >
        <SectionTitle
          title="Skills & Tecnologias"
          subtitle="Tecnologias que domino para criar soluções digitais"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {skills.map((item) => (
            <SkillBar
              key={item.skill}
              skill={item.skill as any}
              level={item.level}
              className="hover-scale transition-transform duration-500 will-change-transform"
            />
          ))}
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section id="projetos" className="bg-secondary/30 animate-slide-in">
        <SectionTitle 
          title="Projetos Recentes" 
          subtitle="Conheça alguns dos trabalhos que desenvolvi"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <ProjectCard
            image="/images/barbearia-do-ze.png"
            title="Barbearia do Zé"
            description="Site one-page para barbearia tradicional, com agendamento online e galeria de fotos."
            link="https://ze-barber-hub.vercel.app/"
          />
          <ProjectCard
            image="/images/delicias-da-lu.png"
            title="Delícias da Lu"
            description="Site responsivo para confeitaria artesanal com catálogo de produtos e sistema de pedidos."
            link="https://doce-encanto-lu.vercel.app/"
          />
        </div>
      </Section>
      
      {/* Services Section */}
      <Section id="serviços" className="animate-fade-in">
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
            className="bg-green-500 hover:bg-green-600 gap-2 hover-scale"
            asChild
          >
            <a 
              href="https://wa.me/5581996430199?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!%20Acabei%20de%20vim%20do%20seu%20site!" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M13.5 10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
              </svg>
              Fale comigo no WhatsApp
            </a>
          </Button>
        </div>
      </Section>
      
      {/* Contact Section - substituindo formulário por cards de contato */}
      <Section id="contato" className="bg-secondary/30 animate-slide-in">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Vamos conversar sobre o seu projeto"
        />
        <ContactCards />
      </Section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-secondary">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} John Alencar. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
