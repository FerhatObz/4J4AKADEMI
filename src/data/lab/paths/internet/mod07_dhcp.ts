import { ModuleItem } from '../../../../types/lab';

export const mod07Dhcp: ModuleItem = {
  id: "mod-01-07",
  code: "07",
  slug: "dhcp",
  pathSlug: "internet-fundamentals",
  title: "DHCP (DYNAMIC HOST CONFIGURATION PROTOCOL)",
  description: "Dinamik IP atama, DORA Süreci (Discover, Offer, Request, Acknowledge), Lease Time, DHCP Pool, DHCP Starvation ve Rogue DHCP Saldırıları.",
  order: 7,
  topics: [
    {
      id: "top-01-07-01",
      code: "01",
      slug: "dhcp-concept-necessity",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "1. DHCP Nedir? Otomatik Ağ Konfigürasyonu",
      subtitle: "Manuel IP Elle Girme Devrinin Kapanışı",
      shortDescription: "IP, Subnet Mask, Gateway ve DNS bilgilerinin otomatize dağıtımı.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "DHCP (Dynamic Host Configuration Protocol), ağa bağlanan cihazlara otomatik olarak IP adresi, Alt Ağ Maskesi, Varsayılan Ağ Geçidi ve DNS sunucularını atayan protokoldür." }
      ],
      summary: ["DHCP cihazlara otomatize ağ konfigürasyonu sağlar."]
    },
    {
      id: "top-01-07-02",
      code: "02",
      slug: "dora-process-discover-offer-request-ack",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "2. DORA Süreci: Discover, Offer, Request ve Acknowledge",
      subtitle: "IP Atamasındaki 4 Adımlı İletişim Dansı",
      shortDescription: "UDP 67/68 portları üzerinden Broadcast IP pazarlığı.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DORA ADIMLARI", content: "1. Discover: Cihaz 'DHCP Var mı?' diye Broadcast atar.\n2. Offer: DHCP Sunucusu IP teklif eder.\n3. Request: Cihaz 'Bu IP'yi istiyorum' der.\n4. ACK: DHCP Sunucusu onaylar ve IP'yi kiralatır." }
      ],
      summary: ["DORA = Discover -> Offer -> Request -> Acknowledge."]
    },
    {
      id: "top-01-07-03",
      code: "03",
      slug: "dhcp-lease-time-renewal",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "3. DHCP Kira Süresi (Lease Time) ve Yenileme",
      subtitle: "Süresi Dolan IP Adreslerinin Havuza Geri Dönmesi",
      shortDescription: "Kira süresi saniyesi, T1 (%50) ve T2 (%87.5) zamanlayıcıları ile IP yenileme.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "LEASE TIME", content: "DHCP IP'yi sonsuza kadar vermez, kiralar (Lease). Sürenin %50'sinde cihaz IP'yi yenilemek (Renew) için istek atar." }
      ],
      summary: ["Lease Time IP adresinin geçici kiralama süresidir."]
    },
    {
      id: "top-01-07-04",
      code: "04",
      slug: "dhcp-pool-reservation-mac",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "4. DHCP IP Havuzu (Pool) ve MAC Rezervasyonu",
      subtitle: "Belirli Cihazlara Daima Aynı IP'yi Verme",
      shortDescription: "DHCP Pool aralığı ve MAC adresine statik IP bağlama.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MAC REZERVASYONU", content: "Ağdaki bir yazıcı veya sunucuya DHCP üzerinden daima aynı IP'yi vermek için MAC adresi rezervasyonu yapılır." }
      ],
      summary: ["MAC rezervasyonu DHCP üzerinden sabit IP ataması sağlar."]
    },
    {
      id: "top-01-07-05",
      code: "05",
      slug: "dhcp-starvation-attack",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "5. DHCP Starvation (IP Havuzunu Tüketme) Saldırısı",
      subtitle: "Tüm IP Havuzunu Sahte MAC'lerle Kurutma",
      shortDescription: "Yazar Yara (Yersinia) araçları ile rastgele MAC üretip tüm IP'leri kiralama (DoS).",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DHCP STARVATION", content: "Saldırgan binlerce sahte MAC adresiyle DHCP Discover atarak havuzdaki tüm IP adreslerini tüketir. Yeni cihazlar ağa bağlanamaz (DoS)." }
      ],
      summary: ["DHCP Starvation tüm IP havuzunu tüketerek DoS oluşturan saldırıdır."]
    },
    {
      id: "top-01-07-06",
      code: "06",
      slug: "rogue-dhcp-server-mitm",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "6. Sahte DHCP (Rogue DHCP) ve Man-in-the-Middle",
      subtitle: "Kendi Sahte Gateway ve DNS Bilgini Ağa Yayma",
      shortDescription: "Ağa sahte DHCP sunucusu kurarak kurbanların Gateway'ini kendi bilgisayarına çekme.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ROGUE DHCP", content: "Saldırgan ağa kendi sahte DHCP sunucusunu kurar. DORA sürecinde orijinal sunucudan hızlı yanıt dönerek kurbanlara kendi IP'sini varsayılan Gateway olarak yutturur (MITM)." }
      ],
      summary: ["Rogue DHCP kurbanlara sahte Gateway ve DNS dağıtarak araya girmektir."]
    },
    {
      id: "top-01-07-07",
      code: "07",
      slug: "dhcp-snooping-security",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "7. DHCP Koruması: DHCP Snooping",
      subtitle: "Switch Üzerinde Güvenli (Trusted) Port Ayarlamak",
      shortDescription: "Trusted vs Untrusted portlar ve DHCP Snooping Binding Table.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DHCP SNOOPING KORUMASI", content: "Switch üzerinde sadece gerçek DHCP sunucusunun bağlı olduğu port 'Trusted' yapılır. Diğer portlardan gelen DHCP Offer paketleri engellenir." }
      ],
      summary: ["DHCP Snooping sahte DHCP sunucularını Switch seviyesinde engeller."]
    },
    {
      id: "top-01-07-08",
      code: "08",
      slug: "dhcp-relay-agent",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "8. DHCP Relay Agent (Ağlar Arası DHCP)",
      subtitle: "Farklı Subnetlere DHCP Dağıtımı",
      shortDescription: "Broadcast paketlerinin router'dan geçememesi ve Option 82 Relay agent.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DHCP RELAY", content: "DHCP Discover broadcast'i router'dan geçemez. DHCP Relay Agent bu broadcast'i unicast pakete çevirip başka subnetteki DHCP sunucusuna iletir." }
      ],
      summary: ["DHCP Relay Agent farklı alt ağlardaki DHCP paketlerini taşır."]
    },
    {
      id: "top-01-07-09",
      code: "09",
      slug: "ipconfig-dhclient-commands",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "9. DHCP Komut Satırı İncelemeleri (`ipconfig`, `dhclient`)",
      subtitle: "IP Yenileme ve Bırakma İletişimi",
      shortDescription: "`ipconfig /release`, `/renew` ve Linux `dhclient -r` komutları.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DHCP KOMUTLARI", content: "Windows'ta `ipconfig /release` mevcut kiralık IP'yi bırakır, `ipconfig /renew` yeni DORA süreci başlatır." }
      ],
      summary: ["`ipconfig /renew` veya `dhclient` komutları DORA sürecini tetikler."]
    },
    {
      id: "top-01-07-10",
      code: "10",
      slug: "module-07-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "dhcp",
      title: "10. Modül Değerlendirmesi: DHCP Özet & Test",
      subtitle: "Modül 07 Bütünsel Sınavı",
      shortDescription: "DORA süreci, Lease Time, Starvation, Rogue DHCP ve DHCP Snooping özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "DORA sürecini (Discover, Offer, Request, ACK), sahte DHCP sunucularının MITM açtığını ve DHCP Snooping korumasını öğrendin." }
      ],
      summary: ["Modül 07 başarıyla tamamlandı. Sıradaki hedef: 08 - TCP."],
      practice: {
        id: "prac-01-07-10",
        prompt: "DHCP otomatize IP alma sürecinin 4 sıralı adımı (DORA) sırasıyla hangisidir?",
        options: [
          { id: "a", text: "Data, Option, Route, Access" },
          { id: "b", text: "Discover, Offer, Request, Acknowledge" },
          { id: "c", text: "Download, Open, Read, Accept" },
          { id: "d", text: "Deny, Overwrite, Repeat, Allow" }
        ],
        correctAnswer: "b",
        explanation: "DORA sırasıyla Discover (Keşif), Offer (Teklif), Request (İstek) ve Acknowledge (Onay) adımlarından oluşur."
      }
    }
  ]
};
