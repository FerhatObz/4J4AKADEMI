import React, { useState } from 'react';

interface ContactSectionProps {
  pointer?: { x: number; y: number; clientX: number; clientY: number };
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);
  const email = "obuzferhat007@gmail.com";
  const mailtoUrl = `mailto:${email}?subject=4JAVA4%20Website%20Contact`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="section-contact-footer">
      <div className="contact-ambient-glow" aria-hidden="true" />
      <div className="contact-grid-overlay" aria-hidden="true" />

      <div className="container contact-container">
        
        {/* ── 1. MAIN EDITORIAL HEADLINE ── */}
        <div className="contact-hero-block">
          <div className="contact-eyebrow mono-label">
            <span className="status-dot status-dot--pulse" />
            <span>CONNECT // MAIL_READY</span>
          </div>

          <h2 className="contact-headline display-title">
            LET'S <br />
            <span className="contact-headline-accent">TALK.</span>
          </h2>

          <p className="contact-subtext">
            Bir fikir, proje, iş birliği veya sadece konuşmak istediğin bir konu varsa bana doğrudan ulaşabilirsin.
          </p>
        </div>

        {/* ── 2. INTERACTIVE EMAIL CARD ── */}
        <div className="contact-mail-card">
          <div className="mail-card-meta mono-label">
            <span className="meta-tag">PRIMARY_EMAIL</span>
            <span className="meta-status">{copied ? '✓ KOPYALANDI' : 'MAIL_READY → CONNECT'}</span>
          </div>

          <div className="mail-address-row">
            <a
              href={mailtoUrl}
              className="mail-address-link display-title"
              title="Varsayılan mail uygulaması ile e-posta gönder"
            >
              {email}
            </a>

            <div className="mail-actions">
              <a
                href={mailtoUrl}
                className="contact-btn contact-btn--primary mono-label"
              >
                <span>EMAIL ME</span>
                <span className="btn-arrow">→</span>
              </a>

              <button
                type="button"
                className="contact-btn contact-btn--copy mono-label"
                onClick={handleCopyEmail}
                title="E-posta adresini kopyala"
              >
                <span>{copied ? 'KOPYALANDI' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 3. ALTERNATIVE SOCIAL LINKS ROW ── */}
        <div className="contact-social-row">
          <a
            href="https://github.com/FerhatObz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link mono-label"
          >
            <span>GITHUB</span>
            <span className="link-arrow">→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ferhat-obuz-74a220367/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link mono-label"
          >
            <span>LINKEDIN</span>
            <span className="link-arrow">→</span>
          </a>
        </div>

        {/* ── 4. YASAL UYARI VE GÜVENLİK BİLDİRİMİ // LEGAL & ETHICAL DISCLAIMER ── */}
        <div className="contact-legal-block">
          <div className="legal-header mono-label">
            <span className="status-dot status-dot--warning" />
            <span>YASAL UYARI &amp; ETİK GÜVENLİK BİLDİRİMİ // LEGAL DISCLAIMER</span>
          </div>

          <div className="legal-grid">
            <div className="legal-col">
              <h4 className="legal-title mono-label">01 / ETİK KULLANIM VE EĞİTİM AMACI</h4>
              <p className="legal-text">
                4JAVA4 platformundaki tüm kitaplar, akademi modülleri, sızma testi teknikleri ve lab materyalleri <strong>yalnızca yasal, savunma odaklı ve akademik siber güvenlik eğitimi</strong> amacıyla sunulmaktadır.
              </p>
            </div>

            <div className="legal-col">
              <h4 className="legal-title mono-label">02 / SORUMLULUK SINIRLANDIRMASI (TCK 243/244)</h4>
              <p className="legal-text">
                İzin alınmamış hedef sistemler üzerinde zafiyet taraması yapmak veya yetkisiz erişim sağlamak Türk Ceza Kanunu (TCK Madde 243, 244) uyarınca ağır bir suçtur. Ferhat Obuz ve 4JAVA4, materyallerin kötüye kullanımından sorumlu tutulamaz.
              </p>
            </div>

            <div className="legal-col">
              <h4 className="legal-title mono-label">03 / FİKRİ MÜLKİYET VE TELİF HAKLARI</h4>
              <p className="legal-text">
                4JAVA4 markası, platform tasarımı, müfredat yapısı ve kitap içerikleri 5846 Sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır. Yazılı izin olmaksızın kopyalanamaz ve dağıtılamaz.
              </p>
            </div>
          </div>
        </div>

        {/* ── 5. FINAL MINIMAL FOOTER STAMP ── */}
        <div className="contact-final-footer mono-label">
          <div className="footer-brand-meta">
            <span className="footer-logo">4JAVA4 // AKADEMİ</span>
            <span className="footer-author">FERHAT OBUZ</span>
          </div>

          <div className="footer-mantra">
            <code>BUILD. BREAK. LEARN. REPEAT.</code>
          </div>

          <div className="footer-legal-badge">
            <span>TCK 243/244 COMPLIANT</span>
          </div>

          <div className="footer-year">
            <span>© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
