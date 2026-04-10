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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-white/40">
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
              <div className="rounded-none border border-white/10 bg-white/[0.02] p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-none bg-white/5">
                  <svg
                    className="h-8 w-8 text-white/30"
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
                <h2 className="text-xl font-semibold text-white">
                  Coming Soon
                </h2>
                <p className="mt-3 text-white/40">
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
