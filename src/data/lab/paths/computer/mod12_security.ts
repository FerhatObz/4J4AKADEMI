import { ModuleItem } from '../../../../types/lab';

export const mod12Security: ModuleItem = {
  id: "mod-00-12",
  code: "12",
  slug: "computer-security-fundamentals",
  pathSlug: "computer-fundamentals",
  title: "COMPUTER SECURITY FUNDAMENTALS",
  description: "Siber güvenliğin temelleri, CIA Triad, CIA zafiyetleri, Attack Surface, Donanımsal vs Yazılımsal Korumalar ve Siber Güvenlik Yol Haritası.",
  order: 12,
  topics: [
    {
      id: "top-00-12-01",
      code: "01",
      slug: "cia-triad-confidentiality-integrity-availability",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "1. CIA Triad: Gizlilik, Bütünlük ve Erişilebilirlik",
      subtitle: "Güvenliğin Üç Kutsal Sütunu",
      shortDescription: "Confidentiality (Şifreleme), Integrity (Hash/İmza), Availability (DoS/Yedeklilik).",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CIA TRIAD NEDİR?", content: "Siber güvenliğin temeli 3 esasa dayanır: 1. Gizlilik (Sadece yetkili okusun), 2. Bütünlük (Veri yolda değişmesin), 3. Erişilebilirlik (Sistem 7/24 çalışsın)." }
      ],
      summary: ["CIA Triad = Confidentiality + Integrity + Availability."]
    },
    {
      id: "top-00-12-02",
      code: "02",
      slug: "attack-surface-reduction",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "2. Saldırı Yüzeyi (Attack Surface) ve Daraltma",
      subtitle: "Saldırgana En Az Giriş Kapısı Bırakma",
      shortDescription: "Gereksiz portlar, servisler, açık arayüzler ve attack surface management.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ATTACK SURFACE", content: "Saldırı yüzeyi, bir sistemin dış dünyadan erişilebilen tüm açık portları, servisleri ve giriş noktalarıdır. Saldırı yüzeyi ne kadar darsa güvenlik o kadar yüksektir." }
      ],
      summary: ["Saldırı yüzeyini küçültmek potansiyel zafiyet kapılarını kapatır."]
    },
    {
      id: "top-00-12-03",
      code: "03",
      slug: "principle-of-least-privilege",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "3. En Az Ayrıcalık İlkesi (Principle of Least Privilege - PoLP)",
      subtitle: "Gereksiz Root / Admin Kullanımına Son",
      shortDescription: "Sadece iş için gereken minimum yetkilerin verilmesi ve yetki sınırlandırması.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "POLP PRENSİBİ", content: "Bir kullanıcı veya servise sadece yapacağı görev için gereken minimum yetki verilmelidir. Root/Admin hesabı ile günlük iş yapılmamalıdır." }
      ],
      summary: ["PoLP minimum yetki verilmesini savunur."]
    },
    {
      id: "top-00-12-04",
      code: "04",
      slug: "defense-in-depth-layers",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "4. Savunma Derinliği (Defense in Depth) Katmanları",
      subtitle: "Tek Bir Güvenlik Duvarına Güvenmemek",
      shortDescription: "Fiziksel, Ağ, Sunucu, Uygulama ve Veri katmanı güvenlik kalkanları.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DEFENSE IN DEPTH", content: "Saldırgan tek bir engeli (örneğin WAF) aştığında durdurulabilmesi için ağ, host, uygulama ve veri katmanında ayrı ayrı korumalar kurulmalıdır." }
      ],
      summary: ["Defense in Depth çok katmanlı güvenlik yaklaşımıdır."]
    },
    {
      id: "top-00-12-05",
      code: "05",
      slug: "vulnerability-exploit-payload-concepts",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "5. Temel Güvenlik Kavramları: Vulnerability, Exploit ve Payload",
      subtitle: "Zafiyetten İstismara Siber Saldırı Anatomisi",
      shortDescription: "Açık (Vulnerability), Silah/Araç (Exploit), Yük/Zararlı (Payload) ayrımı.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SİBER KAVRAMLAR", content: "Vulnerability = Yazılımdaki güvenlik deliği.\nExploit = Bu deliği kullanan kod.\nPayload = İçeri sokulan zararlı yük (örneğin Reverse Shell)." }
      ],
      summary: ["Vulnerability açık, Exploit anahtar, Payload içeride çalışan koddur."]
    },
    {
      id: "top-00-12-06",
      code: "06",
      slug: "zero-day-vulnerabilities-cve",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "6. Sıfırıncı Gün (Zero-Day) Zafiyetleri ve CVE Standardı",
      subtitle: "Yaması Olmayan Açıklar ve CVSS Skorlaması",
      shortDescription: "CVE numaralandırma, NVD veritabanı, CVSS v3/v4 puanlama ve Zero-Day tehditleri.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ZERO-DAY VE CVE", content: "Zero-Day, henüz üreticisi tarafından yaması yayınlanmamış açık türüdür. CVE (Common Vulnerabilities and Exposures) zafiyetlere verilen küresel kimlik numarasıdır." }
      ],
      summary: ["Zero-Day yaması yayınlanmamış açıkları ifade eder; CVE standart kimlik numarasıdır."]
    },
    {
      id: "top-00-12-07",
      code: "07",
      slug: "threat-actors-motivations",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "7. Tehdit Aktörleri ve Saldırı Motivasyonları",
      subtitle: "Script Kiddie'den APT Devlet Saldırganlarına",
      shortDescription: "Script Kiddies, Hacktivists, Cybercriminals (Fidyeciler) ve APT (Advanced Persistent Threats).",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEHDİT AKTÖRLERİ", content: "Saldırganlar amaçlarına göre ayrılır: APT (Devlet destekli gelişmiş tehditler), Fidyeciler (Finansal), Hacktivist (Siyasi) ve Script Kiddie (Hazır araç kullananlar)." }
      ],
      summary: ["APT'ler devlet destekli en gelişmiş ve tehlikeli tehdit aktörleridir."]
    },
    {
      id: "top-00-12-08",
      code: "08",
      slug: "hardware-vs-software-security",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "8. Donanımsal Güvenlik vs Yazılımsal Güvenlik",
      subtitle: "Neden Yazılım Koruması Donanım Açığını Kapatamaz?",
      shortDescription: "TPM, HSM, Secure Enclave vs WAF, Antivirüs ve Firewall.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DONANIM VS YAZILIM KORUMASI", content: "Yazılımsal güvenlik güncellenebilir ancak işletim sistemi ele geçirildiğinde devre dışı kalabilir. Donanımsal güvenlik (TPM/HSM) fiziksel kırılmazlık sunar." }
      ],
      summary: ["Donanımsal koruma (TPM/HSM) kök güvenliği sağlar."]
    },
    {
      id: "top-00-01-11",
      code: "09",
      slug: "next-steps-cyber-path-roadmap",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "9. Siber Güvenlik Yol Haritası ve Akademi İlerleme Rehberi",
      subtitle: "Computer Fundamentals Sonrası Nereye Gitmelisin?",
      shortDescription: "Linux, Networking, Web Security ve Red Team patikalarına geçiş haritası.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "GELECEK ADIMLAR", content: "Donanım mimarisini tamamladın. Şimdi sırasıyla:\n1. 01 - INTERNET FUNDAMENTALS\n2. 02 - COMPUTER NETWORKING\n3. 03 - LINUX SYSTEM & SECURITY\n4. 07 - WEB SECURITY\npatikalarına geçerek uzmanlaşabilirsin!" }
      ],
      summary: ["Temel donanım bilgisi üzerine Ağ, Linux ve Web Güvenliği inşa edilmelidir."]
    },
    {
      id: "top-00-12-10",
      code: "10",
      slug: "module-12-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "computer-security-fundamentals",
      title: "10. Modül Değerlendirmesi: Computer Security Özet & Test",
      subtitle: "00 COMPUTER FUNDAMENTALS MEZUNİYET SINAVI",
      shortDescription: "CIA Triad, PoLP, Defense in Depth, Zero-Day ve donanım güvenliği final sınavı.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MEZUNİYET DEĞERLENDİRMESİ", content: "Tebrikler! 00 // COMPUTER FUNDAMENTALS patikasını 12 dev modül ve 100'den fazla detaylı konu ile başarıyla tamamladın. Artık bir bilgisayarın devre seviyesinden işletim sistemine kadar nasıl çalıştığını biliyorsun." }
      ],
      summary: ["00 // COMPUTER FUNDAMENTALS MEZUNİYETİ TAMAMLANDI!"],
      practice: {
        id: "prac-00-12-10",
        prompt: "Siber güvenlikte verinin iletim sırasında veya diskte yetkisiz kişilerce DEĞİŞTİRİLMEDİĞİNİ garanti eden ilke hangisidir?",
        options: [
          { id: "a", text: "Confidentiality (Gizlilik)" },
          { id: "b", text: "Integrity (Bütünlük)" },
          { id: "c", text: "Availability (Erişilebilirlik)" },
          { id: "d", text: "Non-repudiation" }
        ],
        correctAnswer: "b",
        explanation: "Integrity (Bütünlük), verinin izinsiz olarak bozulmadığını ve orijinal halinin korunduğunu garanti eden temel ilkendir."
      }
    }
  ]
};
