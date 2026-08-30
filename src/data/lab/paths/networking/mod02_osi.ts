import { ModuleItem } from '../../../../types/lab';

export const mod02Osi: ModuleItem = {
  id: "mod-02-02",
  code: "02",
  slug: "osi-model",
  pathSlug: "networking",
  title: "OSI MODEL",
  description: "OSI 7 Katmanlı Referans Modeli, Katmanların görevleri, PDU dönüşümleri (Data -> Segment -> Packet -> Frame -> Bits) ve katmanlar arası etkileşim.",
  order: 2,
  topics: [
    {
      id: "top-02-02-01",
      code: "01",
      slug: "osi-model-history-architecture",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "1. OSI Modeli Nedir ve Neden Geliştirildi?",
      subtitle: "7 Katmanlı Standart İletişim Referans Mimarisi",
      shortDescription: "ISO tarafından geliştirilen OSI modelinin tarihi ve katmanlı mimarinin avantajları.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "OSI (Open Systems Interconnection) modeli, ISO tarafından 1984 yılında yayınlanan ve farklı üreticilerin cihazlarının haberleşmesini sağlayan 7 katmanlı teorik bir referans mimarisidir." }
      ],
      summary: ["OSI 7 katmanlı teorik referans modelidir."]
    },
    {
      id: "top-02-02-02",
      code: "02",
      slug: "layer-1-physical-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "2. Katman 1: Fiziksel Katman (Physical Layer)",
      subtitle: "Bitlerin Elektriksel, Optik veya Radyo Sinyaline Dönüşümü",
      shortDescription: "Voltaj seviyeleri, kablolama standartları, RJ45, Hubs ve Bit seviyesi iletim.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PHYSICAL LAYER", content: "Katman 1 ham bitleri (0 ve 1) hat üzerinden göndermek için elektriksel voltajlara, ışık atımlarına veya radyo sinyallerine çevirir." }
      ],
      summary: ["Katman 1 donanım kabloları ve bit seviyesi fiziksel iletimdir."]
    },
    {
      id: "top-02-02-03",
      code: "03",
      slug: "layer-2-data-link-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "3. Katman 2: Veri Bağı Katmanı (Data Link Layer)",
      subtitle: "MAC Adresleri, Çerçeveler (Frames) ve LLC/MAC Alt Katmanları",
      shortDescription: "Ethernet Çerçevesi (Frame), MAC adresleme, Switchler, LLC ve MAC alt katmanları.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DATA LINK LAYER", content: "Katman 2 bitleri Çerçevelere (Frame) paketler. MAC adresi kullanarak yerel ağdaki doğrudan bağlı cihazlar arası iletimi sağlar." }
      ],
      summary: ["Katman 2 MAC adresleri ve Çerçevelerle (Frame) çalışır."]
    },
    {
      id: "top-02-02-04",
      code: "04",
      slug: "layer-3-network-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "4. Katman 3: Ağ Katmanı (Network Layer)",
      subtitle: "Mantıksal IP Adresleme ve Yönlendirme (Routing)",
      shortDescription: "IP Paketleri, Routerlar, IP adresleme ve en iyi yol seçimi.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NETWORK LAYER", content: "Katman 3 mantıksal IP adreslerini ekler. Farklı ağlar arasındaki en uygun rotayı (Routing) belirleyerek paket iletir." }
      ],
      summary: ["Katman 3 IP adresleri ve Router'lar ile mantıksal yönlendirme yapar."]
    },
    {
      id: "top-02-02-05",
      code: "05",
      slug: "layer-4-transport-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "5. Katman 4: Taşıma Katmanı (Transport Layer)",
      subtitle: "Uçtan Uca İletişim, Portlar, TCP ve UDP",
      shortDescription: "Segment/Datagram yapısı, Port numaralandırması, TCP güvenilirliği ve UDP hızı.",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TRANSPORT LAYER", content: "Katman 4 uçtan uca veri iletimini yönetir. Port numaralarını ekleyerek veriyi süreçlere teslim eder (TCP/UDP)." }
      ],
      summary: ["Katman 4 Port numaraları, TCP ve UDP ile uçtan uca iletimi yönetir."]
    },
    {
      id: "top-02-02-06",
      code: "06",
      slug: "layer-5-session-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "6. Katman 5: Oturum Katmanı (Session Layer)",
      subtitle: "Oturum Başlatma, Yönetme ve Sonlandırma",
      shortDescription: "RPC, NetBIOS, Oturum senkronizasyonu ve kontrol noktaları (Checkpoints).",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SESSION LAYER", content: "Katman 5 iki uygulama arasındaki oturumu başlatır, sürdürür ve sonlandırır." }
      ],
      summary: ["Katman 5 oturum yönetimi ve senkronizasyonu sağlar."]
    },
    {
      id: "top-02-02-07",
      code: "07",
      slug: "layer-6-presentation-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "7. Katman 6: Sunum Katmanı (Presentation Layer)",
      subtitle: "Veri Formatlama, Şifreleme ve Sıkıştırma",
      shortDescription: "SSL/TLS şifreleme, JPEG/PNG formatları, ASCII/Unicode çevrimi ve ASCII kodlama.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PRESENTATION LAYER", content: "Katman 6 verinin formatlanması, şifrelenmesi (Encryption) ve sıkıştırılmasından (Compression) sorumludur." }
      ],
      summary: ["Katman 6 veri formatı, şifreleme ve sıkıştırma katmanıdır."]
    },
    {
      id: "top-02-02-08",
      code: "08",
      slug: "layer-7-application-layer",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "8. Katman 7: Uygulama Katmanı (Application Layer)",
      subtitle: "Kullanıcıya En Yakın Protokol Katmanı",
      shortDescription: "HTTP, HTTPS, FTP, SSH, SMTP, DNS protokolleri ve uygulama arayüzü.",
      order: 8,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "APPLICATION LAYER", content: "Katman 7 kullanıcının doğrudan etkileşime girdiği ağ protokollerini barındırır (HTTP, SSH, SMTP)." }
      ],
      summary: ["Katman 7 son kullanıcının kullandığı yüksek seviye protokoller katmanıdır."]
    },
    {
      id: "top-02-02-09",
      code: "09",
      slug: "osi-encapsulation-pdu-flow",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "9. Uçtan Uca PDU Dönüşümü: Data -> Segment -> Packet -> Frame -> Bits",
      subtitle: "Uygulamadan Kabloya Verinin Yolculuğu",
      shortDescription: "Kapsülleme (Encapsulation) ve Soyma (Decapsulation) sürecinin tam simülasyonu.",
      order: 9,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PDU AKIŞI", content: "L7 Data -> L4 Segment (TCP Header) -> L3 Packet (IP Header) -> L2 Frame (MAC Header + Trailer) -> L1 Bits (Sinyal)." }
      ],
      summary: ["PDU dönüşümü katmanlar arasında veri paketleme akışıdır."]
    },
    {
      id: "top-02-02-10",
      code: "10",
      slug: "module-02-summary-review",
      pathSlug: "networking",
      moduleSlug: "osi-model",
      title: "10. Modül Değerlendirmesi: OSI Model Özet & Test",
      subtitle: "Modül 02 Bütünsel Değerlendirmesi",
      shortDescription: "7 katmanın sorumlulukları, PDU isimleri ve katman cihazları özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "OSI modelinin 7 katmanını, her katmanın PDU'sunu ve kapsülleme mantığını öğrendin." }
      ],
      summary: ["Modül 02 tamamlandı. Sıradaki hedef: 03 - TCP/IP MODEL."],
      practice: {
        id: "prac-02-02-10",
        prompt: "OSI modelinin Katman 3 (Ağ Katmanı) birimindeki Veri Birimi (PDU) ismi nedir?",
        options: [
          { id: "a", text: "Frame (Çerçeve)" },
          { id: "b", text: "Packet (Paket)" },
          { id: "c", text: "Segment" },
          { id: "d", text: "Bits" }
        ],
        correctAnswer: "b",
        explanation: "OSI Katman 3'te veriye IP başlığı eklendiğinde oluşan PDU birimine Packet (Paket) adı verilir."
      }
    }
  ]
};
