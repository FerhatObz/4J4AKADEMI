import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Book } from '../../types';
import { BookCover } from './BookCover';
import { BookInfo } from './BookInfo';

gsap.registerPlugin(ScrollTrigger);

interface BookSceneProps {
  book: Book;
  index: number;
  isEven: boolean;
  onEnterActive: (index: number) => void;
}

/* Per-book unique design config */
const BOOK_CONFIG: Record<string, {
  accent: string;
  glow: string;
  glowPosition: string;
  sceneClass: string;
}> = {
  "01": {
    accent: "#B7FF00",
    glow: "rgba(183,255,0,0.12)",
    glowPosition: "top-left",
    sceneClass: "book-scene--bug-bounty",
  },
  "02": {
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.10)",
    glowPosition: "top-right",
    sceneClass: "book-scene--tech-english",
  },
  "03": {
    accent: "#EF4444",
    glow: "rgba(239,68,68,0.12)",
    glowPosition: "bottom-left",
    sceneClass: "book-scene--red-team",
  },
  "04": {
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.11)",
    glowPosition: "center",
    sceneClass: "book-scene--internet",
  },
  "05": {
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.10)",
    glowPosition: "bottom-right",
    sceneClass: "book-scene--fragile",
  },
  "06": {
    accent: "#10B981",
    glow: "rgba(16,185,129,0.11)",
    glowPosition: "top-left",
    sceneClass: "book-scene--security-intro",
  },
  "07": {
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.12)",
    glowPosition: "center",
    sceneClass: "book-scene--blockchain",
  },
};

/* SVG backgrounds – each book has its own unique geometry */
const BookGeo01: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-01"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Hunting target rings */}
    <circle cx="900" cy="350" r="200" stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>
    <circle cx="900" cy="350" r="140" stroke={accent} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 6"/>
    <circle cx="900" cy="350" r="80" stroke={accent} strokeOpacity="0.15" strokeWidth="1"/>
    <circle cx="900" cy="350" r="20" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" filter="url(#glow-01)"/>
    {/* Crosshair lines */}
    <line x1="900" y1="100" x2="900" y2="600" stroke={accent} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 4"/>
    <line x1="650" y1="350" x2="1150" y2="350" stroke={accent} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 4"/>
    {/* Exploit path lines */}
    <polyline points="100,600 300,200 500,350 700,150" stroke={accent} strokeOpacity="0.06" strokeWidth="1" fill="none"/>
    <polyline points="150,50 400,400 600,300 850,200" stroke={accent} strokeOpacity="0.04" strokeWidth="1" fill="none" strokeDasharray="8 4"/>
    {/* Grid dots */}
    {[0,1,2,3].map(row => [0,1,2,3,4,5].map(col => (
      <circle key={`${row}-${col}`} cx={50 + col * 200} cy={80 + row * 180} r="1.5" fill={accent} fillOpacity="0.12"/>
    )))}
  </svg>
);

const BookGeo02: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-02"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Language / data flow nodes */}
    {[{x:200,y:150},{x:500,y:100},{x:800,y:200},{x:300,y:400},{x:700,y:450},{x:1000,y:350}].map((node, i) => (
      <g key={i}>
        <circle cx={node.x} cy={node.y} r="6" fill={accent} fillOpacity="0.18"/>
        <circle cx={node.x} cy={node.y} r="12" stroke={accent} strokeOpacity="0.1" strokeWidth="1"/>
      </g>
    ))}
    {/* Connection lines between nodes */}
    <line x1="200" y1="150" x2="500" y2="100" stroke={accent} strokeOpacity="0.08" strokeWidth="1"/>
    <line x1="500" y1="100" x2="800" y2="200" stroke={accent} strokeOpacity="0.08" strokeWidth="1"/>
    <line x1="200" y1="150" x2="300" y2="400" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="800" y1="200" x2="700" y2="450" stroke={accent} strokeOpacity="0.08" strokeWidth="1"/>
    <line x1="700" y1="450" x2="1000" y2="350" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    {/* Text-like horizontal lines */}
    {[180, 230, 280, 330, 380].map(y => (
      <line key={y} x1="80" y1={y} x2={80 + 120 + Math.random() * 200} y2={y} stroke={accent} strokeOpacity="0.06" strokeWidth="0.8"/>
    ))}
    {/* Globe meridians suggestion */}
    <ellipse cx="1050" cy="550" rx="120" ry="100" stroke={accent} strokeOpacity="0.07" strokeWidth="1" strokeDasharray="4 6"/>
    <line x1="1050" y1="450" x2="1050" y2="650" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="930" y1="550" x2="1170" y2="550" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
  </svg>
);

