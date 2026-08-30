import { PathItem } from '../../../types/lab';

export const mathematicsPath: PathItem = {
  id: "path-16",
  code: "16",
  slug: "mathematics",
  title: "MATEMATİKSEL TEMELLER",
  shortTitle: "MATEMATİK",
  tagline: "Güvenlik mühendisinin ihtiyaç duyduğu sayı teorisi, olasılık ve mantık.",
  description: "Modüler aritmetik, asal sayı özellikleri, Boolean cebiri, Bayes teoremi ve kombinatorik.",
  accentColor: "#6366F1",
  level: "FOUNDATION",
  order: 16,
  modules: [
    {
      id: "mod-16-01",
      code: "01",
      slug: "number-theory",
      pathSlug: "mathematics",
      title: "SAYI TEORİSİ VE MODÜLER ARİTMETİK",
      description: "Asimetrik kriptografinin temelini oluşturan matematiksel bağıntılar.",
      order: 1,
      topics: [
        {
          id: "top-16-01-01",
          code: "01",
          slug: "modular-arithmetic",
          pathSlug: "mathematics",
          moduleSlug: "number-theory",
          title: "Modüler Aritmetik ve Kriptografideki Rolü",
          subtitle: "Saat Aritmetiğinden Asimetrik Anahtar Üretimine",
          shortDescription: "Mod kavramı, denkliğin doğası ve RSA/DH algoritmalarındaki işlevi.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. TANIM VE TEMEL KAVRAMLAR", content: "Modüler aritmetik, sayıların belirli bir 'modulus' değerine bölündüğünde kalanlarla yapılan aritmetik işlem sistemidir. `a ≡ b (mod n)` ifadesi, `a` ve `b` sayılarının `n` ile bölündüğünde aynı kalanı verdiğini gösterir." },
            { id: "sec-02", code: "02", title: "2. TARİHSEL GEÇMİŞ VE GAUSS", content: "Carl Friedrich Gauss tarafından Disquisitiones Arithmeticae eserinde formalize edilmiştir. Günümüzde şifrelemenin en temel matematiksel aracıdır." },
            { id: "sec-03", code: "03", title: "3. TOPLAMA VE ÇARPMA ÖZELLİKLERİ", content: "(a + b) mod n = ((a mod n) + (b mod n)) mod n ve (a * b) mod n = ((a mod n) * (b mod n)) mod n mantığı ile büyük sayılarla taşma olmadan işlem yapılır." },
            { id: "sec-04", code: "04", title: "4. MODÜLER TERS (MODULAR INVERSE)", content: "a * x ≡ 1 (mod n) denkliğini sağlayan x değerine a'nın mod n'e göre çarpmaya göre tersi denir. Sadece ebob(a, n) = 1 durumunda mevcuttur." },
            { id: "sec-05", code: "05", title: "5. TEK YÖNLÜ FONKSİYONLAR", content: "Modüler üs alma `y = g^x mod p` kolayca hesaplanırken, `y`, `g` ve `p` bilindiğinde `x` değerini bulmak (Ayrık Logaritma Problemi) aşırı zordur." },
            { id: "sec-06", code: "06", title: "6. KRİPTOGRAFİK UYGULAMALAR", content: "Diffie-Hellman anahtar değişimi ve RSA açık anahtarlı şifreleme tamamen modüler aritmetik üzerine kuruludur." },
            { id: "sec-07", code: "07", title: "7. GERÇEK DÜNYA VE YAZILIM", content: "BigInteger kütüphaneleri şifreleme yaparken modüler üs alma işlemlerini `pow(g, x, p)` şeklinde optimize algoritmalarla çalıştırır." },
            { id: "sec-08", code: "08", title: "8. SIK YAPILAN HATALAR", content: "Negatif sayıların mod işleminde dil bağımlı davranışları (C/Python farkları) güvenlik zafiyetlerine yol açabilir." },
            { id: "sec-09", code: "09", title: "9. PYTHON ÖRNEK KODU", content: "Python ile modüler üs alma: `pow(base, exp, mod)` doğrudan dilde optimize edilmiş C fonksiyonunu çağırır." },
            { id: "sec-10", code: "10", title: "10. ÖZET VE PRATİK ÇIKARIMLAR", content: "Modüler aritmetik, sınırlı bellek alanlarında devasa sayılarla güvenli hesaplama yapmanın tek yoludur." }
          ],
          summary: ["Modüler aritmetik kalanlar dünyasıdır.", "Ayrık logaritma probleminin temelidir."],
          practice: {
            id: "prac-16-01-01",
            prompt: "17 ≡ x (mod 5) denkliğinde x değeri kaçtır?",
            options: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" }
            ],
            correctAnswer: "b",
            explanation: "17 sayısı 5'e bölündüğünde kalan 2 olur (17 = 3 * 5 + 2)."
          }
        }
      ]
    }
  ]
};
