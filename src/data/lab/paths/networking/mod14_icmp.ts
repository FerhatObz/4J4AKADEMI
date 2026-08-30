import { ModuleItem } from '../../../../types/lab';

export const mod14Icmp: ModuleItem = {
  id: "mod-02-14",
  code: "14",
  slug: "icmp",
  pathSlug: "networking",
  title: "ICMP (INTERNET CONTROL MESSAGE PROTOCOL)",
  description: "Ağ kontrol ve denetim protokolü: ICMP Type ve Code değerleri, Ping (Echo Request Type 8 / Echo Reply Type 0), Traceroute TTL mekanizması ve ICMP Exfiltration.",
  order: 14,
  topics: [
    {
      id: "top-02-14-01",
      code: "01",
      slug: "icmp-concept-types-codes",
      pathSlug: "networking",
      moduleSlug: "icmp",
      title: "1. ICMP Nedir? Type ve Code Değerleri",
      subtitle: "Ağ Katmanının Hata ve Durum Bildirim Mekanizması",
      shortDescription: "ICMP başlığı, Type 8 Echo Request, Type 0 Echo Reply, Type 3 Destination Unreachable, Type 11 Time Exceeded.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ICMP NEDİR?", content: "ICMP (Internet Control Message Protocol), ağ cihazlarının teşhis, denetim ve hata bildirimi yapmak için kullandığı Katman 3 protokolüdür." },
        { id: "sec-02", code: "02", title: "ICMP TYPE VE CODE", content: "- Type 8 / Code 0: Echo Request (Ping isteği)\n- Type 0 / Code 0: Echo Reply (Ping yanıtı)\n- Type 3: Destination Unreachable (Hedefe ulaşılamadı)\n- Type 11: Time Exceeded (TTL aşımı)." }
      ],
      summary: ["ICMP ağ hata ve teşhis protokolüdür (Ping ve Traceroute altyapısı)."]
    },
    {
      id: "top-02-14-02",
      code: "02",
      slug: "ping-traceroute-icmp-mechanics-deep",
      pathSlug: "networking",
      moduleSlug: "icmp",
      title: "2. Ping ve Traceroute Araçlarının ICMP İç Çalışma Mantığı",
      subtitle: "RTT Hesaplama ve TTL Aşımı Haritalandırması",
      shortDescription: "Ping gidiş-dönüş süresi (RTT), Traceroute Type 11 yanıtı ve UDP/ICMP kullanımı.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PING VE TRACEROUTE", content: "Ping Type 8 atar, Type 0 bekler. Traceroute paketi TTL=1 ile gönderip router'dan Type 11 (Time Exceeded) yanıtı alarak sıçramaları haritalar." }
      ],
      summary: ["Ping Echo Request/Reply kullanır; Traceroute TTL aşımı ICMP Type 11 kullanır."]
    },
    {
      id: "top-02-14-03",
      code: "03",
      slug: "icmp-tunneling-ping-of-death",
      pathSlug: "networking",
      moduleSlug: "icmp",
      title: "3. ICMP Zafiyetleri: Ping of Death ve ICMP Tunneling",
      subtitle: "Veri Sahasına Gizli Paket Gömmek",
      shortDescription: "Kötüye kullanılan Ping paketleri, ICMP Data sahasında veri sızdırma (ptunnel).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ICMP TUNNELING", content: "Ping paketinin içine veri alanı (Data Payload) konulabilir. Saldırganlar gizli verileri ICMP payload içine gömerek kapalı ağlardan sızdırabilir." }
      ],
      summary: ["ICMP Tunneling ping paketlerinin veri sahasına zararlı kod gömülmesidir."]
    },
    {
      id: "top-02-14-04",
      code: "04",
      slug: "module-14-summary-review",
      pathSlug: "networking",
      moduleSlug: "icmp",
      title: "4. Modül Değerlendirmesi: ICMP Özet & Test",
      subtitle: "Modül 14 Bütünsel Değerlendirmesi",
      shortDescription: "ICMP Type/Code, Ping, Traceroute ve ICMP Tunneling özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "ICMP protokolünün Type 8 / Type 0 mantığını ve Traceroute mekanizmasını öğrendin." }
      ],
      summary: ["Modül 14 tamamlandı. Sıradaki hedef: 15 - DNS & DHCP."],
      practice: {
        id: "prac-02-14-04",
        prompt: "Ping komutu çalıştırıldığında hedef cihaza gönderilen ICMP paketinin Type (Tür) ve Code değeri hangisidir?",
        options: [
          { id: "a", text: "Type 8, Code 0 (Echo Request)" },
          { id: "b", text: "Type 0, Code 0 (Echo Reply)" },
          { id: "c", text: "Type 3, Code 3" },
          { id: "d", text: "Type 11, Code 0" }
        ],
        correctAnswer: "a",
        explanation: "Ping komutu hedef cihaza ICMP Type 8 Code 0 (Echo Request) paketi gönderir; hedef cihaz ise Type 0 Code 0 (Echo Reply) ile yanıt verir."
      }
    }
  ]
};
