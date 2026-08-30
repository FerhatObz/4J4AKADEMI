import { ModuleItem } from '../../../../types/lab';

export const mod01LinuxBasics: ModuleItem = {
  id: "mod-03-01",
  code: "01",
  slug: "linux-basics",
  pathSlug: "linux-fundamentals",
  title: "SIFIRDAN LINUX VE BASH KABUK YÖNETİMİ",
  description: "Linux mimarisi, Bash kabuğu, terminal temel komutları (pwd, ls, cd, mkdir, cp, mv, rm), metin arama ve filtreleme (cat, grep, find, sed, awk, piping).",
  order: 1,
  topics: [
    {
      id: "top-03-01-01",
      code: "01",
      slug: "linux-philosophy-bash-shell",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-basics",
      title: "1. Linux Felsefesi, Çekirdek (Kernel) ve Kabuk (Shell) Mimarisi",
      subtitle: "Açık Kaynak Kod Dünyası ve 'Everything is a File' İlkesi",
      shortDescription: "Linux Kernel, GNU araçları, Shell (Bash/Zsh) mimarisi ve 'Her Şey Bir Dosyadır' felsefesi.",
      order: 1,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "LINUX NEDİR VE NEDEN HER YERDEDİR?",
          content: "Linux, Linus Torvalds tarafından 1991 yılında geliştirilmeye başlanan, açık kaynak kodlu ve Unix benzeri bir işletim sistemi çekirdeğidir (Kernel). Günümüzde dünyadaki süper bilgisayarların %100'ünde, bulut sunucuların (AWS, Azure, GCP) %90'ından fazlasında, Android telefonlarda ve tüm siber güvenlik araçlarında Linux çekirdeği çalışır."
        },
        {
          id: "sec-02",
          code: "02",
          title: "HER ŞEY BİR DOSYADIR (EVERYTHING IS A FILE)",
          content: "Linux mimarisinin en temel felsefesi 'Every object is treated as a file' ilkesidir. Sabit diskler (`/dev/sda`), ağ arayüzleri, sistem süreçleri (`/proc/1`), hatta klavye ve ekran dahi dosya sistemi üzerinde birer dosya veya arayüz olarak temsil edilir. Bu sayede bir metin dosyasını okuyan komut (`cat`), ağ arayüzünü veya donanımı da aynı yalınlıkla sorgulayabilir."
        },
        {
          id: "sec-03",
          code: "03",
          title: "KERNEL VS SHELL (KABUK)",
          content: "Donanım ile doğrudan konuşan Katman Çekirdektir (Kernel). Kullanıcının veya siber güvenlik uzmanının yazdığı komutları anlayıp Kernel'e ileten katman ise Kabuk'tur (Shell / Bash / Zsh). Terminal, kabuk ile etkileşime girdiğimiz komut satırı penceresidir."
        }
      ],
      summary: [
        "Linux çekirdeği donanımı yönetir, Shell kullanıcının komutlarını işler.",
        "Linux'ta donanım ve süreçler dahil her şey dosya sistemi üzerinden yönetilir."
      ],
      practice: {
        id: "prac-03-01-01",
        prompt: "Linux işletim sisteminde donanım ile kullanıcı komut satırı (Shell) arasında köprü görevi gören en temel sistem bileşeni hangisidir?",
        options: [
          { id: "a", text: "GUI (Grafik Arayüz)" },
          { id: "b", text: "Kernel (Çekirdek)" },
          { id: "c", text: "Browser" },
          { id: "d", text: "Apache" }
        ],
        correctAnswer: "b",
        explanation: "Kernel (Çekirdek), donanım kaynaklarını yöneten ve Shell üzerinden gelen emirleri donanıma ileten en temel işletim sistemi katmanıdır."
      }
    },
    {
      id: "top-03-01-02",
      code: "02",
      slug: "terminal-navigation-pwd-ls-cd",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-basics",
      title: "2. Terminal Dizin Navigasyonu: pwd, ls, cd ve Gizli Dosyalar",
      subtitle: "Komut Satırında Yol Bulma ve Dizinler Arası Geçiş",
      shortDescription: "Mutlak yol (Absolute path), Göreli yol (Relative path), `ls -la`, `cd ..` ve gizli noktalar (`.bashrc`).",
      order: 2,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "MUTLAK VE GÖRELİ YOL (ABSOLUTE VS RELATIVE PATH)",
          content: "- Absolute Path (Mutlak Yol): Kök dizinden (`/`) başlar. Örn: `/var/www/html/index.html`.\n- Relative Path (Göreli Yol): Bulunduğun dizinden başlar. Örn: `cd ../var/log`."
        },
        {
          id: "sec-02",
          code: "02",
          title: "LS İLE GİZLİ DOSYALARI LİSTELEME",
          content: "Linux'ta ismi nokta (`.`) ile başlayan dosyalar gizli dosyadır. `ls -la` komutu gizli dosyalar (`.bashrc`, `.ssh`), izinler, sahip ve boyut bilgilerini listeler."
        }
      ],
      summary: [
        "`pwd` mevcut dizini verir, `ls -la` gizli dosyalar dahil tüm detayları gösterir."
      ]
    },
    {
      id: "top-03-01-03",
      code: "03",
      slug: "file-management-cp-mv-rm-mkdir",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-basics",
      title: "3. Dosya ve Dizin Yönetimi: mkdir, cp, mv, rm, touch",
      subtitle: "Güvenli Dosya Oluşturma, Kopyalama ve Silme",
      shortDescription: "Dizin oluşturma (`mkdir -p`), kopyalama (`cp -r`), taşıma/yeniden adlandırma (`mv`) ve tehlikeli silme (`rm -rf`).",
      order: 3,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "TEHLİKELİ SILME: RM -RF TEHLİKESİ",
          content: "Linux'ta silinen dosyalar Geri Dönüşüm Kutusu'na gitmez! `rm -rf /` komutu kök dizinden itibaren tüm işletim sistemini geri dönülemez biçimde siler."
        }
      ],
      summary: [
        "`mkdir -p` iç içe dizin açar, `cp -r` dizin kopyalar, `rm -rf` geri dönüşsüz siler."
      ]
    },
    {
      id: "top-03-01-04",
      code: "04",
      slug: "text-processing-grep-cat-pipe-redirection",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-basics",
      title: "4. Metin İşleme ve Borulama (Piping & Redirection): grep, cat, |, >, >>",
      subtitle: "Komutları Birbirine Bağlama Sanatı",
      shortDescription: "Standart Girdi/Çıktı (stdin, stdout, stderr), Boru operatörü (`|`), Çıktı yönlendirme (`>`, `>>`) ve `grep -i -n -r`.",
      order: 4,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "PIPING (|) VE REDIRECTION (>) MANTIK",
          content: "`cat /var/log/auth.log | grep \"Failed password\" > failed_attempts.txt` komutu logları okur, başarısız girişleri süzüp dosyaya yazar."
        }
      ],
      summary: [
        "Boru (`|`) bir komutun çıktısını diğerinin girdisi yapar.",
        "`>` üzerine yazar, `>>` dosya sonuna ekler."
      ]
    },
    {
      id: "top-03-01-05",
      code: "05",
      slug: "module-01-summary-review",
      pathSlug: "linux-fundamentals",
      moduleSlug: "linux-basics",
      title: "5. Modül Değerlendirmesi: Linux Basics Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı",
      shortDescription: "Bash, FHS navigasyonu, dosya yönetimi ve piping özet testi.",
      order: 5,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Linux çekirdeğini, Bash navigasyonunu, gizli dosyaları ve komut borulama mantığını öğrendin." }
      ],
      summary: ["Modül 01 tamamlandı. Sıradaki hedef: 02 - DOSYA SİSTEMİ VE İZİNLER."],
      practice: {
        id: "prac-03-01-05",
        prompt: "Bir komutun standart çıktısını (stdout) var olan bir dosyanın içeriğini silmeden EN SONUNA eklemek için hangi yönlendirme operatörü kullanılır?",
        options: [
          { id: "a", text: ">" },
          { id: "b", text: ">>" },
          { id: "c", text: "|" },
          { id: "d", text: "<" }
        ],
        correctAnswer: "b",
        explanation: "`>>` operatörü çıktıyı var olan dosyanın sonuna ekler (append); `>` ise dosya içeriğini sıfırlayıp üzerine yazar."
      }
    }
  ]
};
