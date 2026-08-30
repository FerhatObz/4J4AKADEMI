import { PathItem } from '../../../types/lab';

export const digitalForensicsPath: PathItem = {
  id: "path-24",
  code: "24",
  slug: "digital-forensics",
  title: "ADLİ BİLİŞİM VE OLAY MÜDAHALESİ",
  shortTitle: "ADLİ BİLİŞİM",
  tagline: "Dijital delil toplama, olay müdahalesi ve kriminal araştırma süreçleri.",
  description: "Disk imajlama, bellek döküm analizi, log forensics, zaman çizelgesi analizi ve adli yazılımlar.",
  accentColor: "#14B8A6",
  level: "ADVANCED",
  order: 24,
  modules: [
    {
      id: "mod-24-01",
      code: "01",
      slug: "memory-forensics",
      pathSlug: "digital-forensics",
      title: "BELİK ANALİZİ (MEMORY FORENSICS)",
      description: "RAM dökümlerinden canlı sistem delilleri çıkarma.",
      order: 1,
      topics: [
        {
          id: "top-24-01-01",
          code: "01",
          slug: "volatility-framework",
          pathSlug: "digital-forensics",
          moduleSlug: "memory-forensics",
          title: "Volatility Framework ile RAM Analizi",
          subtitle: "Uçucu Bellekteki Gizli Süreçleri ve Ağ Bağlantılarını Çıkarma",
          shortDescription: "RAM imajlarından zararlı enjeksiyonları, şifreleri ve gizli prosesleri tespit etme.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. UÇUCU BELLEK (VOLATILE MEMORY) ÖNEMİ", content: "Sistem kapandığında kaybolan RAM, çalışan işlemler, şifresiz metinler, ağ soketleri ve belleğe enjekte edilmiş koda dair en taze delilleri barındırır." },
            { id: "sec-02", code: "02", title: "2. VOLATILITY ARACI TANIMI", content: "Volatility, Windows, Linux ve macOS RAM dökümlerini (raw, crash dump, vmem) analiz etmek için kullanılan standart adli bilişim aracıdır." },
            { id: "sec-03", code: "03", title: "3. PROSES LİSTELEME (PSLIST VS PSSCAN)", content: "`pslist` aktif süreçleri gösterirken, `psscan` unlinked (EPROCESS dizisinden çıkarılarak gizlenmiş) kökkit süreçlerini tespit eder." },
            { id: "sec-04", code: "04", title: "4. PROSES HIERARŞİSİ (PSTREE)", content: "Süreçlerin ebeveyn-çocuk ilişkilerini analiz eder. Örneğin `svchost.exe` ebeveyni `services.exe` değilse bir zararlıdır." },
            { id: "sec-05", code: "05", title: "5. AĞ BAĞLANTILARI (NETSCAN)", content: "RAM dökümünün alındığı andaki veya yakın geçmişteki tüm açık ve kapalı TCP/UDP soket bağlantılarını IP ve Port bazında dökümler." },
            { id: "sec-06", code: "06", title: "6. KOD ENJEKSİYONU TESPİTİ (MALFIND)", content: "Yürütülebilir bayrağa sahip (`PAGE_EXECUTE_READWRITE`) bellek sayfalarını tarayarak DLL Injection veya Process Hollowing arar." },
            { id: "sec-07", code: "07", title: "7. BELLEKTEN DOSYA ÇIKARMA (DUMPFILS)", content: "RAM'de çalışan bir EXE'yi veya açılmış bir dokümanı diskten silinmiş olsa dahi RAM dökümünden kurtarır." },
            { id: "sec-08", code: "08", title: "8. COMMAND LINE VE HASHLAR", content: "`cmdline` eklentisi ile proseslerin hangi parametrelerle çalıştırıldığı (örneğin zararlı powershell komutu) görülür." },
            { id: "sec-09", code: "09", title: "9. VOLATILITY 3 KULLANIMI", content: "`vol -f memory.raw windows.pslist` şeklinde yeni nesil Volatility 3 komut yapısı kullanılır." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Canlı olay müdahalesinde ilk adım disk kapatılmadan önce RAM imajının alınmasıdır." }
          ],
          summary: ["RAM uçucu delillerin merkezidir.", "Volatility ile gizlenmiş prosesler ve bellek enjeksiyonları bulunur."],
          practice: {
            id: "prac-24-01-01",
            prompt: "Volatility aracında EPROCESS çift bağlı listesinden çıkarılarak gizlenmiş (unlinked) kökkit proseslerini bulmak için hangi eklenti kullanılır?",
            options: [
              { id: "a", text: "pslist" },
              { id: "b", text: "psscan" },
              { id: "c", text: "pstree" },
              { id: "d", text: "dlllist" }
            ],
            correctAnswer: "b",
            explanation: "psscan eklentisi aktif liste yerine bellek bloklarını doğrudan tarayarak (pool tag scanning) gizli prosesleri bulur."
          }
        }
      ]
    }
  ]
};
