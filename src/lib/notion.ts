import { Client } from '@notionhq/client';
import { BlogPost } from '@/lib/types';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Get database ID from environment (now called data_source_id in SDK v5.8.0)
const databaseId = process.env.NOTION_BLOG_DATABASE_ID || '';

// Type for Notion page response
interface NotionPage {
  id: string;
  created_time: string;
  last_edited_time: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: Record<string, any>;
}

/**
 * Fetch all published blog posts from Notion
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!databaseId) {
    console.warn('NOTION_BLOG_DATABASE_ID not set');
    return [];
  }

  try {
    // SDK v5.8.0 uses dataSources.query instead of databases.query
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'PublishedAt',
          direction: 'descending',
        },
      ],
    });

    return (response.results as NotionPage[]).map((page) => pageToPost(page));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  if (!databaseId) {
    console.warn('NOTION_BLOG_DATABASE_ID not set');
    return null;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    const pages = response.results as NotionPage[];

    if (pages.length === 0) {
      return null;
    }

    const page = pages[0];
    const content = await getPageContent(page.id);

    return {
      ...pageToPost(page),
      content,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Get all slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!databaseId) return [];

  try {
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    });

    return (response.results as NotionPage[])
      .map((page) => getSlugFromPage(page))
      .filter((slug): slug is string => slug !== null);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

/**
 * Get page content as blocks (for rendering)
 */
async function getPageContent(pageId: string): Promise<string> {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    // Convert blocks to markdown-like content
    return blocks.results
      .map((block) => blockToMarkdown(block))
      .filter(Boolean)
      .join('\n\n');
  } catch (error) {
    console.error('Error fetching page content:', error);
    return '';
  }
}

/**
 * Convert Notion page to BlogPost type
 */
function pageToPost(page: NotionPage): BlogPost {
  const props = page.properties;

  return {
    id: page.id,
    title: getTitle(props.Title),
    slug: getRichText(props.Slug) || page.id,
    description: getRichText(props.Description) || '',
    content: '', // Fetched separately when needed
    publishedAt: getDate(props.PublishedAt) || page.created_time,
    updatedAt: page.last_edited_time,
    author: {
      name: 'Kevin Adupoku',
      avatar: '/images/avatar.jpg',
    },
    tags: getMultiSelect(props.Tags),
    coverImage: getUrl(props.CoverImage) || undefined,
    readingTime: getNumber(props.ReadingTime) || 1,
  };
}

/**
 * Get slug from page properties
 */
function getSlugFromPage(page: NotionPage): string | null {
  const slug = getRichText(page.properties?.Slug);
  return slug || null;
}

// Property extractors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTitle(prop: any): string {
  if (prop?.type === 'title') {
    return prop.title?.[0]?.plain_text || 'Untitled';
  }
  return 'Untitled';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRichText(prop: any): string {
  if (prop?.type === 'rich_text') {
    return prop.rich_text?.[0]?.plain_text || '';
  }
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDate(prop: any): string | null {
  if (prop?.type === 'date') {
    return prop.date?.start || null;
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMultiSelect(prop: any): string[] {
  if (prop?.type === 'multi_select') {
    return prop.multi_select?.map((s: { name: string }) => s.name) || [];
  }
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUrl(prop: any): string | null {
  if (prop?.type === 'url') {
    return prop.url || null;
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNumber(prop: any): number | null {
  if (prop?.type === 'number') {
    return prop.number || null;
  }
  return null;
}

/**
 * Convert Notion block to markdown
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function blockToMarkdown(block: any): string {
  const type = block.type;
  const content = block[type];

  switch (type) {
    case 'paragraph':
      return richTextToMarkdown(content?.rich_text);
    case 'heading_1':
      return `# ${richTextToMarkdown(content?.rich_text)}`;
    case 'heading_2':
      return `## ${richTextToMarkdown(content?.rich_text)}`;
    case 'heading_3':
      return `### ${richTextToMarkdown(content?.rich_text)}`;
    case 'bulleted_list_item':
      return `- ${richTextToMarkdown(content?.rich_text)}`;
    case 'numbered_list_item':
      return `1. ${richTextToMarkdown(content?.rich_text)}`;
    case 'code':
      return `\`\`\`${content?.language || ''}\n${richTextToMarkdown(content?.rich_text)}\n\`\`\``;
    case 'quote':
      return `> ${richTextToMarkdown(content?.rich_text)}`;
    case 'divider':
      return '---';
    case 'image': {
      const url = content?.file?.url || content?.external?.url || '';
      return `![image](${url})`;
    }
    default:
      return '';
  }
}

/**
 * Convert rich text array to markdown string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function richTextToMarkdown(richText: any[]): string {
  if (!richText) return '';

  return richText
    .map((text) => {
      let textContent = text.plain_text || '';
      const annotations = text.annotations || {};

      if (annotations.bold) textContent = `**${textContent}**`;
      if (annotations.italic) textContent = `*${textContent}*`;
      if (annotations.strikethrough) textContent = `~~${textContent}~~`;
      if (annotations.code) textContent = `\`${textContent}\``;
      if (text.href) textContent = `[${textContent}](${text.href})`;

      return textContent;
    })
    .join('');
}
