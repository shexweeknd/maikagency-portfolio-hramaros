"use client";

import { motion } from "framer-motion";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
  gradient?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  id,
  gradient = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 
        id={id}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        {gradient ? (
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
            {title}
          </span>
        ) : (
          <span className="text-white">{title}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-dark-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
