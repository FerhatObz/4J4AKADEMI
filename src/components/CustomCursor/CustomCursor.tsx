import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (Desktop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'left', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'top', { duration: 0.18, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      // Check if target has cursor attributes or is interactive
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor-label], a, button') as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const customLabel = interactiveEl.getAttribute('data-cursor-label') || '';
        setLabel(customLabel);
      } else {
        setIsHovered(false);
        setLabel('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovered ? 'custom-cursor--hover' : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="custom-cursor__dot" />
      <div className="custom-cursor__ring" />
      {label && <span className="custom-cursor__label">{label}</span>}
    </div>
  );
};
