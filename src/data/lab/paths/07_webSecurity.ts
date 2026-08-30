import { PathItem } from '../../../types/lab';
import { mod01WebFundamentalsSec } from './webSecurity/mod01_fundamentals';
import { mod02AuthenticationSec } from './webSecurity/mod02_authentication';
import { mod03InjectionSec } from './webSecurity/mod03_injection';
import { mod04ServerSideSec } from './webSecurity/mod04_serverside';

export const webSecurityPath: PathItem = {
  id: "path-07",
  code: "07",
  slug: "web-security",
  title: "WEB SECURITY",
  shortTitle: "WEB SECURITY",
  tagline: "Modern web uygulaması zafiyetleri, istismar senaryoları ve savunma mühendisliği.",
  description: "SOP, CORS zafiyetleri, CSRF, Cookie bayrakları (HttpOnly, Secure, SameSite), IDOR, JWT zafiyetleri (None algorithm, key confusion), OAuth 2.0 açıkları, SQL Injection (In-band, Blind), XSS (Stored, Reflected, DOM), Command Injection, SSTI, XXE, SSRF (Cloud Metadata 169.254.169.254) ve Arbitrary File Upload (Web Shell RCE).",
  accentColor: "#B7FF00", // Lime
  level: "PRACTICAL",
  order: 7,
  recommendedBookId: "siber-guvenlige-giris",
  finalBookMessage: "Web zafiyetlerini ve pratik istismar modellerini sistematik öğrenmek için ana referans eseri.",
  modules: [
    mod01WebFundamentalsSec,
    mod02AuthenticationSec,
    mod03InjectionSec,
    mod04ServerSideSec
  ]
};
