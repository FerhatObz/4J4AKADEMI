import React from 'react';
import { getModuleBySlug } from '../../data/lab/academyCurriculum';
import { useLabProgress } from '../state/useLabProgress';
import { TopicItem } from '../../types/lab';
import { IconBack, IconNext, IconCheckCircle, IconCurrent } from '../components/LabIcons';

interface AcademyModuleViewProps {
  pathSlug: string;
  moduleSlug: string;
  onSelectTopic: (pathSlug: string, moduleSlug: string, topicSlug: string) => void;
  onBackToPath: (pathSlug: string) => void;
}

export const AcademyModuleView: React.FC<AcademyModuleViewProps> = ({
  pathSlug,
  moduleSlug,
  onSelectTopic,
  onBackToPath
}) => {
  const data = getModuleBySlug(pathSlug, moduleSlug);
  const { isTopicCompleted, lastVisitedTopicSlug } = useLabProgress();

  if (!data) {
    return (
      <div className="lab-error">
        <p>Modül bulunamadı.</p>
        <button onClick={() => onBackToPath(pathSlug)} className="lab-back-btn">
          <IconBack size={16} /> <span>BÖLÜME DÖN</span>
        </button>
      </div>
    );
  }

  const { path, module: mod } = data;
  const topics = mod.topics;
  const completedCount = topics.filter(t => isTopicCompleted(t.slug)).length;
  const progressPercent = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <div
      className="lab-module-view"
      style={{ '--path-accent': path.accentColor } as React.CSSProperties}
    >
      {/* Back link */}
      <div className="lab-view-top-nav">
        <button type="button" className="lab-back-link mono-label" onClick={() => onBackToPath(path.slug)}>
          <IconBack size={16} /> <span>← {path.shortTitle.toUpperCase()} BÖLÜMÜNE DÖN</span>
        </button>
      </div>

      {/* Module Header */}
      <div className="lab-module-header">
        <div className="lab-module-header-code mono-num">MODÜL {mod.code}</div>
        <h1 className="lab-module-header-title">{mod.title}</h1>
        <p className="lab-module-header-desc">{mod.description}</p>

        {topics.length > 0 && (
          <div className="lab-module-header-progress">
            <div className="lab-path-progress-meta mono-label">
              <span>{completedCount} / {topics.length} KONU TAMAMLANDI</span>
              <span>•</span>
              <span className="lab-path-done">%{progressPercent} İLERLEME</span>
            </div>
            <div className="lab-path-progress-bar">
              <div className="lab-path-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Topics List — numbered, clean */}
      <div className="lab-topics-section">
        <div className="lab-section-header">
          <h2 className="lab-section-label">MODÜL KONULARI</h2>
          <span className="lab-section-count mono-label">{topics.length} KONU</span>
        </div>

        <div className="lab-topics-list">
          {topics.map((topic: TopicItem, idx: number) => {
            const isCompleted = isTopicCompleted(topic.slug);
            const isCurrent = lastVisitedTopicSlug === topic.slug;

            return (
              <div
                key={topic.id}
                className={`lab-topic-row ${isCompleted ? 'lab-topic-row--done' : ''} ${isCurrent ? 'lab-topic-row--current' : ''}`}
                onClick={() => onSelectTopic(path.slug, mod.slug, topic.slug)}
              >
                <div className="lab-topic-status-icon">
                  {isCompleted ? (
                    <IconCheckCircle size={18} color="var(--path-accent, #B7FF00)" />
                  ) : isCurrent ? (
                    <IconCurrent size={18} color="var(--path-accent, #B7FF00)" />
                  ) : (
                    <span className="lab-topic-num mono-num">{String(idx + 1).padStart(2, '0')}</span>
                  )}
                </div>

                <div className="lab-topic-info">
                  <div className="lab-topic-title-row">
                    <h3 className="lab-topic-title">{topic.title}</h3>
                    {isCompleted ? (
                      <span className="topic-badge topic-badge--done mono-label">✓ TAMAMLANDI</span>
                    ) : isCurrent ? (
                      <span className="topic-badge topic-badge--current mono-label">ŞU AN BURADASIN</span>
                    ) : null}
                  </div>

                  {topic.subtitle && (
                    <div className="lab-topic-subtitle">{topic.subtitle}</div>
                  )}
                </div>

                {topic.readTime && (
                  <div className="lab-topic-readtime mono-label">{topic.readTime}</div>
                )}

                <div className="lab-topic-action">
                  <button type="button" className="lab-topic-btn">
                    <span>{isCompleted ? 'TEKRAR OKU' : 'DERSE BAŞLA'}</span>
                    <IconNext size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
