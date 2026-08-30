import { ModuleItem } from '../../../../types/lab';

export const mod03IpAddresses: ModuleItem = {
  id: "mod-01-03",
  code: "03",
  slug: "ip-addresses",
  pathSlug: "internet-fundamentals",
  title: "IP ADDRESSES",
  description: "IPv4 vs IPv6, IP mantığı, CIDR alt ağlar, Statik vs Dinamik IP, Loopback (127.0.0.1) ve IP bazlı erişim kontrolü.",
  order: 3,
  topics: [
    {
      id: "top-01-03-01",
      code: "01",
      slug: "ip-address-concept-ipv4",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "1. IP Adresi Nedir? IPv4 Yapısı ve Oktetler",
      subtitle: "Dijital Ev Adresimiz",
      shortDescription: "32-bit IPv4 adresi, 4 oktet gösterimi ve ikili taban karşılığı.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "IP (Internet Protocol) adresi, ağdaki her cihaza atanan 32-bitlik (IPv4) benzersiz mantıksal kimlik numarasıdır (Örn: 192.168.1.1)." }
      ],
      summary: ["IPv4 32-bitlik 4 oktetten oluşan adresleme sistemidir."]
    },
    {
      id: "top-01-03-02",
      code: "02",
      slug: "ipv6-architecture-necessity",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "2. IPv6 Mimarisi ve IPv4 Tüketimi",
      subtitle: "128-bitlik Devasa Adres Uzayı",
      shortDescription: "IPv4 adres tükenmesi, 128-bit IPv6 hex gösterimi ve avantajları.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IPV6 GEREKSİNİMİ", content: "IPv4 maksimum 4.3 milyar adres sunar ve tükenmiştir. IPv6 ise 128-bit (340 kentilyon) adres sunar (Örn: 2001:db8::8a2e:370:7334)." }
      ],
      summary: ["IPv6 128-bitlik yeni nesil devasa adresleme standardıdır."]
    },
    {
      id: "top-01-03-03",
      code: "03",
      slug: "public-vs-private-ip-rfc1918",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "3. Genel (Public) vs Özel (Private) IP Adresleri",
      subtitle: "RFC 1918 Özel Ağ Blokları",
      shortDescription: "Dışarıya açık Public IP vs İç ağdaki Private IP (10.x.x.x, 172.16.x.x, 192.168.x.x).",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RFC 1918 ÖZEL AĞLAR", content: "İnternette doğrudan yönlendirilemeyen ev/ofis içi IP bloklarıdır: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16." }
      ],
      summary: ["Private IP'ler iç ağda kullanılır, internette yönlendirilmez."]
    },
    {
      id: "top-01-03-04",
      code: "04",
      slug: "static-vs-dynamic-ip",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "4. Statik IP vs Dinamik IP Adresleri",
      subtitle: "Sabit Sunucu Adresleri vs Değişken Ev Adresleri",
      shortDescription: "DHCP ile otomatik IP alma vs Manuel sabit IP atama.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STATİK VS DİNAMİK", content: "Sunucular hiç değişmeyen Statik IP kullanır. Ev aboneleri ise ISP tarafından sürekli değiştirilen Dinamik IP kullanır." }
      ],
      summary: ["Sunucular statik, ev cihazları dinamik IP kullanır."]
    },
    {
      id: "top-01-03-05",
      code: "05",
      slug: "loopback-localhost-ip",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "5. Loopback Adresi (127.0.0.1 / ::1) ve Localhost",
      subtitle: "Kendi Kendine Konuşan Bilgisayar",
      shortDescription: "127.0.0.1, Localhost, Loopback arayüzü (lo) ve ağ paketlerinin dışarı çıkmaması.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "127.0.0.1 LOCALHOST", content: "127.0.0.1 (IPv6 ::1) bilgisayarın kendisine işaret eden sanal test arayüzüdür. Trafik ağ kartından dışarı çıkmaz." }
      ],
      summary: ["127.0.0.1 makinenin kendi yerel sanal döngü adresidir."]
    },
    {
      id: "top-01-03-06",
      code: "06",
      slug: "cidr-notation-subnet-masks",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "6. CIDR Notasyonu ve Alt Ağ Maskeleri (Subnet Mask)",
      subtitle: "/24, /16 Notasyonu ve Ağ/Host Ayrımı",
      shortDescription: "255.255.255.0 maskesi, CIDR takısı (/24), Network ID ve Broadcast ID.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SUBNET MASK MANTIĞI", content: "Subnet mask (255.255.255.0 veya /24), IP adresinin hangi kısmının Ağ Kimliği (Network ID), hangi kısmının Cihaz Kimliği (Host ID) olduğunu gösterir." }
      ],
      summary: ["Subnet mask IP adresinin ağ kimliğini ve cihaz sayısını belirler."]
    },
    {
      id: "top-01-03-07",
      code: "07",
      slug: "apipa-link-local-ip",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "7. APIPA ve Link-Local IP Adresleri (169.254.x.x)",
      subtitle: "DHCP Sunucusu Bulunamadığında Ne Olur?",
      shortDescription: "169.254.0.0/16 APIPA blokları ve otomatize konfigürasyon.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "APIPA IP ADRESİ", content: "Bilgisayar DHCP sunucusundan IP alamazsa Windows/Mac otomatik olarak 169.254.x.x bloğundan geçici bir APIPA adresi atar." }
      ],
      summary: ["169.254.x.x DHCP sunucusuna ulaşılamadığında otomatize atanan adrestir."]
    },
    {
      id: "top-01-03-08",
      code: "08",
      slug: "ip-spoofing-attacks",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "8. IP Sahteciliği (IP Spoofing) Saldırıları",
      subtitle: "Başkasının IP Adresiyle Paket Gönderme",
      shortDescription: "IP başlığı manipülasyonu, UDP amplification ve BCP 38 / RCF 2827 engellemesi.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IP SPOOFING", content: "Saldırgan giden paketin kaynak IP adresini başka bir kurbanın IP'si yapabilir. UDP gibi doğrulamasız protokollerde DDoS ve yansıtma (reflection) için kullanılır." }
      ],
      summary: ["IP Spoofing paketin kaynak IP adresinin sahtesini üretmektir."]
    },
    {
      id: "top-01-03-09",
      code: "09",
      slug: "ip-geolocation-threat-intelligence",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "9. IP Konum Belirleme (Geolocation) ve Tehdit İstihbaratı",
      subtitle: "IP Adresinden Ülke ve Şehir Tespiti",
      shortDescription: "MaxMind GeoIP veritabanları, IP karaliste (Blacklists) ve BGP taraması.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "GEOIP TESPİTİ", content: "RIR kayıtları ve GeoIP veritabanları sayesinde bir IP adresinin hangi ülkede ve ISP'de olduğu coğrafi olarak tespit edilebilir." }
      ],
      summary: ["GeoIP IP adreslerinin fiziksel konum tespiti ve güvenlik engellemesinde kullanılır."]
    },
    {
      id: "top-01-03-10",
      code: "10",
      slug: "module-03-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ip-addresses",
      title: "10. Modül Değerlendirmesi: IP Addresses Özet & Test",
      subtitle: "Modül 03 Bütünsel Sınavı",
      shortDescription: "IPv4/v6, Public/Private, RFC 1918, Subnetting, APIPA ve IP Spoofing özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "Private IP'lerin iç ağda yaşayıp internette doğrudan yönlendirilemediğini, 127.0.0.1'in localhost olduğunu öğrendin." }
      ],
      summary: ["Modül 03 başarıyla tamamlandı. Sıradaki hedef: 04 - MAC ADDRESSES."],
      practice: {
        id: "prac-01-03-10",
        prompt: "Aşağıdaki IP adresi bloklarından hangisi RFC 1918 standardına göre ev/ofis içi özel (Private) ağlara ayrılmıştır?",
        options: [
          { id: "a", text: "8.8.8.8" },
          { id: "b", text: "192.168.1.5" },
          { id: "c", text: "1.1.1.1" },
          { id: "d", text: "93.184.216.34" }
        ],
        correctAnswer: "b",
        explanation: "192.168.0.0/16 bloğu RFC 1918 kapsamında özel iç ağlara (Private IP) ayrılmıştır ve doğrudan internete çıkamaz."
      }
    }
  ]
};
