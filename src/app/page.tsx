"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DNA from "@/components/DNA";
import ColorPalette from "@/components/ColorPalette";
import LogoGuidelines from "@/components/LogoGuidelines";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const bar = document.getElementById("progress-bar");
      if (bar) {
        bar.style.transform = `scaleX(${v})`;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="progress-bar"
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-primary/20 origin-left z-[60]"
        style={{ transform: "scaleX(0)" }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <DNA />
        <ColorPalette />
        <LogoGuidelines />
      </main>
      <Footer />
    </>
  );
}
