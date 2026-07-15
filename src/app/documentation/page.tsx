"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe, Swords, Trophy, Receipt, ChevronRight, ExternalLink, Sparkles,
  BookOpen, MessageCircle, Github, Mail, Shield, Zap, Layers, Code2,
  Database, Palette, Gauge, RefreshCw, HelpCircle, FileText, ArrowUpRight,
} from "lucide-react";
import { useScroll } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import goklangLogo from "../../../icons/goklang_logo.png";
import gokballLogo from "../../../icons/gokball_logo.png";
import gokleagueLogo from "../../../icons/gokleague_logo.png";
import gokbillLogo from "../../../icons/gokbill_logo.png";

type LangContent = { en: string; tr: string };

const t = {
  sidebar: (key: string): LangContent => {
    const map: Record<string, LangContent> = {
      welcome: { en: "Welcome", tr: "Hoş Geldiniz" },
      about: { en: "About", tr: "Hakkında" },
      products: { en: "Products", tr: "Ürünler" },
      services: { en: "Services", tr: "Hizmetler" },
      technology: { en: "Tech Stack", tr: "Teknoloji" },
      design: { en: "Design Philosophy", tr: "Tasarım Felsefesi" },
      opensource: { en: "Open Source", tr: "Açık Kaynak" },
      issues: { en: "Reporting Issues", tr: "Hata Bildirimi" },
      updates: { en: "Updates", tr: "Güncellemeler" },
      faq: { en: "FAQ", tr: "SSS" },
      contact: { en: "Contact", tr: "İletişim" },
    };
    return map[key] ?? { en: key, tr: key };
  },
  docs: { en: "Docs", tr: "Döküman" },
  home: { en: "Home", tr: "Ana Sayfa" },
  welcomeBadge: { en: "Documentation", tr: "Dökümantasyon" },
  welcomeTitle1: { en: "Welcome to", tr: "DeepGok'a Hoş Geldiniz" },
  welcomeText: { en: "DeepGok is an independent software studio focused on creating modern, accessible, and user-friendly digital products. Our mission is to simplify everyday tasks through innovative web applications, browser extensions, mobile solutions, and AI-powered technologies.", tr: "DeepGok, modern, erişilebilir ve kullanıcı dostu dijital ürünler oluşturmaya odaklanmış bağımsız bir yazılım stüdyosudur. Misyonumuz, yenilikçi web uygulamaları, tarayıcı eklentileri, mobil çözümler ve yapay zeka destekli teknolojilerle günlük görevleri basitleştirmektir." },
  motto1: { en: "Infinite Depth.", tr: "Sonsuz Derinlik." },
  motto2: { en: "Infinite Possibilities.", tr: "Sonsuz Olasılık." },
  aboutTitle: { en: "About DeepGok", tr: "DeepGok Hakkında" },
  aboutP1: { en: "DeepGok was founded with the vision of making technology simpler, smarter, and more accessible to everyone.", tr: "DeepGok, teknolojiyi herkes için daha basit, daha akıllı ve daha erişilebilir kılma vizyonuyla kuruldu." },
  aboutP2: { en: "We believe software should not only be powerful but also intuitive. Every product we build is designed with performance, usability, and clean design in mind.", tr: "Yazılımın yalnızca güçlü değil, aynı zamanda sezgisel olması gerektiğine inanıyoruz. Ürettiğimiz her ürün, performans, kullanılabilirlik ve temiz tasarım odaklıdır." },
  aboutP3: { en: "Whether you're translating web pages, managing sports leagues, organizing finances, or exploring future AI tools, DeepGok aims to deliver reliable experiences across multiple platforms.", tr: "İster web sayfalarını çeviriyor, ister spor ligleri yönetiyor, ister finanslarınızı düzenliyor olun, DeepGok birden çok platformda güvenilir deneyimler sunmayı hedefler." },
  productsTitle: { en: "Products", tr: "Ürünler" },
  servicesTitle: { en: "Services", tr: "Hizmetler" },
  servicesDesc: { en: "DeepGok provides software development services including:", tr: "DeepGok aşağıdaki yazılım geliştirme hizmetlerini sunar:" },
  techTitle: { en: "Technology Stack", tr: "Teknoloji" },
  techDesc: { en: "Depending on the project, we use modern technologies such as:", tr: "Projeye bağlı olarak, aşağıdaki modern teknolojileri kullanıyoruz:" },
  designTitle: { en: "Design Philosophy", tr: "Tasarım Felsefesi" },
  designDesc: { en: "Every DeepGok product follows several core principles:", tr: "Her DeepGok ürünü birkaç temel prensibi takip eder:" },
  opensourceTitle: { en: "Open Source", tr: "Açık Kaynak" },
  opensourceP1: { en: "Some DeepGok projects are open source and available on GitHub.", tr: "Bazı DeepGok projeleri açık kaynaklıdır ve GitHub'da bulunabilir." },
  opensourceP2: { en: "We welcome bug reports, feature requests, and community contributions whenever applicable.", tr: "Hata raporlarını, özellik taleplerini ve topluluk katkılarını memnuniyetle karşılıyoruz." },
  opensourceCTA: { en: "Visit GitHub", tr: "GitHub'ı Ziyaret Et" },
  issuesTitle: { en: "Reporting Issues", tr: "Hata Bildirimi" },
  issuesDesc: { en: "If you discover a bug or unexpected behavior, please include:", tr: "Bir hata veya beklenmeyen davranış keşfederseniz, lütfen şunları ekleyin:" },
  issuesHelp: { en: "This helps us resolve issues more efficiently.", tr: "Bu, sorunları daha verimli çözmemize yardımcı olur." },
  updatesTitle: { en: "Updates", tr: "Güncellemeler" },
  updatesDesc: { en: "DeepGok products receive updates regularly. Updates may include:", tr: "DeepGok ürünleri düzenli olarak güncellenir. Güncellemeler şunları içerebilir:" },
  updatesNote: { en: "We recommend always using the latest version of our software.", tr: "Yazılımımızın her zaman en son sürümünü kullanmanızı öneririz." },
  faqTitle: { en: "Frequently Asked Questions", tr: "Sıkça Sorulan Sorular" },
  contactTitle: { en: "Contact", tr: "İletişim" },
  contactDesc: { en: "For questions, feedback, business inquiries, or collaboration opportunities, please visit:", tr: "Sorular, geri bildirimler, iş teklifleri veya işbirliği fırsatları için lütfen ziyaret edin:" },
  thanksText: { en: "Thank you for using DeepGok. We appreciate your support and look forward to building software that makes technology easier for everyone.", tr: "DeepGok'u kullandığınız için teşekkür ederiz. Desteğinizi takdir ediyor ve teknolojiyi herkes için daha kolay hale getiren yazılımlar geliştirmek için sabırsızlanıyoruz." },
  // Products
  gokLangDesc: { en: "GokLang is a modern browser extension that helps users overcome language barriers while browsing the web.", tr: "GokLang, kullanıcıların web'de gezinirken dil engellerini aşmasına yardımcı olan modern bir tarayıcı eklentisidir." },
  gokLeagueDesc: { en: "GokLeague is a platform designed for creating and managing leagues, tournaments, and competitions.", tr: "GokLeague, ligler, turnuvalar ve yarışmalar oluşturmak ve yönetmek için tasarlanmış bir platformdur." },
  gokBillDesc: { en: "GokBill is a finance and expense management application that helps users organize their daily spending.", tr: "GokBill, kullanıcıların günlük harcamalarını düzenlemesine yardımcı olan bir finans ve gider yönetimi uygulamasıdır." },
  gokBallDesc: { en: "GokBall is an online multiplayer football game currently under development.", tr: "GokBall, şu anda geliştirme aşamasında olan çevrimiçi bir çok oyunculu futbol oyunudur." },
  features: { en: "Features", tr: "Özellikler" },
  inDev: { en: "In Development", tr: "Geliştirme Aşamasında" },
  visit: { en: "Visit", tr: "Ziyaret Et" },
  // Services
  webDev: { en: "Web Development", tr: "Web Geliştirme" },
  mobileDev: { en: "Mobile Application Development", tr: "Mobil Uygulama Geliştirme" },
  extDev: { en: "Chrome Extension Development", tr: "Chrome Eklenti Geliştirme" },
  aiSolutions: { en: "AI-powered Software Solutions", tr: "AI Destekli Yazılım Çözümleri" },
  uiUx: { en: "UI/UX Design", tr: "UI/UX Tasarım" },
  arch: { en: "Software Architecture", tr: "Yazılım Mimarisi" },
  productDev: { en: "Product Development", tr: "Ürün Geliştirme" },
  // Design principles
  simplicity: { en: "Simplicity", tr: "Sadelik" },
  speed: { en: "Speed", tr: "Hız" },
  accessibility: { en: "Accessibility", tr: "Erişilebilirlik" },
  performance: { en: "Performance", tr: "Performans" },
  security: { en: "Security", tr: "Güvenlik" },
  modernDesign: { en: "Modern Design", tr: "Modern Tasarım" },
  continuousImp: { en: "Continuous Improvement", tr: "Sürekli İyileştirme" },
  // Issues
  productName: { en: "Product name", tr: "Ürün adı" },
  browserOS: { en: "Browser or operating system", tr: "Tarayıcı veya işletim sistemi" },
  stepsRepro: { en: "Steps to reproduce", tr: "Tekrarlama adımları" },
  expected: { en: "Expected behavior", tr: "Beklenen davranış" },
  actual: { en: "Actual behavior", tr: "Gerçekleşen davranış" },
  screenshots: { en: "Screenshots (if available)", tr: "Ekran görüntüleri (varsa)" },
  // Updates
  newFeatures: { en: "New features", tr: "Yeni özellikler" },
  perfImprove: { en: "Performance improvements", tr: "Performans iyileştirmeleri" },
  secFixes: { en: "Security fixes", tr: "Güvenlik düzeltmeleri" },
  uiEnhance: { en: "UI enhancements", tr: "UI iyileştirmeleri" },
  bugFixes: { en: "Bug fixes", tr: "Hata düzeltmeleri" },
  // FAQ
  faq1Q: { en: "Is DeepGok free?", tr: "DeepGok ücretsiz mi?" },
  faq1A: { en: "Some products are completely free, while others may include optional premium features in the future.", tr: "Bazı ürünler tamamen ücretsizdir, bazıları ise gelecekte isteğe bağlı premium özellikler içerebilir." },
  faq2Q: { en: "Which platforms are supported?", tr: "Hangi platformlar destekleniyor?" },
  faq2A: { en: "Support depends on each product. Current platforms include Web and Google Chrome. Additional platforms may be introduced over time.", tr: "Destek her ürüne göre değişir. Mevcut platformlar Web ve Google Chrome'dur. Zamanla ek platformlar eklenebilir." },
  faq3Q: { en: "Can I contribute?", tr: "Katkıda bulunabilir miyim?" },
  faq3A: { en: "Yes. If a project is open source, contributions are welcome through GitHub.", tr: "Evet. Bir proje açık kaynaklıysa, GitHub üzerinden katkılar memnuniyetle karşılanır." },
  faq4Q: { en: "How can I report a bug?", tr: "Bir hatayı nasıl bildirebilirim?" },
  faq4A: { en: "Please use the project's GitHub Issues page or contact us through our website.", tr: "Lütfen projenin GitHub Issues sayfasını kullanın veya web sitemiz üzerinden bize ulaşın." },
  // GokLang features
  glf1: { en: "Translate entire web pages", tr: "Tüm web sayfalarını çevir" },
  glf2: { en: "Translate selected text", tr: "Seçili metni çevir" },
  glf3: { en: "Manual text translation", tr: "Manuel metin çevirisi" },
  glf4: { en: "Multiple language support", tr: "Çoklu dil desteği" },
  glf5: { en: "Fast and lightweight interface", tr: "Hızlı ve hafif arayüz" },
  glf6: { en: "Modern popup design", tr: "Modern popup tasarımı" },
  // GokLeague features
  glfL1: { en: "League management", tr: "Lig yönetimi" },
  glfL2: { en: "Match scheduling", tr: "Maç programlama" },
  glfL3: { en: "Team organization", tr: "Takım organizasyonu" },
  glfL4: { en: "Statistics", tr: "İstatistikler" },
  glfL5: { en: "Rankings", tr: "Sıralamalar" },
  glfL6: { en: "Easy administration", tr: "Kolay yönetim" },
  // GokBill features
  glfB1: { en: "Expense tracking", tr: "Gider takibi" },
  glfB2: { en: "Income management", tr: "Gelir yönetimi" },
  glfB3: { en: "Financial overview", tr: "Finansal görünüm" },
  glfB4: { en: "Budget monitoring", tr: "Bütçe takibi" },
  glfB5: { en: "Clean dashboard", tr: "Temiz gösterge paneli" },
  // GokBall features
  glfBa1: { en: "Competitive gameplay", tr: "Rekabetçi oynanış" },
  glfBa2: { en: "Fast-paced matches", tr: "Hızlı tempolu maçlar" },
  glfBa3: { en: "Multiplayer experience", tr: "Çok oyunculu deneyim" },
  glfBa4: { en: "Smooth controls", tr: "Akıcı kontroller" },
  glfBa5: { en: "Modern architecture", tr: "Modern mimari" },
};

