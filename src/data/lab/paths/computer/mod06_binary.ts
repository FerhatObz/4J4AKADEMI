import { ModuleItem } from '../../../../types/lab';

export const mod06Binary: ModuleItem = {
  id: "mod-00-06",
  code: "06",
  slug: "binary-data-representation",
  pathSlug: "computer-fundamentals",
  title: "BINARY & DATA REPRESENTATION",
  description: "İkili sistem (Binary), Hexadecimal, Endianness (Little vs Big Endian), Integer Overflow, ASCII/UTF-8 ve Bitwise işlemler.",
  order: 6,
  topics: [
    {
      id: "top-00-06-01",
      code: "01",
      slug: "binary-number-system",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "1. İkili Sayı Sistemi (Binary) ve Transistör Mantığı",
      subtitle: "0 ve 1'lerin Matematiksel ve Elektriksel Dünyası",
      shortDescription: "Bit, Nibble, Byte kavramları, 2'lik tabandan 10'luk tabana dönüşüm.",
      order: 1,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BINARY SISTEM", content: "Bilgisayarlar 2'lik tabanda (Base-2) çalışır. Her basamak 2'nin kuvvetleridir (1, 2, 4, 8, 16, 32, 64, 128)." }
      ],
      summary: ["Binary 2'lik sayı sistemidir. 8 Bit = 1 Byte."]
    },
    {
      id: "top-00-06-02",
      code: "02",
      slug: "hexadecimal-system-debugging",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "2. Onaltılı (Hexadecimal) Sistem ve Bellek Gösterimi",
      subtitle: "0x00 - 0xFF Arası Bellek Adresleme",
      shortDescription: "Base-16 sayı sistemi, 0-9 ve A-F harfleri, Hex dump okuma.",
      order: 2,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "HEXADECIMAL NEDİR?", content: "16'lık taban (0-9 ve A-F), 4 bitlik (Nibble) ikili dizileri tek bir karakterle temsil ettiği için bellek adreslerini okumayı çok kolaylaştırır." }
      ],
      summary: ["Hexadecimal 16'lık tabandır, bellek adreslerinin standart gösterimidir."]
    },
    {
      id: "top-00-06-03",
      code: "03",
      slug: "endianness-little-vs-big",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "3. Endianness: Little-Endian vs Big-Endian Mimari",
      subtitle: "Baytların Bellekte Dizilim Sırası",
      shortDescription: "x86 Little-Endian dizilimi, Ağ protokolü Big-Endian (Network Byte Order) dizilimi.",
      order: 3,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ENDIANNESS NEDİR?", content: "Çok baytlı verilerin belleğe hangi sırayla yazılacağını belirler. x86_64 Little-Endian kullanır: En küçük anlamlı bayt (LSB) en küçük bellek adresine yazılır! (Örn: 0x12345678 -> 78 56 34 12)." }
      ],
      summary: ["x86 mimarisi Little-Endian kullanır (Ters bayt sırası). Ağ trafiği Big-Endian kullanır."]
    },
    {
      id: "top-00-06-04",
      code: "04",
      slug: "signed-unsigned-two-complement",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "4. İşaretli ve İşaretsiz Tam Sayılar: Two's Complement",
      subtitle: "Negatif Sayıların İkili Mantıkta Temsili",
      shortDescription: "Sign bit, 1'e tümleyen, 2'ye tümleyen (Two's Complement) ve negatif sayılar.",
      order: 4,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "TWO'S COMPLEMENT", content: "Negatif sayılar Two's Complement yöntemiyle saklanır: Sayının bitleri ters çevrilir (NOT) ve 1 eklenir." }
      ],
      summary: ["Two's complement negatif tamsayıların standart saklama metodudur."]
    },
    {
      id: "top-00-06-05",
      code: "05",
      slug: "integer-overflow-underflow",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "5. Integer Overflow ve Underflow Zafiyetleri",
      subtitle: "Sayı Sınırlarının Taşması ve Güvenlik Açıkları",
      shortDescription: "255 + 1 = 0 durumu, bakiyelerin negatiften pozitife sıçraması ve altyapı zafiyetleri.",
      order: 5,
      readTime: "7 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "INTEGER OVERFLOW", content: "8-bitlik işaretsiz bir sayı (Max 255) 1 artırıldığında sıfırlanır (0)! Bankacılık ve oyun içi satın alımlarda devasa güvenlik açıklarına yol açar." }
      ],
      summary: ["Integer overflow tamsayı sınırları aşıldığında değerin başa dönmesidir."]
    },
    {
      id: "top-00-06-06",
      code: "06",
      slug: "character-encoding-ascii-utf8",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "6. Karakter Kodlamaları: ASCII, Extended ASCII ve UTF-8",
      subtitle: "Metinlerin Baytlara Dönüşümü",
      shortDescription: "ASCII tablosu (0-127), UTF-8 değişken uzunluklu kodlama ve bom (Byte Order Mark).",
      order: 6,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "ASCII VE UTF-8", content: "ASCII her karakteri 7-bit/1-byte ile temsil eder. UTF-8 ise evrenseldir; 1 ile 4 bayt arasında dinamik uzunluk kullanır." }
      ],
      summary: ["UTF-8 web ve sistemlerin standart karakter kodlama protokolüdür."]
    },
    {
      id: "top-00-06-07",
      code: "07",
      slug: "base64-encoding-decoding",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "7. Base64 Kodlaması ve Veri Aktarımı",
      subtitle: "Binary Veriyi Metin Kanalından Geçirmek",
      shortDescription: "6-bit indeksleme, '=' padding karakteri ve Base64'ün ŞİFRELEME OLMADIĞI gerçeği.",
      order: 7,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "BASE64 KODLAMASI", content: "Base64 ikili veriyi (resim, dosya) metin formatına çevirir. KESİNLİKLE BİR ŞİFRELEME DEĞİLDİR! Herkes geri çözebilir." }
      ],
      summary: ["Base64 veri kodlama metodudur, şifreleme değildir."]
    },
    {
      id: "top-00-06-08",
      code: "08",
      slug: "floating-point-ieee-754",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "8. Kayanalı Sayılar (Floating Point) ve IEEE 754 Standardı",
      subtitle: "Ondalıklı Sayıların Bilgisayardaki İllüzyonu",
      shortDescription: "Sign bit, Exponent, Mantissa ve 0.1 + 0.2 != 0.3 hassasiyet hatası.",
      order: 8,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "IEEE 754", content: "Ondalıklı sayılar ikili sistemde tam olarak temsil edilemez. Küçük yuvarlama hataları finansal yazılımlarda kritik zafiyet yaratır." }
      ],
      summary: ["Ondalıklı sayılar bilgisayarda hassasiyet yuvarlama hatalarına tabidir."]
    },
    {
      id: "top-00-06-09",
      code: "09",
      slug: "bitwise-operations-crypto-masking",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "9. İleri Bitwise Operasyonları ve Kriptografik Maskeleme",
      subtitle: "XOR Şifreleme ve Bit Maskeleme Sanatı",
      shortDescription: "AND maskeleme, OR flag birleştirme, XOR obfuscation ve Shift operatörleri.",
      order: 9,
      readTime: "6 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "XOR VE OBFUSCATION", content: "Zararlı yazılımlar stringlerini basit bir XOR anahtarı ile saklar (Obfuscation). Aynı anahtarla tekrar XOR yapmak orijinal veriyi verir." }
      ],
      summary: ["XOR simetrik özelliği nedeniyle tersine çevrilebilir basit gizleme mekanizmasıdır."]
    },
    {
      id: "top-00-06-10",
      code: "10",
      slug: "module-06-summary-review",
      pathSlug: "computer-fundamentals",
      moduleSlug: "binary-data-representation",
      title: "10. Modül Değerlendirmesi: Binary & Data Rep. Özet & Test",
      subtitle: "Modül 06 Bütünsel Sınavı",
      shortDescription: "Binary, Hex, Little-Endian, Integer Overflow, UTF-8 ve Base64 özet testi.",
      order: 10,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "NE BİLMELİSİN?", content: "x86 mimarisinde bellekte baytların ters sıralandığını (Little-Endian) ve Base64'ün bir şifreleme olmadığını bilmelisin." }
      ],
      summary: ["Modül 06 başarıyla tamamlandı. Sıradaki hedef: 07 - INSTRUCTIONS & MACHINE CODE."],
      practice: {
        id: "prac-00-06-10",
        prompt: "x86_64 Little-Endian mimarisinde 0x12345678 hexadecimal sayısı belleğe sırasıyla nasıl yazılır?",
        options: [
          { id: "a", text: "12 34 56 78" },
          { id: "b", text: "78 56 34 12" },
          { id: "c", text: "00 12 34 56" },
          { id: "d", text: "78 12 56 34" }
        ],
        correctAnswer: "b",
        explanation: "Little-Endian mimarisinde en küçük anlamlı bayt (LSB yani 78) en küçük bellek adresine gelecek şekilde ters dizilir."
      }
    }
  ]
};
