import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Kevin Adu-Poku',
  description:
    'Consulting services for social media creators, influencers, and media platforms. UGC pricing, usage rights contract scoping, and video engineering.',
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
              Consulting for creators, influencers, and media companies to build
              digital products, set up community backend pipelines, and
              negotiate brand licensing terms.
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
                What I Do
              </h2>
            </div>
            <div className="self-end lg:col-span-7 lg:col-start-6">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed tracking-wider uppercase">
                Four distinct consulting formats built on real shipping
                experience.
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
                  Asset Scoping & Pricing
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Advising creators and brands on structuring User Generated
                  Content terms. Protecting creator ownership while delivering
                  high-yielding creative assets to brands.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • UGC Pricing Models (organic placement vs. paid ad usage)
                  </li>
                  <li>
                    • Usage Rights Scoping (30, 90-day, or perpetual ad
                    licenses)
                  </li>
                  <li>
                    • Creator Profile Whitelisting & Dark Post Deal negotiation
                  </li>
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
                  Creator Product Sales
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  eCommerce & PWAs
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Converting social reach into digital product sales. Building
                  custom platforms, interactive training blueprints, and digital
                  courses.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Mobile PWAs (Progressive Web Apps) with offline storage
                  </li>
                  <li>
                    • Apple HIG-inspired digital eBook readers with progress
                    tracking
                  </li>
                  <li>• Stripe checkout funnels and subscription portals</li>
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
                  Community Backend & AI
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Discord, bots & integrations
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Designing chat and community platforms to engage and retain
                  members. Setting up automated onboarding scripts, role
                  verifications, and custom AI assistants.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Custom Verification & Role Onboarding (e.g. Carl-bot and
                    reaction roles)
                  </li>
                  <li>
                    • Conversational AI Assistants (e.g. deploying Qwen agents
                    to dynamically route questions to site resources)
                  </li>
                  <li>
                    • Automated Server Protection (e.g. AutoMod regex keyword
                    filters and anti-raid setups)
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
                  Enterprise Video Setup
                </h3>
                <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  JW Player & Ad Tech
                </p>
              </div>
              <div className="space-y-4 md:col-span-6 md:col-start-7">
                <p className="text-muted-foreground leading-relaxed">
                  Video engineering for large media platforms. Setting up
                  players for reliable delivery, ad servers, and secure
                  playbacks.
                </p>
                <ul className="text-muted-foreground space-y-2 font-mono text-xs tracking-wider uppercase">
                  <li>
                    • Player SDK configurations (JW Player, HLS playback tuning)
                  </li>
                  <li>
                    • Ad server integrations (VAST/VPAID with Google IMA &
                    FreeWheel)
                  </li>
                  <li>
                    • DRM playback architectures (Widevine, FairPlay, PlayReady)
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Creator Deal Strategy & Contract Auditing */}
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <span className="text-accent-lime block font-mono text-xs font-bold tracking-widest uppercase">
                § 02.2 &nbsp;·&nbsp; Creator Strategy
              </span>
              <h2 className="text-foreground font-heading text-4xl leading-tight font-bold uppercase">
                Deal Strategy & Contract Auditing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most creators sign generic brand agreements without scoping
                usage rights, giving away long-term value for a single flat fee.
                I work with creators to audit incoming offers, price usage
                rights correctly, and structure brand partnerships that scale.
              </p>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <div className="border-border bg-muted/10 border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  How I Help Creators Structure Partnerships
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  We rebuild how you price and negotiate deal terms, focusing on
                  three key areas:
                </p>
                <ol className="text-muted-foreground space-y-4 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">1.</span>
                    <span>
                      <strong>Asset Pricing Frameworks:</strong> Separating base
                      content creation costs from active advertising usage
                      rights, ensuring you get paid as the ad spend scales.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">2.</span>
                    <span>
                      <strong>Whitelisting & Profile Access:</strong>{' '}
                      Determining fair pricing structures when brands request
                      access to run ads through your social handles (Meta/TikTok
                      Partnership Ads).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-lime font-bold">3.</span>
                    <span>
                      <strong>Exclusivity & Category Scope:</strong> Narrowing
                      brand exclusivity windows so you aren&apos;t locked out of
                      competing partnerships for minimal compensation.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="border-border border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  Contract Audits & Asset Delivery
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  I review incoming contract drafts to remove trap clauses and
                  ensure clear execution parameters:
                </p>
                <ul className="text-muted-foreground list-disc space-y-3 pl-4 text-sm">
                  <li>
                    <strong>Time & Platform Boundaries:</strong> Limiting active
                    ad usage to 30, 60, or 90 days and defining precise channels
                    (e.g., paid social only) to prevent unauthorized
                    distribution.
                  </li>
                  <li>
                    <strong>Anti-Sublicensing Controls:</strong> Eliminating
                    third-party transfers so brands cannot sell your likeness to
                    affiliates.
                  </li>
                  <li>
                    <strong>Asset Flow Automation:</strong> Setting up simple,
                    structured file delivery pipelines so brands access approved
                    deliverables on defined release timelines.
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
            § 02.3 &nbsp;·&nbsp; Action
          </span>
          <h2 className="text-foreground font-heading mb-4 text-3xl font-bold uppercase">
            Build Your Digital Presence
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 mb-8 max-w-xl text-sm leading-relaxed">
            Let&apos;s structure your next brand agreement, build custom
            checkout flows, or set up automated community moderation rules.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
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
