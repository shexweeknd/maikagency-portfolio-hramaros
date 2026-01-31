"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import { SectionTitle, Card } from "@/components/ui";
import { certifications } from "@/lib/data";

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full group" glow>
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <span className="text-3xl">{cert.icon}</span>
          </div>

          <div className="flex-1">
            {/* Title */}
            <h3 className="font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
              {cert.name}
            </h3>

            {/* Organization & Year */}
            <p className="text-dark-500 text-sm mb-3">
              {cert.organization} • {cert.year}
            </p>

            {/* Level if exists */}
            {"level" in cert && cert.level && (
              <p className="text-dark-600 text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {cert.level}
              </p>
            )}

            {/* Verification link */}
            {"verificationUrl" in cert && cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 text-sm hover:text-primary-300 transition-colors"
              >
                <span>Vérifier</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Verification ID */}
            {"verificationId" in cert && cert.verificationId && (
              <p className="text-dark-500 text-xs font-mono mt-2">
                ID: {cert.verificationId}
              </p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Certifications"
          subtitle="Des qualifications vérifiables qui attestent de mes compétences."
        />

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-400 font-medium">
              Toutes les certifications sont vérifiables en ligne
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
