import { ModuleItem } from '../../../../types/lab';

export const mod02Cpu: ModuleItem = {
  id: "mod-00-02",
  code: "02",
  slug: "cpu",
  pathSlug: "computer-fundamentals",
  title: "CPU (CENTRAL PROCESSING UNIT)",
  description: "İşlemci iç yapısı, ALU, Control Unit, Registerlar, Komut Döngüsü (Fetch-Decode-Execute) ve CPU seviyesi güvenlik.",
  order: 2,
  topics: [
    {
      id: "top-00-02-01",
      code: "01",
      slug: "cpu-anatomy-alu-cu",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "1. CPU Anatomisi: Control Unit (CU) ve Aritmetik Mantık Birimi (ALU)",
      subtitle: "İşlemcinin İçindeki İki Büyük Güç",
      shortDescription: "Mantıksal kararlar alan ALU ve tüm donanımı yöneten Control Unit.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "ALU (ARITHMETIC LOGIC UNIT)",
          content: "ALU, toplama, çıkarma, çarpma gibi matematiksel işlemler ile AND, OR, XOR gibi mantıksal kararları alan devasa bir dijital devre grubudur."
        },
        {
          id: "sec-02",
          code: "02",
          title: "CONTROL UNIT (CU)",
          content: "CU, bellekteki komutları okur, çözer ve mantıksal sinyaller üreterek ALU, Registerlar ve I/O bileşenlerini ne yapması gerektiği konusunda yönlendirir."
        }
      ],
      summary: ["ALU matematik ve mantık yürütür.", "Control Unit tüm işlemciyi orkestre eder."]
    },
    {
      id: "top-00-02-02",
      code: "02",
      slug: "cpu-registers-deep-dive",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "2. CPU Registerları (Yazmaçlar): General Purpose & Special Registers",
      subtitle: "x86/x64 Mimarisinde RAX, RBX, RIP, RSP, RBP",
      shortDescription: "Genel amaçlı ve özel görevli registerların bellek adresleri ve veri işleme işlevleri.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "REGISTER NEDİR?",
          content: "CPU içinde doğrudan flip-flop'lardan yapılan nanosaniyeden hızlı geçici bellek hücreleridir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "KRİTİK REGİSTERLAR",
          content: "- RIP (Instruction Pointer): Bir sonraki çalışacak komut adresi.\n- RSP (Stack Pointer): Aktif Stack tepesini gösterir.\n- RBP (Base Pointer): Fonksiyon stack çerçev başı.\n- RAX (Accumulator): Fonksiyon dönüş değerleri."
        },
        {
          id: "sec-03",
          code: "03",
          title: "SİBER GÜVENLİK BAĞLANTISI: CONTROL FLOW HIJACKING",
          content: "Buffer overflow ile RIP adresi ezildiğinde, saldırgan programın çalışma akışını istediği zararlı koda yönlendirir."
        }
      ],
      summary: ["RIP sonraki komutun adresidir.", "RIP manipülasyonu kontrol akışı ele geçirmesidir."]
    },
    {
      id: "top-00-02-03",
      code: "03",
      slug: "instruction-cycle-fetch-decode-execute",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "3. Komut Döngüsü (Instruction Cycle): Fetch, Decode, Execute, Writeback",
      subtitle: "İşlemcinin Sonsuz Yaşam Döngüsü",
      shortDescription: "Komutun bellekten getirilmesi, çözülmesi, yürütülmesi ve sonucun yazılması.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "4 AŞAMALI DÖNGÜ",
          content: "1. Fetch: RIP adresindeki makine kodunu RAM'den oku.\n2. Decode: Komutu çöz (örneğin ADD, MOV).\n3. Execute: ALU üzerinde komutu yürüt.\n4. Writeback: Sonucu register veya RAM'e yaz."
        }
      ],
      summary: ["Fetch -> Decode -> Execute -> Writeback döngüsü saniyede milyarlarca kez çalışır."]
    },
    {
      id: "top-00-02-04",
      code: "04",
      slug: "cpu-pipeline-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "4. CPU Pipelining (Bant Hattı) Mimarisi",
      subtitle: "Paralel Komut İşleme Hattı",
      shortDescription: "Pipelining mantığı, pipeline hazards ve stall durumları.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "PIPELINING NEDİR?",
          content: "Bir komutun Fetch aşaması biter bitmez sonraki komutun Fetch'ine başlama tekniğidir. Fabrika bant hattı gibi çalışır."
        }
      ],
      summary: ["Pipelining komut yürütme verimliliğini devasa oranda artırır."]
    },
    {
      id: "top-00-02-05",
      code: "05",
      slug: "cpu-cache-l1-l2-l3",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "5. İşlemci Önbellekleri (L1, L2, L3 Cache) ve SRAM Mimarisi",
      subtitle: "Gecikmeyi Sıfıra Yaklaştıran Önbellek Hiyerarşisi",
      shortDescription: "SRAM mantığı, Cache Hit/Miss, Cache Line ve L1i/L1d ayrımı.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CACHE KATMANLARI",
          content: "L1 Cache (Çekirdeğe özel, 1-2 ns), L2 Cache (Çekirdeğe özel, 3-5 ns), L3 Cache (Paylaşımlı, 10-20 ns). SRAM yapısındadır (Tazeleme gerektirmez)."
        }
      ],
      summary: ["Önbellek RAM erişim gecikmesini önlemek için işlemci çipine entegre edilmiştir."]
    },
    {
      id: "top-00-02-06",
      code: "06",
      slug: "cpu-cores-hyperthreading",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "6. Multi-Core (Çok Çekirdek) ve Hyper-Threading (SMT)",
      subtitle: "Fiziksel Çekirdek vs Mantıksal Çekirdek",
      shortDescription: "Paralel hesaplama, fiziki çekirdekler, SMT ve thread eşzamanlılığı.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "MULTI-CORE VE HYPER-THREADING",
          content: "Fiziksel çekirdek tam bağımsız CPU birimidir. Hyper-Threading (SMT) ise tek çekirdeğin boş kaynaklarını değerlendirerek 2 mantıksal çekirdek gibi görünmesidir."
        }
      ],
      summary: ["Multi-core donanımsal paralellik, SMT ise kaynak kullanım verimliliğidir."]
    },
    {
      id: "top-00-02-07",
      code: "07",
      slug: "cpu-context-switching",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "7. Context Switching (Bağlam Değişimi) Mekanizması",
      subtitle: "Çok Görevlilik (Multitasking) Nasıl Sağlanır?",
      shortDescription: "Register durumlarının kaydedilmesi, PCB (Process Control Block) ve CPU zaman dilimleri.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CONTEXT SWITCHING",
          content: "CPU bir süreçten diğerine geçerken mevcut tüm register durumlarını belleğe kaydeder (Save State) ve yeni sürecin durumunu yükler (Restore State)."
        }
      ],
      summary: ["Context switching çok görevliliğin temelidir, maliyetli bir işlemdir."]
    },
    {
      id: "top-00-02-08",
      code: "08",
      slug: "cisc-vs-risc-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "8. CISC vs RISC Komut Seti Mimarileri (x86 vs ARM)",
      subtitle: "Karmaşık Komutlar vs Yalın Komutlar",
      shortDescription: "Intel/AMD x86 (CISC) ile ARM/Apple Silicon/RISC-V (RISC) karşılaştırması.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CISC VS RISC",
          content: "CISC (x86): Karmaşık ve değişken uzunlukta komutlar. RISC (ARM): Sabit uzunlukta, hızlı ve düşük güç tüketen komutlar."
        }
      ],
      summary: ["x86 CISC yapısındadır; mobil ve modern çipler RISC (ARM) mimarisindedir."]
    },
    {
      id: "top-00-02-09",
      code: "09",
      slug: "speculative-execution-spectre",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "9. Spekülatif Yürütme (Speculative Execution) ve Spectre/Meltdown",
      subtitle: "Donanım Seviyesinde Tahmin Saldırıları",
      shortDescription: "Branch prediction, speculative execution ve side-channel bellek sızıntıları.",
      order: 9,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SPEKÜLATİF YÜRÜTME VE ZAFİYET",
          content: "CPU hızı artırmak için henüz `if` kararı sonuçlanmadan muhtemel yolu tahmin edip çalıştırır. Karar yanlış çıkarsa sonuç silinir ama önbellekte (Cache) iz kalır! Spectre bu izden gizli verileri okur."
        }
      ],
      summary: ["Spekülatif yürütme performans optimizasyonudur ancak önbellekte iz bırakır."]
    },
    {
      id: "top-00-02-10",
      code: "10",
      slug: "module-02-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "cpu",
      title: "10. Modül Değerlendirmesi: CPU Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "ALU, CU, Registerlar, Fetch-Decode-Execute ve Spectre özet değerlendirmesi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "NE BİLMELİSİN?",
          content: "- Instruction Pointer (RIP/EIP) ezildiğinde yazılımın kontrolünün kaybedildiğini,\n- Cache yapısının performans ve yan kanal güvenliğinde kritik olduğunu bilmelisin."
        }
      ],
      summary: ["Modül 02 başarıyla tamamlandı. Sıradaki hedef: 03 - MEMORY."],
      practice: {
        id: "prac-00-02-10",
        prompt: "x86_64 mimarisinde o an çalışan fonksiyonun Stack çerçev tepe noktasını hangi register tutar?",
        options: [
          { id: "a", text: "RSP (Stack Pointer)" },
          { id: "b", text: "RAX" },
          { id: "c", text: "RCX" },
          { id: "d", text: "RDX" }
        ],
        correctAnswer: "a",
        explanation: "RSP (Stack Pointer) aktif Stack yığınının en tepe noktasını gösteren registerdır."
      }
    }
  ]
};
