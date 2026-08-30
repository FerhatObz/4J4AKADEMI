import { ModuleItem } from '../../../../types/lab';

export const mod01WebFundamentalsSec: ModuleItem = {
  id: "mod-07-01",
  code: "01",
  slug: "web-fundamentals-sec",
  pathSlug: "web-security",
  title: "WEB GÜVENLİĞİ TEMELLERİ VE İSTEMCİ İZOLASYONU",
  description: "Same-Origin Policy (SOP), CORS Zafiyetleri, CSRF Saldırıları ve Çerez (Cookie) Güvenlik Bayrakları (HttpOnly, Secure, SameSite).",
  order: 1,
  topics: [
    {
      id: "top-07-01-01",
      code: "01",
      slug: "same-origin-policy-deep",
      pathSlug: "web-security",
      moduleSlug: "web-fundamentals-sec",
      title: "1. Same-Origin Policy (SOP): Tarayıcı İzolasyonunun Temel Kuralı",
      subtitle: "Protokol, Host (Domain) ve Port İkilisinin Matematiksel Analizi",
      shortDescription: "SOP mimarisi, Origin kavramı, DOM/Cookie erişim kısıtlamaları ve atlatılamaz güvenlik ilkeleri.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "KAVRAMIN TANIMI VE ORIGIN NEDİR?",
          content: "Same-Origin Policy (Aynı Köken Politikası), modern web tarayıcılarının bir siteden yüklenen JavaScript kodlarının başka bir sitenin verilerine (DOM, Çerezler, LocalStorage, Fetch/XHR yanıtları) erişmesini engelleyen en kritik güvenlik duvarıdır.\n\nBir 'Origin' (Köken) üçlü bileşenden oluşur:\n1. Protokol (http vs https)\n2. Host / Domain (example.com vs api.example.com)\n3. Port (80 vs 443 vs 8080)"
        },
        {
          id: "sec-02",
          code: "02",
          title: "SOP OLMASAYDI NE OLURDU?",
          content: "SOP olmasaydı, tarayıcınızda `banka.com` açıkken girdiğiniz kötü niyetli `zararli-site.com`, arka planda `fetch('https://banka.com/api/bakiye')` isteği atıp banka hesabınızdaki tüm bakiyeyi ve kişisel verilerinizi okuyabilirdi!"
        },
        {
          id: "sec-03",
          code: "03",
          title: "SOP NELERİ KISITLAR, NELERİ SERBEST BIRAKIR?",
          content: "- Kısıtlananlar: Cross-Origin DOM erişimi, Cross-Origin XHR/Fetch yanıtlarını okuma, Cross-Origin Cookie ve LocalStorage okuma.\n- Serbest Olanlar (Write/Embed): `<script src=\"...\">`, `<img src=\"...\">`, `<link rel=\"stylesheet\">` ve `<form action=\"...\">` gönderme."
        }
      ],
      summary: [
        "SOP: Protokol, Host ve Port üçlüsü tam eşleşmedikçe tarayıcı veriyi gizler.",
        "SOP yazmayı/resim yüklemeyi engellemez, verinin yanıtını okumayı engeller."
      ],
      practice: {
        id: "prac-07-01-01",
        prompt: "`https://app.example.com:443` adresi ile `http://app.example.com:443` adresi Same-Origin (Aynı Köken) midir?",
        options: [
          { id: "a", text: "Evet, çünkü domain ve port aynıdır." },
          { id: "b", text: "Hayır, çünkü protokolleri (http vs https) farklıdır." },
          { id: "c", text: "Evet, çünkü IP adresleri aynıdır." },
          { id: "d", text: "Sadece Chrome'da evettir." }
        ],
        correctAnswer: "b",
        explanation: "Origin tanımında Protokol, Host ve Port üçü de BİREBİR aynı olmak zorundadır. HTTP ile HTTPS protokolleri farklı olduğu için SOP uyarınca Cross-Origin sayılırlar."
      }
    },
    {
      id: "top-07-02-02",
      code: "02",
      slug: "cors-misconfiguration-exploits",
      pathSlug: "web-security",
      moduleSlug: "web-fundamentals-sec",
      title: "2. CORS Zafiyetleri ve İstismar Senaryoları",
      subtitle: "Access-Control-Allow-Origin: * ve Access-Control-Allow-Credentials: true Zafiyeti",
      shortDescription: "CORS mekanizması, Preflight OPTIONS istekleri, dinamik Origin yansıtma ve PoC istismar kodları.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CORS (CROSS-ORIGIN RESOURCE SHARING) NEDİR?",
          content: "CORS, SOP kısıtlamasını sunucu kontrolünde ve güvenli şekilde esnetmek için geliştirilmiş HTTP başlık standardıdır. Sunucu `Access-Control-Allow-Origin: https://güvenli-site.com` yanıt başlığı dönerek o sitenin XHR yanıtını okumasına izin verir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "KRİTİK CORS ZAFİYETİ: ORIGIN YANSITMA (REFLECTION)",
          content: "Yazılımcılar wildcard (`*`) ile çerez kullanımının çakıştığını görünce şu hatalı koda başvururlar:\n`Access-Control-Allow-Origin: req.headers.origin`\n`Access-Control-Allow-Credentials: true`\n\nBu durumda saldırgan `Origin: https://attacker.com` gönderdiğinde sunucu bunu kabul eder ve kurbanın özel verileri saldırganın JS kodu tarafından okunabilir hale gelir!"
        }
      ],
      summary: [
        "CORS SOP'u gevşetme mekanizmasıdır.",
        "Gelen Origin başlığını doğrudan yansıtmak ve Credentials: true vermek en kritik veritabanı sızıntısı nedenidir."
      ]
    },
    {
      id: "top-07-01-03",
      code: "03",
      slug: "csrf-cross-site-request-forgery",
      pathSlug: "web-security",
      moduleSlug: "web-fundamentals-sec",
      title: "3. CSRF (Cross-Site Request Forgery) ve Oturum İstismarı",
      subtitle: "Kullanıcı Adına Yetkisiz Eylem Gerçekleştirme",
      shortDescription: "CSRF saldırı vektörü, PoC HTML formları, Anti-CSRF tokenları ve SameSite=Strict/Lax bayrakları.",
      order: 3,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "CSRF SALDIRISI NASIL ÇALIŞIR?",
          content: "CSRF, kurbanın hedef sitedeki aktif oturum çerezlerini istismar eder. Kurban `banka.com` üzerinde oturum açmış durumdayken zararlı `saldırgan.com` sitesini ziyaret ettiğinde, zararlı sitedeki gizli bir form otomatik olarak `POST /api/transfer` isteği atar. Tarayıcı oturum çerezini isteğe eklediği için sunucu eylemi meşru sayar!"
        },
        {
          id: "sec-02",
          code: "02",
          title: "DEFENSE: ANTI-CSRF TOKENLARI VE SAMESITE",
          content: "- Anti-CSRF Token: Sunucu her form için tahmin edilemeyen rastgele bir gizli token üretir.\n- SameSite Cookie: `SameSite=Lax` veya `SameSite=Strict` olarak ayarlanan çerezler, başka siteden gelen POST isteklerine otomatik eklenmez!"
        }
      ],
      summary: [
        "CSRF oturum çerezinin otomatik gönderilmesini istismar eder.",
        "Anti-CSRF tokenları ve SameSite=Lax/Strict kullanımı temel savunmadır."
      ]
    },
    {
      id: "top-07-01-04",
      code: "04",
      slug: "cookie-security-flags-httponly-secure-samesite",
      pathSlug: "web-security",
      moduleSlug: "web-fundamentals-sec",
      title: "4. Çerez (Cookie) Güvenlik Bayrakları: HttpOnly, Secure, SameSite",
      subtitle: "XSS ve Ağ Dinleme Saldırılarına Karşı Çerez Zırhı",
      shortDescription: "HttpOnly (JS erişimini engelleme), Secure (Sadece HTTPS), SameSite (Strict/Lax/None) ve Domain/Path kapsama alanı.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "HTTPONLY VE SECURE BAYRAKLARI",
          content: "- `HttpOnly`: JavaScript'in `document.cookie` üzerinden çereze erişmesini engeller! XSS olsa dahi oturum çerezi çalınamaz.\n- `Secure`: Çerezin sadece şifreli HTTPS bağlantıları üzerinden iletilmesini zorunlu kılar."
        }
      ],
      summary: [
        "HttpOnly çerezi XSS ile çalınmaktan korur.",
        "Secure çerezi Wireshark ve MitM dinlemelerinden korur."
      ]
    },
    {
      id: "top-07-01-05",
      code: "05",
      slug: "module-01-summary-review",
      pathSlug: "web-security",
      moduleSlug: "web-fundamentals-sec",
      title: "5. Modül Değerlendirmesi: Web Fundamentals Sec Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı",
      shortDescription: "SOP, CORS, CSRF ve Cookie bayrakları kapsamlı testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "SOP izolasyonunu, CORS yansıtma açıklarını, CSRF token mekanizmasını ve HttpOnly çerez bayraklarını öğrendin." }
      ],
      summary: ["Modül 01 tamamlandı. Sıradaki hedef: 02 - KİMLİK DOĞRULAMA VE YETKİLENDİRME."],
      practice: {
        id: "prac-07-01-05",
        prompt: "Bir web sitesindeki XSS zafiyetinde saldırganın `document.cookie` komutuyla kurbanın oturum çerezini okumasını engelleyen en etkili çerez bayrağı hangisidir?",
        options: [
          { id: "a", text: "Secure" },
          { id: "b", text: "HttpOnly" },
          { id: "c", text: "SameSite=None" },
          { id: "d", text: "Path=/" }
        ],
        correctAnswer: "b",
        explanation: "`HttpOnly` bayrağı tarayıcıya çerezin istemci taraflı JavaScript API'lerine (`document.cookie`) kapatılmasını söyler."
      }
    }
  ]
};
