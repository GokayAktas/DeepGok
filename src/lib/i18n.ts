export const languages = ["en", "tr"] as const;
export type Language = (typeof languages)[number];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.dna": "DNA",
    "nav.colors": "Colors",
    "nav.guidelines": "Guidelines",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "Brand Kit v1.0",
    "hero.title": "DeepGok Brand Kit™",
    "hero.subtitle": "A premium design language built for humans and AI.",
    "hero.description":
      "Consistent, minimal, and thoughtfully crafted. Every color, every curve, every space — designed with intention.",
    "hero.explore": "Explore",
    "hero.github": "GitHub",

    // About
    "about.label": "About",
    "about.title": "What is DeepGok Brand Kit?",
    "about.p1":
      "DeepGok Brand Kit is a personal design system built for clarity and consistency. It defines how visual elements work together — from color and typography to spacing and composition. Every decision serves a single purpose: make the work feel premium without being loud.",
    "about.p2":
      "Designed primarily for dark interfaces, the kit uses a restrained blue palette on deep navy backgrounds. The result is a visual language that is recognizable, purposeful, and easy to apply across different contexts — from UI components to brand communications.",
    "about.identity": "Identity",

    // DNA
    "dna.label": "DeepGok DNA",
    "dna.title": "The Principles",
    "dna.subtitle":
      "Four principles guide every decision in the DeepGok Brand Kit.",
    "dna.card1.title": "Recognizable",
    "dna.card1.desc":
      "A distinct visual identity that stands out. The blue-on-dark palette creates an instantly recognizable signature.",
    "dna.card2.title": "Purposeful",
    "dna.card2.desc":
      "Nothing is accidental. Every element has a reason to exist, every pixel serves a clear intent.",
    "dna.card3.title": "Premium",
    "dna.card3.desc":
      "Refined details, thoughtful spacing, and polished surfaces. Quality that speaks without words.",
    "dna.card4.title": "Timeless",
    "dna.card4.desc":
      "Built to last. Classic proportions, restrained choices, and a design language that doesn't chase trends.",

    // Color Palette
    "colors.label": "Color Palette",
    "colors.title": "Colors",
    "colors.subtitle":
      "A restrained blue palette. Click any HEX value to copy it.",
    "colors.copied": "Copied",
    "colors.primary": "Primary",
    "colors.secondary": "Secondary",
    "colors.accent": "Accent",
    "colors.darkNavy": "Dark Navy",
    "colors.background": "Background",
    "colors.white": "White",

    // Logo Guidelines
    "guidelines.label": "Logo Guidelines",
    "guidelines.title": "Logo Usage",
    "guidelines.subtitle":
      "Guidelines to keep the brand mark consistent and recognizable.",
    "guidelines.do": "Do",
    "guidelines.dont": "Don't",
    "guidelines.do1": "One dominant object",
    "guidelines.do2": "Rounded geometry",
    "guidelines.do3": "Soft gradients",
    "guidelines.do4": "Premium materials",
    "guidelines.do5": "Minimal composition",
    "guidelines.dont1": "Clipart",
    "guidelines.dont2": "Emoji style",
    "guidelines.dont3": "Photorealism",
    "guidelines.dont4": "Harsh neon",
    "guidelines.dont5": "Visual clutter",

    // Footer
    "footer.brand": "DeepGok Brand Kit™",
    "footer.tagline": "A design language for humans and AI.",
    "footer.copyright": "© {year} DeepGok. All rights reserved.",
  },

  tr: {
    // Navbar
    "nav.about": "Hakkında",
    "nav.dna": "DNA",
    "nav.colors": "Renkler",
    "nav.guidelines": "Kurallar",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "Marka Kiti v1.0",
    "hero.title": "DeepGok Marka Kiti™",
    "hero.subtitle":
      "İnsanlar ve yapay zekalar için tasarlanmış premium bir tasarım dili.",
    "hero.description":
      "Tutarlı, minimal ve özenle hazırlanmış. Her renk, her eğri, her boşluk — bilinçli tasarlandı.",
    "hero.explore": "Keşfet",
    "hero.github": "GitHub",

    // About
    "about.label": "Hakkında",
    "about.title": "DeepGok Marka Kiti Nedir?",
    "about.p1":
      "DeepGok Marka Kiti, netlik ve tutarlılık için oluşturulmuş kişisel bir tasarım sistemidir. Renkten tipografiye, boşluktan kompozisyona kadar görsel öğelerin nasıl bir arada çalıştığını tanımlar. Her karar tek bir amaca hizmet eder: işi gösterişe kaçmadan premium hissettirmek.",
    "about.p2":
      "Öncelikle koyu arayüzler için tasarlanan kit, koyu lacivert zeminler üzerinde sade bir mavi paleti kullanır. Sonuç, UI bileşenlerinden marka iletişimine kadar farklı bağlamlarda kolayca uygulanabilen, tanınabilir ve amaçlı bir görsel dildir.",
    "about.identity": "Kimlik",

    // DNA
    "dna.label": "DeepGok DNA",
    "dna.title": "Prensipler",
    "dna.subtitle":
      "Dört prensip, DeepGok Marka Kiti'ndeki her kararı yönlendirir.",
    "dna.card1.title": "Tanınabilir",
    "dna.card1.desc":
      "Öne çıkan belirgin bir görsel kimlik. Koyu zemin üzerindeki mavi palet, anında tanınan bir imza oluşturur.",
    "dna.card2.title": "Amaçlı",
    "dna.card2.desc":
      "Hiçbir şey tesadüfi değildir. Her öğenin var olmak için bir nedeni, her pikselin net bir amacı vardır.",
    "dna.card3.title": "Premium",
    "dna.card3.desc":
      "İnce detaylar, özenli boşluklar ve cilalı yüzeyler. Söze gerek bırakmayan kalite.",
    "dna.card4.title": "Zamansız",
    "dna.card4.desc":
      "Kalıcı olmak için inşa edildi. Klasik oranlar, ölçülü seçimler ve trendlerin peşinden koşmayan bir tasarım dili.",

    // Color Palette
    "colors.label": "Renk Paleti",
    "colors.title": "Renkler",
    "colors.subtitle":
      "Ölçülü bir mavi paleti. HEX değerine tıklayarak kopyalayın.",
    "colors.copied": "Kopyalandı",
    "colors.primary": "Ana Renk",
    "colors.secondary": "İkincil Renk",
    "colors.accent": "Vurgu Rengi",
    "colors.darkNavy": "Koyu Lacivert",
    "colors.background": "Arka Plan",
    "colors.white": "Beyaz",

    // Logo Guidelines
    "guidelines.label": "Logo Kuralları",
    "guidelines.title": "Logo Kullanımı",
    "guidelines.subtitle":
      "Marka işaretini tutarlı ve tanınabilir tutmak için kurallar.",
    "guidelines.do": "Yap",
    "guidelines.dont": "Yapma",
    "guidelines.do1": "Tek bir baskın nesne",
    "guidelines.do2": "Yuvarlatılmış geometri",
    "guidelines.do3": "Yumuşak geçişler",
    "guidelines.do4": "Premium malzemeler",
    "guidelines.do5": "Minimal kompozisyon",
    "guidelines.dont1": "Küçük resim",
    "guidelines.dont2": "Emoji tarzı",
    "guidelines.dont3": "Fotorealizm",
    "guidelines.dont4": "Sert neon",
    "guidelines.dont5": "Görsel karmaşa",

    // Footer
    "footer.brand": "DeepGok Marka Kiti™",
    "footer.tagline": "İnsanlar ve yapay zeka için bir tasarım dili.",
    "footer.copyright": "© {year} DeepGok. Tüm hakları saklıdır.",
  },
};

export function t(key: string, lang: Language, vars?: Record<string, string | number>): string {
  let text = translations[lang][key] ?? translations["en"][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}
