import { ModuleItem } from '../../../../types/lab';

export const mod02FilesystemPermissions: ModuleItem = {
  id: "mod-03-02",
  code: "02",
  slug: "linux-filesystem-permissions",
  pathSlug: "linux-fundamentals",
  title: "DOSYA SİSTEMİ, İZİNLER VE KULLANICILAR",
  description: "FHS (Filesystem Hierarchy Standard), chmod rwx izinleri (sayısal 755/644 ve sembolik), chown, chgrp, umask, /etc/passwd, /etc/shadow ve SUID/SGID/Sticky özel bitler.",
  order: 2,
  topics: [
    {
      id: "top-03-02-01",
      code: "01",
      slug: "linux-fhs-directory-hierarchy",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-filesystem-permissions",
      title: "1. FHS (Filesystem Hierarchy Standard) ve Dizin Mimarisi",
      subtitle: "/, /bin, /etc, /var, /home, /proc, /dev ve /tmp Dizinlerinin Görevleri",
      shortDescription: "Linux kök dizin yapısı, yapılandırma dosyaları (/etc) ve dinamik çekirdek dizini (/proc).",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "FHS DİZİN YAPISI",
          content: "- `/` (Root): Tüm dosya sisteminin başı.\n- `/bin` & `/sbin`: Temel komutlar ve sistem yönetici araçları.\n- `/etc`: Sistem konfigürasyon dosyaları (`/etc/passwd`, `/etc/shadow`, `/etc/ssh/sshd_config`).\n- `/var`: Değişken veriler, web dosyaları (`/var/www/html`) ve sistem logları (`/var/log`).\n- `/proc`: RAM'deki süreç ve çekirdek verilerinin dosya olarak sunulduğu sanal dizin."
        }
      ],
      summary: ["FHS Linux dizinlerinin standart yerleşim yapısıdır; /etc ayarları, /var logları barındırır."]
    },
    {
      id: "top-03-02-02",
      code: "02",
      slug: "chmod-rwx-permissions-numeric-symbolic",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-filesystem-permissions",
      title: "2. Linux Dosya İzinleri: chmod rwx (Read, Write, Execute)",
      subtitle: "Sahip (User), Grup (Group) ve Diğerleri (Others) İzin Matrisi",
      shortDescription: "r=4, w=2, x=1 sayısal hesaplaması, `chmod 755`, `chmod 644` ve `chmod +x`.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "RWX SAYISAL HESAPLAMA",
          content: "- Read (r) = 4\n- Write (w) = 2\n- Execute (x) = 1\n\n`755` = Owner(4+2+1=7), Group(4+0+1=5), Others(4+0+1=5).\n`644` = Owner(4+2+0=6), Group(4+0+0=4), Others(4+0+0=4)."
        }
      ],
      summary: ["r=4, w=2, x=1 toplamları ile chmod 755 ve 644 izinleri hesaplanır."]
    },
    {
      id: "top-03-02-03",
      code: "03",
      slug: "users-groups-shadow-file-security",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-filesystem-permissions",
      title: "3. Kullanıcı Yönetimi: /etc/passwd ve /etc/shadow Güvenliği",
      subtitle: "Parola Hash'leri Nerede Saklanır?",
      shortDescription: "`/etc/passwd` (herkese açık kullanıcı listesi) vs `/etc/shadow` (sadece root'a açık SHA512 hashler).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "/ETC/SHADOW DOSYA GÜVENLİĞİ",
          content: "Eski sistemlerde şifreler `/etc/passwd` içindeydi ve herkes okuyabiliyordu. Güvenlik için parolalar `/etc/shadow` dosyasına aktarıldı. Bu dosya sadece `root` yetkisiyle okunabilir ve şifreler salted SHA-512 hash olarak tutulur."
        }
      ],
      summary: ["/etc/passwd herkesçe okunabilir, /etc/shadow şifreli hashleri saklar ve sadece root okuyabilir."]
    },
    {
      id: "top-03-02-04",
      code: "04",
      slug: "special-bits-suid-sgid-sticky-bit",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-filesystem-permissions",
      title: "4. Özel İzin Bitleri: SUID (4000), SGID (2000) ve Sticky Bit (1000)",
      subtitle: "Yetki Yükseltme Yolları ve /tmp Güvenliği",
      shortDescription: "SUID (Set-User-ID), SGID (Set-Group-ID) ve `/tmp` dizinindeki Sticky Bit (`chmod +t`).",
      order: 4,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SUID VE STICKY BIT MANTIK",
          content: "- SUID (`chmod u+s` / `4755`): Çalıştıran kişi dosyayı sahibinin (örn root) yetkileriyle çalıştırır.\n- Sticky Bit (`chmod +t` / `1777`): `/tmp` dizininde herkes dosya yazabilir ama kimse başkasının dosyasını silemez!"
        }
      ],
      summary: ["SUID biti çalıştırıcının dosya sahibi yetkisiyle çalışmasını sağlar; Sticky Bit silme koruması getirir."]
    },
    {
      id: "top-03-02-05",
      code: "05",
      slug: "module-02-summary-review",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-filesystem-permissions",
      title: "5. Modül Değerlendirmesi: Permissions Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "FHS, chmod 755, /etc/shadow ve SUID biti özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "FHS hiyerarşisini, rwx sayısal hesabını, /etc/shadow gizliliğini ve SUID yetki yükseltme mekanizmasını öğrendin." }
      ],
      summary: ["Modül 02 tamamlandı. Sıradaki hedef: 03 - PROCESS YÖNETİMİ VE YETKİ YÜKSELTME."],
      practice: {
        id: "prac-03-02-05",
        prompt: "Linux sistemlerinde kullanıcı parolalarının salted SHA-512 hash biçiminde saklandığı ve sadece root tarafından okunabilen güvenlik dosyası hangisidir?",
        options: [
          { id: "a", text: "/etc/passwd" },
          { id: "b", text: "/etc/shadow" },
          { id: "c", text: "/etc/group" },
          { id: "d", text: "/var/log/auth.log" }
        ],
        correctAnswer: "b",
        explanation: "`/etc/shadow` dosyası kullanıcı parola hash'lerini saklar ve yetkisiz okumayı engellemek için sadece root erişimine açıktır."
      }
    }
  ]
};
