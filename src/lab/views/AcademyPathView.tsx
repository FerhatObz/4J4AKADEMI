import React from 'react';
import { getPathBySlug } from '../../data/lab/academyCurriculum';
import { booksData } from '../../data/books';
import { useLabProgress } from '../state/useLabProgress';
import { ModuleItem } from '../../types/lab';
import { IconBack, IconNext, IconCheck, IconBook } from '../components/LabIcons';

interface AcademyPathViewProps {
  pathSlug: string;
  onSelectModule: (pathSlug: string, moduleSlug: string) => void;
  onBackToHome: () => void;
}

export const AcademyPathView: React.FC<AcademyPathViewProps> = ({
  pathSlug,
  onSelectModule,
  onBackToHome
}) => {
  const path = getPathBySlug(pathSlug);
  const { completedTopics } = useLabProgress();

  if (!path) {
    return (
      <div className="lab-error">
        <p>Bölüm bulunamadı.</p>
        <button onClick={onBackToHome} className="lab-back-btn">
          <IconBack size={16} /> <span>EĞİTİM YOLLARINA DÖN</span>
        </button>
      </div>
    );
  }

  const allTopics = path.modules.flatMap(m => m.topics);
  const totalTopics = allTopics.length;
  const completedCount = allTopics.filter(t => completedTopics.includes(t.slug)).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const recommendedBook = path.recommendedBookId
    ? booksData.find(b => b.slug === path.recommendedBookId)
    : null;

  return (
    <div
      className="lab-path-view"
      style={{ '--path-accent': path.accentColor } as React.CSSProperties}
    >
      {/* Back Button */}
      <div className="lab-view-top-nav">
        <button type="button" className="lab-back-link mono-label" onClick={onBackToHome}>
          <IconBack size={16} /> <span>← EĞİTİM YOLLARINA DÖN</span>
        </button>
      </div>

      {/* Path Header */}
      <div className="lab-path-header">
        <div className="lab-path-header-code mono-num">{path.code}</div>
        <h1 className="lab-path-header-title">{path.title}</h1>
        <p className="lab-path-header-desc">{path.description || path.tagline}</p>

        {totalTopics > 0 && (
          <div className="lab-path-header-progress">
            <div className="lab-path-progress-meta mono-label">
              <span>{path.modules.length} MODÜL</span>
              <span>•</span>
              <span>{totalTopics} KONU</span>
              <span>•</span>
              <span className="lab-path-done">%{progressPercent} TAMAMLANDI</span>
            </div>
            <div className="lab-path-progress-bar">
              <div className="lab-path-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Module List — numbered, clean */}
      <div className="lab-modules-section">
        <div className="lab-section-header">
          <h2 className="lab-section-label">BÖLÜM MODÜLLERİ</h2>
          <span className="lab-section-count mono-label">{path.modules.length} MODÜL</span>
        </div>

        <div className="lab-modules-list">
          {path.modules.map((mod: ModuleItem, idx: number) => {
            const modTopics = mod.topics;
            const modDone = modTopics.filter(t => completedTopics.includes(t.slug)).length;
            const hasTopics = modTopics.length > 0;
            const isModCompleted = hasTopics && modDone === modTopics.length;

            return (
              <div
                key={mod.id}
                className={`lab-module-row ${hasTopics ? '' : 'lab-module-row--upcoming'} ${isModCompleted ? 'lab-module-row--completed' : ''}`}
                onClick={() => hasTopics && onSelectModule(path.slug, mod.slug)}
              >
                <div className="lab-module-num mono-num">{String(idx + 1).padStart(2, '0')}</div>
                
                <div className="lab-module-info">
                  <div className="lab-module-title-row">
                    <h3 className="lab-module-title">{mod.title}</h3>
                    {isModCompleted && (
                      <span className="mod-completed-badge mono-label">
                        <IconCheck size={14} /> TAMAMLANDI
                      </span>
                    )}
                  </div>
                  <p className="lab-module-desc">{mod.description}</p>

                  {hasTopics && (
                    <div className="lab-module-meta mono-label">
                      {modDone > 0
                        ? `${modDone} / ${modTopics.length} KONU TAMAMLANDI`
                        : `${modTopics.length} KONU`
                      }
                    </div>
                  )}
                  {!hasTopics && <div className="lab-module-meta lab-module-meta--soon mono-label">HAZIRLANIYOR</div>}
                </div>

                {hasTopics && (
                  <div className="lab-module-action">
                    <button type="button" className="lab-mod-btn">
                      <span>MODÜLÜ AÇ</span>
                      <IconNext size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Book Link */}
      {recommendedBook && (
        <div className="lab-book-strip">
          <div className="lab-book-strip-left">
            <IconBook size={24} />
            <div>
              <div className="lab-book-strip-label mono-label">İLGİLİ BASILI ESER</div>
              <div className="lab-book-strip-title">{recommendedBook.title}</div>
            </div>
          </div>
          <a
            href={recommendedBook.shopierUrl && recommendedBook.shopierUrl !== '#' ? recommendedBook.shopierUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="lab-book-strip-link"
          >
            <span>KİTABI İNCELE</span>
            <IconNext size={16} />
          </a>
        </div>
      )}
    </div>
  );
};
