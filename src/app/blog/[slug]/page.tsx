import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BaseLayout } from '@/components/layouts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, getAllPostSlugs } from '@/lib/notion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all published posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Kevin Adupoku',
    };
  }

  return {
    title: `${post.title} | Kevin Adupoku`,
    description: post.description || post.content.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.description || post.content.slice(0, 160),
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Draft';

  return (
    <BaseLayout>
      <article className="py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Post Header */}
          <header className="mx-auto max-w-3xl">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              {post.title}
            </h1>

            {/* Description */}
            {post.description && (
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
            )}

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                className="aspect-video w-full object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto mt-12 max-w-3xl">
            {/* 
              Note: The content is markdown from Notion.
              For a production site, you'd want to use a markdown renderer like:
              - react-markdown
              - @next/mdx
              - unified/remark/rehype
              
              For now, we'll render as simple text with line breaks.
            */}
            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>

          {/* Footer */}
          <footer className="mx-auto mt-16 max-w-3xl border-t border-neutral-200 pt-8 dark:border-neutral-800">
            <Button asChild variant="outline">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </footer>
        </div>
      </article>
    </BaseLayout>
  );
}
