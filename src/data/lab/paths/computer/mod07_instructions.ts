import { ModuleItem } from '../../../../types/lab';

export const mod07Instructions: ModuleItem = {
  id: "mod-00-07",
  code: "07",
  slug: "instructions-machine-code",
  pathSlug: "computer-fundamentals",
  title: "INSTRUCTIONS & MACHINE CODE",
  description: "Opcode, Assembly dili (x86/x64), derleme adımları (Source -> Assembly -> Object -> Executable), Disassembly ve Reverse Engineering temelleri.",
  order: 7,
  topics: [
    {
      id: "top-00-07-01",
      code: "01",
      slug: "machine-code-vs-assembly",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "1. Makine Kodu (Machine Code) vs Assembly Dili",
      subtitle: "0 ve 1 Hex Baytlarından İnsan Tarafından Okunabilir Sembollere",
      shortDescription: "Opcode, Operand, Mnemonics (MOV, PUSH, CALL, JMP) ve Hex komutlar.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MAKİNE KODU VE ASSEMBLY", content: "Makine kodu CPU'nun doğrudan çalıştırdığı hex baytlardır (Örn: 90 = NOP). Assembly ise bu baytların insanca mnemonik (MOV, ADD) karşılığıdır." }
      ],
      summary: ["Makine kodu hex baytlardır, Assembly bunun sembolik temsilidir."]
    },
    {
      id: "top-00-07-02",
      code: "02",
      slug: "compilation-pipeline-steps",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "2. Derleme Süreci (Compilation Pipeline)",
      subtitle: "Kaynak Koddan Çalıştırılabilir İkiliye Yolculuk",
      shortDescription: "Preprocessing, Compilation, Assembly, Linking ve Executable (ELF/PE) oluşumu.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DERLEME AŞAMALARI", content: "1. Preprocessor (Makrolar genişletilir)\n2. Compiler (C kodu Assembly'e çevrilir)\n3. Assembler (Assembly makine koduna çevrilir -> `.o`)\n4. Linker (Kütüphaneler bağlanır -> `.exe` / ELF)" }
      ],
      summary: ["Derleme: Preprocessing -> Compiling -> Assembling -> Linking."]
    },
    {
      id: "top-00-07-03",
      code: "03",
      slug: "x86-64-assembly-basics",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "3. x86_64 Assembly Temel Komutları",
      subtitle: "MOV, ADD, SUB, XOR, CMP, JMP, CALL ve RET",
      shortDescription: "Veri taşıma, aritmetik operasyonlar, dallanma ve fonksiyon çağrı komutları.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL ASSEMBLY KOMUTLARI", content: "`MOV RAX, 5` (RAX'e 5 at), `ADD RAX, RBX` (Topla), `CMP RAX, 0` (Karşılaştır), `JE label` (Eşitse atla), `CALL func` (Fonksiyon çağır)." }
      ],
      summary: ["Assembly komutları veri transferi, matematik ve mantıksal sıçramaları yönetir."]
    },
    {
      id: "top-00-07-04",
      code: "04",
      slug: "disassembly-reverse-engineering-intro",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "4. Disassembly ve Tersine Mühendisliğe Giriş",
      subtitle: "Çalıştırılabilir Dosyayı Assembly'e Geri Çevirme",
      shortDescription: "Ghidra, IDA Pro, objdump ve Binary disassembly mantığı.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DISASSEMBLY NEDİR?", content: "Derlenmiş ikili dosyanın (EXE/ELF) makine baytlarını tekrar Assembly koduna dönüştürme işlemidir." }
      ],
      summary: ["Disassembler ikili dosyaları analiz etmek için Assembly'e çevirir."]
    },
    {
      id: "top-00-07-05",
      code: "05",
      slug: "nop-sled-shellcode",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "5. NOP Sled ve Shellcode Kavramı",
      subtitle: "İstismar Kodunun CPU'ya Yürütülebilmesi",
      shortDescription: "0x90 (NOP) kaydırak mantığı ve zararlı makine kodu (Shellcode) yapısı.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NOP SLED VE SHELLCODE", content: "0x90 NOP (No Operation) komutudur. CPU hiçbir şey yapmadan sonraki komuta kayar (NOP Sled). Sonundaki Shellcode'a güvenle ulaşmayı sağlar." }
      ],
      summary: ["NOP Sled bellek adres sapmalarında shellcode'a kaymayı kolaylaştırır."]
    },
    {
      id: "top-00-07-06",
      code: "06",
      slug: "calling-conventions-cdecl-fastcall",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "6. Calling Conventions: cdecl, stdcall ve System V AMD64 ABI",
      subtitle: "Fonksiyonlara Parametre Geçirme Kuralları",
      shortDescription: "Stack üzerinden vs Registerlar üzerinden (RDI, RSI, RDX, RCX, R8, R9) parametre aktarımı.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CALLING CONVENTION", content: "Linux x64'te ilk 6 parametre RDI, RSI, RDX, RCX, R8, R9 registerlarında iletilir. Fazlası Stack'e itilir." }
      ],
      summary: ["Calling convention parametrelerin fonksiyonlara aktarılma standardıdır."]
    },
    {
      id: "top-00-07-07",
      code: "07",
      slug: "binary-file-formats-elf-pe",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "7. Çalıştırılabilir Dosya Formatları: ELF vs PE",
      subtitle: "Linux ELF ve Windows Portable Executable Mimarisi",
      shortDescription: "Headers, .text (kod), .data (veri), .bss, Import/Export tabloları.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ELF VE PE FORMATLARI", content: "Linux ELF (Executable and Linkable Format) ve Windows PE (Portable Executable) başlıkları işletim sistemine kodun nereden başlayacağını söyler." }
      ],
      summary: ["ELF Linux'un, PE Windows'un çalıştırılabilir ikili dosya standardıdır."]
    },
    {
      id: "top-00-07-08",
      code: "08",
      slug: "static-vs-dynamic-linking",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "8. Statik vs Dinamik Bağlama (Static vs Dynamic Linking)",
      subtitle: ".so ve .dll Paylaşımlı Kütüphaneleri",
      shortDescription: "Static linking (.a/.lib) vs Dynamic linking (.so/.dll), GOT ve PLT tabloları.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DYNAMIC LINKING", content: "Dinamik bağlama kütüphaneyi (.dll/.so) dosyaya gömmek yerine çalışma zamanında yükler. GOT/PLT tabloları adresi çözer." }
      ],
      summary: ["Dinamik bağlama ortak DLL kütüphanelerini çalışma anında yükler."]
    },
    {
      id: "top-00-07-09",
      code: "09",
      slug: "shellcode-injection-execution",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "9. Shellcode Enjeksiyonu ve Süreç Yürütme",
      subtitle: "Kendi Kendini Yürüten Makine Kodları",
      shortDescription: "Position Independent Code (PIC), Null-byte içermeyen shellcode yazımı.",
      order: 9,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SHELLCODE ÖZELLİĞİ", content: "Shellcode sabit adreslere bağımlı olmayan konumdan bağımsız koddur (PIC). İçinde 0x00 (Null Byte) barındırmamalıdır." }
      ],
      summary: ["Shellcode bağımsız çalışan ham makine kodudur."]
    },
    {
      id: "top-00-07-10",
      code: "10",
      slug: "module-07-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "instructions-machine-code",
      title: "10. Modül Değerlendirmesi: Instructions & Machine Code Özet & Test",
      subtitle: "Modül 07 Bütünsel Sınavı",
      shortDescription: "Opcode, Assembly, ELF/PE, Shellcode ve Disassembly özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "Assembly'nin makine kodunun insan okuyabilir hali olduğunu, NOP'un 0x90 olduğunu bilmelisin." }
      ],
      summary: ["Modül 07 başarıyla tamamlandı. Sıradaki hedef: 08 - BOOT PROCESS."],
      practice: {
        id: "prac-00-07-10",
        prompt: "x86/x64 mimarisinde işlemciye 'hiçbir şey yapma, sonraki komuta geç' emri veren NOP komutunun hex karşılığı nedir?",
        options: [
          { id: "a", text: "0x00" },
          { id: "b", text: "0x90" },
          { id: "c", text: "0xFF" },
          { id: "d", text: "0xCC" }
        ],
        correctAnswer: "b",
        explanation: "0x90 hex baytı x86 mimarisinde NOP (No Operation) komutuna karşılık gelir."
      }
    }
  ]
};
