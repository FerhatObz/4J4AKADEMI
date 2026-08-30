import { PathItem } from '../../../types/lab';

export const defensivePath: PathItem = {
  id: "path-11",
  code: "11",
  slug: "defensive-security",
  title: "DEFENSIVE SECURITY",
  shortTitle: "DEFENSIVE",
  tagline: "Loglama, izleme, SIEM, IDS/IPS ve olay müdahalesi.",
  description: "SOC operasyonları, Splunk/ELK analizi, Sigma kuralları, EDR telemetrisi ve dijital adli bilişim (DFIR).",
  accentColor: "#14B8A6", // Teal
  level: "ADVANCED",
  order: 11,
  modules: [
    {
      id: "mod-11-01",
      code: "01",
      slug: "soc-siem-operations",
      pathSlug: "defensive-security",
      title: "SOC OPERASYONLARI & SIEM",
      description: "Log korelasyonu, Sigma tespit kuralları ve alarm triyajı.",
      order: 1,
      topics: [
        {
          id: "top-11-01-01",
          code: "01",
          slug: "sigma-rules-detection",
          pathSlug: "defensive-security",
          moduleSlug: "soc-siem-operations",
          title: "Sigma Kuralları ile Tehdit Tespiti",
          subtitle: "Evrensel SIEM Kural Formatı",
          shortDescription: "Saldırgan tekniklerini Splunk, QRadar ve Elastic için ortak dilde yazma.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "SIGMA STANDARDI",
              content: "Sigma, log analizinde kuralları YAML formatında standartlaştırır. Örneğin `powershell.exe -enc` (Base64 komut çalıştırma) tespit kuralı Sigma ile yazılıp herhangi bir SIEM sorgusuna otomatik derlenebilir."
            }
          ],
          summary: [
            "Sigma tespit kurallarını ortak YAML formatında tutar.",
            "SIEM bağımsız tehdit avcılığı sağlar."
          ]
        }
      ]
    }
  ]
};
