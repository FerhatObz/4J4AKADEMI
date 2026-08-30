import { ModuleItem } from '../../../../types/lab';

export const mod08ArpNdp: ModuleItem = {
  id: "mod-02-08",
  code: "08",
  slug: "arp-neighbor-discovery",
  pathSlug: "networking",
  title: "ARP & NEIGHBOR DISCOVERY",
  description: "IPv4 ARP Protokolü, IPv6 Neighbor Discovery Protocol (NDP), ICMPv6 Router Solicitation / Advertisement ve Neighbor Solicitation / Advertisement.",
  order: 8,
  topics: [
    {
      id: "top-02-08-01",
      code: "01",
      slug: "arp-review-packet-fields",
      pathSlug: "networking",
      moduleSlug: "arp-neighbor-discovery",
      title: "1. ARP Paket Alanları ve Çalışma Mekanizması",
      subtitle: "Layer 2 - Layer 3 Eşleştirme Protokolü",
      shortDescription: "Hardware Type, Protocol Type, Opcode (1 Request, 2 Reply), Sender/Target MAC & IP.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ARP PAKET YAPISI", content: "ARP paketi Opcode alanı barındırır. Opcode=1 ARP Request (Broadcast), Opcode=2 ARP Reply (Unicast) olduğunu söyler." }
      ],
      summary: ["ARP Opcode 1 Request, Opcode 2 Reply paketlerini temsil eder."]
    },
    {
      id: "top-02-08-02",
      code: "02",
      slug: "ipv6-ndp-neighbor-discovery-protocol",
      pathSlug: "networking",
      moduleSlug: "arp-neighbor-discovery",
      title: "2. IPv6 Neighbor Discovery Protocol (NDP) ve ICMPv6",
      subtitle: "IPv6'da Neden ARP Yoktur?",
      shortDescription: "IPv6'da Broadcast olmaması, ICMPv6 tabanlı Neighbor Discovery ve Solicited-Node Multicast.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NDP PROTOKOLÜ", content: "IPv6'da Broadcast kaldırılmıştır. ARP yerine ICMPv6 mesajları üzerine kurulu NDP (Neighbor Discovery Protocol) kullanılır." }
      ],
      summary: ["IPv6 ARP kullanmaz; bunun yerine ICMPv6 tabanlı NDP protokolünü kullanır."]
    },
    {
      id: "top-02-08-03",
      code: "03",
      slug: "ndp-messages-ns-na-rs-ra",
      pathSlug: "networking",
      moduleSlug: "arp-neighbor-discovery",
      title: "3. NDP Mesaj Türleri: NS, NA, RS ve RA",
      subtitle: "Komşu ve Router Keşfi",
      shortDescription: "Neighbor Solicitation (NS), Neighbor Advertisement (NA), Router Solicitation (RS), Router Advertisement (RA).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NDP MESAJLARI", content: "- NS (Neighbor Solicitation) = ARP Request karşılığı\n- NA (Neighbor Advertisement) = ARP Reply karşılığı\n- RS (Router Solicitation) = 'Router var mı?' araması\n- RA (Router Advertisement) = Router'ın ağ bilgilerini duyurması." }
      ],
      summary: ["NS/NA komşu adreslerini, RS/RA router bilgilerini bulur."]
    },
    {
      id: "top-02-08-04",
      code: "04",
      slug: "ndp-spoofing-rogue-ra-security",
      pathSlug: "networking",
      moduleSlug: "arp-neighbor-discovery",
      title: "4. IPv6 NDP Spoofing ve Rogue RA Saldırıları",
      subtitle: "IPv6 Ağlarında Araya Girme ve DoS",
      shortDescription: "Rogue Router Advertisement, sahte IPv6 ön eki yayma ve RA Guard koruması.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ROGUE RA SALDIRISI", content: "Saldırgan sahte Router Advertisement (RA) paketleri atarak ağdaki tüm IPv6 cihazlarının ağ geçidini kendi üzerine çeker (MITM)." }
      ],
      summary: ["Rogue RA IPv6 ağlarında ağ geçidi sahteciliğidir, RA Guard ile engellenir."]
    },
    {
      id: "top-02-08-05",
      code: "05",
      slug: "module-08-summary-review",
      pathSlug: "networking",
      moduleSlug: "arp-neighbor-discovery",
      title: "5. Modül Değerlendirmesi: ARP & NDP Özet & Test",
      subtitle: "Modül 08 Bütünsel Değerlendirmesi",
      shortDescription: "ARP vs NDP, NS/NA, RS/RA ve RA Guard özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "IPv4'te ARP'nin, IPv6'da ise ICMPv6 tabanlı NDP (NS/NA/RS/RA) protokolünün çalıştığını öğrendin." }
      ],
      summary: ["Modül 08 tamamlandı. Sıradaki hedef: 09 - SWITCHING."],
      practice: {
        id: "prac-02-08-05",
        prompt: "IPv6 ağlarında IPv4'teki ARP Request sorgusunun karşılığı olan ICMPv6 Neighbor Discovery mesajı hangisidir?",
        options: [
          { id: "a", text: "Router Advertisement (RA)" },
          { id: "b", text: "Neighbor Solicitation (NS)" },
          { id: "c", text: "Neighbor Advertisement (NA)" },
          { id: "d", text: "DHCP Discover" }
        ],
        correctAnswer: "b",
        explanation: "Neighbor Solicitation (NS) mesajı, hedef bir IPv6 adresinin MAC adresini öğrenmek için atılan ARP Request dengi mesajdır."
      }
    }
  ]
};
