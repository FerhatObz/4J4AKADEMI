import { ModuleItem } from '../../../../types/lab';

export const mod03ProcessPrivesc: ModuleItem = {
  id: "mod-03-03",
  code: "03",
  slug: "linux-privilege-escalation",
  pathSlug: "linux-fundamentals",
  title: "PROCESS YÖNETİMİ VE YETKİ YÜKSELTME (PRIVILEGE ESCALATION)",
  description: "Linux Süreç Yönetimi (ps, top, htop, kill), Systemd Servisleri, SUID İle Yetki Yükseltme, GTFOBins İstismar Teknikleri ve Sudoers Zafiyetleri.",
  order: 3,
  topics: [
    {
      id: "top-03-03-01",
      code: "01",
      slug: "linux-process-management-pid-ppid",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-privilege-escalation",
      title: "1. Linux Süreç (Process) Yapısı: PID, PPID ve Signal İletimi",
      subtitle: "İşlem Ağacı, init/systemd (PID 1) ve `kill -9` Sinyalleri",
      shortDescription: "PID, PPID, `ps aux`, `top`, `htop`, `kill -15 SIGTERM` ve `kill -9 SIGKILL`.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "PID VE PID 1 (SYSTEMD)",
          content: "Sistem açıldığında ilk çalışan süreç PID 1'dir (Systemd / Init). Diğer tüm süreçler PID 1'in çocuklarıdır. `ps aux` komutu tüm süreçleri, sahiplerini ve CPU/RAM kullanımını gösterir."
        }
      ],
      summary: ["PID 1 ilk süreçtir, `ps aux` çalışan süreçleri ve sahiplerini listeler."]
    },
    {
      id: "top-03-03-02",
      code: "02",
      slug: "suid-privilege-escalation-gtfobins",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-privilege-escalation",
      title: "2. SUID Biti İle Yetki Yükseltme ve GTFOBins Metodolojisi",
      subtitle: "Kök Kullanıcı (Root) Yetkilerine Ulaşma Yolları",
      shortDescription: "SUID taraması (`find / -perm -4000 2>/dev/null`), GTFOBins istismar teknikleri ve Root kabuğu alma.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SUID İSTİSMAR MANİTĞI",
          content: "Saldırgan `find / -perm -4000 2>/dev/null` ile SUID biti açılmış ikili dosyaları arar. Örneğin `/usr/bin/find` üzerinde SUID varsa: `find . -exec /bin/sh -p \\;` yazarak doğrudan root kabuğu elde eder!"
        }
      ],
      summary: ["Yanlış yapılandırılmış SUID binaryleri GTFOBins teknikleriyle root yetkisi sağlar."]
    },
    {
      id: "top-03-03-03",
      code: "03",
      slug: "sudoers-misconfiguration-sudo-l",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-privilege-escalation",
      title: "3. Sudoers Yanlış Yapılandırması ve `sudo -l` Analizi",
      subtitle: "Şifresiz Root Yetkisi İle Komut Çalıştırma Zafiyetleri",
      shortDescription: "`/etc/sudoers` dosyası, `sudo -l` komutu ve NOPASSWD hakları.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SUDO -L HAKLARI",
          content: "`sudo -l` komutu kullanıcının hangi komutları root yetkisiyle çalıştırabileceğini gösterir. Eğer `(ALL : ALL) NOPASSWD: /usr/bin/vim` tanımlıysa, `sudo vim` açıp `:!sh` yazarak root olunabilir."
        }
      ],
      summary: ["`sudo -l` kullanıcının çalıştırmaya yetkili olduğu ayrıcalıklı komutları gösterir."]
    },
    {
      id: "top-03-03-04",
      code: "04",
      slug: "module-03-summary-review",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-privilege-escalation",
      title: "4. Modül Değerlendirmesi: Privilege Escalation Özet & Test",
      subtitle: "Modül 03 Bütünsel Sınavı",
      shortDescription: "Process yönetimi, SUID araması, GTFOBins ve `sudo -l` özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "PID 1 mantığını, `find -perm -4000` ile SUID tespitini ve `sudo -l` ile yetki yükseltmeyi öğrendin." }
      ],
      summary: ["Modül 03 tamamlandı. Sıradaki hedef: 04 - PROGRAMMING FUNDAMENTALS."],
      practice: {
        id: "prac-03-03-04",
        prompt: "Bir Linux sisteminde SUID izni atanmış özel yetkili dosyaları tespit etmek için kullanılan komut hangisidir?",
        options: [
          { id: "a", text: "find / -perm -4000 2>/dev/null" },
          { id: "b", text: "ls -la /tmp" },
          { id: "c", text: "cat /etc/passwd" },
          { id: "d", text: "ps aux" }
        ],
        correctAnswer: "a",
        explanation: "`find / -perm -4000 2>/dev/null` komutu sistemdeki tüm SUID izinli (4000) dosyaları arar ve hataları gizler."
      }
    }
  ]
};
