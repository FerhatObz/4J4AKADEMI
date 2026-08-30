import { ModuleItem } from '../../../../types/lab';

export const mod08Tcp: ModuleItem = {
  id: "mod-01-08",
  code: "08",
  slug: "tcp",
  pathSlug: "internet-fundamentals",
  title: "TCP (TRANSMISSION CONTROL PROTOCOL)",
  description: "Bağlantı yönelimli güvenilir protokol: TCP 3-Way Handshake, Sequence/ACK numaraları, TCP Bayrakları (SYN, ACK, FIN, RST), Flow Control, Congestion Control, TCP Reset & SYN Flood Saldırıları.",
  order: 8,
  topics: [
    {
      id: "top-01-08-01",
      code: "01",
      slug: "tcp-concept-reliability",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "1. TCP Nedir? Bağlantı Yönelimli Güvenilir İletişim",
      subtitle: "Paket Kaybına Tahammülü Olmayan Uygulamalar İçin",
      shortDescription: "TCP'nin güvenilirlik garantisi, paket takibi ve sıralama mekanizması.",
      order: 1,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TEMEL KAVRAM", content: "TCP (Transmission Control Protocol), verinin kayıpsız, eksiksiz ve doğru sırada hedefe ulaşmasını garanti eden bağlantı yönelimli (Connection-oriented) taşıma katmanı protokolüdür." }
      ],
      summary: ["TCP bağlantı kuran ve paketin kaybolmadığını garanti eden protokoldür."]
    },
    {
      id: "top-01-08-02",
      code: "02",
      slug: "tcp-header-structure-flags",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "2. TCP Başlık Yapısı (Header) ve TCP Bayrakları",
      subtitle: "SYN, ACK, FIN, RST, PSH, URG",
      shortDescription: "20-baytlık TCP başlığı, kaynak/hedef portları ve denetim bayrakları.",
      order: 2,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TCP BAYRAKLARI", content: "SYN (Bağlantı kur), ACK (Onayla), FIN (Kibarca kapat), RST (Anında kopar/reddet), PSH (Bekletmeden ilet), URG (Acil)." }
      ],
      summary: ["TCP bayrakları bağlantının durumunu ve yönetimi kontrol eder."]
    },
    {
      id: "top-01-08-03",
      code: "03",
      slug: "tcp-three-way-handshake-deep-dive",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "3. TCP 3-Way Handshake (Üçlü El Sıkışma) Detayları",
      subtitle: "SYN -> SYN-ACK -> ACK Sıralaması",
      shortDescription: "ISN (Initial Sequence Number) üretimi ve bağlantı durumları (SYN_SENT, SYN_RECV, ESTABLISHED).",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "3-WAY HANDSHAKE ADIMLARI", content: "1. Client -> SYN (ISN=X) -> Server (SYN_SENT)\n2. Server -> SYN-ACK (ISN=Y, ACK=X+1) -> Client (SYN_RECV)\n3. Client -> ACK (ACK=Y+1) -> Server (ESTABLISHED)" }
      ],
      summary: ["TCP 3-way handshake ile iki taraf arasında güvenli oturum başlatılır."]
    },
    {
      id: "top-01-08-04",
      code: "04",
      slug: "tcp-sequence-acknowledgement-numbers",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "4. Sequence ve Acknowledgement Numaraları ile Veri Takibi",
      subtitle: "Hangi Paket Ulaştı, Hangi Paket Kayboldu?",
      shortDescription: "Sequence Number, ACK Number, bayt seviyesinde paket takibi ve Retransmission.",
      order: 4,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SEQ VE ACK NUMARALARI", content: "TCP gönderilen her baytı numaralandırır. Karşı taraf '1000 bayt aldım, 1001. baytı bekliyorum' diye ACK döner. Gelmeyen paket zaman aşımında (RTO) tekrar yollanır." }
      ],
      summary: ["SEQ ve ACK numaraları veri kaybını engellemek için paket takibi yapar."]
    },
    {
      id: "top-01-08-05",
      code: "05",
      slug: "tcp-four-way-handshake-connection-teardown",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "5. TCP Bağlantı Kapatma: 4-Way Handshake (FIN-ACK)",
      subtitle: "FIN -> ACK -> FIN -> ACK ve TIME_WAIT Durumu",
      shortDescription: "Bağlantının kibarca sonlandırılması ve TIME_WAIT / CLOSE_WAIT durumları.",
      order: 5,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "4-WAY TEARDOWN", content: "Bağlantıyı kapatmak için iki taraf da sırayla FIN bayrağı gönderir ve karşı taraf ACK ile onaylar." }
      ],
      summary: ["TCP bağlantısı FIN ve ACK bayraklarıyla 4 adımda kibarca kapatılır."]
    },
    {
      id: "top-01-08-06",
      code: "06",
      slug: "tcp-flow-control-sliding-window",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "6. Akış Kontrolü (Flow Control) ve Sliding Window",
      subtitle: "Hızlı Göndericinin Yavaş Alıcıyı Boğmasını Engellemek",
      shortDescription: "Window Size, Sliding Window mekanizması ve zero window uyarısı.",
      order: 6,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SLIDING WINDOW", content: "Alıcı, tampon belleğinin (buffer) doluluk oranına göre TCP başlığındaki 'Window Size' değerini düşürür, göndericiyi yavaşlatır." }
      ],
      summary: ["Flow Control alıcının belleğinin taşmasını engeller."]
    },
    {
      id: "top-01-08-07",
      code: "07",
      slug: "tcp-syn-flood-ddos-attack",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "7. TCP SYN Flood DDoS Saldırısı ve SYN Cookies Koruması",
      subtitle: "Yarı Açık Bağlantılarla Sunucuyu Tıkama",
      shortDescription: "SYN_RECV kuyruğunun dolması, yarım açık bağlantılar ve SYN Cookies koruması.",
      order: 7,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SYN FLOOD SALDIRISI", content: "Saldırgan binlerce sahte SYN paketi atar fakat son ACK'yi göndermez. Sunucu SYN_RECV kuyruğunda beklerken tüm kaynakları tükenir. SYN Cookies koruması hafızada yer tutmadan matematiksel imza döner." }
      ],
      summary: ["SYN Flood yarım açık bağlantılarla sunucuyu felç eden DDoS saldırısıdır."]
    },
    {
      id: "top-01-08-08",
      code: "08",
      slug: "tcp-reset-rst-injection-attacks",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "8. TCP Reset (RST) Injection ve Bağlantı Koparma",
      subtitle: "Araya Girip Oturumu Zorla Kapatma",
      shortDescription: "Sahte RST paketi enjekte ederek aktif bağlantıyı anında düşürme (Sansür/Gözetim).",
      order: 8,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "RST INJECTION", content: "Devletler veya dinleyiciler SEQ numarasını tahmin ederek taraflara sahte `RST` bayraklı paket yollar. İki taraf da bağlantının koptuğunu sanır." }
      ],
      summary: ["RST Injection sahte RST paketiyle aktif TCP oturumunu sabote etmektir."]
    },
    {
      id: "top-01-08-09",
      code: "09",
      slug: "tcp-session-hijacking",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "9. TCP Session Hijacking (Oturum Çalma)",
      subtitle: "Tahmin Edilebilir Sequence Numaraları",
      shortDescription: "Sequence number prediction, IP spoofing ve aktif TCP oturumunu ele geçirme.",
      order: 9,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SESSION HIJACKING", content: "Saldırgan doğru SEQ numarasını tahmin ederse kurbanın yerine TCP paketleri enjekte edip oturumu çalabilir." }
      ],
      summary: ["TCP Session Hijacking Sequence numaralarını tahmin ederek oturuma sızmaktır."]
    },
    {
      id: "top-01-08-10",
      code: "10",
      slug: "module-08-summary-review",
      pathSlug: "internet-fundamentals",
      moduleSlug: "tcp",
      title: "10. Modül Değerlendirmesi: TCP Özet & Test",
      subtitle: "Modül 08 Bütünsel Sınavı",
      shortDescription: "3-Way Handshake, SEQ/ACK, Flags, Flow Control, SYN Flood ve RST Injection özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY & WHAT YOU SHOULD KNOW", content: "TCP'nin güvenilir ve bağlantılı olduğunu, 3-way handshake (SYN, SYN-ACK, ACK) ile başladığını ve SYN Flood açığına karşı SYN Cookies kullanıldığını öğrendin." }
      ],
      summary: ["Modül 08 başarıyla tamamlandı. Sıradaki hedef: 09 - UDP."],
      practice: {
        id: "prac-01-08-10",
        prompt: "TCP 3-Way Handshake (üçlü el sıkışma) bağlantı kurulumunda istemcinin sunucuya attığı İLK paket hangi bayrağı taşır?",
        options: [
          { id: "a", text: "ACK" },
          { id: "b", text: "SYN" },
          { id: "c", text: "FIN" },
          { id: "d", text: "RST" }
        ],
        correctAnswer: "b",
        explanation: "TCP el sıkışması istemcinin sunucuya attığı SYN (Synchronize) bayraklı paket ile başlatılır."
      }
    }
  ]
};
