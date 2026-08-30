import { ModuleItem } from '../../../../types/lab';

export const mod04Ethernet: ModuleItem = {
  id: "mod-02-04",
  code: "04",
  slug: "ethernet-frames",
  pathSlug: "networking",
  title: "ETHERNET & FRAMES",
  description: "Ethernet standardı (IEEE 802.3), Çerçeve (Frame) Anatomisi, Preamble, MAC Başlığı, EtherType, Payload, FCS (CRC-32) ve CSMA/CD çakışma yönetimi.",
  order: 4,
  topics: [
    {
      id: "top-02-04-01",
      code: "01",
      slug: "ethernet-history-ieee8023",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "1. Ethernet Standardı (IEEE 802.3) Nedir?",
      subtitle: "Xerox PARC'tan Gigabayt Ethernet Hızlarına",
      shortDescription: "Ethernet tarihi, 10BASE-T, 100BASE-TX, 1000BASE-T (Gigabit) ve 10G Ethernet.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ETHERNET NEDİR?", content: "Ethernet, yerel alan ağlarında (LAN) kablolu veri iletişimi için kullanılan en yaygın Katman 2 (Data Link) teknolojisi ve IEEE 802.3 standardıdır." }
      ],
      summary: ["Ethernet LAN içi kablolu veri iletiminin temel standardıdır."]
    },
    {
      id: "top-02-04-02",
      code: "02",
      slug: "ethernet-frame-structure-anatomy",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "2. Ethernet Çerçevesi (Frame) Anatomisi ve Alanları",
      subtitle: "Preamble -> DstMAC -> SrcMAC -> EtherType -> Payload -> FCS",
      shortDescription: "Preamble (7B), SFD (1B), Destination MAC (6B), Source MAC (6B), EtherType (2B), Data (46-1500B), FCS (4B).",
      order: 2,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ETHERNET FRAME ALANLARI", content: "1. Preamble/SFD: Senkronizasyon (8B)\n2. Dst MAC: Hedef cihaz adresi (6B)\n3. Src MAC: Gönderen cihaz adresi (6B)\n4. EtherType: Üst katman protokolü (2B, 0x0800 IPv4, 0x0806 ARP)\n5. Payload: Taşınan veri (46-1500B)\n6. FCS (Frame Check Sequence): Hata kontrolü (4B CRC-32)." }
      ],
      summary: ["Ethernet Frame MAC adresleri, EtherType ve FCS hata kontrolü barındırır."]
    },
    {
      id: "top-02-04-03",
      code: "03",
      slug: "ethertype-field-protocols",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "3. EtherType Alanı ve Üst Katman Protokol Belirleme",
      subtitle: "0x0800 (IPv4), 0x0806 (ARP), 0x86DD (IPv6), 0x8100 (VLAN)",
      shortDescription: "Çerçevenin içinde hangi Katman 3 paketinin olduğunu gösteren EtherType değerleri.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ETHERTYPE DEĞERLERİ", content: "0x0800 gördüğünde alıcı bunun bir IPv4 paketi olduğunu, 0x0806 gördüğünde bir ARP paketi olduğunu anlar." }
      ],
      summary: ["EtherType alıcıya çerçeve içindeki üst katman protokolünü söyler."]
    },
    {
      id: "top-02-04-04",
      code: "04",
      slug: "mtu-maximum-transmission-unit-jumbo-frames",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "4. MTU (Maximum Transmission Unit) ve Jumbo Frames",
      subtitle: "1500 Baytlık Standart Sınır vs 9000 Baytlık Jumbo Çerçeveler",
      shortDescription: "MTU 1500 bayt sınırı, IP fragmentasyonu ve Veri Merkezi Jumbo Frames kullanımı.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MTU KAVRAMI", content: "Standart Ethernet MTU değeri 1500 bayttır. Veri merkezlerinde işlemci yükünü azaltmak için 9000 baytlık Jumbo Frames kullanılır." }
      ],
      summary: ["Standart Ethernet MTU 1500 bayttır."]
    },
    {
      id: "top-02-04-05",
      code: "05",
      slug: "csma-cd-collision-management",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "5. CSMA/CD Protokolü ve Çakışma (Collision) Yönetimi",
      subtitle: "Carrier Sense Multiple Access with Collision Detection",
      shortDescription: "Half-duplex kablo ortamlarında çakışma tespiti, Jam sinyali ve Backoff algoritması.",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CSMA/CD MANİTĞI", content: "Eski Hub'lı ağlarda iki cihaz aynı anda veri attığında çakışma (Collision) olur. CSMA/CD hattı dinler (Carrier Sense), çakışmayı tespit eder (Collision Detect) ve rastgele bir süre bekleyip (Backoff) tekrar atar." }
      ],
      summary: ["CSMA/CD Half-duplex ortamda veri çakışmalarını yöneten protokoldür."]
    },
    {
      id: "top-02-04-06",
      code: "06",
      slug: "mac-address-unicast-broadcast-multicast-frame",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "6. Çerçeve Seviyesinde Unicast, Broadcast ve Multicast",
      subtitle: "FF:FF:FF:FF:FF:FF Broadcast Çerçevesi",
      shortDescription: "Hedef MAC adresi bazında çerçeve iletim mantığı ve Wireshark incelemesi.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BROADCAST FRAME", content: "Hedef MAC `FF:FF:FF:FF:FF:FF` olan çerçeve ağdaki tüm Switch portlarına dağıtılır (Broadcast)." }
      ],
      summary: ["FF:FF:FF:FF:FF:FF tüm cihazların işlemek zorunda olduğu broadcast çerçevesidir."]
    },
    {
      id: "top-02-04-07",
      code: "07",
      slug: "module-04-summary-review",
      pathSlug: "networking",
      moduleSlug: "ethernet-frames",
      title: "7. Modül Değerlendirmesi: Ethernet & Frames Özet & Test",
      subtitle: "Modül 04 Bütünsel Değerlendirmesi",
      shortDescription: "Ethernet Frame alanları, EtherType, MTU ve CSMA/CD özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Ethernet çerçeve anatomisini, EtherType kodlarını, MTU 1500 bayt sınırını öğrendin." }
      ],
      summary: ["Modül 04 tamamlandı. Sıradaki hedef: 05 - IPv4 ADDRESSING."],
      practice: {
        id: "prac-02-04-07",
        prompt: "Bir Ethernet çerçevesinin (Frame) başlığındaki EtherType alanında `0x0800` yazması çerçeve içinde hangi protokol paketinin olduğunu gösterir?",
        options: [
          { id: "a", text: "ARP" },
          { id: "b", text: "IPv4" },
          { id: "c", text: "IPv6" },
          { id: "d", text: "VLAN Tag" }
        ],
        correctAnswer: "b",
        explanation: "EtherType `0x0800` değeri çerçevenin taşıdığı yükün bir IPv4 paketi olduğunu belirtir."
      }
    }
  ]
};
