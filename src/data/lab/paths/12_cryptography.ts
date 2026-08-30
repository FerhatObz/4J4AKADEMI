import { PathItem } from '../../../types/lab';

export const cryptographyPath: PathItem = {
  id: "path-12",
  code: "12",
  slug: "cryptography",
  title: "CRYPTOGRAPHY",
  shortTitle: "CRYPTOGRAPHY",
  tagline: "Şifreleme algoritmaları, asimetrik anahtarlar ve dijital imzalar.",
  description: "AES, RSA, ECC, Diffie-Hellman anahtar değişimi, TLS 1.3 ve özet fonksiyonları.",
  accentColor: "#A855F7", // Purple
  level: "ADVANCED",
  order: 12,
  recommendedBookId: "kirilmaz-defter-blockchain",
  modules: [
    {
      id: "mod-12-01",
      code: "01",
      slug: "modern-encryption",
      pathSlug: "cryptography",
      title: "MODERN ŞİFRELEME ALGORİTMALARI",
      description: "AES-GCM, RSA, Eliptik Eğriler (ECC) ve TLS 1.3 el sıkışması.",
      order: 1,
      topics: [
        {
          id: "top-12-01-01",
          code: "01",
          slug: "diffie-hellman-tls",
          pathSlug: "cryptography",
          moduleSlug: "modern-encryption",
          title: "Diffie-Hellman & Perfect Forward Secrecy",
          subtitle: "Güvensiz Kanal Üzerinde Güvenli Anahtar Üretimi",
          shortDescription: "TLS 1.3'te anahtar değişimi ve geçmiş trafiğin koruma altına alınması.",
          order: 1,
          readTime: "7 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "DİFFİE-HELLMAN MANTIĞI",
              content: "İki taraf (Client ve Server) açık kanalda birbirlerine açık anahtarlarını yollar ve kendi gizli anahtarlarıyla birleştirerek sadece kendilerinin bildiği ortak bir oturum anahtarı (Shared Secret) türetir. Araya giren dinleyici bu anahtarı asla hesaplayamaz."
            },
            {
              id: "sec-02",
              code: "02",
              title: "PERFECT FORWARD SECRECY (PFS)",
              content: "Her oturum için geçici (Ephemeral) anahtarlar üretilir (ECDHE). Gelecekte sunucunun ana özel anahtarı çalınsa bile, geçmişte kaydedilmiş TLS oturumları deşifre edilemez."
            }
          ],
          summary: [
            "Diffie-Hellman gizli anahtarı havadan iletmeden ortak anahtar türetir.",
            "PFS geçmiş trafiğin deşifre edilmesini engeller."
          ]
        }
      ]
    }
  ]
};
