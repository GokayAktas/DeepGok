"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Github } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "DNA", href: "#dna" },
  { label: "Colors", href: "#colors" },
  { label: "Guidelines", href: "#guidelines" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? "max-w-[1200px] mt-3 rounded-2xl border border-white/[0.06] bg-background/80 backdrop-blur-xl"
            : "max-w-[1200px] mt-6 bg-transparent"
        }`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-300 ease-out ${
            scrolled ? "px-6 py-3" : "px-6 py-4"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl font-semibold tracking-tight text-white"
          >
            Deep<span className="text-primary">Gok</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </motion.header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-6 h-6 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 absolute ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 absolute ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 absolute ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-2xl font-heading text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center gap-2 text-2xl font-heading text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
