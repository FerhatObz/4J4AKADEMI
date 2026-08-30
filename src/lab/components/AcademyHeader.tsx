import React, { useState } from 'react';
import { PathItem, ModuleItem, TopicItem } from '../../types/lab';
import { PathSwitcherModal } from './PathSwitcherModal';
import { IconBack, IconNext, IconHome, IconPaths } from './LabIcons';

interface AcademyHeaderProps {
  currentPath?: PathItem;
  currentModule?: ModuleItem;
  currentTopic?: TopicItem;
  onNavigateHome: () => void;
  onNavigatePath: (pathSlug: string) => void;
  onNavigateModule: (pathSlug: string, moduleSlug: string) => void;
  onNavigateBack?: () => void;
  onNavigateNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const AcademyHeader: React.FC<AcademyHeaderProps> = ({
  currentPath,
  currentModule,
  currentTopic,
  onNavigateHome,
  onNavigatePath,
  onNavigateModule,
  onNavigateBack,
  onNavigateNext,
  hasPrev = true,
  hasNext = true
}) => {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const handleGlobalBack = () => {
    if (onNavigateBack) {
      onNavigateBack();
    } else {
      window.history.back();
    }
  };

  return (
    <header
      className="lab-navigation-header"
      style={currentPath ? { '--path-accent': currentPath.accentColor } as React.CSSProperties : undefined}
    >
      <div className="lab-nav-container">
        {/* Primary Command Buttons: GERİ / İLERİ / LAB ANA SAYFA / EĞİTİM YOLLARI */}
        <div className="lab-nav-actions">
          <button
            type="button"
            className="lab-nav-btn lab-nav-btn--back"
            onClick={handleGlobalBack}
            disabled={!hasPrev && !currentPath}
            title="Önceki Sayfaya / Konuya Dön"
          >
            <IconBack size={16} />
            <span>GERİ</span>
          </button>

          {onNavigateNext && (
            <button
              type="button"
              className="lab-nav-btn lab-nav-btn--next"
              onClick={onNavigateNext}
              disabled={!hasNext}
              title="Sonraki Konuya İlerle"
            >
              <span>İLERİ</span>
              <IconNext size={16} />
            </button>
          )}

          <button
            type="button"
            className="lab-nav-btn lab-nav-btn--home"
            onClick={onNavigateHome}
            title="Lab Ana Sayfasına Git"
          >
            <IconHome size={16} />
            <span>LAB ANA SAYFA</span>
          </button>

          <button
            type="button"
            className="lab-nav-btn lab-nav-btn--paths"
            onClick={() => setIsSwitcherOpen(true)}
            title="Eğitim Yollarını Görüntüle"
          >
            <IconPaths size={16} />
            <span>EĞİTİM YOLLARI</span>
          </button>
        </div>

        {/* Dynamic Interactive Breadcrumb */}
        <nav className="lab-breadcrumb" aria-label="Konum Navigasyonu">
          <button type="button" className="lab-crumb-link" onClick={onNavigateHome}>
            LAB
          </button>

          {currentPath && (
            <>
              <span className="lab-crumb-divider">/</span>
              <button
                type="button"
                className="lab-crumb-link"
                onClick={() => onNavigatePath(currentPath.slug)}
              >
                {currentPath.shortTitle.toUpperCase()}
              </button>
            </>
          )}

          {currentPath && currentModule && (
            <>
              <span className="lab-crumb-divider">/</span>
              <button
                type="button"
                className="lab-crumb-link"
                onClick={() => onNavigateModule(currentPath.slug, currentModule.slug)}
              >
                MODÜL {currentModule.code}
              </button>
            </>
          )}

          {currentTopic && (
            <>
              <span className="lab-crumb-divider">/</span>
              <span className="lab-crumb-active" title={currentTopic.title}>
                {currentTopic.title}
              </span>
            </>
          )}
        </nav>
      </div>

      <PathSwitcherModal
        isOpen={isSwitcherOpen}
        onClose={() => setIsSwitcherOpen(false)}
        currentPathSlug={currentPath?.slug}
        onSelectPath={onNavigatePath}
      />
    </header>
  );
};
