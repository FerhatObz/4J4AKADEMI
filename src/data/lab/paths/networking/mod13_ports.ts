import { ModuleItem } from '../../../../types/lab';

export const mod13Ports: ModuleItem = {
  id: "mod-02-13",
  code: "13",
  slug: "ports-sockets",
  pathSlug: "networking",
  title: "PORTS & SOCKETS",
  description: "Port numaralandırması, Soket (IP:Port) mantığı, İki taraflı iletişim Tuple'ı ve Port tarama temelleri.",
  order: 13,
  topics: [
    {
      id: "top-02-13-01",
      code: "01",
      slug: "port-concept-socket-tuple",
      pathSlug: "networking",
      moduleSlug: "ports-sockets",
      title: "1. Port ve 4'lü Soket Tuple Yapısı",
      subtitle: "(SrcIP, SrcPort, DstIP, DstPort) İletişim Kimliği",
      shortDescription: "Ağdaki bağlantıların 4'lü soket kümesi ile tamamen benzersiz kılınması.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "SOCKET TUPLE", content: "İki cihaz arasındaki her bağlantı 4 bileşenle tanımlanır: Kaynak IP, Kaynak Port, Hedef IP, Hedef Port. Tarayıcınızda 10 sekme açtığınızda her sekme farklı bir Kaynak Port kullanır." }
      ],
      summary: ["4'lü soket tuple yapısı çakışmasız bağlantı sağlar."]
    },
    {
      id: "top-02-13-02",
      code: "02",
      slug: "module-13-summary-review",
      pathSlug: "networking",
      moduleSlug: "ports-sockets",
      title: "2. Modül Değerlendirmesi: Ports & Sockets Özet & Test",
      subtitle: "Modül 13 Bütünsel Değerlendirmesi",
      shortDescription: "Portlar ve Soket 4'lü tuple özet testi.",
      order: 2,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Soket 4'lü tuple yapısını öğrendin." }
      ],
      summary: ["Modül 13 tamamlandı. Sıradaki hedef: 14 - ICMP."],
      practice: {
        id: "prac-02-13-02",
        prompt: "Ağdaki aktif bir TCP bağlantısını benzersiz kılmak için kullanılan 4'lü tuple kümesi hangi elemanları içerir?",
        options: [
          { id: "a", text: "SrcIP, SrcPort, DstIP, DstPort" },
          { id: "b", text: "MAC, IP, Subnet, DNS" },
          { id: "c", text: "URL, HTTP, HTML, CSS" },
          { id: "d", text: "PING, TRACERT, ARP, RTT" }
        ],
        correctAnswer: "a",
        explanation: "Ağ bağlantıları Kaynak IP, Kaynak Port, Hedef IP ve Hedef Port elemanlarından oluşan 4'lü tuple ile tanımlanır."
      }
    }
  ]
};
