"use client";

import { motion } from "framer-motion";
import { Eye, Crosshair, Crown, Infinity } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Recognizable",
    description:
      "A distinct visual identity that stands out. The blue-on-dark palette creates an instantly recognizable signature.",
  },
  {
    icon: Crosshair,
    title: "Purposeful",
    description:
      "Nothing is accidental. Every element has a reason to exist, every pixel serves a clear intent.",
  },
  {
    icon: Crown,
    title: "Premium",
    description:
      "Refined details, thoughtful spacing, and polished surfaces. Quality that speaks without words.",
  },
  {
    icon: Infinity,
    title: "Timeless",
    description:
      "Built to last. Classic proportions, restrained choices, and a design language that doesn't chase trends.",
  },
];

export default function DNA() {
  return (
    <section id="dna" className="px-6 py-28">
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
            DeepGok DNA
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
            The Principles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-base text-white/40 leading-relaxed"
          >
            Four principles guide every decision in the DeepGok Brand Kit.
          </motion.p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
