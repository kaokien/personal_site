import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
  description:
    'I build 24/7 digital ecosystems for fitness creators and online coaches. See my work, apply to scale your brand.',
  openGraph: {
    title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
    description:
      'Engineering 24/7 digital ecosystems for creators. Scale your brand with proven infrastructure.',
    url: `${siteConfig.url}/links`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Adu-Poku | Growth Systems for Fitness Creators',
    description:
      'Engineering 24/7 digital ecosystems for creators. Scale your brand with proven infrastructure.',
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
