import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { ExperienceTimeline } from '@/components/sections';
import experienceData from '@/data/experience.json';
import { Experience, ExperienceType } from '@/lib/types';

export const metadata: Metadata = {
  title: 'About | Kevin Adu-Poku',
  description:
    'Learn more about Kevin Adu-Poku, a Growth Solutions Engineer specializing in video technology, platform optimization, and driving measurable revenue.',
};

// Map JSON data to typed objects
const experiences: Experience[] = experienceData.map((e) => ({
  ...e,
  type: e.type as unknown as ExperienceType,
}));

const capabilities = [
  {
    label: 'Video & Streaming Infrastructure',
    detail: 'HLS, DRM/CDM, VAST/VPAID, Google IMA, FreeWheel, Mux',
  },
  {
    label: 'Full-Stack Product Engineering',
    detail: 'Next.js, React, TypeScript, Node.js, Vercel, Stripe',
  },
  {
    label: 'Growth & Platform Optimization',
    detail: 'Technical SEO, GEO, Sales Funnels, Marketing Automation',
  },
  {
    label: 'Enterprise Solutions Architecture',
    detail: 'Custom integrations, API design, cross-platform (Web/Mobile/CTV)',
  },
];

export default function AboutPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
              § 01 &nbsp;·&nbsp; Biography
            </span>
            <h1 className="text-foreground font-heading text-4xl font-bold tracking-tight uppercase sm:text-5xl">
              About Me
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              I&apos;m a Growth Solutions Engineer. I build things that perform,
              fix things that don&apos;t, and figure out how to make the numbers
              go up. My background is in video technology and full-stack
              engineering, and I&apos;ve spent the last few years applying that
              to everything from enterprise media platforms to creator
              businesses.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              At JW Player, I engineer custom implementations for clients like
              NBC, Forbes, and Hedgeye. On the side, I&apos;ve built a full
              product suite on Vercel for a creator with 150M+ views. I like
              working where technical depth meets real business problems.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="border-border bg-muted/30 rounded-none border p-6 text-center">
              <div className="text-foreground text-3xl font-bold">8+</div>
              <div className="text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase">
                Years in Tech
              </div>
            </div>
            <div className="border-border bg-muted/30 rounded-none border p-6 text-center">
              <div className="text-foreground text-3xl font-bold">$4M+</div>
              <div className="text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase">
                Revenue Managed
              </div>
            </div>
            <div className="border-border bg-muted/30 rounded-none border p-6 text-center">
              <div className="text-foreground text-3xl font-bold">150M+</div>
              <div className="text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase">
                Views Scaled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — replaces the Skills Grid */}
      <section className="border-border border-y py-20">
        <div className="container mx-auto px-4">
          <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
            § 02 &nbsp;·&nbsp; Capabilities
          </span>
          <h2 className="text-foreground font-heading text-3xl font-bold tracking-tight uppercase">
            Core Competencies
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="group hover:border-accent-lime border-border bg-muted/30 border p-6 transition-colors"
              >
                <h3 className="text-foreground text-lg font-bold">
                  {cap.label}
                </h3>
                <p className="text-muted-foreground mt-2 font-mono text-xs leading-relaxed">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline experiences={experiences} />

      {/* CTA Section */}
      <section className="border-border border-t py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
            § 04 &nbsp;·&nbsp; Connect
          </span>
          <h2 className="text-foreground font-heading text-3xl font-bold tracking-tight uppercase">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-xs tracking-wider uppercase">
            Always open to discussing new projects, roles, and partnership
            opportunities.
          </p>
          <a
            href="/contact"
            className="bg-accent-lime hover:bg-accent-lime/80 mt-6 inline-flex items-center rounded-none px-6 py-3 text-sm font-bold tracking-widest text-black uppercase transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </BaseLayout>
  );
}
