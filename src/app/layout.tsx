import type { Metadata } from 'next';
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';
import { siteConfig } from '@/lib/constants';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const oswald = Oswald({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevin Adu-Poku — Growth Solutions Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Kevin Adu-Poku',
    jobTitle: 'Growth Solutions Engineer',
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: siteConfig.socials.map((s) => s.url),
    worksFor: {
      '@type': 'Organization',
      name: 'JW Player',
    },
    knowsAbout: [
      'Video Engineering',
      'Full-Stack Development',
      'Growth Systems',
      'SEO',
      'Next.js',
      'TypeScript',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Haven',
      addressRegion: 'CT',
      addressCountry: 'US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="bg-accent-lime fixed top-0 left-0 z-[100] -translate-y-full px-4 py-2 text-sm font-bold text-black transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <div className="bg-noise" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
