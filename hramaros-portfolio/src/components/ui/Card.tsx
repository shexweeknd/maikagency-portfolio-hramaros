"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  glowColor = "rgba(0, 102, 255, 0.15)",
}: CardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hover ? { 
        y: -6, 
        scale: 1.01,
        boxShadow: `0 25px 50px -12px ${glowColor}`,
      } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "relative rounded-2xl",
        "bg-dark-50/60 backdrop-blur-md",
        "border border-dark-200/50",
        "transition-colors duration-300",
        hover && "hover:border-primary-500/40 cursor-pointer",
        glow && "overflow-hidden",
        className
      )}
    >
      {/* Animated gradient border on hover */}
      {glow && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0,102,255,0.2), rgba(139,92,246,0.2))',
          }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* Inner glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
      )}
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glowOnHover?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  interactive = true,
  glowOnHover = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={interactive ? { 
        y: -4,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={interactive ? { scale: 0.995 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-dark-50/60 backdrop-blur-xl",
        "border border-dark-200/40",
        "shadow-xl shadow-black/10",
        interactive && "cursor-pointer",
        "group",
        className
      )}
    >
      {/* Glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      {/* Noise texture for realism */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Glow effect on hover */}
      {glowOnHover && (
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(0,102,255,0.15), transparent 70%)',
          }}
        />
      )}

      {/* Gradient border effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(139,92,246,0.3))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

