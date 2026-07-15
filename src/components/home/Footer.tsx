"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const productUrls: Record<string, string> = {
  gokLang: "https://github.com/GokayAktas/GokLang",
  gokBall: "https://gokball.vercel.app",
  gokLeague: "https://gokleague.lovable.app",
  gokBill: "https://gokbill.lovable.app",
};

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-16 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Company */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              {t("home.footer.company")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  {t("home.footer.about")}
                </a>
              </li>
              <li>
                <Link href="/brand-kit" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  {t("home.footer.brandKit")}
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  {t("home.footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              {t("home.footer.products")}
            </h4>
            <ul className="space-y-2.5">
              {["gokLang", "gokBall", "gokLeague", "gokBill"].map((product) => (
                <li key={product}>
                  <a
                    href={productUrls[product]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {t(`home.footer.${product}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              {t("home.footer.resources")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/GokayAktas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {t("home.footer.github")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GokayAktas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {t("home.footer.docs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              {t("home.footer.legal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {t("home.footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {t("home.footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="DeepGok" className="h-6 w-auto" />
            <span className="font-heading text-sm font-semibold text-white">
              Deep<span className="text-primary">Gok</span>
            </span>
          </div>
          <p className="text-xs text-white/20">
            {t("home.footer.copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
