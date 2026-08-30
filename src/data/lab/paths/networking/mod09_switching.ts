import { ModuleItem } from '../../../../types/lab';

export const mod09Switching: ModuleItem = {
  id: "mod-02-09",
  code: "09",
  slug: "switching",
  pathSlug: "networking",
  title: "SWITCHING (LAYER 2)",
  description: "Derinlemesine Switching Rehberi: MAC Adres Tablosu (CAM Table), Learning, Forwarding, Flooding, Unknown Unicast, Broadcast Domain vs Collision Domain, STP ve Port Security.",
  order: 9,
  topics: [
    {
      id: "top-02-09-01",
      code: "01",
      slug: "layer2-switching-concept",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "1. Layer 2 Switching Nedir? Switch Nasıl Çalışır?",
      subtitle: "Akıllı Yerel Ağ Çerçeve Yönlendirmesi",
      shortDescription: "Switching prensipleri, donanımsal ASIC entegreler ve mikrosaniyelik çerçeve iletimi.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "Switch (Anahtar), yerel ağda (LAN) Katman 2 Ethernet çerçevelerini kaynak ve hedef MAC adreslerine bakarak sadece ilgili portlara ileten akıllı donanım cihazıdır." }
      ],
      summary: ["Switch Katman 2 MAC adreslerine bakarak çerçeveleri yönlendirir."]
    },
    {
      id: "top-02-09-02",
      code: "02",
      slug: "mac-address-table-cam-learning-process",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "2. MAC Adres Tablosu (CAM Table) ve Learning Süreci",
      subtitle: "Switch Hangi Portta Kimin Olduğunu Nasıl Öğrenir?",
      shortDescription: "Source MAC okuma, Port-MAC haritalama, Aging Time (Zaman aşımı) ve CAM tablosu.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MAC ÖĞRENME (LEARNING) ADIMI", content: "Switch bir porttan çerçeve aldığı an SADECE Kaynak MAC (Source MAC) adresine bakar: 'Port 1'e 00:11:22... cihazı bağlı' diye CAM tablosuna yazar." }
      ],
      summary: ["Switch kaynak MAC adresinden port eşleşmesini öğrenir."]
    },
    {
      id: "top-02-09-03",
      code: "03",
      slug: "forwarding-flooding-unknown-unicast",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "3. Forwarding, Flooding ve Unknown Unicast İletimi",
      subtitle: "Hedef Biliniyorsa Yönlendir, Bilinmiyorsa Yayınla!",
      shortDescription: "Forwarding (Bilinen hedef), Flooding (Bilinmeyen hedef / Unknown Unicast), Broadcast iletimi.",
      order: 3,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "3 TEMEL İLETİM KURALI", content: "1. Forwarding: Hedef MAC CAM tablosunda varsa SADECE o porta yolla.\n2. Flooding: Hedef MAC `FF:FF:FF:FF:FF:FF` ise gelen port hariç TÜM portlara bas.\n3. Unknown Unicast Flooding: Hedef Unicast ama CAM tablosunda YOKSA, öğrenene kadar herkese bas!" }
      ],
      summary: ["Forwarding hedefe özel, Flooding gelen port dışındaki tüm portlara yayındır."]
    },
    {
      id: "top-02-09-04",
      code: "04",
      slug: "collision-domain-vs-broadcast-domain",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "4. Collision Domain vs Broadcast Domain Farkı",
      subtitle: "Ağ İzolasyon Sınırlarını Anlamak",
      shortDescription: "Çakışma Alanı (Collision Domain) vs Yayın Alanı (Broadcast Domain) karşılaştırması.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DOMAIN İZOLASYONU", content: "Hub tek bir Collision Domain'dir. Switch HER PORTU ayrı bir Collision Domain yapar (Çakışmayı bitirir). Ancak Switch'in TÜM PORTLARI tek bir Broadcast Domain'dir (VLAN kurulana kadar)." }
      ],
      summary: ["Switch her portu ayrı bir Collision Domain yapar, ama tüm portları tek Broadcast Domain'dir."]
    },
    {
      id: "top-02-09-05",
      code: "05",
      slug: "stp-spanning-tree-protocol-loops",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "5. STP (Spanning Tree Protocol - IEEE 802.1D) ve Döngü Engelleme",
      subtitle: "Ağ Döngüleri (Bridging Loops) Neden Sistemi Çökertir?",
      shortDescription: "Broadcast Storms, Root Bridge seçimi, BPDU paketleri ve Blocking/Forwarding port durumları.",
      order: 5,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STP VE DÖNGÜ ÖNLEME", content: "Switch'ler arasında yedekli çift kablo çekildiğinde broadcast paketleri sonsuz döngüye girer (Broadcast Storm) ve ağı çökertir. STP yedekli hattı otomatik 'Blocking' durumuna alarak döngüyü engeller." }
      ],
      summary: ["STP yedekli bağlantılarda sonsuz döngüyü (Broadcast Storm) engeller."]
    },
    {
      id: "top-02-09-06",
      code: "06",
      slug: "port-security-mac-limiting",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "6. Switch Port Security ve MAC Adres Sınırlaması",
      subtitle: "Porta İzinsiz Cihaz Takılmasını Engelleme",
      shortDescription: "Static MAC, Sticky MAC, Violation modes (Protect, Restrict, Shutdown).",
      order: 6,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PORT SECURITY", content: "Porta maksimum 1 MAC adresi bağlanabilmesi için `switchport port-security` açılır. Başka bir laptop takıldığında port anında kapanır (Shutdown)." }
      ],
      summary: ["Port Security yetkisiz cihazların Switch portuna takılmasını engeller."]
    },
    {
      id: "top-02-09-07",
      code: "07",
      slug: "module-09-summary-review",
      pathSlug: "networking",
      moduleSlug: "switching",
      title: "7. Modül Değerlendirmesi: Switching Özet & Test",
      subtitle: "Modül 09 Bütünsel Değerlendirmesi",
      shortDescription: "CAM Table, Learning, Flooding, Collision/Broadcast Domain, STP ve Port Security özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Switch'in kaynak MAC'ten öğrendiğini, hedef bilinmiyorsa Flooding yaptığını ve STP ile döngü engellediğini öğrendin." }
      ],
      summary: ["Modül 09 tamamlandı. Sıradaki hedef: 10 - ROUTING."],
      practice: {
        id: "prac-02-09-07",
        prompt: "Bir Switch kendisine gelen bir çerçevenin HEDEF MAC adresini CAM tablosunda bulamadığında (Unknown Unicast) ne yapar?",
        options: [
          { id: "a", text: "Çerçeveyi çöpe atar" },
          { id: "b", text: "Gelen port hariç tüm portlara yayınlar (Flooding)" },
          { id: "c", text: "Switch kendini kapatır" },
          { id: "d", text: "Çerçeveyi sadece modeme yollar" }
        ],
        correctAnswer: "b",
        explanation: "Switch hedef Unicast MAC adresini tablosunda bulamazsa, hedef cihazı bulup öğrenene kadar gelen port hariç tüm portlara Flooding yapar."
      }
    }
  ]
};
