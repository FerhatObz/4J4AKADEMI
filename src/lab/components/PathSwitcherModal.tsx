import React from 'react';
import { academyCurriculum } from '../../data/lab/academyCurriculum';
import { PathItem } from '../../types/lab';
import { IconClose, IconCheckCircle } from './LabIcons';

interface PathSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPathSlug?: string;
  onSelectPath: (pathSlug: string) => void;
}

export const PathSwitcherModal: React.FC<PathSwitcherModalProps> = ({
  isOpen,
  onClose,
  currentPathSlug,
  onSelectPath
}) => {
  if (!isOpen) return null;

  return (
    <div className="path-switcher-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="path-switcher-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="switcher-sheet-header">
          <div className="switcher-header-title">
            <span className="status-dot" />
            <span className="mono-label">EĞİTİM YOLLARI (CURRICULUM)</span>
          </div>
          <button type="button" className="switcher-close-btn mono-label" onClick={onClose}>
            <IconClose size={16} />
            <span>KAPAT</span>
          </button>
        </div>

        {/* Paths List Grid */}
        <div className="switcher-paths-grid">
          {academyCurriculum.map((path: PathItem) => {
            const isCurrent = path.slug === currentPathSlug;
            const totalTopics = path.modules.reduce((acc, m) => acc + m.topics.length, 0);

            return (
              <button
                key={path.id}
                type="button"
                className={`switcher-path-card ${isCurrent ? 'is-current' : ''}`}
                style={{ '--path-accent': path.accentColor } as React.CSSProperties}
                onClick={() => {
                  onSelectPath(path.slug);
                  onClose();
                }}
              >
                <div className="path-card-top">
                  <span className="path-card-num mono-num">{path.code}</span>
                  {isCurrent ? (
                    <span className="path-card-active-tag">
                      <IconCheckCircle size={14} /> ŞU AN BURADASIN
                    </span>
                  ) : (
                    <span className="path-card-level mono-label">{path.level}</span>
                  )}
                </div>
                <h4 className="path-card-title">{path.title}</h4>
                <p className="path-card-desc">{path.tagline}</p>
                <div className="path-card-footer mono-label">
                  <span>{path.modules.length} MODÜL</span>
                  {totalTopics > 0 && <span>• {totalTopics} KONU</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
