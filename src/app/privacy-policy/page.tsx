"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, ChevronRight, ExternalLink, Mail, BookOpen } from "lucide-react";
import { useScroll } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type LC = { en: string; tr: string };
const lc = (en: string, tr: string): LC => ({ en, tr });

const t = {
  docs: lc("Docs", "Döküman"),
  home: lc("Home", "Ana Sayfa"),
  badge: lc("Legal", "Yasal"),
  title1: lc("Privacy", "Gizlilik"),
  title2: lc("Policy", "Politikası"),
  lastUpdated: lc("Last Updated", "Son Güncelleme"),
  welcome1: lc("Welcome to DeepGok. Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when you use our website, applications, browser extensions, and other services provided by DeepGok.", "DeepGok'a hoş geldiniz. Gizliliğiniz bizim için önemlidir. Bu Gizlilik Politikası, web sitemizi, uygulamalarımızı, tarayıcı eklentilerimizi ve diğer hizmetlerimizi kullanırken hangi bilgileri topladığımızı, bunları nasıl kullandığımızı ve bilgilerinizle ilgili seçeneklerinizi açıklar."),
  welcome2: lc("By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.", "Hizmetlerimizi kullanarak, bu Gizlilik Politikası uyarınca bilgilerin toplanmasını ve kullanılmasını kabul etmiş olursunuz."),
  s1Title: lc("1. About DeepGok", "1. DeepGok Hakkında"),
  s1P1: lc("DeepGok is an independent software studio developing web applications, browser extensions, mobile applications, and AI-powered software solutions.", "DeepGok, web uygulamaları, tarayıcı eklentileri, mobil uygulamalar ve yapay zeka destekli yazılım çözümleri geliştiren bağımsız bir yazılım stüdyosudur."),
  s1P2: lc("Our mission is to create software that is fast, intuitive, secure, and accessible.", "Misyonumuz, hızlı, sezgisel, güvenli ve erişilebilir yazılımlar oluşturmaktır."),
  s2Title: lc("2. Information We Collect", "2. Topladığımız Bilgiler"),
  s2Intro: lc("Depending on the service you use, we may collect:", "Kullandığınız hizmete bağlı olarak şunları toplayabiliriz:"),
  s2Sub1: lc("Information You Provide", "Sağladığınız Bilgiler"),
  s2Items: [lc("Name", "Ad"), lc("Email address", "E-posta adresi"), lc("Messages sent through contact forms", "İletişim formları aracılığıyla gönderilen mesajlar"), lc("Feedback", "Geri bildirim"), lc("Bug reports", "Hata raporları")],
  s2Voluntary: lc("Providing this information is voluntary.", "Bu bilgileri sağlamak isteğe bağlıdır."),
  s2Sub2: lc("Automatically Collected Information", "Otomatik Toplanan Bilgiler"),
  s2AutoIntro: lc("When visiting our website, we may automatically collect:", "Web sitemizi ziyaret ederken otomatik olarak şunları toplayabiliriz:"),
  s2AutoItems: [lc("Browser type", "Tarayıcı türü"), lc("Device information", "Cihaz bilgisi"), lc("Operating system", "İşletim sistemi"), lc("Language preference", "Dil tercihi"), lc("IP address", "IP adresi"), lc("Pages visited", "Ziyaret edilen sayfalar"), lc("Time spent on pages", "Sayfalarda geçirilen süre"), lc("Referring website", "Yönlendiren web sitesi")],
  s2AutoNote: lc("This information is used solely for improving our services.", "Bu bilgiler yalnızca hizmetlerimizi iyileştirmek için kullanılır."),
  s3Title: lc("3. Cookies", "3. Çerezler"),
  s3Intro: lc("Our website may use cookies and similar technologies to:", "Web sitemiz, şunlar için çerezler ve benzer teknolojiler kullanabilir:"),
  s3Items: [lc("Remember preferences", "Tercihleri hatırlama"), lc("Improve website performance", "Web sitesi performansını iyileştirme"), lc("Analyze traffic", "Trafiği analiz etme"), lc("Enhance user experience", "Kullanıcı deneyimini geliştirme")],
  s3Note: lc("You may disable cookies through your browser settings.", "Çerezleri tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz."),
  s4Title: lc("4. Analytics", "4. Analitik"),
  s4P1: lc("We may use third-party analytics services to better understand how our website is used.", "Web sitemizin nasıl kullanıldığını daha iyi anlamak için üçüncü taraf analitik hizmetleri kullanabiliriz."),
  s4P2: lc("These services may collect anonymous usage information such as:", "Bu hizmetler, aşağıdakiler gibi anonim kullanım bilgileri toplayabilir:"),
  s4Items: [lc("Visited pages", "Ziyaret edilen sayfalar"), lc("Device type", "Cihaz türü"), lc("Browser version", "Tarayıcı sürümü"), lc("Session duration", "Oturum süresi")],
  s4Note: lc("We do not use analytics to identify individual users.", "Analitiği bireysel kullanıcıları tanımlamak için kullanmayız."),
  s5Title: lc("5. How We Use Information", "5. Bilgileri Kullanma Şeklimiz"),
  s5Intro: lc("Information may be used to:", "Bilgiler şunlar için kullanılabilir:"),
  s5Items: [lc("Provide our services", "Hizmetlerimizi sağlama"), lc("Improve product quality", "Ürün kalitesini iyileştirme"), lc("Respond to inquiries", "Soruları yanıtlama"), lc("Fix bugs", "Hataları düzeltme"), lc("Enhance security", "Güvenliği artırma"), lc("Detect abuse", "Kötüye kullanımı tespit etme"), lc("Maintain website performance", "Web sitesi performansını koruma")],
  s5Note: lc("We do not sell your personal information.", "Kişisel bilgilerinizi satmıyoruz."),
  s6Title: lc("6. Browser Extensions", "6. Tarayıcı Eklentileri"),
  s6P1: lc("Some DeepGok browser extensions may require specific browser permissions in order to function properly.", "Bazı DeepGok tarayıcı eklentileri, düzgün çalışması için belirli tarayıcı izinleri gerektirebilir."),
  s6P2: lc("Permissions are requested only when necessary for the intended functionality.", "İzinler yalnızca amaçlanan işlevsellik için gerekli olduğunda istenir."),
  s6Note: lc("We do not intentionally collect personal browsing data unless explicitly required for a feature you choose to use.", "Kullanmayı seçtiğiniz bir özellik için açıkça gerekli olmadıkça, kişisel gezinme verilerini kasıtlı olarak toplamayız."),
  s7Title: lc("7. Third-Party Services", "7. Üçüncü Taraf Hizmetleri"),
  s7P1: lc("Our services may contain links to third-party websites.", "Hizmetlerimiz üçüncü taraf web sitelerine bağlantılar içerebilir."),
  s7P2: lc("DeepGok is not responsible for the privacy practices of external websites or services.", "DeepGok, harici web sitelerinin veya hizmetlerinin gizlilik uygulamalarından sorumlu değildir."),
  s7Note: lc("We encourage users to review the privacy policies of any third-party services they visit.", "Kullanıcıları, ziyaret ettikleri üçüncü taraf hizmetlerinin gizlilik politikalarını incelemeye teşvik ediyoruz."),
  s8Title: lc("8. Data Security", "8. Veri Güvenliği"),
  s8P1: lc("We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.", "Bilgilerinizi yetkisiz erişim, ifşa, değiştirme veya imhadan korumak için makul teknik ve organizasyonel önlemler alıyoruz."),
  s8Note: lc("However, no internet transmission or electronic storage method is completely secure.", "Ancak, hiçbir internet iletimi veya elektronik depolama yöntemi tamamen güvenli değildir."),
  s9Title: lc("9. Children's Privacy", "9. Çocukların Gizliliği"),
  s9P1: lc("Our services are not directed toward children under the age required by applicable law.", "Hizmetlerimiz, geçerli yasaların gerektirdiği yaşın altındaki çocuklara yönelik değildir."),
  s9P2: lc("We do not knowingly collect personal information from children.", "Çocuklardan bilerek kişisel bilgi toplamıyoruz."),
  s9Note: lc("If you believe a child has provided personal information, please contact us so we can remove the information.", "Bir çocuğun kişisel bilgi sağladığına inanıyorsanız, bilgileri kaldırabilmemiz için lütfen bizimle iletişime geçin."),
  s10Title: lc("10. Your Rights", "10. Haklarınız"),
  s10Intro: lc("Depending on your jurisdiction, you may have the right to:", "Yetki alanınıza bağlı olarak, aşağıdaki haklara sahip olabilirsiniz:"),
  s10Items: [lc("Access your information", "Bilgilerinize erişme"), lc("Correct inaccurate information", "Yanlış bilgileri düzeltme"), lc("Request deletion", "Silme talebinde bulunma"), lc("Restrict processing", "İşlemeyi kısıtlama"), lc("Object to certain processing activities", "Belirli işleme faaliyetlerine itiraz etme")],
  s10Note: lc("Requests will be handled within a reasonable timeframe.", "Talepler makul bir süre içinde işleme alınacaktır."),
  s11Title: lc("11. Changes to This Policy", "11. Bu Politikada Değişiklikler"),
  s11P1: lc("We may update this Privacy Policy from time to time.", "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz."),
  s11P2: lc("The updated version becomes effective immediately after publication on this page.", "Güncellenen sürüm, bu sayfada yayımlandıktan hemen sonra yürürlüğe girer."),
  s11Note: lc('The "Last Updated" date will always indicate the latest revision.', '"Son Güncelleme" tarihi her zaman en son revizyonu belirtecektir.'),
  s12Title: lc("12. Contact", "12. İletişim"),
  s12Intro: lc("If you have questions regarding this Privacy Policy, please contact us through:", "Bu Gizlilik Politikası ile ilgili sorularınız varsa, lütfen aşağıdaki yollarla bizimle iletişime geçin:"),
  thanksText: lc("Thank you for trusting DeepGok.", "DeepGok'a güvendiğiniz için teşekkür ederiz."),
  motto1: lc("Infinite Depth.", "Sonsuz Derinlik."),
  motto2: lc("Infinite Possibilities.", "Sonsuz Olasılık."),
};

