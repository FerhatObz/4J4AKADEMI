import { PathItem } from '../../../types/lab';

export const operatingSystemsPath: PathItem = {
  id: "path-18",
  code: "18",
  slug: "operating-systems",
  title: "İŞLETİM SİSTEMLERİ GÜVENLİĞİ",
  shortTitle: "OS GÜVENLİK",
  tagline: "Kernel, bellek yönetimi, süreç izolasyonu ve Windows/Linux güvenlik modeli.",
  description: "Syscall'lar, ring seviyeler, sandbox mekanizmaları, SELinux, AppArmor ve Windows ACL.",
  accentColor: "#F59E0B",
  level: "CORE",
  order: 18,
  modules: [
    {
      id: "mod-18-01",
      code: "01",
      slug: "kernel-syscalls",
      pathSlug: "operating-systems",
      title: "KERNEL VE SİSTEM ÇAĞRILARI",
      description: "Çekirdek mimarisi ve kullanıcı alanı etkileşimi.",
      order: 1,
      topics: [
        {
          id: "top-18-01-01",
          code: "01",
          slug: "privilege-rings",
          pathSlug: "operating-systems",
          moduleSlug: "kernel-syscalls",
          title: "Ring 0-3 Ayrıcalık Seviyeleri ve İzolasyon",
          subtitle: "Donanım Seviyesinde Güvenlik İzolasyonu",
          shortDescription: "x86/x64 mimarisinde Ring 0 (Kernel) ve Ring 3 (User) seviyeleri.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. RING MİMARİSİ TANIMI", content: "x86 işlemciler 4 ayrıcalık seviyesi sunar (Ring 0-3). Modern işletim sistemleri güvenlik ve performans için sadece Ring 0 (Kernel) ve Ring 3 (User Space) modlarını kullanır." },
            { id: "sec-02", code: "02", title: "2. RING 0 (KERNEL SPACE)", content: "İşlemcinin tüm komut setine, doğrudan belleğe ve donanım aygıtlarına tam erişimi vardır. Buradaki bir hata tüm sistemi çökertebilir (BSOD/Kernel Panic)." },
            { id: "sec-03", code: "03", title: "3. RING 3 (USER SPACE)", content: "Kullanıcı uygulamalarının çalıştığı kısıtlı alandır. Doğrudan belleğe erişemez, sadece kendi adres alanında işlem yapar." },
            { id: "sec-04", code: "04", title: "4. SYSTEM CALL (SYSCALL) KÖPRÜSÜ", content: "User Space uygulamasının dosya okuması veya ağ isteği atması için `SYSCALL` veya `INT 0x80` ile Ring 0'a geçiş talep etmesi gerekir." },
            { id: "sec-05", code: "05", title: "5. CONTEXT SWITCHİNG (BAĞLAM DEĞİŞİMİ)", content: "Ring 3'ten Ring 0'a geçiş esnasında registerlar saklanır, ayrıcalık seviyesi yükseltilir ve syscall handler çalıştırılır." },
            { id: "sec-06", code: "06", title: "6. DONANIM DESTEKLİ SANALLAŞTIRMA (RING -1)", content: "Intel VT-x / AMD-V ile ortaya çıkan Hypervisor modu, Ring 0'ın üstünde Ring -1 seviyesi oluşturarak sanal makineleri izole eder." },
            { id: "sec-07", code: "07", title: "7. KERNEL EXPLOITATION VE ESCALATION", content: "Ring 3'teki bir saldırgan, Ring 0'da çalışan bir sürücüde (driver) zafiyet bularak sistemde ROOT / SYSTEM yetkisi elde eder." },
            { id: "sec-08", code: "08", title: "8. SPECTRE VE MELTDOWN SALDIRILARI", content: "Spekülatif yürütmeyi (speculative execution) istismar ederek Ring 3'ten Ring 0 belleğini sızdıran donanım zafiyetleridir." },
            { id: "sec-09", code: "09", title: "9. KPTI (KERNEL PAGE TABLE ISOLATION)", content: "Meltdown açığını kapatmak için kullanıcı seviyesinde kernel bellek haritası gizlenmiştir." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Ring izolasyonu donanımsal güvenlik sınırıdır. İzolasyonu ihlal eden zafiyetler en yüksek kritiklik seviyesindedir." }
          ],
          summary: ["Ring 0 tam yetkilidir, Ring 3 kısıtlıdır.", "Syscall geçiş kanalıdır."],
          practice: {
            id: "prac-18-01-01",
            prompt: "Kullanıcı uygulamaları (Chrome, Word vb.) hangi Ring seviyesinde çalışır?",
            options: [
              { id: "a", text: "Ring 0" },
              { id: "b", text: "Ring 1" },
              { id: "c", text: "Ring 2" },
              { id: "d", text: "Ring 3" }
            ],
            correctAnswer: "d",
            explanation: "Kullanıcı yazılımları en kısıtlı mod olan Ring 3 seviyesinde icra edilir."
          }
        }
      ]
    }
  ]
};
