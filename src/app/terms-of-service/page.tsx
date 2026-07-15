"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronRight, ExternalLink, Mail, BookOpen } from "lucide-react";
import { useScroll } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type LC = { en: string; tr: string };
const lc = (en: string, tr: string): LC => ({ en, tr });

const t = {
  docs: lc("Docs", "Döküman"),
  home: lc("Home", "Ana Sayfa"),
  badge: lc("Legal", "Yasal"),
  title1: lc("Terms of", "Hizmet"),
  title2: lc("Service", "Koşulları"),
  lastUpdated: lc("Last Updated", "Son Güncelleme"),
  welcome1: lc("Welcome to DeepGok. These Terms of Service govern your access to and use of DeepGok's website, applications, browser extensions, and related services.", "DeepGok'a hoş geldiniz. Bu Hizmet Koşulları, DeepGok'un web sitesine, uygulamalarına, tarayıcı eklentilerine ve ilgili hizmetlerine erişiminizi ve kullanımınızı düzenler."),
  welcome2: lc("By accessing or using our services, you agree to be bound by these Terms.", "Hizmetlerimize erişerek veya kullanarak, bu Koşullara bağlı kalmayı kabul edersiniz."),
  welcomeNote: lc("If you do not agree with these Terms, please do not use our services.", "Bu Koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayın."),
  s1Title: lc("1. Eligibility", "1. Uygunluk"),
  s1P1: lc("You must comply with all applicable laws and regulations while using our services.", "Hizmetlerimizi kullanırken tüm geçerli yasa ve yönetmeliklere uymalısınız."),
  s1P2: lc("You are responsible for ensuring that your use of DeepGok is lawful in your jurisdiction.", "DeepGok'u kullanımınızın kendi yetki alanınızda yasal olmasını sağlamak sizin sorumluluğunuzdadır."),
  s2Title: lc("2. Use of Our Services", "2. Hizmetlerimizin Kullanımı"),
  s2P1: lc("You agree to use our services only for lawful purposes.", "Hizmetlerimizi yalnızca yasal amaçlar için kullanmayı kabul edersiniz."),
  s2P2: lc("You must not:", "Şunları yapmamalısınız:"),
  s2Items: [lc("Violate any applicable law", "Herhangi bir geçerli yasayı ihlal etmek"), lc("Interfere with service operation", "Hizmet işleyişine müdahale etmek"), lc("Attempt unauthorized access", "Yetkisiz erişim girişiminde bulunmak"), lc("Distribute malware", "Kötü amaçlı yazılım dağıtmak"), lc("Abuse or exploit vulnerabilities", "Güvenlik açıklarını kötüye kullanmak"), lc("Reverse engineer software where prohibited", "Yasak olduğu durumlarda yazılımı tersine mühendislik yapmak"), lc("Use our services to harm others", "Hizmetlerimizi başkalarına zarar vermek için kullanmak")],
  s3Title: lc("3. Intellectual Property", "3. Fikri Mülkiyet"),
  s3P1: lc("Unless otherwise stated, all content provided by DeepGok, including but not limited to:", "Aksi belirtilmedikçe, DeepGok tarafından sağlanan aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere tüm içerik:"),
  s3Items: [lc("Logos", "Logolar"), lc("Branding", "Marka"), lc("Graphics", "Grafikler"), lc("Interface designs", "Arayüz tasarımları"), lc("Documentation", "Dokümantasyon"), lc("Source code", "Kaynak kodu"), lc("Product names", "Ürün adları")],
  s3P2: lc("is the property of DeepGok or its licensors and is protected by applicable intellectual property laws.", "DeepGok'un veya lisans verenlerinin mülkiyetindedir ve geçerli fikri mülkiyet yasaları tarafından korunmaktadır."),
  s3Note: lc("Open-source projects remain subject to their respective licenses.", "Açık kaynaklı projeler, ilgili lisanslarına tabidir."),
  s4Title: lc("4. User Content", "4. Kullanıcı İçeriği"),
  s4P1: lc("If you submit feedback, suggestions, or bug reports, you grant DeepGok the right to use that information to improve our products without obligation or compensation.", "Geri bildirim, öneri veya hata raporları gönderirseniz, DeepGok'a bu bilgileri ürünlerimizi iyileştirmek için yükümlülük veya tazminat olmaksızın kullanma hakkı verirsiniz."),
  s4P2: lc("You remain responsible for any content you submit.", "Gönderdiğiniz herhangi bir içerikten siz sorumlu olmaya devam edersiniz."),
  s5Title: lc("5. Availability", "5. Kullanılabilirlik"),
  s5P1: lc("We strive to keep our services available at all times.", "Hizmetlerimizi her zaman kullanılabilir durumda tutmaya çalışıyoruz."),
  s5P2: lc("However, we do not guarantee uninterrupted or error-free operation.", "Ancak, kesintisiz veya hatasız çalışmayı garanti etmiyoruz."),
  s5Note: lc("Services may be modified, suspended, or discontinued at any time without prior notice.", "Hizmetler önceden haber verilmeksizin herhangi bir zamanda değiştirilebilir, askıya alınabilir veya durdurulabilir."),
  s6Title: lc("6. Third-Party Services", "6. Üçüncü Taraf Hizmetleri"),
  s6P1: lc("Our services may include links to third-party websites or platforms.", "Hizmetlerimiz, üçüncü taraf web sitelerine veya platformlarına bağlantılar içerebilir."),
  s6P2: lc("DeepGok is not responsible for the availability, content, or practices of third-party services.", "DeepGok, üçüncü taraf hizmetlerinin kullanılabilirliği, içeriği veya uygulamalarından sorumlu değildir."),
  s7Title: lc("7. Disclaimer", "7. Sorumluluk Reddi"),
  s7P1: lc('Our services are provided on an "AS IS" and "AS AVAILABLE" basis.', 'Hizmetlerimiz "OLDUĞU GİBİ" ve "MÜSAİT OLDUĞU ÖLÇÜDE" esasına göre sağlanmaktadır.'),
  s7P2: lc("To the fullest extent permitted by law, DeepGok disclaims all warranties, whether express or implied, including but not limited to:", "Yasaların izin verdiği azami ölçüde, DeepGok, açık veya zımni, aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere tüm garantileri reddeder:"),
  s7Items: [lc("Merchantability", "Satılabilirlik"), lc("Fitness for a particular purpose", "Belirli bir amaca uygunluk"), lc("Non-infringement", "İhlal etmeme")],
  s7Note: lc("We do not guarantee that our services will always be secure, uninterrupted, or free from errors.", "Hizmetlerimizin her zaman güvenli, kesintisiz veya hatasız olacağını garanti etmiyoruz."),
  s8Title: lc("8. Limitation of Liability", "8. Sorumluluğun Sınırlandırılması"),
  s8Intro: lc("To the maximum extent permitted by law, DeepGok shall not be liable for:", "Yasaların izin verdiği azami ölçüde, DeepGok aşağıdakilerden sorumlu tutulamaz:"),
  s8Items: [lc("Indirect damages", "Dolaylı zararlar"), lc("Incidental damages", "Tesadüfi zararlar"), lc("Consequential damages", "Sonuçsal zararlar"), lc("Loss of profits", "Kâr kaybı"), lc("Data loss", "Veri kaybı"), lc("Business interruption", "İş kesintisi")],
  s8Note: lc("arising from the use of our services.", "hizmetlerimizin kullanımından kaynaklanan."),
  s9Title: lc("9. Termination", "9. Fesih"),
  s9P1: lc("We reserve the right to suspend or terminate access to our services if these Terms are violated or if necessary to protect our services and users.", "Bu Koşullar ihlal edildiğinde veya hizmetlerimizi ve kullanıcılarımızı korumak için gerekli olması halinde, hizmetlerimize erişimi askıya alma veya sonlandırma hakkını saklı tutarız."),
  s10Title: lc("10. Changes to These Terms", "10. Bu Koşullarda Değişiklikler"),
  s10P1: lc("We may revise these Terms at any time.", "Bu Koşulları herhangi bir zamanda değiştirebiliriz."),
  s10Note: lc("Continued use of our services after changes become effective constitutes acceptance of the updated Terms.", "Değişiklikler yürürlüğe girdikten sonra hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş Koşulları kabul ettiğiniz anlamına gelir."),
  s11Title: lc("11. Governing Law", "11. Geçerli Hukuk"),
  s11P1: lc("These Terms shall be governed by and interpreted in accordance with the applicable laws of the jurisdiction in which DeepGok operates, without regard to conflict of law principles.", "Bu Koşullar, kanun ihtilafı prensipleri dikkate alınmaksızın, DeepGok'un faaliyet gösterdiği yetki alanının geçerli yasalarına göre yönetilecek ve yorumlanacaktır."),
  s12Title: lc("12. Contact", "12. İletişim"),
  s12Intro: lc("Questions regarding these Terms may be submitted through:", "Bu Koşullarla ilgili sorular aşağıdaki yollarla iletilmelidir:"),
  thanksText: lc("Thank you for using DeepGok.", "DeepGok'u kullandığınız için teşekkür ederiz."),
  motto1: lc("Infinite Depth.", "Sonsuz Derinlik."),
  motto2: lc("Infinite Possibilities.", "Sonsuz Olasılık."),
};

