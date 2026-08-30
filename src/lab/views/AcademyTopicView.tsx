import React, { useState, useEffect } from 'react';
import {
  getTopicBySlugs,
  getNextTopicInCurriculum,
  getPrevTopicInCurriculum
} from '../../data/lab/academyCurriculum';
import { booksData } from '../../data/books';
import { useLabProgress } from '../state/useLabProgress';
import { InteractiveCyberSandbox } from '../components/InteractiveCyberSandbox';
import { IconBack, IconNext, IconCheck, IconBook, IconPractice, IconGraduation } from '../components/LabIcons';

interface AcademyTopicViewProps {
  pathSlug: string;
  moduleSlug: string;
  topicSlug: string;
  onNavigateTopic: (pathSlug: string, moduleSlug: string, topicSlug: string) => void;
  onNavigateModule: (pathSlug: string, moduleSlug: string) => void;
  onNavigatePath: (pathSlug: string) => void;
}

export const AcademyTopicView: React.FC<AcademyTopicViewProps> = ({
  pathSlug,
  moduleSlug,
  topicSlug,
  onNavigateTopic,
  onNavigateModule,
  onNavigatePath
}) => {
  const data = getTopicBySlugs(pathSlug, moduleSlug, topicSlug);
  const { markTopicVisited, markTopicCompleted, isTopicCompleted } = useLabProgress();

  // Practice state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [practiceChecked, setPracticeChecked] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-01');

  useEffect(() => {
    if (topicSlug) {
      markTopicVisited(topicSlug);
      setSelectedAnswer(null);
      setPracticeChecked(false);
      document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [topicSlug]);

  if (!data) {
    return (
      <div className="lab-error">
        <p>Konu bulunamadı.</p>
        <button onClick={() => onNavigatePath(pathSlug)} className="lab-back-btn">
          <IconBack size={16} /> <span>BÖLÜME DÖN</span>
        </button>
      </div>
    );
  }

  const { path, module: mod, topic } = data;
  const isCompleted = isTopicCompleted(topic.slug);
  const prevTopicData = getPrevTopicInCurriculum(path.slug, mod.slug, topic.slug);
  const nextTopicData = getNextTopicInCurriculum(path.slug, mod.slug, topic.slug);

  // Determine if next topic is in a different module
  const isLastTopicInModule = !nextTopicData || nextTopicData.module.slug !== mod.slug;

  const recommendedBook = topic.recommendedBookId
    ? booksData.find(b => b.slug === topic.recommendedBookId)
    : null;

  // ScrollSpy for "SAYFA İÇİ İNDEKS"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    topic.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [topic.slug, topic.sections]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  const handleCheckPractice = () => {
    if (!selectedAnswer) return;
    setPracticeChecked(true);
    markTopicCompleted(topic.slug);
  };

  return (
    <div
      className="academy-topic-layout"
      style={{ '--path-accent': path.accentColor } as React.CSSProperties}
    >
      {/* 1. LEFT MODÜL KONU LİSTESİ (STICKY NAV) */}
      <aside className="academy-module-nav" aria-label="Modül Konu Listesi">
        <div className="module-nav-header">
          <span className="nav-path-name mono-label">{path.shortTitle.toUpperCase()}</span>
          <h4 className="nav-module-title">MODÜL {mod.code} // {mod.title}</h4>
        </div>

        <nav className="module-nav-list">
          {mod.topics.map((t) => {
            const isCurrent = t.slug === topic.slug;
            const isDone = isTopicCompleted(t.slug);

            return (
              <button
                key={t.id}
                type="button"
                className={`module-nav-item ${isCurrent ? 'is-current' : ''} ${isDone ? 'is-done' : ''}`}
                onClick={() => onNavigateTopic(path.slug, mod.slug, t.slug)}
              >
                <span className="item-code mono-num">{t.code}</span>
                <span className="item-title">{t.title}</span>
                {isDone && <IconCheck size={14} className="item-check" color="var(--path-accent, #B7FF00)" />}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 2. CENTER CONTENT COLUMN */}
      <main className="academy-topic-canvas">
        {/* Topic Header */}
        <header className="topic-header-block">
          <div className="topic-meta-strip mono-label">
            <span className="meta-accent">{path.code} // {path.shortTitle.toUpperCase()}</span>
            <span className="meta-sep">•</span>
            <span>MODÜL {mod.code} // {mod.title}</span>
            <span className="meta-sep">•</span>
            <span>KONU {topic.order.toString().padStart(2, '0')} / {mod.topics.length.toString().padStart(2, '0')}</span>
          </div>

          <h1 className="topic-headline display-title">{topic.title}</h1>
          {topic.subtitle && <p className="topic-subline mono-label">{topic.subtitle}</p>}

          <div className="topic-info-bar mono-label">
            <span>OKUMA SÜRESİ: {topic.readTime || '8 DAKİKA'}</span>
            <span>•</span>
            <span className={isCompleted ? 'status-text--done' : 'status-text--active'}>
              {isCompleted ? '✓ TAMAMLANDI' : '● DEVAM EDİYOR'}
            </span>
          </div>
        </header>

        {/* Live Cyber Interactive Simulator Sandbox */}
        <InteractiveCyberSandbox topicSlug={topic.slug} accentColor={path.accentColor} />

        {/* Topic Body Prose Sections */}
        <div className="topic-prose-body">
          {topic.sections.map((section) => (
            <section key={section.id} id={section.id} className="topic-section-block">
              <h2 className="section-title-tag mono-label">
                {section.code} // {section.title}
              </h2>
              <div className="section-content-text">
                {section.content.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {section.codeSnippet && (
                <pre className="topic-code-snippet">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              )}
            </section>
          ))}

          {/* Summary Block */}
          {topic.summary && topic.summary.length > 0 && (
            <section className="topic-section-block topic-summary-block">
              <h2 className="section-title-tag mono-label">DERS ÖZETİ</h2>
              <ul className="summary-bullets">
                {topic.summary.map((point, idx) => (
                  <li key={idx}>
                    <span className="summary-dot">◈</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Practice / Verification Exercise */}
          {topic.practice && (
            <section id="sec-practice" className="topic-section-block topic-practice-block">
              <div className="practice-header">
                <span className="practice-badge mono-label">
                  <IconPractice size={14} /> PRATİK KONU TESTİ
                </span>
                <h3 className="practice-prompt">{topic.practice.prompt}</h3>
              </div>

              <div className="practice-options-col" role="radiogroup">
                {topic.practice.options.map((opt) => {
                  const isSelected = selectedAnswer === opt.id;
                  let stateClass = '';

                  if (practiceChecked) {
                    if (opt.id === topic.practice!.correctAnswer) stateClass = 'opt--correct';
                    else if (isSelected) stateClass = 'opt--wrong';
                  } else if (isSelected) {
                    stateClass = 'opt--selected';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={`practice-opt-btn ${stateClass}`}
                      onClick={() => !practiceChecked && setSelectedAnswer(opt.id)}
                      disabled={practiceChecked}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      <span className="opt-letter mono-num">[{opt.id.toUpperCase()}]</span>
                      <span className="opt-label-text">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {!practiceChecked ? (
                <button
                  type="button"
                  className="cta-primary practice-submit-btn"
                  onClick={handleCheckPractice}
                  disabled={!selectedAnswer}
                >
                  <span>CEVABI KONTROL ET</span>
                  <IconNext size={16} />
                </button>
              ) : (
                <div className={`practice-feedback-card ${selectedAnswer === topic.practice.correctAnswer ? 'is-correct' : 'is-wrong'}`}>
                  <span className="feedback-status-title mono-label">
                    {selectedAnswer === topic.practice.correctAnswer ? '✓ DOĞRU KAVRANDI' : '✕ TEKRAR İNCELE'}
                  </span>
                  <p className="feedback-explanation">{topic.practice.explanation}</p>
                </div>
              )}
            </section>
          )}

          {/* Book Deep Dive */}
          {recommendedBook && (
            <div className="topic-book-connection">
              <div className="book-connection-header">
                <IconBook size={16} />
                <span className="mono-label">BASILI ESER DESTEĞİ</span>
              </div>
              <h4 className="book-connection-title">{recommendedBook.title}</h4>
              <p className="book-connection-desc">
                {topic.bookDeepDiveReason || "Bu konuyu ve ilgili protokol zafiyetlerini derinlemesine incelemek için:"}
              </p>
              <a
                href={recommendedBook.shopierUrl && recommendedBook.shopierUrl !== '#' ? recommendedBook.shopierUrl : '#'}
                target={recommendedBook.shopierUrl && recommendedBook.shopierUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="cta-primary"
              >
                <span>KİTABI İNCELE</span>
                <IconNext size={16} />
              </a>
            </div>
          )}

          {/* Footer Navigation Bar */}
          <footer className="topic-footer-nav-bar">
            <div className="footer-nav-prev">
              {prevTopicData ? (
                <button
                  type="button"
                  className="footer-nav-btn prev-btn"
                  onClick={() => onNavigateTopic(prevTopicData.path.slug, prevTopicData.module.slug, prevTopicData.topic.slug)}
                >
                  <span className="btn-tag mono-label">← ÖNCEKİ KONU</span>
                  <span className="btn-title">{prevTopicData.topic.title}</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="footer-nav-btn"
                  onClick={() => onNavigateModule(path.slug, mod.slug)}
                >
                  <span className="btn-tag mono-label">← MODÜLE DÖN</span>
                  <span className="btn-title">{mod.title}</span>
                </button>
              )}
            </div>

            <div className="footer-nav-next">
              {nextTopicData ? (
                <button
                  type="button"
                  className="cta-primary next-primary-btn"
                  onClick={() => {
                    markTopicCompleted(topic.slug);
                    onNavigateTopic(nextTopicData.path.slug, nextTopicData.module.slug, nextTopicData.topic.slug);
                  }}
                >
                  <span>
                    {isLastTopicInModule ? 'SONRAKİ MODÜL →' : 'SONRAKİ KONU →'}
                  </span>
                  <IconNext size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  className="cta-primary graduation-btn"
                  onClick={() => {
                    markTopicCompleted(topic.slug);
                    onNavigatePath(path.slug);
                  }}
                >
                  <IconGraduation size={18} />
                  <span>EĞİTİMİ TAMAMLA</span>
                </button>
              )}
            </div>
          </footer>
        </div>
      </main>

      {/* 3. RIGHT MINIMAL TOC */}
      {topic.sections.length > 2 && (
        <aside className="academy-toc-rail" aria-label="Sayfa İçi İndeks">
          <div className="toc-sticky-box">
            <span className="toc-header-tag mono-label">SAYFA İÇİ İNDEKS</span>

            <nav className="toc-items-list">
              {topic.sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  className={`toc-item-link mono-label ${activeSectionId === sec.id ? 'is-active' : ''}`}
                  onClick={() => handleScrollTo(sec.id)}
                >
                  <span className="toc-num">{sec.code}</span>
                  <span className="toc-title">{sec.title}</span>
                </button>
              ))}
              {topic.practice && (
                <button
                  type="button"
                  className={`toc-item-link mono-label ${activeSectionId === 'sec-practice' ? 'is-active' : ''}`}
                  onClick={() => handleScrollTo('sec-practice')}
                >
                  <span className="toc-num">✦</span>
                  <span className="toc-title">TEST</span>
                </button>
              )}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
};
