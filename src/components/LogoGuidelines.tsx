"use client";

import { motion } from "framer-motion";
import { Check, X, Square, CircleDot, Blend, Gem, LayoutGrid, Smile, Image, Shirt, Zap, Box } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const doKeys = [
  { icon: Square, key: "guidelines.do1" },
  { icon: CircleDot, key: "guidelines.do2" },
  { icon: Blend, key: "guidelines.do3" },
  { icon: Gem, key: "guidelines.do4" },
  { icon: LayoutGrid, key: "guidelines.do5" },
];

const dontKeys = [
  { icon: Smile, key: "guidelines.dont1" },
  { icon: Image, key: "guidelines.dont2" },
  { icon: Shirt, key: "guidelines.dont3" },
  { icon: Zap, key: "guidelines.dont4" },
  { icon: Box, key: "guidelines.dont5" },
];

export default function LogoGuidelines() {
  const { t } = useLanguage();

  return (
    <section id="guidelines" className="px-6 py-28">
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
            {t("guidelines.label")}
          </span>
        </motion.div>

        {/* Header */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            {t("guidelines.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-base text-white/40 leading-relaxed"
          >
            {t("guidelines.subtitle")}
          </motion.p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-heading text-base font-semibold text-emerald-400">
                {t("guidelines.do")}
              </span>
            </div>
            <ul className="space-y-3.5">
              {doKeys.map((item) => (
                <li
                  key={item.key}
                  className="flex items-center gap-3 text-sm text-white/50"
                >
                  <item.icon className="w-4 h-4 text-white/30 flex-shrink-0" />
                  <span>{t(item.key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Don't Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-red-500/10 bg-red-500/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-heading text-base font-semibold text-red-400">
                {t("guidelines.dont")}
              </span>
            </div>
            <ul className="space-y-3.5">
              {dontKeys.map((item) => (
                <li
                  key={item.key}
                  className="flex items-center gap-3 text-sm text-white/50"
                >
                  <item.icon className="w-4 h-4 text-white/20 flex-shrink-0" />
                  <span>{t(item.key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
