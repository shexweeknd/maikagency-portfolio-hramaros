"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Award, Users, Zap, Lightbulb } from "lucide-react";
import { SectionTitle, Card, Button, ProjectMockup } from "@/components/ui";
import { projects } from "@/lib/data";

// Map project IDs to mockup types
const projectMockupTypes: Record<number, "web" | "mobile" | "ai" | "game" | "tool"> = {
  1: "ai", // DigitAgro - AI project
  2: "game", // FANORONA - Game project
  3: "mobile", // LifeLink - Mobile app
};

const projectColors: Record<number, string> = {
  1: "#10B981", // Green for agriculture
  2: "#F59E0B", // Orange for game
  3: "#EC4899", // Pink for health
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center`}
      aria-labelledby={`project-${project.id}`}
    >
      {/* Project Visual */}
      <motion.div 
        style={{ y }}
        className="flex-1 w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <ProjectMockup 
            title={project.name}
            type={projectMockupTypes[project.id] || "web"}
            color={projectColors[project.id] || "#0066FF"}
            className="shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <div className="flex-1 w-full">
        <Card hover={false} glow className="p-6 md:p-8">
          {/* Context badge */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-medium border border-primary-500/20"
            >
              <Users className="w-3 h-3" aria-hidden="true" />
              {project.organizers}
            </motion.span>
          </div>

          {/* Title */}
          <h3 
            id={`project-${project.id}`}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            {project.name}
          </h3>

          {/* Context */}
          <p className="text-dark-600 mb-4 leading-relaxed">{project.context}</p>

          {/* Impact */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="mb-6 p-4 glass rounded-lg"
          >
            <div className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-white font-medium">
                {project.impact}
              </p>
            </div>
          </motion.div>

          {/* Tech stack */}
          <div className="mb-6">
            <p className="text-dark-600 text-sm mb-2 font-medium">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-dark-100/80 text-dark-600 text-sm font-mono border border-dark-200 hover:border-primary-500/30 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="mb-6 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-accent-400 flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-dark-600 text-xs mb-1 font-medium uppercase tracking-wide">Apprentissages</p>
              <p className="text-dark-600 text-sm leading-relaxed">{project.learnings}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <Button size="sm" variant="outline" className="group">
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              Code source
            </Button>
            <Button size="sm" variant="ghost" className="group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              Détails
            </Button>
          </div>
        </Card>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-dark relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Parallax background decorations */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Projets Phares"
          subtitle="Des solutions innovantes qui démontrent ma capacité à transformer des idées en réalisations concrètes."
        />

        {/* Projects grid */}
        <div className="space-y-20 md:space-y-32 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="secondary" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              Voir tous les projets
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
