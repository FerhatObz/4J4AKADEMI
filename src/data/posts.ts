import { Post } from '../types';

export const postsData: Post[] = [
  {
    id: "01",
    title: "CAS Üçlüsü: Concurrency ve Atomik Operasyonlar",
    slug: "cas-uclusu-concurrency",
    category: "JAVA ENGINEERING",
    date: "2026-08-15",
    readTime: "6 MIN READ",
    description: "Compare-And-Swap mantığı, lock-free veri yapıları ve CPU seviyesinde atomik komutların çalışma prensibi.",
    cover: "images/blog/cas-concurrency.jpg",
    content: ""
  },
  {
    id: "02",
    title: "XSS'in Evrimi: DOM Clobbering ve Modern Savunmalar",
    slug: "xss-dom-clobbering",
    category: "WEB SECURITY",
    date: "2026-08-20",
    readTime: "8 MIN READ",
    description: "HTML5 standartlarında DOM manipülasyonu ile güvenlik kontrollerini baypas etme teknikleri ve Content Security Policy.",
    cover: "images/blog/xss-defense.jpg",
    content: ""
  }
];
