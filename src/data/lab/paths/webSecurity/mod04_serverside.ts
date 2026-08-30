import { ModuleItem } from '../../../../types/lab';

export const mod04ServerSideSec: ModuleItem = {
  id: "mod-07-04",
  code: "04",
  slug: "server-side-security",
  pathSlug: "web-security",
  title: "SUNUCU TARAFLI ZAFİYETLER (SERVER-SIDE SECURITY)",
  description: "SSRF (Server-Side Request Forgery), Cloud Metadata Saldırıları, Arbitrary File Upload (RCE) ve Path Traversal.",
  order: 4,
  topics: [
    {
      id: "top-07-04-01",
      code: "01",
      slug: "ssrf-cloud-metadata-exploitation",
      pathSlug: "web-security",
      moduleSlug: "server-side-security",
      title: "1. SSRF (Server-Side Request Forgery) ve Bulut Metadata Saldırıları",
      subtitle: "AWS/GCP Metadata (169.254.169.254) ve İç Servis Sızması",
      shortDescription: "SSRF mekanizması, iç ağ taramaları, AWS IMDSv1 vs IMDSv2 ve Whitelist savunması.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SSRF NEDİR?",
          content: "SSRF, sunucunun kullanıcı tarafından sağlanan bir URL'ye istek atması (örn: resim indirme, webhook) esnasında, saldırganın isteği iç ağa (`127.0.0.1`, `10.0.0.1`) veya bulut metadata IP adresine (`http://169.254.169.254/latest/meta-data/iam/security-credentials/`) yönlendirerek yetkisiz erişim sağlamasıdır."
        }
      ],
      summary: ["SSRF sunucuyu proxy gibi kullanarak iç ağa veya bulut yetkilerine erişim sağlar."]
    },
    {
      id: "top-07-04-02",
      code: "02",
      slug: "file-upload-rce-vulnerabilities",
      pathSlug: "web-security",
      moduleSlug: "server-side-security",
      title: "2. Güvensiz Dosya Yükleme (Arbitrary File Upload) ve RCE",
      subtitle: "Web Shell Yükleme ve Kod Çalıştırma",
      shortDescription: "PHP/JSP/ASP web shell yükleme, uzantı bypass (PHP5, phtml), MIME type bypass ve random filename çözümü.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "WEB SHELL YÜKLEME ZAFİYETİ",
          content: "Kullanıcı profil resmi yükleme alanına uzantısı gizlenmemiş bir `.php` dosyası (web shell) yüklediğinde ve dosya doğrudan web erişimine açık bir dizine kaydolduğunda, saldırgan `http://site.com/uploads/shell.php?cmd=id` yazarak sunucuyu tamamen ele geçirir."
        }
      ],
      summary: ["Güvensiz dosya yükleme doğrudan RCE (Uzaktan Kod Çalıştırma) verir."]
    },
    {
      id: "top-07-04-03",
      code: "03",
      slug: "module-04-summary-review",
      pathSlug: "web-security",
      moduleSlug: "server-side-security",
      title: "3. Modül Değerlendirmesi: Server-Side Security Özet & Test",
      subtitle: "Modül 04 Bütünsel Sınavı",
      shortDescription: "SSRF, Bulut Metadata ve File Upload RCE özeti.",
      order: 3,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "SSRF zafiyetini, bulut metadata sızıntısını ve web shell engelleme yöntemlerini öğrendin." }
      ],
      summary: ["Modül 04 tamamlandı. Web Security Patikası Başarıyla Tamamlandı!"],
      practice: {
        id: "prac-07-04-03",
        prompt: "AWS bulut sunucularında SSRF zafiyeti ile geçici IAM yetkilendirme anahtarlarını çalmak için hedeflenen dahili metadata IP adresi hangisidir?",
        options: [
          { id: "a", text: "127.0.0.1" },
          { id: "b", text: "169.254.169.254" },
          { id: "c", text: "192.168.1.1" },
          { id: "d", text: "8.8.8.8" }
        ],
        correctAnswer: "b",
        explanation: "`169.254.169.254` adresi AWS, Azure ve GCP sanal sunucularında dahili metadata servisinin IP adresidir."
      }
    }
  ]
};