const sidebarSections = [
  { id: "welcome", key: "welcome" },
  { id: "about", key: "about" },
  { id: "products", key: "products" },
  { id: "services", key: "services" },
  { id: "technology", key: "technology" },
  { id: "design", key: "design" },
  { id: "opensource", key: "opensource" },
  { id: "issues", key: "issues" },
  { id: "updates", key: "updates" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
];

const serviceList = [
  { icon: Globe, key: "webDev" },
  { icon: SmartphoneIcon, key: "mobileDev" },
  { icon: PuzzleIcon, key: "extDev" },
  { icon: BrainIcon, key: "aiSolutions" },
  { icon: Palette, key: "uiUx" },
  { icon: Layers, key: "arch" },
  { icon: Sparkles, key: "productDev" },
];

const designPrinciples = [
  { icon: Sparkles, key: "simplicity" },
  { icon: Gauge, key: "speed" },
  { icon: Globe, key: "accessibility" },
  { icon: Zap, key: "performance" },
  { icon: Shield, key: "security" },
  { icon: Palette, key: "modernDesign" },
  { icon: RefreshCw, key: "continuousImp" },
];

const issueItems = ["productName", "browserOS", "stepsRepro", "expected", "actual", "screenshots"];

const updateItems = [
  { icon: Sparkles, key: "newFeatures" },
  { icon: Gauge, key: "perfImprove" },
  { icon: Shield, key: "secFixes" },
  { icon: Palette, key: "uiEnhance" },
  { icon: Zap, key: "bugFixes" },
];

const faqItems = [
  { q: "faq1Q", a: "faq1A" },
  { q: "faq2Q", a: "faq2A" },
  { q: "faq3Q", a: "faq3A" },
  { q: "faq4Q", a: "faq4A" },
];

export default function DocumentationPage() {
  const { scrollYProgress } = useScroll();
  const { lang } = useLanguage();
  const l = (x: LangContent) => x[lang];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const bar = document.getElementById("doc-progress-bar");
      if (bar) bar.style.transform = `scaleX(${v})`;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div id="doc-progress-bar" className="fixed top-0 left-0 right-0 h-[1.5px] bg-primary/20 origin-left z-50" style={{ transform: "scaleX(0)" }} />
      <div className="min-h-screen bg-background">
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/home" className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="DeepGok" className="h-7 w-auto" />
              <span className="font-heading text-lg font-semibold tracking-tight text-white">Deep<span className="text-primary">Gok</span></span>
              <span className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary/80">
                <BookOpen className="w-3 h-3" />{l(t.docs)}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a href="/home" className="text-sm text-white/40 hover:text-white transition-colors duration-200">{l(t.home)}</a>
              <LanguageSwitcher />
              <a href="https://github.com/GokayAktas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Github className="w-4 h-4" /><span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </nav>

        <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-white/[0.04] overflow-y-auto hidden lg:block">
          <div className="px-8 py-6 space-y-1">
            {sidebarSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/[0.03] transition-all duration-200">
                <ChevronRight className="w-3 h-3 text-primary/40" />{l(t.sidebar(s.key))}
              </a>
            ))}
          </div>
        </aside>

        <main className="pt-16 lg:pl-64">
          <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            {/* WELCOME */}
            <section id="welcome" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-medium text-white/40 tracking-wider uppercase mb-6">
                  <Sparkles className="w-3 h-3 text-primary" />{l(t.welcomeBadge)}
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  {lang === "en" ? "Welcome to " : ""}<span className="text-primary">DeepGok</span>
                  {lang === "tr" ? "'a Hoş Geldiniz" : ""}
                </h1>
                <div className="max-w-none">
                  <p className="text-base sm:text-lg text-white/40 leading-relaxed">{l(t.welcomeText)}</p>
                </div>
                <div className="mt-8 relative">
                  <div className="absolute -inset-4 rounded-2xl bg-primary/[0.02] border border-primary/[0.06]" />
                  <blockquote className="relative p-6 sm:p-8 text-center">
                    <div className="w-8 h-[1.5px] bg-primary/30 mx-auto mb-6" />
                    <p className="font-heading text-xl sm:text-2xl font-bold text-white/80 leading-snug">
                      &ldquo;{l(t.motto1)} <span className="text-primary">{l(t.motto2)}</span>&rdquo;
                    </p>
                    <div className="w-8 h-[1.5px] bg-primary/30 mx-auto mt-6" />
                  </blockquote>
                </div>
              </motion.div>
            </section>

            {/* ABOUT */}
            <section id="about" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><FileText className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.aboutTitle)}</h2>
                </div>
                <div className="space-y-4 text-white/40 leading-relaxed text-sm sm:text-base">
                  <p>{l(t.aboutP1)}</p>
                  <p>{l(t.aboutP2)}</p>
                  <p>{l(t.aboutP3)}</p>
                </div>
              </motion.div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Layers className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.productsTitle)}</h2>
                </div>
                <div className="space-y-10">
                  <ProductCard logo={goklangLogo} name="GokLang" color="text-yellow-400" bgColor="bg-yellow-400/10"
                    description={l(t.gokLangDesc)}
                    features={[l(t.glf1), l(t.glf2), l(t.glf3), l(t.glf4), l(t.glf5), l(t.glf6)]}
                    platform="Google Chrome" link="https://github.com/GokayAktas/GokLang" featuresLabel={l(t.features)} visitLabel={l(t.visit)} />
                  <ProductCard logo={gokleagueLogo} name="GokLeague" color="text-emerald-400" bgColor="bg-emerald-400/10"
                    description={l(t.gokLeagueDesc)}
                    features={[l(t.glfL1), l(t.glfL2), l(t.glfL3), l(t.glfL4), l(t.glfL5), l(t.glfL6)]}
                    platform="Web" link="https://gokleague.lovable.app" featuresLabel={l(t.features)} visitLabel={l(t.visit)} />
                  <ProductCard logo={gokbillLogo} name="GokBill" color="text-blue-400" bgColor="bg-blue-400/10"
                    description={l(t.gokBillDesc)}
                    features={[l(t.glfB1), l(t.glfB2), l(t.glfB3), l(t.glfB4), l(t.glfB5)]}
                    platform="Web" link="https://gokbill.lovable.app" featuresLabel={l(t.features)} visitLabel={l(t.visit)} />
                  <ProductCard logo={gokballLogo} name="GokBall" color="text-purple-400" bgColor="bg-purple-400/10"
                    description={l(t.gokBallDesc)}
                    features={[l(t.glfBa1), l(t.glfBa2), l(t.glfBa3), l(t.glfBa4), l(t.glfBa5)]}
                    platform={lang === "en" ? "Desktop" : "Masaüstü"} link="https://gokball.vercel.app"
                    featuresLabel={l(t.features)} visitLabel={l(t.visit)} development developmentLabel={l(t.inDev)} />
                </div>
              </motion.div>
            </section>

            {/* SERVICES */}
            <section id="services" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Code2 className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.servicesTitle)}</h2>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{l(t.servicesDesc)}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceList.map((svc, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-200">
                      <svc.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-white/60">{l(t[svc.key as keyof typeof t] as unknown as LangContent)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* TECHNOLOGY */}
            <section id="technology" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Database className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.techTitle)}</h2>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{l(t.techDesc)}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <TechStackCard title="Frontend" items={["HTML", "CSS", "JavaScript", "React", "Next.js"]} />
                  <TechStackCard title="Backend" items={["Node.js", "Express"]} />
                  <TechStackCard title={lang === "en" ? "Database" : "Veritabanı"} items={["Firebase", "Supabase", "MongoDB"]} />
                  <TechStackCard title={lang === "en" ? "Deployment" : "Dağıtım"} items={["Vercel", "GitHub"]} />
                </div>
              </motion.div>
            </section>

            {/* DESIGN */}
            <section id="design" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Palette className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.designTitle)}</h2>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{l(t.designDesc)}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {designPrinciples.map((p, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-200 text-center">
                      <p.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-white/60">{l(t[p.key as keyof typeof t] as unknown as LangContent)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* OPEN SOURCE */}
            <section id="opensource" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Github className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.opensourceTitle)}</h2>
                </div>
                <div className="space-y-4 text-white/40 leading-relaxed text-sm sm:text-base">
                  <p>{l(t.opensourceP1)}</p>
                  <p>{l(t.opensourceP2)}</p>
                </div>
                <a href="https://github.com/GokayAktas" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-200">
                  <Github className="w-4 h-4" />{l(t.opensourceCTA)}<ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </section>

            {/* ISSUES */}
            <section id="issues" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.issuesTitle)}</h2>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{l(t.issuesDesc)}</p>
                <div className="space-y-3">
                  {issueItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-medium text-primary">{i + 1}</span>
                      </div>
                      <span className="text-sm text-white/50">{l(t[item as keyof typeof t] as unknown as LangContent)}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/30 italic">{l(t.issuesHelp)}</p>
              </motion.div>
            </section>

            {/* UPDATES */}
            <section id="updates" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><RefreshCw className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.updatesTitle)}</h2>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{l(t.updatesDesc)}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {updateItems.map((upd, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      <upd.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-white/50">{l(t[upd.key as keyof typeof t] as unknown as LangContent)}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/30">{l(t.updatesNote)}</p>
              </motion.div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><HelpCircle className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.faqTitle)}</h2>
                </div>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <FaqCard key={i}
                      question={l(t[item.q as keyof typeof t] as unknown as LangContent)}
                      answer={l(t[item.a as keyof typeof t] as unknown as LangContent)}
                    />
                  ))}
                </div>
              </motion.div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{l(t.contactTitle)}</h2>
                </div>
                <div className="space-y-4 text-sm text-white/40 leading-relaxed mb-8">
                  <p>{l(t.contactDesc)}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="/home" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />deepgok.vercel.app
                  </a>
                  <a href="mailto:contact.deepgok@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] text-white/60 text-sm font-medium hover:border-white/[0.2] hover:text-white transition-all duration-200">
                    <Mail className="w-4 h-4" />contact.deepgok@gmail.com
                  </a>
                </div>
              </motion.div>
            </section>

            {/* THANK YOU */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center pt-12 pb-8 border-t border-white/[0.04]">
              <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center"><img src="/favicon.svg" alt="DeepGok" className="w-7 h-7" /></div>
              <p className="text-sm text-white/30 leading-relaxed max-w-md mx-auto mb-4">{l(t.thanksText)}</p>
              <div className="space-y-1">
                <p className="font-heading text-base font-semibold text-white">Deep<span className="text-primary">Gok</span></p>
                <p className="text-xs text-white/20 italic">{l(t.motto1)} {l(t.motto2)}</p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}

