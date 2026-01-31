"use client";

import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  animate?: boolean;
}

export function SkeletonLoader({ className = "", animate = true }: SkeletonLoaderProps) {
  return (
    <div 
      className={`bg-dark-200 rounded-lg overflow-hidden ${className}`}
    >
      {animate && (
        <motion.div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

interface SkeletonCardProps {
  lines?: number;
  hasImage?: boolean;
  className?: string;
}

export function SkeletonCard({ lines = 3, hasImage = false, className = "" }: SkeletonCardProps) {
  return (
    <div className={`p-4 rounded-xl bg-dark-50 border border-dark-200 space-y-4 ${className}`}>
      {hasImage && (
        <SkeletonLoader className="w-full aspect-video" />
      )}
      
      <div className="flex items-center gap-3">
        <SkeletonLoader className="w-10 h-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader className="h-4 w-3/4" />
          <SkeletonLoader className="h-3 w-1/2" />
        </div>
      </div>

      <div className="space-y-2">
        {[...Array(lines)].map((_, i) => (
          <SkeletonLoader 
            key={i} 
            className={`h-3 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} 
          />
        ))}
      </div>
    </div>
  );
}

interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className = "" }: SkeletonTextProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <SkeletonLoader 
          key={i} 
          className={`h-4 ${
            i === 0 ? 'w-full' : 
            i === lines - 1 ? 'w-1/2' : 
            'w-5/6'
          }`} 
        />
      ))}
    </div>
  );
}
