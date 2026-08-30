import { PathItem } from '../../../types/lab';

export const mobileSecurityPath: PathItem = {
  id: "path-21",
  code: "21",
  slug: "mobile-security",
  title: "MOBİL GÜVENLİK",
  shortTitle: "MOBİL",
  tagline: "Android ve iOS güvenlik modeli, tersine mühendislik ve APK analizi.",
  description: "Android APK analizi, iOS jailbreak, SSL pinning bypass, deep link kaybetme ve OWASP Mobile Top 10.",
  accentColor: "#84CC16",
  level: "PRACTICAL",
  order: 21,
  modules: [
    {
      id: "mod-21-01",
      code: "01",
      slug: "mobile-owasp",
      pathSlug: "mobile-security",
      title: "MOBİL GÜVENLİK TESTLERİ",
      description: "Dinamik analiz ve istemci taraflı korumaları atlatma.",
      order: 1,
      topics: [
        {
          id: "top-21-01-01",
          code: "01",
          slug: "ssl-pinning-bypass",
          pathSlug: "mobile-security",
          moduleSlug: "mobile-owasp",
          title: "SSL Pinning ve Frida ile Bypass Teknikleri",
          subtitle: "Mobil Ağ Trafiğini Araya Girip (MITM) Dinleme",
          shortDescription: "Sertifika sabitleme mekanizması ve Frida hooks ile çalışma zamanında atlatılması.",
          order: 1,
          readTime: "8 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. SSL PINNING NEDİR?", content: "SSL/TLS Pinning, mobil uygulamanın sunucu sertifikasını veya public key'ini uygulama içerisine gömerek, işletim sisteminin güvenilen sertifika otoritesi (CA) listesini yok saymasıdır." },
            { id: "sec-02", code: "02", title: "2. AMACI VE KORUMA ALANI", content: "Kullanıcının cihazına Burp Suite veya OWASP ZAP Root CA yüklense dahi, uygulamanınMITM saldırılarını engellemesini sağlar." },
            { id: "sec-03", code: "03", title: "3. DİNAMİK İNCELEME ENGELİ", content: "Güvenlik araştırmacısının mobil uygulamanın API isteklerini izlemesini zora sokar." },
            { id: "sec-04", code: "04", title: "4. FRIDA FRAMEWORK", content: "Frida, çalışma zamanında (runtime) sürece kod enjekte etmeye izin veren açık kaynaklı bir dinamik kod enjeksiyon aracıdır." },
            { id: "sec-05", code: "05", title: "5. HOOKING MEKANİZMASI", content: "Frida, Java veya Objective-C/Swift metodlarını ezerek (function hooking) sertifika doğrulama fonksiyonlarının daima `true` dönmesini sağlar." },
            { id: "sec-06", code: "06", title: "6. OBFUSCATION VE NATIVE CODE (C/C++)", content: "SSL Pinning C++ (JNI / OpenSSL) seviyesinde yazılmışsa veya DexGuard ile karartılmışsa hooking zorlaşır." },
            { id: "sec-07", code: "07", title: "7. OBA-BASED BYPASS (OBJECTION)", content: "`objection -g com.app.name explore` komutu ardından `android sslpinning disable` ile otomatize bypass yapılır." },
            { id: "sec-08", code: "08", title: "8. HARDENING RECOMMENDATIONS", content: "Sadece SSL Pinning'e güvenilmemeli, ağ seviyesinde token şifreleme ve bütünlük doğrulaması yapılmalıdır." },
            { id: "sec-09", code: "09", title: "9. ROOT / JAILBREAK DETECTION İLE BİRLEŞTİRME", content: "SSL Pinning koruması genellikle cihazda Root/Jailbreak var mı kontrolü ile birlikte kurgulanır." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Mobil istemci tamamen saldırganın elindedir; istemci taraflı hiçbir koruma kırılmaz değildir." }
          ],
          summary: ["SSL Pinning MITM dinlemesini engeller.", "Frida çalışma zamanında metot ezerek (hooking) bypass eder."],
          practice: {
            id: "prac-21-01-01",
            prompt: "Mobil uygulamalarda çalışma zamanında (runtime) Java/Native metotlarını değiştirmek için en sık kullanılan dinamik enjeksiyon aracı hangisidir?",
            options: [
              { id: "a", text: "Nmap" },
              { id: "b", text: "Frida" },
              { id: "c", text: "Wireshark" },
              { id: "d", text: "Ghidra" }
            ],
            correctAnswer: "b",
            explanation: "Frida, çalışan süreçlere JavaScript scriptleri enjekte ederek metod hooking yapmaya yarayan dinamik analiz aracıdır."
          }
        }
      ]
    }
  ]
};
