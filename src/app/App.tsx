import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from '../components/Navigation/Header';
import { HeroCanvas } from '../components/HeroScene/HeroCanvas';
import { WelcomeSection } from '../sections/Welcome/WelcomeSection';
import { WhoIAmSection } from '../sections/WhoIAm/WhoIAmSection';
import { BooksSection } from '../sections/Books/BooksSection';
import { LabSection } from '../sections/Lab/LabSection';
import { ContactSection } from '../sections/Contact/ContactSection';
import { CustomCursor } from '../components/CustomCursor/CustomCursor';

import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/globals.css';
import '../styles/components.css';
import '../styles/responsive.css';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0
  });
  const [scrollOffset, setScrollOffset] = useState(0);

  // Initialize Lenis Smooth Scroll & Sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    lenis.on('scroll', (e: { scroll: number }) => {
      ScrollTrigger.update();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const normalizedScroll = maxScroll > 0 ? e.scroll / maxScroll : 0;
      setScrollOffset(normalizedScroll);
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Global Pointer Listener with RequestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const normX = (e.clientX / window.innerWidth) * 2 - 1;
          const normY = -(e.clientY / window.innerHeight) * 2 + 1;

          setPointer({
            x: normX,
            y: normY,
            clientX: e.clientX,
            clientY: e.clientY
          });

          document.documentElement.style.setProperty('--mouse-x', normX.toFixed(3));
          document.documentElement.style.setProperty('--mouse-y', normY.toFixed(3));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Console brand stamp
  useEffect(() => {
    console.log(
      '%c4JAVA4 AKADEMİ%c // STAGE 05: FINAL CONTACT & FULL SYSTEM ONLINE\n%c"Sade ve sadece öğrenme. Sistemi çöz."',
      'background: #08090A; color: #B7FF00; font-family: monospace; font-size: 13px; font-weight: bold; padding: 4px 8px; border: 1px solid #B7FF00;',
      'color: #8B8F92; font-family: monospace; font-size: 11px;',
      'color: #F2F2EE; font-family: sans-serif; font-style: italic; font-size: 11px;'
    );
  }, []);

  return (
    <>
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* 3D WebGL Scene Fixed Background */}
      <HeroCanvas pointer={pointer} scrollOffset={scrollOffset} />

      {/* Structural Architectural Grid Guides */}
      <div className="grid-background" aria-hidden="true">
        <div className="grid-background__lines">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid-background__col" />
          ))}
        </div>
      </div>

      {/* Main Content Layers */}
      <div className="site-wrapper">
        <Header />
        <main>
          {/* SECTION 01: WELCOME / HERO */}
          <WelcomeSection pointer={pointer} />

          {/* SECTION 02: WHO I AM // PREMIUM PERSONAL IDENTITY */}
          <WhoIAmSection pointer={pointer} />

          {/* SECTION 03: BOOKS ARCHIVE SHOWCASE */}
          <BooksSection />

          {/* SECTION 04: CYBER LAB & KNOWLEDGE UNIVERSE */}
          <LabSection />

          {/* SECTION 05: FINAL CONTACT & MINIMAL FOOTER */}
          <ContactSection pointer={pointer} />
        </main>
      </div>
    </>
  );
};
