import { ModuleItem } from '../../../../types/lab';

export const mod01WhatIsInternet: ModuleItem = {
  id: "mod-01-01",
  code: "01",
  slug: "internet-nedir",
  pathSlug: "internet-fundamentals",
  title: "INTERNET NEDİR?",
  description: "Küresel ağın fiziksel ve mantıksal altyapısı, denizaltı kabloları, paket anahtarlama ve ARPANET'ten günümüze internetin doğuşu.",
  order: 1,
  topics: [
    {
      id: "top-01-01-01",
      code: "01",
      slug: "internet-definition-infrastructure",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "1. İnternet Tanımı ve Fiziksel Altyapı",
      subtitle: "Ağların Ağı (Network of Networks)",
      shortDescription: "Denizaltı fiber kabloları, IXP (Internet Exchange Points) ve küresel omurga.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "İnternet, milyonlarca özel, kamu, akademik ve ticari ağın standart IP protokolü üzerinden birbirine bağlandığı küresel bir ağlar ağıdır." },
        { id: "sec-02", code: "02", title: "NASIL ÇALIŞIR & İÇERİDE NE OLUR?", content: "Veriler ışık hızında kıtalararası fiber optik kablolardan geçer. IXP (İnternet Değişim Noktaları) ISP'lerin trafiği birbirine aktardığı düğüm noktalarıdır." },
        { id: "sec-03", code: "03", title: "GERÇEK ÖRNEK", content: "İstanbul'daki bir kullanıcı Amerika'daki bir sunucuya istek attığında, veri Akdeniz ve Atlas Okyanusu tabanındaki fiber kablolardan yaklaşık 70 milisaniyede ulaşır." },
        { id: "sec-04", code: "04", title: "SECURITY CONNECTION", content: "Fiziksel kablolara veya IXP noktalarına fiziksel erişim sağlayan devletler veya aktörler tüm şifrelenmemiş trafiği (TAPping) dinleyebilir." }
      ],
      summary: ["İnternet fiziksel kablolar ve IXP santralleriyle birbirine bağlı küresel ağdır."],
      practice: {
        id: "prac-01-01-01",
        prompt: "Farklı İnternet Servis Sağlayıcılarının (ISP) kendi aralarında trafik değişimi yapmak için bağlandığı fiziksel merkezlere ne ad verilir?",
        options: [
          { id: "a", text: "IXP (Internet Exchange Point)" },
          { id: "b", text: "DNS Root Server" },
          { id: "c", text: "RAM Cache" },
          { id: "d", text: "DHCP Pool" }
        ],
        correctAnswer: "a",
        explanation: "IXP (Internet Exchange Point), ISP'lerin ve içerik sağlayıcıların trafiği doğrudan birbiriyle takas ettiği kritik erişim santralleridir."
      }
    },
    {
      id: "top-01-01-02",
      code: "02",
      slug: "packet-switching-concept",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "2. Paket Anahtarlama (Packet Switching) Mantığı",
      subtitle: "Verinin Küçük Paketlere Bölünerek İletilmesi",
      shortDescription: "Circuit switching vs Packet switching, veri paketleme ve bağımsız rota iletimi.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "Eski telefon hatları devrelik (Circuit Switching) çalışırken, internet paket anahtarlamalıdır: Büyük dosyalar küçük paketlere bölünür, her paket kendi bağımsız yolundan hedefe ulaşır." }
      ],
      summary: ["Paket anahtarlama veriyi küçük parçalara bölerek bağımsız rotalardan iletir."]
    },
    {
      id: "top-01-01-03",
      code: "03",
      slug: "arpanet-history-ietf",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "3. ARPANET'ten Günümüze ve Standartlar (RFC & IETF)",
      subtitle: "İnternet Standartları Nasıl Belirlenir?",
      shortDescription: "ARPANET, IETF, RFC (Request for Comments) dokümanları ve ICANN.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RFC VE IETF STANDARTLARI", content: "İnternet kuralları IETF tarafından yayınlanan RFC (Request for Comments) standart dokümanları ile belirlenir (Örn: HTTP/1.1 -> RFC 2616)." }
      ],
      summary: ["IETF RFC dokümanları internet protokollerinin resmi teknik standartlarıdır."]
    },
    {
      id: "top-01-01-04",
      code: "04",
      slug: "isps-tiers-infrastructure",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "4. İSS (ISP) Hiyerarşisi: Tier 1, Tier 2 ve Tier 3",
      subtitle: "Evimizden Küresel Omurgaya İnternet Sağlayıcıları",
      shortDescription: "Transit, Peering, Tier-1 global backbone ve son kullanıcı ISP'leri.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TIER KATEGORİLERİ", content: "Tier 1 ISP'ler kimseye bağımlı olmayan küresel omurgadır (AT&T, NTT, Telia). Tier 3 ise evimize internet getiren yerel servis sağlayıcıdır." }
      ],
      summary: ["Tier-1 küresel omurgayı sağlar, Tier-3 son kullanıcıya erişim verir."]
    },
    {
      id: "top-01-01-05",
      code: "05",
      slug: "bandwidth-latency-throughput",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "5. Bant Genişliği (Bandwidth), Gecikme (Latency) ve Jitter",
      subtitle: "Ağ Performans Metrikleri",
      shortDescription: "Mbps/Gbps, Ping RTT (Round Trip Time), Jitter ve Packet Loss.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PERFORMANS METRİKLERİ", content: "Bant genişliği otoyolun genişliğidir (Mbps). Gecikme (Latency) bir paketin gidiş-dönüş süresidir (ms). Jitter ise gecikmedeki kararsızlık miktarıdır." }
      ],
      summary: ["Latency gecikme süresidir, Bandwidth maksimum veri taşıma kapasitesidir."]
    },
    {
      id: "top-01-01-06",
      code: "06",
      slug: "osi-vs-tcpip-model-internet",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "6. TCP/IP Mimari Modeli ve İnternet Katmanları",
      subtitle: "Uygulama, Taşıma, İnternet ve Ağ Erişimi Katmanları",
      shortDescription: "4 katmanlı TCP/IP modeli vs 7 katmanlı OSI modeli karşılaştırması.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TCP/IP KATMANLARI", content: "İnternet pratikte 4 katmanlı TCP/IP modelini kullanır: 1. Network Access -> 2. Internet (IP) -> 3. Transport (TCP/UDP) -> 4. Application (HTTP/DNS)." }
      ],
      summary: ["TCP/IP internetin pratik 4 katmanlı mimarisidir."]
    },
    {
      id: "top-01-01-07",
      code: "07",
      slug: "data-encapsulation-decapsulation",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "7. Veri Kapsülleme (Encapsulation) ve Başlıklar",
      subtitle: "Data -> Segment -> Packet -> Frame -> Bits",
      shortDescription: "Her katmanda header ekleme (Kapsülleme) ve hedefte header soyma (Decapsulation).",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ENCAPSULATION", content: "Uygulama verisine Taşıma katmanında TCP başlığı (Segment), İnternet katmanında IP başlığı (Packet), Ağ katmanında MAC başlığı (Frame) eklenir." }
      ],
      summary: ["Kapsülleme her katmanda verinin önüne kendi denetim başlığını ekler."]
    },
    {
      id: "top-01-01-08",
      code: "08",
      slug: "network-topologies-internet",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "8. Ağ Topolojileri ve Mesh Mimarisi",
      subtitle: "İnternetin Kesintisiz Kaldığı Mesh Yapısı",
      shortDescription: "Star, Bus, Ring ve Mesh topolojileri; Redundancy (Yedeklilik).",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MESH TOPOLOJİSİ", content: "İnternet Full/Partial Mesh topolojisindedir. Bir kablo koparsa trafik alternatif rotalara otomatik kayar." }
      ],
      summary: ["Mesh yapısı tek nokta arızasına (Single Point of Failure) izin vermez."]
    },
    {
      id: "top-01-01-09",
      code: "09",
      slug: "internet-governance-icann-iana",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "9. İnternet Yönetişimi: ICANN, IANA ve RIR Kurumları",
      subtitle: "İnterneti Kim Yönetiyor?",
      shortDescription: "ICANN, IANA, RIR (RIPE NCC, ARIN, APNIC) ve IP/Domain tahsisi.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ICANN VE IANA", content: "ICANN ve IANA küresel IP adresi ve TLD (.com, .org) alan adı tahsislerini koordine eden tarafsız kar amacı gütmeyen kuruluşlardır." }
      ],
      summary: ["ICANN küresel alan adı ve IP adres alanlarının üst koordinatörüdür."]
    },
    {
      id: "top-01-01-10",
      code: "10",
      slug: "module-01-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-nedir",
      title: "10. Modül Değerlendirmesi: İnternet Nedir? Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı",
      shortDescription: "IXP, Paket Anahtarlama, RFC, ISP Tierları, Encapsulation özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "İnternetin denizaltı kabloları ve IXP santralleriyle birbirine bağlı ağlar ağı olduğunu, verilerin paket anahtarlama yöntemiyle iletildiğini ve IETF RFC dokümanlarının standart belirlediğini öğrendin." }
      ],
      summary: ["Modül 01 başarıyla tamamlandı. Sıradaki hedef: 02 - CLIENT & SERVER."],
      practice: {
        id: "prac-01-01-10",
        prompt: "Uygulama verisine sırasıyla TCP başlığı, IP başlığı ve Ethernet MAC başlığı eklenmesi işlemine ne ad verilir?",
        options: [
          { id: "a", text: "Decapsulation" },
          { id: "b", text: "Encapsulation (Kapsülleme)" },
          { id: "c", text: "DNS Lookup" },
          { id: "d", text: "Ping RTT" }
        ],
        correctAnswer: "b",
        explanation: "Encapsulation (Kapsülleme), verinin katmanlar arasında aşağı inerken önüne ilgili katmanın denetim başlıklarının eklenmesidir."
      }
    }
  ]
};
