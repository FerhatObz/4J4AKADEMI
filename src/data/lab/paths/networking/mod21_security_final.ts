import { ModuleItem } from '../../../../types/lab';

export const mod21SecurityFinal: ModuleItem = {
  id: "mod-02-21",
  code: "21",
  slug: "network-security-fundamentals",
  pathSlug: "networking",
  title: "NETWORK SECURITY FUNDAMENTALS",
  description: "Ağ Güvenliği Temelleri, Packet Sniffing, ARP Spoofing, Port Scanning, MITM Saldırıları, Trafik Analizi ve NETWORKING FINAL CHECK (Kapsamlı Sentez Sınavı).",
  order: 21,
  topics: [
    {
      id: "top-02-21-01",
      code: "01",
      slug: "network-threats-sniffing-spoofing-mitm",
      pathSlug: "networking",
      moduleSlug: "network-security-fundamentals",
      title: "1. Ağ Tehditleri: Packet Sniffing, ARP Spoofing ve MITM",
      subtitle: "Yerel Ağdaki Dinleme ve Araya Girme Saldırıları",
      shortDescription: "Açık metin trafik tehlikesi, ARP zehirlenmesi ile MITM ve Ettercap/Wireshark.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "AĞ TEHDİTLERİ", content: "Şifrelenmemiş ağ trafiği (HTTP, FTP, Telnet) ağdaki herhangi bir dinleyici tarafından Sniffing ile okunabilir. ARP Spoofing ile kurbanın trafiği saldırgan üzerinden geçirilir (MITM)." }
      ],
      summary: ["Açık metin protokoller yerel ağda kolayca dinlenebilir (Sniffing/MITM)."]
    },
    {
      id: "top-02-21-02",
      code: "02",
      slug: "secure-network-protocols-migration",
      pathSlug: "networking",
      moduleSlug: "network-security-fundamentals",
      title: "2. Güvensiz Protokollerden Güvenli Protokollere Geçiş",
      subtitle: "HTTP yerine HTTPS, Telnet yerine SSH, FTP yerine SFTP",
      shortDescription: "Telnet->SSH, HTTP->HTTPS, FTP->SFTP, DNS->DoH, SNMPv1->SNMPv3 dönüşümü.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "GÜVENLİ PROTOKOL DÖNÜŞÜMÜ", content: "- HTTP (80) -> HTTPS (443)\n- Telnet (23) -> SSH (22)\n- FTP (21) -> SFTP (22)\n- DNS (53) -> DoH (443) / DoT (853)." }
      ],
      summary: ["Güvenli şifreli alternatif protokoller ağ dinleme saldırılarını etkisiz kılar."]
    },
    {
      id: "top-02-21-03",
      code: "03",
      slug: "network-visibility-traffic-analysis-siem",
      pathSlug: "networking",
      moduleSlug: "network-security-fundamentals",
      title: "3. Ağ Görünürlüğü (Network Visibility) ve Trafik Analizi",
      subtitle: "NetFlow, IPFIX, SPAN/TAP Portları ve SIEM Korelasyonu",
      shortDescription: "Switch SPAN (Port Mirroring), Donanımsal Network TAP ve NetFlow/IPFIX analizi.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NETFLOW VE TAP PORTLARI", content: "Ağdaki tüm trafiğin izlenmesi için Switch'lerde SPAN (Port Mirroring) açılır veya fiziksel Network TAP cihazları takılarak trafik SIEM/IDS sistemlerine aktarılır." }
      ],
      summary: ["SPAN ve TAP portları ağ görünürlüğü ve güvenlik analizi sağlar."]
    },
    {
      id: "top-02-21-04",
      code: "04",
      slug: "networking-path-final-check-graduation",
      pathSlug: "networking",
      moduleSlug: "network-security-fundamentals",
      title: "4. NETWORKING PATH — FINAL CHECK & MEZUNİYET SINAVI",
      subtitle: "21 Modüllük Ağ Mimarisi Bütünsel Senaryo Sınavı",
      shortDescription: "DNS, IP, ARP, Ethernet, Gateway, Routing, TCP, TLS ve HTTP sentez senaryosu.",
      order: 4,
      readTime: "12 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "BÜTÜNSEL SENARYO KONTROLÜ",
          content: "Tebrikler! 02 // NETWORKING patikasını 21 devasa modül ve 120'den fazla derin konu ile tamamladın.\n\nSentez Senaryosu:\n1. Kullanıcı `https://bank.com` yazar.\n2. DNS ile IP bulunur (`A` kaydı).\n3. ARP ile Varsayılan Ağ Geçidi MAC adresi alınır.\n4. Ethernet Çerçevesi oluşturulup Modeme yollanır.\n5. Router yönlendirme tablosuyla (Routing) paketi sonraki sıçramaya (Next Hop) atar.\n6. TCP 3-Way Handshake ile bağlantı kurulur.\n7. TLS 1.3 el sıkışması ile şifreli tünel açılır.\n8. HTTP GET isteği gönderilir ve sayfa çizilir!"
        }
      ],
      summary: [
        "02 // NETWORKING PATH MEZUNİYETİ TAMAMLANDI!"
      ],
      practice: {
        id: "prac-02-21-04",
        prompt: "Ağdaki bir bilgisayarın internetteki bir web sunucusuna HTTPS üzerinden bağlanırken katman sırasına göre gerçekleştirdiği adımlardan hangisi TCP el sıkışmasından (3-Way Handshake) ÖNCE gerçekleşmek zorundadır?",
        options: [
          { id: "a", text: "DNS sorgusu ile hedef IP'nin öğrenilmesi ve ARP ile Gateway MAC adresinin bulunması" },
          { id: "b", text: "TLS 1.3 El sıkışmasının tamamlanması" },
          { id: "c", text: "HTTP GET isteğinin gönderilmesi" },
          { id: "d", text: "HTML kodunun ekrana çizilmesi" }
        ],
        correctAnswer: "a",
        explanation: "TCP bağlantısının kurulabilmesi için öncelikle hedef IP adresinin (DNS ile) ve paketlerin çıkacağı yerel ağ geçidinin MAC adresinin (ARP ile) öğrenilmesi zorunludur."
      }
    }
  ]
};
