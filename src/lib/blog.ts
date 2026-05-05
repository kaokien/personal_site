import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost } from '@/lib/types';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Parse a date string from the old frontmatter format into an ISO date.
 * Handles: '04-22-2022', '2022-04-25 23:22', '4-25-2022', '2021-12-13 15:46'
 */
function parseDate(raw: string): string {
  // Try ISO-ish format first (YYYY-MM-DD ...)
  if (/^\d{4}-/.test(raw)) {
    return new Date(raw.replace(' ', 'T')).toISOString();
  }
  // MM-DD-YYYY or M-DD-YYYY
  const parts = raw.split('-');
  if (parts.length === 3) {
    const [month, day, year] = parts;
    return new Date(
      `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    ).toISOString();
  }
  return new Date(raw).toISOString();
}

/**
 * Estimate reading time based on word count (~200 wpm)
 */
function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Get all blog posts, sorted newest first
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    return {
      id: slug,
      title: (data.title as string) || 'Untitled',
      slug,
      description: (data.description as string) || '',
      content: '', // only loaded on the detail page
      publishedAt: parseDate(data.date as string),
      updatedAt: parseDate(data.date as string),
      tags: ((data.tags as string[]) || []).filter((t) => t !== 'All'),
      author: {
        name: 'Kevin Adu-Poku',
        avatar: '/images/avatar.jpg',
      },
      readingTime: estimateReadingTime(content),
    } satisfies BlogPost;
  });

  // Sort newest first
  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return posts;
}

/**
 * Get a single blog post by slug, including rendered HTML content
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const htmlContent = await marked.parse(content);

  return {
    id: slug,
    title: (data.title as string) || 'Untitled',
    slug,
    description: (data.description as string) || '',
    content: htmlContent,
    publishedAt: parseDate(data.date as string),
    updatedAt: parseDate(data.date as string),
    tags: ((data.tags as string[]) || []).filter((t) => t !== 'All'),
    author: {
      name: 'Kevin Adu-Poku',
      avatar: '/images/avatar.jpg',
    },
    readingTime: estimateReadingTime(content),
  };
}

/**
 * Get all slugs for static page generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
