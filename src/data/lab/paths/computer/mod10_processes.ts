import { ModuleItem } from '../../../../types/lab';

export const mod10Processes: ModuleItem = {
  id: "mod-00-10",
  code: "10",
  slug: "processes-threads",
  pathSlug: "computer-fundamentals",
  title: "PROCESSES & THREADS",
  description: "Süreç (Process) anatomisi, PID, PCB, Thread mantığı, Eşzamanlılık (Concurrency), Mutex/Semaphore kilitleri ve Süreç İstismarları (Injection).",
  order: 10,
  topics: [
    {
      id: "top-00-10-01",
      code: "01",
      slug: "process-concept-pcb",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "1. Süreç (Process) Nedir ve Anatomi Yapısı",
      subtitle: "Çalışan Programın Bellek ve Kaynak Durumu",
      shortDescription: "PID, Process Control Block (PCB), Text, Data, BSS, Stack ve Heap alanları.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PROSES NEDİR?", content: "Proses, yürütülmekte olan aktif bir program örneğidir. Kendi izole sanal bellek alanına, dosya tanımlayıcılarına ve PID numarasına sahiptir." }
      ],
      summary: ["Proses çalışan aktif programın bellek ve kaynak durumudur."]
    },
    {
      id: "top-00-10-02",
      code: "02",
      slug: "process-lifecycle-states",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "2. Süreç Yaşam Döngüsü ve Durumları (Process States)",
      subtitle: "New, Ready, Running, Waiting ve Terminated",
      shortDescription: "Süreç durum geçişleri, CPU scheduler ve Zombie/Orphan süreçler.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PROSES DURUMLARI", content: "Süreçler Ready (Hazır), Running (Çalışıyor), Waiting (Beklemede) ve Terminated (Bitti) durumları arasında CPU scheduler tarafından geçirilir." }
      ],
      summary: ["Süreçler durumlar arasında CPU zamanlayıcısı ile geçiş yapar."]
    },
    {
      id: "top-00-10-03",
      code: "03",
      slug: "threads-vs-processes",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "3. Thread (İplik) Mantığı ve Süreç İle Farkları",
      subtitle: "Hafif Süreçler (Lightweight Processes)",
      shortDescription: "Thread yapısı, ortak bellek paylaşımı, kendi Stack'ine sahip olma ve avantajları.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "THREAD NEDİR?", content: "Thread aynı süreç içindeki hafif yürütme birimidir. Sürecin Heap ve kod alanını paylaşır ancak kendi ayrı Stack'ine sahiptir." }
      ],
      summary: ["Thread'ler aynı sürecin Heap bellek alanını ortak kullanır."]
    },
    {
      id: "top-00-10-04",
      code: "04",
      slug: "concurrency-race-conditions-mutex",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "4. Eşzamanlılık (Concurrency), Race Condition ve Mutex",
      subtitle: "Aynı Belleğe Eşzamanlı Erişim Tehlikesi",
      shortDescription: "Race Condition zafiyeti, Mutex (Mutual Exclusion) kilitleri, Semaphores ve Deadlock.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RACE CONDITION ZAFİYETİ", content: "İki thread aynı değişkene aynı anda yazmaya çalıştığında beklenmeyen durumlar oluşur (Race condition). Mutex kilitleri ile kritik bölgeye (Critical Section) erişim teke indirilir." }
      ],
      summary: ["Race condition eşzamanlı veri yazma hatasıdır; Mutex kilitleri ile çözülür."]
    },
    {
      id: "top-00-10-05",
      code: "05",
      slug: "ipc-inter-process-communication",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "5. Süreçler Arası İletişim (IPC - Inter-Process Communication)",
      subtitle: "Farklı Süreçlerin Konuşma Yolları",
      shortDescription: "Pipes, Shared Memory, Message Queues, Sockets ve Signals (SIGKILL, SIGTERM).",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IPC METODLARI", content: "İzole süreçler birbiriyle Borular (Pipes), Paylaşımlı Bellek (Shared Memory) veya Sinyaller (SIGKILL, SIGSEGV) üzerinden haberleşir." }
      ],
      summary: ["IPC izole süreçlerin birbiriyle veri alışverişi yapmasını sağlar."]
    },
    {
      id: "top-00-10-06",
      code: "06",
      slug: "dll-process-injection",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "6. Süreç Enjeksiyonu (Process Injection) ve DLL Hijacking",
      subtitle: "Meşru Süreçlerin İçine Kendi Kodunu Sokma",
      shortDescription: "DLL Injection, Process Hollowing, CreateRemoteThread ve reflective DLL loading.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PROCESS INJECTION", content: "Saldırgan zararlı kodunu meşru bir sürecin (örneğin `explorer.exe`) belleğine enjekte ederek antivirüsleri atlatır (CreateRemoteThread / VirtualAllocEx)." }
      ],
      summary: ["Process injection zararlı kodu meşru bir sürecin RAM'ine enjekte etme tekniğidir."]
    },
    {
      id: "top-00-10-07",
      code: "07",
      slug: "process-hollowing-technique",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "7. Process Hollowing Saldırı Tekniği",
      subtitle: "Sürecin İçini Boşaltıp Zararlı Yerleştirme",
      shortDescription: "Meşru süreci suspended başlatma, belleğini unmap etme ve zararlı EXE yazma.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PROCESS HOLLOWING", content: "Saldırgan meşru bir süreci askıda (suspended) başlatır, içindeki orijinal kodu boşaltır ve kendi zararlı kodunu yerleştirip devam ettirir." }
      ],
      summary: ["Process hollowing meşru sürecin içini boşaltıp zararlı kod koyma yöntemidir."]
    },
    {
      id: "top-00-10-08",
      code: "08",
      slug: "parent-pid-spoofing",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "8. Parent PID Spoofing (Ebeveyn Süreç Sahteciliği)",
      subtitle: "Süreç Ağacını ve EDR İzlemesini Şaşırtma",
      shortDescription: "CreateProcess PROC_THREAD_ATTRIBUTE_PARENT_PROCESS ve EDR tespiti atlatma.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PPID SPOOFING", content: "Zararlı bir cmd.exe açıldığında ebeveyni olarak Word yerine `lsass.exe` gösterilerek EDR kuralları atlatılmaya çalışılır." }
      ],
      summary: ["PPID spoofing süreç ağacındaki ebeveyn bilgisi sahteciliğidir."]
    },
    {
      id: "top-00-10-09",
      code: "09",
      slug: "task-scheduler-cron-persistence",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "9. Zamanlanmış Görevler ve Kalıcılık (Persistence)",
      subtitle: "Sistemde Kalıcı Olma Yolları",
      shortDescription: "Windows Task Scheduler, Linux Cron Jobs ve startup kayıt defteri anahtarları.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PERSISTENCE", content: "Zararlı yazılımlar sistem yeniden başlatılsa da çalışmak için kendilerini Cron Job veya Windows Task Scheduler'a ekler." }
      ],
      summary: ["Kalıcılık (Persistence) sistem açılışında zararlının tekrar başlamasını sağlar."]
    },
    {
      id: "top-00-10-10",
      code: "10",
      slug: "module-10-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "processes-threads",
      title: "10. Modül Değerlendirmesi: Processes & Threads Özet & Test",
      subtitle: "Modül 10 Bütünsel Sınavı",
      shortDescription: "Processes, Threads, Race Conditions, Process Injection ve PPID Spoofing özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "Süreçlerin izole sanal bellek alanlarına sahip olduğunu, Thread'lerin Heap'i ortak kullandığını bilmelisin." }
      ],
      summary: ["Modül 10 başarıyla tamamlandı. Sıradaki hedef: 11 - FILESYSTEM & PERMISSIONS."],
      practice: {
        id: "prac-00-10-10",
        prompt: "Aynı süreç (process) altında çalışan birden fazla Thread (iplik) bellek alanında aşağıdakilerden hangisini ortaklaşa kullanabilir?",
        options: [
          { id: "a", text: "Heap Bellek Alanı" },
          { id: "b", text: "Kendi Özel Stack Alanı" },
          { id: "c", text: "Farklı İşlemci Mimarisi" },
          { id: "d", text: "Tamamen Farklı Sanal Adres Uzayı" }
        ],
        correctAnswer: "a",
        explanation: "Aynı süreç altındaki thread'ler sürecin Heap bellek alanını ve küresel değişkenlerini ortak kullanırken, her thread kendi özel Stack alanına sahiptir."
      }
    }
  ]
};
