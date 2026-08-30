import { PathItem } from '../../../types/lab';
import { mod01BountyScope } from './bugBounty/mod01_scope_programs';
import { mod02ReportingTriage } from './bugBounty/mod02_reporting_triage';

export const bugBountyPath: PathItem = {
  id: "path-09",
  code: "09",
  slug: "bug-bounty",
  title: "BUG BOUNTY",
  shortTitle: "BUG BOUNTY",
  tagline: "Ödül avcılığı programları, zafiyet doğrulama ve profesyonel raporlama.",
  description: "HackerOne, Bugcrowd ve Intigriti platformlarında ödül avcılığı metodolojisi: Public/Private programlar, Scope ve Safe Harbor kuralları, Stop at PoC ilkesi, CVSS v3.1/v4.0 skorlama, İş Etkisi (Business Impact) yazımı ve triyaj iletişimi.",
  accentColor: "#EC4899", // Magenta
  level: "PRACTICAL",
  order: 9,
  recommendedBookId: "bug-bounty-ustalik-rehberi",
  finalBookMessage: "Bug bounty ve ödül avcılığı metodolojisinde uzmanlaşmak için ana kaynak rehber.",
  modules: [
    mod01BountyScope,
    mod02ReportingTriage
  ]
};