/* Sub-components */
function SmartphoneIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>;
}

function PuzzleIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.706 2.404 2.404 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.404 2.404 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.968 1.02Z" />
  </svg>;
}

function BrainIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3.25 2.5 2.5 0 0 0-1.66 3.76 2.5 2.5 0 0 0 2.02 4.95 2.5 2.5 0 0 0 4.24 2.52" />
    <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3.25 2.5 2.5 0 0 1 1.66 3.76 2.5 2.5 0 0 1-2.02 4.95 2.5 2.5 0 0 1-4.24 2.52" />
    <path d="M12 4.5V2" /><path d="M12 22v-2.5" /><path d="M4.5 12H2" /><path d="M22 12h-2.5" />
  </svg>;
}

function ProductCard({ logo, name, color, bgColor, description, features, platform, link, featuresLabel, visitLabel, development, developmentLabel }: {
  logo: any; name: string; color: string; bgColor: string; description: string; features: string[];
  platform: string; link: string; featuresLabel: string; visitLabel: string; development?: boolean; developmentLabel?: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-300">
      <div className="flex items-start gap-4 mb-5">
        <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0 overflow-hidden p-2 relative`}>
          <Image src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-heading text-lg font-semibold text-white">{name}</h3>
            {development && developmentLabel && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-[10px] font-medium text-yellow-400/80">{developmentLabel}</span>
            )}
          </div>
          <p className="mt-2 text-sm text-white/40 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="mb-5">
        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">{featuresLabel}</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.04] bg-white/[0.01]">
              <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
              <span className="text-xs text-white/50">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/30"><Zap className="w-3 h-3" />{platform}</span>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-primary transition-colors duration-200">
          {visitLabel} {name}<ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

function TechStackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <h4 className="font-heading text-sm font-semibold text-white mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center px-2.5 py-1 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[11px] font-medium text-white/40">{item}</span>
        ))}
      </div>
    </div>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-200 open:border-primary/20 open:bg-primary/[0.02]">
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <ChevronRight className="w-4 h-4 text-white/30 group-open:rotate-90 transition-transform duration-200" />
      </summary>
      <div className="px-5 pb-4"><p className="text-sm text-white/40 leading-relaxed">{answer}</p></div>
    </details>
  );
}
