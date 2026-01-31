"use client";

import { motion } from "framer-motion";
import { SectionTitle, Card } from "@/components/ui";
import { skills } from "@/lib/data";

function SkillBar({
  name,
  level,
  context,
  icon,
  index,
}: {
  name: string;
  level: number;
  context: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium text-white">{name}</span>
        </div>
        <span className="text-primary-400 font-mono text-sm">{level}%</span>
      </div>
      <div className="relative h-2 bg-dark-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
      <p className="text-dark-500 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {context}
      </p>
    </motion.div>
  );
}

function SoftSkillCard({
  name,
  illustration,
  icon,
  index,
}: {
  name: string;
  illustration: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">{name}</h4>
            <p className="text-dark-500 text-sm">{illustration}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function TerminalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-dark-100 rounded-xl border border-dark-200 overflow-hidden"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-dark-50 border-b border-dark-200">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-dark-500 text-sm ml-2 font-mono">skills.sh</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        <div className="text-dark-500 mb-2">
          <span className="text-green-400">hramaros@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-primary-400">~/skills</span>
          <span className="text-white">$</span>
          <span className="text-dark-600 ml-2">cat technical_stack.json</span>
        </div>
        
        <pre className="text-dark-600 overflow-x-auto">
{`{
  "languages": ["Python", "C/C++", "JavaScript", "PHP", "SQL"],
  "ai_ml": ["LLM Development", "Agentic Coding", "RAG", "Fine-tuning"],
  "tools": ["Docker", "Linux", "N8N", "Git"],
  "specialties": ["Web Scraping", "Design Patterns", "API Development"]
}`}
        </pre>

        <div className="text-dark-500 mt-4">
          <span className="text-green-400">hramaros@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-primary-400">~/skills</span>
          <span className="text-white">$</span>
          <span className="text-accent-400 ml-2 animate-pulse">_</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Compétences"
          subtitle="Un arsenal technique diversifié, forgé par la pratique et l'apprentissage continu."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
            >
              <span className="text-2xl">⚡</span>
              Compétences Techniques
            </motion.h3>
            
            <div className="space-y-5">
              {skills.technical.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  context={skill.context}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>

            {/* Terminal display */}
            <div className="mt-8">
              <TerminalSkills />
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
            >
              <span className="text-2xl">🎯</span>
              Soft Skills
            </motion.h3>

            <div className="grid gap-4">
              {skills.soft.map((skill, index) => (
                <SoftSkillCard
                  key={skill.name}
                  name={skill.name}
                  illustration={skill.illustration}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>

            {/* Certifications preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl border border-primary-500/20"
            >
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span>🏆</span>
                Certifications Vérifiables
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-dark-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Software Engineer Intern - HackerRank 2025
                </div>
                <div className="flex items-center gap-2 text-dark-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  SQL Advanced - HackerRank 2025
                </div>
                <div className="flex items-center gap-2 text-dark-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  DELF B2 - Alliance Française 2018
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
