import { PathItem } from '../../../types/lab';

export const securityEngineeringPath: PathItem = {
  id: "path-14",
  code: "14",
  slug: "security-engineering",
  title: "SECURITY ENGINEERING",
  shortTitle: "SECURITY ENGINEERING",
  tagline: "Kırılgan sistemler felsefesi, dayanıklılık ve güvenli mimari tasarımı.",
  description: "Hata toleransı, kaos mühendisliği, güvenli mimari desenleri, Zero Trust ve kurumsal risk analizi.",
  accentColor: "#64748B", // Blue-Gray
  level: "ADVANCED",
  order: 14,
  recommendedBookId: "kirilgan-sistemler",
  modules: [
    {
      id: "mod-14-01",
      code: "01",
      slug: "resilient-systems",
      pathSlug: "security-engineering",
      title: "GÜVENLİ MİMARİ & DAYANIKLILIK",
      description: "Zero Trust, Kaos Mühendisliği ve Kırılgan Sistemler felsefesi.",
      order: 1,
      topics: [
        {
          id: "top-14-01-01",
          code: "01",
          slug: "zero-trust-architecture",
          pathSlug: "security-engineering",
          moduleSlug: "resilient-systems",
          title: "Zero Trust Mimarisi",
          subtitle: "Asla Güvenme, Daima Doğrula",
          shortDescription: "Geleneksel kale-hendek modelinden kimlik tabanlı mikro segmentasyona geçiş.",
          order: 1,
          readTime: "5 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "ZERO TRUST PRENSİBİ",
              content: "Geleneksel ağ güvenliği iç ağdaki herkese güvenir. Zero Trust ise iç ağdaki cihaz dahil hiçbir şeye peşin güvenmez; her istekte kimlik, cihaz sağlığı ve bağlam doğrulanır."
            }
          ],
          summary: ["İç ağ dahil hiçbir cihaza güvenilmez.", "Mikro segmentasyon yayılmayı engeller."]
        }
      ]
    }
  ]
};
