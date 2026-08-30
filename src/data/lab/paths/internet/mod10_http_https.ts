import { ModuleItem } from '../../../../types/lab';

export const mod10HttpHttps: ModuleItem = {
  id: "mod-01-10",
  code: "10",
  slug: "http-https",
  pathSlug: "internet-fundamentals",
  title: "HTTP & HTTPS",
  description: "Web iletişim protokolleri, Metodlar (GET, POST, PUT, DELETE), Durum Kodları (200, 301, 404, 500), Başlıklar (Headers), TLS 1.3 El Sıkışması ve Özel Sentez Konusu: Bir Web Sitesine Girdiğimde Ne Olur?",
  order: 10,
  topics: [
    {
      id: "top-01-10-01",
      code: "01",
      slug: "http-concept-request-response",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "1. HTTP Nedir? İstek-Yanıt Metodları ve Formatı",
      subtitle: "Hypertext Transfer Protocol Mimarisi",
      shortDescription: "GET, POST, PUT, DELETE, PATCH, OPTIONS metodları ve HTTP mesaj anatomisi.",
      order: 1,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HTTP METODLARI", content: "GET (Veri getir), POST (Veri gönder/oluştur), PUT (Güncelle), DELETE (Sil), OPTIONS (CORS izinlerini sor)." }
      ],
      summary: ["HTTP web üzerindeki istemci-sunucu metin iletişim protokolüdür."]
    },
    {
      id: "top-01-10-02",
      code: "02",
      slug: "http-status-codes-200-404-500",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "2. HTTP Durum Kodları (Status Codes)",
      subtitle: "1xx, 2xx, 3xx, 4xx ve 5xx Yanıt Kodları",
      shortDescription: "200 OK, 301 Moved Permanently, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DURUM KODLARI", content: "2xx Başarılı, 3xx Yönlendirme, 4xx İstemci Hatası (404 Bulunamadı), 5xx Sunucu Hatası (500 Çöktü)." }
      ],
      summary: ["HTTP status kodları sunucunun isteğe verdiği sonucu özetler."]
    },
    {
      id: "top-01-10-03",
      code: "03",
      slug: "http-headers-request-response",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "3. HTTP Başlıkları (Headers) ve Güvenlik Başlıkları",
      subtitle: "İstek ve Yanıtların Üst Bilgileri",
      shortDescription: "Host, User-Agent, Content-Type, Authorization, CSP, HSTS ve X-Frame-Options.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HTTP HEADERS", content: "Headers meta verilerdir. Güvenlik başlıkları (CSP, HSTS, X-Content-Type-Options) XSS ve Clickjacking'i engeller." }
      ],
      summary: ["Güvenlik başlıkları istemci tarafındaki zafiyetleri sınırlayan talimatlardır."]
    },
    {
      id: "top-01-10-04",
      code: "04",
      slug: "https-tls-ssl-encryption",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "4. HTTPS ve TLS/SSL Şifreleme Mimarisi",
      subtitle: "Metin Protokolünü Şifreli Zırha Büründürmek",
      shortDescription: "Sertifika Otoriteleri (CA), Asimetrik + Simetrik Şifreleme birleşimi ve Port 443.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HTTPS NEDİR?", content: "HTTPS = HTTP + TLS Şifreleme. Dinleyicilerin (İSS, Hacker) parolanızı görmesini engeller. Sertifika Otoritesi (CA) sunucu kimliğini doğrular." }
      ],
      summary: ["HTTPS trafiği TLS ile şifreleyerek gizlilik ve bütünlük sağlar."]
    },
    {
      id: "top-01-10-05",
      code: "05",
      slug: "tls-handshake-process",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "5. TLS 1.3 El Sıkışması (Handshake) Adımları",
      subtitle: "ClientHello -> ServerHello -> Master Key -> Encrypted Data",
      shortDescription: "TLS 1.3 1-RTT el sıkışması, Diffie-Hellman anahtar değişimi ve oturum anahtarı türetme.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TLS 1.3 HANDSHAKE", content: "ClientHello atılır, ServerHello ile sertifika ve açık anahtar gelir. ECDHE ile ortak simetrik oturum anahtarı türetilip veri şifrelenir." }
      ],
      summary: ["TLS el sıkışması ortak simetrik oturum anahtarı üretip şifrelemeyi başlatır."]
    },
    {
      id: "top-01-10-06",
      code: "06",
      slug: "special-synthesis-what-happens-when-you-type-url",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "6. ÖZEL SENTEZ: Bir Web Sitesine Girdiğimde Ne Olur?",
      subtitle: "https://example.com Adresinin Uçtan Uca Bütünsel Yolculuğu",
      shortDescription: "URL -> DNS -> IP -> ARP -> TCP -> TLS -> HTTP GET -> Server -> HTTP Response -> Browser Rendering.",
      order: 6,
      readTime: "10 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "ADIM 1: URL AYRIŞTIRMA VE BROWSER CACHE",
          content: "Kullanıcı `https://example.com` yazar. Tarayıcı öncelikle kendi DNS önbelleğine ve OS `hosts` dosyasına bakar."
        },
        {
          id: "sec-02",
          code: "02",
          title: "ADIM 2: DNS SORGUSUNUN ÇÖZÜMLENMESİ",
          content: "Önbellekte yoksa Recursive Resolver (8.8.8.8) üzerinden Root -> TLD (.com) -> Authoritative silsilesiyle `93.184.216.34` IP adresi bulunur."
        },
        {
          id: "sec-03",
          code: "03",
          title: "ADIM 3: YEREL AĞ VE ARP İLE GATEWAY MAC BULMA",
          content: "Bilgisayar paketi dışarı atmak için varsayılan ağ geçidinin (Modem) MAC adresini ARP tablosundan sorgular."
        },
        {
          id: "sec-04",
          code: "04",
          title: "ADIM 4: YÖNLENDİRME (ROUTING) VE PAKET İLETİMİ",
          content: "Paket ISP router'larından BGP protokolü ile geçerek hedef web sunucusunun ağ geçidine ulaşır."
        },
        {
          id: "sec-05",
          code: "05",
          title: "ADIM 5: TCP 3-WAY HANDSHAKE",
          content: "İstemci ile sunucunun 443 portu arasında `SYN -> SYN-ACK -> ACK` paketleriyle TCP bağlantısı kurulur."
        },
        {
          id: "sec-06",
          code: "06",
          title: "ADIM 6: TLS 1.3 EL SIKIŞMASI",
          content: "ClientHello / ServerHello ile sertifika doğrulanır, şifreli tünel (ECDHE) kurulur."
        },
        {
          id: "sec-07",
          code: "07",
          title: "ADIM 7: HTTP GET İSTEĞİ VE SUNUCU İŞLEMESİ",
          content: "Şifreli tünelden `GET / HTTP/1.1` isteği iletilir. Nginx/Apache isteği işler ve veritabanından veriyi çeker."
        },
        {
          id: "sec-08",
          code: "08",
          title: "ADIM 8: HTTP RESPONSE VE TARAYICI RENDERING",
          content: "Sunucu `HTTP/1.1 200 OK` yanıtı ile HTML/CSS/JS döner. Tarayıcı DOM ağacını kurar ve sayfayı çizer!"
        }
      ],
      summary: [
        "Bir web sitesine girmek DNS, ARP, IP Routing, TCP, TLS, HTTP ve Tarayıcı Rendering aşamalarının sentezidir."
      ],
      practice: {
        id: "prac-01-10-06",
        prompt: "Tarayıcıya 'https://example.com' yazıldığında TCP el sıkışmasından (3-Way Handshake) HEMEN SONRA gerçekleşen aşama hangisidir?",
        options: [
          { id: "a", text: "DNS Sorgusunun başlatılması" },
          { id: "b", text: "TLS El Sıkışması ile şifreli tünelin kurulması" },
          { id: "c", text: "Ekranın hemen kapatılması" },
          { id: "d", text: "DHCP IP kiralama isteği atılması" }
        ],
        correctAnswer: "b",
        explanation: "HTTPS bağlantılarında TCP el sıkışması tamamlandıktan hemen sonra TLS el sıkışması başlatılarak şifreli tünel kurulur."
      }
    },
    {
      id: "top-01-10-07",
      code: "07",
      slug: "http-cookies-sessions-storage",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "7. Çerezzler (Cookies), Oturumlar (Sessions) ve LocalStorage",
      subtitle: "Durumsuz Protokolde Kullanıcı Takibi",
      shortDescription: "Set-Cookie başlığı, HttpOnly, Secure, SameSite bayrakları ve LocalStorage.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ÇEREZ GÜVENLİĞİ", content: "HttpOnly bayrağı çerezi JavaScript'ten (XSS) gizler. Secure bayrağı sadece HTTPS üzerinden yollatır. SameSite bayrağı CSRF'i engeller." }
      ],
      summary: ["HttpOnly çerezi XSS'e karşı korur, Secure bayrağı şifreli iletimi şart koşar."]
    },
    {
      id: "top-01-10-08",
      code: "08",
      slug: "cross-origin-resource-sharing-cors",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "8. Same-Origin Policy (SOP) ve CORS Mimarisi",
      subtitle: "Tarayıcı İzolasyon Sınırları",
      shortDescription: "Protokol+Host+Port eşleşmesi, Access-Control-Allow-Origin ve Preflight OPTIONS.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SOP VE CORS", content: "Same-Origin Policy sitelerin birbirinin verisini okumasını engeller. CORS başlıkları bu izolasyonu bilinçli esnetmeye yarar." }
      ],
      summary: ["SOP tarayıcı izolasyonunun temelidir."]
    },
    {
      id: "top-01-10-09",
      code: "09",
      slug: "http2-http3-performance-security",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "9. HTTP/2 ve HTTP/3 Güvenlik Yenilikleri",
      subtitle: "Multiplexing ve Zorunlu TLS",
      shortDescription: "HTTP/2 ikili katmanı, HPACK header sıkıştırması ve HTTP/3 QUIC entegrasyonu.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HTTP/2 VE HTTP/3", content: "HTTP/2 pratikte zorunlu TLS ile çalışır. HTTP/3 ise QUIC protokolü ile bağlantı sürelerini 0-RTT'ye düşürür." }
      ],
      summary: ["Modern HTTP sürümleri varsayılan şifreleme ve daha yüksek hız sunar."]
    },
    {
      id: "top-01-10-10",
      code: "10",
      slug: "module-10-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "http-https",
      title: "10. Modül Değerlendirmesi: HTTP & HTTPS Özet & Test",
      subtitle: "Modül 10 Bütünsel Sınavı",
      shortDescription: "HTTP Metodları, Status Kodları, TLS 1.3, Web yükleme sentezi ve CORS özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "HTTP metodlarını, 200/404/500 kodlarını, TLS şifrelemesini ve bir web sitesine girişteki tüm uçtan uca adımları öğrendin." }
      ],
      summary: ["Modül 10 başarıyla tamamlandı. Sıradaki hedef: 11 - ROUTING & PACKETS."],
      practice: {
        id: "prac-01-10-10",
        prompt: "Cross-Site Scripting (XSS) saldırısı ile oturum çerezlerinin (Session Cookie) JavaScript tarafından okunmasını engellemek için çereze hangi bayrak eklenmelidir?",
        options: [
          { id: "a", text: "SameSite=Lax" },
          { id: "b", text: "HttpOnly" },
          { id: "c", text: "Domain" },
          { id: "d", text: "Path=/" }
        ],
        correctAnswer: "b",
        explanation: "HttpOnly bayrağı, çerezin document.cookie JavaScript API'si tarafından okunmasını tamamen engelleyerek XSS ile oturum çalınmasını önler."
      }
    }
  ]
};
