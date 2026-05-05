import { Metadata } from 'next';
import Link from 'next/link';
import { BaseLayout } from '@/components/layouts';
import { BlogPostCard } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/notion';

export const metadata: Metadata = {
  title: 'Blog | Kevin Adu-Poku',
  description:
    'Thoughts, tutorials, and insights on software development, technology, and building digital products.',
};

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BaseLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Thoughts, tutorials, and insights on software development.
            </p>
          </div>

          {/* Posts Grid or Coming Soon */}
          {posts.length > 0 ? (
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-lg text-center">
              <div className="border-border bg-muted/30 rounded-none border p-8">
                <div className="bg-muted/30 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-none">
                  <svg
                    className="text-muted-foreground h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h2 className="text-foreground text-xl font-semibold">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mt-3">
                  I&apos;m currently working on some exciting content. Check
                  back soon for articles on web development, mobile apps, and
                  building digital products.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link href="/contact">Get Notified</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </BaseLayout>
  );
}
