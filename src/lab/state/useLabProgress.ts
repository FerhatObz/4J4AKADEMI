import { useState, useEffect } from 'react';

const STORAGE_KEY = '4java4_sequential_lab_progress_v2';

interface LabProgressState {
  lastVisitedTopicSlug?: string;
  completedTopics: string[];
  lastUpdated: number;
}

const defaultState: LabProgressState = {
  lastVisitedTopicSlug: undefined,
  completedTopics: [],
  lastUpdated: Date.now()
};

export const useLabProgress = () => {
  const [state, setState] = useState<LabProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return defaultState;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota
    }
  }, [state]);

  const markTopicVisited = (slug: string) => {
    setState(prev => ({
      ...prev,
      lastVisitedTopicSlug: slug,
      lastUpdated: Date.now()
    }));
  };

  const markTopicCompleted = (slug: string) => {
    setState(prev => {
      const completed = prev.completedTopics.includes(slug)
        ? prev.completedTopics
        : [...prev.completedTopics, slug];
      return {
        ...prev,
        completedTopics: completed,
        lastUpdated: Date.now()
      };
    });
  };

  const isTopicCompleted = (slug: string) => state.completedTopics.includes(slug);
  const hasProgress = !!state.lastVisitedTopicSlug || state.completedTopics.length > 0;

  return {
    state,
    lastVisitedTopicSlug: state.lastVisitedTopicSlug,
    completedTopics: state.completedTopics,
    hasProgress,
    markTopicVisited,
    markTopicCompleted,
    isTopicCompleted
  };
};
