"use client";

import { motion } from "framer-motion";
import { Palette, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandKitSection() {
  const { t } = useLanguage();

  return (
    <section id="brandkit" className="px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-dark-navy/80 to-background p-10 sm:p-14"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Palette className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-medium text-white/40 tracking-wider uppercase mb-4">
                {t("home.brandKit.label")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
                {t("home.brandKit.title")}
              </h2>
              <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t("home.brandKit.desc")}
              </p>
            </div>

            {/* CTA */}
            <a
              href="/brand-kit"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200 flex-shrink-0"
            >
              {t("home.brandKit.cta")}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
