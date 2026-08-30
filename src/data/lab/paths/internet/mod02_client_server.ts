import { ModuleItem } from '../../../../types/lab';

export const mod02ClientServer: ModuleItem = {
  id: "mod-01-02",
  code: "02",
  slug: "client-server",
  pathSlug: "internet-fundamentals",
  title: "CLIENT & SERVER",
  description: "İstemci-Sunucu mimarisi, Web tarayıcıları, Web sunucuları (Nginx, Apache), Peer-to-Peer (P2P) ve Serverless modelleri.",
  order: 2,
  topics: [
    {
      id: "top-01-02-01",
      code: "01",
      slug: "client-server-architecture-concept",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "1. Client-Server Mimarisi Temelleri",
      subtitle: "İstek Atan İstemci vs Yanıt Dönen Sunucu",
      shortDescription: "Request-Response döngüsü, istemci ve sunucu rolleri.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "Client-Server mimarisinde İstemci (Client) kaynak veya hizmet talep eden taraftır (Tarayıcı, Mobil Uygulama). Sunucu (Server) ise gelen istekleri işleyip yanıt döndüren 7/24 aktif sistemdir." }
      ],
      summary: ["İstemci talep eder, sunucu işler ve yanıt döner."]
    },
    {
      id: "top-01-02-02",
      code: "02",
      slug: "web-browsers-user-agents",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "2. Web Tarayıcıları (Browsers) ve User-Agent",
      subtitle: "Blinking Cursor'dan Modern Rendering Engine'e",
      shortDescription: "Chromium, Gecko, WebKit motorları ve User-Agent başlığı.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TARAYICI MOTORLARI", content: "Tarayıcılar HTML/CSS/JS kodunu işleyen karmaşık istemcilerdir. `User-Agent` başlığı sunucuya tarayıcının marka ve sürümünü bildirir." }
      ],
      summary: ["Tarayıcılar HTML/JS kodunu ekrana çizen güçlü istemcilerdir."]
    },
    {
      id: "top-01-02-03",
      code: "03",
      slug: "web-servers-nginx-apache",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "3. Web Sunucuları: Nginx, Apache ve IIS Mimarisi",
      subtitle: "Binlerce Eşzamanlı Bağlantıyı Karşılayan Sistemler",
      shortDescription: "Event-driven Nginx vs Process-based Apache ve static/dynamic içerik sunumu.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WEB SUNUCULARI", content: "Nginx olay tabanlı (Event-driven) yapısıyla milyonlarca eşzamanlı bağlantıyı düşük RAM ile karşılar." }
      ],
      summary: ["Web sunucuları HTTP isteklerini karşılayıp yanıt dosyalarını sunar."]
    },
    {
      id: "top-01-02-04",
      code: "04",
      slug: "peer-to-peer-p2p-architecture",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "4. Peer-to-Peer (P2P) Mimarisi vs Client-Server",
      subtitle: "Herkesin Hem İstemci Hem Sunucu Olduğu Ağlar",
      shortDescription: "BitTorrent, IPFS, Blockchain ve merkeziyetsiz dosya paylaşımı.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "P2P MİMARİSİ", content: "P2P mimarisinde merkezi bir sunucu yoktur. Her düğüm (Peer) hem istemci hem sunucu gibi davranarak dosyaları parçalar halinde paylaşır." }
      ],
      summary: ["P2P ağları merkezi sunucu ihtiyacını ortadan kaldırır."]
    },
    {
      id: "top-01-02-05",
      code: "05",
      slug: "microservices-vs-monolith-servers",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "5. Monolitik vs Mikroservis Sunucu Mimarisi",
      subtitle: "Büyük Tekil Sunuculardan Dağıtık Servislere",
      shortDescription: "Monolith mimari vs Microservices, REST API'ler ve gRPC.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MİKROSERVİS MİMARİSİ", content: "Modern uygulamalar tek büyük sunucu yerine, ödeme servisi, üye servisi gibi bağımsız mikroservislere bölünmüştür." }
      ],
      summary: ["Mikroservisler uygulamayı küçük bağımsız servislere böler."]
    },
    {
      id: "top-01-02-06",
      code: "06",
      slug: "stateless-vs-stateful-communication",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "6. Durumsuz (Stateless) vs Durumlu (Stateful) İletişim",
      subtitle: "HTTP Neden Durumsuzdur?",
      shortDescription: "Stateless protokoller, oturum takibi (Sessions/Cookies) ve ölçeklenebilirlik.",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STATELESS HTTP", content: "HTTP durumsuzdur (Stateless); sunucu bir önceki isteği hatırlamaz. Oturumu hatırlamak için Çerezler (Cookies) ve JWT kullanılır." }
      ],
      summary: ["HTTP durumsuzdur, oturum bilgisi çerezler veya tokenlar ile taşınır."]
    },
    {
      id: "top-01-02-07",
      code: "07",
      slug: "load-balancing-reverse-proxy",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "7. Yük Dengeleyiciler (Load Balancers) ve Ters Vekil Sunucu",
      subtitle: "Milyonlarca İsteği Sunuculara Dağıtma",
      shortDescription: "Round-Robin, Least Connections, Nginx Reverse Proxy ve SSL Termination.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "LOAD BALANCER", content: "Load Balancer gelen trafiği arkasındaki 10 farklı web sunucusuna eşit dağıtarak sistemin çökmesini engeller." }
      ],
      summary: ["Load Balancer trafiği arkadaki sunucu havuzuna dağıtır."]
    },
    {
      id: "top-01-02-08",
      code: "08",
      slug: "serverless-faas-architecture",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "8. Sunucusuz (Serverless) Mimarisi ve FaaS",
      subtitle: "AWS Lambda ve Cloudflare Workers",
      shortDescription: "Function-as-a-Service, olay tetiklemeli kod yürütme ve Cold Start.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SERVERLESS", content: "Serverless modelinde 7/24 bekleyen bir sunucu kiralanmaz. Kod sadece istek geldiğinde milisaniyelik çalışır ve kapanır." }
      ],
      summary: ["Serverless kodun sadece istek anında çalıştırıldığı bulut modelidir."]
    },
    {
      id: "top-01-02-09",
      code: "09",
      slug: "client-side-vs-server-side-security",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "9. İstemci Taraflı (Client-Side) vs Sunucu Taraflı (Server-Side) Güvenlik",
      subtitle: "Güvenlik Sınırı Nerededir?",
      shortDescription: "İstemcideki JavaScript doğrulamalarının kolayca atlatılması (Never Trust Client).",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NEVER TRUST THE CLIENT", content: "İstemcideki (JS/HTML) tüm güvenlik kontrolleri tarayıcı üzerinde değiştirilebilir. Gerçek güvenlik doğrulama DAİMA sunucuda yapılmalıdır." }
      ],
      summary: ["İstemciye asla güvenilmez, doğrulama daima sunucu tarafında yapılır."]
    },
    {
      id: "top-01-02-10",
      code: "10",
      slug: "module-02-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "client-server",
      title: "10. Modül Değerlendirmesi: Client & Server Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "Client, Server, Nginx, P2P, Stateless, Load Balancer ve Server-side güvenlik testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "HTTP'nin durumsuz olduğunu, istemci taraflı doğrulamaların asla yeterli olmadığını ve doğrulamanın sunucuda zorunlu olduğunu öğrendin." }
      ],
      summary: ["Modül 02 başarıyla tamamlandı. Sıradaki hedef: 03 - IP ADDRESSES."],
      practice: {
        id: "prac-01-02-10",
        prompt: "Siber güvenlikte 'İstemciye Asla Güvenme (Never Trust the Client)' ilkesinin temel sebebi nedir?",
        options: [
          { id: "a", text: "İstemci kodunun (HTML/JS) tamamen kullanıcının kontrolünde olup değiştirilebilmesi" },
          { id: "b", text: "İstemcinin internete baglanamamasi" },
          { id: "c", text: "Sunucunun hic kapanmamasi" },
          { id: "d", text: "Tarayicilarin ucretsiz olmasi" }
        ],
        correctAnswer: "a",
        explanation: "Kullanıcı kendi tarayıcısındaki tüm JavaScript ve HTML kodlarını istediği gibi manipüle edebildiği için güvenlik doğrulaması mutlaka sunucuda yapılmalıdır."
      }
    }
  ]
};
