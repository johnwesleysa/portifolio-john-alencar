
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";

const aboutImg =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Animação 3D de rotação leve conforme scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1.03]);

  return (
    <section id="sobre" ref={containerRef} className="py-20 md:py-32 relative bg-[#1A1F2C]">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          style={{ rotateY, scale, boxShadow: "0 10px 50px 0 #23224433" }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <motion.img
            src={aboutImg}
            alt="John Wesley"
            className="rounded-2xl object-cover shadow-lg w-[340px] h-[480px]"
            style={{
              rotate: rotateImg,
            }}
          />
        </motion.div>
        <div className="w-full md:w-1/2 text-white space-y-7 text-center md:text-left">
          <SectionTitle
            title="Sobre Mim"
            subtitle="Conheça um pouco mais sobre minha trajetória e habilidades"
            className="mb-6 md:mb-10 text-white"
          />
          <p className="text-lg leading-relaxed font-medium animate-fade-in">
            Olá! Sou John Wesley, desenvolvedor e designer apaixonado por criar experiências digitais únicas e personalizadas.
            Com mais de <span className="text-primary font-bold">5 anos</span> de atuação, ajudo microempreendedores e pequenos negócios a terem <span className="text-primary font-bold">presença digital impactante</span>.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in">
            Meu diferencial está em unir <span className="text-primary font-semibold">tecnologia, design e estratégia</span> para traduzir objetivos em resultados. Desenvolvo sites modernos, identidades visuais e conteúdos dinâmicos para marcas que querem crescer online.
          </p>
          <p className="text-lg font-semibold text-primary animate-fade-in">
            Vamos transformar o seu projeto digital em um marco para o seu negócio!
          </p>
        </div>
      </div>
      {/* Efeito de brilho sutil para impacto */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 rounded-full blur-3xl bg-primary/20" />
    </section>
  );
};

export default AboutSection;
