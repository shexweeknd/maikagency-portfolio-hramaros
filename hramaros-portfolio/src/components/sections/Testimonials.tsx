"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, ExternalLink, Linkedin } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "@/components/ui";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
  linkedIn?: string;
  avatar?: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andry Rakotondrainibe",
    role: "Mentor Pédagogique",
    organization: "42 Antananarivo",
    content: "Herinambinintsoa fait preuve d'une capacité remarquable à appréhender des concepts complexes et à les transformer en solutions élégantes. Sa curiosité insatiable et son engagement dans la communauté 42 sont exemplaires.",
    linkedIn: "https://linkedin.com/in/andry-mentor-42",
    relationship: "Mentor à 42 Antananarivo",
  },
  {
    id: 2,
    name: "Sarah Dupont",
    role: "Organisatrice Hackathon",
    organization: "WorldSkills France",
    content: "Lors du hackathon DigitAgro, l'équipe de Herinambinintsoa a impressionné le jury par sa maîtrise technique des agents IA et sa vision centrée utilisateur. Un talent prometteur dans le domaine de l'IA appliquée à l'agriculture.",
    linkedIn: "https://linkedin.com/in/sarah-worldskills",
    relationship: "Jury - WorldSkills DigitAgro 2025",
  },
  {
    id: 3,
    name: "Tiana Rakotoarisoa",
    role: "Responsable Technique",
    organization: "TechZara Association",
    content: "En tant que responsable de TechZara Antsiranana, Herinambinintsoa a su fédérer une communauté tech dynamique. Son leadership naturel et ses compétences pédagogiques ont inspiré de nombreux jeunes développeurs malgaches.",
    linkedIn: "https://linkedin.com/in/tiana-techzara",
    relationship: "Collègue - TechZara Association",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.article
      variants={cardVariants}
      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl p-6 md:p-8 flex flex-col h-full"
      role="article"
      aria-labelledby={`testimonial-name-${testimonial.id}`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 -left-2 md:-left-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
          <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <blockquote className="flex-grow mt-4">
        <p className="text-dark-600 leading-relaxed text-base md:text-lg italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </blockquote>

      {/* Author info */}
      <footer className="mt-6 pt-6 border-t border-dark-200/50">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center ring-2 ring-primary-500/30 flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-lg md:text-xl font-bold text-gradient">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>

          <div className="flex-grow min-w-0">
            <cite className="not-italic">
              <span 
                id={`testimonial-name-${testimonial.id}`}
                className="block text-white font-semibold text-base md:text-lg truncate"
              >
                {testimonial.name}
              </span>
              <span className="block text-dark-600 text-sm truncate">
                {testimonial.role}
              </span>
              <span className="block text-primary-400 text-sm truncate">
                {testimonial.organization}
              </span>
            </cite>
          </div>

          {/* LinkedIn link */}
          {testimonial.linkedIn && (
            <a
              href={testimonial.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 text-dark-600 hover:text-primary-400 transition-colors rounded-lg hover:bg-primary-500/10"
              aria-label={`Profil LinkedIn de ${testimonial.name}`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Relationship badge */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-dark-100 text-xs text-dark-600">
            {testimonial.relationship}
          </span>
        </div>
      </footer>

      {/* Decorative gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
        aria-hidden="true"
      />
    </motion.article>
  );
}

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative py-20 md:py-32 bg-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          id="testimonials-title"
          title="Ce qu'ils disent"
          subtitle="Témoignages de mentors et partenaires qui ont accompagné mon parcours"
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "3+", label: "Hackathons" },
            { value: "100%", label: "Projets livrés" },
            { value: "50+", label: "Personnes mentorées" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-dark-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
