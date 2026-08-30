import { ModuleItem } from '../../../../types/lab';

export const mod01Architecture: ModuleItem = {
  id: "mod-00-01",
  code: "01",
  slug: "computer-architecture",
  pathSlug: "computer-fundamentals",
  title: "COMPUTER ARCHITECTURE",
  description: "Bilgisayar mimarisinin temelleri, Von Neumann & Harvard modelleri, sistem bileşenleri ve veri akışı.",
  order: 1,
  topics: [
    {
      id: "top-00-01-01",
      code: "01",
      slug: "computer-definition-history",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "1. Bilgisayar Nedir ve Neden Elektronik İşlem Yapar?",
      subtitle: "Mekanik Hesaplayıcılardan Transistör Dünyasına",
      shortDescription: "Elektronik veri işlemenin doğası, silikon çipler ve transistörlerin mantıksal fonksiyonları.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "BİLGİSAYARIN TEMEL TANIMI VE AMACI",
          content: "Bilgisayar, karmaşık verileri ve mantıksal kararları nanosaniyeler içinde işlemek üzere tasarlanmış elektronik bir sistemdir. Girdiyi alır, tanımlanmış talimatlara (yazılım) göre işler ve sonucu çıktı olarak verir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "İÇERİDE NASIL ÇALIŞIYOR?",
          content: "Elektronik devrelerde yüksek voltaj (3.3V/5V) logic '1', düşük voltaj (0V) logic '0' durumunu temsil eder. Milyarlarca mikro transistör anahtar gibi açılarak ve kapanarak ikili (binary) verileri akıtır."
        },
        {
          id: "sec-03",
          code: "03",
          title: "BİLEŞENLER VE ANATOMİ",
          content: "1. İşlemci (CPU)\n2. Çalışma Belleği (RAM)\n3. Kalıcı Depolama (SSD/NVMe)\n4. Giriş/Çıkış Arayüzleri (I/O Controllers)"
        },
        {
          id: "sec-04",
          code: "04",
          title: "GERÇEK HAYAT ÖRNEĞİ",
          content: "Hesap makinesinde 2+2 tuşladığınızda: Tuş takımı girdi üretir, CPU bunu binary olarak 0010 + 0010 olarak ALU ünitesinde toplar ve 0100 (4) sonucunu ekrana yansıtır."
        },
        {
          id: "sec-05",
          code: "05",
          title: "SİBER GÜVENLİK BAĞLANTISI: BU NEDEDEN ÖNEMLİ?",
          content: "Zararlı yazılımlar (Malware) ve Exploits, fiziksel devrelerde yürütülen bu elektriksel mantık akışını manipüle ederek CPU'ya yetkisiz komutlar çalıştırtır. Donanımın alt katmanını anlamadan siber güvenlikte derinleşilemez."
        }
      ],
      summary: [
        "Bilgisayarlar elektriksel voltaj seviyeleriyle binary veri işler.",
        "Girdi, işlem, bellek ve çıktı temel çalışma döngüsüdür."
      ],
      practice: {
        id: "prac-00-01-01",
        prompt: "Elektronik devrelerde mantıksal 1 (Logic 1) durumunu aşağıdakilerden hangisi temsil eder?",
        options: [
          { id: "a", text: "0 Volt voltaj yokluğu" },
          { id: "b", text: "Yüksek voltaj seviyesi (örneğin 3.3V)" },
          { id: "c", text: "Sabit disk dönüş hızı" },
          { id: "d", text: "İnternet kablosu uzunluğu" }
        ],
        correctAnswer: "b",
        explanation: "Elektronik dijital devrelerde yüksek voltaj varlığı 1 (True), voltaj yokluğu 0 (False) durumuna karşılık gelir."
      }
    },
    {
      id: "top-00-01-02",
      code: "02",
      slug: "von-neumann-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "2. Von Neumann Mimarisi ve Saklı Program Prensibi",
      subtitle: "Tüm Modern Bilgisayarların Temel Tasarım Modeli",
      shortDescription: "CPU, bellek, girdi/çıktı birimleri ve ortak veri/komut bus yapısı.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "VON NEUMANN MİMARİSİ NEDİR?",
          content: "1945 yılında John von Neumann tarafından önerilen bu modelde, hem veri (data) hem de komutlar (instructions) aynı bellek alanında saklanır. Bu prensibe Saklı Program (Stored-Program) konsepti denir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "MİMARİNİN ANA PARÇALARI",
          content: "- CPU (ALU + Control Unit + Registerlar)\n- Memory Unit (RAM)\n- Input/Output (I/O) Interfaces\n- Bus System (Data Bus, Address Bus, Control Bus)"
        },
        {
          id: "sec-03",
          code: "03",
          title: "VON NEUMANN DARBOĞAZI (BOTTLENECK)",
          content: "Veri ve komutlar aynı bus üzerinden taşındığı için CPU, bellekten veri beklerken boşa süre harcayabilir. Buna Von Neumann darboğazı denir. Önbellekler (L1/L2/L3 Cache) bu sorunu çözmek için geliştirilmiştir."
        },
        {
          id: "sec-04",
          code: "04",
          title: "SİBER GÜVENLİK BAĞLANTISI: BUFFER OVERFLOW ZAFİYETİ",
          content: "Veri ve kodun aynı bellekte bulunması siber güvenliğin en büyük tarihsel zafiyetine yol açar: Buffer Overflow! Saldırgan verinin içine çalıştırılabilir kod koyarak CPU'nun kod olarak çalıştırmasını sağlar."
        }
      ],
      summary: [
        "Von Neumann mimarisinde veri ve kod aynı bellekte yaşar.",
        "Veri ve kodun ayrılmaması Buffer Overflow zafiyetinin temel nedenidir."
      ],
      practice: {
        id: "prac-00-01-02",
        prompt: "Von Neumann mimarisinde Buffer Overflow zafiyetine yol açan temel mimari özellik nedir?",
        options: [
          { id: "a", text: "İşlemcinin çok hızlı çalışması" },
          { id: "b", text: "Veri ve çalıştırılabilir kodun aynı bellek alanını paylaşması" },
          { id: "c", text: "Monitör çözünürlüğünün yüksek olması" },
          { id: "d", text: "Ekran kartı RAM'inin ayrı olması" }
        ],
        correctAnswer: "b",
        explanation: "Veri ve kod aynı bellek alanında tutulduğu için, veri alanına taşan zararlı kod parçaları CPU tarafından kod gibi yürütülebilir."
      }
    },
    {
      id: "top-00-01-03",
      code: "03",
      slug: "harvard-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "3. Harvard Mimarisi ve Kod/Veri İzolasyonu",
      subtitle: "Ayrılmış Kod ve Veri Yolları",
      shortDescription: "Fiziksel olarak ayrılmış veri ve komut bellekleri, DSP ve mikrodenetleyiciler.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "HARVARD MİMARİSİ NEDİR?",
          content: "Harvard mimarisi, komutlar (Instructions) ile verileri (Data) fiziksel olarak tamamen ayrı bellek birimlerinde ve ayrı bus hatlarında tutan bir mimaridir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "VON NEUMANN İLE KARŞILAŞTIRMA",
          content: "Harvard mimarisinde CPU aynı anda hem komutu okuyabilir hem de veriyi işleyebilir. Çakışma olmaz, daha hızlıdır ancak donanım karmaşıklığı yüksektir."
        },
        {
          id: "sec-03",
          code: "03",
          title: "SİBER GÜVENLİK BAĞLANTISI: DEP / NX BITİ",
          content: "Modern işlemciler Von Neumann yapısında olsa da, Harvard mimarisinin güvenliğini simüle etmek için DEP (Data Execution Prevention / NX Bit) kullanır: Veri alanındaki sayfalar 'çalıştırılamaz' olarak işaretlenir."
        }
      ],
      summary: [
        "Harvard mimarisi kod ve veriyi fiziksel olarak ayırır.",
        "DEP/NX koruması Harvard modelinin güvenlik izolasyonunu Von Neumann'a getirir."
      ]
    },
    {
      id: "top-00-01-04",
      code: "04",
      slug: "system-bus-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "4. Sistem Veri Yolu (System Bus): Data, Address ve Control Bus",
      subtitle: "Bileşenler Arası İletişim Otoyolu",
      shortDescription: "Veri, adres ve kontrol otobanlarının çalışma mantığı ve bant genişliği.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SYSTEM BUS NEDİR?",
          content: "System Bus, CPU, RAM ve I/O cihazlarını birbirine bağlayan paralelleştirilmiş iletken hatlar kümesidir. Üç ana alt hat grubundan oluşur."
        },
        {
          id: "sec-02",
          code: "02",
          title: "ÜÇ ANA BUS HATTI",
          content: "1. Data Bus: İşlenecek gerçek bayt verilerini taşır (64-bit).\n2. Address Bus: Verinin bellek adresini taşır (Örn: 64-bit adres uzayı = 16 Exabyte RAM desteği).\n3. Control Bus: Okuma/Yazma (Read/Write) ve kesme (Interrupt) sinyallerini iletir."
        },
        {
          id: "sec-03",
          code: "03",
          title: "SİBER GÜVENLİK BAĞLANTISI: BUS SNOOPING VE HARDWARE TAPPING",
          content: "Fiziksel erişimi olan bir saldırgan, anakart üzerindeki veri yollarına dinleme cihazı (Logic Analyzer/Bus Snooper) bağlayarak şifrelenmemiş verileri havadan yakalayabilir."
        }
      ],
      summary: [
        "System Bus = Data Bus + Address Bus + Control Bus.",
        "Address bus genliği adreslenebilir maksimum RAM miktarını belirler."
      ]
    },
    {
      id: "top-00-01-05",
      code: "05",
      slug: "io-subsystem-interrupts",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "5. Girdi/Çıktı (I/O) Alt Sistemi ve Kesmeler (Interrupts)",
      subtitle: "Polling vs Interrupt-Driven I/O",
      shortDescription: "Donanım ve yazılım kesmeleri (Hardware/Software Interrupts), IRQ ve Polling.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "INTERRUPT (KESME) NEDİR?",
          content: "Interrupt, dış bir donanım aygıtından (klavye, ağ kartı) veya yazılımdan gelen ve CPU'nun o anki işini durdurup acil olaya odaklanmasını sağlayan uyarı sinyalidir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "POLLING VS INTERRUPT",
          content: "Polling yöntemi CPU'nun sürekli 'girdi var mı?' diye sormasıdır (CPU harcar). Interrupt ise olay olduğunda donanımın CPU'yu uyarmasıdır (Verimli)."
        },
        {
          id: "sec-03",
          code: "03",
          title: "SİBER GÜVENLİK BAĞLANTISI: HOOKING VE KEYLOGGER",
          content: "Saldırganlar Interrupt Vector Table (IVT) veya IDT (Interrupt Descriptor Table) tablolarını ezerek klavye kesmelerini dinler (Keylogger) veya sistem çağrılarını yakalar."
        }
      ],
      summary: [
        "Interrupts CPU'ya olay bazlı erişim sağlar.",
        "IDT/IVT tabloları kesme işleyicilerinin (Handler) adreslerini tutar."
      ]
    },
    {
      id: "top-00-01-06",
      code: "06",
      slug: "clock-cycle-frequency",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "6. Saat Sinyali (Clock Signal) ve İşlemci Frekansı (GHz)",
      subtitle: "Sistem Senkronizasyonunun Kalp Atışı",
      shortDescription: "Kristal osilatörler, saat döngüleri, Overclocking ve zamanlama açıkları.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CLOCK SİNYALİ NEDİR?",
          content: "Anakart üzerindeki kuvars kristal osilatör, dijital devrelere yüksek frekansta kare dalga sinyal üretir. 3.5 GHz frekanstaki bir işlemci saniyede 3.5 milyar saat vuruşu yapar."
        },
        {
          id: "sec-02",
          code: "02",
          title: "SİBER GÜVENLİK BAĞLANTISI: CLOCK GLITCHING SALDIRILARI",
          content: "Donanım korsanları (Hardware Hackers), işlemcinin saat sinyalini anlık olarak bozarak (Clock Glitching) CPU'nun güvenlik şifre kontrolünü atlamasını (Instruction Skip) sağlar."
        }
      ],
      summary: [
        "Saat sinyali donanım bileşenlerini senkronize eder.",
        "Clock Glitching donanım seviyesinde kilit atlatma saldırısıdır."
      ]
    },
    {
      id: "top-00-01-07",
      code: "07",
      slug: "chipset-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "7. Yonga Seti (Chipset) Mimarisi: Northbridge & Southbridge",
      subtitle: "Anakart Üzerindeki Trafik Polisi",
      shortDescription: "Kuzey köprüsü (RAM/PCIe) ve Güney köprüsü (USB/SATA/Ağ) sorumlulukları.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CHIPSET GÖREVLERİ",
          content: "Kuzey Köprüsü (Northbridge) yüksek hızlı bileşenleri (RAM, Ekran Kartı) yönetirdi. Güney Köprüsü (Southbridge) yavaş I/O portlarını (USB, SATA, Ethernet) yönetirdi. Modern sistemlerde Northbridge doğrudan CPU'nun içine entegre edilmiştir (System on Chip - SoC)."
        }
      ],
      summary: ["Modern işlemciler belleği ve yüksek hızlı PCIe hatlarını doğrudan içinde barındırır."]
    },
    {
      id: "top-00-01-08",
      code: "08",
      slug: "system-on-chip-soc",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "8. System on Chip (SoC) Mimarisi",
      subtitle: "Tüm Sistemin Tek Silikon Çipte Birleşimi",
      shortDescription: "ARM Apple Silicon, Qualcomm Snapdragon ve mobil/gömülü sistem mimarileri.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SOC NEDİR?",
          content: "SoC, CPU, GPU, NPU (Yapay zeka), RAM denetleyicisi, Wi-Fi ve Güvenlik İşlemcisini (Secure Enclave) tek bir silikon katmanda birleştiren yüksek verimli mimaridir."
        }
      ],
      summary: ["SoC tek çipte tüm sistemi barındırır, mobil ve modern cihazların standardıdır."]
    },
    {
      id: "top-00-01-09",
      code: "09",
      slug: "embedded-systems-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "9. Gömülü Sistemler (Embedded Systems) ve IoT Mimarisi",
      subtitle: "Akıllı Cihazlardan Endüstriyel Sistemlere",
      shortDescription: "Mikrodenetleyiciler (MCU), Firmware, RTOS ve kısıtlı kaynak mimarisi.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "EMBEDDED SYSTEMS NEDİR?",
          content: "Belirli ve kısıtlı bir görevi yerine getirmek üzere tasarlanmış özel donanım ve yazılım kombinasyonudur (Örn: Otomobil ABS fren sistemi, Akıllı sayaç)."
        }
      ],
      summary: ["Gömülü sistemler kısıtlı kaynakla 7/24 kesintisiz özel görev icra eder."]
    },
    {
      id: "top-00-01-10",
      code: "10",
      slug: "module-01-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-architecture",
      title: "10. Modül Değerlendirmesi: Computer Architecture Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı ve Temel Kavram Kontrolü",
      shortDescription: "Von Neumann, Harvard, Bus mimarisi, Interrupts ve donanım güvenliği özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "NE BİLMELİSİN?",
          content: "- Von Neumann mimarisinde kod ve verinin aynı bellekte olduğunu,\n- Buffer Overflow zafiyetinin kök nedeninin bu ortak bellek yapısı olduğunu,\n- Interrupt mekanizmalarının olay odaklı iletişimi sağladığını bilmelisin."
        }
      ],
      summary: ["Modül 01 başarıyla tamamlandı. Sıradaki hedef: 02 - CPU."],
      practice: {
        id: "prac-00-01-10",
        prompt: "Aşağıdakilerden hangisi Von Neumann mimarisi ile Harvard mimarisi arasındaki en temel farktır?",
        options: [
          { id: "a", text: "Harvard mimarisinde ekran kartı olmaması" },
          { id: "b", text: "Harvard mimarisinde kod ve veri için ayrı belleklerin kullanılması" },
          { id: "c", text: "Von Neumann mimarisinin sadece cep telefonlarında çalışması" },
          { id: "d", text: "Von Neumann mimarisinde elektrik kullanılmaması" }
        ],
        correctAnswer: "b",
        explanation: "Harvard mimarisi komut (kod) ve veriyi fiziksel olarak ayrı bellek ünitelerinde saklar."
      }
    }
  ]
};
