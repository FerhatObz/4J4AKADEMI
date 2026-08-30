import { ModuleItem } from '../../../../types/lab';

export const mod18Firewalls: ModuleItem = {
  id: "mod-02-18",
  code: "18",
  slug: "firewalls-network-controls",
  pathSlug: "networking",
  title: "FIREWALLS & NETWORK CONTROLS",
  description: "Güvenlik duvarı (Firewall) mantığı, Kural Tabloları (Rulesets: Source, Dest, Port, Protocol, Action), Stateful Inspection, Inbound/Outbound kuralları ve DMZ.",
  order: 18,
  topics: [
    {
      id: "top-02-18-01",
      code: "01",
      slug: "firewall-architecture-ruleset-anatomy",
      pathSlug: "networking",
      moduleSlug: "firewalls-network-controls",
      title: "1. Firewall Nedir ve Kural Tablosu (Ruleset) Anatomisi",
      subtitle: "Source, Destination, Port, Protocol, Action (Allow/Deny)",
      shortDescription: "Firewall filtreleme mantığı, varsayılan kural (Implicit Deny) ve kural sırası.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FIREWALL KURAL ANATOMİSİ", content: "Her firewall kuralı 5 parametreden oluşur:\n1. Source IP/Subnet\n2. Destination IP/Subnet\n3. Protocol (TCP/UDP/ICMP)\n4. Destination Port\n5. Action (ALLOW / DENY / DROP)." }
      ],
      summary: ["Firewall kuralları yukarıdan aşağıya sırayla işletilir; en sonda Implicit Deny bulunur."]
    },
    {
      id: "top-02-18-02",
      code: "02",
      slug: "stateful-vs-stateless-firewall",
      pathSlug: "networking",
      moduleSlug: "firewalls-network-controls",
      title: "2. Stateless vs Stateful Inspection Firewall",
      subtitle: "Durum Takip Tablosu (State Table)",
      shortDescription: "Bağlantı durumu takibi (ESTABLISHED, NEW, RELATED) ve dönüş trafiğine otomatik izin.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STATEFUL FIREWALL", content: "Stateful firewall giden isteği hatırlar (State Table). Sunucudan gelen yanıt paketini gördüğünde ekstra kural aramadan otomatik geçiş verir." }
      ],
      summary: ["Stateful Firewall bağlantı durumlarını hatırlar ve dönüş trafiğine otomatik izin verir."]
    },
    {
      id: "top-02-18-03",
      code: "03",
      slug: "dmz-demilitarized-zone-architecture",
      pathSlug: "networking",
      moduleSlug: "firewalls-network-controls",
      title: "3. DMZ (Demilitarized Zone - Arındırılmış Bölge) Mimarisi",
      subtitle: "İnternete Açık Sunucuları İç Ağdan İzole Etmek",
      shortDescription: "3 bacaklı Firewall mimarisi (WAN, LAN, DMZ) ve sunucu güvenliği.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DMZ MİMARİSİ", content: "Dışarıya hizmet veren Web/Mail sunucuları DMZ bölgesine konur. DMZ'deki bir sunucu ele geçirilse dahi iç ağa (LAN) erişemez." }
      ],
      summary: ["DMZ dışa açık sunucuları iç şirket ağından izole eden tampon bölgedir."]
    },
    {
      id: "top-02-18-04",
      code: "04",
      slug: "module-18-summary-review",
      pathSlug: "networking",
      moduleSlug: "firewalls-network-controls",
      title: "4. Modül Değerlendirmesi: Firewalls Özet & Test",
      subtitle: "Modül 18 Bütünsel Değerlendirmesi",
      shortDescription: "Ruleset anatomy, Stateful vs Stateless ve DMZ özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Firewall kural mantığını, Stateful durum takibini ve DMZ mimarisini öğrendin." }
      ],
      summary: ["Modül 18 tamamlandı. Sıradaki hedef: 19 - PACKET ANALYSIS."],
      practice: {
        id: "prac-02-18-04",
        prompt: "Dış dünyaya açık Web ve Mail sunucularının ele geçirilmesi durumunda iç şirket ağını korumak için sunucuların konulduğu izole tampon ağ bölgesine ne ad verilir?",
        options: [
          { id: "a", text: "VLAN 1" },
          { id: "b", text: "DMZ (Demilitarized Zone)" },
          { id: "c", text: "Loopback" },
          { id: "d", text: "Default Gateway" }
        ],
        correctAnswer: "b",
        explanation: "DMZ (Demilitarized Zone), internete açık sunucuların iç şirket ağından izole edildiği güvenlik bölgesidir."
      }
    }
  ]
};
