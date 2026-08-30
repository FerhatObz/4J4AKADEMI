import { ModuleItem } from '../../../../types/lab';

export const mod19PacketAnalysis: ModuleItem = {
  id: "mod-02-19",
  code: "19",
  slug: "packet-analysis",
  pathSlug: "networking",
  title: "PACKET ANALYSIS (WIRESHARK)",
  description: "Paket Analizi ve Wireshark: Promiscuous Mode, pcap/pcapng dosyaları, Çerçeve/IP/TCP/UDP başlıklarını inceleme, Wireshark Filtreleme ve Paket Analizi.",
  order: 19,
  topics: [
    {
      id: "top-02-19-01",
      code: "01",
      slug: "wireshark-basics-promiscuous-mode",
      pathSlug: "networking",
      moduleSlug: "packet-analysis",
      title: "1. Wireshark Temelleri ve Promiscuous Mode",
      subtitle: "Ağ Kartını Tüm Paketleri Dinlemeye Zorlamak",
      shortDescription: "Wireshark arayüzü, PCAP paket yakalama ve Promiscuous mode.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PROMISCUOUS MODE", content: "Ağ kartları normalde sadece kendi MAC adresine gelen paketleri kabul eder. Promiscuous Mode açıldığında kart ortamdaki TÜM paketleri Wireshark'a iletir." }
      ],
      summary: ["Promiscuous Mode ağ kartının ortamdaki tüm paketleri yakalamasını sağlar."]
    },
    {
      id: "top-02-19-02",
      code: "02",
      slug: "wireshark-display-filters-expressions",
      pathSlug: "networking",
      moduleSlug: "packet-analysis",
      title: "2. Wireshark Görüntüleme Filtreleri (Display Filters)",
      subtitle: "Binlerce Paket Arasından İğne Aramak",
      shortDescription: "`ip.addr ==`, `tcp.port == 80`, `http.request.method == \"POST\"`, `dns` filtreleri.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WIRESHARK FİLTRELERİ", content: "`ip.src == 192.168.1.10 && tcp.flags.syn == 1` gibi gelişmiş filtrelerle sadece istenen paketler süzülür." }
      ],
      summary: ["Display filters paket dökümlerinde aranan trafiği anında bulmayı sağlar."]
    },
    {
      id: "top-02-19-03",
      code: "03",
      slug: "analyzing-tcp-handshake-wireshark",
      pathSlug: "networking",
      moduleSlug: "packet-analysis",
      title: "3. Wireshark Üzerinde TCP Handshake & Stream Takibi",
      subtitle: "SYN, SYN-ACK, ACK ve 'Follow TCP Stream'",
      shortDescription: "Paket seviyesinde TCP 3-way handshake analizi ve Follow TCP Stream.",
      order: 3,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FOLLOW TCP STREAM", content: "Wireshark'ta 'Follow TCP Stream' tıklandığında parçalanmış tüm paketler birleştirilerek kullanıcının gördüğü düz metin sohbet veya HTTP isteği elde edilir." }
      ],
      summary: ["Follow TCP Stream parçalı paketleri birleştirip ham iletişimi gösterir."]
    },
    {
      id: "top-02-19-04",
      code: "04",
      slug: "module-19-summary-review",
      pathSlug: "networking",
      moduleSlug: "packet-analysis",
      title: "4. Modül Değerlendirmesi: Packet Analysis Özet & Test",
      subtitle: "Modül 19 Bütünsel Değerlendirmesi",
      shortDescription: "Wireshark, Promiscuous mode, Display filters ve Stream takibi özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Wireshark ile paket yakalamayı, filtreleme kurallarını ve TCP stream takibini öğrendin." }
      ],
      summary: ["Modül 19 tamamlandı. Sıradaki hedef: 20 - NETWORK TROUBLESHOOTING."],
      practice: {
        id: "prac-02-19-04",
        prompt: "Wireshark üzerinde sadece belirli bir IP adresine giden veya gelen paketleri süzmek için kullanılan filtre ifadesi hangisidir?",
        options: [
          { id: "a", text: "ip.addr == 192.168.1.1" },
          { id: "b", text: "mac.filter = true" },
          { id: "c", text: "port.all == 80" },
          { id: "d", text: "dns.lookup" }
        ],
        correctAnswer: "a",
        explanation: "`ip.addr == IP_ADRESI` filtresi hem kaynak hem de hedef alanında o IP adresi geçen tüm paketleri listeler."
      }
    }
  ]
};
