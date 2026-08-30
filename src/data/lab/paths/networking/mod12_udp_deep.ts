import { ModuleItem } from '../../../../types/lab';

export const mod12UdpDeep: ModuleItem = {
  id: "mod-02-12",
  code: "12",
  slug: "udp",
  pathSlug: "networking",
  title: "UDP (USER DATAGRAM PROTOCOL)",
  description: "Bağlantısız iletişim, Minimal 8-baytlık overhead, Düşük gecikme, Real-time Medya, Oyunlar, DNS, UDP Amplification DDoS ve TCP vs UDP Derin Karşılaştırması.",
  order: 12,
  topics: [
    {
      id: "top-02-12-01",
      code: "01",
      slug: "udp-connectionless-concept",
      pathSlug: "networking",
      moduleSlug: "udp",
      title: "1. UDP Nedir ve Neden Tercih Edilir?",
      subtitle: "Hızlı, Yalın ve El Sıkışmasız İletişim",
      shortDescription: "Fire-and-forget mantığı, 8-baytlık minimal başlık ve düşük gecikme.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "UDP (User Datagram Protocol), el sıkışma (Handshake) olmadan paketleri doğrudan yollayan, bağlantısız (Connectionless) ve aşırı hızlı taşıma katmanı protokolüdür." }
      ],
      summary: ["UDP el sıkışmasız en düşük gecikmeli iletimi sunar."]
    },
    {
      id: "top-02-12-02",
      code: "02",
      slug: "udp-header-fields",
      pathSlug: "networking",
      moduleSlug: "udp",
      title: "2. UDP Başlık Yapısı (8-Baytlık Overhead)",
      subtitle: "Minimalist Başlık Alanları",
      shortDescription: "Source Port, Destination Port, Length, Checksum.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "UDP BAŞLIĞI", content: "UDP başlığı sadece 8 bayttır: Source Port (2B), Dest Port (2B), Length (2B), Checksum (2B)." }
      ],
      summary: ["UDP başlığı 8 bayttır, ek yükü yok denecek kadar azdır."]
    },
    {
      id: "top-02-12-03",
      code: "03",
      slug: "tcp-vs-udp-comprehensive-matrix",
      pathSlug: "networking",
      moduleSlug: "udp",
      title: "3. TCP vs UDP Kapsamlı Karşılaştırma Matrisi",
      subtitle: "Hangi Senaryoda Hangisi Seçilmelidir?",
      shortDescription: "Güvenilirlik, Hız, Bağlantı durumu, Akış kontrolü ve kullanım alanları.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KARŞILAŞTIRMA MATRİSİ", content: "TCP: Güvenilir, yavaş, sıra garantili (Web, SSH, Dosya). UDP: Hızlı, paket kaybı tolere edilir, sırasız (VoIP, Video, Online Oyun, DNS)." }
      ],
      summary: ["TCP veri bütünlüğü için, UDP düşük gecikmeli canlı yayın ve oyun içindir."]
    },
    {
      id: "top-02-12-04",
      code: "04",
      slug: "module-12-summary-review",
      pathSlug: "networking",
      moduleSlug: "udp",
      title: "4. Modül Değerlendirmesi: UDP Özet & Test",
      subtitle: "Modül 12 Bütünsel Değerlendirmesi",
      shortDescription: "UDP başlığı, TCP vs UDP ve kullanım senaryoları özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "UDP'nin bağlantısız yapısını ve 8 baytlık minimal başlığını öğrendin." }
      ],
      summary: ["Modül 12 tamamlandı. Sıradaki hedef: 13 - PORTS & SOCKETS."],
      practice: {
        id: "prac-02-12-04",
        prompt: "UDP başlığının (Header) toplam boyutu kaç bayttır?",
        options: [
          { id: "a", text: "20 Bayt" },
          { id: "b", text: "8 Bayt" },
          { id: "c", text: "64 Bayt" },
          { id: "d", text: "4 Bayt" }
        ],
        correctAnswer: "b",
        explanation: "UDP başlığı Source Port (2B), Destination Port (2B), Length (2B) ve Checksum (2B) olmak üzere toplam 8 bayttır."
      }
    }
  ]
};
