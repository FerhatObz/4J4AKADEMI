import { PathItem } from '../../../types/lab';

export const blockchainPath: PathItem = {
  id: "path-13",
  code: "13",
  slug: "blockchain-security",
  title: "BLOCKCHAIN SECURITY",
  shortTitle: "BLOCKCHAIN",
  tagline: "Dağıtık defterler, konsensüs ve akıllı sözleşme güvenliği.",
  description: "Solidity zafiyetleri (Reentrancy, Arithmetic Overflow, Flash Loan), EVM çalışma mantığı ve DeFi denetimi.",
  accentColor: "#F59E0B", // Gold
  level: "ADVANCED",
  order: 13,
  recommendedBookId: "kirilmaz-defter-blockchain",
  modules: [
    {
      id: "mod-13-01",
      code: "01",
      slug: "smart-contract-exploits",
      pathSlug: "blockchain-security",
      title: "AKILLI SÖZLEŞME GÜVENLİĞİ",
      description: "EVM, Reentrancy zafiyeti ve DeFi denetimleri.",
      order: 1,
      topics: [
        {
          id: "top-13-01-01",
          code: "01",
          slug: "reentrancy-attack",
          pathSlug: "blockchain-security",
          moduleSlug: "smart-contract-exploits",
          title: "Reentrancy Saldırısı",
          subtitle: "Akıllı Sözleşmelerde Fonksiyon Tekrar Giriş Zafiyeti",
          shortDescription: "Bakiye güncellenmeden önce dış sözleşmeye fon transferi yapılması açığı.",
          order: 1,
          readTime: "6 MIN",
          sections: [
            {
              id: "sec-01",
              code: "01",
              title: "REENTRANCY MEKANİZMASI",
              content: "Bir Ethereum akıllı sözleşmesi, kullanıcının bakiyesini düşürmeden önce harici bir sözleşmeye para transfer ettiğinde, alıcı sözleşme `fallback()` fonksiyonuyla sözleşmeyi tekrar çağırarak tüm havuzu boşaltabilir."
            }
          ],
          summary: ["Checks-Effects-Interactions deseni zorunludur.", "State güncellemesi transferden önce yapılmalıdır."]
        }
      ]
    }
  ]
};
