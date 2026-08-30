import { PathItem } from '../../../types/lab';

export const programmingPath: PathItem = {
  id: "path-04",
  code: "04",
  slug: "programming-fundamentals",
  title: "PROGRAMMING & SECURE CODE",
  shortTitle: "PROGRAMMING",
  tagline: "Programlama mantığı, bellek adresleme, pointerlar ve güvenli kodlama esasları.",
  description: "Başlangıç seviyesinden orta seviyeye: Değişkenler, kontrol yapıları, pointerlar, bellek adresleme, girdi doğrulama ve bağlam duyarlı çıktı kodlama.",
  accentColor: "#EAB308",
  level: "FOUNDATION",
  order: 4,
  recommendedBookId: "siber-guvenlige-giris",
  modules: [
    {
      id: "mod-04-01",
      code: "01",
      slug: "programming-basics",
      pathSlug: "programming-fundamentals",
      title: "SIFIRDAN PROGRAMLAMA MANTIĞI",
      description: "Başlangıç seviyesi: Değişkenler, veri tipleri, döngüler ve koşullu ifadeler.",
      order: 1,
      topics: [
        {
          id: "top-04-01-01",
          code: "01",
          slug: "logic-variables",
          pathSlug: "programming-fundamentals",
          moduleSlug: "programming-basics",
          title: "1. Adım: Değişkenler & Kontrol Akışı",
          subtitle: "Algoritma Kurma: If/Else, Döngüler ve Fonksiyonlar",
          shortDescription: "Programlama mantığının yapı taşları ve temel algoritma tasarımı.",
          order: 1,
          readTime: "5 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "PROGRAMLAMA NEDİR?", content: "Programlama, bilgisayara belirli bir problemi çözmesi için verilen adım adım talimatlar silsilesidir." }
          ],
          summary: ["Yazılım algoritmik mantık yürütmedir."]
        }
      ]
    },
    {
      id: "mod-04-02",
      code: "02",
      slug: "pointers-memory-addressing",
      pathSlug: "programming-fundamentals",
      title: "POINTERLAR VE BELLEK YÖNETİMİ",
      description: "Başlangıç-Orta: C/C++ pointer mimarisi, bellek adresleri ve referanslar.",
      order: 2,
      topics: [
        {
          id: "top-04-02-01",
          code: "01",
          slug: "pointers-intro",
          pathSlug: "programming-fundamentals",
          moduleSlug: "pointers-memory-addressing",
          title: "2. Adım: Pointerlar (İşaretçiler) ve Bellek Adresleri",
          subtitle: "Bellekte Doğrudan Adres İşleme",
          shortDescription: "Pointer mantığı, dereferencing ve bellek adresi işaretleme.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "POINTER NEDİR?", content: "Pointer, başka bir değişkenin değerini değil, onun RAM'deki bellek adresini saklayan özel bir değişkendir." }
          ],
          summary: ["Pointerlar bellek adreslerini tutan özel değişkenlerdir."]
        }
      ]
    },
    {
      id: "mod-04-03",
      code: "03",
      slug: "secure-coding-practices",
      pathSlug: "programming-fundamentals",
      title: "GÜVENLİ KODLAMA VE YAZILIM ZAFİYETLERİ",
      description: "Orta seviye: Girdi doğrulama (Input Validation) ve Context-Aware Output Encoding.",
      order: 3,
      topics: [
        {
          id: "top-04-03-01",
          code: "01",
          slug: "input-output-sanitization",
          pathSlug: "programming-fundamentals",
          moduleSlug: "secure-coding-practices",
          title: "3. Adım: Girdi Doğrulama & Çıktı Kodlama",
          subtitle: "Girdi Güvenliği ve Kaçış Karakterleri",
          shortDescription: "Tüm kullanıcı girdilerini güvensiz kabul etme prensibi.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "GÜVENLİ KODLAMA PRENSİBİ", content: "Kullanıcıdan gelen hiçbir girdiye asla güvenilmemelidir. Whitelist girdi doğrulama ile sadece beklenen karakterler kabul edilmelidir." }
          ],
          summary: ["Tüm girdiler güvensiz kabul edilmelidir."]
        }
      ]
    }
  ]
};
