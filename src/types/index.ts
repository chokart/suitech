export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  lineName?: string;
  heading?: string;
  statusTag?: string;
  statusType?: 'primary' | 'exploration' | 'prototypes' | 'upcoming';
  summary: string;
  description: string;
  iconName: string;
  badge: string;
  isPriority?: boolean;
  priorityLabel?: string;
  areas?: string[];
  features: string[];
  deliverables: string[];
}

export type ProjectStatus = 'prototipo' | 'desarrollo' | 'operativo';

export interface ProjectItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  problem: string;
  solution: string;
  technologies: string[];
  architectureSummary: string;
  keyFeatures: string[];
  honestDisclaimer?: string;
  visualType: 'iot' | 'business' | 'ai-automation' | 'analytics' | 'industrial';
  dedicatedUrl?: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  quote: string;
}

export interface WorkStep {
  step: string;
  title: string;
  action: string;
  deliverable: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  applications: string[];
  iconName: string;
}

export interface LearningItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  tags: string[];
  status: string;
  targetPlatform: string;
}
