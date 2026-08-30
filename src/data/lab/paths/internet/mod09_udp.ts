import { ModuleItem } from '../../../../types/lab';

export const mod09Udp: ModuleItem = {
  id: "mod-01-09",
  code: "09",
  slug: "udp",
  pathSlug: "internet-fundamentals",
  title: "UDP (USER DATAGRAM PROTOCOL)",
  description: "Bağlantısız, hızlı ve yalın protokol: UDP başlığı (8 bayt), Handshake yokluğu, Real-time Medya/Oyun kullanımı, UDP Amplification DDoS ve TCP vs UDP karşılaştırması.",
  order: 9,
  topics: [
    {
      id: "top-01-09-01",
      code: "01",
      slug: "udp-concept-connectionless",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "1. UDP Nedir? Bağlantısız (Connectionless) Yalın İletişim",
      subtitle: "Hızın Güvenilirlikten Önde Geldiği Durumlar",
      shortDescription: "Fire-and-forget mantığı, sıfır bağlantı el sıkışma gecikmesi ve 8-baytlık hafif başlık.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "UDP (User Datagram Protocol), el sıkışma (Handshake) olmadan paketleri doğrudan gönderen bağlantısız (Connectionless) ve hafif bir taşıma katmanı protokolüdür." }
      ],
      summary: ["UDP bağlantısız ve hızlı taşıma katmanı protokolüdür."]
    },
    {
      id: "top-01-09-02",
      code: "02",
      slug: "udp-header-structure",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "2. UDP Başlık Yapısı (Header) ve Hafiflik",
      subtitle: "Sadece 8 Baytlık Minimal Başlık",
      shortDescription: "Source Port, Destination Port, Length ve Checksum alanları.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "UDP BAŞLIĞI", content: "TCP başlığı 20 bayt iken UDP başlığı sadece 8 bayttır: Source Port (2B), Destination Port (2B), Length (2B), Checksum (2B)." }
      ],
      summary: ["UDP başlığı sadece 8 bayttır, aşırı hafiftir."]
    },
    {
      id: "top-01-09-03",
      code: "03",
      slug: "tcp-vs-udp-detailed-comparison",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "3. TCP vs UDP Karşılaştırması ve Kullanım Senaryoları",
      subtitle: "Mektup İle Radyo Yayını Arasındaki Fark",
      shortDescription: "Güvenilirlik, Hız, Bağlantı durumu, Akış kontrolü ve kullanım alanları.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TCP VS UDP", content: "TCP: Güvenilir, yavaş, sıra garantili (Web, E-posta, Dosya). UDP: Hızlı, paket kaybı tolere edilebilir, sırasız (Online Oyun, Canlı Yayın, VoIP, DNS)." }
      ],
      summary: ["TCP veri bütünlüğü için, UDP hız ve gerçek zamanlı akış içindir."]
    },
    {
      id: "top-01-09-04",
      code: "04",
      slug: "udp-amplification-ddos-attacks",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "4. UDP Amplification (Yansıtmalı DDoS) Saldırıları",
      subtitle: "DNS, NTP ve Memcached Üzerinden Katlanarak Gelen Saldırılar",
      shortDescription: "IP Spoofing + UDP yanıtlarının büyüklüğü ile kurbanı boğma (50x-500x çarpan).",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "UDP AMPLIFICATION", content: "Saldırgan kurbanın IP'sini taklit ederek (IP Spoofing) açık DNS veya NTP sunucularına küçük bir istek atar. Sunucu kurbana 100 kat daha büyük bir yanıt döner (Amplification DDoS)." }
      ],
      summary: ["UDP Amplification IP spoofing ile devasa yansıtmalı DDoS trafiği üretir."]
    },
    {
      id: "top-01-09-05",
      code: "05",
      slug: "quic-http3-udp-future",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "5. QUIC ve HTTP/3: UDP'nin Geleceği",
      subtitle: "TCP Gecikmelerini UDP Üzerinde Aşmak",
      shortDescription: "Google QUIC protokolü, UDP tabanlı güvenilir taşıma ve HTTP/3 standardı.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "QUIC PROTOKOLÜ", content: "HTTP/3, TCP'nin yavaş el sıkışmasını aşmak için UDP üzerine kurulan QUIC protokolünü kullanır. Güvenilirliği ve TLS şifrelemesini UDP üzerinde yazılımsal sağlar." }
      ],
      summary: ["QUIC ve HTTP/3 UDP üzerine inşa edilmiş modern güvenilir protokoldür."]
    },
    {
      id: "top-01-09-06",
      code: "06",
      slug: "module-09-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "udp",
      title: "6. Modül Değerlendirmesi: UDP Özet & Test",
      subtitle: "Modül 09 Bütünsel Sınavı",
      shortDescription: "UDP başlığı, TCP vs UDP, Amplification DDoS ve QUIC/HTTP3 özet testi.",
      order: 6,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "UDP'nin bağlantısız ve hızlı olduğunu, DNS ve Canlı Yayında kullanıldığını, UDP Amplification DDoS riski taşıdığını öğrendin." }
      ],
      summary: ["Modül 09 başarıyla tamamlandı. Sıradaki hedef: 10 - HTTP & HTTPS."],
      practice: {
        id: "prac-01-09-06",
        prompt: "Aşağıdaki protokollerin hangisi paket kaybını tolere edebilen Canlı Video Yayını (VoIP/Streaming) ve Online Oyunlarda öncelikli tercih edilir?",
        options: [
          { id: "a", text: "TCP" },
          { id: "b", text: "UDP" },
          { id: "c", text: "SSH" },
          { id: "d", text: "SFTP" }
        ],
        correctAnswer: "b",
        explanation: "UDP el sıkışma yapmadığı ve kaybolan paketi tekrar istemediği için gerçek zamanlı canlı yayın ve online oyunlarda en düşük gecikmeyi sunar."
      }
    }
  ]
};
