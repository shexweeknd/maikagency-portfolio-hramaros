"use client";

import { motion } from "framer-motion";

interface ProjectMockupProps {
  title: string;
  type: "web" | "mobile" | "ai" | "game" | "tool";
  color?: string;
  className?: string;
}

export function ProjectMockup({ 
  title, 
  type, 
  color = "#0066FF", 
  className = "" 
}: ProjectMockupProps) {
  const accentColor = "#8B5CF6";

  // Different mockup layouts based on project type
  if (type === "mobile") {
    return (
      <div className={`relative w-full max-w-[280px] mx-auto ${className}`}>
        {/* Phone frame */}
        <div className="relative bg-dark-100 rounded-[3rem] p-3 shadow-2xl border border-dark-200">
          {/* Screen */}
          <div className="relative bg-dark rounded-[2.5rem] overflow-hidden aspect-[9/19]">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-dark-50/50 backdrop-blur flex items-center justify-center">
              <div className="w-20 h-6 bg-dark-100 rounded-full" />
            </div>
            
            {/* Content */}
            <div className="p-4 pt-12 h-full">
              {/* Header placeholder */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
                />
                <div className="space-y-2 flex-1">
                  <div className="h-3 w-3/4 bg-dark-200 rounded" />
                  <div className="h-2 w-1/2 bg-dark-300 rounded" />
                </div>
              </div>

              {/* Cards placeholder */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="mb-3 p-3 bg-dark-50/50 rounded-xl border border-dark-200/50"
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-lg"
                      style={{ background: `linear-gradient(135deg, ${color}30, ${accentColor}30)` }}
                    />
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-full bg-dark-200 rounded" />
                      <div className="h-2 w-2/3 bg-dark-300 rounded" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Bottom nav */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-around p-3 bg-dark-100/80 backdrop-blur rounded-2xl">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 rounded-full"
                      style={{ background: i === 1 ? `linear-gradient(135deg, ${color}, ${accentColor})` : '#27272A' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-dark-50 border border-dark-200 ${className}`}>
        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 225">
          <defs>
            <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={accentColor} />
            </linearGradient>
          </defs>
          
          {/* Network nodes */}
          {[1, 2, 3].map((layer) => (
            <g key={layer}>
              {[1, 2, 3, 4].map((node) => (
                <motion.circle
                  key={`${layer}-${node}`}
                  cx={80 + layer * 80}
                  cy={35 + node * 40}
                  r="8"
                  fill={`url(#grad-${title})`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: (layer + node) * 0.2
                  }}
                />
              ))}
            </g>
          ))}

          {/* Connection lines */}
          {[1, 2].map((layerFrom) => (
            <g key={`lines-${layerFrom}`}>
              {[1, 2, 3, 4].map((nodeFrom) => (
                [1, 2, 3, 4].map((nodeTo) => (
                  <motion.line
                    key={`${layerFrom}-${nodeFrom}-${nodeTo}`}
                    x1={80 + layerFrom * 80 + 8}
                    y1={35 + nodeFrom * 40}
                    x2={80 + (layerFrom + 1) * 80 - 8}
                    y2={35 + nodeTo * 40}
                    stroke={`url(#grad-${title})`}
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ 
                      duration: 1.5,
                      delay: (nodeFrom + nodeTo) * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))
              ))}
            </g>
          ))}
        </svg>

        {/* Terminal overlay */}
        <div className="absolute inset-4 bg-dark/80 backdrop-blur-sm rounded-lg border border-dark-200 p-4 font-mono text-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-dark-500 text-[10px]">model.py</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <p><span style={{ color }}>from</span> <span className="text-accent-400">transformers</span> <span style={{ color }}>import</span> AutoModel</p>
            <p><span style={{ color }}>import</span> <span className="text-accent-400">torch</span></p>
            <p className="text-dark-500"># Loading AI model...</p>
            <motion.p 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color }}
            >
              ▌ Processing...
            </motion.p>
          </div>
        </div>

        {/* Title badge */}
        <div 
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
        >
          AI Project
        </div>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-dark border border-dark-200 ${className}`}>
        {/* Game board background */}
        <div className="absolute inset-0 p-4">
          <div 
            className="w-full h-full rounded-lg opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(${color}40 1px, transparent 1px),
                linear-gradient(90deg, ${color}40 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Game pieces (Fanorona style) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring" }}
                className={`w-6 h-6 rounded-full ${
                  i % 3 === 0 ? 'bg-white shadow-lg' : 
                  i % 3 === 1 ? 'bg-dark-300 shadow-inner' : 
                  'bg-transparent border-2 border-dark-300'
                }`}
                style={i % 3 === 0 ? { boxShadow: `0 0 20px ${color}60` } : {}}
              />
            ))}
          </div>
        </div>

        {/* Score overlay */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <div className="px-3 py-1.5 bg-dark-100/80 backdrop-blur rounded-lg text-xs">
            <span className="text-dark-500">Score:</span>{" "}
            <motion.span 
              className="font-bold"
              style={{ color }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1250
            </motion.span>
          </div>
          <div className="px-3 py-1.5 bg-dark-100/80 backdrop-blur rounded-lg text-xs">
            <span className="text-dark-500">Level:</span>{" "}
            <span className="font-bold text-accent-400">3</span>
          </div>
        </div>

        {/* Title badge */}
        <div 
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
        >
          Game Project
        </div>
      </div>
    );
  }

  if (type === "tool") {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-dark-50 border border-dark-200 ${className}`}>
        {/* Dashboard mockup */}
        <div className="absolute inset-0 p-4">
          {/* Sidebar */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-dark-100 border-r border-dark-200 flex flex-col items-center py-4 gap-4">
            <div 
              className="w-8 h-8 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
            />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-dark-200" />
            ))}
          </div>

          {/* Main content */}
          <div className="ml-20 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-4 w-32 bg-dark-200 rounded" />
                <div className="h-3 w-24 bg-dark-300 rounded" />
              </div>
              <div 
                className="px-4 py-2 rounded-lg text-xs text-white"
                style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
              >
                + New
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '42', label: 'Projects', change: '+12%' },
                { value: '1.2k', label: 'Users', change: '+8%' },
                { value: '99%', label: 'Uptime', change: '0%' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-3 bg-dark/50 rounded-lg border border-dark-200"
                >
                  <div className="text-lg font-bold" style={{ color: i === 0 ? color : i === 1 ? accentColor : '#10B981' }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-dark-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="h-20 bg-dark/50 rounded-lg border border-dark-200 p-3">
              <svg className="w-full h-full" viewBox="0 0 200 50">
                <motion.path
                  d="M0,40 Q50,10 100,30 T200,20"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M0,35 Q50,25 100,40 T200,30"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title badge */}
        <div 
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
        >
          Tool
        </div>
      </div>
    );
  }

  // Default: Web mockup (browser window)
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-dark-100 border border-dark-200 ${className}`}>
      {/* Browser chrome */}
      <div className="h-8 bg-dark-50 border-b border-dark-200 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-5 bg-dark-200 rounded-full px-3 flex items-center">
            <span className="text-[10px] text-dark-500 truncate">https://{title.toLowerCase().replace(/\s/g, '-')}.dev</span>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="p-4 space-y-4">
        {/* Hero section */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-3">
            <motion.div 
              className="h-6 w-3/4 rounded"
              style={{ background: `linear-gradient(90deg, ${color}, ${accentColor})` }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-3 w-full bg-dark-200 rounded" />
            <div className="h-3 w-5/6 bg-dark-200 rounded" />
            <div className="flex gap-2 mt-4">
              <div 
                className="h-8 w-24 rounded-lg"
                style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
              />
              <div className="h-8 w-24 rounded-lg bg-dark-200" />
            </div>
          </div>
          <motion.div 
            className="w-32 h-32 rounded-xl"
            style={{ background: `linear-gradient(135deg, ${color}30, ${accentColor}30)` }}
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-3 bg-dark/50 rounded-lg border border-dark-200"
            >
              <div 
                className="w-6 h-6 rounded mb-2"
                style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})`, opacity: 0.8 - i * 0.2 }}
              />
              <div className="h-2 w-full bg-dark-300 rounded mb-1" />
              <div className="h-2 w-2/3 bg-dark-300 rounded" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Title badge */}
      <div 
        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white"
        style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
      >
        Web App
      </div>
    </div>
  );
}
