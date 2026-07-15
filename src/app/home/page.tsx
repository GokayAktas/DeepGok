"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import WhyDeepGok from "@/components/home/WhyDeepGok";
import About from "@/components/home/About";
import BrandKitSection from "@/components/home/BrandKitSection";
import Vision from "@/components/home/Vision";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const bar = document.getElementById("home-progress-bar");
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
        id="home-progress-bar"
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-primary/20 origin-left z-[60]"
        style={{ transform: "scaleX(0)" }}
      />

      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhatWeBuild />
        <WhyDeepGok />
        <About />
        <BrandKitSection />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
