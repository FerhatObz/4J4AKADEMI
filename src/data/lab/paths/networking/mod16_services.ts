import { ModuleItem } from '../../../../types/lab';

export const mod16Services: ModuleItem = {
  id: "mod-02-16",
  code: "16",
  slug: "network-services",
  pathSlug: "networking",
  title: "NETWORK SERVICES",
  description: "Ağ uygulama servisleri: DNS (53), DHCP (67/68), NTP (123), HTTP (80), HTTPS (443), SSH (22), FTP (20/21), SFTP (22), SMTP (25/587), IMAP (143/993), POP3 (110/995).",
  order: 16,
  topics: [
    {
      id: "top-02-16-01",
      code: "01",
      slug: "service-ntp-network-time-protocol",
      pathSlug: "networking",
      moduleSlug: "network-services",
      title: "1. NTP (Network Time Protocol) ve Zaman Senkronizasyonu",
      subtitle: "Port 123 / UDP — Sistem Logları ve Kriptografi İçin Zaman Birliği",
      shortDescription: "Stratum katmanları, zaman senkronizasyonu ve log adli bilişimi (Forensics).",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NTP SERVİSİ VE ÖNEMİ", content: "NTP (Port 123 UDP), sunucuların saatlerini atomik saat kaynaklarıyla senkronize eder. Güvenlikte zaman birliği olmaması (Desenkronizasyon) Kerberos kimlik doğrulamasını bozar ve adli bilişimde log korelasyonunu imkansız kılar." }
      ],
      summary: ["NTP Port 123 UDP üzerinden sistem zamanlarını senkronize eder."]
    },
    {
      id: "top-02-16-02",
      code: "02",
      slug: "service-ssh-secure-shell",
      pathSlug: "networking",
      moduleSlug: "network-services",
      title: "2. SSH (Secure Shell) Güvenli Yönetim Servisi",
      subtitle: "Port 22 / TCP — Telnet'in Şifreli Halefi",
      shortDescription: "Telnet (Port 23) güvensizliği vs SSH (Port 22), açık anahtarlı kimlik doğrulama.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SSH SERVİSİ", content: "SSH (Port 22 TCP), Telnet'in açık metin parola sızdırma açığına karşı geliştirilmiş, tüm trafiği şifreleyen komut satırı uzaktan yönetim servisidir." }
      ],
      summary: ["SSH Port 22 üzerinden şifreli uzaktan komut satırı erişimi sunar."]
    },
    {
      id: "top-02-16-03",
      code: "03",
      slug: "service-ftp-vs-sftp-ftps",
      pathSlug: "networking",
      moduleSlug: "network-services",
      title: "3. Dosya Aktarım Servisleri: FTP vs SFTP vs FTPS",
      subtitle: "Port 20/21 (FTP) vs Port 22 (SFTP) vs Port 990 (FTPS)",
      shortDescription: "FTP Active/Passive modları, açık metin parola tehlikesi ve SSH tabanlı SFTP.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FTP VS SFTP", content: "FTP (20/21) parolayı açık metin iletir. SFTP (Port 22) ise SSH protokolü üzerinde çalışan tamamen şifreli güvenli dosya transfer servisidir." }
      ],
      summary: ["FTP açık metindir, SFTP Port 22 üzerinden şifreli dosya transferi yapar."]
    },
    {
      id: "top-02-16-04",
      code: "04",
      slug: "service-mail-smtp-imap-pop3",
      pathSlug: "networking",
      moduleSlug: "network-services",
      title: "4. E-posta Servisleri: SMTP, IMAP ve POP3",
      subtitle: "Port 25/587 (SMTP), Port 143/993 (IMAP), Port 110/995 (POP3)",
      shortDescription: "E-posta gönderme (SMTP) vs okuma/senkronize etme (IMAP/POP3) protokolleri.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "E-POSTA SERVİSLERİ", content: "SMTP (25/587) mail iletir. POP3 (110/995) maili bilgisayara indirip sunucudan siler. IMAP (143/993) maili sunucu ile canlı senkronize tutar." }
      ],
      summary: ["SMTP mail gönderir; IMAP ve POP3 mail okumaya yarar."]
    },
    {
      id: "top-02-16-05",
      code: "05",
      slug: "module-16-summary-review",
      pathSlug: "networking",
      moduleSlug: "network-services",
      title: "5. Modül Değerlendirmesi: Network Services Özet & Test",
      subtitle: "Modül 16 Bütünsel Değerlendirmesi",
      shortDescription: "NTP, SSH, FTP/SFTP, SMTP, IMAP ve POP3 özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Ağ servislerinin bağlantı portlarını, güvenlik işlevlerini ve iletim tiplerini öğrendin." }
      ],
      summary: ["Modül 16 tamamlandı. Sıradaki hedef: 17 - VLAN & SEGMENTATION."],
      practice: {
        id: "prac-02-16-05",
        prompt: "Ağdaki tüm sunucuların log zaman birliğini ve Kerberos kimlik doğrulama sürelerini senkronize etmek için kullanılan protokol ve port hangisidir?",
        options: [
          { id: "a", text: "SSH (Port 22)" },
          { id: "b", text: "NTP (Port 123 UDP)" },
          { id: "c", text: "FTP (Port 21)" },
          { id: "d", text: "SMTP (Port 25)" }
        ],
        correctAnswer: "b",
        explanation: "NTP (Network Time Protocol), Port 123 UDP üzerinden ağdaki cihazların saatlerini atomik zaman kaynakları ile senkronize eder."
      }
    }
  ]
};
