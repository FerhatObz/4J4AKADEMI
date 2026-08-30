import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  num: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'welcome', label: 'ANA SAYFA', num: '00' },
  { id: 'who-i-am', label: 'WHO I AM', num: '01' },
  { id: 'books', label: 'KİTAPLAR', num: '02' },
  { id: 'lab', label: 'AKADEMİ LAB', num: '03' },
  { id: 'contact', label: 'İLETİŞİM', num: '04' },
];

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'welcome') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand logo & tagline */}
        <div className="brand-mark">
          <a
            href="#welcome"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('welcome');
            }}
            className="brand-logo"
            data-cursor-label="HOME"
          >
            4JAVA4
          </a>
          <span className="brand-tag">// AKADEMİ</span>
        </div>

        {/* Central Direct Navigation Bar */}
        <nav className={`header-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Ana Navigasyon">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`header-nav-link mono-label ${activeSection === item.id ? 'is-active' : ''}`}
            >
              <span className="nav-num">{item.num}</span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action & System Status */}
        <div className="header-actions">
          <div className="meta-item">
            <span className="status-dot status-dot--pulse" />
            <span className="mono-label">SYS_READY</span>
          </div>

          <button
            type="button"
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç / Kapat"
            title="Navigasyon Menüsü"
          >
            <span className="toggle-bar" />
            <span className="toggle-bar" />
          </button>
        </div>
      </div>
    </header>
  );
};
