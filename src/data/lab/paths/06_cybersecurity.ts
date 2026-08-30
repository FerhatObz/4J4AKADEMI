import { PathItem } from '../../../types/lab';

export const cybersecurityPath: PathItem = {
  id: "path-06",
  code: "06",
  slug: "cybersecurity-fundamentals",
  title: "CYBERSECURITY FUNDAMENTALS",
  shortTitle: "CYBERSECURITY",
  tagline: "CIA üçlüsü, tehdit modelleme, saldırı yüzeyi ve savunma ilkeleri.",
  description: "Gizlilik, Bütünlük, Erişilebilirlik (CIA), STRIDE tehdit modeli, savunma derinliği ve en az ayrıcalık prensibi.",
  accentColor: "#10B981", // Green
  level: "CORE",
  order: 6,
  recommendedBookId: "siber-guvenlige-giris",
  modules: [
    {
      id: "mod-06-01",
      code: "01",
      slug: "security-pillars",
      pathSlug: "cybersecurity-fundamentals",
      title: "GÜVENLİK İLKELERİ & DOKTRİNİ",
      description: "CIA Üçlüsü, Savunma Derinliği ve En Az Ayrıcalık.",
      order: 1,
      topics: [
        {
          id: "top-06-01-01",
          code: "01",
          slug: "defense-in-depth",
          pathSlug: "cybersecurity-fundamentals",
          moduleSlug: "security-pillars",
          title: "Savunma Derinliği (Defense-in-Depth)",
          subtitle: "Katmanlı Güvenlik Mimarisi",
          shortDescription: "Tek bir güvenlik katmanına güvenmemek: WAF, Ağ Segmentasyonu, Host IDS, Şifreleme.",
          order: 1,
          readTime: "5 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "SAVUNMA DERİNLİĞİ KONSEPTİ",
              content: "Bir kale gibi düşünün: Hendek, dış surlar, iç kale ve kilitli kapılar. Saldırgan dış güvenlik duvarını aşsa bile, iç ağ segmentasyonu ve veri tabanı şifrelemesi sayesinde veriye ulaşamamalıdır."
            }
          ],
          summary: [
            "Hiçbir tekil güvenlik aracı %100 koruma sağlamaz.",
            "Katmanlı savunma geciktirir ve tespit şansını artırır."
          ]
        }
      ]
    },
    {
      id: "mod-06-02",
      code: "02",
      slug: "threat-modeling",
      pathSlug: "cybersecurity-fundamentals",
      title: "TEHDİT MODELLEME & STRIDE",
      description: "Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege.",
      order: 2,
      topics: [
        {
          id: "top-06-02-01",
          code: "01",
          slug: "stride-framework",
          pathSlug: "cybersecurity-fundamentals",
          moduleSlug: "threat-modeling",
          title: "STRIDE Tehdit Modeli",
          subtitle: "Yazılım Mimarisi Tasarlanırken Tehditleri Belirleme",
          shortDescription: "Microsoft STRIDE çerçevesi ve 6 ana tehdit sınıfı.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "STRIDE HARF AÇILIMI",
              content: "S - Spoofing (Kimlik Sahteciliği)\nT - Tampering (Veri Değiştirme)\nR - Repudiation (İnkar Edilebilirlik)\nI - Information Disclosure (Bilgi İfşası)\nD - Denial of Service (Hizmet Engelleme)\nE - Elevation of Privilege (Yetki Yükseltme)."
            }
          ],
          summary: [
            "STRIDE tasarım aşamasında güvenlik risklerini bulur.",
            "Her tehdit sınıfına özel kriptografik ve mimari çözümler üretilir."
          ]
        }
      ]
    }
  ]
};
