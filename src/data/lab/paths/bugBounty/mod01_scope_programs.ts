import { ModuleItem } from '../../../../types/lab';

export const mod01BountyScope: ModuleItem = {
  id: "mod-09-01",
  code: "01",
  slug: "bounty-programs-scope",
  pathSlug: "bug-bounty",
  title: "PROGRAM TÜRLERİ & SCOPE ANALİZİ",
  description: "HackerOne, Bugcrowd, Intigriti, Public/Private Programlar, VDP vs BBP, Safe Harbor ve Yasal Test Sınırları.",
  order: 1,
  topics: [
    {
      id: "top-09-01-01",
      code: "01",
      slug: "scope-rules-safe-harbor",
      pathSlug: "bug-bounty",
      moduleSlug: "bounty-programs-scope",
      title: "1. Scope Kuralları ve Yasal Güvenli Liman (Safe Harbor)",
      subtitle: "In-Scope vs Out-of-Scope Sınırları ve Altın Kural",
      shortDescription: "In-scope varlıklar, Out-of-scope yasaklar, DoS engelleri ve Altın Kural (Stop at PoC).",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "SCOPE KURALLARI VE YASAL ÇERÇEVE",
          content: "Bug Bounty programlarında şirket hangi domain, IP veya mobil uygulamanın test edilebileceğini 'Scope' tablosunda açıkça belirtir. Scope dışında kalan varlıklara saldırmak yasal açıdan suç teşkil edebilir."
        },
        {
          id: "sec-02",
          code: "02",
          title: "ALTIN KURAL: STOP AT PROOF OF CONCEPT (PoC)",
          content: "Bir zafiyet bulduğunuzda (örneğin SQLi veya RCE), veritabanının tamamını indirmeyin veya sunucuyu tahrip etmeyin. Sadece zafiyetin varlığını kanıtlayan tek bir zararsız komut (`version()`, `id`) çalıştırıp testi derhal durdurun ve rapor yazın."
        }
      ],
      summary: [
        "Scope dışı hedeflere saldırmak yasal risk taşır.",
        "PoC elde edildiği anda test durdurulmalı ve rapor yazılmalıdır."
      ],
      practice: {
        id: "prac-09-01-01",
        prompt: "Bir Bug Bounty avcısının hedeften yetkisiz kod çalıştırma (RCE) zafiyeti bulduğunda uyması gereken altın kural (Gold Rule) hangisidir?",
        options: [
          { id: "a", text: "Veritabanındaki tüm tabloları kendi bilgisayarına indirmek" },
          { id: "b", text: "Zafiyeti kanıtlayan tek bir zararsız komut çalıştırıp testi durdurmak ve raporlamak" },
          { id: "c", text: "Sunucuyu yeniden başlatmak" },
          { id: "d", text: "Zafiyeti sosyal medyada paylaşmak" }
        ],
        correctAnswer: "b",
        explanation: "Etik ve yasal olarak zafiyet kanıtlandığı anda (PoC) veri ihlaline devam edilmeden test durdurulmalı ve şirket bilgilendirilmelidir."
      }
    },
    {
      id: "top-09-01-02",
      code: "02",
      slug: "public-vs-private-bounty-programs",
      pathSlug: "bug-bounty",
      moduleSlug: "bounty-programs-scope",
      title: "2. Public vs Private Bug Bounty Programları",
      subtitle: "Davetiye (Invite) Kazanma ve VDP Metodolojisi",
      shortDescription: "Herkese açık programlar, özel davetiyeli (Private) programlar ve Reputasyon puanlama sistemleri.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "PRIVATE PROGRAMLARIN AVANTAJLARI",
          content: "Private programlar sadece sınırlı sayıda davet edilen araştırmacılara açıktır. Rekabet az olduğu için zafiyet bulma oranı ve ödül (Bounty) miktarı çok daha yüksektir. Özel davetiye kazanmak için Public VDP (Vulnerability Disclosure Program) programlarında düzenli ve kaliteli raporlar sunmak gerekir."
        }
      ],
      summary: ["Private programlar az rekabet ve yüksek ödül sunar; davetiye reputasyon puanı ile kazanılır."]
    },
    {
      id: "top-09-01-03",
      code: "03",
      slug: "module-01-summary-review",
      pathSlug: "bug-bounty",
      moduleSlug: "bounty-programs-scope",
      title: "3. Modül Değerlendirmesi: Bounty Scope Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı",
      shortDescription: "Scope, Safe Harbor ve VDP test özeti.",
      order: 3,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Scope kurallarını, Safe Harbor güvencesini ve PoC aşamasında testi durdurma ilkesini öğrendin." }
      ],
      summary: ["Modül 01 tamamlandı. Sıradaki hedef: 02 - KEŞİF VE HEDEF HARİTALAMA."],
      practice: {
        id: "prac-09-01-03",
        prompt: "Para ödülü ödemeyen ancak zafiyetlerin yasal olarak bildirildiği ve itibar puanı kazandıran program türü hangisidir?",
        options: [
          { id: "a", text: "VDP (Vulnerability Disclosure Program)" },
          { id: "b", text: "BBP (Paid Bug Bounty Program)" },
          { id: "c", text: "CTF Competition" },
          { id: "d", text: "Pentest Contract" }
        ],
        correctAnswer: "a",
        explanation: "VDP programları nakit ödül vermez ancak güvenli bildirim kanalı ve davetiye kazanımı için itibar puanı sağlar."
      }
    }
  ]
};
