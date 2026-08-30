import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export interface MagneticButtonProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  strength?: number;
  cursorLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  id,
  className = '',
  strength = 0.35,
  cursorLabel,
  onClick,
  href,
  target,
  rel,
  'aria-label': ariaLabel,
  disabled = false
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || disabled || window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto'
      });
    };

    const onMouseMove = (e: Event) => handleMouseMove(e as MouseEvent);
    const onMouseLeave = () => handleMouseLeave();

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength, disabled]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (href && href.startsWith('#')) {
      e.preventDefault();
      if (href.length > 1) {
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  const commonProps = {
    id,
    className,
    'data-cursor-label': cursorLabel,
    'aria-label': ariaLabel
  };

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={handleAnchorClick}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
};
