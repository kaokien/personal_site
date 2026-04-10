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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              I&apos;m a Growth Solutions Engineer who architects performance,
              optimizes platforms, and drives measurable revenue. With deep
              expertise in video technology and full-stack engineering, I
              specialize in building systems that scale — from enterprise video
              infrastructure serving millions to creator platforms generating
              real business outcomes.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/50">
              At JW Player, I engineer custom implementations for clients like
              NBC, Forbes, and Hedgeye. As a Technical Founder, I&apos;ve built
              a full-stack Vercel ecosystem for a creator with 150M+ views. My
              approach: technical precision meets business impact.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-none border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="mt-1 font-mono text-xs tracking-wider text-white/30 uppercase">
                Years in Tech
              </div>
            </div>
            <div className="rounded-none border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold text-white">$4M+</div>
              <div className="mt-1 font-mono text-xs tracking-wider text-white/30 uppercase">
                Revenue Managed
              </div>
            </div>
            <div className="rounded-none border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold text-white">150M+</div>
              <div className="mt-1 font-mono text-xs tracking-wider text-white/30 uppercase">
                Views Scaled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — replaces the Skills Grid */}
      <section className="border-y border-white/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 font-mono text-xs tracking-[0.3em] text-white/30 uppercase">
            What I Do
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="group hover:border-accent-lime border border-white/10 bg-white/[0.02] p-6 transition-colors"
              >
                <h3 className="text-lg font-bold text-white">{cap.label}</h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-white/30">
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
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Interested in working together?
          </h2>
          <p className="mt-4 text-white/40">
            I&apos;m always open to discussing new projects and opportunities.
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
