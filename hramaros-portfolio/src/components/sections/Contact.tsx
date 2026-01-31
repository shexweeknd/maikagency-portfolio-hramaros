"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { SectionTitle, Button, GlassCard } from "@/components/ui";
import { siteConfig } from "@/lib/data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus("idle");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: siteConfig.location,
      href: null,
    },
    {
      icon: Clock,
      label: "Fuseau horaire",
      value: siteConfig.timezone,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: siteConfig.links.github,
      username: "@shexweeknd",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      username: "hramaros",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Contactez-moi"
          subtitle="Discutons de votre projet ou de nouvelles opportunités de collaboration."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-dark-500 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-primary-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-100 border border-dark-200 hover:border-primary-500/50 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-dark-500 group-hover:text-primary-400 transition-colors" />
                    <div>
                      <p className="text-white font-medium text-sm">
                        {social.label}
                      </p>
                      <p className="text-dark-500 text-xs">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">
                  Disponible pour de nouvelles opportunités
                </span>
              </div>
              <p className="text-dark-500 text-sm">
                Je suis ouvert aux missions freelance, aux collaborations sur
                des projets IA/LLM, et aux opportunités à temps plein.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-dark-600 text-sm mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-dark-600 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-dark-600 text-sm mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    placeholder="Opportunité de collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-dark-600 text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={formStatus === "sending" || formStatus === "success"}
                >
                  {formStatus === "idle" && (
                    <>
                      Envoyer le message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <>
                      <span className="animate-pulse">Envoi en cours...</span>
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message envoyé !
                    </>
                  )}
                  {formStatus === "error" && (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Erreur, réessayez
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
