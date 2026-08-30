import { PathItem } from '../../../types/lab';
import { mod01WhatIsInternet } from './internet/mod01_what_is_internet';
import { mod02ClientServer } from './internet/mod02_client_server';
import { mod03IpAddresses } from './internet/mod03_ip_addresses';
import { mod04MacAddresses } from './internet/mod04_mac_addresses';
import { mod05PortsSockets } from './internet/mod05_ports_sockets';
import { mod06Dns } from './internet/mod06_dns';
import { mod07Dhcp } from './internet/mod07_dhcp';
import { mod08Tcp } from './internet/mod08_tcp';
import { mod09Udp } from './internet/mod09_udp';
import { mod10HttpHttps } from './internet/mod10_http_https';
import { mod11RoutingPackets } from './internet/mod11_routing_packets';
import { mod12NatPrivate } from './internet/mod12_nat_private';
import { mod13ProxiesVpn } from './internet/mod13_proxies_vpn';
import { mod14InternetSecurity } from './internet/mod14_internet_security';

export const internetPath: PathItem = {
  id: "path-01",
  code: "01",
  slug: "internet-fundamentals",
  title: "INTERNET FUNDAMENTALS",
  shortTitle: "INTERNET",
  tagline: "Küresel ağ altyapısı, paket transferi, IP/MAC adresleme, DNS, TCP/UDP, HTTP/HTTPS ve uçtan uca web iletişimi.",
  description: "Sıfırdan başlayan bir kişinin bir web sitesine yazdığı adresin tarayıcıdan sunucuya gidip ekrana gelmesine kadar olan tüm süreci anlatan 14 modüllük devasa eğitim patikası.",
  accentColor: "#06B6D4", // Cyan
  level: "FOUNDATION",
  order: 1,
  recommendedBookId: "siber-guvenlige-giris",
  finalBookMessage: "İnternet mimarisi ve ağ protokolleri zafiyetlerini derinlemesine incelemek için ana referans eseri.",
  modules: [
    mod01WhatIsInternet,
    mod02ClientServer,
    mod03IpAddresses,
    mod04MacAddresses,
    mod05PortsSockets,
    mod06Dns,
    mod07Dhcp,
    mod08Tcp,
    mod09Udp,
    mod10HttpHttps,
    mod11RoutingPackets,
    mod12NatPrivate,
    mod13ProxiesVpn,
    mod14InternetSecurity
  ]
};
