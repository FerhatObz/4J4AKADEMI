import { ModuleItem } from '../../../../types/lab';

export const mod05Ipv4: ModuleItem = {
  id: "mod-02-05",
  code: "05",
  slug: "ipv4-addressing",
  pathSlug: "networking",
  title: "IPv4 ADDRESSING",
  description: "IPv4 Adresleme mimarisi, Sınıflı adresleme (Classful A, B, C, D, E), Sınıfsız adresleme (Classless), Özel IP blokları (RFC 1918, Loopback, APIPA) ve IP Mantığı.",
  order: 5,
  topics: [
    {
      id: "top-02-05-01",
      code: "01",
      slug: "ipv4-binary-decimal-conversion",
      pathSlug: "networking",
      moduleSlug: "ipv4-addressing",
      title: "1. IPv4 Adres Mimarisi ve Binary-Decimal Dönüşümü",
      subtitle: "32-Bitlik İkili Mantıktan Dörtlü Noktalı Değerlere",
      shortDescription: "32 bit, 4 oktet, ikili tabandan onluk tabana dönüşüm örnekleri.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IPV4 ANATOMİSİ", content: "IPv4 adresi 32 bitlik ikili sayıdır. Her 8 bit 1 oktettir (Örn: `11000000.10101000.00000001.00000001` = `192.168.1.1`)." }
      ],
      summary: ["IPv4 32-bitlik ikili sayı sistemine dayanır."]
    },
    {
      id: "top-02-05-02",
      code: "02",
      slug: "classful-addressing-a-b-c-d-e",
      pathSlug: "networking",
      moduleSlug: "ipv4-addressing",
      title: "2. Tarihsel Sınıflı Adresleme (Classful Addressing: A, B, C, D, E)",
      subtitle: "Eski Nesil Sınıf Sınırları ve İsraf",
      shortDescription: "A Sınıfı (1-126), B Sınıfı (128-191), C Sınıfı (192-223), D Multicast, E Deneysel.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CLASSFUL ADDRESSING", content: "Eski sistemde IP'ler 8-bitlik sınıflara bölünmüştü. A sınıfı (16M host) büyük israfa yol açtığı için yerini CIDR sınıfsız adreslemeye bırakmıştır." }
      ],
      summary: ["Sınıflı adresleme israfa yol açtığı için yerini CIDR sınıfsız sisteme bıraktı."]
    },
    {
      id: "top-02-05-03",
      code: "03",
      slug: "private-ip-ranges-rfc1918-deep",
      pathSlug: "networking",
      moduleSlug: "ipv4-addressing",
      title: "3. RFC 1918 Özel IP Blokları (Private IP Ranges)",
      subtitle: "İç Ağlarda Kullanılan Yönlendirilemeyen Adresler",
      shortDescription: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 blokları ve NAT ihtiyacı.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RFC 1918 BLOKLARI", content: "10.0.0.0 - 10.255.255.255 (16M host)\n172.16.0.0 - 172.31.255.255 (1M host)\n192.168.0.0 - 192.168.255.255 (65K host)." }
      ],
      summary: ["RFC 1918 özel iç ağ IP bloklarını tanımlar, internette doğrudan yönlendirilmez."]
    },
    {
      id: "top-02-05-04",
      code: "04",
      slug: "special-purpose-ipv4-addresses",
      pathSlug: "networking",
      moduleSlug: "ipv4-addressing",
      title: "4. Özel Amaçlı IPv4 Adresleri: Loopback, Broadcast ve APIPA",
      subtitle: "127.0.0.1, 255.255.255.255, 0.0.0.0 ve 169.254.x.x",
      shortDescription: "0.0.0.0 (Unspecified/Default route), 255.255.255.255 (Limited Broadcast), 127.0.0.0/8 (Loopback), 169.254.0.0/16 (APIPA).",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ÖZEL IP'LER", content: "0.0.0.0 varsayılan rota/bilinmeyen IP, 255.255.255.255 sınırlı broadcast, 127.0.0.1 loopback, 169.254.x.x APIPA adrestir." }
      ],
      summary: ["Özel IP adreslerinin ağda belirlenmiş özel görevleri vardır."]
    },
    {
      id: "top-02-05-05",
      code: "05",
      slug: "module-05-summary-review",
      pathSlug: "networking",
      moduleSlug: "ipv4-addressing",
      title: "5. Modül Değerlendirmesi: IPv4 Addressing Özet & Test",
      subtitle: "Modül 05 Bütünsel Değerlendirmesi",
      shortDescription: "32-bit IPv4, RFC 1918, Sınıflı adresleme ve Özel IP'ler özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "IPv4 adres yapısını, özel IP bloklarını ve özel kullanım adreslerini öğrendin." }
      ],
      summary: ["Modül 05 tamamlandı. Sıradaki hedef: 06 - SUBNETTING & CIDR."],
      practice: {
        id: "prac-02-05-05",
        prompt: "Aşağıdaki IP bloklarından hangisi RFC 1918 kapsamında B sınıfı Özel (Private) IP aralığına aittir?",
        options: [
          { id: "a", text: "192.168.1.0/24" },
          { id: "b", text: "172.16.0.0/12" },
          { id: "c", text: "10.0.0.0/8" },
          { id: "d", text: "169.254.0.0/16" }
        ],
        correctAnswer: "b",
        explanation: "172.16.0.0 - 172.31.255.255 (172.16.0.0/12) B sınıfı özel iç ağ IP bloğudur."
      }
    }
  ]
};
