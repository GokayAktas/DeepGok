"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  Puzzle,
  Cloud,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  { icon: Brain, key: "card1" },
  { icon: Globe, key: "card2" },
  { icon: Smartphone, key: "card3" },
  { icon: Puzzle, key: "card4" },
  { icon: Cloud, key: "card5" },
  { icon: Wrench, key: "card6" },
];

export default function WhatWeBuild() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-medium text-white/40 tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("home.what.label")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("home.what.title")}
          </h2>
          <p className="mt-4 text-sm text-white/30 leading-relaxed">
            {t("home.what.subtitle")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white mb-1">
                    {t(`home.what.${item.key}`)}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {t(`home.what.${item.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
