import { ModuleItem } from '../../../../types/lab';

export const mod04Storage: ModuleItem = {
  id: "mod-00-04",
  code: "04",
  slug: "storage",
  pathSlug: "computer-fundamentals",
  title: "STORAGE (HDD, SSD, NVMe, RAID & DATA WIPING)",
  description: "Kalıcı depolama teknolojileri, Manyetik vs Flash bellek, NVMe PCIe protokolü, RAID yapılandırmaları ve Güvenli Veri Silme (Data Wiping/Sanitization).",
  order: 4,
  topics: [
    {
      id: "top-00-04-01",
      code: "01",
      slug: "hdd-vs-ssd-technology",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "1. HDD vs SSD: Manyetik Diskler ve NAND Flash Bellekler",
      subtitle: "Mekanik Plakalardan Silikon Hücrelerine",
      shortDescription: "Sektörler, izler (Tracks), NAND Flash hücreleri (SLC/MLC/TLC) ve wear leveling.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HDD VE SSD FARKLARI", content: "HDD okuma kafalı mekanik dönen disklerdir. SSD ise hareketli parçası olmayan NAND Flash transistörlerinde elektriksel şarj saklar." }
      ],
      summary: ["HDD mekaniktir, SSD dijital ve hareketli parçasızdır."]
    },
    {
      id: "top-00-04-02",
      code: "02",
      slug: "nvme-pcie-storage",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "2. NVMe & PCIe Depolama Protokolü",
      subtitle: "SATA Darboğazını Kırmak",
      shortDescription: "AHCI vs NVMe protokolleri, PCIe hatları ve doğrudan CPU erişimi.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NVME PROTOKOLÜ", content: "SATA 600 MB/s sınırına takılırken NVMe doğrudan PCIe veri hatlarını kullanarak 7000+ MB/s hızlara ulaşır." }
      ],
      summary: ["NVMe yüksek hızlı depolama protokolüdür."]
    },
    {
      id: "top-00-04-03",
      code: "03",
      slug: "raid-architectures",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "3. RAID Yapılandırmaları (RAID 0, 1, 5, 10)",
      subtitle: "Veri Güvenilirliği ve Performans Artırımı",
      shortDescription: "Striping, Mirroring, Parity mantığı ve disk arızalarına dayanıklılık.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RAID TİPLERİ", content: "RAID 0 (Hız - Tolerans yok), RAID 1 (Aynalama - Güvenli), RAID 5 (Parity ile tek disk töleransı), RAID 10 (Hız + Güvenlik)." }
      ],
      summary: ["RAID disk arızalarına karşı veri bütünlüğü ve hız sağlar."]
    },
    {
      id: "top-00-04-04",
      code: "04",
      slug: "data-wiping-sanitization",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "4. Güvenli Veri Silme ve Adli Bilişim Kurtarma",
      subtitle: "Dosya Silmek Neden Gerçekten Silmek Değildir?",
      shortDescription: "Filesystem pointer silme vs Overwriting (DoD 5220.22-M, Gutmann) ve TRIM komutu.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DOSYA SİLME GERÇEĞİ", content: "İşletim sisteminde bir dosyayı sildiğinizde sadece adresi (pointer) silinir, gerçek veriler diskte kalır! Adli bilişim (Forensics) araçları bu verileri kolayca kurtarır. Tam silme için DoD standartlarında rastgele veri üzerine yazılmalıdır (Overwriting)." }
      ],
      summary: ["Normal silme adresi kaldırır, gerçek veri silinmesi için üzerine rastgele veri yazılmalıdır."]
    },
    {
      id: "top-00-04-05",
      code: "05",
      slug: "full-disk-encryption",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "5. Tam Disk Şifreleme (FDE): BitLocker, LUKS ve FileVault",
      subtitle: "Çalınan Donanımda Veri Gizliliği",
      shortDescription: "AES-XTS şifreleme, TPM çip entegrasyonu ve ön-önyükleme doğrulaması.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FDE VE TPM", content: "Disk çalınsa dahi verilerin okunamaması için tüm sektörler AES-256 ile şifrelenir. Anahtar TPM çipinde saklanır." }
      ],
      summary: ["FDE cihaz çalınsa da verilerin okunmasını engeller."]
    },
    {
      id: "top-00-04-06",
      code: "06",
      slug: "wear-leveling-ssd-forensics",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "6. SSD Wear Leveling ve Adli Bilişim Zorlukları",
      subtitle: "Flash Ömrü Uzatma vs Kalıcı Veri İzi",
      shortDescription: "Wear leveling algoritmaları ve SSD silme zorlukları.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WEAR LEVELING", content: "SSD hücrelerinin eşit yıpranması için veriyi sürekli farklı fiziksel konumlara taşır. Bu durum adli bilişimde silinen verinin gizli kalmasına yol açabilir." }
      ],
      summary: ["SSD wear leveling veriyi farklı hücrelere dağıtır."]
    },
    {
      id: "top-00-04-07",
      code: "07",
      slug: "bad-sectors-remapping",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "7. Bozuk Sektörler (Bad Sectors) ve Remapping",
      subtitle: "Fiziksel Hasarlar ve SMART Analizi",
      shortDescription: "SMART (Self-Monitoring, Analysis and Reporting Technology) ve remapped sectors.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SMART VE HASARLI SEKTÖRLER", content: "Diskteki fiziksel bozulmalar SMART protokolü ile izlenir." }
      ],
      summary: ["SMART disk sağlığını izleyen protokol standartıdır."]
    },
    {
      id: "top-00-04-08",
      code: "08",
      slug: "nas-vs-san-storage",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "8. Kurumsal Depolama: NAS vs SAN",
      subtitle: "Ağ Bağlantılı Depolama Sistemleri",
      shortDescription: "NFS, SMB, iSCSI ve Fibre Channel depolama ağları.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NAS VE SAN", content: "NAS dosya seviyesinde (NFS/SMB), SAN ise blok seviyesinde (iSCSI/FC) kurumsal depolama sunar." }
      ],
      summary: ["NAS dosya, SAN blok bazlı ağ depolamasıdır."]
    },
    {
      id: "top-00-04-09",
      code: "09",
      slug: "cold-boot-attack-storage",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "9. Cold Boot Attack: Dondurularak Bellek Sızdırma",
      subtitle: "Fiziksel RAM Dondurma Saldırıları",
      shortDescription: "Sıvı azotla RAM hücrelerinin dondurulması ve şifreleme anahtarlarının okunması.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "COLD BOOT ATTACK", content: "RAM gücü kesilince birkaç saniye veriyi korur. Sıvı azot ile -50°C'ye soğutulduğunda dakikalarca şifreleme anahtarları silinmez." }
      ],
      summary: ["Cold Boot attack fiziksel bellek dondurma ile anahtar alma tekniğidir."]
    },
    {
      id: "top-00-04-10",
      code: "10",
      slug: "module-04-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "storage",
      title: "10. Modül Değerlendirmesi: Storage Özet & Test",
      subtitle: "Modül 04 Bütünsel Sınavı",
      shortDescription: "SSD, HDD, NVMe, Wiping, FDE ve Cold Boot attack özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "Dosya silmenin veriyi hemen yok etmediğini, FDE şifrelemenin fiziksel hırsızlığa karşı tek çare olduğunu bilmelisin." }
      ],
      summary: ["Modül 04 başarıyla tamamlandı. Sıradaki hedef: 05 - MOTHERBOARD & BUSES."],
      practice: {
        id: "prac-00-04-10",
        prompt: "Bir işletim sisteminde sıradan bir dosyayı sildiğinizde aşağıdakilerden hangisi gerçekleşir?",
        options: [
          { id: "a", text: "Diskteki tüm veriler anında 0 ile ezilir" },
          { id: "b", text: "Dosyanın bellek adresi (pointer) silinir, gerçek veri diskte kalır" },
          { id: "c", text: "Disk fiziksel olarak kendini imha eder" },
          { id: "d", text: "Veri doğrudan buluta yedeklenir" }
        ],
        correctAnswer: "b",
        explanation: "Normal silme işleminde yalnızca dosya sistemindeki indeks/pointer silinir; üzerine yeni veri yazılana kadar orijinal içerik diskte kalır."
      }
    }
  ]
};
