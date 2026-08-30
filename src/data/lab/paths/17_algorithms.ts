import { PathItem } from '../../../types/lab';

export const algorithmsPath: PathItem = {
  id: "path-17",
  code: "17",
  slug: "algorithms",
  title: "ALGORİTMALAR VE VERİ YAPILARI",
  shortTitle: "ALGORİTMALAR",
  tagline: "Verimli ve güvenli yazılım tasarımının algoritmasal temelleri.",
  description: "Sıralama, arama, hash tabloları, ağaçlar ve graflar — güvenlik perspektifiyle.",
  accentColor: "#0EA5E9",
  level: "FOUNDATION",
  order: 17,
  modules: [
    {
      id: "mod-17-01",
      code: "01",
      slug: "data-structures",
      pathSlug: "algorithms",
      title: "TEMEL VERİ YAPILARI",
      description: "Bellek organizasyonu ve karmaşıklık analizi.",
      order: 1,
      topics: [
        {
          id: "top-17-01-01",
          code: "01",
          slug: "hash-tables",
          pathSlug: "algorithms",
          moduleSlug: "data-structures",
          title: "Hash Tabloları ve Çarpışma Zafiyetleri",
          subtitle: "O(1) Erişim Hızından Hash Collision DoS Saldırılarına",
          shortDescription: "Anahtar-değer eşleşmesi, hash fonksiyonları ve HashDoS riski.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. TANIM VE MEKANİZMA", content: "Hash tablosu, verileri anahtar-değer (key-value) çiftleri halinde saklayan ve ortalama O(1) erişim süresi sunan veri yapısıdır." },
            { id: "sec-02", code: "02", title: "2. HASH FONKSİYONU", content: "Girdiyi sabit uzunlukta bir indekse dönüştürür. `index = hash(key) % array_size` formülü ile dizi indeksi belirlenir." },
            { id: "sec-03", code: "03", title: "3. ÇARPIŞMA (COLLISION) ÇÖZÜMLERİ", content: "Aynı indekse denk gelen veriler için Chaining (Bağlı liste) veya Open Addressing (Linear Probing) yöntemleri kullanılır." },
            { id: "sec-04", code: "04", title: "4. HASH DOS SALDIRILARI", content: "Saldırganlar aynı hash değerini üreten binlerce istek atarak O(1) karmaşıklığı O(N)'e düşürür ve CPU'yu felç eder (HashDoS)." },
            { id: "sec-05", code: "05", title: "5. SIPHASH VE RASTGELE TOHUM", content: "HashDoS engellemek için modern diller (Python, Rust, Go) SipHash algoritmasını ve rastgele anahtarlama (random seed) kullanır." },
            { id: "sec-06", code: "06", title: "6. ZAMANLAMA SALDIRILARI (TIMING ATTACKS)", content: "String karşılaştırması anında ilk hatalı karakterde durursa (short-circuit), zaman analiziyle gizli anahtarlar çözülebilir." },
            { id: "sec-07", code: "07", title: "7. CONSTANT-TIME COMPARISON", content: "Kriptografik ve güvenlik kritik hash kontrolleri `memcmp` yerine `HMAC.equal()` gibi sabit zamanlı fonksiyonlarla yapılmalıdır." },
            { id: "sec-08", code: "08", title: "8. BELLEK TÜKETİMİ VE GARBAGE COLLECTION", content: "Büyük hash tabloları silindiğinde bellek sızıntıları veya yetersiz temizlik durumları oluşabilir." },
            { id: "sec-09", code: "09", title: "9. UYGULAMA ÖRNEĞİ", content: "Python `dict` yapısı SipHash24 kullanır ve her süreç başlangıcında tohumu yeniler." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Hash tabloları hızlıdır ancak algoritma karmaşıklığı saldırılarına açık yapılandırılmamalıdır." }
          ],
          summary: ["HashDoS CPU kaynaklarını tüketebilir.", "Sabit zamanlı karşılaştırma kritik şarttır."],
          practice: {
            id: "prac-17-01-01",
            prompt: "Hash tablosunda en kötü durum karmaşıklığı (Worst-Case Time Complexity) nedir?",
            options: [
              { id: "a", text: "O(1)" },
              { id: "b", text: "O(log N)" },
              { id: "c", text: "O(N)" },
              { id: "d", text: "O(N^2)" }
            ],
            correctAnswer: "c",
            explanation: "Tüm elemanlar aynı indekse düşerse (çarpışma) arama süresi O(N)'e yükselir."
          }
        }
      ]
    }
  ]
};
