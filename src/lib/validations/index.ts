import { z } from 'zod';
import {
  ProjectStatus,
  ProjectCategory,
  ExperienceType,
  SkillCategory,
  SkillLevel,
  PostStatus,
} from '@/lib/types';

// Project Schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  longDescription: z.string().optional(),
  category: z.nativeEnum(ProjectCategory),
  status: z.nativeEnum(ProjectStatus),
  tags: z.array(z.string()),
  thumbnailUrl: z.string().url(),
  images: z.array(z.string().url()).optional(),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean(),
  order: z.number().int(),
  startDate: z.string(),
  endDate: z.string().optional(),
});

// Experience Schema
export const experienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1),
  position: z.string().min(1),
  type: z.nativeEnum(ExperienceType),
  location: z.string(),
  remote: z.boolean(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean(),
  description: z.string(),
  achievements: z.array(z.string()),
  technologies: z.array(z.string()),
  order: z.number().int(),
  logo: z.string().optional(),
});

// Skill Schema
export const skillSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  category: z.nativeEnum(SkillCategory),
  level: z.nativeEnum(SkillLevel),
  icon: z.string().optional(),
  order: z.number().int(),
});

// Blog Post Schema
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string(),
  content: z.string(),
  coverImage: z.string().optional(),
  status: z.nativeEnum(PostStatus),
  tags: z.array(z.string()),
  publishedAt: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  readingTime: z.number().int(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
