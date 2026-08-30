import { ModuleItem } from '../../../../types/lab';

export const mod06Subnetting: ModuleItem = {
  id: "mod-02-06",
  code: "06",
  slug: "subnetting-cidr",
  pathSlug: "networking",
  title: "SUBNETTING & CIDR",
  description: "Derinlemesine Subnetting Rehberi: Neden Subnetting?, Network ID, Broadcast ID, Usable Host Range, CIDR Notasyonu, Binary AND İşlemi ve Adım Adım Alt Ağ Hesaplama Mantığı.",
  order: 6,
  topics: [
    {
      id: "top-02-06-01",
      code: "01",
      slug: "why-subnetting-network-segmentation",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "1. Subnetting Nedir ve Neden Yapılır?",
      subtitle: "Büyük Ağları Küçük Güvenli Bölümlere Ayırma",
      shortDescription: "Broadcast trafiğini azaltma, ağ performansını artırma ve güvenlik izolasyonu.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT? (NEDİR?)", content: "Subnetting (Alt Ağlara Bölme), büyük bir IP ağ bloğunu mantıksal olarak daha küçük, birbirinden izole alt ağlara (Subnets) bölme işlemidir." },
        { id: "sec-02", code: "02", title: "WHY DOES IT EXIST? (NEDEN VAR?)", content: "1. Broadcast Trafiğini Sınırlama: 1000 cihazlık ağda tek bir broadcast tüm ağı felç eder.\n2. Güvenlik İzolasyonu: Muhasebe ile Misafir Wi-Fi aynı alt ağda olmamalıdır.\n3. Verimli IP Kullanımı: İsrafı engeller." }
      ],
      summary: ["Subnetting broadcast trafiğini sınırlar ve ağ güvenliği izolasyonu sağlar."]
    },
    {
      id: "top-02-06-02",
      code: "02",
      slug: "subnet-mask-binary-and-operation",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "2. Alt Ağ Maskesi (Subnet Mask) ve Binary AND İşlemi",
      subtitle: "Ağ Kimliğini (Network ID) Cihaz Kimliğinden (Host ID) Ayırma",
      shortDescription: "255.255.255.0 mantığı, 1'ler ve 0'lar, Bitwise AND ile Network ID hesaplama.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SUBNET MASK MANİTĞI", content: "Subnet Mask 32-bitlik bir filteredir. Maskedeki '1' bitleri Network ID kısmını, '0' bitleri Host ID kısmını gösterir.\n- 255.255.255.0 = `11111111.11111111.11111111.00000000` (24 adet 1 bit)." },
        { id: "sec-02", code: "02", title: "BINARY AND İŞLEMİ", content: "Router paketi aldığında `IP AND SubnetMask` yapar. İki tarafta da 1 varsa 1 çıkar. Böylece paketin hangi ağa ait olduğu anında anlaşılır." }
      ],
      summary: ["Subnet mask 1'ler ile ağı, 0'lar ile cihaz alanını gösterir."]
    },
    {
      id: "top-02-06-03",
      code: "03",
      slug: "cidr-classless-inter-domain-routing",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "3. CIDR (Classless Inter-Domain Routing) Notasyonu",
      subtitle: "/24, /26, /16 Eğik Çizgi Notasyonu",
      shortDescription: "Slash notasyonu mantığı, maskelerdeki 1 bit sayısı ve CIDR tabloları.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CIDR NEDİR?", content: "CIDR, 255.255.255.0 yazmak yerine maskedeki '1' bitlerinin sayısını `/24` şeklinde yazma standardıdır.\n- `/24` = 255.255.255.0\n- `/26` = 255.255.255.192\n- `/16` = 255.255.0.0." }
      ],
      summary: ["CIDR /XX notasyonu maskedeki aktif 1 bit sayısını gösterir."]
    },
    {
      id: "top-02-06-04",
      code: "04",
      slug: "network-address-broadcast-address-host-range",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "4. Alt Ağın 3 Kutsal Değeri: Network ID, Broadcast ID ve Host Range",
      subtitle: "İlk Adres, Son Adres ve Kullanılabilir Cihaz Adresleri",
      shortDescription: "Ağ Adresi (Network ID), Yayın Adresi (Broadcast ID), 2^n - 2 formülü.",
      order: 4,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "3 KUTSAL DEĞER", content: "Bir alt ağdaki:\n1. İlk Adres (Tüm Host bitleri 0) = Network Address (Cihaza verilemez!)\n2. Son Adres (Tüm Host bitleri 1) = Broadcast Address (Cihaza verilemez!)\n3. Aradaki Adresler = Usable Host Range (Cihazlara verilir)." },
        { id: "sec-02", code: "02", title: "2^N - 2 FORMÜLÜ", content: "Eğer maskedeki '0' sayısı `N` ise, kullanılabilecek cihaz sayısı `(2^N) - 2` kadardır (Network ve Broadcast çıkarılır)." }
      ],
      summary: ["Kullanılabilir cihaz sayısı = (2^HostBit) - 2 kadardır."]
    },
    {
      id: "top-02-06-05",
      code: "05",
      slug: "step-by-step-subnetting-24-26-examples",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "5. Adım Adım Subnetting Hesaplaması: 192.168.1.0/26 Örneği",
      subtitle: "Formüllerle Değil Mantıkla Alt Ağ Hesabı",
      shortDescription: "Block Size (Sıçrama Adımı) yöntemi, 256 - Mask mantığı ve alt ağ listesi.",
      order: 5,
      readTime: "10 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "192.168.1.0/26 ADIM ADIM HESAPLAMA", content: "1. CIDR `/26` -> Mask = `255.255.255.192` (6 adet 0 biti kaldı).\n2. Cihaz Sayısı = `2^6 - 2 = 62` kullanılabilir IP.\n3. Sıçrama Adımı (Block Size) = `256 - 192 = 64`.\n4. Alt Ağlar:\n   - 1. Subnet: Network `192.168.1.0`, Hostlar `192.168.1.1 - 192.168.1.62`, Broadcast `192.168.1.63`.\n   - 2. Subnet: Network `192.168.1.64`, Hostlar `192.168.1.65 - 192.168.1.126`, Broadcast `192.168.1.127`." }
      ],
      summary: ["Block Size = 256 - Mask Son Okteti yöntemi alt ağ aralıklarını anında verir."]
    },
    {
      id: "top-02-06-06",
      code: "06",
      slug: "vlsm-variable-length-subnet-masking",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "6. VLSM (Variable Length Subnet Masking) Mimarisi",
      subtitle: "İhtiyaca Göre Değişken Uzunlukta Alt Ağ Bölme",
      shortDescription: "Büyükten küçüğe alt ağ tahsisi, israfı önleme ve nokta-nokta /30 ve /31 hatlar.",
      order: 6,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "VLSM NEDİR?", content: "VLSM, aynı IP bloğundan farklı boyutlarda alt ağlar türetmeyi sağlar. Örneğin 50 kişilik departmana `/26`, 10 kişilik departmana `/28`, 2 router arası hat için `/30` verilir." }
      ],
      summary: ["VLSM farklı boyutlardaki alt ağ ihtiyaçları için sıfır IP israfı sunar."]
    },
    {
      id: "top-02-06-07",
      code: "07",
      slug: "point-to-point-subnets-30-31",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "7. Noktadan Noktaya (Point-to-Point) Ağlar: /30 ve /31 Subnetler",
      subtitle: "Router-Router Bağlantılarında IP Tasarrufu",
      shortDescription: "/30 (2 host) vs RFC 3021 /31 (2 host) kullanımı.",
      order: 7,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "/30 VE /31 SUBNETLER", content: "İki router arası tek hat için `/30` kullanılır (4 IP: 1 Network, 2 Host, 1 Broadcast). RFC 3021 /31 notasyonu ise broadcast gerektirmeyen serbest noktalarda 2 IP kullanır." }
      ],
      summary: ["/30 ve /31 noktadan noktaya router hatları için tasarlanmış özel alt ağlardır."]
    },
    {
      id: "top-02-06-08",
      code: "08",
      slug: "module-06-summary-review",
      pathSlug: "networking",
      moduleSlug: "subnetting-cidr",
      title: "8. Modül Değerlendirmesi: Subnetting & CIDR Özet & Test",
      subtitle: "Modül 06 Bütünsel Değerlendirmesi ve Alt Ağ Sınavı",
      shortDescription: "Network ID, Broadcast ID, Host range, CIDR ve VLSM alt ağ sınavı.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Network ID'nin ilk adres, Broadcast ID'nin son adres olduğunu ve `(2^N) - 2` ile kullanılabilir host sayısının bulunduğunu öğrendin." }
      ],
      summary: ["Modül 06 tamamlandı. Sıradaki hedef: 07 - IPv6."],
      practice: {
        id: "prac-02-06-08",
        prompt: "`192.168.1.0/24` ağında `/26` alt ağı kullanıldığında (192.168.1.0/26), bu ilk alt ağın YAYIN (Broadcast) adresi aşağıdakilerden hangisidir?",
        options: [
          { id: "a", text: "192.168.1.255" },
          { id: "b", text: "192.168.1.63" },
          { id: "c", text: "192.168.1.64" },
          { id: "d", text: "192.168.1.0" }
        ],
        correctAnswer: "b",
        explanation: "/26 alt ağında block size 64'tür (0-63). İlk alt ağ 192.168.1.0 (Network), kullanabileceğimiz IP'ler .1 - .62, Yayın adresi ise .63'tür."
      }
    }
  ]
};
