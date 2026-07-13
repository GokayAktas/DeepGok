"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-28">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/30">
            {t("about.label")}
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              {t("about.title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 space-y-5"
            >
              <p className="text-base sm:text-lg text-white/40 leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-base sm:text-lg text-white/40 leading-relaxed">
                {t("about.p2")}
              </p>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <div className="w-full lg:w-56 p-8 rounded-2xl border border-white/[0.06] bg-dark-navy/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <p className="mt-4 text-xs text-white/20 tracking-[0.2em] uppercase">
                  {t("about.identity")}
                </p>
                <div className="mt-3 flex justify-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="w-3 h-3 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
