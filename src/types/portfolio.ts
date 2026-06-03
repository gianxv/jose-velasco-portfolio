import type { IconType } from 'react-icons';

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  timeframe: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: IconType;
}
