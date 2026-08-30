import { PathItem } from '../../../types/lab';
import { mod01Fundamentals } from './networking/mod01_fundamentals';
import { mod02Osi } from './networking/mod02_osi';
import { mod03TcpIp } from './networking/mod03_tcpip';
import { mod04Ethernet } from './networking/mod04_ethernet';
import { mod05Ipv4 } from './networking/mod05_ipv4';
import { mod06Subnetting } from './networking/mod06_subnetting';
import { mod07Ipv6 } from './networking/mod07_ipv6';
import { mod08ArpNdp } from './networking/mod08_arp_ndp';
import { mod09Switching } from './networking/mod09_switching';
import { mod10Routing } from './networking/mod10_routing';
import { mod11TcpDeep } from './networking/mod11_tcp_deep';
import { mod12UdpDeep } from './networking/mod12_udp_deep';
import { mod13Ports } from './networking/mod13_ports';
import { mod14Icmp } from './networking/mod14_icmp';
import { mod15DnsDhcp } from './networking/mod15_dns_dhcp';
import { mod16Services } from './networking/mod16_services';
import { mod17Vlan } from './networking/mod17_vlan';
import { mod18Firewalls } from './networking/mod18_firewalls';
import { mod19PacketAnalysis } from './networking/mod19_packet_analysis';
import { mod20Troubleshooting } from './networking/mod20_troubleshooting';
import { mod21SecurityFinal } from './networking/mod21_security_final';

export const networkingPath: PathItem = {
  id: "path-02",
  code: "02",
  slug: "networking",
  title: "COMPUTER NETWORKING",
  shortTitle: "NETWORKING",
  tagline: "Ağ mimarisi, OSI/TCPIP, Ethernet, IP/Subnetting, Switching, Routing, TCP/UDP, Servisler, VLAN, Paket Analizi ve Sorun Giderme.",
  description: "Temelden ileriye 21 modüllük devasa ağ eğitimi: Ağ temelleri, OSI & TCP/IP, Ethernet, IPv4, Derin Subnetting, IPv6, ARP/NDP, Switching, Routing, TCP, UDP, Portlar, ICMP, Servisler, VLAN, Firewalls, Wireshark Paket Analizi, Troubleshooting ve Ağ Güvenliği.",
  accentColor: "#8B5CF6", // Violet
  level: "FOUNDATION",
  order: 2,
  recommendedBookId: "siber-guvenlige-giris",
  finalBookMessage: "Ağ protokolleri zafiyetlerini ve gelişmiş ağ analizini derinleştirmek için ana referans eser.",
  modules: [
    mod01Fundamentals,
    mod02Osi,
    mod03TcpIp,
    mod04Ethernet,
    mod05Ipv4,
    mod06Subnetting,
    mod07Ipv6,
    mod08ArpNdp,
    mod09Switching,
    mod10Routing,
    mod11TcpDeep,
    mod12UdpDeep,
    mod13Ports,
    mod14Icmp,
    mod15DnsDhcp,
    mod16Services,
    mod17Vlan,
    mod18Firewalls,
    mod19PacketAnalysis,
    mod20Troubleshooting,
    mod21SecurityFinal
  ]
};
