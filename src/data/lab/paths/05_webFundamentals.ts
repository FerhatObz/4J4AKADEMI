import { PathItem } from '../../../types/lab';

export const webFundamentalsPath: PathItem = {
  id: "path-05",
  code: "05",
  slug: "web-fundamentals",
  title: "WEB FUNDAMENTALS",
  shortTitle: "WEB",
  tagline: "HTML, DOM yapısı, JavaScript, HTTP protokolü ve tarayıcı çalışma mantığı.",
  description: "Same-Origin Policy, DOM Rendering Engine, HTTP İstek/Yanıt Başlıkları ve REST API mimarisi.",
  accentColor: "#38BDF8", // Sky Blue
  level: "CORE",
  order: 5,
  modules: [
    {
      id: "mod-05-01",
      code: "01",
      slug: "browser-dom-engine",
      pathSlug: "web-fundamentals",
      title: "TARAYICI & DOM MİMARİSİ",
      description: "DOM ağacı, JavaScript Event Loop ve tarayıcı render döngüsü.",
      order: 1,
      topics: [
        {
          id: "top-05-01-01",
          code: "01",
          slug: "dom-architecture",
          pathSlug: "web-fundamentals",
          moduleSlug: "browser-dom-engine",
          title: "DOM (Document Object Model) & Güvenlik",
          subtitle: "Canlı HTML Ağacı ve DOM Sink/Source Kavramı",
          shortDescription: "DOM manipülasyonu, tehlikeli JavaScript fonksiyonları ve DOM XSS.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "DOM SINK VE SOURCE MANTIĞI",
              content: "Source: Kullanıcının kontrol edebildiği veri giriş noktasıdır (`location.search`, `location.hash`, `document.referrer`). Sink: Veriyi çalıştırılabilir HTML/JS olarak işleyen fonksiyondur (`innerHTML`, `eval`, `document.write`). Source doğrudan Sink'e aktığında DOM XSS oluşur."
            }
          ],
          summary: [
            "Source kullanıcı verisidir, Sink çalıştırıcı fonksiyondur.",
            "Source -> Sink akışı DOM XSS zafiyetidir."
          ]
        }
      ]
    },
    {
      id: "mod-05-02",
      code: "02",
      slug: "cookies-web-storage",
      pathSlug: "web-fundamentals",
      title: "ÇEREZLER & WEB DEPOLAMA",
      description: "Cookies, LocalStorage, SessionStorage ve IndexedDB.",
      order: 2,
      topics: [
        {
          id: "top-05-02-01",
          code: "01",
          slug: "cookie-security-flags",
          pathSlug: "web-fundamentals",
          moduleSlug: "cookies-web-storage",
          title: "Çerez Güvenliği & Bayraklar (Flags)",
          subtitle: "HttpOnly, Secure ve SameSite (Strict, Lax, None)",
          shortDescription: "Oturum çerezlerini XSS ve CSRF saldırılarına karşı koruyan bayraklar.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "ÇEREZ BAYRAKLARI",
              content: "1. `HttpOnly`: JavaScript'in (`document.cookie`) çerezi okumasını engeller (XSS ile oturum çalmayı önler). 2. `Secure`: Çerezin sadece HTTPS üzerinden iletilmesini sağlar. 3. `SameSite=Strict/Lax`: Üçüncü taraf sitelerden gelen isteklerde çerezin otomatik gitmesini engelleyerek CSRF saldırılarını durdurur."
            }
          ],
          summary: [
            "HttpOnly XSS oturum hırsızlığını engeller.",
            "SameSite CSRF saldırılarını sınırlar.",
            "Secure şifresiz ağlarda sızmayı önler."
          ]
        }
      ]
    }
  ]
};
