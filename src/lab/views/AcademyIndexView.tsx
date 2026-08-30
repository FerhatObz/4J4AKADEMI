import React, { useState, useMemo } from 'react';
import { academyCurriculum, getAllTopicsFlat, getTopicBySlugs } from '../../data/lab/academyCurriculum';
import { useLabProgress } from '../state/useLabProgress';
import { PathItem } from '../../types/lab';
import { IconSearch, IconNext, IconCheckCircle, IconClose } from '../components/LabIcons';

interface AcademyIndexViewProps {
  onSelectPath: (pathSlug: string) => void;
  onSelectTopicDirect: (pathSlug: string, moduleSlug: string, topicSlug: string) => void;
  onStartZero: () => void;
}

export const AcademyIndexView: React.FC<AcademyIndexViewProps> = ({
  onSelectPath,
  onSelectTopicDirect,
  onStartZero
}) => {
  const { completedTopics, lastVisitedTopicSlug } = useLabProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const allTopics = useMemo(() => getAllTopicsFlat(), []);

  // Calculate overall stats
  const totalTopicsCount = allTopics.length;
  const completedCount = completedTopics.length;
  const overallPercent = totalTopicsCount > 0 ? Math.round((completedCount / totalTopicsCount) * 100) : 0;

  // Find last visited topic details for the "DEVAM ET" card
  const lastVisitedTopicData = useMemo(() => {
    if (!lastVisitedTopicSlug) return null;
    const found = allTopics.find(t => t.slug === lastVisitedTopicSlug);
    if (!found) return null;
    return getTopicBySlugs(found.pathSlug, found.moduleSlug, found.slug);
  }, [lastVisitedTopicSlug, allTopics]);

  const filteredPaths = useMemo(() => {
    if (!searchQuery.trim()) return academyCurriculum;
    const q = searchQuery.toLowerCase().trim();
    return academyCurriculum.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.modules.some(m =>
        m.title.toLowerCase().includes(q) ||
        m.topics.some(t => t.title.toLowerCase().includes(q))
      )
    );
  }, [searchQuery]);

  return (
    <div className="lab-index">

      {/* ── 1. HERO & STATS CARD ── */}
      <div className="lab-hero">
        <div className="lab-hero-eyebrow mono-label">
          <span className="status-dot" /> 4JAVA4 CYBER LAB
        </div>

        <h1 className="lab-hero-title">SİBER GÜVENLİK AKADEMİSİ</h1>

        <p className="lab-hero-desc">
          Sıfırdan başla. Bilgisayar mimarisinden ağ protokollerine, web zafiyetlerinden adli bilişime kadar
          <strong> {academyCurriculum.length} Eğitim Yolu</strong> ve <strong>{totalTopicsCount} Derin Konu</strong>.
        </p>

        {/* Action Bar: DEVAM ET Card or SIFIRDAN BAŞLA */}
        <div className="lab-hero-actions">
          {lastVisitedTopicData ? (
            <div className="lab-continue-card">
              <div className="continue-card-label mono-label">
                <IconCheckCircle size={14} /> NEREDEN DEVAM EDEBİLİRSİN?
              </div>
              <div className="continue-card-title">
                {lastVisitedTopicData.path.title} / MODÜL {lastVisitedTopicData.module.code}
              </div>
              <div className="continue-card-topic">
                {lastVisitedTopicData.topic.title}
              </div>
              <button
                type="button"
                className="lab-continue-btn"
                onClick={() => onSelectTopicDirect(
                  lastVisitedTopicData.path.slug,
                  lastVisitedTopicData.module.slug,
                  lastVisitedTopicData.topic.slug
                )}
              >
                <span>KALDIĞIN YERDEN DEVAM ET</span>
                <IconNext size={16} />
              </button>
            </div>
          ) : (
            <button type="button" className="lab-start-btn" onClick={onStartZero}>
              <span>SIFIRDAN BAŞLA (00 COMPUTER FUNDAMENTALS)</span>
              <IconNext size={18} />
            </button>
          )}

          {/* Quick Stats overview */}
          <div className="lab-quick-stats">
            <div className="stat-box">
              <span className="stat-num">{completedCount} / {totalTopicsCount}</span>
              <span className="stat-label">TAMAMLANAN KONU</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">%{overallPercent}</span>
              <span className="stat-label">GENEL İLERLEME</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. EĞİTİM YOLLARI // CURRICULUM ── */}
      <div className="lab-paths-section">
        <div className="lab-section-header">
          <div className="lab-section-title-wrap">
            <h2 className="lab-section-label">EĞİTİM YOLLARI</h2>
            <span className="lab-section-sublabel mono-label">CURRICULUM // PATHS</span>
          </div>
          <span className="lab-section-count mono-label">{academyCurriculum.length} EĞİTİM YOLU</span>
        </div>

        <div className="lab-paths-grid">
          {filteredPaths.map((path: PathItem) => {
            const allPathTopics = path.modules.flatMap(m => m.topics);
            const totalTopics = allPathTopics.length;
            const completedInPath = allPathTopics.filter(t => completedTopics.includes(t.slug)).length;
            const progressPercent = totalTopics > 0 ? Math.round((completedInPath / totalTopics) * 100) : 0;
            const hasContent = path.modules.length > 0;

            return (
              <div
                key={path.id}
                className={`lab-path-card ${hasContent ? '' : 'lab-path-card--upcoming'}`}
                style={{ '--path-accent': path.accentColor } as React.CSSProperties}
                onClick={() => hasContent && onSelectPath(path.slug)}
              >
                {/* Header: Numara + Path Adı */}
                <div className="path-card-head">
                  <span className="path-card-num mono-num">{path.code}</span>
                  <h3 className="path-card-title">{path.title}</h3>
                </div>

                {/* Kısa Açıklama */}
                <p className="path-card-desc">{path.tagline}</p>

                {/* Modül & Konu Sayısı */}
                <div className="path-card-stats mono-label">
                  <span>{path.modules.length} MODÜL</span>
                  <span className="stats-dot">•</span>
                  <span>{totalTopics} KONU</span>
                </div>

                {/* İlerleme Barı */}
                {hasContent && totalTopics > 0 && (
                  <div className="path-card-progress">
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="progress-percent mono-label">%{progressPercent}</span>
                  </div>
                )}

                {/* Footer Action */}
                <div className="path-card-footer">
                  {hasContent ? (
                    <button
                      type="button"
                      className="path-card-action-btn mono-label"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPath(path.slug);
                      }}
                    >
                      <span>BÖLÜMÜ AÇ</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  ) : (
                    <span className="path-card-soon mono-label">HAZIRLANIYOR</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 3. HIZLI ARAMA (SEARCH) ── */}
      <div className="lab-search-area">
        <div className="lab-search-label mono-label">
          <IconSearch size={16} /> HIZLI KONU VE PROTOKOL ARAMASI
        </div>
        <div className="lab-search-wrap">
          <input
            className="lab-search-input"
            type="text"
            placeholder="Konu, protokol veya zafiyet ara (Örn: TCP, DNS, Subnetting)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button type="button" className="lab-search-clear" onClick={() => setSearchQuery('')} title="Temizle">
              <IconClose size={16} />
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="lab-search-results">
            {allTopics
              .filter(t =>
                t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice(0, 10)
              .map(t => (
                <button
                  key={t.id}
                  type="button"
                  className="lab-search-result-row"
                  onClick={() => onSelectTopicDirect(t.pathSlug, t.moduleSlug, t.slug)}
                >
                  <span className="lab-search-result-title">{t.title}</span>
                  <span className="lab-search-result-path mono-label">
                    {t.pathSlug.replace(/-/g, ' ').toUpperCase()}
                  </span>
                </button>
              ))
            }
          </div>
        )}
      </div>

    </div>
  );
};
