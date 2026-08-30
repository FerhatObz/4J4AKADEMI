import { ModuleItem } from '../../../../types/lab';

export const mod11TcpDeep: ModuleItem = {
  id: "mod-02-11",
  code: "11",
  slug: "tcp",
  pathSlug: "networking",
  title: "TCP (TRANSMISSION CONTROL PROTOCOL)",
  description: "Bağlantı yönelimli güvenilir iletişim, TCP 3-Way Handshake, Sequence ve Acknowledgement takibi, Retransmission (RTO), Flow Control, Congestion Control ve Oturum Yaşam Döngüsü.",
  order: 11,
  topics: [
    {
      id: "top-02-11-01",
      code: "01",
      slug: "tcp-connection-oriented-reliability",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "1. TCP Güvenilirlik Garantisi ve Sıralı İletim",
      subtitle: "Kayıpsız ve Doğru Sırayla Veri Teslimatı",
      shortDescription: "TCP mekanizmaları, bayt seviyesinde takip ve paket sıralama.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "WHAT IS IT?", content: "TCP (Transmission Control Protocol), verinin kayıpsız, eksiksiz ve tam gönderildiği sırayla hedefe ulaşmasını garanti eden bağlantı yönelimli taşıma katmanı protokolüdür." }
      ],
      summary: ["TCP veri bütünlüğü ve sıralı teslimat garantisi verir."]
    },
    {
      id: "top-02-11-02",
      code: "02",
      slug: "tcp-handshake-sequence-numbers",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "2. TCP 3-Way Handshake ve Initial Sequence Number (ISN)",
      subtitle: "Bağlantı Kurulumu ve Rastgele Başlangıç Numaraları",
      shortDescription: "SYN -> SYN-ACK -> ACK adımları ve ISN güvenlik önlemi.",
      order: 2,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "3-WAY HANDSHAKE", content: "İstemci SYN atar, sunucu SYN-ACK döner, istemci ACK atar. ISN (Initial Sequence Number) rastgele seçilerek oturum çalma engellenir." }
      ],
      summary: ["TCP 3-way handshake ile iki taraf arasında güvenli oturum başlatılır."]
    },
    {
      id: "top-02-11-03",
      code: "03",
      slug: "tcp-seq-ack-data-tracking",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "3. Sequence Number ve Acknowledgement Number İle Veri Takibi",
      subtitle: "Hangi Bayt Geldi, Hangi Bayt Bekleniyor?",
      shortDescription: "SEQ ve ACK matematiksel formülü ve bayt bazında onay mekanizması.",
      order: 3,
      readTime: "9 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SEQ VE ACK MATEMATİĞİ", content: "Gönderici SEQ=1000 ve DataLen=500 olan paket atarsa, Alıcı ACK=1500 paketi yollar ('1500. baytı bekliyorum')." }
      ],
      summary: ["SEQ gönderilen baytı, ACK beklenen sıradaki baytı gösterir."]
    },
    {
      id: "top-02-11-04",
      code: "04",
      slug: "tcp-retransmission-rto-fast-retransmit",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "4. Paket Kaybı ve Yeniden İletim (Retransmission & RTO)",
      subtitle: "Gelmediği Anlaşılan Paketin Tekrar Gönderilmesi",
      shortDescription: "Retransmission Timeout (RTO), Duplicate ACK ve Fast Retransmit.",
      order: 4,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RETRANSMISSION", content: "ACK zamanında gelmezse RTO süresi dolar ve paket tekrar gönderilir. 3 kez üst üste aynı Duplicate ACK gelirse Fast Retransmit devreye girer." }
      ],
      summary: ["Paket kaybolduğunda RTO zaman aşımı ile tekrar gönderilir."]
    },
    {
      id: "top-02-11-05",
      code: "05",
      slug: "tcp-flow-control-sliding-window-mechanics",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "5. Akış Kontrolü (Flow Control) ve Sliding Window",
      subtitle: "Alıcı Tampon Belleğini Korumak",
      shortDescription: "Window Size, Receive Buffer ve Zero Window uyarısı.",
      order: 5,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "FLOW CONTROL", content: "Alıcı `Window Size` değerini düşürerek göndericiye yavaşlamasını söyler. Tampon bellek dolarsa `Window Size = 0` yollar." }
      ],
      summary: ["Flow Control alıcının belleğinin taşmasını engeller."]
    },
    {
      id: "top-02-11-06",
      code: "06",
      slug: "tcp-congestion-control-slow-start",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "6. Tıkanıklık Kontrolü (Congestion Control): Slow Start & Congestion Avoidance",
      subtitle: "Ağ Trafik Tıkanıklığını Önleme",
      shortDescription: "Congestion Window (cwnd), Slow Start, Congestion Avoidance ve Fast Recovery.",
      order: 6,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "CONGESTION CONTROL", content: "Flow Control alıcıyı korurken, Congestion Control AĞI korur. `Slow Start` ile paket sayısını katlayarak artırır, kayıp olunca hızı yarıya düşürür." }
      ],
      summary: ["Congestion Control ağın aşırı yüklenmesini ve tıkanmasını engeller."]
    },
    {
      id: "top-02-11-07",
      code: "07",
      slug: "module-11-summary-review",
      pathSlug: "networking",
      moduleSlug: "tcp",
      title: "7. Modül Değerlendirmesi: TCP Özet & Test",
      subtitle: "Modül 11 Bütünsel Değerlendirmesi",
      shortDescription: "Handshake, SEQ/ACK, Retransmission, Flow/Congestion control özet testi.",
      order: 7,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "TCP'nin bağlantılı yapısını, SEQ/ACK takibini, RTO yenilemesini ve Flow/Congestion control mekanizmalarını öğrendin." }
      ],
      summary: ["Modül 11 tamamlandı. Sıradaki hedef: 12 - UDP."],
      practice: {
        id: "prac-02-11-07",
        prompt: "TCP protokolünde göndericinin hızlı, alıcının yavaş olduğu durumlarda alıcı bellek taşmasını engellemek için kullanılan mekanizma hangisidir?",
        options: [
          { id: "a", text: "Congestion Control" },
          { id: "b", text: "Flow Control (Sliding Window)" },
          { id: "c", text: "DNS Caching" },
          { id: "d", text: "ARP Spoofing" }
        ],
        correctAnswer: "b",
        explanation: "Flow Control (Akış Kontrolü), alıcının tampon belleğinin doluluk oranına göre Window Size düşürerek göndericiyi yavaşlatan mekanizmadır."
      }
    }
  ]
};
