import { ModuleItem } from '../../../../types/lab';

export const mod09Os: ModuleItem = {
  id: "mod-00-09",
  code: "09",
  slug: "operating-system-fundamentals",
  pathSlug: "computer-fundamentals",
  title: "OPERATING SYSTEM FUNDAMENTALS",
  description: "İşletim sistemi mimarisi, Monolithic vs Microkernel, Sistem Çağrıları (Syscalls), Kernel Mode vs User Mode ve Ayrıcalık Yönetimi.",
  order: 9,
  topics: [
    {
      id: "top-00-09-01",
      code: "01",
      slug: "os-role-architecture",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "1. İşletim Sisteminin Rolü ve Kaynak Yönetimi",
      subtitle: "Donanım ile Kullanıcı Arasındaki Soyutlama Katmanı",
      shortDescription: "Kaynak tahsisi, süreç yönetimi, bellek soyutlaması ve I/O yönetimi.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "İŞLETİM SİSTEMİ NEDİR?", content: "İşletim sistemi, donanım kaynaklarını yöneten ve kullanıcı uygulamalarına soyutlanmış standart arayüzler sunan ana sistem yazılımıdır." }
      ],
      summary: ["İşletim sistemi donanım kaynaklarını yöneten soyutlama katmanıdır."]
    },
    {
      id: "top-00-09-02",
      code: "02",
      slug: "kernel-architecture-monolithic-microkernel",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "2. Çekirdek (Kernel) Mimarileri: Monolithic vs Microkernel",
      subtitle: "Linux/Windows Monolithic Mimarisi vs Minix/QNX Microkernel",
      shortDescription: "Modüler monolitik çekirdek, sürücü izolasyonu ve performans kıyaslaması.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KERNEL MİMARİLERİ", content: "Monolithic Kernel (Linux/Windows) tüm sürücüleri ve dosya sistemini tek bir büyük kernel alanında çalıştırır (Hızlı fakat bir sürücü çökse sistem çöker). Microkernel sadece temel IPC ve bellek yönetimini tutar." }
      ],
      summary: ["Linux Monolithic mimaridedir; sürücüler kernel modunda çalışır."]
    },
    {
      id: "top-00-09-03",
      code: "03",
      slug: "user-mode-vs-kernel-mode",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "3. User Mode vs Kernel Mode ve Ring İzolasyonu",
      subtitle: "İşlemci Seviyesinde Güvenlik Sınırı",
      shortDescription: "Ring 0 (Kernel Mode) vs Ring 3 (User Mode) erişim yetkileri ve donanım koruması.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "USER VS KERNEL MODE", content: "User Mode (Ring 3) doğrudan donanıma erişemez. Kernel Mode (Ring 0) işlemcinin tüm komutlarına ve belleğine sınırsız erişir." }
      ],
      summary: ["Ring 0 Kernel mode, Ring 3 User mode yetkisindedir."]
    },
    {
      id: "top-00-09-04",
      code: "04",
      slug: "system-calls-syscall-int",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "4. Sistem Çağrıları (System Calls) ve Syscall Handler",
      subtitle: "Kullanıcı Alanından Çekirdek Alanına Geçiş Köprüsü",
      shortDescription: "sysenter/syscall komutu, POSIX API (open, read, write) ve kernel geçişleri.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SYSTEM CALLS", content: "Bir program dosya açmak (open) veya ağa yazmak (write) istediğinde `SYSCALL` komutu atarak Kernel Mode'a geçiş rica eder." }
      ],
      summary: ["Sistem çağrıları User Mode'un Kernel hizmeti talep etme yoludur."]
    },
    {
      id: "top-00-09-05",
      code: "05",
      slug: "system-call-hooking-rootkits",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "5. System Call Hooking ve Rootkit Zafiyetleri",
      subtitle: "Çekirdek Seviyesinde Çağrı Dinleme ve Gizlenme",
      shortDescription: "Syscall tablosu ezme, Kernel Rootkits ve PatchGuard (KPP) koruması.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SYSCALL HOOKING", content: "Saldırganlar Kernel Rootkit'leri ile Syscall tablosunu değiştirerek zararlı dosyaları ve prosesleri gizler." }
      ],
      summary: ["Kernel Rootkit'leri sistem çağrılarını ezip kendilerini gizler."]
    },
    {
      id: "top-00-09-06",
      code: "06",
      slug: "interrupt-handling-device-drivers",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "6. Donanım Sürücüleri (Device Drivers) ve Kesme Yönetimi",
      subtitle: "İşletim Sisteminin Donanım Dili",
      shortDescription: "Kernel modunda çalışan sürücüler, KMDF/UMDF ve sürücü imzalama zorunluluğu.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DEVICE DRIVERS", content: "Donanım sürücüleri Kernel Mode'da çalıştığı için buradaki bir açık tüm sistemi sömürülebilir kılar." }
      ],
      summary: ["Donanım sürücüleri Kernel yetkisindedir, dijital imza zorunludur."]
    },
    {
      id: "top-00-09-07",
      code: "07",
      slug: "virtualization-hypervisors",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "7. Sanallaştırma Mimarisi ve Hypervisor'lar",
      subtitle: "Type-1 Bare-Metal vs Type-2 Hosted Hypervisor",
      shortDescription: "ESXi/KVM (Type-1), VirtualBox/VMware (Type-2), VT-x/AMD-V hardware virtualization.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HYPERVISOR TYPES", content: "Type-1 donanım üstüne doğrudan kurulur (KVM/ESXi). Type-2 ise işletim sistemi üstünde çalışır (VirtualBox)." }
      ],
      summary: ["Type-1 bare-metal sanallaştırmadır, kurumsal standarttır."]
    },
    {
      id: "top-00-09-08",
      code: "08",
      slug: "containerization-namespaces-cgroups",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "8. Konteynerleştirme Mimarisi: Namespaces ve cgroups",
      subtitle: "Docker ve LXC Nasıl İzole Çalışır?",
      shortDescription: "Linux Namespaces (PID, Net, Mount) ve cgroups (CPU, RAM sınırları).",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DOCKER VE NAMESPACES", content: "Docker ayrı bir işletim sistemi çalıştırmaz; Linux Kernel'ın Namespaces (İzolasyon) ve cgroups (Kaynak sınırı) özelliklerini kullanır." }
      ],
      summary: ["Konteynerler aynı kernel'ı paylaşır, Namespaces ve cgroups ile izole edilir."]
    },
    {
      id: "top-00-09-09",
      code: "09",
      slug: "os-security-hardening",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "9. İşletim Sistemi Sertleştirme (OS Hardening)",
      subtitle: "Gereksiz Servislerin Kapatılması ve Sıkılaştırma",
      shortDescription: "CIS Benchmarks, gereksiz port/servis kapatma, Least Privilege prensibi.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "OS HARDENING", content: "Varsayılan işletim sistemi kurumsal risk taşır; CIS benchmark standartlarına göre sıkılaştırılmalıdır." }
      ],
      summary: ["Hardening işletim sistemindeki saldırı yüzeyini küçültme işlemidir."]
    },
    {
      id: "top-00-09-10",
      code: "10",
      slug: "module-09-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "operating-system-fundamentals",
      title: "10. Modül Değerlendirmesi: OS Fundamentals Özet & Test",
      subtitle: "Modül 09 Bütünsel Sınavı",
      shortDescription: "Kernel modes, Syscalls, Microkernel, Hypervisor, Docker ve Hardening özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "Sistem çağrılarının User mode ile Kernel mode arasındaki köprü olduğunu bilmelisin." }
      ],
      summary: ["Modül 09 başarıyla tamamlandı. Sıradaki hedef: 10 - PROCESSES & THREADS."],
      practice: {
        id: "prac-00-09-10",
        prompt: "Linux üzerinde Docker ve konteyner teknolojilerinin süreçleri ve ağları izole etmesini sağlayan temel çekirdek özelliği nedir?",
        options: [
          { id: "a", text: "Linux Namespaces & cgroups" },
          { id: "b", text: "Direct Memory Access (DMA)" },
          { id: "c", text: "BIOS Boot sector" },
          { id: "d", text: "HTTP Pipelining" }
        ],
        correctAnswer: "a",
        explanation: "Docker ve konteynerler Linux Kernel'ın Namespaces (İzolasyon) ve cgroups (Kaynak sınırlama) mekanizmalarını kullanarak hafif izolasyon sağlar."
      }
    }
  ]
};
