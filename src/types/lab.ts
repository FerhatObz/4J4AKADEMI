export type LevelType = 'FOUNDATION' | 'CORE' | 'PRACTICAL' | 'ADVANCED';

export type TopicStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface PracticeExercise {
  id: string;
  prompt: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface TopicSectionData {
  id: string;
  code: string; // e.g. "01", "02"
  title: string;
  content: string;
  codeSnippet?: {
    lang: string;
    code: string;
  };
}

export interface TopicItem {
  id: string;
  code: string;           // e.g. "02" or "07.03.02"
  slug: string;           // e.g. "xss"
  pathSlug: string;       // e.g. "web-security"
  moduleSlug: string;     // e.g. "injection"
  title: string;
  subtitle?: string;
  shortDescription: string;
  order: number;
  readTime: string;

  // Editorial Content Sections
  sections: TopicSectionData[];
  summary: string[];

  // Practice / Conceptual Check
  practice?: PracticeExercise;

  // Book Deep Dive (optional)
  recommendedBookId?: string;
  bookDeepDiveReason?: string;
}

export interface ModuleItem {
  id: string;
  code: string;           // e.g. "03" or "MODULE 03"
  slug: string;           // e.g. "injection"
  pathSlug: string;
  title: string;
  description: string;
  order: number;
  topics: TopicItem[];
}

export interface PathItem {
  id: string;
  code: string;           // e.g. "07"
  slug: string;           // e.g. "web-security"
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  accentColor: string;    // e.g. "#B7FF00", "#3B82F6", "#8B5CF6"
  level: LevelType;
  order: number;
  modules: ModuleItem[];
  recommendedBookId?: string;
  finalBookMessage?: string;
}

export interface UserLabProgress {
  currentPathSlug: string;
  currentModuleSlug: string;
  currentTopicSlug: string;
  completedTopics: string[]; // slugs of completed topics
  lastUpdated: number;
}
