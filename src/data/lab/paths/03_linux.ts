import { PathItem } from '../../../types/lab';
import { mod01LinuxBasics } from './linux/mod01_basics';
import { mod02FilesystemPermissions } from './linux/mod02_filesystem_permissions';
import { mod03ProcessPrivesc } from './linux/mod03_process_privesc';

export const linuxPath: PathItem = {
  id: "path-03",
  code: "03",
  slug: "linux-fundamentals",
  title: "LINUX SYSTEM & SECURITY",
  shortTitle: "LINUX",
  tagline: "Linux komut satırı, dosya hiyerarşisi, kullanıcı izinleri, SUID ve yetki yükseltme (Privilege Escalation).",
  description: "Sıfırdan başlayanlar ve güvenlik uzmanları için derinlemesine Linux işletim sistemi: Bash kabuğu, CLI navigasyonu, FHS hiyerarşisi, chmod rwx matrisi, /etc/shadow güvenliği, SUID biti, GTFOBins ve sudoers yetki yükseltme teknikleri.",
  accentColor: "#F97316", // Orange
  level: "FOUNDATION",
  order: 3,
  recommendedBookId: "siber-guvenlige-giris",
  finalBookMessage: "Linux komut satırı ve sistem güvenliği konularını pekiştirmek için referans eser.",
  modules: [
    mod01LinuxBasics,
    mod02FilesystemPermissions,
    mod03ProcessPrivesc
  ]
};
