import { ModuleItem } from '../../../../types/lab';

export const mod05PortsSockets: ModuleItem = {
  id: "mod-01-05",
  code: "05",
  slug: "ports-sockets",
  pathSlug: "internet-fundamentals",
  title: "PORTS & SOCKETS",
  description: "Port kavramı (0-65535), Well-known/Registered/Ephemeral portlar, Soket (IP:Port) yapısı, Nmap port taramaları ve Bind/Reverse Shells.",
  order: 5,
  topics: [
    {
      id: "top-01-05-01",
      code: "01",
      slug: "port-number-concept",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "1. Port Nedir? Servis Erişim Kapıları",
      subtitle: "Aynı IP Üzerinde 65.536 Farklı Servisi Ayırt Etme",
      shortDescription: "16-bit port numaralandırması (0-65535) ve taşıma katmanı yönlendirmesi.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "IP adresi binanın sokak adresidir. Port numarası ise binadaki daire numarasıdır! Aynı bilgisayarda web (80), mail (25) ve SSH (22) servislerinin karışmaması portlar sayesinde sağlanır." }
      ],
      summary: ["Portlar bir IP adresindeki farklı servis kapılarıdır (0-65535)."]
    },
    {
      id: "top-01-05-02",
      code: "02",
      slug: "port-categories-well-known-ephemeral",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "2. Port Kategorileri: Well-Known, Registered ve Ephemeral",
      subtitle: "Sabit Servis Portları vs Geçici İstemci Portları",
      shortDescription: "0-1023 Well-Known, 1024-49151 Registered, 49152-65535 Ephemeral (Geçici) portlar.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PORT KATEGORİLERİ", content: "Well-known portlar (0-1023) root yetkisi gerektiren standart servislerdir. Ephemeral (Geçici) portlar istemcinin dışarıya attığı anlık bağlantı kapılarıdır." }
      ],
      summary: ["0-1023 Well-known servis portlarıdır, istemciler rastgele yüksek portlardan çıkış yapar."]
    },
    {
      id: "top-01-05-03",
      code: "03",
      slug: "socket-concept-ip-port-pair",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "3. Soket (Socket) Nedir? (IP : Port Çifti)",
      subtitle: "Ağ İletişiminin Çift Yönlü Bağlantı Noktası",
      shortDescription: "Socket API, Stream (TCP) vs Datagram (UDP) soketleri ve `netstat` / `ss` komutları.",
      order: 3,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SOKET KAVRAMI", content: "Soket bir IP adresi ve bir Port numarasının birleşimidir (Örn: `192.168.1.10:443`). İki bilgisayar arasındaki iletişim 4'lü tuple ile tanımlanır: (SrcIP, SrcPort, DstIP, DstPort)." }
      ],
      summary: ["Soket IP ve Port ikilisinden oluşan iletişim noktasıdır."]
    },
    {
      id: "top-01-05-04",
      code: "04",
      slug: "common-service-ports",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "4. En Çok Kullanılan Standart Portlar ve Servisler",
      subtitle: "21, 22, 25, 53, 80, 110, 143, 443, 3306, 3389",
      shortDescription: "FTP, SSH, SMTP, DNS, HTTP, HTTPS, MySQL, RDP portları ve açıklamaları.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "STANDART PORTLAR", content: "22: SSH, 53: DNS, 80: HTTP, 443: HTTPS, 3306: MySQL, 3389: RDP (Windows Uzak Masaüstü)." }
      ],
      summary: ["Standart servis portlarını bilmek port tarama analizinin temelidir."]
    },
    {
      id: "top-01-05-05",
      code: "05",
      slug: "port-scanning-techniques-nmap",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "5. Port Tarama Teknikleri (Nmap & SYN Stealth Scanning)",
      subtitle: "Açık, Kapalı ve Filtrelenmiş Port Tespiti",
      shortDescription: "TCP Connect Scan, SYN Stealth Scan (-sS), UDP Scan ve Nmap kullanımı.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PORT TARAMA", content: "Nmap hedefin portlarına paket yollayarak durumunu belirler: Open (Açık servis var), Closed (Port kapalı, RST döndü), Filtered (Firewall engelledi)." }
      ],
      summary: ["Port taraması hedefteki açık servis kapılarını tespit etmeye yarar."]
    },
    {
      id: "top-01-05-06",
      code: "06",
      slug: "bind-shell-vs-reverse-shell",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "6. Bind Shell vs Reverse Shell Mekanizması",
      subtitle: "Saldırı Sırasında Port Kullanım Yönleri",
      shortDescription: "Gelen bağlantı dinleme (Bind) vs Dışarıya bağlantı açma (Reverse Shell / Netcat).",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "REVERSE SHELL NEDİR?", content: "Güvenlik duvarları içeriye olan bağlantıları engellediği için saldırgan kurban makinenin dışarıya (örneğin 443 portuna) bağlantı açmasını sağlar (Reverse Shell)." }
      ],
      summary: ["Reverse Shell güvenlik duvarlarını aşmak için kurbandan dışarıya açılan bağlantıdır."]
    },
    {
      id: "top-01-05-07",
      code: "07",
      slug: "netstat-ss-lsof-commands",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "7. Aktif Soket İzleme: `netstat`, `ss` ve `lsof` Komutları",
      subtitle: "Sistemde Dinleyen Portları ve Prosesleri Görme",
      shortDescription: "LISTEN, ESTABLISHED durumları ve port-proses eşleştirmesi.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SOKET İZLEME", content: "`netstat -tulnp` veya `ss -tulnp` komutu sistemde dinleyen (LISTEN) tüm portları ve bu portları açan PID/proses isimlerini gösterir." }
      ],
      summary: ["`ss -tulnp` sistemdeki açık dinleme portlarını ve süreçlerini listeler."]
    },
    {
      id: "top-01-05-08",
      code: "08",
      slug: "port-forwarding-tunnelling",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "8. Port Yönlendirme (Port Forwarding) ve SSH Tünelleme",
      subtitle: "Gizli İç Portlara Erişim Sağlama",
      shortDescription: "Local Port Forwarding, Remote Port Forwarding ve SSH Dynamic SOCKS Proxy.",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SSH PORT FORWARDING", content: "Dışarıya kapalı olan iç ağdaki bir port (örneğin 3306 MySQL), SSH tünelleme ile güvenli bir şekilde yerel makineye yönlendirilebilir." }
      ],
      summary: ["Port forwarding kapalı servis portlarına güvenli tünel üzerinden erişmeyi sağlar."]
    },
    {
      id: "top-01-05-09",
      code: "09",
      slug: "port-knocking-security",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "9. Port Knocking (Port Tıklatma) Savunması",
      subtitle: "Portu Gizleyip Gizli Parola Sırasıyla Açma",
      shortDescription: "Firewall üzerinde belirlenmiş sıra ile kapalı portlara paket atarak ana portu açma.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "PORT KNOCKING", content: "SSH (22) portu tamamen kapalı görünür. Ancak 7000, 8000, 9000 portlarına sırasıyla paket atıldığında Firewall 22 portunu sadece atan IP'ye açar." }
      ],
      summary: ["Port Knocking gizli dizi paketlerle kapalı portları dinleyiciye açan savunmadır."]
    },
    {
      id: "top-01-05-10",
      code: "10",
      slug: "module-05-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "ports-sockets",
      title: "10. Modül Değerlendirmesi: Ports & Sockets Özet & Test",
      subtitle: "Modül 05 Bütünsel Sınavı",
      shortDescription: "Portlar, Soketler, Nmap, Reverse Shell, `ss` ve Port Knocking özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "Soketin IP ve Port ikilisi olduğunu, Reverse Shell'in güvenlik duvarlarını aşmak için kurbandan saldırgana atıldığını öğrendin." }
      ],
      summary: ["Modül 05 başarıyla tamamlandı. Sıradaki hedef: 06 - DNS."],
      practice: {
        id: "prac-01-05-10",
        prompt: "Dışarıdan içeriye doğru yapılan bağlantıları engelleyen bir güvenlik duvarını aşmak için kurban makinenin saldırgana dışarıya doğru bağlantı açmasını sağlayan kabuk yöntemi hangisidir?",
        options: [
          { id: "a", text: "Bind Shell" },
          { id: "b", text: "Reverse Shell" },
          { id: "c", text: "DNS Cache" },
          { id: "d", text: "DHCP Lease" }
        ],
        correctAnswer: "b",
        explanation: "Reverse Shell, iç ağdaki kurban bilgisayarın dışarıdaki saldırganın dinleyici portuna bağlantı kurmasını sağlayarak içeriye dönük firewall engellerini atlatır."
      }
    }
  ]
};
