import { PathItem } from '../../../types/lab';

export const databaseSecurityPath: PathItem = {
  id: "path-19",
  code: "19",
  slug: "database-security",
  title: "VERİTABANI GÜVENLİĞİ",
  shortTitle: "VERİTABANI",
  tagline: "SQL, NoSQL ve NewSQL veritabanı güvenlik mimarisi ve saldırı vektörleri.",
  description: "MySQL, PostgreSQL, MongoDB, Redis güvenlik yapılandırması, veri şifreleme ve erişim kontrolü.",
  accentColor: "#10B981",
  level: "CORE",
  order: 19,
  modules: [
    {
      id: "mod-19-01",
      code: "01",
      slug: "nosql-attacks",
      pathSlug: "database-security",
      title: "NOSQL SALDIRI VEKTÖRLERİ",
      description: "Esnek şemalı veritabanlarında zafiyetler ve sömürü teknikleri.",
      order: 1,
      topics: [
        {
          id: "top-19-01-01",
          code: "01",
          slug: "redis-rce",
          pathSlug: "database-security",
          moduleSlug: "nosql-attacks",
          title: "Redis Güvensiz Yapılandırması ve RCE",
          subtitle: "Parolasız Bellek İçi Veritabanından Sunucu Ele Geçirmeye",
          shortDescription: "Parolasız Redis sunucularına SSH anahtarı yazma veya Cron injection ile RCE.",
          order: 1,
          readTime: "7 MIN",
          sections: [
            { id: "sec-01", code: "01", title: "1. REDIS VE VARSAYILAN YAPILANDIRMA", content: "Redis bellek içi çalışan son derece hızlı bir NoSQL veritabanıdır. Varsayılan olarak kimlik doğrulaması olmadan 6379 portundan dinleme yapabilir." },
            { id: "sec-02", code: "02", title: "2. GÜVENLİKSİZ REDIS TEHDİDİ", content: "İnternete açık parolasız bir Redis sunucusuna bağlanan herhangi bir kişi `CONFIG` komutlarıyla veritabanının çalışma dizinini değiştirebilir." },
            { id: "sec-03", code: "03", title: "3. SSH AUTHORIZED_KEYS INJECTION", content: "Saldırgan `config set dir /root/.ssh/` ve `config set dbfilename authorized_keys` ayarlayarak kendi public key'ini veritabanı yedeği gibi dosyaya yazar." },
            { id: "sec-04", code: "04", title: "4. CRON JOB INJECTION SALDIRISI", content: "`config set dir /var/spool/cron/crontabs/` ile sistemin zamanlanmış görev dizinine reverse shell komutu içeren veri yazılır." },
            { id: "sec-05", code: "05", title: "5. REDIS MODULE LOADING (RCE)", content: "Redis 4.0+ sürümü ile gelen `MODULE LOAD` komutu sayesinde zararlı bir `.so` dosyası yüklenerek doğrudan C kodu düzeyinde RCE elde edilir." },
            { id: "sec-06", code: "06", title: "6. PROTECTED MODE VE BOUND IP", content: "Redis 3.2+ sonrası `protected-mode yes` ve `bind 127.0.0.1` ayarı varsayılan yapılmış olsa da yanlış yapılandırmalar devam etmektedir." },
            { id: "sec-07", code: "07", title: "7. AUTHENTICATION VE PAROLA ZORLUNLUĞU", content: "`requirepass` direktifi ile güçlü bir parola atanmalı ve SSL/TLS tünelleme kullanılmalıdır." },
            { id: "sec-08", code: "08", title: "8. TEHLİKELİ KOMUTLARIN ENGELENMESİ", content: "`rename-command CONFIG \"\"` veya `rename-command FLUSHALL \"\"` yapılarak kritik komutlar devre dışı bırakılmalıdır." },
            { id: "sec-09", code: "09", title: "9. HARDENING CHECKS", content: "Nmap `redis-info` NSE betiği ile sunucunun parolasız olup olmadığı otomatize kontrol edilebilir." },
            { id: "sec-10", code: "10", title: "10. ÖZET", content: "Redis güvenliği kimlik doğrulama, IP bağlama ve tehlikeli komut kısıtlamasına dayanır." }
          ],
          summary: ["Redis varsayılanda parolasızdır.", "Authorized_keys injection ile RCE mümkündür."],
          practice: {
            id: "prac-19-01-01",
            prompt: "Redis sunucusunda kritik yapılandırma komutlarını tamamen kapatmak için hangi parametre kullanılır?",
            options: [
              { id: "a", text: "disable-config yes" },
              { id: "b", text: "rename-command CONFIG \"\"" },
              { id: "c", text: "block-command CONFIG" },
              { id: "d", text: "deny-execution CONFIG" }
            ],
            correctAnswer: "b",
            explanation: "redis.conf dosyasında `rename-command CONFIG \"\"` yazmak komutun adını boş string yaparak tamamen devre dışı bırakır."
          }
        }
      ]
    }
  ]
};
