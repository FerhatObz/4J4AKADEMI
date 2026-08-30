import { PathItem } from '../../../types/lab';
import { mod01Architecture } from './computer/mod01_architecture';
import { mod02Cpu } from './computer/mod02_cpu';
import { mod03Memory } from './computer/mod03_memory';
import { mod04Storage } from './computer/mod04_storage';
import { mod05Motherboard } from './computer/mod05_motherboard';
import { mod06Binary } from './computer/mod06_binary';
import { mod07Instructions } from './computer/mod07_instructions';
import { mod08Boot } from './computer/mod08_boot';
import { mod09Os } from './computer/mod09_os';
import { mod10Processes } from './computer/mod10_processes';
import { mod11Filesystem } from './computer/mod11_filesystem';
import { mod12Security } from './computer/mod12_security';

export const computerPath: PathItem = {
  id: "path-00",
  code: "00",
  slug: "computer-fundamentals",
  title: "COMPUTER FUNDAMENTALS",
  shortTitle: "COMPUTERS",
  tagline: "Yazılım ve siber güvenlikten önce donanım mimarisini ve bellek yapısını çöz.",
  description: "Sıfırdan ileri düzeye 12 devasa modül: Mimari, CPU, Bellek, Depolama, Anakart, İkili Sistem, Makine Kodu, Önyükleme, İşletim Sistemleri, Süreçler, Dosya Sistemleri ve Siber Güvenlik Temelleri.",
  accentColor: "#3B82F6", // Blue
  level: "FOUNDATION",
  order: 0,
  recommendedBookId: "kirilgan-sistemler",
  finalBookMessage: "Bilgisayar mimarisi ve kırılgan sistem mekanizmalarını derinlemesine incelemek için ana referans kitabı.",
  modules: [
    mod01Architecture,
    mod02Cpu,
    mod03Memory,
    mod04Storage,
    mod05Motherboard,
    mod06Binary,
    mod07Instructions,
    mod08Boot,
    mod09Os,
    mod10Processes,
    mod11Filesystem,
    mod12Security
  ]
};
