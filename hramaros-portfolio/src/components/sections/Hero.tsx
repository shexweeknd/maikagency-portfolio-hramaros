"use client";

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { siteConfig } from "@/lib/data";

// Lazy load the 3D scene for better performance
const Hero3DScene = dynamic(
  () => import("@/components/three/Hero3DScene").then((mod) => mod.Hero3DScene),
  { 
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
      </div>
    )
  }
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Magnetic button effect hook
function useMagnetic(strength: number = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, handleMouseMove, handleMouseLeave };
}

export function Hero() {
  const magnetic = useMagnetic(0.2);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* 3D Background */}
      <Hero3DScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Portrait - Hidden on mobile, shown on larger screens */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block flex-shrink-0"
          >
            <PortraitPlaceholder 
              name="Herinambinintsoa RAMAROSANDRATANA" 
              initials="HR"
              className="w-64 h-64 xl:w-72 xl:h-72"
            />
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm cursor-default"
              >
                <motion.span 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-dark-600">Disponible pour de nouvelles opportunités</span>
              </motion.span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              id="hero-title"
              variants={itemVariants} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-white mb-2">
                {siteConfig.name.split(" ")[0]}
              </span>
              <motion.span 
                className="block text-gradient"
                style={{ backgroundSize: '200% auto' }}
                animate={{ backgroundPosition: ['0% center', '200% center', '0% center'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </motion.span>
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-dark-600 font-light">
                Du code aux solutions,{" "}
                <span className="text-primary-400 font-normal">de Madagascar au monde</span>
              </p>
            </motion.div>

            {/* Subtitle with icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <Code2 className="w-5 h-5 text-primary-400" aria-hidden="true" />
              <p className="text-lg md:text-xl text-dark-600">
                {siteConfig.title}
              </p>
              <Sparkles className="w-5 h-5 text-accent-400" aria-hidden="true" />
            </motion.div>

            {/* Terminal-like philosophy */}
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass rounded-lg p-4 text-left inline-block w-full max-w-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                  <Terminal className="w-4 h-4 text-dark-500 ml-2" aria-hidden="true" />
                  <span className="text-dark-500 text-sm font-mono">hramaros@portfolio:~</span>
                </div>
                <p className="font-mono text-sm md:text-base text-dark-600">
                  <span className="text-primary-400">$</span>{" "}
                  <span className="text-green-400">echo</span>{" "}
                  <motion.span 
                    className="text-accent-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    &quot;{siteConfig.philosophy}&quot;
                  </motion.span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    aria-hidden="true"
                  />
                </p>
              </motion.div>
            </motion.div>

            {/* CTAs with magnetic effect */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.div
                style={{ x: magnetic.springX, y: magnetic.springY }}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
              >
                <Button size="lg" onClick={scrollToAbout} className="group">
                  Découvrir mon parcours
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Me contacter
              </Button>
            </motion.div>

            {/* Social links with hover effects */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { href: siteConfig.links.github, icon: Github, label: "GitHub" },
                { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="relative p-2 text-dark-500 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary-500/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-dark-500 hover:text-primary-400 transition-colors p-2"
          aria-label="Défiler vers le bas"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
