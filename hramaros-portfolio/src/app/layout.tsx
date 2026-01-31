import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export const metadata: Metadata = {
  title: {
    default: "Herinambinintsoa RAMAROSANDRATANA | Développeur IA LLM | Madagascar",
    template: "%s | hramaros",
  },
  description:
    "Portfolio de hramaros - Développeur passionné spécialisé en IA, LLM et Full Stack. Lauréat hackathons, étudiant 42 Antananarivo. Transforme les défis en solutions.",
  keywords: [
    "développeur IA Madagascar",
    "LLM developer",
    "42 Antananarivo",
    "Full Stack developer",
    "hramaros",
    "RAMAROSANDRATANA",
    "Python developer",
    "AI engineer",
    "Machine Learning",
    "Web developer Madagascar",
  ],
  authors: [
    {
      name: "Herinambinintsoa RAMAROSANDRATANA",
      url: "https://github.com/shexweeknd",
    },
  ],
  creator: "Herinambinintsoa RAMAROSANDRATANA",
  publisher: "Herinambinintsoa RAMAROSANDRATANA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hramaros.dev",
    title: "Herinambinintsoa RAMAROSANDRATANA | Développeur IA LLM",
    description:
      "Portfolio de hramaros - Développeur passionné spécialisé en IA, LLM et Full Stack. Lauréat hackathons, étudiant 42 Antananarivo.",
    siteName: "hramaros Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Herinambinintsoa RAMAROSANDRATANA - Développeur IA LLM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herinambinintsoa RAMAROSANDRATANA | Développeur IA LLM",
    description:
      "Développeur passionné spécialisé en IA, LLM et Full Stack. Lauréat hackathons, étudiant 42 Antananarivo.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://hramaros.dev",
    languages: {
      "fr-FR": "https://hramaros.dev",
      "en-US": "https://hramaros.dev/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Herinambinintsoa RAMAROSANDRATANA",
              alternateName: "hramaros",
              description:
                "Développeur IA LLM passionné, spécialisé en Full Stack et Intelligence Artificielle",
              url: "https://hramaros.dev",
              image: "https://hramaros.dev/profile.jpg",
              sameAs: [
                "https://github.com/shexweeknd",
                "https://linkedin.com/in/hramaros",
              ],
              jobTitle: "Développeur IA LLM",
              worksFor: {
                "@type": "Organization",
                name: "42 Antananarivo",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "42 Antananarivo",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "École polytechnique d'Antsiranana",
                },
              ],
              knowsAbout: [
                "Python",
                "Artificial Intelligence",
                "Large Language Models",
                "Full Stack Development",
                "Machine Learning",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Antananarivo",
                addressCountry: "Madagascar",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-dark text-white`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
