export const languages = ["en", "tr"] as const;
export type Language = (typeof languages)[number];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // ========== Brand Kit ==========

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

    // Footer (Brand Kit)
    "footer.brand": "DeepGok Brand Kit™",
    "footer.tagline": "A design language for humans and AI.",
    "footer.copyright": "© {year} DeepGok. All rights reserved.",

    // ========== Home Page ==========

    // Home Navbar
    "home.nav.home": "Home",
    "home.nav.products": "Products",
    "home.nav.brandKit": "Brand Kit",
    "home.nav.about": "About",
    "home.nav.contact": "Contact",
    "home.nav.github": "GitHub",

    // Home Hero
    "home.hero.subtitle": "DeepGok",
    "home.hero.title1": "Infinite Depth.",
    "home.hero.title2": "Infinite Possibilities.",
    "home.hero.description":
      "We create intelligent software, AI-powered tools and digital experiences that make technology simpler for everyone.",
    "home.hero.cta1": "Explore Products",
    "home.hero.cta2": "Brand Kit",

    // Home Products
    "home.products.label": "Products",
    "home.products.title": "What We Build",
    "home.products.subtitle":
      "Every product we build reflects our commitment to quality, simplicity, and thoughtful design.",
    "home.products.learnMore": "Learn More",
    "home.products.gokLang": "GokLang",
    "home.products.gokLangDesc":
      "AI-powered browser extension for seamless website translation.",
    "home.products.gokLangStatus": "Coming Soon",
    "home.products.gokBall": "GokBall",
    "home.products.gokBallDesc":
      "Modern online football game focused on fun and competition.",
    "home.products.gokBallStatus": "In Development",
    "home.products.gokLeague": "GokLeague",
    "home.products.gokLeagueDesc":
      "League and tournament management platform.",
    "home.products.gokLeagueStatus": "Available",
    "home.products.gokBill": "GokBill",
    "home.products.gokBillDesc":
      "Simple billing and invoice management solution.",
    "home.products.gokBillStatus": "Available",
    "home.products.keyFeatures": "Key Features",

    // Product Details
    "home.products.gokLang.detail1": "Instant website translation in 100+ languages",
    "home.products.gokLang.detail2": "AI-powered natural language processing for accurate translations",
    "home.products.gokLang.detail3": "Seamless integration — works with every website",
    "home.products.gokLang.detail4": "Lightweight extension that won't slow down your browser",
    "home.products.gokLang.detail5": "Privacy-first — no data stored or shared",
    "home.products.gokLang.detailDesc": "GokLang is an intelligent browser extension that breaks down language barriers. Powered by advanced AI, it translates websites in real-time while preserving the original layout and design. Whether you're browsing foreign news, researching global topics, or communicating across borders, GokLang makes the web accessible in your language.",
    "home.products.gokBall.detail1": "Real-time multiplayer matches with friends or players worldwide",
    "home.products.gokBall.detail2": "Multiple game modes — quick play, tournaments, and custom matches",
    "home.products.gokBall.detail3": "Competitive ranking system with leaderboards and seasons",
    "home.products.gokBall.detail4": "Cross-platform play — desktop, tablet, and mobile",
    "home.products.gokBall.detail5": "Regular content updates with new features and events",
    "home.products.gokBall.detailDesc": "GokBall is a modern online football game designed for fast-paced fun and competitive play. Jump into quick matches, join tournaments, or create custom games with your friends. With smooth gameplay, vibrant visuals, and a thriving community, GokBall brings the excitement of the pitch to your screen.",
    "home.products.gokLeague.detail1": "Create and manage leagues, tournaments, and seasons",
    "home.products.gokLeague.detail2": "Automated scheduling, scoring, and standings",
    "home.products.gokLeague.detail3": "Live leaderboards, statistics, and team profiles",
    "home.products.gokLeague.detail4": "Team and player management with role-based access",
    "home.products.gokLeague.detail5": "Integrated payment processing for registration fees",
    "home.products.gokLeague.detailDesc": "GokLeague is a comprehensive platform for organizing and managing sports leagues and tournaments. From automated scheduling to live standings and team communication, GokLeague handles the complexity so you can focus on the game. Built for clubs, schools, and professional organizations alike.",
    "home.products.gokBill.detail1": "Create and send professional invoices in seconds",
    "home.products.gokBill.detail2": "Track payments, overdue bills, and payment history",
    "home.products.gokBill.detail3": "Manage expenses, categories, and budgets",
    "home.products.gokBill.detail4": "Customer management with contact history and notes",
    "home.products.gokBill.detail5": "Reports, analytics, and export options",
    "home.products.gokBill.detailDesc": "GokBill is a straightforward billing and invoice management solution designed for small businesses and freelancers. Create professional invoices, track payments, manage expenses, and get clear financial insights — all in one clean, intuitive interface. No complexity, just the tools you need.",

    // Home What We Build
    "home.what.label": "Expertise",
    "home.what.title": "What We Build",
    "home.what.subtitle":
      "From AI to mobile — we craft digital products that solve real problems.",
    "home.what.card1": "AI Solutions",
    "home.what.card1Desc": "Intelligent tools powered by machine learning and artificial intelligence.",
    "home.what.card2": "Web Applications",
    "home.what.card2Desc": "Modern, responsive web apps built for performance and scale.",
    "home.what.card3": "Mobile Applications",
    "home.what.card3Desc": "Native and cross-platform mobile experiences with clean design.",
    "home.what.card4": "Browser Extensions",
    "home.what.card4Desc": "Lightweight extensions that extend browser capabilities.",
    "home.what.card5": "SaaS Products",
    "home.what.card5Desc": "Cloud-based software solutions for businesses and individuals.",
    "home.what.card6": "Developer Tools",
    "home.what.card6Desc": "Tools and libraries that make development faster and easier.",

    // Home Why DeepGok
    "home.why.label": "Why DeepGok",
    "home.why.title": "Our Values",
    "home.why.subtitle":
      "Four principles that define how we think, build, and deliver.",
    "home.why.card1": "Simplicity",
    "home.why.card1Desc": "We believe the best solutions are the simplest ones. Every feature, every line of code — purposeful.",
    "home.why.card2": "Performance",
    "home.why.card2Desc": "Speed is not a feature, it's a foundation. We optimize for fast, reliable experiences.",
    "home.why.card3": "Innovation",
    "home.why.card3Desc": "We stay ahead by exploring new ideas and embracing emerging technologies.",
    "home.why.card4": "AI First",
    "home.why.card4Desc": "Artificial intelligence is at the core of our products, making them smarter and more intuitive.",

    // Home Brand Kit
    "home.brandKit.label": "Brand Kit",
    "home.brandKit.title": "A Unified Design Language",
    "home.brandKit.desc":
      "Every DeepGok product shares the same visual DNA. The Brand Kit defines our colors, typography, spacing, and design principles — ensuring a consistent, premium experience across everything we build.",
    "home.brandKit.cta": "Explore Brand Kit",

    // Home Vision
    "home.vision.statement": "Building software that people love to use every day.",
    "home.vision.desc":
      "Our long-term vision is to create high-quality software that is recognized and used by millions around the world. We are building a future where technology is intuitive, accessible, and truly helpful.",

    // Home Contact
    "home.contact.title": "Let's build the future together.",
    "home.contact.github": "GitHub",
    "home.contact.email": "Email",

    // Home Footer
    "home.footer.company": "Company",
    "home.footer.about": "About",
    "home.footer.brandKit": "Brand Kit",
    "home.footer.contact": "Contact",
    "home.footer.products": "Products",
    "home.footer.gokLang": "GokLang",
    "home.footer.gokBall": "GokBall",
    "home.footer.gokLeague": "GokLeague",
    "home.footer.gokBill": "GokBill",
    "home.footer.resources": "Resources",
    "home.footer.github": "GitHub",
    "home.footer.docs": "Documentation",
    "home.footer.legal": "Legal",
    "home.footer.privacy": "Privacy",
    "home.footer.terms": "Terms",
    "home.footer.copyright": "© {year} DeepGok. All rights reserved.",
  },

  tr: {
    // ========== Brand Kit ==========

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

    // Footer (Brand Kit)
    "footer.brand": "DeepGok Marka Kiti™",
    "footer.tagline": "İnsanlar ve yapay zeka için bir tasarım dili.",
    "footer.copyright": "© {year} DeepGok. Tüm hakları saklıdır.",

    // ========== Home Page ==========

    // Home Navbar
    "home.nav.home": "Ana Sayfa",
    "home.nav.products": "Ürünler",
    "home.nav.brandKit": "Marka Kiti",
    "home.nav.about": "Hakkında",
    "home.nav.contact": "İletişim",
    "home.nav.github": "GitHub",

    // Home Hero
    "home.hero.subtitle": "DeepGok",
    "home.hero.title1": "Sonsuz Derinlik.",
    "home.hero.title2": "Sonsuz Olasılık.",
    "home.hero.description":
      "Akıllı yazılımlar, yapay zeka destekli araçlar ve dijital deneyimler üreterek teknolojiyi herkes için daha basit hale getiriyoruz.",
    "home.hero.cta1": "Ürünleri Keşfet",
    "home.hero.cta2": "Marka Kiti",

    // Home Products
    "home.products.label": "Ürünler",
    "home.products.title": "Neler Üretiyoruz",
    "home.products.subtitle":
      "Ürettiğimiz her ürün, kaliteye, sadeliğe ve düşünülmüş tasarıma olan bağlılığımızı yansıtır.",
    "home.products.learnMore": "Detaylı Bilgi",
    "home.products.gokLang": "GokLang",
    "home.products.gokLangDesc":
      "Yapay zeka destekli, web sitelerini anında çeviren tarayıcı eklentisi.",
    "home.products.gokLangStatus": "Çok Yakında",
    "home.products.gokBall": "GokBall",
    "home.products.gokBallDesc":
      "Eğlence ve rekabet odaklı modern çevrimiçi futbol oyunu.",
    "home.products.gokBallStatus": "Geliştirme Aşamasında",
    "home.products.gokLeague": "GokLeague",
    "home.products.gokLeagueDesc":
      "Lig ve turnuva yönetim platformu.",
    "home.products.gokLeagueStatus": "Kullanıma Hazır",
    "home.products.gokBill": "GokBill",
    "home.products.gokBillDesc":
      "Basit fatura ve envanter yönetim çözümü.",
    "home.products.gokBillStatus": "Kullanıma Hazır",
    "home.products.keyFeatures": "Öne Çıkan Özellikler",

    // Product Details
    "home.products.gokLang.detail1": "100'den fazla dilde anında web sitesi çevirisi",
    "home.products.gokLang.detail2": "Doğru çeviriler için yapay zeka destekli doğal dil işleme",
    "home.products.gokLang.detail3": "Sorunsuz entegrasyon — her web sitesiyle çalışır",
    "home.products.gokLang.detail4": "Tarayıcınızı yavaşlatmayan hafif eklenti",
    "home.products.gokLang.detail5": "Gizlilik odaklı — hiçbir veri depolanmaz veya paylaşılmaz",
    "home.products.gokLang.detailDesc": "GokLang, dil engellerini ortadan kaldıran akıllı bir tarayıcı eklentisidir. Gelişmiş yapay zeka ile desteklenen eklenti, web sitelerini gerçek zamanlı olarak çevirirken orijinal düzeni ve tasarımı korur. İster yabancı haberler okuyun, ister küresel konuları araştırın — GokLang web'i sizin dilinizde erişilebilir kılar.",
    "home.products.gokBall.detail1": "Arkadaşlarınızla veya dünyanın dört bir yanındaki oyuncularla gerçek zamanlı maçlar",
    "home.products.gokBall.detail2": "Çoklu oyun modları — hızlı oyun, turnuvalar ve özel maçlar",
    "home.products.gokBall.detail3": "Liderlik tabloları ve sezonlarla rekabetçi sıralama sistemi",
    "home.products.gokBall.detail4": "Çapraz platform desteği — masaüstü, tablet ve mobil",
    "home.products.gokBall.detail5": "Yeni özellikler ve etkinliklerle düzenli içerik güncellemeleri",
    "home.products.gokBall.detailDesc": "GokBall, hızlı tempolu eğlence ve rekabetçi oyun için tasarlanmış modern bir çevrimiçi futbol oyunudur. Hızlı maçlara atlayın, turnuvalara katılın veya arkadaşlarınızla özel oyunlar oluşturun. Akıcı oynanışı, canlı görselleri ve gelişen topluluğuyla GokBall, sahanın heyecanını ekranınıza taşır.",
    "home.products.gokLeague.detail1": "Lig, turnuva ve sezon oluşturma ve yönetme",
    "home.products.gokLeague.detail2": "Otomatik programlama, puanlama ve sıralama",
    "home.products.gokLeague.detail3": "Canlı liderlik tabloları, istatistikler ve takım profilleri",
    "home.products.gokLeague.detail4": "Rol tabanlı erişimle takım ve oyuncu yönetimi",
    "home.products.gokLeague.detail5": "Kayıt ücretleri için entegre ödeme işleme",
    "home.products.gokLeague.detailDesc": "GokLeague, spor ligleri ve turnuvaları düzenlemek için kapsamlı bir platformdur. Otomatik programlamadan canlı sıralamalara ve takım iletişimine kadar GokLeague, karmaşıklığı üstlenir ve sizin oyuna odaklanmanızı sağlar. Kulüpler, okullar ve profesyonel organizasyonlar için tasarlanmıştır.",
    "home.products.gokBill.detail1": "Saniyeler içinde profesyonel fatura oluşturma ve gönderme",
    "home.products.gokBill.detail2": "Ödemeleri, gecikmiş faturaları ve ödeme geçmişini takip etme",
    "home.products.gokBill.detail3": "Gider, kategori ve bütçe yönetimi",
    "home.products.gokBill.detail4": "İletişim geçmişi ve notlar ile müşteri yönetimi",
    "home.products.gokBill.detail5": "Raporlar, analizler ve dışa aktarma seçenekleri",
    "home.products.gokBill.detailDesc": "GokBill, küçük işletmeler ve serbest çalışanlar için tasarlanmış basit bir fatura ve envanter yönetim çözümüdür. Profesyonel faturalar oluşturun, ödemeleri takip edin, giderleri yönetin ve net finansal içgörüler elde edin — hepsi tek bir temiz ve sezgisel arayüzde. Karmaşıklık yok, sadece ihtiyacınız olan araçlar.",

    // Home What We Build
    "home.what.label": "Uzmanlık",
    "home.what.title": "Neler Üretiyoruz",
    "home.what.subtitle":
      "Yapay zekadan mobil uygulamalara — gerçek sorunları çözen dijital ürünler geliştiriyoruz.",
    "home.what.card1": "AI Çözümleri",
    "home.what.card1Desc": "Makine öğrenimi ve yapay zeka destekli akıllı araçlar.",
    "home.what.card2": "Web Uygulamaları",
    "home.what.card2Desc": "Performans ve ölçeklenebilirlik için üretilmiş modern web uygulamaları.",
    "home.what.card3": "Mobil Uygulamalar",
    "home.what.card3Desc": "Temiz tasarıma sahip yerli ve çapraz platform mobil deneyimler.",
    "home.what.card4": "Tarayıcı Eklentileri",
    "home.what.card4Desc": "Tarayıcı yeteneklerini genişleten hafif eklentiler.",
    "home.what.card5": "SaaS Ürünleri",
    "home.what.card5Desc": "İşletmeler ve bireyler için bulut tabanlı yazılım çözümleri.",
    "home.what.card6": "Geliştirici Araçları",
    "home.what.card6Desc": "Geliştirmeyi hızlandıran ve kolaylaştıran araçlar ve kütüphaneler.",

    // Home Why DeepGok
    "home.why.label": "Neden DeepGok",
    "home.why.title": "Değerlerimiz",
    "home.why.subtitle":
      "Nasıl düşündüğümüzü, ürettiğimizi ve teslim ettiğimizi tanımlayan dört ilke.",
    "home.why.card1": "Sadelik",
    "home.why.card1Desc": "En iyi çözümler en basit olanlardır. Her özellik, her satır kod — amaçlı.",
    "home.why.card2": "Performans",
    "home.why.card2Desc": "Hız bir özellik değil, bir temeldir. Hızlı ve güvenilir deneyimler için optimize ediyoruz.",
    "home.why.card3": "Yenilikçilik",
    "home.why.card3Desc": "Yeni fikirleri keşfederek ve gelişen teknolojileri benimseyerek önde kalıyoruz.",
    "home.why.card4": "AI Öncelikli",
    "home.why.card4Desc": "Yapay zeka, ürünlerimizin merkezinde yer alır; onları daha akıllı ve daha sezgisel hale getirir.",

    // Home Brand Kit
    "home.brandKit.label": "Marka Kiti",
    "home.brandKit.title": "Birleşik Bir Tasarım Dili",
    "home.brandKit.desc":
      "Her DeepGok ürünü aynı görsel DNA'yı paylaşır. Marka Kiti; renklerimizi, tipografimizi, boşluklarımızı ve tasarım prensiplerimizi tanımlar — ürettiğimiz her şeyde tutarlı ve premium bir deneyim sağlar.",
    "home.brandKit.cta": "Marka Kiti'ni Keşfet",

    // Home Vision
    "home.vision.statement": "İnsanların her gün kullanmayı seveceği yazılımlar üretiyoruz.",
    "home.vision.desc":
      "Uzun vadeli vizyonumuz, dünya çapında milyonlarca kişi tarafından tanınan ve kullanılan yüksek kaliteli yazılımlar oluşturmak. Teknolojinin sezgisel, erişilebilir ve gerçekten yardımcı olduğu bir gelecek inşa ediyoruz.",

    // Home Contact
    "home.contact.title": "Geleceği birlikte inşa edelim.",
    "home.contact.github": "GitHub",
    "home.contact.email": "E-posta",

    // Home Footer
    "home.footer.company": "Şirket",
    "home.footer.about": "Hakkında",
    "home.footer.brandKit": "Marka Kiti",
    "home.footer.contact": "İletişim",
    "home.footer.products": "Ürünler",
    "home.footer.gokLang": "GokLang",
    "home.footer.gokBall": "GokBall",
    "home.footer.gokLeague": "GokLeague",
    "home.footer.gokBill": "GokBill",
    "home.footer.resources": "Kaynaklar",
    "home.footer.github": "GitHub",
    "home.footer.docs": "Dokümantasyon",
    "home.footer.legal": "Yasal",
    "home.footer.privacy": "Gizlilik",
    "home.footer.terms": "Koşullar",
    "home.footer.copyright": "© {year} DeepGok. Tüm hakları saklıdır.",
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