const BookGeo03: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-03"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Attack vectors – aggressive diagonal lines */}
    <line x1="0" y1="700" x2="500" y2="0" stroke={accent} strokeOpacity="0.09" strokeWidth="1"/>
    <line x1="200" y1="700" x2="700" y2="0" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="400" y1="700" x2="900" y2="0" stroke={accent} strokeOpacity="0.05" strokeWidth="1"/>
    {/* Shield hexagon */}
    <polygon points="900,100 980,150 980,250 900,300 820,250 820,150" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" fill="none"/>
    <polygon points="900,130 960,165 960,235 900,270 840,235 840,165" stroke={accent} strokeOpacity="0.1" strokeWidth="1" fill={accent} fillOpacity="0.03"/>
    {/* Breach point highlight */}
    <circle cx="900" cy="200" r="4" fill={accent} fillOpacity="0.5" filter="url(#glow-03)"/>
    {/* Tactical grid */}
    <rect x="50" y="50" width="550" height="600" rx="2" stroke={accent} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="12 6"/>
    {[1,2,3,4,5].map(i => (
      <line key={i} x1="50" y1={50 + i*100} x2="600" y2={50 + i*100} stroke={accent} strokeOpacity="0.03" strokeWidth="1"/>
    ))}
    {/* Corner markers */}
    <path d="M 50 50 L 50 80 M 50 50 L 80 50" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5"/>
    <path d="M 600 50 L 600 80 M 600 50 L 570 50" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5"/>
    <path d="M 50 650 L 50 620 M 50 650 L 80 650" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5"/>
    <path d="M 600 650 L 600 620 M 600 650 L 570 650" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5"/>
  </svg>
);

const BookGeo04: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-04"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* World map inspired lines */}
    <ellipse cx="600" cy="350" rx="500" ry="250" stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>
    {/* Latitude-like arcs */}
    <path d="M 100 350 Q 600 200 1100 350" stroke={accent} strokeOpacity="0.06" strokeWidth="1" fill="none"/>
    <path d="M 200 420 Q 600 280 1000 420" stroke={accent} strokeOpacity="0.05" strokeWidth="1" fill="none"/>
    <path d="M 200 280 Q 600 420 1000 280" stroke={accent} strokeOpacity="0.05" strokeWidth="1" fill="none"/>
    {/* Longitude meridians */}
    <line x1="600" y1="100" x2="600" y2="600" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="350" y1="120" x2="350" y2="580" stroke={accent} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="3 5"/>
    <line x1="850" y1="120" x2="850" y2="580" stroke={accent} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="3 5"/>
    {/* Packet routing points */}
    {[{x:200,y:200},{x:450,y:280},{x:600,y:350},{x:800,y:240},{x:1000,y:300}].map((p, i) => (
      <g key={i}>
        <circle cx={p.x} cy={p.y} r="5" fill={accent} fillOpacity="0.3" filter="url(#glow-04)"/>
        <circle cx={p.x} cy={p.y} r="16" stroke={accent} strokeOpacity="0.1" strokeWidth="1"/>
      </g>
    ))}
    {/* Data packet paths */}
    <polyline points="200,200 450,280 600,350 800,240 1000,300" stroke={accent} strokeOpacity="0.12" strokeWidth="1" fill="none" strokeDasharray="6 3"/>
  </svg>
);

