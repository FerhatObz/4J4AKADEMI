import { ModuleItem } from '../../../../types/lab';

export const mod02EdrC2: ModuleItem = {
  id: "mod-10-02",
  code: "02",
  slug: "edr-c2-operations",
  pathSlug: "red-team",
  title: "EDR BYPASS VE C2 OPERASYONLARI",
  description: "Command & Control (C2) Altyapısı (Cobalt Strike, Havoc, Mythic), Direct System Calls (Syscalls), AMSI Bypass ve Memory Unhooking.",
  order: 2,
  topics: [
    {
      id: "top-10-02-01",
      code: "01",
      slug: "c2-frameworks-architecture",
      pathSlug: "red-team",
      moduleSlug: "edr-c2-operations",
      title: "1. C2 Altyapısı ve Mimarisi: Teamserver, Beacon ve Malleable C2",
      subtitle: "Gizli Komut Kontrol Altyapısı Kurma ve HTTPS Malleable Profile",
      shortDescription: "C2 Mimarisi, Cobalt Strike / Havoc, Beacon istemcileri, Malleable C2 profilleri ve domain fronting.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "C2 (COMMAND & CONTROL) NEDİR?",
          content: "C2 altyapısı, bir hedef sisteme sızıldıktan sonra o sistemdeki zararlı yazılımla (Beacon / Agent) güvenli ve gizli iletişim kurmayı sağlayan yönetim sunucusudur. Malleable C2 profilleri sayesinde C2 trafiği Amazon, Google veya Microsoft trafiği gibi gösterilerek SOC ve IDS/IPS tespiti atlatılır."
        }
      ],
      summary: ["C2 altyapısı zararlı ajanları yönetir; Malleable profiller tespit edilmeyi zorlaştırır."]
    },
    {
      id: "top-10-02-02",
      code: "02",
      slug: "edr-bypass-direct-syscalls-unhooking",
      pathSlug: "red-team",
      moduleSlug: "edr-c2-operations",
      title: "2. EDR Bypass Teknikleri: Direct Syscalls ve API Unhooking",
      subtitle: "User-land EDR Hook'larını Atlatma Yöntemleri",
      shortDescription: "EDR DLL injection (user-land hooking), Syswhispers, Direct Syscalls ve NTDLL unhooking.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "EDR USER-LAND HOOKING VE DIRECT SYSCALLS",
          content: "Modern EDR'lar (CrowdStrike, Defender for Endpoint) `ntdll.dll` içindeki Windows API fonksiyonlarını (NtMapViewOfSection vb.) kendi DLL'lerini inject ederek izler (User-land Hooking).\n\nSaldırganlar `ntdll.dll` üzerindeki hook'ları atlatmak için doğrudan kernel assembly sistem çağrı numaralarını (Direct Syscalls - Syswhispers) kullanarak EDR sürücüsüne takılmadan çekirdeğe ulaşırlar."
        }
      ],
      summary: ["Direct Syscalls EDR'ların user-land DLL hook'larını tamamen atlatır."]
    },
    {
      id: "top-10-02-03",
      code: "03",
      slug: "module-02-summary-review",
      pathSlug: "red-team",
      moduleSlug: "edr-c2-operations",
      title: "3. Modül Değerlendirmesi: EDR & C2 Operations Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "C2 altyapısı, Malleable C2 ve Direct Syscalls özeti.",
      order: 3,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "C2 mimarisini, Malleable C2 profillerini ve Direct Syscalls ile EDR bypass tekniklerini öğrendin." }
      ],
      summary: ["Modül 02 tamamlandı. Red Team Patikası Başarıyla Tamamlandı!"],
      practice: {
        id: "prac-10-02-03",
        prompt: "EDR yazılımlarının `ntdll.dll` üzerindeki user-land hook'larını atlayarak doğrudan Windows çekirdeği ile haberleşmeyi sağlayan teknik hangisidir?",
        options: [
          { id: "a", text: "Direct Syscalls (Doğrudan Sistem Çağrıları)" },
          { id: "b", text: "DNS Poisoning" },
          { id: "c", text: "ARP Spoofing" },
          { id: "d", text: "Port Scanning" }
        ],
        correctAnswer: "a",
        explanation: "Direct Syscalls tekniği EDR'ın izlediği `ntdll.dll` fonksiyonlarını atlayıp assembly `syscall` talimatı ile doğrudan Kernel'e geçer."
      }
    }
  ]
};
