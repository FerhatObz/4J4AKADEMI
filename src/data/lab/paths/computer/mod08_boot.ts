import { ModuleItem } from '../../../../types/lab';

export const mod08Boot: ModuleItem = {
  id: "mod-00-08",
  code: "08",
  slug: "boot-process",
  pathSlug: "computer-fundamentals",
  title: "BOOT PROCESS",
  description: "POST testi, BIOS vs UEFI, MBR vs GPT, Bootloader (GRUB/Windows Boot Manager), Kernel Yükleme ve Secure Boot güvenliği.",
  order: 8,
  topics: [
    {
      id: "top-00-08-01",
      code: "01",
      slug: "post-power-on-self-test",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "1. Power-On Self-Test (POST) ve İlk Donanım Sinyali",
      subtitle: "Güç Butonuna Basıldığı An Ne Olur?",
      shortDescription: "Güç kaynağı OK sinyali, CPU Reset vektörü (0xFFFFFFF0) ve donanım doğrulama.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "POST SÜRECİ", content: "Güç butonuna basıldığında Power Supply 'Power Good' sinyali verir. CPU reset vektöründen (0xFFFFFFF0) BIOS/UEFI kodunu okumaya başlar ve POST testi donanımı doğrular." }
      ],
      summary: ["POST güç verildiğinde yapılan donanım doğrulama testidir."]
    },
    {
      id: "top-00-08-02",
      code: "02",
      slug: "bios-vs-uefi-firmware",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "2. Legacy BIOS vs Modern UEFI Firmware",
      subtitle: "16-bit Real Mode Sisteminden 64-bit Modüler Yazılıma",
      shortDescription: "Legacy BIOS kısıtlamaları, UEFI özellikleri ve ESP (EFI System Partition).",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BIOS VS UEFI", content: "BIOS 16-bit kısıtlı bir yazılımdı. UEFI ise 64-bit sürücü desteği, grafik arayüz ve modüler yapısıyla işletim sistemine benzer." }
      ],
      summary: ["UEFI modern, 64-bit destekli ve güvenli önyükleme yazılımıdır."]
    },
    {
      id: "top-00-08-03",
      code: "03",
      slug: "mbr-vs-gpt-partitioning",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "3. MBR (Master Boot Record) vs GPT (GUID Partition Table)",
      subtitle: "Disk Bölümleme Tabloları",
      shortDescription: "512 bayt MBR sektörü, 2 TB sınırı, GPT yedekli tablo yapısı ve Protective MBR.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MBR VS GPT", content: "MBR 512 baytlık ilk sektördür (Max 2TB disk desteği). GPT ise modern, 128 bölüme izin veren yedekli sistemdir." }
      ],
      summary: ["GPT modern ve 2TB üzeri diskleri destekleyen bölümleme yapısıdır."]
    },
    {
      id: "top-00-08-04",
      code: "04",
      slug: "bootloader-stage1-stage2-grub",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "4. Bootloader Mekanizması: Stage 1, Stage 2 ve GRUB",
      subtitle: "İşletim Sistemini Belleğe Yükleyen Elçi",
      shortDescription: "GRUB2, NTLDR / Windows Boot Manager ve initramfs/initrd yüklemesi.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BOOTLOADER GÖREVİ", content: "Bootloader diski okur, kernel imajını RAM'e yükler ve kontrolü kernel'a devreder." }
      ],
      summary: ["Bootloader Kernel'ı diske okuyup RAM'de başlatan ana yazılımdır."]
    },
    {
      id: "top-00-08-05",
      code: "05",
      slug: "secure-boot-chain-of-trust",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "5. UEFI Secure Boot ve Güven Zinciri (Chain of Trust)",
      subtitle: "İmzasız Yazılımların Başlatılmasını Engelleme",
      shortDescription: "PK (Platform Key), KEK (Key Exchange Key), db ve dbx (Karaliste) dijital imzaları.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SECURE BOOT", content: "Secure Boot, sadece Microsoft veya anakart üreticisi tarafından dijital olarak imzalanmış bootloader'ların çalışmasına izin verir." }
      ],
      summary: ["Secure Boot imzasız bootkit ve yetkisiz bootloader'ları engeller."]
    },
    {
      id: "top-00-08-06",
      code: "06",
      slug: "bootkit-malware-rootkits",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "6. Bootkit Tehditleri ve MBR/UEFI Zararlıları",
      subtitle: "İşletim Sisteminden Önce Çalışan Zafiyetler",
      shortDescription: "MBR overwriting, UEFI NVRAM implantları ve Bootkit tespiti.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BOOTKIT ZARARLILARI", content: "Bootkit'ler işletim sistemi başlamadan önce MBR veya UEFI çipine yerleşerek antivirüslerin tespit etmesini engeller." }
      ],
      summary: ["Bootkit OS başlamadan önyükleme safhasında çalışan zararlıdır."]
    },
    {
      id: "top-00-08-07",
      code: "07",
      slug: "kernel-initialization-init",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "7. Çekirdek Başlatma (Kernel Initialization) ve PID 1",
      subtitle: "Donanım Taramasından İlk Sürece (systemd / init)",
      shortDescription: "Kernel uncompress, device driver loading ve PID 1 (systemd) süreci.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PID 1 SYSTEMD", content: "Kernel yüklendikten sonra ilk olarak PID 1 süreci olan `systemd` başlatılır ve tüm diğer servisler ondan türetilir." }
      ],
      summary: ["PID 1 (systemd/init) tüm kullanıcı süreçlerinin atasıdır."]
    },
    {
      id: "top-00-08-08",
      code: "08",
      slug: "dual-boot-virtualization-boot",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "8. Dual-Boot ve Sanallaştırma Önyüklemesi",
      subtitle: "Çoklu İşletim Sistemi Yapılandırmaları",
      shortDescription: "GRUB dual-boot, Hypervisor önyüklemesi (Type-1 Hypervisor).",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DUAL BOOT", content: "Aynı disk üzerinde hem Windows hem Linux barındırıp önyüklemede GRUB menüsünden seçim yapılmasıdır." }
      ],
      summary: ["Dual-boot birden fazla OS'in aynı bilgisayarda barındırılmasıdır."]
    },
    {
      id: "top-00-08-09",
      code: "09",
      slug: "measured-boot-remote-attestation",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "9. Measured Boot ve TPM Remote Attestation",
      subtitle: "Önyükleme Adımlarının Kriptografik Kaydı",
      shortDescription: "TPM PCR (Platform Configuration Registers) hash biriktirme ve uzaktan doğrulama.",
      order: 9,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MEASURED BOOT", content: "Boot adımlarındaki her bileşenin hash'i TPM PCR registerlarına eklenir. Değişiklik varsa uzaktan sunucu cihazı engeller." }
      ],
      summary: ["Measured Boot önyükleme aşamalarının hash değerlerini TPM'de tutar."]
    },
    {
      id: "top-00-08-10",
      code: "10",
      slug: "module-08-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "boot-process",
      title: "10. Modül Değerlendirmesi: Boot Process Özet & Test",
      subtitle: "Modül 08 Bütünsel Sınavı",
      shortDescription: "POST, UEFI, MBR/GPT, Bootloader, Secure Boot ve Bootkit özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "UEFI Secure Boot'un dijital imzalı bootloader doğrulaması yaptığını, Bootkit'in OS'ten önce başladığını bilmelisin." }
      ],
      summary: ["Modül 08 başarıyla tamamlandı. Sıradaki hedef: 09 - OPERATING SYSTEM FUNDAMENTALS."],
      practice: {
        id: "prac-00-08-10",
        prompt: "Aşağıdakilerden hangisi işletim sistemi önyüklenmeden önce MBR veya UEFI çipine yerleşen zararlı yazılım türüdür?",
        options: [
          { id: "a", text: "Rootkit" },
          { id: "b", text: "Bootkit" },
          { id: "c", text: "Ransomware" },
          { id: "d", text: "Adware" }
        ],
        correctAnswer: "b",
        explanation: "Bootkit, işletim sistemi ve antivirüs yazılımları yüklenmeden önce önyükleme sektörlerine yerleşen en tehlikeli zararlı türüdür."
      }
    }
  ]
};
