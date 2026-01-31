export const siteConfig = {
  name: "Herinambinintsoa RAMAROSANDRATANA",
  shortName: "hramaros",
  title: "Développeur IA LLM | Full Stack | Problem Solver",
  description:
    "Portfolio de hramaros - Développeur passionné spécialisé en IA, LLM et Full Stack. Lauréat hackathons, étudiant 42 Antananarivo. Transforme les défis en solutions.",
  url: "https://hramaros.dev",
  ogImage: "/og-image.png",
  email: "ramarosandratananantenaina@gmail.com",
  phone: "+261 34 85 419 94",
  location: "Antananarivo, Madagascar",
  timezone: "GMT+3",
  links: {
    github: "https://github.com/shexweeknd",
    linkedin: "https://linkedin.com/in/hramaros",
  },
  philosophy:
    "Passionné d'informatique, je transforme les défis en solutions concrètes et durables pour créer de la valeur rapidement.",
};

export const skills = {
  technical: [
    { name: "Python", level: 90, context: "IA, LLM, Scripts", icon: "🐍" },
    { name: "C/C++", level: 85, context: "42, Algorithmique", icon: "⚙️" },
    { name: "JavaScript", level: 85, context: "Full Stack Web", icon: "🌐" },
    { name: "PHP", level: 75, context: "Backend Web", icon: "🐘" },
    { name: "SQL", level: 90, context: "Certifié Advanced HackerRank", icon: "🗃️" },
    { name: "Docker", level: 80, context: "Conteneurisation, DevOps", icon: "🐳" },
    { name: "Linux", level: 85, context: "Environnement principal", icon: "🐧" },
    { name: "N8N", level: 80, context: "Automatisation workflows", icon: "🔄" },
    { name: "Web Scraping", level: 85, context: "Data extraction", icon: "🕷️" },
    { name: "Design Patterns", level: 75, context: "Architecture clean", icon: "📐" },
    { name: "Agentic Coding", level: 90, context: "Agents IA autonomes", icon: "🤖" },
    { name: "LLM Development", level: 85, context: "Fine-tuning, RAG, Prompting", icon: "🧠" },
  ],
  soft: [
    {
      name: "Design Thinking",
      illustration: "Approche centrée utilisateur dans tous les projets",
      icon: "💡",
    },
    {
      name: "Leadership communautaire",
      illustration: "Responsable TechZara Antsiranana, ateliers et conférences",
      icon: "👥",
    },
    {
      name: "Problem Solving créatif",
      illustration: "3 hackathons, solutions innovantes sous pression",
      icon: "🧩",
    },
    {
      name: "Communication trilingue",
      illustration: "MG natif, FR B2 certifié, EN professionnel",
      icon: "🌍",
    },
    {
      name: "Mentorat technique",
      illustration: "Animation vie campus, transmission de connaissances",
      icon: "🎓",
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Agent IA DigitAgro",
    context: "WorldSkills France - Hackathon DigitAgro 2025",
    organizers: "Simplon SUD & WorldSkills",
    impact:
      "Coup de cœur du Jury - Solution IA pour aider les petits agriculteurs dans la gestion de leurs serres",
    tech: ["Python", "LLM", "N8N", "API REST"],
    learnings: "Design d'agents autonomes, intégration IoT simulée",
    image: "/projects/digitagro.png",
    featured: true,
  },
  {
    id: 2,
    name: "FANORONA Digital",
    context: "Independence Day Hackathon 2024",
    organizers: "Yas Madagascar & 42 Antananarivo",
    impact: "1er Prix - Préservation du patrimoine culturel malgache par le numérique",
    tech: ["C", "Algorithmique avancée", "Interface console"],
    learnings: "Optimisation performance, game theory, fierté culturelle",
    image: "/projects/fanorona.png",
    featured: true,
  },
  {
    id: 3,
    name: "Plateforme Retraités France",
    context: "Exxomad Madagascar 2024 - Développeur Full Stack",
    organizers: "Exxomad",
    impact: "Application web en production accompagnant les retraités en France",
    tech: ["JavaScript", "PHP", "SQL", "API REST"],
    learnings: "Développement production, UX seniors, RGPD",
    image: "/projects/retraites.png",
    featured: true,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Software Engineer Intern Certificate",
    organization: "HackerRank",
    year: 2025,
    verificationId: "07dd1b14a05a",
    verificationUrl: "https://www.hackerrank.com/certificates/07dd1b14a05a",
    icon: "🏆",
  },
  {
    id: 2,
    name: "SQL (Advanced) Certificate",
    organization: "HackerRank",
    year: 2025,
    verificationId: "13b02aae5aeb",
    verificationUrl: "https://www.hackerrank.com/certificates/13b02aae5aeb",
    icon: "🗃️",
  },
  {
    id: 3,
    name: "DELF B2 - Diplôme d'études en langue française",
    organization: "Alliance Française d'Antananarivo",
    year: 2018,
    level: "B2 (Utilisateur indépendant avancé)",
    icon: "🇫🇷",
  },
];

export const timeline = [
  {
    year: 2018,
    event: "DELF B2 - Alliance Française d'Antananarivo",
    type: "certification",
    icon: "🇫🇷",
  },
  {
    year: 2019,
    event: "Baccalauréat scientifique - Le Colibri Sabotsy-Namehana",
    type: "diplome",
    icon: "🎓",
  },
  {
    year: 2023,
    event: "Licence EIT - École polytechnique d'Antsiranana",
    type: "diplome",
    icon: "🎓",
  },
  {
    year: 2023,
    event: "Responsable TechZara Association Antsiranana",
    type: "leadership",
    icon: "👥",
  },
  {
    year: 2024,
    event: "1er Prix - Independence Day Hackathon (FANORONA)",
    type: "award",
    icon: "🏆",
  },
  {
    year: 2024,
    event: "Développeur Full Stack - Exxomad Madagascar",
    type: "experience",
    icon: "💼",
  },
  {
    year: 2025,
    event: "Coup de cœur Jury - WorldSkills DigitAgro",
    type: "award",
    icon: "🏆",
  },
  {
    year: 2025,
    event: "Student 1ère Cohorte - 42 Antananarivo",
    type: "formation",
    icon: "🚀",
  },
  {
    year: 2025,
    event: "Certifications HackerRank (SQL Advanced + Software Engineer)",
    type: "certification",
    icon: "✅",
  },
];

export const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Parcours", href: "#timeline" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
