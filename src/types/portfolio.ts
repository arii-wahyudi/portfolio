export interface NavigationItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  portraitUrl: string;
  // About Section Blocks
  shortIntro: string;
  developmentFocus: string;
  howIWork: string;
  currentFocus: string;
}

export interface Skill {
  name: string;
  isExploring?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  myRole: string;
}

export type SocialPlatform = 'github' | 'linkedin' | 'instagram' | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface ContactInfo {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl?: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  navigation: NavigationItem[];
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
}
