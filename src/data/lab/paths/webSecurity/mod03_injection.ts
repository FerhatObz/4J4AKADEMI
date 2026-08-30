import { ModuleItem } from '../../../../types/lab';

export const mod03InjectionSec: ModuleItem = {
  id: "mod-07-03",
  code: "03",
  slug: "injection",
  pathSlug: "web-security",
  title: "ENJEKSİYON ZAFİYETLERİ (INJECTION VULNERABILITIES)",
  description: "SQL Injection (SQLi), Cross-Site Scripting (XSS), Command Injection, Server-Side Template Injection (SSTI) ve XML External Entity (XXE).",
  order: 3,
  topics: [
    {
      id: "top-07-03-01",
      code: "01",
      slug: "sql-injection-deep-dive",
      pathSlug: "web-security",
      moduleSlug: "injection",
      title: "1. SQL Injection (SQLi): Veritabanı Mantığını Manipüle Etme",
      subtitle: "In-Band (UNION-Based), Error-Based, Blind SQLi ve Prepared Statements",
      shortDescription: "SQL sorgu birleştirmesi, UNION SELECT saldırıları, Time-based Blind SQLi ve Prepared Statements koruması.",
      order: 1,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SQL INJECTION NEDİR VE NASIL OLUŞUR?",
          content: "SQLi, uygulamanın kullanıcı girdisini doğrulamadan ve kaçış karakterlerine dikkat etmeden doğrudan dinamik SQL sorgusuna eklemesiyle oluşur.\nÖrnek Zafiyetli Kod:\n`SELECT * FROM users WHERE username = '` + input + `' AND password = '` + pass + `'`\n\nSaldırgan input yerine `' OR '1'='1` girdiğinde sorgu `WHERE '1'='1'` haline gelir ve şifresiz admin girişi sağlanır!"
        },
        {
          id: "sec-02",
          code: "02",
          title: "KESİN SAVUNMA: PREPARED STATEMENTS",
          content: "Prepared Statements (Parametreli Sorgular), veriyi veritabanı sorgusundan kesin olarak ayırır. Veritabanı sürücüsü girdiyi hiçbir zaman SQL komutu olarak derlemez, sadece düz metin olarak işler."
        }
      ],
      summary: [
        "SQLi kullanıcı verisinin SQL kodu gibi derlenmesidir.",
        "Prepared Statements SQLi zafiyetini tamamen engeller."
      ]
    },
    {
      id: "top-07-03-02",
      code: "02",
      slug: "xss-cross-site-scripting-deep-dive",
      pathSlug: "web-security",
      moduleSlug: "injection",
      title: "2. XSS (Cross-Site Scripting): Reflected, Stored ve DOM-Based XSS",
      subtitle: "Zararlı JavaScript İcrası ve İstemci Oturum Çalma",
      shortDescription: "Stored XSS, Reflected XSS, DOM XSS, Cookie Stealing PoC ve Content Security Policy (CSP).",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "XSS TÜRLERİ",
          content: "1. Stored XSS: Zararlı betik veritabanına kaydolur (örn: yorumlar) ve sayfayı açan HERKESİN tarayıcısında çalışır!\n2. Reflected XSS: Betik URL parametresinden tek seferlik yansır (`?q=<script>...`).\n3. DOM XSS: İstemci tarafı JavaScript'in güvenilmez veriyi `eval()` veya `innerHTML` ile çalıştırmasıdır."
        }
      ],
      summary: ["XSS tarayıcıda yetkisiz JavaScript çalıştırmaktır; Stored XSS en tehlikelisidir."]
    },
    {
      id: "top-07-03-03",
      code: "03",
      slug: "command-injection-os-rce",
      pathSlug: "web-security",
      moduleSlug: "injection",
      title: "3. Command Injection: İşletim Sistemi Komut Satırı İcrası",
      subtitle: "System / Exec Çağrıları ve Reverse Shell Alma",
      shortDescription: "Sistem çağrılarına girdi sızdırma, `; id`, `| cat /etc/passwd` ve netcat reverse shell.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "COMMAND INJECTION ANATOMİSİ",
          content: "Bir uygulamanın ping atma özelliği varsa (`system(\"ping -c 1 \" + host)`), kullanıcı `127.0.0.1 ; cat /etc/passwd` yazdığında işletim sistemi iki komutu da çalıştırır ve hassas dosyayı ekrana döker."
        }
      ],
      summary: ["İşletim sistemi komutlarına direkt kullanıcı verisi geçirilmemelidir."]
    },
    {
      id: "top-07-03-04",
      code: "04",
      slug: "module-03-summary-review",
      pathSlug: "web-security",
      moduleSlug: "injection",
      title: "4. Modül Değerlendirmesi: Injection Vulnerabilities Özet & Test",
      subtitle: "Modül 03 Bütünsel Sınavı",
      shortDescription: "SQLi, XSS ve Command Injection tekniklerinin özeti.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "SQL Injection, XSS türleri ve Command Injection saldırı ile savunma tekniklerini öğrendin." }
      ],
      summary: ["Modül 03 tamamlandı. Sıradaki hedef: 04 - SUNUCU TARAFLI ZAFİYETLER."],
      practice: {
        id: "prac-07-03-04",
        prompt: "Veritabanına kaydedilen zararlı bir JavaScript kodunun, o sayfayı ziyaret eden her kullanıcıda otomatik çalışmasına neden olan en tehlikeli XSS türü hangisidir?",
        options: [
          { id: "a", text: "Reflected XSS" },
          { id: "b", text: "Stored XSS (Kalıcı XSS)" },
          { id: "c", text: "DOM XSS" },
          { id: "d", text: "Blind SQLi" }
        ],
        correctAnswer: "b",
        explanation: "Stored (Kalıcı) XSS veritabanına kaydedildiği için sayfayı her açan kurbanda çalışır ve en geniş etkiye sahiptir."
      }
    }
  ]
};
