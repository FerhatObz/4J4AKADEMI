import { ModuleItem } from '../../../../types/lab';

export const mod13ProxiesVpn: ModuleItem = {
  id: "mod-01-13",
  code: "13",
  slug: "proxies-vpn",
  pathSlug: "internet-fundamentals",
  title: "PROXIES & VPN",
  description: "Vekil sunucular (Forward Proxy), Ters Vekil (Reverse Proxy), SOCKS5, VPN Protokolleri (OpenVPN, WireGuard, IPsec) ve Tor Ağ Mimarisi.",
  order: 13,
  topics: [
    {
      id: "top-01-13-01",
      code: "01",
      slug: "forward-proxy-concept",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "1. İleri Vekil Sunucu (Forward Proxy) Nedir?",
      subtitle: "İstemciler Adına İnternete Çıkan Ara Sunucu",
      shortDescription: "Forward Proxy mantığı, istemci gizliliği, içerik filtreleme ve önbellekleme.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FORWARD PROXY", content: "Forward Proxy istemci tarafındadır. İstemciler internete çıkarken isteklerini öncelikle Proxy sunucusuna iletir; Proxy hedef siteye kendi IP'si ile bağlanıp sonucu istemciye döner." }
      ],
      summary: ["Forward Proxy istemcilerin IP'sini gizler ve filtreleme sağlar."]
    },
    {
      id: "top-01-13-02",
      code: "02",
      slug: "reverse-proxy-concept",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "2. Ters Vekil Sunucu (Reverse Proxy) Mimarisi",
      subtitle: "Sunucuları Gizleyen ve Koruyan Kalkan",
      shortDescription: "Reverse Proxy (Nginx, Cloudflare), Yük Dengeleme, SSL Termination ve WAF.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "REVERSE PROXY", content: "Reverse Proxy sunucu tarafındadır (Cloudflare, Nginx). Ziyaretçiler gerçek web sunucusunun IP'sini göremez; tüm istekler Reverse Proxy tarafından karşılanır ve süzülür." }
      ],
      summary: ["Reverse Proxy gerçek sunucuları gizler, yükü dağıtır ve WAF koruması sunar."]
    },
    {
      id: "top-01-13-03",
      code: "03",
      slug: "socks4-socks5-vs-http-proxy",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "3. SOCKS4/SOCKS5 vs HTTP Proxy",
      subtitle: "Katman 7 Proxy vs Katman 5 Protokol Bağımsız Vekil",
      shortDescription: "HTTP Proxy (Sadece HTTP/HTTPS) vs SOCKS5 (TCP/UDP desteği, kimlik doğrulama).",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SOCKS5 PROXY", content: "HTTP Proxy sadece web trafiğini anlar. SOCKS5 ise taşıma katmanında (TCP/UDP) çalışarak her türlü oyun, SSH veya DNS trafiğini vekiller." }
      ],
      summary: ["SOCKS5 protokol bağımsızdır, hem TCP hem UDP trafiğini vekiller."]
    },
    {
      id: "top-01-13-04",
      code: "04",
      slug: "vpn-concept-tunnelling-protocols",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "4. VPN (Virtual Private Network) ve Tünelleme Mantığı",
      subtitle: "Açık İnternet Üzerinde Şifreli Özel Kanal",
      shortDescription: "VPN sanal ağ adaptörü (TUN/TAP), şifreli tünelleme ve uçtan uca gizlilik.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "VPN MİMARİSİ", content: "VPN, istemci ile VPN sunucusu arasında şifreli bir tünel (Tunnel) oluşturur. Cihazdan çıkan TÜM ağ trafiği (DNS, HTTP, ICMP) şifrelenerek tünelden geçer." }
      ],
      summary: ["VPN cihazın tüm ağ trafiğini şifreli sanal bir tünelden geçirir."]
    },
    {
      id: "top-01-13-05",
      code: "05",
      slug: "vpn-protocols-openvpn-wireguard-ipsec",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "5. Modern VPN Protokolleri: OpenVPN vs WireGuard vs IPsec",
      subtitle: "Eski Devlerden Yeni Nesil Hafif Protokollere",
      shortDescription: "OpenVPN (SSL/TLS), WireGuard (ChaCha20, Noise protocol, hafif C kodu), IPsec/IKEv2.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WIREGUARD VS OPENVPN", content: "OpenVPN 100.000+ satır karmaşık koddur. WireGuard ise sadece 4.000 satır yalın C koduyla ChaCha20 şifrelemesi kullanarak devasa hız ve güvenlik sunar." }
      ],
      summary: ["WireGuard modern, hafif ve en hızlı VPN protokolüdür."]
    },
    {
      id: "top-01-13-06",
      code: "06",
      slug: "tor-network-onion-routing",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "6. Tor Ağ Mimarisi ve Soğan Yönlendirmesi (Onion Routing)",
      subtitle: "Merkeziyetsiz Anonimlik Ağları",
      shortDescription: "Guard Node, Middle Node, Exit Node ve katmanlı şifreleme.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TOR ANATOMİSİ", content: "Tor veriyi 3 rastgele düğümden (Giriş, Orta, Çıkış) geçirir. Her düğüm sadece bir sonraki adımı bilir. Hiçbir tek düğüm kimin nereye bağlandığını bilemez." }
      ],
      summary: ["Tor veriyi 3 katmanlı şifreleme ile anonimleştiren soğan yönlendirme ağıdır."]
    },
    {
      id: "top-01-13-07",
      code: "07",
      slug: "module-13-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "proxies-vpn",
      title: "7. Modül Değerlendirmesi: Proxies & VPN Özet & Test",
      subtitle: "Modül 13 Bütünsel Sınavı",
      shortDescription: "Forward Proxy, Reverse Proxy, SOCKS5, WireGuard, OpenVPN ve Tor özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "Forward Proxy'nin istemciyi, Reverse Proxy'nin sunucuyu koruduğunu, VPN'in tüm trafiği tünellediğini ve WireGuard'ın en hızlı protokol olduğunu öğrendin." }
      ],
      summary: ["Modül 13 başarıyla tamamlandı. Sıradaki hedef: 14 - INTERNET SECURITY FUNDAMENTALS."],
      practice: {
        id: "prac-01-13-07",
        prompt: "Gerçek web sunucularının IP adreslerini gizlemek, gelen DDoS saldırılarını karşılamak ve SSL sertifikasını yönetmek için sunucuların önüne koyulan vekil sistem hangisidir?",
        options: [
          { id: "a", text: "Forward Proxy" },
          { id: "b", text: "Reverse Proxy (Ters Vekil)" },
          { id: "c", text: "DHCP Pool" },
          { id: "d", text: "SOCKS4" }
        ],
        correctAnswer: "b",
        explanation: "Reverse Proxy (örneğin Cloudflare/Nginx), sunucu tarafında durarak gelen tüm istekleri karşılar, gerçek sunucu IP'lerini dış dünyadan gizler."
      }
    }
  ]
};
