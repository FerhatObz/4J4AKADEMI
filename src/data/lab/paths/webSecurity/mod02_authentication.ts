import { ModuleItem } from '../../../../types/lab';

export const mod02AuthenticationSec: ModuleItem = {
  id: "mod-07-02",
  code: "02",
  slug: "authentication-security",
  pathSlug: "web-security",
  title: "KİMLİK DOĞRULAMA VE YETKİLENDİRME GÜVENLİĞİ",
  description: "IDOR (Insecure Direct Object Reference), JWT Zafiyetleri (None Algoritması, Key Confusion), Session Fixation ve OAuth 2.0 Zafiyetleri.",
  order: 2,
  topics: [
    {
      id: "top-07-02-01",
      code: "01",
      slug: "idor-insecure-direct-object-reference-deep",
      pathSlug: "web-security",
      moduleSlug: "authentication-security",
      title: "1. IDOR (Insecure Direct Object Reference) ve Broken Access Control",
      subtitle: "Sunucu Tarafı Yetkilendirme Kontrolü Eksiklikleri",
      shortDescription: "IDOR mekanizması, ID tahmini, UUID kullanımı ve sunucu tarafı Access Control Matrix.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "IDOR NEDİR VE NASIL OLUŞUR?",
          content: "IDOR (Insecure Direct Object Reference), uygulama istemciden gelen bir nesne parametresini (örneğin `GET /api/user/profile?id=1052`) alıp veritabanından doğrudan getirdiğinde ve sunucu tarafında 'Bu oturum sahibi gerçekten id=1052 profiline erişmeye yetkili mi?' kontrolü YAPMADIĞINDA ortaya çıkar."
        },
        {
          id: "sec-02",
          code: "02",
          title: "KAZANILAN YETKİLER VE RISK SEVİYESİ",
          content: "IDOR üzerinden bir kullanıcı başka bir kullanıcının faturalarını okuyabilir, parolasını sıfırlayabilir veya hesabını tamamen ele geçirebilir. OWASP Top 10 sıralamasında A01: Broken Access Control kategorisinde 1 numaradır."
        }
      ],
      summary: ["IDOR sunucunun nesneye erişimde oturum yetkisini kontrol etmemesidir."]
    },
    {
      id: "top-07-02-02",
      code: "02",
      slug: "jwt-json-web-token-vulnerabilities-deep",
      pathSlug: "web-security",
      moduleSlug: "authentication-security",
      title: "2. JWT (JSON Web Token) Zafiyetleri ve İstismar Yöntemleri",
      subtitle: "Header.Payload.Signature Yapısı, None Algorithm ve Weak HMAC Keys",
      shortDescription: "JWT imzası atlatma (`\"alg\": \"none\"`), simetrik/asimetrik anahtar karıştırma (Key Confusion) ve Hashcat brute-force.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "JWT MİMARİSİ",
          content: "JWT 3 parçadan oluşur: `Header.Payload.Signature`.\n- Header: Algoritma türünü belirtir (`{\"alg\": \"HS256\", \"typ\": \"JWT\"}`).\n- Payload: Kullanıcı id, rol gibi verileri taşır (`{\"sub\": \"123\", \"role\": \"user\"}`).\n- Signature: Verilerin değiştirilmediğini kanıtlayan kriptografik imzadır."
        },
        {
          id: "sec-02",
          code: "02",
          title: "NONE ALGORİTMASI ZAFİYETİ",
          content: "Saldırgan Header'daki alg değerini `\"none\"` yapar, Payload içindeki `\"role\": \"admin\"` olarak değiştirir ve Signature kısmını tamamen siler (`header.payload.`). Sunucu imzayı doğrulamayı atlarsa saldırgan admin yetkisi kazanır."
        }
      ],
      summary: ["JWT None algoritması ve zayıf gizli anahtarlar imza atlatmaya izin verir."]
    },
    {
      id: "top-07-02-03",
      code: "03",
      slug: "oauth-2-0-sso-vulnerabilities",
      pathSlug: "web-security",
      moduleSlug: "authentication-security",
      title: "3. OAuth 2.0 ve SSO (Single Sign-On) Zafiyetleri",
      subtitle: "redirect_uri Manipülasyonu ve Account Takeover",
      shortDescription: "OAuth 2.0 akışı, Authorization Code çalma, `redirect_uri` bypass ve state parametresi eksikliği.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "REDIRECT_URI İSTİSMARI",
          content: "OAuth 2.0 yetkilendirme akışında `redirect_uri` parametresi açık bir yönlendirmeye (open redirect) izin veriyorsa, saldırgan kurbanın tek kullanımlık `code` değerini kendi sunucusuna çekerek hesabı ele geçirir."
        }
      ],
      summary: ["OAuth 2.0 yetkilendirme kodları katı redirect_uri doğrulamasından geçmelidir."]
    },
    {
      id: "top-07-02-04",
      code: "04",
      slug: "module-02-summary-review",
      pathSlug: "web-security",
      moduleSlug: "authentication-security",
      title: "4. Modül Değerlendirmesi: Authentication & Authorization Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "IDOR, JWT none zafiyeti ve OAuth 2.0 güvenlik açıklarının testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "IDOR mantığını, JWT imza atlatma zafiyetlerini ve OAuth 2.0 yönlendirme açıklarını öğrendin." }
      ],
      summary: ["Modül 02 tamamlandı. Sıradaki hedef: 03 - ENJEKSİYON ZAFİYETLERİ."],
      practice: {
        id: "prac-07-02-04",
        prompt: "Bir saldırganın JWT Token Header kısmındaki algoritmayı `none` yaparak imza kısmını silmesi durumunda oluşan güvenlik zafiyeti hangisidir?",
        options: [
          { id: "a", text: "SQL Injection" },
          { id: "b", text: "JWT None Algorithm Signature Bypass" },
          { id: "c", text: "CSRF" },
          { id: "d", text: "SSRF" }
        ],
        correctAnswer: "b",
        explanation: "İmza doğrulamasını tamamen kapatan `\"alg\": \"none\"` zafiyeti, token içeriğinin değiştirilip imzasız kabul edilmesine yol açar."
      }
    }
  ]
};
