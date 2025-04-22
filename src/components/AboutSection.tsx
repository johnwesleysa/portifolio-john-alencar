
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";

const aboutImg =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Efeito especial 3D conforme scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1.04]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 10px 50px 0 #23224433", "0 30px 100px 0 #4b3cfa70"]
  );

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="py-24 md:py-36 relative bg-[#1A1F2C] overflow-x-clip"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-16">
        <motion.div
          style={{
            rotateY,
            scale,
            boxShadow: shadow as any,
            zIndex: 1,
            perspective: 1200,
          }}
          className="w-full md:w-[360px] flex-shrink-0 flex items-center justify-center"
        >
          <motion.img
            src={aboutImg}
            alt="John Wesley"
            className="rounded-[36px] object-cover shadow-2xl w-[320px] h-[480px] md:w-[360px] md:h-[540px]"
            style={{ rotateY, scale }}
          />
        </motion.div>
        <motion.div
          style={{
            rotateY: useTransform(scrollYProgress, [0, 1], [12, -12]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.02]),
          }}
          className="w-full md:w-3/5 text-white space-y-8 text-center md:text-left"
        >
          <SectionTitle
            title="Sobre Mim"
            subtitle="Conheça um pouco mais sobre minha trajetória e habilidades"
            className="mb-8 md:mb-12 text-white"
          />
          <motion.p
            className="text-xl md:text-2xl leading-relaxed font-bold bg-gradient-to-r from-primary/80 via-purple-400/60 to-pink-500/60 bg-clip-text text-transparent drop-shadow-xl animate-fade-in"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]) }}
          >
            Olá! Eu sou John Wesley, desenvolvedor & designer apaixonado, criando experiências digitais personalizadas para pequenos negócios e grandes ideias.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-zinc-300 animate-fade-in"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]) }}
          >
            Há mais de <span className="text-primary font-bold">5 anos</span>, ajudo microempreendedores a terem uma <span className="text-primary font-bold">presença digital marcante</span>. Unindo <span className="text-primary font-semibold">tecnologia, design e estratégia</span>, desenvolvo sites modernos e identidades visuais realmente impactantes.
          </motion.p>
          <motion.p
            className="text-lg font-semibold text-primary animate-fade-in"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]) }}
          >
            Vamos transformar seu projeto digital em um marco para o seu negócio!
          </motion.p>
        </motion.div>
      </div>
      {/* Glow effect for depth */}
      <motion.div
        className="pointer-events-none absolute left-[-10%] top-1/2 -translate-y-1/2 w-1/2 h-[420px] rounded-[45%] blur-3xl bg-primary/20"
        style={{ scale, opacity: 0.95 }}
      />
    </section>
  );
};

export default AboutSection;
