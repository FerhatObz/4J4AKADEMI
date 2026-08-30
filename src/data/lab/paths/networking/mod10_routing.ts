import { ModuleItem } from '../../../../types/lab';

export const mod10Routing: ModuleItem = {
  id: "mod-02-10",
  code: "10",
  slug: "routing",
  pathSlug: "networking",
  title: "ROUTING (LAYER 3)",
  description: "Derinlemesine Routing Rehberi: Routing Table Yapısı, Destination Network, Next Hop, Default Route, Static vs Dynamic Routing, Administrative Distance (AD), Metric ve Paket İletim Kararı (192.168.1.10 -> 10.0.0.20 Adım Adım).",
  order: 10,
  topics: [
    {
      id: "top-02-10-01",
      code: "01",
      slug: "layer3-routing-concept-need",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "1. Routing (Yönlendirme) Nedir ve Neden Gerekli?",
      subtitle: "Farklı Alt Ağlar ve Dünyalar Arası Paket İletimi",
      shortDescription: "Katman 3 mantıksal ağ yönlendirmesi, Router sorumlulukları ve çakışma/yayın alanları.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "Routing (Yönlendirme), bir paketi kaynak IP adresinden farklı bir alt ağdaki hedef IP adresine ulaştırmak için en uygun yolun seçilmesi ve paketlerin router'lar üzerinden iletilmesi işlemidir." }
      ],
      summary: ["Routing farklı IP alt ağları arasında paket iletim işlemidir."]
    },
    {
      id: "top-02-10-02",
      code: "02",
      slug: "routing-table-anatomy-fields",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "2. Yönlendirme Tablosu (Routing Table) Anatomisi",
      subtitle: "Destination, Subnet Mask, Next Hop, Exit Interface",
      shortDescription: "Routing tablosu alanları, `netstat -r` / `ip route` ve Longest Prefix Match.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ROUTING TABLE ALANLARI", content: "1. Destination Network: Paketin gitmek istediği hedef ağ.\n2. Subnet Mask / CIDR: Ağ boyutu.\n3. Next Hop (Sonraki Sıçrama): Paketin teslim edileceği bir sonraki router IP'si.\n4. Exit Interface: Paketin çıkacağı kendi ağ kartı (örneğin eth0)." }
      ],
      summary: ["Yönlendirme tablosu hedef ağ, next hop ve çıkış arayüzü bilgilerini tutar."]
    },
    {
      id: "top-02-10-03",
      code: "03",
      slug: "default-gateway-default-route-0-0-0-0",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "3. Varsayılan Ağ Geçidi (Default Gateway) ve Default Route (0.0.0.0/0)",
      subtitle: "Bilinmeyen Tüm Hedeflerin Çıkış Kapısı",
      shortDescription: "Default Gateway rolü, `0.0.0.0/0` varsayılan rotası ve internete çıkış.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DEFAULT ROUTE 0.0.0.0/0", content: "Router yönlendirme tablosunda spesifik eşleşme bulamazsa paketi `0.0.0.0/0` (Default Route) ile varsayılan ağ geçidine (Default Gateway / Modem) atar." }
      ],
      summary: ["0.0.0.0/0 tablolarda eşleşmeyen tüm bilinmeyen hedeflerin çıkış kapısıdır."]
    },
    {
      id: "top-02-10-04",
      code: "04",
      slug: "step-by-step-packet-forwarding-192-10",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "4. Adım Adım Paket İletim Simülasyonu: 192.168.1.10 -> 10.0.0.20",
      subtitle: "Paketin Router Üzerinden Katman Katman Yolculuğu",
      shortDescription: "MAC adresi değişimi, IP adresinin sabit kalması ve TTL düşürülmesi.",
      order: 4,
      readTime: "10 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ADIM ADIM İLETİM AKIŞI", content: "1. 192.168.1.10 cihazı 10.0.0.20'nin farklı ağda olduğunu anlar.\n2. Paketi hazırlar (SrcIP: 192.168.1.10, DstIP: 10.0.0.20).\n3. Çerçeveyi hazırlar (SrcMAC: Kendi, DstMAC: Router Gateway MAC).\n4. Router paketi alır, Katman 2 çerçev başlığını söker.\n5. TTL değerini 1 düşürür.\n6. 10.0.0.0/24 ağı için çıkış arayüzünü belirler.\n7. YENİ ÇERÇEVE OLUŞTURUR (SrcMAC: Router Çıkış MAC, DstMAC: 10.0.0.20 MAC) ve hatta verir!" },
        { id: "sec-02", code: "02", title: "ALTIN KURAL", content: "Paket yönlendirilirken Kaynak/Hedef IP ADRESLERİ DEĞİŞMEZ (NAT yoksa). Ancak HER SIÇRAMADA (Hop) Kaynak/Hedef MAC ADRESLERİ DEĞİŞİR!" }
      ],
      summary: ["Yönlendirmede IP adresleri sabit kalır, MAC adresleri her router sıçramasında değişir."]
    },
    {
      id: "top-02-10-05",
      code: "05",
      slug: "static-vs-dynamic-routing",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "5. Statik Yönlendirme (Static Routing) vs Dinamik Yönlendirme",
      subtitle: "Elle Rota Yazma vs Otomatik Rota Öğrenme",
      shortDescription: "Manuel statik rotalar vs Dinamik protokoller (OSPF, BGP, RIP, EIGRP).",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STATİK VS DİNAMİK", content: "Statik Rota yönetici tarafından elle yazılır (Güvenli, CPU harcamaz). Dinamik Rota (OSPF/BGP) router'ların kendi arasında haberleşip kopan hatları otomatik dolaşmasıdır." }
      ],
      summary: ["Statik rota manueldir, dinamik rota protokollerle otomatik güncellenir."]
    },
    {
      id: "top-02-10-06",
      code: "06",
      slug: "administrative-distance-metrics",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "6. Administrative Distance (AD) ve Metric Değerleri",
      subtitle: "Router En İyi Yolu Nasıl Seçer?",
      shortDescription: "Güvenilirlik sırası (AD: Connected 0, Static 1, BGP 20, OSPF 110) ve Metric hesabı.",
      order: 6,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "AD VE METRIC", content: "Farklı kaynaklardan aynı ağa rota gelirse Router en düşük Administrative Distance (AD) değerine sahip kaynağı seçer (Static 1 < OSPF 110)." }
      ],
      summary: ["Administrative Distance (AD) rota kaynaklarının güvenilirlik derecesidir."]
    },
    {
      id: "top-02-10-07",
      code: "07",
      slug: "module-10-summary-review",
      pathSlug: "networking",
      moduleSlug: "routing",
      title: "7. Modül Değerlendirmesi: Routing Özet & Test",
      subtitle: "Modül 10 Bütünsel Değerlendirmesi",
      shortDescription: "Routing table, Default route, Hop-by-Hop MAC değişimi ve AD özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Router'ın paketi katman 3 IP adreslerine göre yönlendirdiğini ve her sıçramada MAC adreslerinin değiştiğini öğrendin." }
      ],
      summary: ["Modül 10 tamamlandı. Sıradaki hedef: 11 - TCP."],
      practice: {
        id: "prac-02-10-07",
        prompt: "Bir IP paketi bir router üzerinden farklı bir alt ağa yönlendirilirken (NAT uygulanmadığı varsayılırsa) aşağıdakilerden hangisi gerçekleşir?",
        options: [
          { id: "a", text: "Kaynak ve Hedef IP adresleri değişir, MAC adresleri sabit kalır" },
          { id: "b", text: "Kaynak ve Hedef IP adresleri SABİT kalır, Kaynak ve Hedef MAC adresleri DEĞİŞİR" },
          { id: "c", text: "Paket tamamen silinir" },
          { id: "d", text: "TTL değeri artırılır" }
        ],
        correctAnswer: "b",
        explanation: "Yönlendirmede IP paketinin içindeki kaynak/hedef IP adresleri değişmez; ancak Katman 2 Ethernet çerçevesindeki MAC adresleri her router sıçramasında yenilenir."
      }
    }
  ]
};
