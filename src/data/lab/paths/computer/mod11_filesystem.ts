import { ModuleItem } from '../../../../types/lab';

export const mod11Filesystem: ModuleItem = {
  id: "mod-00-11",
  code: "11",
  slug: "filesystem-permissions",
  pathSlug: "computer-fundamentals",
  title: "FILESYSTEM & PERMISSIONS",
  description: "Dosya sistemleri (EXT4, NTFS, FAT32), Inode yapısı, Linux rwx izinleri, Windows ACL/DACL, Symbolic/Hard Links ve İzin Yetki Yükseltme.",
  order: 11,
  topics: [
    {
      id: "top-00-11-01",
      code: "01",
      slug: "filesystem-types-ext4-ntfs",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "1. Dosya Sistemleri Mimarisi: EXT4, NTFS ve FAT32",
      subtitle: "Verilerin Diskte Organizasyonu ve Metadata Yapıları",
      shortDescription: "Sektörler, bloklar, Master File Table (MFT), Journaling ve karşılaştırma.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DOSYA SİSTEMİ NEDİR?", content: "Dosya sistemi, verilerin depolama aygıtında nasıl saklanacağını, isimlendirileceğini ve erişileceğini belirleyen veri yapısı standardıdır." }
      ],
      summary: ["Dosya sistemleri verileri bloklar ve indeks tabloları ile düzenler."]
    },
    {
      id: "top-00-11-02",
      code: "02",
      slug: "linux-inodes-directory-structure",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "2. Linux Inode Yapısı ve Dizin Mimarisi",
      subtitle: "İsmi Olmayan Dosya Kimlik Numaraları",
      shortDescription: "Inode numarası, dosya boyutu, sahiplik, zaman damgaları (atime, mtime, ctime) ve veri blok işaretçileri.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "INODE YAPISI", content: "Linux'ta dosya adı Inode tablosunda tutulmaz. Inode dosyanın sahibini, boyutunu, izinlerini ve disktedir blok adreslerini saklar." }
      ],
      summary: ["Inode dosya metadatalarını saklayan veri yapısıdır."]
    },
    {
      id: "top-00-11-03",
      code: "03",
      slug: "symbolic-vs-hard-links",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "3. Sembolik Linkler (Symlink) vs Hard Linkler",
      subtitle: "Dosya Kısayolları ve Inode Eşleşmesi",
      shortDescription: "ln -s vs ln, Inode sayacı, Symlink zafiyetleri ve Symlink Race Conditions.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HARD VS SOFT LINK", content: "Hard Link doğrudan aynı Inode numarasını işaret eder. Symlink (Soft Link) ise hedef dosyanın yolunu saklayan özel bir dosyadır." }
      ],
      summary: ["Hard link aynı inode'u paylaşır, symlink yol işaret eder."]
    },
    {
      id: "top-00-11-04",
      code: "04",
      slug: "linux-file-permissions-chmod-umask",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "4. Linux Dosya İzinleri: rwx, Octal Notation ve umask",
      subtitle: "Okuma, Yazma ve Çalıştırma İzin Matrisi",
      shortDescription: "Owner, Group, Others izinleri, 755/644 sayısal kodları ve umask varsayılan izinleri.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RWX İZİNLERİ", content: "r=4 (Read), w=2 (Write), x=1 (Execute). `chmod 755` sahibi full, grup ve diğerlerine okuma/çalıştırma verir." }
      ],
      summary: ["Chmod rwx izinlerini 8'lik (octal) sistemde ayarlar."]
    },
    {
      id: "top-00-11-05",
      code: "05",
      slug: "windows-access-control-lists-acl",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "5. Windows Erişim Kontrol Listeleri (ACL ve DACL)",
      subtitle: "Windows Güvenlik Tanımlayıcıları",
      shortDescription: "Security Identifiers (SID), Access Control Entries (ACE), DACL ve SACL yapıları.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WINDOWS ACL", content: "Windows her nesne için DACL (Discretionary Access Control List) saklar. İçindeki ACE kayıtları kullanıcı SID'lerine izin veya ret verir." }
      ],
      summary: ["Windows DACL nesnelere kimlerin erişebileceğini SID bazlı kontrol eder."]
    },
    {
      id: "top-00-11-06",
      code: "06",
      slug: "special-permissions-suid-sgid-sticky",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "6. Özel İzinler: SUID, SGID ve Sticky Bit",
      subtitle: "Geçici Ayrıcalık Yükseltme Bitleri",
      shortDescription: "chmod u+s, SUID biti ile root yetkisinde çalışma, Sticky Bit (/tmp dizini).",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SUID BİTİ", content: "SUID biti atanmış ikili dosya, çalıştıranın değil dosya sahibinin (örneğin root) yetkileriyle çalıştırılır (`passwd` komutu gibi)." }
      ],
      summary: ["SUID biti dosya sahibinin yetkisiyle yürütmeyi sağlar."]
    },
    {
      id: "top-00-11-07",
      code: "07",
      slug: "suid-privilege-escalation-gtfobins",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "7. SUID İzin Hataları ve Yerel Yetki Yükseltme",
      subtitle: "Yanlış Yapılandırılmış SUID Binarylerini İstismar Etme",
      shortDescription: "GTFOBins arama teknikleri, SUID arama (`find / -perm -4000`) ve root olma.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SUID EXPLOITATION", content: "Eğer `find` veya `bash` üzerinde SUID biti açıksa, sıradan bir kullanıcı `find . -exec /bin/sh \\;` çalıştırıp anında ROOT yetkisi alabilir!" }
      ],
      summary: ["Yanlış yapılandırılmış SUID bitleri yerel yetki yükseltmenin bir numaralı nedenidir."]
    },
    {
      id: "top-00-11-08",
      code: "08",
      slug: "alternate-data-streams-ads",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "8. NTFS Alternate Data Streams (ADS) ve Gizli Veriler",
      subtitle: "Windows Diskte Gizli Veri Saklama Teknikleri",
      shortDescription: "NTFS dosya biçiminde `filename:streamname` yapısı ile tespit edilmeden zararlı saklama.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NTFS ADS", content: "NTFS ana dosyanın arkasına gizli akışlar (streams) bağlamaya izin verir (`file.txt:hidden.exe`). Normal Windows Gezgini dosya boyutunu 0 bayt gösterir!" }
      ],
      summary: ["NTFS ADS dosyaların arkasına gizli veri akışları saklama özelliğidir."]
    },
    {
      id: "top-00-11-09",
      code: "09",
      slug: "filesystem-auditing-logging",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "9. Dosya Sistemi Denetimi (Auditing) ve File Integrity Monitoring (FIM)",
      subtitle: "Dosya Değişikliklerini Anlık İzleme",
      shortDescription: "Linux auditd, Windows SACL ve File Integrity Monitoring (FIM - Wazuh/Tripwire).",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FIM İZLEME", content: "Kritik sistem dosyalarının (örneğin `/etc/passwd`) hash değerleri FIM aracı tarafından sürekli taranarak izinsiz değişiklikler anında bildirilir." }
      ],
      summary: ["FIM kritik dosyaların bütünlüğünü hash değişiklikleriyle izler."]
    },
    {
      id: "top-00-11-10",
      code: "10",
      slug: "module-11-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "filesystem-permissions",
      title: "10. Modül Değerlendirmesi: Filesystem & Perms Özet & Test",
      subtitle: "Modül 11 Bütünsel Sınavı",
      shortDescription: "EXT4/NTFS, Inodes, rwx, SUID, DACL, ADS ve FIM özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "Linux'ta SUID bitinin yetki yükseltmedeki kritik önemini ve NTFS ADS ile gizli veri saklanabildiğini bilmelisin." }
      ],
      summary: ["Modül 11 başarıyla tamamlandı. Sıradaki hedef: 12 - COMPUTER SECURITY FUNDAMENTALS."],
      practice: {
        id: "prac-00-11-10",
        prompt: "Linux sistemlerde bir dosyanın çalıştırıldığında çalıştıran kullanıcının değil dosya sahibinin (örneğin root) yetkileriyle çalışmasını sağlayan özel izin biti hangisidir?",
        options: [
          { id: "a", text: "Sticky Bit" },
          { id: "b", text: "SUID Biti" },
          { id: "c", text: "SGID Biti" },
          { id: "d", text: "Read-Only Biti" }
        ],
        correctAnswer: "b",
        explanation: "SUID (Set User ID) biti atanmış bir çalıştırılabilir dosya icra edildiğinde, dosyayı başlatanın değil dosya sahibinin yetkileriyle çalışır."
      }
    }
  ]
};
