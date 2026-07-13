"use client";

import { motion } from "framer-motion";
import { Languages, Swords, Trophy, Receipt, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const products = [
  {
    icon: Languages,
    key: "gokLang",
    status: "gokLangStatus",
    statusColor: "text-yellow-400/80 border-yellow-400/20 bg-yellow-400/5",
  },
  {
    icon: Swords,
    key: "gokBall",
    status: "gokBallStatus",
    statusColor: "text-blue-400/80 border-blue-400/20 bg-blue-400/5",
  },
  {
    icon: Trophy,
    key: "gokLeague",
    status: "gokLeagueStatus",
    statusColor: "text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5",
  },
  {
    icon: Receipt,
    key: "gokBill",
    status: "gokBillStatus",
    statusColor: "text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5",
  },
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="px-6 py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-medium text-white/40 tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("home.products.label")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("home.products.title")}
          </h2>
          <p className="mt-4 text-sm text-white/30 leading-relaxed">
            {t("home.products.subtitle")}
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${product.statusColor}`}
                  >
                    {t(`home.products.${product.status}`)}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  {t(`home.products.${product.key}`)}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed mb-5">
                  {t(`home.products.${product.key}Desc`)}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 hover:text-primary transition-colors duration-200"
                >
                  {t("home.products.learnMore")}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
