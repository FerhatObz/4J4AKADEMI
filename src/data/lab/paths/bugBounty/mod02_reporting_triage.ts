import { ModuleItem } from '../../../../types/lab';

export const mod02ReportingTriage: ModuleItem = {
  id: "mod-09-02",
  code: "02",
  slug: "reporting-triage",
  pathSlug: "bug-bounty",
  title: "NİTELİKLİ RAPORLAMA VE TRİYAJ İLETİŞİMİ",
  description: "CVSS Skorlama (v3.1/v4.0), İş Etkisi (Business Impact) Açıklaması, Adım Adım PoC Hazırlama ve Triyaj Anlaşmazlıklarını Çözme.",
  order: 2,
  topics: [
    {
      id: "top-09-02-01",
      code: "01",
      slug: "cvss-scoring-business-impact",
      pathSlug: "bug-bounty",
      moduleSlug: "reporting-triage",
      title: "1. CVSS v3.1/v4.0 Skorlama ve İş Etkisi (Business Impact)",
      subtitle: "Zafiyetin Finansal ve İtibar Riskini Şirkete Aktarma",
      shortDescription: "AV, AC, PR, UI, C, I, A metrikleri, CVSS vektör stringi ve 'Business Impact' yazım sanatı.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "İŞ ETKİSİ (BUSINESS IMPACT) NEDİR?",
          content: "Triyaj ekibi sadece 'Bu XSS zafiyetidir' cümlesine bakmaz. Raporunuzda 'Bu XSS sayesinde bir saldırgan müşteri oturum çerezlerini çalarak admin panelini ele geçirebilir ve veritabanını dışarı aktarabilir' şeklinde iş etkisini net yazmalısınız."
        }
      ],
      summary: ["Net iş etkisi (Business Impact) açıklamak rapor kabul oranını ve ödül miktarını artırır."]
    },
    {
      id: "top-09-02-02",
      code: "02",
      slug: "writing-perfect-poc-reports",
      pathSlug: "bug-bounty",
      moduleSlug: "reporting-triage",
      title: "2. Mükemmel PoC (Proof-of-Concept) Raporu Yazma Rehberi",
      subtitle: "Adım Adım Tekrarlanabilir (Reproducible) Ekran Görüntüleri ve curl İstekleri",
      shortDescription: "Açıklayıcı başlık, etkilenen uç nokta, adım adım tekrarlama talimatı ve çözüm önerisi.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "RAPOR ŞABLONU",
          content: "1. Başlık: [Zafiyet Türü] - [Etkilenen Sayfa/Parametre] -> [Kısa Etki]\n2. Zafiyet Tanımı\n3. Adım Adım Tekrarlama Talimatı (Step-by-Step Repro Steps)\n4. cURL / Burp Suite İsteği\n5. İş Etkisi (Impact)\n6. Çözüm Önerisi (Remediation)"
        }
      ],
      summary: ["Adım adım anlaşılır ve tekrarlanabilir PoC yazmak triyaj süresini hızlandırır."]
    },
    {
      id: "top-09-02-03",
      code: "03",
      slug: "module-02-summary-review",
      pathSlug: "bug-bounty",
      moduleSlug: "reporting-triage",
      title: "3. Modül Değerlendirmesi: Reporting & Triage Özet & Test",
      subtitle: "Modül 02 Bütünsel Sınavı",
      shortDescription: "CVSS skorlama ve PoC yazım testi.",
      order: 3,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "CVSS metriklerini, İş Etkisi yazımını ve nitelikli PoC raporlama adımlarını öğrendin." }
      ],
      summary: ["Modül 02 tamamlandı. Bug Bounty Patikası Başarıyla Tamamlandı!"],
      practice: {
        id: "prac-09-02-03",
        prompt: "Bug Bounty raporunun triyaj aşamasında daha hızlı onaylanmasını ve ödül oranının artmasını sağlayan en önemli unsur hangisidir?",
        options: [
          { id: "a", text: "Çok uzun romantik yazılar yazmak" },
          { id: "b", text: "Net İş Etkisi (Business Impact) ve tekrarlanabilir (reproducible) PoC adımları sunmak" },
          { id: "c", text: "Sadece ekran görüntüsü koyup hiç açıklama yazmamak" },
          { id: "d", text: "Zafiyeti sosyal medyada duyurmak" }
        ],
        correctAnswer: "b",
        explanation: "Triyaj uzmanları raporun kolayca doğrulanabilir (reproducible) olmasına ve iş etkisinin net açıklanmasına önem verir."
      }
    }
  ]
};
