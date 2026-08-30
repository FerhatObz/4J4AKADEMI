import { PathItem } from '../../../types/lab';

export const reconPath: PathItem = {
  id: "path-08",
  code: "08",
  slug: "reconnaissance",
  title: "RECONNAISSANCE",
  shortTitle: "RECON",
  tagline: "Hedef saldırı yüzeyini haritalama, varlık keşfi ve OSINT.",
  description: "Certificate Transparency logları, pasif DNS, ASN haritalama, port ve servis keşfi, web varlık envanterleme ve parametre madenciliği.",
  accentColor: "#EF4444", // Red
  level: "PRACTICAL",
  order: 8,
  recommendedBookId: "bug-bounty-ustalik-rehberi",
  modules: [
    {
      id: "mod-08-01",
      code: "01",
      slug: "passive-recon",
      pathSlug: "reconnaissance",
      title: "PASİF KEŞİF & OSINT",
      description: "Hedefe temas etmeden bilgi toplama, ASN, WHOIS ve Certificate Transparency.",
      order: 1,
      topics: [
        {
          id: "top-08-01-01",
          code: "01",
          slug: "certificate-transparency",
          pathSlug: "reconnaissance",
          moduleSlug: "passive-recon",
          title: "Certificate Transparency (CT) Logları",
          subtitle: "SSL/TLS Sertifikaları Üzerinden Subdomain Avcılığı",
          shortDescription: "crt.sh ile tüm alt alan adlarının pasif olarak çıkarılması.",
          order: 1,
          readTime: "5 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "CT LOGLARININ ÇALIŞMA MANTIĞI",
              content: "Bir şirket yeni bir subdomain (`admin-staging.target.com`) için SSL sertifikası aldığında, bu işlem zorunlu olarak halka açık Certificate Transparency loglarına yazılır. Hedefe tek bir paket atmadan şirketin tüm gizli sunucuları listelenebilir."
            }
          ],
          summary: [
            "CT logları pasif keşfin en güçlü kaynağıdır.",
            "crt.sh ve Censys ile tüm geçmiş sertifikalar taranır."
          ]
        }
      ]
    },
    {
      id: "mod-08-02",
      code: "02",
      slug: "active-recon-port-scan",
      pathSlug: "reconnaissance",
      title: "AKTİF KEŞİF & PORT TARAMA",
      description: "Nmap, Naabu, Masscan ve servis banner tespiti.",
      order: 2,
      topics: [
        {
          id: "top-08-02-01",
          code: "01",
          slug: "nmap-techniques",
          pathSlug: "reconnaissance",
          moduleSlug: "active-recon-port-scan",
          title: "Nmap Tarama Stratejileri & NSE",
          subtitle: "SYN Scan, Versiyon Tespiti (-sV) ve Script Motoru (-sC)",
          shortDescription: "Gelişmiş port tarama metodolojisi ve güvenlik duvarı atlatma.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "NMAP PROFESYONEL KULLANIMI",
              content: "`nmap -sS -sV -sC -T4 -p- target.com` komutu tüm 65535 portu SYN stealth ile tarar, açık portlardaki servislerin kesin versiyonlarını tespit eder ve varsayılan güvenlik açıklarını denetler."
            }
          ],
          summary: [
            "-sS hızlı ve gizlidir.",
            "-sV servis versiyonlarını, -sC scriptleri çalıştırır."
          ]
        }
      ]
    }
  ]
};
