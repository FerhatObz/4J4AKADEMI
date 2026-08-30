import { ModuleItem } from '../../../../types/lab';

export const mod06Dns: ModuleItem = {
  id: "mod-01-06",
  code: "06",
  slug: "dns",
  pathSlug: "internet-fundamentals",
  title: "DNS (DOMAIN NAME SYSTEM)",
  description: "İnternetin telefon rehberi: Alan adları, Hiyerarşik sunucu ağacı (Root, TLD, Authoritative), Kayıt türleri (A, AAAA, MX, TXT, CNAME), DNS Önbellek, TTL ve DNS Güvenliği (DNSSEC, DNS Tunneling).",
  order: 6,
  topics: [
    {
      id: "top-01-06-01",
      code: "01",
      slug: "dns-concept-domain-hostname",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "1. DNS Nedir? Domain, Hostname ve FQDN Anatomisi",
      subtitle: "İnsan Dostu İsimlerden Makine Dostu IP'lere",
      shortDescription: "Domain ismi, Subdomain, FQDN (Fully Qualified Domain Name) ve TLD kavramları.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "DNS (Domain Name System), insanların hatırlayabileceği alan adlarını (`example.com`) bilgisayarların anlayabileceği IP adreslerine (`93.184.216.34`) dönüştüren küresel dağıtık bir veritabanı sistemidir." },
        { id: "sec-02", code: "02", title: "FQDN ANATOMİSİ", content: "`sub.domain.com.` yapısında `.` root'u, `com` TLD'yi, `domain` ikinci seviye domain'i, `sub` ise subdomain/hostname'i temsil eder." }
      ],
      summary: ["DNS alan adlarını IP adreslerine çeviren dağıtık sistemdir."]
    },
    {
      id: "top-01-06-02",
      code: "02",
      slug: "dns-hierarchy-root-tld-authoritative",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "2. DNS Hiyerarşisi: Root, TLD ve Authoritative Sunucular",
      subtitle: "Dünya Çapında Dağıtık Ağacın Katmanları",
      shortDescription: "Root DNS Servers (13 küresel IP adresi), Top-Level Domain (TLD) ve Authoritative DNS.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DNS HİYERARŞİK SUNUCULARI", content: "1. Root Servers (Kök sunucular: 13 harf grubu, binlerce Anycast düğümü)\n2. TLD Servers (.com, .org, .tr sunucuları)\n3. Authoritative Servers (Alan adının gerçek kayıtlarını tutan ana sunucu)." }
      ],
      summary: ["DNS sorgusu Root -> TLD -> Authoritative sunucu silsilesini takip eder."]
    },
    {
      id: "top-01-06-03",
      code: "03",
      slug: "recursive-resolver-dns-lookup-flow",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "3. Recursive Resolver ve Adım Adım Sorgu Döngüsü",
      subtitle: "Tarayıcı Butonuna Basıldığında Adım Adım DNS Yolculuğu",
      shortDescription: "Özyinelemeli (Recursive) sorgu vs Yinelemeli (Iterative) sorgu akışı.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RECURSIVE RESOLVER DÖNGÜSÜ", content: "1. İstemci DNS Önbelleğine bakar.\n2. Yoksa Recursive Resolver'a (8.8.8.8) sorar.\n3. Resolver Root'a sorar -> TLD'ye yönlendirir.\n4. TLD'ye sorar -> Authoritative'e yönlendirir.\n5. Authoritative IP'yi döner. Resolver istemciye iletir." }
      ],
      summary: ["Recursive Resolver sorguyu adımlarla tamamlayıp istemciye nihai yanıtı getirir."]
    },
    {
      id: "top-01-06-04",
      code: "04",
      slug: "dns-record-types-a-aaaa-cname-txt",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "4. DNS Kayıt Türleri (DNS Records)",
      subtitle: "A, AAAA, CNAME, MX, TXT, NS ve SOA Kayıtları",
      shortDescription: "A (IPv4), AAAA (IPv6), CNAME (Alias), MX (Mail), TXT (SPF/DMARC/Verification).",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KAYIT TÜRLERİ", content: "A: IPv4 adresi, AAAA: IPv6 adresi, CNAME: Başka bir domaine takma isim, MX: E-posta sunucusu, TXT: Doğrulama ve güvenlik politikaları (SPF, DMARC)." }
      ],
      summary: ["DNS kayıt türleri alan adının hangi IP veya servise yönlendirildiğini belirler."]
    },
    {
      id: "top-01-06-05",
      code: "05",
      slug: "dns-caching-ttl",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "5. DNS Önbellekleme (Caching) ve TTL (Time-To-Live)",
      subtitle: "Sorgu Hızlandırma ve Süre Yönetimi",
      shortDescription: "Tarayıcı önbelleği, İşletim sistemi önbelleği, TTL saniye mantığı.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TTL VE CACHE", content: "TTL (Time-To-Live), bir DNS kaydının önbellekte kaç saniye saklanacağını söyler. TTL süresince tekrar DNS sorgusu atılmaz." }
      ],
      summary: ["TTL süresince DNS kaydı önbellekten hızlıca okunur."]
    },
    {
      id: "top-01-06-06",
      code: "06",
      slug: "dns-cache-poisoning-kaminsky",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "6. DNS Cache Poisoning ve Kaminsky Saldırısı",
      subtitle: "Önbelleği Sahte IP İle Zehirleme",
      shortDescription: "Transaction ID tahmini, sahte yanıt enjeksiyonu ve oltama yönlendirmesi.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CACHE POISONING", content: "Saldırgan sahte Transaction ID'li yanıtlar enjekte ederek Resolver önbelleğine sahte IP kaydeder. Kullanıcılar meşru site yerine oltama sitesine gider." }
      ],
      summary: ["DNS Cache Poisoning sahte DNS yanıtı enjekte ederek kurbanları oltamaya çekmektir."]
    },
    {
      id: "top-01-06-07",
      code: "07",
      slug: "dnssec-security-extensions",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "7. DNSSEC (DNS Security Extensions)",
      subtitle: "Dijital İmzalı Kriptografik DNS",
      shortDescription: "RRSIG, DNSKEY, DS kayıtları ve kriptografik bütünlük doğrulaması.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DNSSEC KORUMASI", content: "DNSSEC, DNS yanıtlarını açık anahtarlı şifreleme ile dijital olarak imzalar. Resolver imzanın sahte olduğunu görünce paketi reddeder." }
      ],
      summary: ["DNSSEC DNS yanıtlarına dijital imza ekleyerek sahteciliği engeller."]
    },
    {
      id: "top-01-06-08",
      code: "08",
      slug: "doh-dot-encrypted-dns",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "8. Şifreli DNS: DoH (DNS over HTTPS) ve DoT (DNS over TLS)",
      subtitle: "İSS ve Dinleyicilerden DNS Sorgularını Gizleme",
      shortDescription: "53 portu düz metin DNS vs Port 853 (DoT) ve Port 443 (DoH) şifrelemesi.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DOH VE DOT", content: "Geleneksel DNS 53 portundan düz metindir. DoH sorguları HTTPS (443) içinde şifreleyerek İSS'lerin hangi sitelere girdiğinizi izlemesini engeller." }
      ],
      summary: ["DoH ve DoT DNS sorgularını şifreleyerek gizlilik sağlar."]
    },
    {
      id: "top-01-06-09",
      code: "09",
      slug: "dns-exfiltration-tunneling",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "9. DNS Tunneling ve Veri Sızıntısı (Exfiltration)",
      subtitle: "Güvenlik Duvarlarını DNS Protokolü İle Aşma",
      shortDescription: "Subdomain TXT/A sorguları üzerinden veri sızdırma (DNSCat2, iodine).",
      order: 9,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DNS TUNNELING", content: "Firewall'lar DNS portunu (53) kapatamaz. Saldırganlar veriyi Base64 ile subdomain'e yazıp (`data.attacker.com`) DNS sorgusu görünümünde veri sızdırır." }
      ],
      summary: ["DNS Tunneling kapalı firewall'ları DNS sorguları üzerinden sızmak için kullanır."]
    },
    {
      id: "top-01-06-10",
      code: "10",
      slug: "module-06-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dns",
      title: "10. Modül Değerlendirmesi: DNS Özet & Test",
      subtitle: "Modül 06 Bütünsel Sınavı",
      shortDescription: "Root, TLD, A/TXT/MX kayıtları, TTL, DNSSEC, DoH ve Tunneling özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "DNS'in alan adını IP'ye çevirdiğini, A kaydının IPv4 olduğunu, DoH'ın şifreli DNS sunduğunu öğrendin." }
      ],
      summary: ["Modül 06 başarıyla tamamlandı. Sıradaki hedef: 07 - DHCP."],
      practice: {
        id: "prac-01-06-10",
        prompt: "Bir alan adının e-posta sunucularının (Mail Server) hangi IP adreslerine yönlendirildiğini gösteren DNS kayıt türü hangisidir?",
        options: [
          { id: "a", text: "A Kaydı" },
          { id: "b", text: "MX Kaydı" },
          { id: "c", text: "TXT Kaydı" },
          { id: "d", text: "CNAME Kaydı" }
        ],
        correctAnswer: "b",
        explanation: "MX (Mail Exchange) kaydı, bir domain adına gelen e-postaların hangi mail sunucusu tarafından karşılanacağını belirtir."
      }
    }
  ]
};
