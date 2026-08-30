import { PathItem } from '../../../types/lab';

export const socialEngineeringPath: PathItem = {
  id: "path-23",
  code: "23",
  slug: "social-engineering",
  title: "SOSYAL MÜHENDİSLİK",
  shortTitle: "SOSYAL MÜ",
  tagline: "İnsan psikolojisini istismar eden saldırılar ve kurumsal savunma.",
  description: "Phishing, spear phishing, vishing, pretexting, OSINT ile kişi profili ve eğitim tabanlı savunma.",
  accentColor: "#F97316",
  level: "CORE",
  order: 23,
  modules: [
    {
      id: "mod-23-01",
      code: "01",
      slug: "phishing-campaigns",
      pathSlug: "social-engineering",
      title: "PHISHING VE E-POSTA SAHTECİLİĞİ",
      description: "Oltalama teknikleri ve e-posta doğrulama protokolleri.",
      order: 1,
      topics: [
        {
          id: "top-23-01-01",
          code: "01",
          slug: "email-spoofing",
          pathSlug: "social-engineering",
          moduleSlug: "phishing-campaigns",
          title: "E-posta Başlık Sahteciliği (Email Spoofing) & SPF/DKIM/DMARC",
          subtitle: "Gönderen Adresi Manipülasyonu ve Alan Adı Doğrulama Kalkanları",
          shortDescription: "SMTP protokolünün kimlik doğrulamasız yapısı ve DMARC koruma mekanizmaları.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. SMTP VE GÖNDEREN SAHTECİLİĞİ", content: "SMTP (Simple Mail Transfer Protocol) 1980'lerde tasarlanırken gönderen adresini doğrulayan bir mekanizmaya sahip değildi. Saldırgan `From: ceo@company.com` yazarak e-posta atabilir." },
            { id: "sec-02", code: "02", title: "2. SPF (SENDER POLICY FRAMEWORK)", content: "Domain sahibinin DNS kayıtlarına (TXT) hangi IP adreslerinin kendi adına mail atabileceğini yazdığı korumadır." },
            { id: "sec-03", code: "03", title: "3. DKIM (DOMAINKEYS IDENTIFIED MAIL)", content: "Giden e-postaların başlığına kriptografik bir dijital imza ekler. Alıcı sunucu DNS'teki public key ile imzanın bozulup bozulmadığını kontrol eder." },
            { id: "sec-04", code: "04", title: "4. DMARC (DOMAIN-BASED MESSAGE AUTHENTICATION)", content: "SPF ve DKIM sonuçlarını birleştirir. Mail başarısız olursa alıcı sunucuya ne yapacağını söyler: `p=none` (izle), `p=quarantine` (spama at) veya `p=reject` (reddet)." },
            { id: "sec-05", code: "05", title: "5. DMARC ALIGNMENT (HİZALAMA)", content: "SMTP `MAIL FROM` ile görünür `From:` alanının aynı domain olması zorunluluğudur." },
            { id: "sec-06", code: "06", title: "6. SPEAR PHISHING İLE DMARC BYPASS", content: "Saldırganlar tam aynı domaini taklit edemediğinde Typosquatting (örneğin `c0mpany.com`) veya benzer harflerle harici domain alıp SPF/DKIM geçerler." },
            { id: "sec-07", code: "07", title: "7. EMAIL HEADER INJECTION", content: "Web iletişim formlarındaki girdilerin `\\r\\n` ile filtrelenmeyip `Bcc:` başlıkları enjekte edilerek mail sunucularının spam relay yapılmasıdır." },
            { id: "sec-08", code: "08", title: "8. DMARC RAPORLAMA", content: "Domain sahiplerine günlük XML raporları yollanarak yetkisiz mail gönderen IP'ler tespit edilir." },
            { id: "sec-09", code: "09", title: "9. CHECKING TOOLS", content: "`dig TXT _dmarc.target.com` komutu ile bir kurumun DMARC politikası taranabilir." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "DMARC p=reject politikası uygulanmadan e-posta sahteciliğinin önüne geçilemez." }
          ],
          summary: ["SMTP doğrulamasız bir protokoldür.", "SPF, DKIM ve DMARC üçlüsü e-posta sahteciliğini engeller."],
          practice: {
            id: "prac-23-01-01",
            prompt: "E-postaların yolda değiştirilmediğini doğrulayan kriptografik dijital imzalama protokolü hangisidir?",
            options: [
              { id: "a", text: "SPF" },
              { id: "b", text: "DKIM" },
              { id: "c", text: "DMARC" },
              { id: "d", text: "POP3" }
            ],
            correctAnswer: "b",
            explanation: "DKIM (DomainKeys Identified Mail), e-posta başlığına ve gövdesine asymmetric imza ekleyerek bütünlük ve kaynağı doğrular."
          }
        }
      ]
    }
  ]
};