export default function TermsOfServicePage() {
  const { scrollYProgress } = useScroll();
  const { lang } = useLanguage();
  const l = (x: LC) => x[lang];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const bar = document.getElementById("tos-progress-bar");
      if (bar) bar.style.transform = `scaleX(${v})`;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div id="tos-progress-bar" className="fixed top-0 left-0 right-0 h-[1.5px] bg-primary/20 origin-left z-50" style={{ transform: "scaleX(0)" }} />
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
                <FileText className="w-3 h-3 text-primary" />{l(t.badge)}
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
                <p className="text-sm font-medium text-white/50">{l(t.welcomeNote)}</p>
              </Section>

              <Section title={l(t.s1Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s1P1)}</p>
                <p className="text-sm text-white/30">{l(t.s1P2)}</p>
              </Section>

              <Section title={l(t.s2Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s2P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s2P2)}</p>
                <ul className="space-y-2">
                  {t.s2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
                      {l(item)}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title={l(t.s3Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s3P1)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s3Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s3P2)}</p>
                <p className="text-sm text-white/30 italic mt-3">{l(t.s3Note)}</p>
              </Section>

              <Section title={l(t.s4Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s4P1)}</p>
                <p className="text-sm text-white/30">{l(t.s4P2)}</p>
              </Section>

              <Section title={l(t.s5Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s5P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s5P2)}</p>
                <p className="text-sm text-white/30 italic">{l(t.s5Note)}</p>
              </Section>

              <Section title={l(t.s6Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s6P1)}</p>
                <p className="text-sm text-white/30">{l(t.s6P2)}</p>
              </Section>

              <Section title={l(t.s7Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s7P1)}</p>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s7P2)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s7Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30 italic">{l(t.s7Note)}</p>
              </Section>

              <Section title={l(t.s8Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s8Intro)}</p>
                <ul className="space-y-2 mb-4">
                  {t.s8Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />{l(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/30">{l(t.s8Note)}</p>
              </Section>

              <Section title={l(t.s9Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s9P1)}</p>
              </Section>

              <Section title={l(t.s10Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base mb-3">{l(t.s10P1)}</p>
                <p className="text-sm text-white/30 italic">{l(t.s10Note)}</p>
              </Section>

              <Section title={l(t.s11Title)}>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base">{l(t.s11P1)}</p>
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
