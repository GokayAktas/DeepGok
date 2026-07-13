"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Vision() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="w-8 h-[1.5px] bg-primary/30 mx-auto mb-8" />

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            &ldquo;{t("home.vision.statement")}&rdquo;
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/30 leading-relaxed max-w-xl mx-auto">
            {t("home.vision.desc")}
          </p>

          <div className="w-8 h-[1.5px] bg-primary/30 mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