const BookGeo05: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-05"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Fragmented / cracking geometry */}
    <polygon points="600,50 900,350 700,650 350,600 200,300 450,100" stroke={accent} strokeOpacity="0.08" strokeWidth="1" fill="none"/>
    {/* Fracture lines emanating from center */}
    <line x1="600" y1="350" x2="200" y2="50" stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>
    <line x1="600" y1="350" x2="1050" y2="150" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="600" y1="350" x2="1100" y2="600" stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>
    <line x1="600" y1="350" x2="300" y2="680" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="600" y1="350" x2="100" y2="450" stroke={accent} strokeOpacity="0.05" strokeWidth="1"/>
    {/* Stress concentration indicator */}
    <circle cx="600" cy="350" r="25" stroke={accent} strokeOpacity="0.25" strokeWidth="1.5" filter="url(#glow-05)"/>
    <circle cx="600" cy="350" r="6" fill={accent} fillOpacity="0.4" filter="url(#glow-05)"/>
    {/* Warning striping */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <line key={i} x1={80+i*50} y1="650" x2={120+i*50} y2="600" stroke={accent} strokeOpacity="0.08" strokeWidth="8"/>
    ))}
    {/* Structural failure vectors */}
    <path d="M 750 200 L 820 180 L 790 250 L 870 230" stroke={accent} strokeOpacity="0.12" strokeWidth="1" fill="none"/>
  </svg>
);

const BookGeo06: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-06"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Learning path / roadmap nodes */}
    {[{x:100,y:350,r:18},{x:250,y:200,r:14},{x:420,y:300,r:14},{x:580,y:150,r:14},{x:730,y:280,r:14},{x:900,y:180,r:14},{x:1050,y:280,r:18}].map((n, i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r={n.r} stroke={accent} strokeOpacity={i===0||i===6?"0.35":"0.15"} strokeWidth="1.5" fill={accent} fillOpacity={i===0||i===6?"0.08":"0.03"}/>
        <text x={n.x} y={n.y+1} textAnchor="middle" dominantBaseline="middle" fill={accent} fillOpacity="0.35" fontSize="10" fontFamily="monospace">{String(i+1).padStart(2,'0')}</text>
      </g>
    ))}
    {/* Path connections */}
    <polyline points="100,350 250,200 420,300 580,150 730,280 900,180 1050,280" stroke={accent} strokeOpacity="0.1" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    {/* Beginner → Expert gradient track */}
    <rect x="60" y="550" width="200" height="6" rx="3" fill={accent} fillOpacity="0.06"/>
    <rect x="60" y="550" width="200" height="6" rx="3" fill="url(#progress-06)" fillOpacity="0.25"/>
    <defs>
      <linearGradient id="progress-06" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={accent} stopOpacity="0.1"/>
        <stop offset="100%" stopColor={accent} stopOpacity="0.6"/>
      </linearGradient>
    </defs>
    {/* Checklist marks */}
    {[0,1,2].map(i => (
      <g key={i} transform={`translate(${80 + i * 70}, 520)`}>
        <rect width="20" height="20" rx="3" stroke={accent} strokeOpacity="0.2" strokeWidth="1" fill="none"/>
        <path d="M 4 10 L 8 14 L 16 6" stroke={accent} strokeOpacity="0.3" strokeWidth="1.5" fill="none"/>
      </g>
    ))}
  </svg>
);

const BookGeo07: React.FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-geo-svg">
    <defs>
      <filter id="glow-07"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="chain-07" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={accent} stopOpacity="0.0"/>
        <stop offset="50%" stopColor={accent} stopOpacity="0.2"/>
        <stop offset="100%" stopColor={accent} stopOpacity="0.0"/>
      </linearGradient>
    </defs>
    {/* Blockchain chain links */}
    {[0,1,2,3,4,5].map(i => (
      <g key={i} transform={`translate(${80 + i * 190}, 280)`}>
        <rect x="0" y="0" width="130" height="80" rx="6" stroke={accent} strokeOpacity={i===2?"0.35":"0.12"} strokeWidth={i===2?"1.5":"1"} fill={accent} fillOpacity={i===2?"0.06":"0.02"}/>
        {/* Hash lines */}
        <line x1="12" y1="20" x2="118" y2="20" stroke={accent} strokeOpacity="0.08" strokeWidth="1"/>
        <line x1="12" y1="36" x2="90" y2="36" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="12" y1="52" x2="100" y2="52" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
        {/* Block number */}
        <text x="12" y="70" fill={accent} fillOpacity="0.3" fontSize="9" fontFamily="monospace">#{String(i+1).padStart(6,'0')}</text>
      </g>
    ))}
    {/* Chain connectors */}
    {[0,1,2,3,4].map(i => (
      <line key={i} x1={210 + i*190} y1="320" x2={250 + i*190} y2="320" stroke={accent} strokeOpacity="0.2" strokeWidth="2"/>
    ))}
    {/* Merkle tree suggestion above */}
    <line x1="600" y1="220" x2="450" y2="160" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="600" y1="220" x2="750" y2="160" stroke={accent} strokeOpacity="0.06" strokeWidth="1"/>
    <line x1="450" y1="160" x2="375" y2="100" stroke={accent} strokeOpacity="0.05" strokeWidth="1"/>
    <line x1="450" y1="160" x2="525" y2="100" stroke={accent} strokeOpacity="0.05" strokeWidth="1"/>
    <circle cx="600" cy="220" r="6" fill={accent} fillOpacity="0.3" filter="url(#glow-07)"/>
    <circle cx="450" cy="160" r="4" fill={accent} fillOpacity="0.2" filter="url(#glow-07)"/>
    <circle cx="750" cy="160" r="4" fill={accent} fillOpacity="0.2" filter="url(#glow-07)"/>
    {/* Cryptographic hash visual */}
    <rect x="440" y="550" width="320" height="48" rx="4" stroke={accent} strokeOpacity="0.12" strokeWidth="1" fill={accent} fillOpacity="0.02"/>
    <text x="460" y="580" fill={accent} fillOpacity="0.2" fontSize="11" fontFamily="monospace">0x3a9f…8c2d → SHA-256 → ████████████</text>
  </svg>
);

