import { ModuleItem } from '../../../../types/lab';

export const mod01ActiveDirectory: ModuleItem = {
  id: "mod-10-01",
  code: "01",
  slug: "active-directory-attacks",
  pathSlug: "red-team",
  title: "ACTIVE DIRECTORY SIZMA TESTLERİ VE KERBEROS SALDIRILARI",
  description: "Active Directory Mimarisi, Kerberos Protokolü, Kerberoasting, AS-REP Roasting, Pass-the-Hash (PtH), Golden Ticket ve DCSync Saldırıları.",
  order: 1,
  topics: [
    {
      id: "top-10-01-01",
      code: "01",
      slug: "kerberoasting-attack-deep",
      pathSlug: "red-team",
      moduleSlug: "active-directory-attacks",
      title: "1. Kerberoasting Saldırısı: SPN Hizmet Biletlerini Çevrimdışı Kırma",
      subtitle: "Düşük Yetkili Domain Kullanıcısından Servis Hesabı Parolasına Geçiş",
      shortDescription: "SPN (Service Principal Name), TGT/TGS bilet talebi, Hashcat mode 13100 ve gMSA savunması.",
      order: 1,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "KERBEROASTING MEKANİZMASI",
          content: "Active Directory ortamında, Service Principal Name (SPN) atanmış bir servis hesabı (örneğin SQL Server, IIS) bulunduğunda, domaindeki HERHANGİ bir standart kullanıcı bu servis için Domain Controller'dan bir TGS (Ticket Granting Service) bileti talep edebilir.\n\nDC'nin döndüğü TGS bileti, ilgili servis hesabının NTLM parola hash'i ile şifrelenmiştir. Saldırgan bu bileti ağ trafiğinde dinlemeden, doğrudan istemci belleğinden çekip kendi bilgisayarına aktarır ve `hashcat -m 13100` ile çevrimdışı (offline) parola kırma saldırısı başlatır."
        },
        {
          id: "sec-02",
          code: "02",
          title: "SAVUNMA: GMSA VE ZORLU PAROLALAR",
          content: "1. gMSA (Group Managed Service Accounts): Parolaları 128 karakterlik karmaşık değerlerdir ve Windows tarafından otomatik değiştirilir.\n2. Servis hesaplarının parolaları en az 25 karakter uzunluğunda olmalıdır."
        }
      ],
      summary: [
        "Her standart kullanıcı SPN taşıyan servisler için TGS bileti isteyebilir.",
        "TGS biletleri çevrimdışı kırıldığı için ağda tespiti zordur."
      ],
      practice: {
        id: "prac-10-01-01",
        prompt: "Active Directory ortamında Kerberoasting saldırısını tamamen etkisiz hale getiren ve Windows tarafından parolası otomatik 128 karakter atanan servis hesabı mimarisi hangisidir?",
        options: [
          { id: "a", text: "Standard User Account" },
          { id: "b", text: "gMSA (Group Managed Service Accounts)" },
          { id: "c", text: "Guest Account" },
          { id: "d", text: "Domain Local Group" }
        ],
        correctAnswer: "b",
        explanation: "gMSA hesaplarının parolaları 128 karakterlik rastgele karmaşık stringlerdir ve sistem tarafından periyodik değiştirilir; bu sayede brute-force imkansız hale gelir."
      }
    },
    {
      id: "top-10-01-02",
      code: "02",
      slug: "as-rep-roasting-attack",
      pathSlug: "red-team",
      moduleSlug: "active-directory-attacks",
      title: "2. AS-REP Roasting: DONT_REQ_PREAUTH Zafiyeti",
      subtitle: "Şifresiz Kerberos Ön Kimlik Doğrulama Zafiyeti",
      shortDescription: "DONT_REQ_PREAUTH bayrağı, AS-REP bilet dökümü ve Hashcat mode 18200.",
      order: 2,
      readTime: "8 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "AS-REP ROASTING MEKANİZMASI",
          content: "Bir kullanıcı hesabında 'Do not require Kerberos preauthentication' (DONT_REQ_PREAUTH) seçeneği işaretliyse, herkes bu kullanıcı için DC'ye AS-REQ gönderebilir ve DC doğrudan parolanın hash'i ile şifrelenmiş AS-REP yanıtı döner. Saldırgan parolasız bilet alıp çevrimdışı kırar."
        }
      ],
      summary: ["DONT_REQ_PREAUTH bayrağı şifresiz AS-REP bileti alınmasına yol açar."]
    },
    {
      id: "top-10-01-03",
      code: "03",
      slug: "pass-the-hash-golden-ticket-dcsync",
      pathSlug: "red-team",
      moduleSlug: "active-directory-attacks",
      title: "3. Pass-the-Hash (PtH), Golden Ticket ve DCSync Saldırıları",
      subtitle: "Domain Dominance ve KRBTGT Hesabının Ele Geçirilmesi",
      shortDescription: "Pass-the-Hash mimarisi, KRBTGT NTLM hash'i ile Golden Ticket üretimi ve DCSync (MS-DRSR) taklidi.",
      order: 3,
      readTime: "9 MIN",
      sections: [
        {
          id: "sec-01",
          code: "01",
          title: "GOLDEN TICKET VE DCSYNC",
          content: "- Golden Ticket: KRBTGT hesabının NTLM hash'i ele geçirildiğinde, Domain Controller'ı taklit eden ve 10 yıl geçerli olan sahte TGT bileti üretilir.\n- DCSync: Mimikatz kullanarak Domain Controller'lar arası senkronizasyon protokolünü (MS-DRSR) taklit etmek ve tüm kullanıcı parola hashlerini çekmektir."
        }
      ],
      summary: ["KRBTGT hash'inin ele geçirilmesi tüm Active Directory alan adının (Domain) tam kontrolünü verir."]
    },
    {
      id: "top-10-01-04",
      code: "04",
      slug: "module-01-summary-review",
      pathSlug: "red-team",
      moduleSlug: "active-directory-attacks",
      title: "4. Modül Değerlendirmesi: Active Directory Security Özet & Test",
      subtitle: "Modül 01 Bütünsel Sınavı",
      shortDescription: "Kerberoasting, AS-REP Roasting, Golden Ticket ve DCSync özet testi.",
      order: 4,
      readTime: "5 MIN",
      sections: [
        { id: "sec-01", code: "01", title: "MODULE SUMMARY", content: "Kerberoasting mekanizmasını, DONT_REQ_PREAUTH zafiyetini ve Golden Ticket / DCSync kavramlarını öğrendin." }
      ],
      summary: ["Modül 01 tamamlandı. Sıradaki hedef: 02 - EDR BYPASS VE C2 OPERASYONLARI."],
      practice: {
        id: "prac-10-01-04",
        prompt: "Active Directory ortamında tüm domain alan adının sınırsız kontrolünü sağlayan sahte TGT bileti (Golden Ticket) üretmek için hangi kritik hesabın NTLM hash'ine ihtiyaç duyulur?",
        options: [
          { id: "a", text: "Administrator" },
          { id: "b", text: "KRBTGT" },
          { id: "c", text: "Guest" },
          { id: "d", text: "SYSTEM" }
        ],
        correctAnswer: "b",
        explanation: "`krbtgt` hesabı Kerberos biletlerini imzalamak için kullanılır; hash'i ele geçiren saldırgan dilediği yetkide Golden Ticket üretebilir."
      }
    }
  ]
};
