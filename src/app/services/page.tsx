import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Kevin Adu-Poku',
  description:
    'Consulting services for social media influencers, media platforms, and creators. UGC pricing, usage rights architecture, and video product engineering.',
};

export default function ServicesPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-lime mb-3 block font-mono text-xs font-bold tracking-widest uppercase">
              § 02 &nbsp;·&nbsp; Services & Consulting
            </span>
            <h1 className="text-foreground font-heading text-[8vw] leading-[0.95] font-bold tracking-tight uppercase md:text-[60px] lg:text-[72px]">
              Creator & Video{' '}
              <span className="text-accent-lime font-serif font-normal normal-case italic">
                Solutions.
              </span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl font-serif text-lg leading-relaxed italic">
              Helping high-reach creators, social influencers, and media
              platforms build digital product ecosystems, structure high-yield
              partnerships, and automate community operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="border-border bg-muted/5 border-b py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
                § 02.1 &nbsp;·&nbsp; Offerings
              </span>
              <h2 className="text-foreground font-heading text-3xl font-bold uppercase">
                How We Can Work Together
              </h2>
            </div>
            <div className="self-end lg:col-span-7 lg:col-start-6">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed tracking-wider uppercase">
                Four defined consulting domains designed to turn attention into
                sustainable, automated revenue.
              </p>
            </div>
          </div>

          <ol className="border-border mt-8 border-t">
            {/* Service 1 */}
            <li className="border-border grid grid-cols-1 gap-x-6 gap-y-4 border-b py-10 md:grid-cols-12">
              <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                I.
              </span>
              <div className="md:col-span-4">
                <h3 className="text-foreground font-heading mb-1 text-2xl font-bold uppercase">
                  UGC & Licensing Strategy
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Consulting for Creators & Brands
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Advising influencers and brands on structuring User Generated
                  Content agreements that protect creator IP while maximizing
                  brand conversions.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • UGC Pricing Models (organic flat-rates vs. paid usage
                    additions)
                  </li>
                  <li>
                    • Usage Rights Scoping (30, 90-day, or perpetual ad license
                    structures)
                  </li>
                  <li>• Whitelisting & Dark Post Negotiation frameworks</li>
                </ul>
              </div>
            </li>

            {/* Service 2 */}
            <li className="border-border grid grid-cols-1 gap-x-6 gap-y-4 border-b py-10 md:grid-cols-12">
              <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                II.
              </span>
              <div className="md:col-span-4">
                <h3 className="text-foreground font-heading mb-1 text-2xl font-bold uppercase">
                  Creator Brand Monetization
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Digital Products & PWAs
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Translating social attention into high-margin products. We
                  design and build offline-capable web platforms, interactive
                  training blueprints, and digital courses.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Custom Progressive Web Apps (PWAs) with local caching
                  </li>
                  <li>
                    • Apple HIG-inspired digital eBook readers & progress logs
                  </li>
                  <li>
                    • Stripe billing engines, subscription gates, and user
                    checkout funnels
                  </li>
                </ul>
              </div>
            </li>

            {/* Service 3 */}
            <li className="border-border grid grid-cols-1 gap-x-6 gap-y-4 border-b py-10 md:grid-cols-12">
              <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                III.
              </span>
              <div className="md:col-span-4">
                <h3 className="text-foreground font-heading mb-1 text-2xl font-bold uppercase">
                  Community Setup & AI Agents
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Discord & Bot Architectures
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Engineering community funnels that build high engagement.
                  Implementing automated moderation rules and AI tools to triage
                  onboarding.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Discord bots & custom onboarding automation workflows
                  </li>
                  <li>
                    • LLM Agent Integrations (Qwen API dynamic knowledge-base
                    routing)
                  </li>
                  <li>
                    • AutoMod regex filters, anti-raid verification setups, and
                    roles
                  </li>
                </ul>
              </div>
            </li>

            {/* Service 4 */}
            <li className="grid grid-cols-1 gap-x-6 gap-y-4 py-10 md:grid-cols-12">
              <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                IV.
              </span>
              <div className="md:col-span-4">
                <h3 className="text-foreground font-heading mb-1 text-2xl font-bold uppercase">
                  Enterprise Video Solutions
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Video Players & Ad Tech
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Custom player engineering for major platforms and
                  broadcasters. Optimizing media players for performance,
                  monetization, and device compatibility.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Player SDK Integrations (JW Player, customized HLS
                    playbacks)
                  </li>
                  <li>
                    • VAST/VPAID Google IMA and FreeWheel ad tag scheduling
                  </li>
                  <li>
                    • DRM systems configurations (Widevine, FairPlay, PlayReady)
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* UGC & Licensing Deeper Dive */}
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <span className="text-accent-lime block font-mono text-xs font-bold tracking-widest uppercase">
                § 02.3 &nbsp;·&nbsp; Deep Dive
              </span>
              <h2 className="text-foreground font-heading text-4xl leading-tight font-bold uppercase">
                UGC Pricing & Usage Rights Architecture
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Standard influencer brand deals are often structured
                poorly—failing to account for the real value of the media
                assets. I consult with creators and brands to align licensing
                and delivery around measurable performance metrics.
              </p>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <div className="border-border bg-muted/10 border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  UGC Asset Pricing Structure
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  Pricing shouldn&apos;t just cover content creation time. It
                  must reflect the media&apos;s utility across different
                  marketing vectors:
                </p>
                <ol className="text-muted-foreground space-y-4 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">1.</span>
                    <span>
                      <strong>Base Organic Rate:</strong> Covers creation and
                      placement on the creator&apos;s channels (determined by
                      average organic reach and production values).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">2.</span>
                    <span>
                      <strong>Paid Usage Additions:</strong> Licensing rates
                      added when a brand runs the content as paid ads. Typically
                      scaled as a percentage of the base rate per 30, 90, or 365
                      days of active ad spend.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">3.</span>
                    <span>
                      <strong>Whitelisting / Creator Licensing:</strong>{' '}
                      Negotiating terms to run ads directly from the
                      creator&apos;s profile (Meta/TikTok Partnership Ads),
                      demanding separate compensation since it affects the
                      creator&apos;s direct audience profile.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="border-border border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  Usage Rights Framing
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  Licensing terms must be explicitly scoped. Broad, open-ended
                  clauses like &quot;perpetual usage&quot; dilute creator value:
                </p>
                <ul className="text-muted-foreground list-disc space-y-3 pl-4 text-sm">
                  <li>
                    <strong>Time-Bounded Rights:</strong> Target standard 30,
                    60, or 90-day limits for paid social, with optional contract
                    renewals.
                  </li>
                  <li>
                    <strong>Platform Scope:</strong> Explicitly list authorized
                    platforms (e.g., &quot;Meta, TikTok, and YouTube Shorts
                    only&quot; vs. &quot;all digital out-of-home media&quot;).
                  </li>
                  <li>
                    <strong>Sub-Licensing:</strong> Disallowing third-party
                    transfers, preventing brands from selling your image to
                    affiliates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
            § 02.4 &nbsp;·&nbsp; Action
          </span>
          <h2 className="text-foreground font-heading mb-4 text-3xl font-bold uppercase">
            Need to Optimize Your Monetization?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 mb-8 max-w-xl text-sm leading-relaxed">
            Let&apos;s discuss custom eCommerce funnels, bot configurations, or
            audit your upcoming brand partnership deal terms.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
