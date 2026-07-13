"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
      aria-label={`Switch language to ${lang === "en" ? "Turkish" : "English"}`}
    >
      <Languages className="w-3.5 h-3.5" />
      <span className="text-xs font-medium uppercase tracking-wide">
        {lang === "en" ? "TR" : "EN"}
      </span>
    </button>
  );
}
