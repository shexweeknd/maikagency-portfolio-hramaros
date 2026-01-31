"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui";
import { BookOpen, Code2, Rocket, Sparkles } from "lucide-react";

const storyActs = [
  {
    id: 1,
    title: "Les Fondations",
    period: "2018-2019",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    content: [
      {
        title: "DELF B2",
        description: "Certification en français à l'Alliance Française d'Antananarivo, ouvrant les portes vers le monde francophone.",
      },
      {
        title: "Baccalauréat Scientifique",
        description: "Diplômé du Colibri Sabotsy-Namehana avec une passion naissante pour les sciences et la logique.",
      },
    ],
    quote: "Chaque grand voyage commence par un premier pas décisif.",
  },
  {
    id: 2,
    title: "L'Éveil Technique",
    period: "2020-2023",
    icon: Code2,
    color: "from-primary-500 to-accent-500",
    glowColor: "rgba(0, 102, 255, 0.3)",
    content: [
      {
        title: "Licence EIT",
        description: "Formation en Électronique, Informatique et Télécommunications à l'École polytechnique d'Antsiranana.",
      },
      {
        title: "Leadership TechZara",
        description: "Responsable de l'association TechZara Antsiranana, organisant ateliers techniques et conférences pour la communauté.",
      },
    ],
    quote: "La curiosité est le moteur de l'innovation, le partage en est le carburant.",
  },
  {
    id: 3,
    title: "L'Excellence",
    period: "2024-2026",
    icon: Rocket,
    color: "from-accent-500 to-pink-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
    content: [
      {
        title: "Hackathons Victorieux",
        description: "1er Prix Independence Day Hackathon (FANORONA) et Coup de cœur du Jury WorldSkills DigitAgro.",
      },
      {
        title: "Expérience Professionnelle",
        description: "Développeur Full Stack chez Exxomad Madagascar, travaillant sur des applications en production.",
      },
      {
        title: "42 Antananarivo",
        description: "Membre de la première cohorte de l'école 42, poursuivant l'excellence dans l'apprentissage par projets.",
      },
    ],
    quote: "L'excellence n'est pas une destination, c'est un voyage perpétuel.",
  },
];

function StoryAct({
  act,
  index,
}: {
  act: (typeof storyActs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? -50 : 50]
  );
  const rotateY = useTransform(scrollYProgress, [0, 0.3], [index % 2 === 0 ? -5 : 5, 0]);

  const Icon = act.icon;

  return (
    <motion.article
      ref={ref}
      style={{ opacity, x }}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-16 mb-20 md:mb-32`}
      aria-labelledby={`story-act-${act.id}`}
    >
      {/* Content side */}
      <div className="flex-1 w-full">
        <motion.div
          style={{ rotateY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            y: -4,
            boxShadow: `0 20px 40px -12px ${act.glowColor}`,
          }}
          className="glass rounded-2xl p-6 md:p-8 card-interactive group"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${act.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
            >
              <Icon className="w-7 h-7 text-white relative z-10" aria-hidden="true" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <div>
              <h3 id={`story-act-${act.id}`} className="text-2xl font-bold text-white">{act.title}</h3>
              <p className="text-dark-600">{act.period}</p>
            </div>
          </div>

          {/* Content items */}
          <div className="space-y-4 mb-6">
            {act.content.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="pl-4 border-l-2 border-primary-500/30 hover:border-primary-500 transition-colors"
              >
                <h4 className="text-lg font-semibold text-primary-400 mb-1">
                  {item.title}
                </h4>
                <p className="text-dark-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="italic text-dark-600 border-t border-dark-200/50 pt-4 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-accent-400 flex-shrink-0 mt-1" aria-hidden="true" />
            <span>&ldquo;{act.quote}&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>

      {/* Visual side - Act number */}
      <div className="flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.1 }}
          className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${act.color} flex items-center justify-center shadow-xl relative overflow-hidden`}
          aria-hidden="true"
        >
          <span className="text-4xl md:text-5xl font-bold text-white relative z-10">
            {String(act.id).padStart(2, "0")}
          </span>
          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/50"
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-dark relative overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Parallax background decorations */}
      <motion.div 
        style={{ y: bgY1, rotate: bgRotate }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" 
        aria-hidden="true"
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" 
        aria-hidden="true"
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Mon Parcours"
          subtitle="Une histoire de passion, de persévérance et de transformation continue vers l'excellence technique."
        />

        {/* Story acts */}
        <div className="max-w-4xl mx-auto">
          {storyActs.map((act, index) => (
            <StoryAct key={act.id} act={act} index={index} />
          ))}
        </div>

        {/* Connecting line */}
        <div 
          className="hidden md:block absolute left-1/2 top-64 bottom-32 w-0.5 bg-gradient-to-b from-primary-500/20 via-accent-500/20 to-transparent -translate-x-1/2 -z-10" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
