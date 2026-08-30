import { ModuleItem } from '../../../../types/lab';

export const mod17Vlan: ModuleItem = {
  id: "mod-02-17",
  code: "17",
  slug: "vlan-segmentation",
  pathSlug: "networking",
  title: "VLAN & NETWORK SEGMENTATION",
  description: "Virtual Local Area Network (VLAN), Access vs Trunk Portlar, IEEE 802.1Q Tagging, Native VLAN, Inter-VLAN Routing ve Ağ Segmentasyonu Güvenliği.",
  order: 17,
  topics: [
    {
      id: "top-02-17-01",
      code: "01",
      slug: "vlan-concept-broadcast-domain-splitting",
      pathSlug: "networking",
      moduleSlug: "vlan-segmentation",
      title: "1. VLAN (Virtual LAN) Nedir ve Neden Gereklidir?",
      subtitle: "Fiziksel Switch'i Mantıksal Sanal Ağlara Bölme",
      shortDescription: "Broadcast domain bölme, departman izolasyonu ve esnek ağ tasarımı.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "VLAN (Virtual Local Area Network), tek bir fiziksel Switch üzerindeki portları mantıksal olarak birbirinden izole farklı sanal yerel ağlara (Broadcast Domain) bölme teknolojisidir." }
      ],
      summary: ["VLAN fiziksel Switch'i mantıksal izole sanal ağlara böler."]
    },
    {
      id: "top-02-07-02",
      code: "02",
      slug: "access-vs-trunk-ports-8021q",
      pathSlug: "networking",
      moduleSlug: "vlan-segmentation",
      title: "2. Access Port vs Trunk Port ve IEEE 802.1Q Tagging",
      subtitle: "Tek VLAN Portu vs Çoklu VLAN Taşıyan Hatlar",
      shortDescription: "Access Port (Untagged), Trunk Port (Tagged), 802.1Q başlık etiketi (VLAN ID 1-4094).",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ACCESS VS TRUNK", content: "Access Port tek bir VLAN'a aittir (Bilgisayarlar takılır). Trunk Port ise Switch-Switch arası bağlantıda tüm VLAN paketlerini 802.1Q etiketi (VLAN Tag) ile taşır." }
      ],
      summary: ["Access tek VLAN taşır, Trunk 802.1Q etiketleme ile tüm VLAN'ları taşır."]
    },
    {
      id: "top-02-17-03",
      code: "03",
      slug: "inter-vlan-routing-router-on-a-stick",
      pathSlug: "networking",
      moduleSlug: "vlan-segmentation",
      title: "3. Inter-VLAN Routing (VLAN'lar Arası Yönlendirme)",
      subtitle: "İzole VLAN'ları Router/Layer 3 Switch İle Konuşturmak",
      shortDescription: "Router-on-a-Stick (Sub-interfaces), Layer 3 Switch SVI (Switched Virtual Interface).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "INTER-VLAN ROUTING", content: "Farklı VLAN'lar varsayılanda birbiriyle konuşamaz. İletişim kurmaları için araya Katman 3 bir Router veya L3 Switch koyup yönlendirme yapılması gerekir." }
      ],
      summary: ["VLAN'lar arası geçiş ancak Katman 3 yönlendirme (Routing) ile mümkündür."]
    },
    {
      id: "top-02-17-04",
      code: "04",
      slug: "network-segmentation-security-zero-trust",
      pathSlug: "networking",
      moduleSlug: "vlan-segmentation",
      title: "4. Ağ Segmentasyonu (Network Segmentation) ve Sıfır Güven (Zero Trust)",
      subtitle: "Zararlının Yanal İlerlemesini (Lateral Movement) Durdurmak",
      shortDescription: "DMZ, İdari Ağ, Kullanıcı Ağı, IoT Ağı izolasyonu ve Mikro-segmentasyon.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "GÜVENLİK SEGMENTASYONU", content: "Bir hacker Muhasebe bilgisayarına sızsa dahi, ağ segmentasyonu sayesinde Sunucu veya Sunucu yönetim ağına geçememelidir. Zero Trust mimarisinin temeli mikro-segmentasyondur." }
      ],
      summary: ["Ağ segmentasyonu saldırganın yanal ilerlemesini (Lateral Movement) kısıtlar."]
    },
    {
      id: "top-02-17-05",
      code: "05",
      slug: "module-17-summary-review",
      pathSlug: "networking",
      moduleSlug: "vlan-segmentation",
      title: "5. Modül Değerlendirmesi: VLAN & Segmentation Özet & Test",
      subtitle: "Modül 17 Bütünsel Değerlendirmesi",
      shortDescription: "Access/Trunk, 802.1Q, Inter-VLAN ve Segmentasyon özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "VLAN mantığını, 802.1Q etiketlemesini ve ağ segmentasyonunun siber güvenlikteki hayati rolünü öğrendin." }
      ],
      summary: ["Modül 17 tamamlandı. Sıradaki hedef: 18 - FIREWALLS & NETWORK CONTROLS."],
      practice: {
        id: "prac-02-17-05",
        prompt: "İki Switch arasında birden fazla VLAN trafiğini üzerlerine 802.1Q etiketleri (Tag) ekleyerek taşıyan port türü hangisidir?",
        options: [
          { id: "a", text: "Access Port" },
          { id: "b", text: "Trunk Port" },
          { id: "c", text: "Console Port" },
          { id: "d", text: "Loopback Port" }
        ],
        correctAnswer: "b",
        explanation: "Trunk Portlar, farklı VLAN paketlerine 802.1Q etiketi koyarak tek bir hat üzerinden çoklu sanal ağ trafiği taşır."
      }
    }
  ]
};
