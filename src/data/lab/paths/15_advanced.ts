import { PathItem } from '../../../types/lab';

export const advancedSecurityPath: PathItem = {
  id: "path-15",
  code: "15",
  slug: "advanced-security",
  title: "ADVANCED SECURITY",
  shortTitle: "ADVANCED",
  tagline: "İleri seviye tersine mühendislik, kernel analizi ve derin sistem güvenliği.",
  description: "Ghidra/IDA Pro ile ikili dosya analizi, Buffer Overflow, ROP zincirleri, Windows Kernel sürücü güvenliği ve fuzzing.",
  accentColor: "#E2E8F0", // Silver / White
  level: "ADVANCED",
  order: 15,
  modules: [
    {
      id: "mod-15-01",
      code: "01",
      slug: "binary-exploitation",
      pathSlug: "advanced-security",
      title: "TERSİNE MÜHENDİSLİK & BİNARY EXPLOITATION",
      description: "Disassembly, Buffer Overflow, Return-Oriented Programming (ROP) ve Fuzzing.",
      order: 1,
      topics: [
        {
          id: "top-15-01-01",
          code: "01",
          slug: "buffer-overflow-rop",
          pathSlug: "advanced-security",
          moduleSlug: "binary-exploitation",
          title: "Buffer Overflow & ROP Zincirleri",
          subtitle: "Stack Taşması ve DEP/ASLR Korumalarını Atlatma",
          shortDescription: "RIP register'ını kontrol altına alarak kabuk kodu (shellcode) çalıştırma.",
          order: 1,
          readTime: "7 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "BUFFER OVERFLOW MEKANİZMASI",
              content: "Sınırsız bellek kopyalama fonksiyonları (`strcpy`, `gets`), ayrılan bellek sınırını aşarak Stack'teki dönüş adresini (Saved RIP) ezer. Saldırgan bu adrese kendi zararlı kodunun adresini yazar."
            },
            {
              id: "sec-02",
              code: "02",
              title: "RETURN-ORIENTED PROGRAMMING (ROP)",
              content: "DEP/NX (veri alanında kod çalıştırma yasağı) korumasını aşmak için, programın içindeki `ret` ile biten küçük makine kodu parçacıkları (Gadgets) bir zincir gibi birbirine bağlanarak yürütülür."
            }
          ],
          summary: [
            "Buffer overflow bellek sınırlarının denetlenmemesinden doğar.",
            "ROP DEP/NX korumalarını atlatmada kullanılır."
          ]
        }
      ]
    }
  ]
};
