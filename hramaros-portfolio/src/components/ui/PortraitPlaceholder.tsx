"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PortraitPlaceholderProps {
  name: string;
  initials?: string;
  className?: string;
  alt?: string;
}

export function PortraitPlaceholder({ 
  name, 
  initials = "HR",
  className = "",
  alt = "Portrait professionnel de Herinambinintsoa RAMAROSANDRATANA, développeur IA LLM à Madagascar"
}: PortraitPlaceholderProps) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      className={`relative ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #0066FF, #8B5CF6)',
          filter: 'blur(20px)',
          opacity: 0.5,
        }}
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Main container */}
      <div className="relative w-full aspect-square rounded-full overflow-hidden">
        {/* Gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #1F1F23 0%, #0A0A0F 100%),
              linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)
            `,
          }}
        />

        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-full p-1"
          style={{
            background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #0066FF)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full bg-dark-50" />
        </motion.div>

        {/* Inner content */}
        <div className="absolute inset-2 rounded-full overflow-hidden bg-dark-50 flex items-center justify-center">
          {/* Geometric pattern background */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 200 200"
          >
            <defs>
              <linearGradient id="portrait-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <pattern id="circuit-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 20 H15 M25 20 H40 M20 0 V15 M20 25 V40" 
                  stroke="url(#portrait-grad)" 
                  strokeWidth="1" 
                  fill="none"
                />
                <circle cx="20" cy="20" r="3" fill="url(#portrait-grad)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#0066FF' : '#8B5CF6',
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Initials or avatar */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stylized avatar silhouette */}
            <div className="relative">
              {/* Head */}
              <motion.div
                className="w-20 h-20 rounded-full mx-auto"
                style={{
                  background: 'linear-gradient(180deg, #27272A 0%, #18181B 100%)',
                  boxShadow: 'inset 0 -10px 30px rgba(0,102,255,0.1)',
                }}
                animate={{
                  boxShadow: [
                    'inset 0 -10px 30px rgba(0,102,255,0.1)',
                    'inset 0 -10px 30px rgba(139,92,246,0.2)',
                    'inset 0 -10px 30px rgba(0,102,255,0.1)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Code brackets overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-mono font-bold">
                <motion.span
                  className="text-primary-500 opacity-80"
                  animate={{ x: [-2, -4, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {'{'}
                </motion.span>
                <span className="text-gradient mx-1">{initials}</span>
                <motion.span
                  className="text-accent-500 opacity-80"
                  animate={{ x: [2, 4, 2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {'}'}
                </motion.span>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #0066FF, #8B5CF6, transparent)',
              }}
              animate={{
                scaleX: [0.8, 1, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 right-0 h-0.5"
            style={{
              background: 'linear-gradient(90deg, transparent, #0066FF, transparent)',
            }}
            animate={{
              top: ['10%', '90%', '10%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      {/* Status indicator */}
      <motion.div
        className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-green-500 border-4 border-dark-50"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.5)',
            '0 0 0 10px rgba(34, 197, 94, 0)',
            '0 0 0 0 rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        title="Disponible pour collaborer"
      />
    </div>
  );
}
