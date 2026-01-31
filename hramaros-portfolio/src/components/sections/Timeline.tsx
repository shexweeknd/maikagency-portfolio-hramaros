"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SectionTitle } from "@/components/ui";
import { timeline } from "@/lib/data";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

const typeColors: Record<string, string> = {
  certification: "from-blue-500 to-cyan-500",
  diplome: "from-green-500 to-emerald-500",
  leadership: "from-purple-500 to-pink-500",
  award: "from-yellow-500 to-orange-500",
  experience: "from-primary-500 to-accent-500",
  formation: "from-red-500 to-rose-500",
};

const typeGlow: Record<string, string> = {
  certification: "rgba(59, 130, 246, 0.4)",
  diplome: "rgba(34, 197, 94, 0.4)",
  leadership: "rgba(168, 85, 247, 0.4)",
  award: "rgba(234, 179, 8, 0.4)",
  experience: "rgba(0, 102, 255, 0.4)",
  formation: "rgba(239, 68, 68, 0.4)",
};

const typeLabels: Record<string, string> = {
  certification: "Certification",
  diplome: "Diplôme",
  leadership: "Leadership",
  award: "Récompense",
  experience: "Expérience",
  formation: "Formation",
};

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      style={{ opacity, scale }}
      className={`flex items-start gap-4 md:gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } relative`}
      aria-labelledby={`timeline-item-${index}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pb-12`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`inline-block w-full ${
            isEven ? "md:mr-0 md:ml-auto" : "md:ml-0 md:mr-auto"
          }`}
        >
          <motion.div
            whileHover={{ 
              y: -4,
              boxShadow: `0 20px 40px -12px ${typeGlow[item.type]}`,
            }}
            className={`glass rounded-xl p-5 card-interactive max-w-md ${
              isEven ? "ml-auto" : "mr-auto"
            }`}
          >
            {/* Year badge */}
            <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? "md:justify-end" : ""}`}>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                  typeColors[item.type]
                } text-white shadow-lg`}
              >
                {item.year}
              </span>
              <span className="text-dark-600 text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {typeLabels[item.type]}
              </span>
            </div>

            {/* Event */}
            <div className={`flex items-start gap-3 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
              <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">{item.icon}</span>
              <p id={`timeline-item-${index}`} className="text-white font-medium leading-relaxed">{item.event}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Center line and dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.3 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${
            typeColors[item.type]
          } z-10 shadow-lg ring-4 ring-dark-50`}
          aria-hidden="true"
        />

        {/* Connecting line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-dark-200 relative min-h-[60px]">
            <motion.div
              style={{ height: lineHeight }}
              className={`absolute top-0 left-0 right-0 bg-gradient-to-b ${
                typeColors[item.type]
              }`}
            />
          </div>
        )}
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1" aria-hidden="true" />
    </motion.article>
  );
}

// Mobile Timeline with collapsible years
function MobileTimeline() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  
  // Group by year
  const groupedByYear = timeline.reduce((acc, item) => {
    const year = item.year.toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof timeline>);

  const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="md:hidden space-y-4">
      {years.map((year) => (
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setExpandedYear(expandedYear === year ? null : year)}
            className="w-full p-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={expandedYear === year}
            aria-controls={`year-content-${year}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gradient">{year}</span>
              <span className="text-dark-600 text-sm">
                {groupedByYear[year].length} événement{groupedByYear[year].length > 1 ? 's' : ''}
              </span>
            </div>
            <motion.div
              animate={{ rotate: expandedYear === year ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-dark-500" />
            </motion.div>
          </button>

          <motion.div
            id={`year-content-${year}`}
            initial={false}
            animate={{ 
              height: expandedYear === year ? "auto" : 0,
              opacity: expandedYear === year ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {groupedByYear[year].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`pl-4 border-l-2 border-gradient-to-b ${typeColors[item.type]} py-2`}
                  style={{ 
                    borderImage: `linear-gradient(to bottom, ${item.type === 'certification' ? '#3b82f6, #06b6d4' : item.type === 'award' ? '#eab308, #f97316' : '#0066FF, #8B5CF6'}) 1`
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xl" role="img" aria-hidden="true">{item.icon}</span>
                    <div>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${typeColors[item.type]} text-white mb-1`}>
                        {typeLabels[item.type]}
                      </span>
                      <p className="text-white text-sm">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-20 md:py-32 bg-dark-50 relative overflow-hidden"
      aria-labelledby="timeline-title"
    >
      {/* Parallax animated background */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
      </motion.div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Mon Parcours"
          subtitle="De Madagascar vers l'excellence technique internationale, étape par étape."
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-4xl mx-auto mt-12">
          {timeline.map((item, index) => (
            <TimelineItem
              key={`${item.year}-${item.event}`}
              item={item}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="mt-12">
          <MobileTimeline />
        </div>

        {/* Future indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary-500/30"
          >
            <motion.span 
              className="text-xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
            <span className="text-white font-medium">
              Et ce n&apos;est que le début...
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
