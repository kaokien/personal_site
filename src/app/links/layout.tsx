import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
  description:
    'I build digital products for fitness creators and online coaches. See my work, apply to scale your brand.',
  openGraph: {
    title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
    description:
      'I build websites, courses, and growth systems for creators. Scale your brand with me.',
    url: `${siteConfig.url}/links`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
    description:
      'I build websites, courses, and growth systems for creators. Scale your brand with me.',
  },
};

/**
 * Standalone layout for /links — intentionally omits site nav/footer.
 * This is a bio-link page meant for social media traffic (Instagram, etc).
 */
export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
