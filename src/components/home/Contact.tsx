"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("home.contact.title")}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/GokayAktas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              {t("home.contact.github")}
            </a>
            <a
              href="mailto:contact.deepgok@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] text-white/60 text-sm font-medium hover:border-white/[0.2] hover:text-white transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              contact.deepgok@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
