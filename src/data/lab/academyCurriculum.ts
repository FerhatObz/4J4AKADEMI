import { PathItem, TopicItem, ModuleItem } from '../../types/lab';
import { computerPath } from './paths/00_computer';
import { internetPath } from './paths/01_internet';
import { networkingPath } from './paths/02_networking';
import { linuxPath } from './paths/03_linux';
import { programmingPath } from './paths/04_programming';
import { webFundamentalsPath } from './paths/05_webFundamentals';
import { cybersecurityPath } from './paths/06_cybersecurity';
import { webSecurityPath } from './paths/07_webSecurity';
import { reconPath } from './paths/08_recon';
import { bugBountyPath } from './paths/09_bugBounty';
import { redTeamPath } from './paths/10_redTeam';
import { defensivePath } from './paths/11_defensive';
import { cryptographyPath } from './paths/12_cryptography';
import { blockchainPath } from './paths/13_blockchain';
import { securityEngineeringPath } from './paths/14_securityEngineering';
import { advancedSecurityPath } from './paths/15_advanced';
import { mathematicsPath } from './paths/16_mathematics';
import { algorithmsPath } from './paths/17_algorithms';
import { operatingSystemsPath } from './paths/18_operatingSystems';
import { databaseSecurityPath } from './paths/19_databaseSecurity';
import { cloudSecurityPath } from './paths/20_cloudSecurity';
import { mobileSecurityPath } from './paths/21_mobileSecurity';
import { malwareAnalysisPath } from './paths/22_malwareAnalysis';
import { socialEngineeringPath } from './paths/23_socialEngineering';
import { digitalForensicsPath } from './paths/24_digitalForensics';
import { penetrationTestingPath } from './paths/25_penetrationTesting';

export const academyCurriculum: PathItem[] = [
  computerPath,
  internetPath,
  networkingPath,
  linuxPath,
  programmingPath,
  webFundamentalsPath,
  cybersecurityPath,
  webSecurityPath,
  reconPath,
  bugBountyPath,
  redTeamPath,
  defensivePath,
  cryptographyPath,
  blockchainPath,
  securityEngineeringPath,
  advancedSecurityPath,
  mathematicsPath,
  algorithmsPath,
  operatingSystemsPath,
  databaseSecurityPath,
  cloudSecurityPath,
  mobileSecurityPath,
  malwareAnalysisPath,
  socialEngineeringPath,
  digitalForensicsPath,
  penetrationTestingPath
];

// Helper functions
export const getPathBySlug = (slug: string): PathItem | null => {
  return academyCurriculum.find(p => p.slug === slug) || null;
};

export const getModuleBySlug = (pathSlug: string, moduleSlug: string): { path: PathItem; module: ModuleItem } | null => {
  const path = getPathBySlug(pathSlug);
  if (!path) return null;
  const mod = path.modules.find(m => m.slug === moduleSlug);
  if (!mod) return null;
  return { path, module: mod };
};

export const getTopicBySlugs = (
  pathSlug: string,
  moduleSlug: string,
  topicSlug: string
): { path: PathItem; module: ModuleItem; topic: TopicItem } | null => {
  const modData = getModuleBySlug(pathSlug, moduleSlug);
  if (!modData) return null;
  const topic = modData.module.topics.find(t => t.slug === topicSlug);
  if (!topic) return null;
  return { path: modData.path, module: modData.module, topic };
};

export const findTopicGlobally = (
  topicSlug: string
): { path: PathItem; module: ModuleItem; topic: TopicItem } | null => {
  for (const path of academyCurriculum) {
    for (const mod of path.modules) {
      const top = mod.topics.find(t => t.slug === topicSlug);
      if (top) {
        return { path, module: mod, topic: top };
      }
    }
  }
  return null;
};

export const getAllTopicsFlat = (): TopicItem[] => {
  const topics: TopicItem[] = [];
  academyCurriculum.forEach(p => {
    p.modules.forEach(m => {
      topics.push(...m.topics);
    });
  });
  return topics;
};

export const getNextTopicInCurriculum = (
  currentPathSlug: string,
  _currentModuleSlug: string,
  currentTopicSlug: string
): { path: PathItem; module: ModuleItem; topic: TopicItem } | null => {
  const all = getAllTopicsFlat();
  const idx = all.findIndex(t => t.slug === currentTopicSlug && t.pathSlug === currentPathSlug);
  if (idx !== -1 && idx + 1 < all.length) {
    const nextTop = all[idx + 1];
    return findTopicGlobally(nextTop.slug);
  }
  return null;
};

export const getPrevTopicInCurriculum = (
  currentPathSlug: string,
  _currentModuleSlug: string,
  currentTopicSlug: string
): { path: PathItem; module: ModuleItem; topic: TopicItem } | null => {
  const all = getAllTopicsFlat();
  const idx = all.findIndex(t => t.slug === currentTopicSlug && t.pathSlug === currentPathSlug);
  if (idx > 0) {
    const prevTop = all[idx - 1];
    return findTopicGlobally(prevTop.slug);
  }
  return null;
};
