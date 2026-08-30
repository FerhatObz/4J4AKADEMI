/**
 * 4JAVA4 AKADEMİ — BOOKS DATA STORE
 * Centralized data structure for all 7 engineering books.
 */

(function(global) {
  const booksData = [
    {
      id: "01",
      index: "01 / 07",
      title: "Bug Bounty Ustalık Rehberi",
      subtitle: "Sıfırdan Gelire",
      slug: "bug-bounty-ustalik-rehberi",
      cover: "images/books/01-bug-bounty.jpg",
      description: "Modern web güvenliği zafiyetleri, ileri seviye recon metodolojileri ve profesyonel ödül avcılığı stratejileri.",
      category: "OFFENSIVE SECURITY",
      topics: ["WEB SECURITY", "RECON", "BURP SUITE", "VULN HUNTING"],
      shopierUrl: "#"
    },
    {
      id: "02",
      index: "02 / 07",
      title: "Cybersecurity Technical English Handbook",
      subtitle: "Siber Güvenlik Terminolojisi ve Raporlama",
      slug: "cybersecurity-technical-english",
      cover: "images/books/02-technical-english.jpg",
      description: "Uluslararası siber güvenlik dünyasında teknik iletişim, profesyonel zafiyet raporlama ve global terminoloji rehberi.",
      category: "PROFESSIONAL SKILLS",
      topics: ["REPORTING", "TERMINOLOGY", "GLOBAL STANDARDS", "COMMUNICATION"],
      shopierUrl: "#"
    },
    {
      id: "03",
      index: "03 / 07",
      title: "Red Team Gibi Düşünmek",
      subtitle: "Yeni Nesil Mentör Rehberi",
      slug: "red-team-gibi-dusunmek",
      cover: "images/books/03-red-team.jpg",
      description: "Saldırgan perspektifiyle savunma mekanizmalarını aşma mantığı, taktiksel yaklaşım ve zihniyet inşası.",
      category: "ADVERSARY SIMULATION",
      topics: ["RED TEAM", "TACTICAL MINDSET", "EVASION", "SIMULATION"],
      shopierUrl: "#"
    },
    {
      id: "04",
      index: "04 / 07",
      title: "İnternetin Anatomisi",
      subtitle: "Protokoller, Altyapı ve Veri İletişimi",
      slug: "internetin-anatomisi",
      cover: "images/books/04-internetin-anatomisi.jpg",
      description: "TCP/IP'den DNS'e, BGP'den TLS şifrelemesine kadar interneti ayakta tutan mühendislik omurgasının derin analizi.",
      category: "NETWORKING & PROTOCOLS",
      topics: ["NETWORKING", "TCP/IP", "DNS", "TLS / SSL", "ROUTING"],
      shopierUrl: "#"
    },
    {
      id: "05",
      index: "05 / 07",
      title: "Kırılgan Sistemler",
      subtitle: "Siber Güvenliğin Mühendislik Felsefesi",
      slug: "kirilgan-sistemler",
      cover: "images/books/05-kirilgan-sistemler.jpg",
      description: "Yazılım mimarilerinde hata payı, karmaşıklığın getirdiği zafiyetler ve dayanıklı sistem tasarımı felsefesi.",
      category: "SYSTEM ARCHITECTURE",
      topics: ["PHILOSOPHY", "ARCHITECTURE", "RESILIENCE", "SECURITY DESIGN"],
      shopierUrl: "#"
    },
    {
      id: "06",
      index: "06 / 07",
      title: "Siber Güvenliğe Giriş",
      subtitle: "Sıfırdan Başlayanlar İçin Temel Rehber",
      slug: "siber-guvenlige-giris",
      cover: "images/books/06-siber-guvenlige-giris.jpg",
      description: "Temel kavramlardan pratik laboratuvar ortamlarına, sağlam bir temel kurmak isteyenler için adım adım başlangıç.",
      category: "FUNDAMENTALS",
      topics: ["BASICS", "SECURITY LABS", "OSINT", "LINUX / CLI"],
      shopierUrl: "#"
    },
    {
      id: "07",
      index: "07 / 07",
      title: "Kırılmaz Defter: Blockchain'in Şifresi",
      subtitle: "Dağıtık Defter Teknolojisi ve Kriptografi",
      slug: "kirilmaz-defter-blockchain",
      cover: "images/books/07-kirilmaz-defter.jpg",
      description: "Kriptografik özet fonksiyonları, konsensüs algoritmaları ve dağıtık defter teknolojisinin matematiksel temeli.",
      category: "CRYPTOGRAPHY & BLOCKCHAIN",
      topics: ["BLOCKCHAIN", "CRYPTOGRAPHY", "SMART CONTRACTS", "CONSENSUS"],
      shopierUrl: "#"
    }
  ];

  global.booksData = booksData;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = booksData;
  }
})(typeof window !== 'undefined' ? window : this);
