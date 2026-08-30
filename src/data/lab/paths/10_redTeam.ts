import { PathItem } from '../../../types/lab';
import { mod01ActiveDirectory } from './redTeam/mod01_active_directory';
import { mod02EdrC2 } from './redTeam/mod02_edr_c2';

export const redTeamPath: PathItem = {
  id: "path-10",
  code: "10",
  slug: "red-team",
  title: "RED TEAM",
  shortTitle: "RED TEAM",
  tagline: "Saldırgan perspektifi, Active Directory sızma operasyonları, EDR bypass ve C2 altyapıları.",
  description: "Gelişmiş Kırmızı Takım Operasyonları: Active Directory mimarisi, Kerberos protokolü, Kerberoasting (SPN tespiti & Hashcat offline cracking), AS-REP Roasting (DONT_REQ_PREAUTH), Pass-the-Hash (PtH), Golden Ticket (KRBTGT hash), DCSync (MS-DRSR), C2 altyapısı (Cobalt Strike / Havoc), Malleable C2 profilleri ve EDR Bypass (User-land NTDLL unhooking & Direct Syscalls).",
  accentColor: "#E11D48", // Crimson
  level: "ADVANCED",
  order: 10,
  recommendedBookId: "red-team-gibi-dusunmek",
  finalBookMessage: "Saldırgan bakış açısı ve Red Team operasyon simülasyonları için referans rehber eser.",
  modules: [
    mod01ActiveDirectory,
    mod02EdrC2
  ]
};
