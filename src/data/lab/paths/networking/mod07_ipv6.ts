import { ModuleItem } from '../../../../types/lab';

export const mod07Ipv6: ModuleItem = {
  id: "mod-02-07",
  code: "07",
  slug: "ipv6",
  pathSlug: "networking",
  title: "IPv6 (INTERNET PROTOCOL VERSION 6)",
  description: "IPv6 mimarisi, 128-bit Hexadecimal gösterim, Sıfır kısaltma kuralları, IPv6 Adres Türleri (Global Unicast, Link-Local fe80::, Multicast), SLAAC ve IPv6 Güvenliği.",
  order: 7,
  topics: [
    {
      id: "top-02-07-01",
      code: "01",
      slug: "ipv6-necessity-128bit-structure",
      pathSlug: "networking",
      moduleSlug: "ipv6",
      title: "1. IPv6 Nedir? 128-Bitlik Adres Mimarisi ve Formatı",
      subtitle: "IPv4 Adres Tükenmesine Karşı Evrensel Çözüm",
      shortDescription: "128 bit, 8 hextet, Hexadecimal gösterim ve adres uzayı genliği.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "IPv6, 128-bitlik adres yapısıyla 3.4 x 10^38 adet benzersiz adres sunan yeni nesil internet protokolüdür. Sekiz adet 16-bitlik Hexadecimal hextet grubu ile yazılır." }
      ],
      summary: ["IPv6 128-bitlik devasa adres yapısıyla sınırsız cihaz imkanı sunar."]
    },
    {
      id: "top-02-07-02",
      code: "02",
      slug: "ipv6-address-shortening-rules",
      pathSlug: "networking",
      moduleSlug: "ipv6",
      title: "2. IPv6 Adres Kısaltma Kuralları",
      subtitle: "Uzun Adresleri Sadeleştirme Sanatı",
      shortDescription: "Baştaki sıfırları atma (Leading zeros) ve ardışık sıfır hextetlerini `::` ile sıkıştırma.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KISALTMA KURALLARI", content: "1. Her hextetteki baştaki sıfırlar atılır (`008a` -> `8a`).\n2. Ardışık sıfır hextetleri bir adrese SADECE BİR KERE çift iki nokta `::` ile sıkıştırılır (`2001:db8:0:0:0:0:0:1` -> `2001:db8::1`)." }
      ],
      summary: ["Baştaki sıfırları atma ve tek bir `::` kullanımı IPv6'yı sadeleştirir."]
    },
    {
      id: "top-02-07-03",
      code: "03",
      slug: "ipv6-address-types-link-local-global",
      pathSlug: "networking",
      moduleSlug: "ipv6",
      title: "3. IPv6 Adres Türleri: Global Unicast, Link-Local ve Unique Local",
      subtitle: "fe80::, 2000::/3 ve fc00::/7 Blokları",
      shortDescription: "Global Unicast (2000::/3), Link-Local (fe80::/10), Unique Local (fc00::/7) ve Loopback (::1).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IPV6 ADRES TÜRLERİ", content: "- Link-Local (`fe80::/10`): Her arabirimde otomatize oluşan yerel hat adresi.\n- Global Unicast (`2000::/3`): İnternete açık genel IPv6 adresi.\n- Unique Local (`fc00::/7`): İç ağ özel adresi (IPv4 Private IP karşılığı)." }
      ],
      summary: ["fe80:: link-local, 2000:: internete açık global unicast adrestir."]
    },
    {
      id: "top-02-07-04",
      code: "04",
      slug: "slaac-stateless-address-autoconfiguration",
      pathSlug: "ipv6",
      moduleSlug: "ipv6",
      title: "4. SLAAC (Stateless Address Autoconfiguration) ve EUI-64",
      subtitle: "DHCP Olmadan Otomatik IPv6 Adresi Türetme",
      shortDescription: "Router Advertisement (RA), SLAAC mantığı ve MAC adresinden EUI-64 IP üretme.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SLAAC NEDİR?", content: "SLAAC, cihazların bir DHCP sunucusuna ihtiyaç duymadan, router'dan prefix alıp kendi arayüz ID'sini (EUI-64 ile MAC adresi üzerinden) birleştirerek otomatik IPv6 almasıdır." }
      ],
      summary: ["SLAAC cihazların DHCP sunucusuz kendi IPv6 adreslerini türetmesini sağlar."]
    },
    {
      id: "top-02-07-05",
      code: "05",
      slug: "module-07-summary-review",
      pathSlug: "networking",
      moduleSlug: "ipv6",
      title: "5. Modül Değerlendirmesi: IPv6 Özet & Test",
      subtitle: "Modül 07 Bütünsel Değerlendirmesi",
      shortDescription: "128-bit IPv6, Kısaltma kuralları, Link-Local fe80:: ve SLAAC özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "IPv6'nın 128-bit yapısını, `::` kısaltmasını ve `fe80::` link-local mantığını öğrendin." }
      ],
      summary: ["Modül 07 tamamlandı. Sıradaki hedef: 08 - ARP & NEIGHBOR DISCOVERY."],
      practice: {
        id: "prac-02-07-05",
        prompt: "IPv6 protokolünde her ağ arayüzünde otomatize olarak oluşan ve sadece yerel bağlantı segmentinde geçerli olan Link-Local adres ön eki hangisidir?",
        options: [
          { id: "a", text: "2001::" },
          { id: "b", text: "fe80::" },
          { id: "c", text: "127.0.0.1" },
          { id: "d", text: "ff02::" }
        ],
        correctAnswer: "b",
        explanation: "fe80::/10 bloğu IPv6 cihazlarında her ağ kartında otomatik olarak oluşturulan Link-Local adres ön ekidir."
      }
    }
  ]
};