export default function PrivacyPolicyPage() {
  const { scrollYProgress } = useScroll();
  const { lang } = useLanguage();
  const l = (x: LC) => x[lang];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const bar = document.getElementById("pp-progress-bar");
      if (bar) bar.style.transform = `scaleX(${v})`;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div id="pp-progress-bar" className="fixed top-0 left-0 right-0 h-[1.5px] bg-primary/20 origin-left z-50" style={{ transform: "scaleX(0)" }} />
      <div className="min-h-screen bg-background">
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/home" className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="DeepGok" className="h-7 w-auto" />
              <span className="font-heading text-lg font-semibold tracking-tight text-white">Deep<span className="text-primary">Gok</span></span>
            </a>
            <div className="flex items-center gap-4">
              <a href="/home" className="text-sm text-white/40 hover:text-white transition-colors duration-200">{l(t.home)}</a>
              <LanguageSwitcher />
              <a href="/documentation" className="text-sm text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />{l(t.docs)}
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-medium text-white/40 tracking-wider uppercase mb-6">
                <Shield className="w-3 h-3 text-primary" />{l(t.badge)}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                {l(t.title1)} <span className="text-primary">{l(t.title2)}</span>
              </h1>
              <p className="text-sm text-white/30"><strong>{l(t.lastUpdated)}:</strong> July 15, 2026</p>
            </motion.div>

            <div className="space-y-12">
              <Section>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.welcome1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.welcome2)}</p>
              </Section>

              <Section title={l(t.s1Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s1P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s1P2)}</p>
              </Section>

              <Section title={l(t.s2Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-4">{l(t.s2Intro)}</p>
                <h4 className="font-heading text-sm font-semibold text-white/60 mb-3">{l(t.s2Sub1)}</h4>
                <ul className="space-y-2 mb-6">
                  {t.s2Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30 italic">{l(t.s2Voluntary)}</p>
                <h4 className="font-heading text-sm font-semibold text-white/60 mb-3 mt-6">{l(t.s2Sub2)}</h4>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s2AutoIntro)}</p>
                <ul className="space-y-2">
                  {t.s2AutoItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30 italic mt-3">{l(t.s2AutoNote)}</p>
              </Section>

              <Section title={l(t.s3Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s3Intro)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s3Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30">{l(t.s3Note)}</p>
              </Section>

              <Section title={l(t.s4Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s4P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s4P2)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s4Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30 italic">{l(t.s4Note)}</p>
              </Section>

              <Section title={l(t.s5Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s5Intro)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s5Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-white/50">{l(t.s5Note)}</p>
              </Section>

              <Section title={l(t.s6Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s6P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s6P2)}</p>
                <p className="text-sm text-white/30 italic">{l(t.s6Note)}</p>
              </Section>

              <Section title={l(t.s7Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s7P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s7P2)}</p>
                <p className="text-sm text-white/30 italic mt-3">{l(t.s7Note)}</p>
              </Section>

              <Section title={l(t.s8Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s8P1)}</p>
                <p className="text-sm text-white/30 italic">{l(t.s8Note)}</p>
              </Section>

              <Section title={l(t.s9Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s9P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s9P2)}</p>
                <p className="text-sm text-white/30">{l(t.s9Note)}</p>
              </Section>

              <Section title={l(t.s10Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s10Intro)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s10Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30">{l(t.s10Note)}</p>
              </Section>

              <Section title={l(t.s11Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s11P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s11P2)}</p>
                <p className="text-sm text-white/30">{l(t.s11Note)}</p>
              </Section>

              <Section title={l(t.s12Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-6">{l(t.s12Intro)}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/home" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />deepgok.vercel.app
                  </a>
                  <a href="mailto:contact.deepgok@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] text-white/60 text-sm font-medium hover:border-white/[0.2] hover:text-white transition-all duration-200">
                    <Mail className="w-4 h-4" />contact.deepgok@gmail.com
                  </a>
                </div>
              </Section>

              <div className="text-center pt-12 pb-8 border-t border-white/[0.04]">
                <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <img src="/favicon.svg" alt="DeepGok" className="w-7 h-7" />
                </div>
                <p className="text-sm text-white/30 max-w-md mx-auto mb-4">{l(t.thanksText)}</p>
                <div className="space-y-1">
                  <p className="font-heading text-base font-semibold text-white">Deep<span className="text-primary">Gok</span></p>
                  <p className="text-xs text-white/20 italic">{l(t.motto1)} {l(t.motto2)}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      {title && <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">{title}</h2>}
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}
