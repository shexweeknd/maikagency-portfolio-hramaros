"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { SectionTitle } from "@/components/ui";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Créer un agent IA autonome avec Python et LangChain",
    excerpt: "Guide pratique pour construire votre premier agent IA capable de raisonner et d'agir de manière autonome. De la théorie à l'implémentation.",
    category: "IA & LLM",
    readTime: "12 min",
    date: "2025-01-15",
    tags: ["Python", "LangChain", "LLM", "Agents"],
    featured: true,
  },
  {
    id: 2,
    title: "Retour d'expérience : Hackathon DigitAgro 2025",
    excerpt: "Comment notre équipe a conçu une solution IA pour l'agriculture en 48h. Leçons apprises, défis techniques et conseils pour vos prochains hackathons.",
    category: "Retours d'expérience",
    readTime: "8 min",
    date: "2025-01-20",
    tags: ["Hackathon", "Agriculture", "IA", "Équipe"],
  },
  {
    id: 3,
    title: "Les bases de l'algorithmique à 42 : mon parcours",
    excerpt: "Conseils et astuces pour réussir les premiers cercles de 42. Approches méthodologiques pour résoudre efficacement les exercices de C.",
    category: "Astuces 42",
    readTime: "10 min",
    date: "2025-01-25",
    tags: ["42", "C", "Algorithmique", "Astuces"],
  },
];

const categoryColors: Record<string, string> = {
  "IA & LLM": "from-blue-500 to-cyan-500",
  "Retours d'expérience": "from-amber-500 to-orange-500",
  "Astuces 42": "from-purple-500 to-pink-500",
  "Tutoriels techniques": "from-green-500 to-emerald-500",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.article
      variants={cardVariants}
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      className={`group relative glass rounded-2xl overflow-hidden flex flex-col h-full ${
        post.featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
      role="article"
      aria-labelledby={`blog-title-${post.id}`}
    >
      {/* Category gradient bar */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[post.category] || 'from-primary-500 to-accent-500'}`}
        aria-hidden="true"
      />

      {/* Featured image placeholder */}
      <div 
        className={`relative bg-gradient-to-br from-dark-100 to-dark-200 ${
          post.featured ? 'md:w-2/5 h-48 md:h-auto' : 'h-40'
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <FileText className="w-16 h-16 text-dark-300" />
        </div>
        {/* Placeholder pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow p-6 ${post.featured ? 'md:w-3/5' : ''}`}>
        {/* Category badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[post.category] || 'from-primary-500 to-accent-500'} text-white`}>
            <Tag className="w-3 h-3" aria-hidden="true" />
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 
          id={`blog-title-${post.id}`}
          className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2"
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-dark-400 text-sm md:text-base leading-relaxed flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 mt-4 text-dark-500 text-sm">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <time dateTime={post.date}>{formattedDate}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-dark-100 text-dark-500 hover:text-primary-400 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more link */}
        <div className="mt-4 pt-4 border-t border-dark-200/50">
          <span 
            className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:gap-3 transition-all cursor-pointer"
            role="link"
            aria-label={`Lire l'article : ${post.title}`}
          >
            Lire l&apos;article
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function BlogPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative py-20 md:py-32 bg-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          id="blog-title"
          title="Blog & Articles"
          subtitle="Réflexions sur les soft skills, le leadership et l'expérience en tech à Madagascar"
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 mt-12"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <span 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-primary-400 font-medium hover:bg-primary-500/10 transition-colors cursor-pointer group"
            role="link"
            aria-label="Voir tous les articles du blog"
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
