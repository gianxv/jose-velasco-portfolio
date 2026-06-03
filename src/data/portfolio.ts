import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import type { ContactLink, ExperienceItem, NavItem, SkillGroup } from '../types/portfolio';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Intern',
    organization: 'Hawai‘i Department of Transportation Airports Division',
    timeframe: 'Current',
    summary:
      'Supporting internal technology initiatives that improve team communication, operational workflows, and data visibility.',
    highlights: [
      'SharePoint intranet development',
      'Workflow automation',
      'Data analysis',
      'Process improvements',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', skills: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Tools', skills: ['Git', 'SharePoint', 'Power Automate', 'Excel'] },
  { title: 'Areas of Interest', skills: ['AI/ML', 'Automation', 'Web Development'] },
];

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:josetomasgian@gmail.com', icon: FiMail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josetomasgian/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/gianxv', icon: FiGithub },
];
