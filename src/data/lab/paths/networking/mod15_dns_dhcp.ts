import { ModuleItem } from '../../../../types/lab';

export const mod15DnsDhcp: ModuleItem = {
  id: "mod-02-15",
  code: "15",
  slug: "dns-dhcp",
  pathSlug: "networking",
  title: "DNS & DHCP CORE SERVICES",
  description: "Ağ çekirdek servisleri: DNS ve DHCP entegrasyonu, Ağ başlatma (Bootstrapping) ve servis bağımlılıkları.",
  order: 15,
  topics: [
    {
      id: "top-02-15-01",
      code: "01",
      slug: "network-bootstrapping-dhcp-dns-flow",
      pathSlug: "networking",
      moduleSlug: "dns-dhcp",
      title: "1. Ağ Başlatma (Bootstrapping) Akışı: Kabloyu Taktığın An",
      subtitle: "Cihazın IP, Mask, Gateway ve DNS Alıp İnternete Açılması",
      shortDescription: "Cihazın sıfırdan ağa katılması, DORA adımları ve DNS çözümleme başlangıcı.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BOOTSTRAPPING AKIŞI", content: "Kablo takıldığı an: 1. DHCP Discover broadcast atılır. 2. DHCP'den IP, Mask, Gateway ve DNS IP'si alınır. 3. Cihaz GARP atıp IP çakışması kontrol eder. 4. İlk alan adı için verilen DNS'e sorgu atar!" }
      ],
      summary: ["Cihaz ağa ilk girdiğinde DHCP üzerinden konfigürasyonunu alıp DNS sunucusunu öğrenir."]
    },
    {
      id: "top-02-15-02",
      code: "02",
      slug: "module-15-summary-review",
      pathSlug: "networking",
      moduleSlug: "dns-dhcp",
      title: "2. Modül Değerlendirmesi: DNS & DHCP Core Özet & Test",
      subtitle: "Modül 15 Bütünsel Değerlendirmesi",
      shortDescription: "Ağ başlatma adımları ve temel servis bağımlılıkları özet testi.",
      order: 2,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Cihazın sıfırdan ağa katılırken DHCP ve DNS servisleri arasındaki ilişkiyi öğrendin." }
      ],
      summary: ["Modül 15 tamamlandı. Sıradaki hedef: 16 - NETWORK SERVICES."],
      practice: {
        id: "prac-02-15-02",
        prompt: "Ağa yeni bağlanan bir bilgisayarın ilk olarak hangi servisle haberleşip ağ adresleme bilgilerini alması gerekir?",
        options: [
          { id: "a", text: "HTTP" },
          { id: "b", text: "DHCP" },
          { id: "c", text: "SSH" },
          { id: "d", text: "FTP" }
        ],
        correctAnswer: "b",
        explanation: "Yeni bağlanan cihaz öncelikle DHCP servisiyle iletişim kurarak IP adresi, alt ağ maskesi, gateway ve DNS sunucu adreslerini öğrenir."
      }
    }
  ]
};
