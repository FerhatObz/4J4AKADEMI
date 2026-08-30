import React, { useRef, useState, useEffect } from 'react';
import { booksData } from '../../data/books';
import { IconNext } from '../../lab/components/LabIcons';

interface WhoIAmSectionProps {
  pointer?: { x: number; y: number; clientX: number; clientY: number };
}

export const WhoIAmSection: React.FC<WhoIAmSectionProps> = ({ pointer }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!pointer) return;
    const px = Math.max(0, Math.min(100, (pointer.x + 1) * 50));
    const py = Math.max(0, Math.min(100, (-pointer.y + 1) * 50));
    setMousePos({ x: px, y: py });
  }, [pointer]);

  return (
    <section
      id="who-i-am"
      ref={sectionRef}
      className="section-who-i-am"
      style={{
        '--mouse-glow-x': `${mousePos.x}%`,
        '--mouse-glow-y': `${mousePos.y}%`
      } as React.CSSProperties}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="who-ambient-glow" aria-hidden="true" />
      <div className="who-grid-overlay" aria-hidden="true" />

      <div className="container who-container">
        
        {/* ── 1. HERO & IDENTITY METADATA ── */}
        <header className="who-hero-block">
          <div className="who-eyebrow mono-label">
            <span className="status-dot status-dot--pulse" />
            <span>PERSONAL IDENTITY // 4JAVA4 FOUNDER</span>
          </div>

          <h1 className="who-hero-title display-title">
            <span className="who-title-line">WHO I</span>
            <span className="who-title-line who-title-accent">AM</span>
          </h1>

          <div className="who-identity-meta">
            <div className="who-name-tag">
              <span className="who-name">FERHAT OBUZ</span>
              <span className="who-role mono-label">FOUNDER / 4JAVA4</span>
            </div>
            <div className="who-tags-row mono-label">
              <span>COMPUTER ENGINEERING</span>
              <span className="tag-sep">•</span>
              <span>CYBERSECURITY</span>
              <span className="tag-sep">•</span>
              <span>SOFTWARE</span>
              <span className="tag-sep">•</span>
              <span>AI & DATA</span>
              <span className="tag-sep">•</span>
              <span>BUILDER</span>
            </div>
            <div className="who-mantra-pill mono-label">
              <code>BUILD // BREAK // LEARN // REPEAT</code>
            </div>
          </div>
        </header>

        {/* ── 2. MANIFESTO / NARRATIVE ── */}
        <article className="who-manifesto-block">
          <h2 className="who-section-tag mono-label">// MANIFESTO</h2>
          <div className="who-prose-lead">
            <p>
              Teknoloji benim için yalnızca bir meslek değil; <strong>nasıl düşündüğümü ve dünyayı nasıl sorguladığımı</strong> belirleyen temel alan.
            </p>
            <p>
              Ferhat, teknolojiyi sadece kullanmakla yetinmeyen, <em>sistemlerin nasıl ve neden çalıştığını</em> en derindeki mimarisine kadar anlamaya çalışan, öğrendiklerini gerçek projelere dönüştüren, yazılım, siber güvenlik, yapay zekâ ve sistemler üzerinde üreten bir bilgisayar mühendisliği öğrencisidir.
            </p>
            <p>
              Bir sistemi kullanmadan önce: <strong>NEDEN ÇALIŞIYOR? NASIL ÇALIŞIYOR? BOZULURSA NE OLUR? DAHA İYİ NASIL YAPILIR?</strong> sorularını sorarım. Dokümantasyon okur, sistemleri parçalar, kod yazar, hata ayıklar ve daha sağlam biçimde yeniden inşa ederim.
            </p>
          </div>
        </article>

        {/* ── 3. MINDSET (HOW I THINK) ── */}
        <div className="who-mindset-section">
          <div className="who-section-header">
            <h2 className="who-section-title">HOW I THINK</h2>
            <span className="who-section-sublabel mono-label">PERSPECTIVE & METHODOLOGY</span>
          </div>

          <div className="who-mindset-grid">
            <div className="mindset-card">
              <span className="mindset-num mono-num">01</span>
              <h3 className="mindset-title">UNDERSTAND</h3>
              <p className="mindset-desc">
                Bir şeyi kullanmadan önce altındaki mimariyi ve çalışma mantığını anlamaya çalış.
              </p>
            </div>

            <div className="mindset-card">
              <span className="mindset-num mono-num">02</span>
              <h3 className="mindset-title">BUILD</h3>
              <p className="mindset-desc">
                Öğrendiklerini soyut bırakma; doğrudan çalışan gerçek projelere dönüştür.
              </p>
            </div>

            <div className="mindset-card">
              <span className="mindset-num mono-num">03</span>
              <h3 className="mindset-title">BREAK</h3>
              <p className="mindset-desc">
                Çalışmayan sistemleri incele ve hatalardan birer değerli veri olarak öğren.
              </p>
            </div>

            <div className="mindset-card">
              <span className="mindset-num mono-num">04</span>
              <h3 className="mindset-title">REPEAT</h3>
              <p className="mindset-desc">
                Öğrenmeyi hiçbir zaman tamamlanmış kabul etme; döngüyü kesintisiz yinele.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4. WHAT I BUILD ── */}
        <div className="who-build-section">
          <div className="who-section-header">
            <h2 className="who-section-title">WHAT I BUILD</h2>
            <span className="who-section-sublabel mono-label">DOMAINS & CAPABILITIES</span>
          </div>

          <div className="who-build-grid">
            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">SOFTWARE ENGINEERING</h3>
                <span className="build-tech-pill mono-label">Java / Kotlin / Python</span>
              </div>
              <p className="build-card-desc">
                Ölçeklenebilir arka plan (backend) mimarileri, nesne yönelimli tasarım ilkeleri ve temiz kod anlayışı.
              </p>
            </div>

            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">CYBERSECURITY</h3>
                <span className="build-tech-pill mono-label">Web / Network / Pentest</span>
              </div>
              <p className="build-card-desc">
                Ağ protokol zafiyetleri, web uygulama sızma testleri, zararlı yazılım analizi ve yetki yükseltme.
              </p>
            </div>

            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">AI & DATA PIPELINES</h3>
                <span className="build-tech-pill mono-label">AI / Data Analytics</span>
              </div>
              <p className="build-card-desc">
                Veri işleme boru hatları, makine öğrenmesi modelleri ve akıllı veri analitiği.
              </p>
            </div>

            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">MOBILE DEVELOPMENT</h3>
                <span className="build-tech-pill mono-label">Flutter / Android / iOS</span>
              </div>
              <p className="build-card-desc">
                Çoklu platform (cross-platform) ve yerel mobil uygulama geliştirme, UI/UX entegrasyonu.
              </p>
            </div>

            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">LINUX & SYSTEMS</h3>
                <span className="build-tech-pill mono-label">Linux / Bash / Kernel</span>
              </div>
              <p className="build-card-desc">
                Linux sistem yönetimi, Bash kabuk otomasyonu, dosya hiyerarşisi (FHS) ve sunucu güvenliği.
              </p>
            </div>

            <div className="build-card">
              <div className="build-card-head">
                <h3 className="build-card-title">OPEN SOURCE & EDUCATION</h3>
                <span className="build-tech-pill mono-label">4JAVA4 / Web / Open Source</span>
              </div>
              <p className="build-card-desc">
                Açık kaynak kodlu eğitim materyalleri, interaktif lab simülatörleri ve topluluk repoları.
              </p>
            </div>
          </div>
        </div>

        {/* ── 5. WHY 4JAVA4? ── */}
        <div className="who-why-4java4-block">
          <div className="why-inner-card">
            <div className="why-tag mono-label">
              <span className="status-dot" /> CORE BRAND MISSION
            </div>
            <h2 className="why-title">WHY 4JAVA4?</h2>
            <blockquote className="why-quote">
              "Öğrendiğim bir şeyin sadece bende kalmasını istemiyorum. Benden sonra gelen kişinin başlangıç çizgisini biraz daha ileri taşımak istiyorum."
            </blockquote>
            <p className="why-desc">
              4JAVA4; sadece bir sosyal medya veya platform değildir. Öğrenme, üretme, paylaşma, yazılım, siber güvenlik, yapay zekâ, kitaplar ve projeler ekseninde şekillenen <strong>kişisel bir üretim ve eğitim ekosistemidir</strong>.
            </p>
          </div>
        </div>

        {/* ── 6. BOOKS / KNOWLEDGE (I WRITE TOO) ── */}
        <div className="who-books-section">
          <div className="who-section-header">
            <h2 className="who-section-title">KNOWLEDGE SHOULD LEAVE A TRACE</h2>
            <span className="who-section-sublabel mono-label">I WRITE TOO // ESERLER</span>
          </div>

          <div className="who-books-grid">
            {booksData.slice(0, 4).map((book) => (
              <a
                key={book.id}
                href={book.shopierUrl && book.shopierUrl !== '#' ? book.shopierUrl : '#'}
                target={book.shopierUrl && book.shopierUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="who-book-item-card"
              >
                <div className="who-book-code mono-num">{book.number}</div>
                <div className="who-book-info">
                  <h3 className="who-book-title">{book.shortTitle}</h3>
                  <span className="who-book-subtitle mono-label">{book.subtitle}</span>
                </div>
                <div className="who-book-link-arrow">
                  <IconNext size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── 7. REAL WORLD EXPERIENCE ── */}
        <div className="who-experience-section">
          <div className="who-section-header">
            <h2 className="who-section-title">REAL WORLD</h2>
            <span className="who-section-sublabel mono-label">EDITORIAL PROJECT ENTRY</span>
          </div>

          <div className="who-experience-card">
            <div className="exp-timeline mono-label">GERÇEK SAHA DENEYİMİ</div>
            <div className="exp-main">
              <h3 className="exp-role">MOBILE APPLICATION DEVELOPER</h3>
              <div className="exp-company mono-label">ERZURUM BÜYÜKŞEHİR BELEDİYESİ</div>
              <p className="exp-desc">
                Kurumsal mobil uygulama mimarisi, Flutter ile cross-platform geliştirme, MySQL veritabanı entegrasyonu, Git versiyon kontrolü ve Android & iOS canlı dağıtım süreçleri.
              </p>
              <div className="exp-tech-tags mono-label">
                <span>Flutter</span>
                <span>•</span>
                <span>MySQL</span>
                <span>•</span>
                <span>Git</span>
                <span>•</span>
                <span>Android</span>
                <span>•</span>
                <span>iOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 8. EDUCATION & ACADEMIC ── */}
        <div className="who-education-block">
          <div className="edu-card">
            <span className="edu-tag mono-label">ACADEMIC IDENTITY BLOCK</span>
            <h3 className="edu-school">ERZURUM TECHNICAL UNIVERSITY</h3>
            <div className="edu-degree mono-label">COMPUTER ENGINEERING</div>
            <div className="edu-years mono-num">2023 — 2028</div>
          </div>
        </div>

        {/* ── 9. CONNECT (WHO I AM IDENTITY FOOTER) ── */}
        <div className="who-connections-section">
          <div className="who-section-header">
            <h2 className="who-section-title">CONNECT</h2>
            <span className="who-section-sublabel mono-label">FERHAT OBUZ // IDENTITY FOOTER</span>
          </div>

          <div className="who-connect-box">
            <div className="connect-meta-head">
              <span className="connect-name">FERHAT OBUZ</span>
              <span className="connect-sub mono-label">COMPUTER ENGINEERING · CYBERSECURITY · BUILDER</span>
            </div>

            <div className="connect-mail-line mono-label">
              <span className="label-text">CONTACT:</span>
              <a href="mailto:obuzferhat007@gmail.com" className="connect-mail-link">obuzferhat007@gmail.com</a>
            </div>

            <div className="who-links-grid">
              <a
                href="https://github.com/FerhatObz"
                target="_blank"
                rel="noopener noreferrer"
                className="who-social-card"
              >
                <div className="social-card-head">
                  <span className="social-platform mono-label">GITHUB →</span>
                  <span className="social-handle mono-label">@FerhatObz</span>
                </div>
                <p className="social-desc">Açık kaynak projeler, kod repoları ve sürekli üretim alanı.</p>
              </a>

              <a
                href="https://www.linkedin.com/in/ferhat-obuz-74a220367/"
                target="_blank"
                rel="noopener noreferrer"
                className="who-social-card"
              >
                <div className="social-card-head">
                  <span className="social-platform mono-label">LINKEDIN →</span>
                  <span className="social-handle mono-label">/in/ferhat-obuz</span>
                </div>
                <p className="social-desc">Profesyonel ağ, teknik deneyimler ve kariyer bağlantıları.</p>
              </a>
            </div>
          </div>
        </div>

        {/* ── 10. FINAL STATEMENT CLOSING ── */}
        <footer className="who-final-statement-block">
          <h2 className="final-statement-title display-title">
            BUILD. BREAK. LEARN. REPEAT.
          </h2>
          <div className="final-signature mono-label">
            <span>FERHAT OBUZ</span>
            <span className="sig-sep">//</span>
            <span className="sig-brand">4JAVA4</span>
          </div>
        </footer>

      </div>
    </section>
  );
};
