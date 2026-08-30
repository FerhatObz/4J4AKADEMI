import { ModuleItem } from '../../../../types/lab';

export const mod03Memory: ModuleItem = {
  id: "mod-00-03",
  code: "03",
  slug: "memory",
  pathSlug: "computer-fundamentals",
  title: "MEMORY (RAM, STACK, HEAP & VIRTUAL MEMORY)",
  description: "DRAM/SRAM teknolojileri, fiziksel ve sanal bellek (Virtual Memory), sayfalama (Paging), Stack/Heap organizasyonu ve bellek güvenliği.",
  order: 3,
  topics: [
    {
      id: "top-00-03-01",
      code: "01",
      slug: "ram-types-dram-sram",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "1. RAM Teknolojileri: DRAM vs SRAM",
      subtitle: "Kapasitörlü Dinamik Bellek vs Transistörlü Statik Önbellek",
      shortDescription: "DRAM şarj yenileme ihtiyacı, SRAM hızı ve DDR (Double Data Rate) nesilleri.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "DRAM VS SRAM",
          content: "DRAM (Dynamic RAM), tek transistör ve bir kapasitörden oluşur. Şarjı zamanla sızdığı için sürekli yenilenmesi (refresh) gerekir. SRAM (Static RAM) ise flip-flop yapısındadır, yenileme gerektirmez, çok hızlı ve pahalıdır."
        }
      ],
      summary: ["RAM geçici ana bellek alanıdır.", "DRAM ucuz ve büyük kapasiteli, SRAM hızlı ve önbellekler içindir."]
    },
    {
      id: "top-00-03-02",
      code: "02",
      slug: "physical-vs-virtual-memory",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "2. Fiziksel Bellek vs Sanal Bellek (Virtual Memory)",
      subtitle: "İşletim Sisteminin Süreçlere Sunduğu Bellek İllüzyonu",
      shortDescription: "Virtual Memory mantığı, MMU (Memory Management Unit) ve süreç bellek izolasyonu.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SANAL BELLEK İZOLASYONU",
          content: "Her sürece sanki sistemde 64-bitlik devasa bir bellek alanına tek başına sahipmiş gibi sanal bir adres uzayı sunulur. Bir sürecin doğrudan başka bir sürecin RAM'ini okuması MMU tarafından engellenir."
        }
      ],
      summary: ["Sanal bellek süreçlerin birbirinin belleğine müdahale etmesini engeller."]
    },
    {
      id: "top-00-03-03",
      code: "03",
      slug: "paging-page-tables-tlb",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "3. Sayfalama Mimarisi (Paging) ve TLB",
      subtitle: "Sanal Adreslerin Fiziksel Adreslere Çevrimi",
      shortDescription: "Page, Page Frame, Page Table, TLB (Translation Lookaside Buffer) ve Page Fault.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "PAGING MEKANİZMASI",
          content: "Sanal bellek 4 KB'lık sabit bloklara (Pages) bölünür. MMU, Page Table kullanarak sanal sayfaları fiziksel RAM bloklarına (Frames) haritalar."
        }
      ],
      summary: ["Paging bellek alanını 4KB bloklarla düzenler ve izolasyon sağlar."]
    },
    {
      id: "top-00-03-04",
      code: "04",
      slug: "stack-memory-anatomy",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "4. Stack Bellek Anatomisi ve Stack Frame",
      subtitle: "Fonksiyon Çağrı Yığını: LIFO Yapısı",
      shortDescription: "Stack çerçeveleri, yerel değişkenler, Saved Frame Pointer (RBP) ve Return Address (RIP).",
      order: 4,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "STACK FRAME YAPISI",
          content: "Her fonksiyon çağrıldığında Stack üzerinde yeni bir frame oluşturulur. Parametreler, yerel değişkenler ve fonksiyon bittiğinde dönülecek adres (Return Address) burada tutulur."
        }
      ],
      summary: ["Stack fonksiyon çağrılarını ve dönüş adreslerini saklar."]
    },
    {
      id: "top-00-03-05",
      code: "05",
      slug: "heap-memory-management",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "5. Heap Bellek Yönetimi ve Dinamik Tahsis",
      subtitle: "malloc, free, new ve delete İç Mekanizması",
      shortDescription: "Heap chuncları, free listler, brk/sbrk/mmap sistem çağrıları ve Garbage Collection.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "HEAP ALANININ DİNAMİK YAPISI",
          content: "Boyutu önceden bilinmeyen veriler için `malloc()` ile Heap'ten bellek istenir. İşi biten bellek `free()` ile geri verilmezse bellek sızıntısı (Memory Leak) oluşur."
        }
      ],
      summary: ["Heap dinamik boyutlu veriler içindir, geliştirici tarafından yönetilir."]
    },
    {
      id: "top-00-03-06",
      code: "06",
      slug: "buffer-overflow-mechanics",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "6. Buffer Overflow Mekanizması",
      subtitle: "Bellek Sınırlarının Aşılması Zafiyeti",
      shortDescription: "Dizi sınırlarının denetlenmemesi sonucu dönüş adresinin ezilmesi.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "BUFFER OVERFLOW TANIMI",
          content: "Programın ayırdığı bellek alanından daha fazla veri yazıldığında yanındaki alanlar (Saved RBP ve Return Address) ezilir. Saldırgan dönüş adresine kendi zararlı kodunun adresini yazar."
        }
      ],
      summary: ["Buffer overflow bellek sınır kontrolü yapılmadığında oluşur."]
    },
    {
      id: "top-00-03-07",
      code: "07",
      slug: "heap-vulnerabilities-uaf",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "7. Heap Zafiyetleri: Use-After-Free ve Double Free",
      subtitle: "Dinamik Bellek İstismarı",
      shortDescription: "Serbest bırakılmış bellek işaretçilerinin kullanımı ve Chunk Corruption.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "USE-AFTER-FREE (UAF)",
          content: "`free()` edilen bir nesnenin pointer'ı `NULL` yapılmazsa ve sonradan erişilirse, o adrese yazılan başka bir nesne manipüle edilebilir."
        }
      ],
      summary: ["UAF serbest bırakılan bellek işaretçisinin temizlenmemesinden doğar."]
    },
    {
      id: "top-00-03-08",
      code: "08",
      slug: "memory-protections-dep-aslr",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "8. Bellek Korumaları: ASLR, DEP/NX ve Stack Canaries",
      subtitle: "İşletim Sistemi ve CPU Güvenlik Kalkanları",
      shortDescription: "ASLR ile adres rastgeleleştirme, DEP ile veri alanında kod engelleme, Canary ile taşma tespiti.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "3 TEMEL BELLEK KORUMASI",
          content: "1. ASLR: Her başlatmada bellek adreslerini rastgele yapar.\n2. DEP/NX: Stack/Heap alanında kod yürütülmesini engeller.\n3. Stack Canary: Dönüş adresinin önüne rastgele değer koyup taşmayı kontrol eder."
        }
      ],
      summary: ["ASLR, DEP ve Canary bellek istismarını zorlaştıran temel korumalardır."]
    },
    {
      id: "top-00-03-09",
      code: "09",
      slug: "rowhammer-hardware-attack",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "9. Rowhammer Saldırısı: Fiziksel Bellek Sızıntısı",
      subtitle: "DRAM Hücrelerinde Voltaj Sıçraması ile Bit Değiştirme",
      shortDescription: "Fiziksel DRAM hücrelerine hızlı erişimle komşu hücrelerdeki 0 ve 1'leri değiştirme (Bit Flip).",
      order: 9,
      readTime: "7 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "ROWHAMMER MEKANİZMASI",
          content: "Bir DRAM satırına milyonlarca kez çok hızlı okuma isteği atıldığında, elektriksel yük komşu satırlara sızar ve oradaki bitleri (0->1 veya 1->0) değiştirir!"
        }
      ],
      summary: ["Rowhammer fiziksel DRAM voltaj sızıntısından doğan bir donanım zafiyetidir."]
    },
    {
      id: "top-00-03-10",
      code: "10",
      slug: "module-03-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "memory",
      title: "10. Modül Değerlendirmesi: Memory Özet & Test",
      subtitle: "Modül 03 Bütünsel Sınavı",
      shortDescription: "Sanal bellek, Paging, Stack, Heap, ASLR/DEP ve Rowhammer özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "NE BİLMELİSİN?",
          content: "- Stack'in LIFO yapısında olduğunu ve dönüş adreslerini sakladığını,\n- Sanal belleğin süreç izolasyonu sağladığını bilmelisin."
        }
      ],
      summary: ["Modül 03 başarıyla tamamlandı. Sıradaki hedef: 04 - STORAGE."],
      practice: {
        id: "prac-00-03-10",
        prompt: "Stack bellek taşmalarında dönüş adresinin ezilmesini engellemek için fonksiyon dönüş adresi önüne koyulan kontrol değerine ne ad verilir?",
        options: [
          { id: "a", text: "Stack Canary" },
          { id: "b", text: "Page Fault" },
          { id: "c", text: "Heap Chunk" },
          { id: "d", text: "TLB Hit" }
        ],
        correctAnswer: "a",
        explanation: "Stack Canary (Kanarya), fonksiyondan çıkılmadan hemen önce değeri kontrol edilen ve taşma durumunda programı durduran güvenlik değeridir."
      }
    }
  ]
};