const GEO_MAP: Record<string, React.FC<{ accent: string }>> = {
  "01": BookGeo01,
  "02": BookGeo02,
  "03": BookGeo03,
  "04": BookGeo04,
  "05": BookGeo05,
  "06": BookGeo06,
  "07": BookGeo07,
};

export const BookScene: React.FC<BookSceneProps> = ({
  book,
  index,
  isEven,
  onEnterActive
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const coverWrapRef = useRef<HTMLDivElement>(null);
  const infoWrapRef = useRef<HTMLDivElement>(null);

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const cfg = BOOK_CONFIG[book.number] || BOOK_CONFIG["01"];
  const GeoComponent = GEO_MAP[book.number] || BookGeo01;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: nx, y: ny });
  };

  const handleMouseLeave = () => setMouseOffset({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sceneRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sceneRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => onEnterActive(index),
        onEnterBack: () => onEnterActive(index)
      });

      if (coverWrapRef.current) {
        gsap.fromTo(
          coverWrapRef.current,
          { y: 60, opacity: 0.6, scale: 0.94 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1.0, ease: 'power4.out',
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (infoWrapRef.current) {
        gsap.fromTo(
          infoWrapRef.current,
          { y: 40, opacity: 0.6 },
          {
            y: 0, opacity: 1,
            duration: 1.0, delay: 0.12, ease: 'power4.out',
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sceneRef);

    return () => ctx.revert();
  }, [index, onEnterActive]);

  return (
    <article
      ref={sceneRef}
      id={`book-${book.number}`}
      className={`book-editorial-scene ${cfg.sceneClass} ${isEven ? 'layout-cover-left' : 'layout-cover-right'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--book-accent-color': cfg.accent,
        '--book-glow-color': cfg.glow,
        '--bg-shift-x': `${mouseOffset.x * 24}px`,
        '--bg-shift-y': `${mouseOffset.y * 18}px`,
        '--bg-rotate-x': `${-mouseOffset.y * 5}deg`,
        '--bg-rotate-y': `${mouseOffset.x * 7}deg`,
      } as React.CSSProperties}
    >
      {/* Per-book Atmospheric Ambient Glow */}
      <div className="book-ambient-light" aria-hidden="true" />

      {/* Per-book Unique SVG Background Geometry */}
      <div className="book-bg-geometry" aria-hidden="true">
        <GeoComponent accent={cfg.accent} />
      </div>

      {/* Fine grid scan overlay */}
      <div className="book-scan-overlay" aria-hidden="true" />

      <div className="container book-scene-inner">
        <div ref={coverWrapRef} className="book-scene-col book-scene-cover-col">
          <BookCover book={book} />
        </div>
        <div ref={infoWrapRef} className="book-scene-col book-scene-info-col">
          <BookInfo book={book} />
        </div>
      </div>
    </article>
  );
};
