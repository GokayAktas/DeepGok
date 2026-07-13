"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

const colors = [
  { name: "Primary", hex: "#46A3FF" },
  { name: "Secondary", hex: "#2D8CFF" },
  { name: "Accent", hex: "#165CC8" },
  { name: "Dark Navy", hex: "#08182F" },
  { name: "Background", hex: "#07111F" },
  { name: "White", hex: "#FFFFFF" },
];

export default function ColorPalette() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (hex: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="colors" className="px-6 py-28">
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
            Color Palette
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
            Colors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-base text-white/40 leading-relaxed"
          >
            A restrained blue palette. Click any HEX value to copy it.
          </motion.p>
        </div>

        {/* Color Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colors.map((color, i) => (
            <motion.div
              key={color.hex}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: 0.05 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Color Swatch */}
              <div
                className="h-28 sm:h-32 relative"
                style={{ backgroundColor: color.hex }}
              />

              {/* Color Info */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {color.name}
                  </h3>
                  <button
                    onClick={() => handleCopy(color.hex, i)}
                    className="mt-0.5 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
                  >
                    {copiedIndex === i ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="font-mono">{color.hex}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
