import { ModuleItem } from '../../../../types/lab';

export const mod03TcpIp: ModuleItem = {
  id: "mod-02-03",
  code: "03",
  slug: "tcp-ip-model",
  pathSlug: "networking",
  title: "TCP/IP MODEL",
  description: "Pratik İnternet Mimarisi: 4 Katmanlı TCP/IP Modeli, OSI Modeli ile Karşılaştırması, Protokol Ailesi (Suite) ve Gerçek Dünya İletişimi.",
  order: 3,
  topics: [
    {
      id: "top-02-03-01",
      code: "01",
      slug: "tcpip-model-architecture",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "1. TCP/IP Modeli Nedir ve Neden Standart Oldu?",
      subtitle: "Pratik İnternet İletişiminin 4 Katmanı",
      shortDescription: "DoD tarafından geliştirilen 4 katmanlı TCP/IP mimarisinin doğuşu.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "TCP/IP modeli, internetin pratik olarak üzerinde çalıştığı 4 katmanlı iletişim mimarisidir (Network Access, Internet, Transport, Application)." }
      ],
      summary: ["TCP/IP internetin 4 katmanlı pratik uygulama standardıdır."]
    },
    {
      id: "top-02-03-02",
      code: "02",
      slug: "tcpip-vs-osi-comparison",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "2. TCP/IP Modeli vs OSI Modeli Karşılaştırması",
      subtitle: "Teorik Model vs Pratik Standart",
      shortDescription: "7 katmanın 4 katmana nasıl haritalandığı (Application = L5+L6+L7).",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODEL KARŞILAŞTIRMASI", content: "TCP/IP'deki Application katmanı OSI'deki Uygulama (L7), Sunum (L6) ve Oturum (L5) katmanlarını tek çatı altında birleştirir." }
      ],
      summary: ["TCP/IP pratik, OSI teorik referans modelidir."]
    },
    {
      id: "top-02-03-03",
      code: "03",
      slug: "tcpip-application-layer-protocols",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "3. TCP/IP Uygulama Katmanı (Application Layer)",
      subtitle: "HTTP, SSH, DNS, SMTP, FTP Protokol Ailesi",
      shortDescription: "Uygulama katmanı protokollerinin veri yapısı ve port eşleşmeleri.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "APPLICATION LAYER", content: "Son kullanıcı uygulamalarının ağ ile etkileşime girdiği katmandır (HTTP 80, HTTPS 443, SSH 22, DNS 53)." }
      ],
      summary: ["Uygulama katmanı web, e-posta ve dosya aktarım servislerini sunar."]
    },
    {
      id: "top-02-03-04",
      code: "04",
      slug: "tcpip-transport-layer-protocols",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "4. TCP/IP Taşıma Katmanı (Transport Layer)",
      subtitle: "TCP ve UDP Protokollerinin Rolü",
      shortDescription: "Port bazlı süreç teslimatı, TCP ve UDP sorumlulukları.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TRANSPORT LAYER", content: "Taşıma katmanı gelen veriyi doğru uygulamaya (Port) teslim etmekten sorumludur (TCP/UDP)." }
      ],
      summary: ["Taşıma katmanı port numaraları üzerinden süreç haberleşmesini sağlar."]
    },
    {
      id: "top-02-03-05",
      code: "05",
      slug: "tcpip-internet-layer-protocols",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "5. TCP/IP İnternet Katmanı (Internet Layer)",
      subtitle: "IP, ICMP, ARP ve IGMP Protokolleri",
      shortDescription: "Paket yönlendirme, IP adresleme ve hata kontrolü.",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "INTERNET LAYER", content: "Ağlar arası paket yönlendirmeyi yapar. IP, ICMP (Ping), ARP ve IGMP protokollerini barındırır." }
      ],
      summary: ["İnternet katmanı IP adresleme ve paket yönlendirmeden sorumludur."]
    },
    {
      id: "top-02-03-06",
      code: "06",
      slug: "tcpip-network-access-layer",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "6. TCP/IP Ağ Erişimi Katmanı (Network Access Layer)",
      subtitle: "Ethernet, Wi-Fi ve Fiziksel Donanım Sürücüleri",
      shortDescription: "OSI Katman 1 ve Katman 2'nin birleşimi, MAC adresleri ve fiziksel ortamlar.",
      order: 6,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NETWORK ACCESS LAYER", content: "Fiziksel ortamda (Ethernet, Wi-Fi) çerçevelerin sinyale dönüşüp iletilmesini yönetir." }
      ],
      summary: ["Ağ erişim katmanı MAC adresleri ve fiziksel iletim sürücüleridir."]
    },
    {
      id: "top-02-03-07",
      code: "07",
      slug: "module-03-summary-review",
      pathSlug: "networking",
      moduleSlug: "tcp-ip-model",
      title: "7. Modül Değerlendirmesi: TCP/IP Model Özet & Test",
      subtitle: "Modül 03 Bütünsel Değerlendirmesi",
      shortDescription: "4 Katman, OSI farkları ve Protokol Ailesi özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "TCP/IP modelinin 4 katmanını ve protokol kümesini detaylarıyla öğrendin." }
      ],
      summary: ["Modül 03 tamamlandı. Sıradaki hedef: 04 - ETHERNET & FRAMES."],
      practice: {
        id: "prac-02-03-07",
        prompt: "TCP/IP mimarisinde OSI modelinin L5 (Oturum), L6 (Sunum) ve L7 (Uygulama) katmanlarını tek çatı altında birleştiren katman hangisidir?",
        options: [
          { id: "a", text: "Internet Katmanı" },
          { id: "b", text: "Application (Uygulama) Katmanı" },
          { id: "c", text: "Transport Katmanı" },
          { id: "d", text: "Network Access Katmanı" }
        ],
        correctAnswer: "b",
        explanation: "TCP/IP modelindeki Application katmanı, OSI modelinin üst 3 katmanının (L5, L6, L7) tüm görevlerini üstlenir."
      }
    }
  ]
};
