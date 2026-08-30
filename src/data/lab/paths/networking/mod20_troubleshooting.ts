import { ModuleItem } from '../../../../types/lab';

export const mod20Troubleshooting: ModuleItem = {
  id: "mod-02-20",
  code: "20",
  slug: "network-troubleshooting",
  pathSlug: "networking",
  title: "NETWORK TROUBLESHOOTING",
  description: "Katmanlı Ağ Arıza Teşhisi (Layered Troubleshooting), Komutlar (`ping`, `traceroute`, `ip`/`ifconfig`, `nslookup`/`dig`, `route`, `arp`, `ss`/`netstat`) ve Sorun Çözüm Senaryoları.",
  order: 20,
  topics: [
    {
      id: "top-02-20-01",
      code: "01",
      slug: "layered-troubleshooting-methodology",
      pathSlug: "networking",
      moduleSlug: "network-troubleshooting",
      title: "1. Katmanlı Ağ Arıza Teşhis Metodolojisi",
      subtitle: "'İnternet Çalışmıyor' Sorununa Sistemli Yaklaşım",
      shortDescription: "Aşağıdan yukarıya (Bottom-Up) vs Yukarıdan aşağıya (Top-Down) sorun giderme.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "KATMANLI TROUBLESHOOTING", content: "Rastgele komut çalıştırmak yerine Katman 1'den başlanır:\n1. Kablo takılı mı? (L1)\n2. IP adresi var mı? `ip a` / `ipconfig` (L3)\n3. Gateway'e ping gidiyor mu? `ping 192.168.1.1` (L3/L2)\n4. DNS çalışıyor mu? `nslookup google.com` (L7)\n5. Port açık mı? `nc -zv google.com 443` (L4)." }
      ],
      summary: ["Katmanlı troubleshooting adımları rastgele denemeler yerine metodolojik teşhis sunar."]
    },
    {
      id: "top-02-20-02",
      code: "02",
      slug: "diagnostic-commands-ping-traceroute-ip",
      pathSlug: "networking",
      moduleSlug: "network-troubleshooting",
      title: "2. Teşhis Komutları: `ping`, `traceroute`, `ip` ve `ifconfig`",
      subtitle: "Bağlantı ve Arayüz Kontrol Araçları",
      shortDescription: "Ping parametreleri, traceroute sıçrama analizi, Linux `ip a` ve Windows `ipconfig /all`.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KOMUTLAR", content: "`ping` erişilebilirliği ölçer. `traceroute` rotadaki kopuk noktayı gösterir. `ip a` ip ve MAC durumunu gösterir." }
      ],
      summary: ["`ping` ve `traceroute` ağ teşhisinin en temel araçlarıdır."]
    },
    {
      id: "top-02-20-03",
      code: "03",
      slug: "dns-route-arp-troubleshooting-tools",
      pathSlug: "networking",
      moduleSlug: "network-troubleshooting",
      title: "3. İleri Teşhis Komutları: `dig`, `nslookup`, `route` ve `arp`",
      subtitle: "DNS Çözümleme ve Tablo Sorgulama",
      shortDescription: "`dig domain @server`, `nslookup`, `ip route` ve `arp -a` çıktılarını okuma.",
      order: 3,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "DIG VE NSLOOKUP", content: "`dig google.com @8.8.8.8` ile spesifik DNS sunucusu sorgulanır. `arp -a` ile yerel ağ IP-MAC tablosu doğrulanır." }
      ],
      summary: ["`dig` ve `nslookup` DNS sorunlarını anında tespit etmeye yarar."]
    },
    {
      id: "top-02-20-04",
      code: "04",
      slug: "socket-port-troubleshooting-ss-netstat-nc",
      pathSlug: "networking",
      moduleSlug: "network-troubleshooting",
      title: "4. Port ve Soket Kontrolü: `ss`, `netstat` ve `nc` (Netcat)",
      subtitle: "Port Açık mı, Sunucu Dinliyor mu?",
      shortDescription: "`ss -tulnp`, Netcat ile port tarama (`nc -zv host port`) ve bağlantı testi.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NETCAT İLE PORT TESTİ", content: "`nc -zv 192.168.1.50 443` komutu 443 portunun açık olup olmadığını el sıkışma ile anında doğrular." }
      ],
      summary: ["Netcat (`nc`) portların açık olup olmadığını doğrulayan en hızlı araçtır."]
    },
    {
      id: "top-02-20-05",
      code: "05",
      slug: "module-20-summary-review",
      pathSlug: "networking",
      moduleSlug: "network-troubleshooting",
      title: "5. Modül Değerlendirmesi: Troubleshooting Özet & Test",
      subtitle: "Modül 20 Bütünsel Değerlendirmesi",
      shortDescription: "Katmanlı troubleshooting, ping, traceroute, dig, netcat özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Katmanlı sorun giderme adımlarını ve teşhis komutlarını kullanmayı öğrendin." }
      ],
      summary: ["Modül 20 tamamlandı. Sıradaki hedef: 21 - NETWORK SECURITY FUNDAMENTALS."],
      practice: {
        id: "prac-02-20-05",
        prompt: "Uzaktaki bir sunucunun 443 (HTTPS) portunun açık ve erişilebilir olup olmadığını en hızlı şekilde test etmek için kullanılan Netcat komutu hangisidir?",
        options: [
          { id: "a", text: "nc -zv hedef_ip 443" },
          { id: "b", text: "ping hedef_ip 443" },
          { id: "c", text: "arp -a 443" },
          { id: "d", text: "route add 443" }
        ],
        correctAnswer: "a",
        explanation: "`nc -zv IP PORT` komutu belirtilen port üzerinde TCP el sıkışması deneyerek portun açık olup olmadığını anında raporlar."
      }
    }
  ]
};
