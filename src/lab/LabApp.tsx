import React, { useState, useEffect } from 'react';
import { AcademyIndexView } from './views/AcademyIndexView';
import { AcademyPathView } from './views/AcademyPathView';
import { AcademyModuleView } from './views/AcademyModuleView';
import { AcademyTopicView } from './views/AcademyTopicView';
import { AcademyHeader } from './components/AcademyHeader';
import { DynamicCyberBackground } from './components/DynamicCyberBackground';
import {
  getPathBySlug,
  getModuleBySlug,
  getTopicBySlugs,
  getAllTopicsFlat,
  getNextTopicInCurriculum,
  getPrevTopicInCurriculum
} from '../data/lab/academyCurriculum';

type AcademyRouteState =
  | { view: 'home' }
  | { view: 'path'; pathSlug: string }
  | { view: 'module'; pathSlug: string; moduleSlug: string }
  | { view: 'topic'; pathSlug: string; moduleSlug: string; topicSlug: string };

export const LabApp: React.FC = () => {
  const [route, setRoute] = useState<AcademyRouteState>({ view: 'home' });

  // URL Hash Synchronizer
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith('#lab')) return;

      const segments = hash.replace(/^#lab\/?/, '').split('/').filter(Boolean);

      if (segments.length === 0) {
        setRoute({ view: 'home' });
      } else if (segments.length === 1) {
        setRoute({ view: 'path', pathSlug: segments[0] });
      } else if (segments.length === 2) {
        setRoute({ view: 'module', pathSlug: segments[0], moduleSlug: segments[1] });
      } else if (segments.length >= 3) {
        setRoute({ view: 'topic', pathSlug: segments[0], moduleSlug: segments[1], topicSlug: segments[2] });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToLab = () => {
    document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '#lab');
    setRoute({ view: 'home' });
    scrollToLab();
  };

  const navigateToPath = (pathSlug: string) => {
    window.history.pushState(null, '', `#lab/${pathSlug}`);
    setRoute({ view: 'path', pathSlug });
    scrollToLab();
  };

  const navigateToModule = (pathSlug: string, moduleSlug: string) => {
    window.history.pushState(null, '', `#lab/${pathSlug}/${moduleSlug}`);
    setRoute({ view: 'module', pathSlug, moduleSlug });
    scrollToLab();
  };

  const navigateToTopic = (pathSlug: string, moduleSlug: string, topicSlug: string) => {
    window.history.pushState(null, '', `#lab/${pathSlug}/${moduleSlug}/${topicSlug}`);
    setRoute({ view: 'topic', pathSlug, moduleSlug, topicSlug });
    scrollToLab();
  };

  const handleStartZero = () => {
    const all = getAllTopicsFlat();
    if (all.length > 0) {
      const first = all[0];
      navigateToTopic(first.pathSlug, first.moduleSlug, first.slug);
    }
  };

  // Derive active context for stable header & dynamic background
  let activePath = undefined;
  let activeModule = undefined;
  let activeTopic = undefined;

  let prevTopicData = undefined;
  let nextTopicData = undefined;

  if (route.view === 'path') {
    activePath = getPathBySlug(route.pathSlug) || undefined;
  } else if (route.view === 'module') {
    const res = getModuleBySlug(route.pathSlug, route.moduleSlug);
    if (res) {
      activePath = res.path;
      activeModule = res.module;
    }
  } else if (route.view === 'topic') {
    const res = getTopicBySlugs(route.pathSlug, route.moduleSlug, route.topicSlug);
    if (res) {
      activePath = res.path;
      activeModule = res.module;
      activeTopic = res.topic;

      prevTopicData = getPrevTopicInCurriculum(res.path.slug, res.module.slug, res.topic.slug);
      nextTopicData = getNextTopicInCurriculum(res.path.slug, res.module.slug, res.topic.slug);
    }
  }

  const handleNavigateBack = () => {
    if (route.view === 'topic') {
      if (prevTopicData) {
        navigateToTopic(prevTopicData.path.slug, prevTopicData.module.slug, prevTopicData.topic.slug);
      } else if (activePath && activeModule) {
        navigateToModule(activePath.slug, activeModule.slug);
      } else {
        navigateToHome();
      }
    } else if (route.view === 'module' && activePath) {
      navigateToPath(activePath.slug);
    } else if (route.view === 'path') {
      navigateToHome();
    } else {
      window.history.back();
    }
  };

  const handleNavigateNext = () => {
    if (route.view === 'topic' && nextTopicData) {
      navigateToTopic(nextTopicData.path.slug, nextTopicData.module.slug, nextTopicData.topic.slug);
    } else if (route.view === 'module' && activeModule && activeModule.topics.length > 0 && activePath) {
      const first = activeModule.topics[0];
      navigateToTopic(activePath.slug, activeModule.slug, first.slug);
    } else if (route.view === 'path' && activePath && activePath.modules.length > 0) {
      const firstMod = activePath.modules[0];
      if (firstMod.topics.length > 0) {
        navigateToTopic(activePath.slug, firstMod.slug, firstMod.topics[0].slug);
      }
    }
  };

  const activeAccentColor = activePath?.accentColor || '#B7FF00';

  return (
    <div
      className="stable-academy-wrapper"
      style={{ '--path-accent': activeAccentColor } as React.CSSProperties}
    >
      {/* Dynamic Ambient Background that morphs per path/topic */}
      <DynamicCyberBackground accentColor={activeAccentColor} />

      {/* Stable Academy Header across all lab states */}
      <AcademyHeader
        currentPath={activePath}
        currentModule={activeModule}
        currentTopic={activeTopic}
        onNavigateHome={navigateToHome}
        onNavigatePath={navigateToPath}
        onNavigateModule={navigateToModule}
        onNavigateBack={handleNavigateBack}
        onNavigateNext={handleNavigateNext}
        hasPrev={route.view !== 'home'}
        hasNext={Boolean(nextTopicData || (route.view === 'module' && activeModule?.topics.length))}
      />

      {/* Main View Router */}
      <div className="academy-main-body">
        {route.view === 'home' && (
          <AcademyIndexView
            onSelectPath={navigateToPath}
            onSelectTopicDirect={navigateToTopic}
            onStartZero={handleStartZero}
          />
        )}

        {route.view === 'path' && (
          <AcademyPathView
            pathSlug={route.pathSlug}
            onSelectModule={navigateToModule}
            onBackToHome={navigateToHome}
          />
        )}

        {route.view === 'module' && (
          <AcademyModuleView
            pathSlug={route.pathSlug}
            moduleSlug={route.moduleSlug}
            onSelectTopic={navigateToTopic}
            onBackToPath={navigateToPath}
          />
        )}

        {route.view === 'topic' && (
          <AcademyTopicView
            pathSlug={route.pathSlug}
            moduleSlug={route.moduleSlug}
            topicSlug={route.topicSlug}
            onNavigateTopic={navigateToTopic}
            onNavigateModule={navigateToModule}
            onNavigatePath={navigateToPath}
          />
        )}
      </div>
    </div>
  );
};
