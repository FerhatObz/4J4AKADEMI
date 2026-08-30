import { ModuleItem } from '../../../../types/lab';

export const mod05Motherboard: ModuleItem = {
  id: "mod-00-05",
  code: "05",
  slug: "motherboard-buses",
  pathSlug: "computer-fundamentals",
  title: "MOTHERBOARD & BUSES",
  description: "Anakart mimarisi, PCIe veriyolları, DMA (Direct Memory Access), USB denetleyicileri ve fiziksel donanım güvenliği.",
  order: 5,
  topics: [
    {
      id: "top-00-05-01",
      code: "01",
      slug: "motherboard-anatomy-form-factors",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "1. Anakart Anatomisi ve Form Faktörleri",
      subtitle: "ATX, Micro-ATX, Mini-ITX ve PCB Katmanları",
      shortDescription: "Anakart üzerindeki veri yolları, VRM voltaj düzenleyiciler ve form faktörleri.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ANAKART NEDİR?", content: "Anakart (Motherboard), tüm bileşenlerin (CPU, RAM, GPU, Depolama) elektrik ve veri hatları ile birbirine bağlandığı çok katmanlı baskılı devre kartıdır (PCB)." }
      ],
      summary: ["Anakart bileşenlerin omurgasıdır."]
    },
    {
      id: "top-00-05-02",
      code: "02",
      slug: "pcie-express-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "2. PCI Express (PCIe) Mimarisi ve Şeritler (Lanes)",
      subtitle: "x1, x4, x8, x16 Şeritleri ve Yüksek Hızlı Seri İletişim",
      shortDescription: "PCIe jenerasyonları (Gen3/Gen4/Gen5), bant genişliği ve seri nokta-nokta bağlantı.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PCIE ŞERİTLERİ", content: "PCIe seri nokta-nokta bağlantıdır. x16 şeridi ekran kartları için en yüksek bant genişliğini sunar." }
      ],
      summary: ["PCIe yüksek hızlı seri donanım bağlantı standardıdır."]
    },
    {
      id: "top-00-05-03",
      code: "03",
      slug: "dma-direct-memory-access",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "3. Direct Memory Access (DMA) ve DMA Saldırıları",
      subtitle: "CPU'yu Pas Geçerek Doğrudan RAM Okuma",
      shortDescription: "DMA denetleyicisi, PCILeech aracı, PCIe DMA attack ve IOMMU koruması.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DMA VE DMA ATTACK", content: "DMA, ağ kartı veya ekran kartının CPU'yu meşgul etmeden doğrudan RAM'e okuma/yazma yapmasıdır. Saldırganlar PCIe portuna PCILeech kartı takarak işletim sistemi parolasını anında RAM'den ezer!" }
      ],
      summary: ["DMA donanımın CPU'suz RAM'e erişmesidir; IOMMU olmadan kritik güvenlik açığı yaratır."]
    },
    {
      id: "top-00-05-04",
      code: "04",
      slug: "usb-architecture-badusb",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "4. USB Protokol Mimarisi ve BadUSB Saldırıları",
      subtitle: "Güvenilir Cihaz İllüzyonu: HID Emülasyonu",
      shortDescription: "USB denetleyicisi, Rubber Ducky, BadUSB firmware enjeksiyonu.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BADUSB SALDIRISI", content: "Sıradan bir USB bellek gibi görünen cihaz, bilgisayara takıldığı an kendini klavye (HID) olarak tanıtır ve saniyede 1000 kelime hızında zararlı komut yazıp çalıştırır." }
      ],
      summary: ["BadUSB cihaz kimliğini klavye olarak taklit edip otomatik komut çalıştırır."]
    },
    {
      id: "top-00-05-05",
      code: "05",
      slug: "thunderbolt-firewire-attacks",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "5. Thunderbolt & FireWire Güvenlik Riskleri",
      subtitle: "Dış Portlardan Donanım Seviyesi Sızma",
      shortDescription: "Thunderstrike, Thunderspy ve PCIe erişim yetkisi olan yüksek hızlı portlar.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "THUNDERBOLT TEHDİDİ", content: "Thunderbolt doğrudan PCIe veri yollarına bağlıdır; dondurulmuş veya kilitli cihazlarda doğrudan belleğe erişim izni verebilir." }
      ],
      summary: ["Thunderbolt doğrudan PCIe erişimine sahip olduğu için donanım koruması zorunludur."]
    },
    {
      id: "top-00-05-06",
      code: "06",
      slug: "tpm-trusted-platform-module",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "6. TPM (Trusted Platform Module) Kripto Çipi",
      subtitle: "Anakart Üzerindeki Kırılmaz Güvenlik Kalesi",
      shortDescription: "TPM 2.0, PCR (Platform Configuration Register), donanımsal anahtar saklama ve attestation.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TPM ÇİPİ", content: "TPM, kriptografik anahtarları, BitLocker parolalarını ve boot önyükleme bütünlük imzalarını saklayan fiziksel güvenlik çipidir." }
      ],
      summary: ["TPM donanımsal kripto anahtar saklama çipidir."]
    },
    {
      id: "top-00-05-07",
      code: "07",
      slug: "spi-flash-firmware",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "7. SPI Flash ve BIOS/UEFI Çipi",
      subtitle: "Anakartın Kalıcı Yazılım Evi",
      shortDescription: "SPI bus, BIOS çipi, SPI flasher donanım araçları ve firmware koruması.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SPI FLASH", content: "BIOS/UEFI kodunu saklayan 8 bacaklı küçük çiptir. Harici klipslerle fiziksel olarak yeniden programlanabilir." }
      ],
      summary: ["SPI Flash BIOS/UEFI çipidir."]
    },
    {
      id: "top-00-05-08",
      code: "08",
      slug: "vrm-power-delivery-security",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "8. VRM (Voltage Regulator Module) ve Donanım Aşırı Yükleme",
      subtitle: "Güç Besleme Devresi ve Aşırı Isınma Tehditleri",
      shortDescription: "VRM fazları, MOSFET'ler, voltaj dalgalanmaları ve Donanımsal DoS.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "VRM DEVRESİ", content: "Güç kaynağından gelen 12V voltajı işlemcinin hassas 1.2V seviyelerine düşüren voltaj düzenleyicidir." }
      ],
      summary: ["VRM işlemciye temiz voltaj sağlar."]
    },
    {
      id: "top-00-05-09",
      code: "09",
      slug: "hardware-trojans-side-channel",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "9. Donanımsal Truva Atları (Hardware Trojans)",
      subtitle: "Üretim Safhasında Eklenen Gizli Devreler",
      shortDescription: "Tedarik zinciri (Supply chain) donanım müdahaleleri ve ASIC/FPGA truva atları.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HARDWARE TROJAN", content: "Çip üretimi sırasında silikona gizlice eklenen ve belirli bir sinyalle (Trigger) şifreleme anahtarını sızdıran donanım devreleridir." }
      ],
      summary: ["Donanımsal Truva atı çip imalatında eklenen gizli devredir."]
    },
    {
      id: "top-00-05-10",
      code: "10",
      slug: "module-05-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "motherboard-buses",
      title: "10. Modül Değerlendirmesi: Motherboard & Buses Özet & Test",
      subtitle: "Modül 05 Bütünsel Sınavı",
      shortDescription: "PCIe, DMA attacks, BadUSB, TPM ve SPI Flash özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "DMA yetkisine sahip PCIe portlarının doğrudan RAM'e eritebildiğini, BadUSB cihazlarının klavye gibi çalıştığını bilmelisin." }
      ],
      summary: ["Modül 05 başarıyla tamamlandı. Sıradaki hedef: 06 - BINARY & DATA REPRESENTATION."],
      practice: {
        id: "prac-00-05-10",
        prompt: "Donanım cihazlarının (örneğin ağ kartı) CPU'yu meşgul etmeden doğrudan RAM'e okuma/yazma yapmasını sağlayan mimari özellik nedir?",
        options: [
          { id: "a", text: "DMA (Direct Memory Access)" },
          { id: "b", text: "HTTP Request" },
          { id: "c", text: "BIOS Flash" },
          { id: "d", text: "SATA Cable" }
        ],
        correctAnswer: "a",
        explanation: "DMA (Direct Memory Access), çevresel donanım aygıtlarının CPU aracılığı olmadan doğrudan bellek alanına okuma/yazma yapmasını sağlar."
      }
    }
  ]
};
