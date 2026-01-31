import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { BackToTop } from "@/components/ui";

// Skeleton loading component
function SectionSkeleton() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title skeleton */}
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-dark-200 rounded-lg mx-auto mb-4 skeleton" />
            <div className="h-6 w-96 bg-dark-200/60 rounded-lg mx-auto skeleton" />
          </div>
          {/* Content skeleton */}
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-dark-100 rounded-2xl border border-dark-200 skeleton" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Lazy load heavy sections for better initial load performance
const About = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.About })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Skills = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.Skills })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Projects = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.Projects })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Timeline = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.Timeline })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Certifications = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.Certifications })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const BlogPreview = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.BlogPreview })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Contact = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.Contact })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <BlogPreview />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
