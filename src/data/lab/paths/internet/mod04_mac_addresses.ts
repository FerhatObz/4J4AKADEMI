import { ModuleItem } from '../../../../types/lab';

export const mod04MacAddresses: ModuleItem = {
  id: "mod-01-04",
  code: "04",
  slug: "mac-addresses",
  pathSlug: "internet-fundamentals",
  title: "MAC ADDRESSES & ARP",
  description: "Fiziksel MAC adresleri, OUI üretici kodları, Ethernet Katmanı (Layer 2), ARP Protokolü, ARP Spoofing ve Man-in-the-Middle (MITM) saldırıları.",
  order: 4,
  topics: [
    {
      id: "top-01-04-01",
      code: "01",
      slug: "mac-address-concept-structure",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "1. MAC Adresi Nedir? Yapısı ve OUI Kodları",
      subtitle: "Fiziksel Donanım Kimlik Kartı",
      shortDescription: "48-bit (6 Byte) hex MAC adresi, OUI üretici kodu ve NIC benzersizliği.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "MAC (Media Access Control) adresi, ağ kartına (NIC) üretim aşamasında kazınan 48-bitlik (6 bayt) benzersiz fiziksel donanım adresidir (Örn: 00:1A:2B:3C:4D:5E)." },
        { id: "sec-02", code: "02", title: "OUI KODU", content: "İlk 3 bayt OUI (Organizational Unique Identifier) olup ağ kartını üreten firmayı (Apple, Intel, Cisco) gösterir." }
      ],
      summary: ["MAC adresi 48-bitlik fiziksel donanım adresidir."]
    },
    {
      id: "top-01-04-02",
      code: "02",
      slug: "mac-vs-ip-address",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "2. MAC Adresi vs IP Adresi Farkı",
      subtitle: "TC Kimlik No vs Ev Adresi Benzetmesi",
      shortDescription: "Neden hem MAC hem IP adresine ihtiyacımız vardır?",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KARŞILAŞTIRMA", content: "MAC adresi sizin donanımsal TC Kimlik numaranızdır (Değişmez fiziksel kimlik). IP adresi ise oturduğunuz evin adresidir (Ağa bağlandıkça değişir)." }
      ],
      summary: ["MAC fiziksel sabit kimlik, IP yerel mantıksal konumdur."]
    },
    {
      id: "top-01-04-03",
      code: "03",
      slug: "arp-protocol-resolution",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "3. ARP (Address Resolution Protocol) Protokolü",
      subtitle: "IP Adresinden MAC Adresini Bulma",
      shortDescription: "ARP Request (Broadcast - FF:FF:FF:FF:FF:FF) ve ARP Reply (Unicast).",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ARP İŞLEYİŞİ", content: "Ağdaki bir cihaz 192.168.1.5'e paket atacaksa, onun MAC adresini bilmelidir. '192.168.1.5 kimde?' diye yayın (Broadcast) yapar. İlgili cihaz MAC adresini söyler." }
      ],
      summary: ["ARP IP adresini yerel ağda MAC adresine çeviren protokoldür."]
    },
    {
      id: "top-01-04-04",
      code: "04",
      slug: "arp-table-cache-inspection",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "4. ARP Tablosu (ARP Önbelleği) ve `arp -a` Komutu",
      subtitle: "Sistemin Hatırladığı MAC Listesi",
      shortDescription: "Statik vs Dinamik ARP kayıtları ve önbellek yaşam süresi.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ARP CACHE", content: "Sürekli broadcast yapmamak için cihaz öğrendiği IP-MAC eşleşmelerini ARP önbelleğinde (ARP Table) saklar. `arp -a` ile listelenir." }
      ],
      summary: ["ARP tablosu yerel ağdaki IP-MAC eşleşmelerini önbellekte tutar."]
    },
    {
      id: "top-01-04-05",
      code: "05",
      slug: "arp-spoofing-mitm-attack",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "5. ARP Poisoning / ARP Spoofing Saldırıları",
      subtitle: "Yerel Ağda Araya Girme (Man-in-the-Middle)",
      shortDescription: "Sahte ARP yanıtları enjekte ederek kurbanın tüm trafiğini kendi üzerinden geçirme.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ARP POISONING MEKANİZMASI", content: "ARP protokolünde kimlik doğrulama yoktur! Saldırgan modem ve kurbana sahte ARP yanıtları atarak 'Modem benim, kurban benim' der ve tüm trafiği kendi bilgisayarından geçirir (MITM)." }
      ],
      summary: ["ARP Spoofing yerel ağda ortadaki adam (MITM) saldırılarının temelidir."]
    },
    {
      id: "top-01-04-06",
      code: "06",
      slug: "mac-spoofing-changing-mac",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "6. MAC Spoofing (MAC Adresi Sahteciliği)",
      subtitle: "Ağ Kartı Kimliğini Değiştirme",
      shortDescription: "macchanger aracı, Wi-Fi MAC filtrelerini atlatma ve gizlilik.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MAC SPOOFING", content: "Ağ kartının yazılımsal sürücüsüne farklı bir MAC adresi tanımlanarak Wi-Fi ağlarındaki MAC filtreleri ve otel giriş engelleri atlatılabilir." }
      ],
      summary: ["MAC Spoofing yazılımsal olarak ağ kartı kimliğini değiştirmektir."]
    },
    {
      id: "top-01-04-07",
      code: "07",
      slug: "mac-flooding-switch-cam-table",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "7. Switch CAM Tablosu ve MAC Flooding Saldırısı",
      subtitle: "Switch'i Hub Seviyesine Düşürme",
      shortDescription: "CAM (Content Addressable Memory) tablosunu rastgele MAC'lerle doldurup Hub gibi çalışmaya zorlama.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MAC FLOODING", content: "Switch hangi portta hangi MAC olduğunu CAM tablosunda tutar. Saldırgan binlerce sahte MAC atarak CAM tablosunu doldurursa Switch korumasız bir Hub'a dönüşür ve tüm paketleri herkese yayınlar!" }
      ],
      summary: ["MAC flooding Switch'in CAM tablosunu tıkama saldırısıdır."]
    },
    {
      id: "top-01-04-08",
      code: "08",
      slug: "dynamic-arp-inspection-dai",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "8. ARP Koruması: Dynamic ARP Inspection (DAI) & Port Security",
      subtitle: "Anahtarlama Cihazlarında (Switch) Kurumsal Savunma",
      shortDescription: "DAI, DHCP Snooping binding veritabanı ve Port Security sınırlamaları.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DAI KORUMASI", content: "Kurumsal Switch'ler DAI (Dynamic ARP Inspection) özelliği ile sahte ARP paketlerini düşürür ve IP-MAC uyumunu DHCP Snooping ile doğrular." }
      ],
      summary: ["DAI ve DHCP Snooping ARP zehirlenmesini engelleyen Switch korumalarıdır."]
    },
    {
      id: "top-01-04-09",
      code: "09",
      slug: "rarp-garp-gratuitous-arp",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "9. Gratuitous ARP (GARP) ve Kullanım Alanları",
      subtitle: "İstenmeden Gönderilen Duyuru ARP Paketleri",
      shortDescription: "IP çakışması tespiti, IP değişim duyuruları ve Redundant Gateway (VRRP/HSRP).",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "GRATUITOUS ARP", content: "Bir cihaz ağa bağlandığında kimseden istek gelmeden kendi IP-MAC adresini yayınlar (GARP). IP çakışması bu sayede anlaşılır." }
      ],
      summary: ["Gratuitous ARP cihazın ağa bağlandığını duyuran isteksiz ARP paketidir."]
    },
    {
      id: "top-01-04-10",
      code: "10",
      slug: "module-04-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "mac-addresses",
      title: "10. Modül Değerlendirmesi: MAC & ARP Özet & Test",
      subtitle: "Modül 04 Bütünsel Sınavı",
      shortDescription: "MAC yapısı, ARP, `arp -a`, ARP Spoofing, MAC Flooding ve DAI özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "MAC adreslerinin 48-bit olduğunu, ARP protokolünde kimlik doğrulama bulunmadığı için yerel ağda ARP Spoofing yapılabildiğini öğrendin." }
      ],
      summary: ["Modül 04 başarıyla tamamlandı. Sıradaki hedef: 05 - PORTS & SOCKETS."],
      practice: {
        id: "prac-01-04-10",
        prompt: "Yerel ağda bir cihazın IP adresini bilip onun MAC adresini öğrenmek için kullanılan protokol hangisidir?",
        options: [
          { id: "a", text: "DNS" },
          { id: "b", text: "ARP (Address Resolution Protocol)" },
          { id: "c", text: "HTTP" },
          { id: "d", text: "BGP" }
        ],
        correctAnswer: "b",
        explanation: "ARP (Address Resolution Protocol), yerel ağda bilinen bir IP adresinin hangi MAC adresine ait olduğunu bulmaya yarar."
      }
    }
  ]
};
