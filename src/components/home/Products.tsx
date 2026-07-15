"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import goklangLogo from "../../../icons/goklang_logo.png";
import gokballLogo from "../../../icons/gokball_logo.png";
import gokleagueLogo from "../../../icons/gokleague_logo.png";
import gokbillLogo from "../../../icons/gokbill_logo.png";

const productLinks: Record<string, string> = {
  gokLang: "https://github.com/GokayAktas/GokLang",
  gokBall: "https://gokball.vercel.app",
  gokLeague: "https://gokleague.lovable.app",
  gokBill: "https://gokbill.lovable.app",
};

const products = [
  {
    image: goklangLogo,
    key: "gokLang",
    status: "gokLangStatus",
    statusColor: "text-yellow-400/80 border-yellow-400/20 bg-yellow-400/5",
  },
  {
    image: gokballLogo,
    key: "gokBall",
    status: "gokBallStatus",
    statusColor: "text-blue-400/80 border-blue-400/20 bg-blue-400/5",
  },
  {
    image: gokleagueLogo,
    key: "gokLeague",
    status: "gokLeagueStatus",
    statusColor: "text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5",
  },
  {
    image: gokbillLogo,
    key: "gokBill",
    status: "gokBillStatus",
    statusColor: "text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5",
  },
];

export default function Products() {
  const [selected, setSelected] = useState<string | null>(null);
  const { t } = useLanguage();

  const selectedProduct = products.find((p) => p.key === selected);

  const handleLearnMore = (key: string) => {
    setSelected(selected === key ? null : key);
  };

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
            const isSelected = selected === product.key;
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-primary/30 bg-primary/[0.03]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                }`}
                onClick={() => handleLearnMore(product.key)}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden p-1.5">
                    <Image
                      src={product.image}
                      alt={t(`home.products.${product.key}`)}
                      className="w-full h-full object-contain"
                    />
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
                <button
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 hover:text-primary transition-colors duration-200"
                >
                  {t("home.products.learnMore")}
                  <ArrowRight
                    className={`w-3 h-3 transition-transform duration-200 ${
                      isSelected ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Panel */}
        <AnimatePresence>
          {selected && selectedProduct && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-5"
            >
              <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left: Image + Name + Description */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center overflow-hidden p-2">
                        <Image
                          src={selectedProduct.image}
                          alt={t(`home.products.${selected}`)}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white">
                          {t(`home.products.${selected}`)}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border mt-1.5 ${
                            selectedProduct.statusColor
                          }`}
                        >
                          {t(`home.products.${selectedProduct.status}`)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-white/40 leading-relaxed">
                      {t(`home.products.${selected}.detailDesc`)}
                    </p>

                    {/* Product Link */}
                    <a
                      href={productLinks[selected]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.1] text-white/50 text-xs font-medium hover:border-primary/30 hover:text-primary hover:bg-primary/[0.03] transition-all duration-200 group"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>
                        {selected === "gokLang" ? "GitHub" : "Website"}{" "}
                        <span className="opacity-50 text-[10px]">
                          {productLinks[selected].replace("https://", "")}
                        </span>
                      </span>
                    </a>
                  </div>

                  {/* Right: Features List */}
                  <div className="flex-1">
                    <h4 className="font-heading text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                      {t("home.products.keyFeatures")}
                    </h4>
                    <div className="space-y-3.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <a
                          key={n}
                          href={productLinks[selected]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 group cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-200" />
                          <span className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-200">
                            {t(`home.products.${selected}.detail${n}`)}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
