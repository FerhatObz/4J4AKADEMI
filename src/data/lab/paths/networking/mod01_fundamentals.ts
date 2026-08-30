import { ModuleItem } from '../../../../types/lab';

export const mod01Fundamentals: ModuleItem = {
  id: "mod-02-01",
  code: "01",
  slug: "networking-fundamentals",
  pathSlug: "networking",
  title: "NETWORKING FUNDAMENTALS",
  description: "Ağ nedir, bilgisayarlar neden ve nasıl haberleşir, LAN, WAN, MAN ve ağ topolojileri.",
  order: 1,
  topics: [
    {
      id: "top-02-01-01",
      code: "01",
      slug: "what-is-computer-network",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "1. Bilgisayar Ağı (Computer Network) Nedir ve Neden Var?",
      subtitle: "Veri Paylaşımı, İletişim ve Kaynak Yönetimi",
      shortDescription: "Ağ mimarisinin amacı, düğümler (Nodes), bağlantı hatları ve temel iletişim prensipleri.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT? (NEDİR?)", content: "Bilgisayar ağı, iki veya daha fazla bağımsız cihazın veri alışverişi yapmak, kaynakları (yazıcı, depolama, internet) paylaşmak ve iletişim kurmak amacıyla iletken (kablo) veya kablosuz (radyo dalgası) ortamlarla birbirine bağlanmasıdır." },
        { id: "sec-02", code: "02", title: "WHY DOES IT EXIST? (NEDEN VAR?)", content: "Ağlar olmasaydı her bilgisayar izole bir ada olurdu. Veri aktarımı sadece fiziksel disklerle yapılırdı (Sneakernet). Ağlar merkezi veri depolamayı, anlık mesajlaşmayı, web sitelerini ve bulut bilişimi mümkün kılar." },
        { id: "sec-03", code: "03", title: "HOW DOES IT WORK? (NASIL ÇALIŞIR?)", content: "Bir cihaz veriyi gönderirken onu standart kurallara (Protokol) uygun olarak paketler. Ağ arayüz kartı (NIC) bu veriyi elektriksel, optik veya radyo sinyaline çevirip hatta verir. Hedef NIC sinyali tekrar veriye dönüştürür." },
        { id: "sec-04", code: "04", title: "SECURITY CONNECTION (GÜVENLİK BAĞLANTISI)", content: "Ağa bağlanan her cihaz dış dünya tarafından erişilebilir hale gelir. Ağ güvenliğinin temel amacı yetkisiz erişimi engellemek, verinin dinlenmesini (Sniffing) ve değiştirilmesini önlemektir." }
      ],
      summary: ["Bilgisayar ağı veri ve kaynak paylaşımı için cihazları birbirine bağlar.", "Ağa bağlı her cihaz saldırı yüzeyinin bir parçasıdır."],
      practice: {
        id: "prac-02-01-01",
        prompt: "Ağ ortamında iki cihazın sorunsuz haberleşmesi için uyulması gereken kurallar bütününe ne ad verilir?",
        options: [
          { id: "a", text: "Protokol" },
          { id: "b", text: "Topoloji" },
          { id: "c", text: "Bandwidth" },
          { id: "d", text: "Hardware" }
        ],
        correctAnswer: "a",
        explanation: "Protokol (Protocol), ağ üzerindeki cihazların veri biçimlendirme ve iletim kurallarını belirleyen standartlardır."
      }
    },
    {
      id: "top-02-01-02",
      code: "02",
      slug: "lan-wan-man-pan-types",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "2. Ağ Türleri: LAN, WAN, MAN ve PAN",
      subtitle: "Coğrafi Ölçeğe Göre Ağ Sınıflandırması",
      shortDescription: "Yerel Alan Ağı (LAN), Geniş Alan Ağı (WAN), Şehir Alan Ağı (MAN) ve Kişisel Ağ (PAN).",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "Ağlar kapladıkları coğrafi alana göre sınıflandırılır:\n- PAN (Personal Area Network): Bluetooth, birkaç metre.\n- LAN (Local Area Network): Ev/Ofis içi, yüksek hız.\n- MAN (Metropolitan Area Network): Şehir çapında ağ.\n- WAN (Wide Area Network): Ülkeler arası, internet." }
      ],
      summary: ["LAN yerel yüksek hızlı ağdır, WAN küresel geniş alandır."]
    },
    {
      id: "top-02-01-03",
      code: "03",
      slug: "network-topologies-star-mesh-bus",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "3. Ağ Topolojileri: Star, Mesh, Bus, Ring ve Tree",
      subtitle: "Cihazların Fiziksel ve Mantıksal Yerleşim Düzeni",
      shortDescription: "Yıldız topolojisi, Mesh (Ağsal) topoloji, Ortak veri yolu ve tek nokta arızaları.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TOPOLOJİ TÜRLERİ", content: "Modern ev ve şirket ağları Star (Yıldız) topolojisindedir (Merkezde Switch bulunur). Kritik omurgalar ise bir hat kopsa da iletişimin sürmesi için Mesh topolojisi kullanır." }
      ],
      summary: ["Star topolojisi Switch merkezlidir, Mesh topolojisi kesintisiz yedeklilik sunar."]
    },
    {
      id: "top-02-01-04",
      code: "04",
      slug: "bandwidth-latency-throughput-jitter",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "4. Ağ Performansı: Bandwidth, Latency, Throughput ve Jitter",
      subtitle: "Ağın Hızını ve Kalitesini Ölçen Metrikler",
      shortDescription: "Gecikme (Ping RTT), Bant genişliği, Gerçek aktarım hızı ve kararsızlık.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PERFORMANS METRİKLERİ", content: "Bandwidth borunun genişliğidir, Throughput içinden geçen su miktarıdır, Latency suyun varış süresidir, Jitter gecikmedeki dalgalanmadır." }
      ],
      summary: ["Throughput gerçek veri aktarım miktarıdır, Latency gecikme süresidir."]
    },
    {
      id: "top-02-01-05",
      code: "05",
      slug: "transmission-media-copper-fiber-wireless",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "5. İletim Ortamları: Bakır Kablolar, Fiber Optik ve Kablosuz (Wi-Fi)",
      subtitle: "Elektrik, Işık ve Radyo Dalgaları",
      shortDescription: "UTP/STP Cat6 kablolar, Single-mode/Multi-mode Fiber ve 802.11 Wi-Fi frekansları.",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FİZİKSEL ORTAMLAR", content: "UTP bakır kablo elektrik sinyali iletir (Max 100m). Fiber optik ışık sinyali iletir (Kilometrelerce mesafe, EMI etkilenmez). Wi-Fi radyo frekansı iletir." }
      ],
      summary: ["Fiber optik ışık hızında ve elektromanyetik parazitsiz iletim sunar."]
    },
    {
      id: "top-02-01-06",
      code: "06",
      slug: "simplex-half-duplex-full-duplex",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "6. İletişim Modları: Simplex, Half-Duplex ve Full-Duplex",
      subtitle: "Tek Yönlü vs Sırayla Çift Yönlü vs Eşzamanlı Çift Yönlü",
      shortDescription: "Telsiz mantığı (Half-Duplex), Telefon/Switch mantığı (Full-Duplex) ve çakışma (Collision).",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DUPLEX MODLARI", content: "Simplex tek yönlüdür (Radyo). Half-duplex sırayla çift yönlüdür (Telsiz/Hub). Full-duplex aynı anda çift yönlüdür (Modern Switch)." }
      ],
      summary: ["Full-duplex aynı anda çakışmasız veri alma ve göndermedir."]
    },
    {
      id: "top-02-01-07",
      code: "07",
      slug: "unicast-multicast-broadcast-anycast",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "7. İletim Tipleri: Unicast, Broadcast, Multicast ve Anycast",
      subtitle: "Birebir, Herkese, Gruba ve En Yakına İletim",
      shortDescription: "Unicast (1-to-1), Broadcast (1-to-All), Multicast (1-to-Many), Anycast (1-to-Nearest).",
      order: 7,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "İLETİM YÖNTEMLERİ", content: "Unicast tek cihaza atılır. Broadcast ağdaki herkese yayın yapar. Multicast bir gruba yollar. Anycast küresel DNS sunucularında en yakın düğüme yönlendirir." }
      ],
      summary: ["Unicast birebir, Broadcast herkese, Multicast gruba iletimdir."]
    },
    {
      id: "top-02-01-08",
      code: "08",
      slug: "network-devices-overview-hub-switch-router",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "8. Temel Ağ Cihazları: Hub, Switch, Router ve Modem",
      subtitle: "Cahil Hub'dan Zeki Router'a Donanım Evrimi",
      shortDescription: "Layer 1 Hub, Layer 2 Switch, Layer 3 Router ve Modem görevleri.",
      order: 8,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "AĞ CİHAZLARI", content: "Hub gelen paketi herkese körlemesine basar (Katman 1). Switch MAC tablosuna bakar sadece hedefe yollar (Katman 2). Router farklı ağları yönlendirir (Katman 3)." }
      ],
      summary: ["Switch MAC adreslerine göre, Router IP adreslerine göre iletim yapar."]
    },
    {
      id: "top-02-01-09",
      code: "09",
      slug: "network-standards-ieee-ansi-iso",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "9. Ağ Standartları ve Örgütleri: IEEE, ISO, ANSI",
      subtitle: "IEEE 802.3 Ethernet ve 802.11 Wi-Fi Standartları",
      shortDescription: "IEEE 802 komitesi, 802.3 (Ethernet), 802.11 (Wi-Fi), 802.1Q (VLAN).",
      order: 9,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STANDARTLAR", content: "IEEE 802 komitesi ağ standartlarını belirler: 802.3 Ethernet, 802.11 Wi-Fi, 802.1Q VLAN." }
      ],
      summary: ["IEEE 802 standartları donanımların uyum içinde çalışmasını sağlar."]
    },
    {
      id: "top-02-01-10",
      code: "10",
      slug: "module-01-summary-review",
      pathSlug: "networking",
      moduleSlug: "networking-fundamentals",
      title: "10. Modül Değerlendirmesi: Networking Fundamentals Özet & Test",
      subtitle: "Modül 01 Bütünsel Değerlendirmesi",
      shortDescription: "LAN/WAN, Topolojiler, Duplex, Unicast/Broadcast ve Cihazlar özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Ağ mimarisinin temel kavramlarını, topolojileri, iletim ortamlarını ve cihaz farklarını öğrendin." }
      ],
      summary: ["Modül 01 tamamlandı. Sıradaki hedef: 02 - OSI MODEL."],
      practice: {
        id: "prac-02-01-10",
        prompt: "Ağdaki tüm cihazlara körlemesine yayın yapan (Katman 1) ve çakışma alanını (Collision Domain) bölemeyen eski ağ cihazı hangisidir?",
        options: [
          { id: "a", text: "Switch" },
          { id: "b", text: "Hub" },
          { id: "c", text: "Router" },
          { id: "d", text: "Firewall" }
        ],
        correctAnswer: "b",
        explanation: "Hub, gelen veriyi ayırt etmeksizin tüm portlara ileten aptal (Katman 1) bir cihazdır."
      }
    }
  ]
};
