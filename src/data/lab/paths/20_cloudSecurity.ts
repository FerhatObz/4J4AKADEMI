import { PathItem } from '../../../types/lab';

export const cloudSecurityPath: PathItem = {
  id: "path-20",
  code: "20",
  slug: "cloud-security",
  title: "BULUT GÜVENLİĞİ",
  shortTitle: "CLOUD",
  tagline: "AWS, Azure, GCP güvenlik mimarisi ve bulut-native saldırı vektörleri.",
  description: "IAM yanlış yapılandırması, S3 bucket exposure, container kaçışı ve serverless güvenlik.",
  accentColor: "#38BDF8",
  level: "PRACTICAL",
  order: 20,
  modules: [
    {
      id: "mod-20-01",
      code: "01",
      slug: "aws-security",
      pathSlug: "cloud-security",
      title: "AWS GÜVENLİK MİMARİSİ",
      description: "Identity and Access Management ve bulut veri depolama.",
      order: 1,
      topics: [
        {
          id: "top-20-01-01",
          code: "01",
          slug: "aws-metadata-ssrf",
          pathSlug: "cloud-security",
          moduleSlug: "aws-security",
          title: "AWS EC2 Metadata Servisi ve IMDSv2",
          subtitle: "169.254.169.254 Adresinden IAM Rolü Sızdırma",
          shortDescription: "SSRF zafiyetleriyle EC2 Instance Metadata Service üzerinden geçici anahtar çalınması.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. INSTANCE METADATA SERVICE (IMDS) NEDİR?", content: "AWS EC2 sunucuları, kendi durumları ve atanan IAM rolleri hakkında bilgi almak için `http://169.254.169.254/` link-local IP adresini kullanır." },
            { id: "sec-02", code: "02", title: "2. IMDSv1 MEKANİZMASI VE ZAFİYETİ", content: "IMDSv1 sürümünde düz `GET` isteklerine doğrudan yanıt verilir. Web sunucusunda bir SSRF açığı varsa, saldırgan `http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLE_NAME` atarak AWS Access Key ve Secret Key alır." },
            { id: "sec-03", code: "03", title: "3. GEÇİCİ KİMLİK BİLGİLERİ (AWS STS)", content: "Çalınan anahtarlar `AccessKeyId`, `SecretAccessKey` ve `Token` içerir. Saldırgan bu bilgileri kendi bilgisayarındaki AWS CLI ortamına tanımlayarak AWS hesabına sızar." },
            { id: "sec-04", code: "04", title: "4. IMDSv2 KORUMASI (PUT REQUIREMENT)", content: "IMDSv2, öncelikle bir `PUT` isteği ile oturum tokenı (`X-aws-ec2-metadata-token`) alınmasını şart koşar. Çoğu basit SSRF sadece GET attığı için bu koruma etkilidir." },
            { id: "sec-05", code: "05", title: "5. HOP LIMIT AYARI", content: "Docker veya Kubernetes üzerinde çalışan konteynerlerden IMDS'e erişimi engellemek için TTL (Hop Limit) değeri 1 olarak ayarlanmalıdır." },
            { id: "sec-06", code: "06", title: "6. CAPITAL ONE HACK OLAYI", content: "Tarihin en büyük bulut sızıntılarından biri olan Capital One hack olayında, WAF üzerindeki SSRF ile IMDSv1 üzerinden S3 okuma yetkili IAM rolü sızdırılmıştır." },
            { id: "sec-07", code: "07", title: "7. LEAST PRIVILEGE PRENSİBİ", content: "EC2 sunucularına verilen IAM rolleri sadece ihtiyaç duyduğu kaynağa erişecek şekilde دار kısıtlanmalıdır (Wildcard `*` kullanılmamalıdır)." },
            { id: "sec-08", code: "08", title: "8. AWS GUARDDUTY DETECTİON", content: "AWS GuardDuty, EC2 dışındaki bir IP adresinden EC2 IAM rol anahtarlarının kullanıldığını tespit ettiğinde alarm üretir." },
            { id: "sec-09", code: "09", title: "9. HARDENING İLE IMDSv2 ZORLAMA", content: "AWS CLI ile `aws ec2 modify-instance-metadata-options --http-tokens required` komutu atılarak IMDSv1 kapatılır." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "IMDSv2 kullanımı ve en az ayrıcalık ilkesi bulut sunucu güvenliğinin ilk adımıdır." }
          ],
          summary: ["169.254.169.254 bulut metadata IP adresidir.", "IMDSv2 PUT token zorunluluğu ile SSRF koruması sağlar."],
          practice: {
            id: "prac-20-01-01",
            prompt: "IMDSv2 protokolünün IMDSv1'den temel farkı ve koruma mekanizması nedir?",
            options: [
              { id: "a", text: "Port numarasının 8080 yapılması" },
              { id: "b", text: "Öncelikle PUT isteği ile Session Token alınmasını şart koşması" },
              { id: "c", text: "Sadece HTTPS bağlantı kabul etmesi" },
              { id: "d", text: "Statik IP adresi kullanması" }
            ],
            correctAnswer: "b",
            explanation: "IMDSv2, X-aws-ec2-metadata-token başlığı almak için PUT isteği atılmasını zorunlu kılar; bu da basit GET tabanlı SSRF'leri engeller."
          }
        }
      ]
    }
  ]
};
