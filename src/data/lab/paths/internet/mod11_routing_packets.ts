import { ModuleItem } from '../../../../types/lab';

export const mod11RoutingPackets: ModuleItem = {
  id: "mod-01-11",
  code: "11",
  slug: "routing-packets",
  pathSlug: "internet-fundamentals",
  title: "ROUTING & PACKETS",
  description: "IP paket anatomisi, Yönlendirme (Routing), Routerlar, Yönlendirme tabloları, BGP (Border Gateway Protocol), OSPF, TTL (Time-To-Live) ve Traceroute.",
  order: 11,
  topics: [
    {
      id: "top-01-11-01",
      code: "01",
      slug: "ip-packet-structure-header",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "1. IP Paket Anatomisi ve Başlık (Header) Yapısı",
      subtitle: "20-Baytlık IPv4 Başlık Alanları",
      shortDescription: "Source IP, Destination IP, TTL, Protocol, Checksum ve Fragment Offset.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IP PAKET BAŞLIĞI", content: "IP paketi kaynak ve hedef IP adresini, TTL (yaşam süresi) değerini ve üst katman protokol bilgisini (6 TCP, 17 UDP) taşır." }
      ],
      summary: ["IP paketi ağ katmanında adresleme ve yönlendirme bilgisini barındırır."]
    },
    {
      id: "top-01-11-02",
      code: "02",
      slug: "router-role-routing-table",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "2. Router (Yönlendirici) ve Yönlendirme Tablosu (Routing Table)",
      subtitle: "Paket Trafik Polisi",
      shortDescription: "Default Gateway, Route lookup, Longest Prefix Match ve `route -n` / `netstat -r`.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "YÖNLENDİRME TABLOSU", content: "Router gelen her paketin hedef IP'sini okur, yönlendirme tablosundaki en spesifik alt ağ eşleşmesine (Longest Prefix Match) göre paketi sonraki sıçramaya (Next Hop) atar." }
      ],
      summary: ["Router yönlendirme tablosunu kullanarak paketi sonraki durağa iletir."]
    },
    {
      id: "top-01-11-03",
      code: "03",
      slug: "ttl-traceroute-icmp-mechanics",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "3. TTL (Time-To-Live) ve Traceroute / MTR Çalışma Mantığı",
      subtitle: "Sonsuz Döngü Engelleme ve Adım Adım Rota İzleme",
      shortDescription: "TTL düşürülmesi, ICMP Time Exceeded (Type 11) mesajı ve Traceroute simülasyonu.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TRACEROUTE MANİTĞI", content: "Traceroute paketin TTL değerini 1'den başlatıp sırayla artırır. Her router TTL=0 olduğunda 'ICMP Time Exceeded' döner ve haritayı çıkarır." }
      ],
      summary: ["Traceroute TTL silsilesi ile paketin geçtiği tüm router'ları haritalandırır."]
    },
    {
      id: "top-01-11-04",
      code: "04",
      slug: "bgp-border-gateway-protocol",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "4. BGP (Border Gateway Protocol) ve Küresel İnternet Rotaları",
      subtitle: "Otonom Sistemler (AS) Arası Rotalama",
      shortDescription: "AS (Autonomous System) numaraları, Path-Vector routing ve küresel internet omurgası.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BGP PROTOKOLÜ", content: "BGP, dünyadaki binlerce ISP (Otonom Sistem - AS) arasında hangi IP bloklarının nerede olduğunu duyuran ana yönlendirme protokolüdür." }
      ],
      summary: ["BGP küresel internet otonom sistemleri arasındaki rotalama protokolüdür."]
    },
    {
      id: "top-01-11-05",
      code: "05",
      slug: "bgp-hijacking-route-leak-attacks",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "5. BGP Hijacking ve Küresel İnternet Kesintileri",
      subtitle: "Sahte BGP Rotaları İle Tüm Ülke Trafiğini Çalma",
      shortDescription: "Sahte AS path duyuruları, YouTube BGP sızıntısı ve trafiği başka ülkeye çekme.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BGP HIJACKING", content: "Bir ISP sahte BGP duyurusu yaparak 'Google'ın IP bloğu bende' derse, küresel internet trafiği o ISP'ye akar. RPKI doğrulaması bunu engellemeye çalışır." }
      ],
      summary: ["BGP Hijacking sahte rota duyurusuyla küresel internet trafiğini gasp etmektir."]
    },
    {
      id: "top-01-11-06",
      code: "06",
      slug: "module-11-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "routing-packets",
      title: "6. Modül Değerlendirmesi: Routing & Packets Özet & Test",
      subtitle: "Modül 11 Bütünsel Sınavı",
      shortDescription: "IP Paket, Router, TTL, Traceroute, BGP ve BGP Hijacking özet testi.",
      order: 6,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "Router'ların paketi hedef IP'ye göre yönlendirdiğini, Traceroute'un TTL aşımı ile çalıştığını ve BGP'nin küresel rotalama yaptığını öğrendin." }
      ],
      summary: ["Modül 11 başarıyla tamamlandı. Sıradaki hedef: 12 - NAT & PRIVATE NETWORKS."],
      practice: {
        id: "prac-01-11-06",
        prompt: "Traceroute komutunun paketin geçtiği tüm router (yönlendirici) IP adreslerini adım adım tespit ederken kullandığı mekanizma hangisidir?",
        options: [
          { id: "a", text: "IP paketindeki TTL değerini 1'den başlatıp sırayla artırarak ICMP Time Exceeded yanıtlarını almak" },
          { id: "b", text: "Tüm router'lara e-posta atmak" },
          { id: "c", text: "DNS CNAME kaydını sorgulamak" },
          { id: "d", text: "Wi-Fi şifresini değiştirmek" }
        ],
        correctAnswer: "a",
        explanation: "Traceroute paketin TTL değerini 1, 2, 3... şeklinde artırarak gönderir; TTL'i 0 olan her router ICMP Time Exceeded yanıtı dönerek rotayı ortaya çıkarır."
      }
    }
  ]
};
