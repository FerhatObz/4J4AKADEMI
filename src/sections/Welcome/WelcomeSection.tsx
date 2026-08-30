import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface WelcomeSectionProps {
  pointer: { x: number; y: number; clientX: number; clientY: number };
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ pointer }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerBlockRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const footerBarRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance & Scroll Choreography
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered Kinetic Entrance
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.1 } });

      tl.fromTo(
        '.reveal-line',
        { y: '115%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.12, duration: 1.0 }
      );

      // Scroll choreography for smooth transition into upcoming books section
      if (sectionRef.current) {
        gsap.to(headerBlockRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: -120,
          opacity: 0.15,
          ease: 'none'
        });

        gsap.to(quoteRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: -80,
          opacity: 0.1,
          ease: 'none'
        });

        gsap.to(actionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: -60,
          opacity: 0.2,
          ease: 'none'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle pointer parallax on typography layers (~3% movement)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    if (headerBlockRef.current) {
      gsap.to(headerBlockRef.current, {
        x: pointer.x * 12,
        y: pointer.y * 8,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }

    if (quoteRef.current) {
      gsap.to(quoteRef.current, {
        x: pointer.x * -8,
        y: pointer.y * -6,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  }, [pointer]);

  return (
    <section ref={sectionRef} className="section-welcome is-revealed" id="welcome">
      <div className="container welcome-content">

        {/* Header & Title Block */}
        <div ref={headerBlockRef} className="welcome-header-block">
          {/* Section Status Tag */}
          <div className="editorial-badge reveal-wrap">
            <div className="reveal-line">
              <span className="status-dot" />
              <span>[01 / 06] // SYSTEM_INIT</span>
            </div>
          </div>

          {/* Massive Kinetic Display Headline */}
          <h1 className="display-headline">
            <span className="reveal-wrap">
              <span className="reveal-line">4JAVA4</span>
            </span>
          </h1>

          <div className="display-subline">
            <span className="reveal-wrap">
              <span className="reveal-line">AKADEMİYE HOŞGELDİNİZ</span>
            </span>
          </div>
        </div>

        {/* Editorial Philosophy Quote & Action Block */}
        <div className="welcome-sub-block">
          {/* Philosophy Quote */}
          <div ref={quoteRef} className="welcome-quote-wrapper">
            <div className="reveal-wrap">
              <p className="editorial-quote reveal-line">
                "Sistemi kullanmayı değil,<br />
                <em>nasıl çalıştığını</em> öğren."
              </p>
            </div>
          </div>

          {/* Direct Action / CTA Group with Magnetic Interaction */}
          <div ref={actionRef} className="welcome-action-wrapper">
            <div className="action-group reveal-wrap">
              <div className="reveal-line action-group">
                <MagneticButton
                  href="#books"
                  className="cta-primary"
                  id="cta-books"
                  cursorLabel="BOOKS"
                  aria-label="Kitaplar bölümüne geç"
                >
                  <span>KİTAPLAR</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </MagneticButton>

                <MagneticButton
                  href="#lab"
                  className="cta-secondary"
                  id="cta-lab"
                  cursorLabel="LAB"
                  aria-label="Lab bölümüne geç"
                >
                  <span>LAB</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Welcome Footer Metadata Bar */}
      <div className="container">
        <div ref={footerBarRef} className="welcome-footer-bar">
          <div className="meta-item">
            <span className="meta-item__label">EDITION:</span>
            <span className="meta-item__value meta-item__value--accent">2026 // VOL.01</span>
          </div>
          
          <div className="meta-item">
            <span className="meta-item__label">FOCUS:</span>
            <span className="meta-item__value">APPLIED SECURITY &amp; SYSTEMS</span>
          </div>

          <div className="coordinate-tracker" aria-hidden="true">
            <span className="meta-item__label">PTR_POS:</span>
            <span>X:[<strong>{Math.round(pointer.clientX).toString().padStart(4, '0')}</strong>]</span>
            <span>Y:[<strong>{Math.round(pointer.clientY).toString().padStart(4, '0')}</strong>]</span>
          </div>
        </div>
      </div>

    </section>
  );
};
