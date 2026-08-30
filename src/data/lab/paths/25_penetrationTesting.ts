import { PathItem } from '../../../types/lab';

export const penetrationTestingPath: PathItem = {
  id: "path-25",
  code: "25",
  slug: "penetration-testing",
  title: "SIZMA TESTİ METODOLOJİSİ",
  shortTitle: "PENTEST",
  tagline: "Profesyonel saldırı simülasyonu ve etik hackerlerin metodolojisi.",
  description: "PTES, OWASP Testing Guide, Kali Linux araçları, raporlama ve müşteri bağlantısı.",
  accentColor: "#DC2626",
  level: "PRACTICAL",
  order: 25,
  modules: [
    {
      id: "mod-25-01",
      code: "01",
      slug: "pentest-methodology",
      pathSlug: "penetration-testing",
      title: "SIZMA TESTİ STANDARTLARI VE METODOLOJİ",
      description: "Saldırı simülasyonu aşamaları ve profesyonel süreç yönetimi.",
      order: 1,
      topics: [
        {
          id: "top-25-01-01",
          code: "01",
          slug: "ptes-framework",
          pathSlug: "penetration-testing",
          moduleSlug: "pentest-methodology",
          title: "PTES (Penetration Testing Execution Standard) Çerçevesi",
          subtitle: "Etik Hackerlığın 7 Standart Adımı",
          shortDescription: "Anlaşmadan raporlamaya kadar profesyonel sızma testinin safhaları.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. PTES NEDİR?", content: "PTES (Penetration Testing Execution Standard), sızma testi uzmanlarının ve kurumların yüksek kalitede, standartlaştırılmış bir güvenlik testi yapması için oluşturulmuş kapsamlı metodolojidir." },
            { id: "sec-02", code: "02", title: "2. ADIM 1: PRE-ENGAGEMENT INTERACTIONS", content: "Kapsam (Scope) belirleme, izin belgeleri, test zamanlaması ve kuralların (Rules of Engagement) müşteri ile imzalanması." },
            { id: "sec-03", code: "03", title: "3. ADIM 2: INTELLIGENCE GATHERING (OSINT)", content: "Hedef hakkında açık kaynaklardan bilgi toplama (Subdomain, E-posta, IP blokları, Teknoloji yığını)." },
            { id: "sec-04", code: "04", title: "4. ADIM 3: THREAT MODELING", content: "Toplanan verilere göre hedefin en zayıf halkasını ve saldırı senaryolarını belirleme." },
            { id: "sec-05", code: "05", title: "5. ADIM 4: VULNERABILITY ANALYSIS", content: "Otomatize tarayıcılar (Nessus, Nmap, Burp) ve manuel kontrollerle zafiyetlerin tespiti." },
            { id: "sec-06", code: "06", title: "6. ADIM 5: EXPLOITATION", content: "Zafiyetlerin gerçek bir saldırgan gibi istismar edilerek doğrulanması." },
            { id: "sec-07", code: "07", title: "7. ADIM 6: POST-EXPLOITATION", content: "Sistemde kalıcılık sağlama (Persistence), yetki yükseltme (Privilege Escalation) ve yatay ilerleme (Lateral Movement)." },
            { id: "sec-08", code: "08", title: "8. ADIM 7: REPORTING", content: "Bulguların yönetici özeti (Executive Summary) ve teknik detaylar olarak raporlanması." },
            { id: "sec-09", code: "09", title: "9. RULES OF ENGAGEMENT (ROE) KRİTİKLİĞİ", content: "Sızma testi ile yasadışı hacking arasındaki yasal çizgi ıslak imzalı izin belgesidir." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Sızma testi rastgele araç çalıştırmak değil, metodolojik bir süreç takibidir." }
          ],
          summary: ["PTES 7 ana safhadan oluşur.", "Rules of Engagement yasal güvencedir."],
          practice: {
            id: "prac-25-01-01",
            prompt: "PTES metodolojisinde test kurallarının ve izinlerin müşteri ile netleştirildiği ilk adım hangisidir?",
            options: [
              { id: "a", text: "Exploitation" },
              { id: "b", text: "Intelligence Gathering" },
              { id: "c", text: "Pre-engagement Interactions" },
              { id: "d", text: "Threat Modeling" }
            ],
            correctAnswer: "c",
            explanation: "Pre-engagement Interactions safhasında anlaşma, kapsam (scope) ve izinler resmi olarak belirlenir."
          }
        }
      ]
    }
  ]
};
