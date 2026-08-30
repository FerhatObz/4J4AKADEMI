import { ModuleItem } from '../../../../types/lab';

export const mod12NatPrivate: ModuleItem = {
  id: "mod-01-12",
  code: "12",
  slug: "nat-private-networks",
  pathSlug: "internet-fundamentals",
  title: "NAT & PRIVATE NETWORKS",
  description: "Network Address Translation (NAT), PAT (Port Address Translation), SNAT, DNAT, Port Forwarding, CGNAT (Carrier-Grade NAT) ve Çift Yönlü Trafik Yönetimi.",
  order: 12,
  topics: [
    {
      id: "top-01-12-01",
      code: "01",
      slug: "nat-concept-ipv4-preservation",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "1. NAT (Network Address Translation) Nedir ve Neden Doğdu?",
      subtitle: "IPv4 Tükenmesine Karşı Ev ve Ofis Kurtarıcısı",
      shortDescription: "Özel IP'lerin tek bir Genel (Public) IP arkasında internete çıkma mantığı.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NAT NEDİR?", content: "NAT, iç ağdaki yüzlerce cihazın özel IP adreslerini (192.168.1.x) modeme ait tek bir genel (Public) IP adresine çevirerek internete bağlayan teknolojidir." }
      ],
      summary: ["NAT iç ağdaki özel IP'leri dışarıya tek Public IP olarak sunar."]
    },
    {
      id: "top-01-12-02",
      code: "02",
      slug: "pat-port-address-translation",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "2. PAT (Port Address Translation) / NAPT Çalışma Mantığı",
      subtitle: "Tek IP Arkasında Binlerce Cihazı Portlarla Ayırt Etme",
      shortDescription: "NAT translation table, kaynak port dönüştürme ve yanıt eşleştirme.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PAT MEKANİZMASI", content: "Modem her iç cihazın isteğine farklı bir kaynak portu atar (Örn: `192.168.1.5:50001` -> `85.100.1.1:61001`). Dışarıdan yanıt geldiğinde port tablosundan paketi doğru iç cihaza iletir." }
      ],
      summary: ["PAT bağlantıları geçici dış kaynak portları atayarak ayırt eder."]
    },
    {
      id: "top-01-12-03",
      code: "03",
      slug: "snat-vs-dnat",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "3. SNAT (Source NAT) vs DNAT (Destination NAT)",
      subtitle: "Dışarı Çıkış vs İçeri Yönlendirme",
      shortDescription: "Giden paketlerin kaynak IP'sini değiştirme (SNAT) vs Gelen paketlerin hedef IP'sini değiştirme (DNAT).",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SNAT VS DNAT", content: "SNAT: İç ağın internete çıkışında kaynak adresi değiştirir. DNAT: Dışarıdan gelen isteği iç ağdaki belirli bir sunucuya (Port Forwarding) yönlendirir." }
      ],
      summary: ["SNAT dışarı çıkışta kaynak IP'yi, DNAT içeri girişte hedef IP'yi değiştirir."]
    },
    {
      id: "top-01-12-04",
      code: "04",
      slug: "cgnat-carrier-grade-nat-issues",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "4. CGNAT (Carrier-Grade NAT) ve İSS Seviyesinde Sıkıntılar",
      subtitle: "Binlerce Aboneden Tek Public IP'ye",
      shortDescription: "İSS seviyesinde devasa NAT (100.64.0.0/10) ve port açamama (Port Forwarding) engelleri.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CGNAT SORUNU", content: "İSS'ler IPv4 yetersizliğinden evlere Public IP vermek yerine evleri de CGNAT arkasına koyar. Bu yüzden kullanıcılar evde port açamaz ve dışarıdan erişim alamaz." }
      ],
      summary: ["CGNAT İSS seviyesinde ortak IP kullanımıdır, evde port açmayı engeller."]
    },
    {
      id: "top-01-04-05",
      code: "05",
      slug: "nat-traversal-stun-turn-ice",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "5. NAT Traversal: STUN, TURN ve ICE Protokolleri",
      subtitle: "NAT Arkasındaki İki Cihazın Doğrudan Konuşması",
      shortDescription: "VoIP ve WebRTC'de NAT aşma, STUN IP öğrenme ve TURN relay sunucuları.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NAT TRAVERSAL", content: "WebRTC veya görüntülü aramada iki taraf da NAT arkasındaysa STUN sunucusu ile kendi dış IP/Port'larını öğrenip P2P bağlantı kurarlar." }
      ],
      summary: ["STUN ve TURN NAT arkasındaki cihazların sesli/görüntülü P2P görüşmesini sağlar."]
    },
    {
      id: "top-01-12-06",
      code: "06",
      slug: "module-12-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "nat-private-networks",
      title: "6. Modül Değerlendirmesi: NAT & Private Networks Özet & Test",
      subtitle: "Modül 12 Bütünsel Sınavı",
      shortDescription: "NAT, PAT, SNAT, DNAT, CGNAT ve STUN özet testi.",
      order: 6,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "NAT'ın iç ağ IP'lerini gizlediğini, PAT'ın portlarla ayırdığını ve CGNAT'ın evde port açmayı zorlaştırdığını öğrendin." }
      ],
      summary: ["Modül 12 başarıyla tamamlandı. Sıradaki hedef: 13 - PROXIES & VPN."],
      practice: {
        id: "prac-01-12-06",
        prompt: "Ev modeminize dışarıdan gelen bir Port 80 (HTTP) isteğini iç ağınızdaki 192.168.1.50 IP'li web sunucusuna aktarmak için hangi NAT türü yapılandırılır?",
        options: [
          { id: "a", text: "SNAT (Source NAT)" },
          { id: "b", text: "DNAT / Port Forwarding" },
          { id: "c", text: "CGNAT" },
          { id: "d", text: "APIPA" }
        ],
        correctAnswer: "b",
        explanation: "DNAT (Destination NAT / Port Forwarding), dışarıdan gelen paketin hedef IP ve portunu iç ağdaki belirli bir sunucuya yönlendirmeye yarar."
      }
    }
  ]
};
