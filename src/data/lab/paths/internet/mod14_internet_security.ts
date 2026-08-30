import { ModuleItem } from '../../../../types/lab';

export const mod14InternetSecurity: ModuleItem = {
  id: "mod-01-14",
  code: "14",
  slug: "internet-security-fundamentals",
  pathSlug: "internet-fundamentals",
  title: "INTERNET SECURITY FUNDAMENTALS",
  description: "İnternet tehditleri, Firewalls (Paket filtreleme vs Stateful vs WAF), IDS/IPS sistemleri, DDoS Türleri (Volumetric vs Protocol vs Application) ve INTERNET FUNDAMENTALS MEZUNİYET DEĞERLENDİRMESİ.",
  order: 14,
  topics: [
    {
      id: "top-01-14-01",
      code: "01",
      slug: "firewalls-stateless-stateful-waf",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-security-fundamentals",
      title: "1. Güvenlik Duvarı (Firewall) Türleri",
      subtitle: "Stateless vs Stateful vs Web Application Firewall (WAF)",
      shortDescription: "Paket filtreleme (Katman 3/4), Stateful durum takibi ve WAF (Katman 7).",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FIREWALL TÜRLERİ", content: "Stateless Firewall sadece IP/Port'a bakar. Stateful Firewall TCP el sıkışma durumunu takip eder. WAF (Web Application Firewall) ise Katman 7'deki SQLi/XSS saldırılarını engeller." }
      ],
      summary: ["WAF Katman 7 web zafiyetlerini engelleyen gelişmiş güvenlik duvarıdır."]
    },
    {
      id: "top-01-14-02",
      code: "02",
      slug: "ids-vs-ips-systems",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-security-fundamentals",
      title: "2. IDS (Intrusion Detection) vs IPS (Intrusion Prevention)",
      subtitle: "Tehdit Algılama vs Tehdit Engelleme",
      shortDescription: "Snort, Suricata, Signature-based vs Anomaly-based tespit ve engelleme.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IDS VS IPS", content: "IDS trafiğin bir kopyasını inceleyip alarm üretir (Pasif). IPS ise trafiğin tam yolunda durarak zararlı paketi anında engeller (Aktif)." }
      ],
      summary: ["IDS alarm üretir, IPS trafiği anında bloklar."]
    },
    {
      id: "top-01-14-03",
      code: "03",
      slug: "ddos-attack-types-mitigation",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-security-fundamentals",
      title: "3. DDoS Saldırı Türleri ve Savunma Stratejileri",
      subtitle: "Hacimsel (Volumetric), Protokol ve Uygulama Saldırıları",
      shortDescription: "UDP Flood, SYN Flood, HTTP Flood, Scrubbing Centers ve Rate Limiting.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DDOS TÜRLERİ", content: "1. Hacimsel (UDP Flood - Bant genişliğini doldurur)\n2. Protokol (SYN Flood - CPU/RAM tüketir)\n3. Uygulama (HTTP Flood - Veritabanını yorar)." }
      ],
      summary: ["DDoS servisin erişilebilirliğini çökertmeyi hedefleyen felç etme saldırılarıdır."]
    },
    {
      id: "top-01-14-04",
      code: "04",
      slug: "tls-ssl-man-in-the-middle-stripping",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-security-fundamentals",
      title: "4. SSL Stripping ve HSTS Koruması",
      subtitle: "HTTPS Bağlantısını HTTP'ye Düşürme Saldırısı",
      shortDescription: "Moxie Marlinspike SSLstrip aracı, HSTS (HTTP Strict Transport Security) başlığı ve Preload listesi.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SSL STRIPPING VE HSTS", content: "SSLstrip kurbanın `https://` isteklerini araya girerek `http://` bağlantısına çevirir. HSTS başlığı tarayıcının o siteye Asla şifresiz HTTP ile girmemesini garanti eder." }
      ],
      summary: ["HSTS tarayıcıların HTTP'ye düşürülmesini (SSL Stripping) engeller."]
    },
    {
      id: "top-01-14-05",
      code: "05",
      slug: "path-01-final-check-graduation",
      pathSlug: "internet-fundamentals",
      moduleSlug: "internet-security-fundamentals",
      title: "5. INTERNET FUNDAMENTALS — FINAL CHECK & MEZUNİYET",
      subtitle: "14 Modüllük İnternet Mimarisi Kapsamlı Sınavı",
      shortDescription: "IP, MAC, Port, DNS, DHCP, TCP, UDP, HTTP, HTTPS, Routing, NAT, Proxy, VPN ve Security bütünsel sınavı.",
      order: 5,
      readTime: "10 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "KAPSAMLI MEZUNİYET KONTROLÜ",
          content: "Tebrikler! 01 // INTERNET FUNDAMENTALS patikasını tamamladın. Artık aşağıdaki soruların teknik cevaplarına tamamen hakimsin:\n- IP ve MAC adreslerinin katman farkları,\n- DNS'in hiyerarşik sorgu yapısı,\n- DHCP DORA süreci,\n- TCP 3-way handshake ve UDP yalınlığı,\n- HTTP metodları ve HTTPS TLS 1.3 şifrelemesi,\n- NAT ve PAT adres dönüştürmesi,\n- Bir web sitesine girmeden nihai yanıta kadar geçen tüm uçtan uca adımlar!"
        }
      ],
      summary: [
        "01 // INTERNET FUNDAMENTALS MEZUNİYETİ TAMAMLANDI!"
      ],
      practice: {
        id: "prac-01-14-05",
        prompt: "Bir web sitesinin HTTPS bağlantısının Man-in-the-Middle saldırısı ile düz metin HTTP bağlantısına düşürülmesini (SSL Stripping) engellemek için sunucu tarafından gönderilen güvenlik başlığı hangisidir?",
        options: [
          { id: "a", text: "X-Frame-Options" },
          { id: "b", text: "HSTS (HTTP Strict Transport Security)" },
          { id: "c", text: "Content-Type" },
          { id: "d", text: "Server: Nginx" }
        ],
        correctAnswer: "b",
        explanation: "HSTS (HTTP Strict Transport Security), tarayıcıya o alan adına sadece ve sadece HTTPS üzerinden şifreli bağlanma zorunluluğu getirerek SSL Stripping saldırılarını imkansız kılar."
      }
    }
  ]
};
