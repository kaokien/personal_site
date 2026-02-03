// Project Types
export enum ProjectStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  ARCHIVED = 'archived',
}

export enum ProjectCategory {
  WEB_APP = 'web_app',
  MOBILE_APP = 'mobile_app',
  DESIGN = 'design',
  OPEN_SOURCE = 'open_source',
  ART_CULTURE = 'art_culture',
}

export interface ProjectVideo {
  url: string;
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  thumbnailUrl: string;
  images?: string[];
  videos?: ProjectVideo[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  startDate: string;
  endDate?: string;
  year?: string;
}

// Experience Types
export enum ExperienceType {
  FULL_TIME = 'full_time',
  CONTRACT = 'contract',
  FREELANCE = 'freelance',
  INTERNSHIP = 'internship',
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: ExperienceType;
  location: string;
  remote: boolean;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  order: number;
  logo?: string;
}

// Skill Types
export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  MOBILE = 'mobile',
  DESIGN = 'design',
  TOOLS = 'tools',
  SOFT_SKILLS = 'soft_skills',
}

export enum SkillLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  order: number;
}

// Blog Types
export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export interface BlogPostAuthor {
  name: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  status?: PostStatus;
  tags: string[];
  author?: BlogPostAuthor;
  publishedAt: string;
  createdAt?: string;
  updatedAt?: string;
  readingTime: number;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Site Config
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  socials: SocialLink[];
}
