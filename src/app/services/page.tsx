import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Kevin Adu-Poku',
  description:
    'High-performance monetization platforms for creators and custom video engineering for media companies.',
};

export default function ServicesPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-lime mb-3 block font-mono text-xs font-bold tracking-widest uppercase">
              § 02 &nbsp;·&nbsp; Services & Strategy
            </span>
            <h1 className="text-foreground font-heading text-[8vw] leading-[0.95] font-bold tracking-tight uppercase md:text-[60px] lg:text-[72px]">
              Creator & Video{' '}
              <span className="text-accent-lime font-serif font-normal normal-case italic">
                Systems.
              </span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl font-serif text-lg leading-relaxed italic">
              I build high-performance monetization platforms for content
              creators and configure custom video playback architectures for
              media companies. I align technology, community backend systems,
              and brand licensing around direct business value.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services List */}
      <section className="border-border bg-muted/5 border-b py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
                § 02.1 &nbsp;·&nbsp; Capabilities
              </span>
              <h2 className="text-foreground font-heading text-3xl font-bold uppercase">
                Core Domains of Work
              </h2>
            </div>
            <div className="self-end lg:col-span-7 lg:col-start-6">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed tracking-wider uppercase">
                Three areas of engineering specialization, grounded in real
                deployment experience.
              </p>
            </div>
          </div>

          <ol className="border-border mt-8 border-t">
            {/* Service 1 */}
            <li className="border-border border-b py-8 md:py-10">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-12">
                <div className="flex items-baseline gap-3 md:contents">
                  <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                    I.
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="text-foreground font-heading mb-1 text-xl font-bold uppercase sm:text-2xl">
                      Creator Product Platforms
                    </h3>
                    <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                      eCommerce & PWAs
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:col-span-6 md:col-start-7">
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    Building custom web systems that turn audience attention
                    into direct digital sales. We design offline-capable
                    applications, interactive reader layouts, and secure
                    checkout funnels.
                  </p>
                  <ul className="text-muted-foreground space-y-2 font-mono text-[10px] tracking-wider uppercase sm:text-xs">
                    <li>
                      • Custom Next.js architectures with Stripe Checkout API
                      integrations
                    </li>
                    <li>
                      • Apple HIG-compliant digital reader engines for training
                      guides
                    </li>
                    <li>
                      • Mobile PWA wrappers supporting Add to Home Screen (A2HS)
                      and offline state
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Service 2 */}
            <li className="border-border border-b py-8 md:py-10">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-12">
                <div className="flex items-baseline gap-3 md:contents">
                  <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                    II.
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="text-foreground font-heading mb-1 text-xl font-bold uppercase sm:text-2xl">
                      Enterprise Video Solutions
                    </h3>
                    <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                      Ad Tech & Playback
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:col-span-6 md:col-start-7">
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    Video player integrations and ad tech configuration for
                    high-traffic media properties. Resolving cross-platform
                    playback issues and securing streams across web, mobile, and
                    CTV.
                  </p>
                  <ul className="text-muted-foreground space-y-2 font-mono text-[10px] tracking-wider uppercase sm:text-xs">
                    <li>
                      • Custom player SDK setups (JW Player, HLS streaming
                      tuning)
                    </li>
                    <li>
                      • Monetization scheduling (VAST/VPAID standards with
                      Google IMA & FreeWheel)
                    </li>
                    <li>
                      • DRM stream configurations (Widevine, FairPlay,
                      PlayReady)
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Service 3 */}
            <li className="py-8 md:py-10">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-12">
                <div className="flex items-baseline gap-3 md:contents">
                  <span className="text-accent-lime font-serif text-3xl font-normal italic md:col-span-1">
                    III.
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="text-foreground font-heading mb-1 text-xl font-bold uppercase sm:text-2xl">
                      Community Backend & AI
                    </h3>
                    <p className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                      Discord & Chat Automations
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:col-span-6 md:col-start-7">
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    Designing Discord community spaces that convert and retain
                    audiences. Implementing verification gates, security
                    filters, and custom chatbot routing.
                  </p>
                  <ul className="text-muted-foreground space-y-2 font-mono text-[10px] tracking-wider uppercase sm:text-xs">
                    <li>
                      • Discord verification onboarding flows (Carl-bot,
                      reaction roles)
                    </li>
                    <li>
                      • Conversational AI routing bots (deploying Qwen agents
                      linked to site resources)
                    </li>
                    <li>
                      • Server protection rules (AutoMod regex keyword filters,
                      anti-raid scripts)
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Engagement Strategy Segment */}
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-5">
              <span className="text-accent-lime block font-mono text-xs font-bold tracking-widest uppercase">
                § 02.2 &nbsp;·&nbsp; Partnership & Scoping
              </span>
              <h2 className="text-foreground font-heading text-4xl leading-tight font-bold uppercase">
                How I Structure Engagements
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether designing custom web tools, auditing brand partnership
                contracts, or debugging player playback architectures, I focus
                on clear project bounds, defined deliverables, and transparent
                pricing.
              </p>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <div className="border-border bg-muted/10 border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  1. Project Discovery & Auditing
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  We look at your current technology setups, target metrics, and
                  codebases to identify friction points:
                </p>
                <ul className="text-muted-foreground list-disc space-y-2 pl-4 text-sm">
                  <li>
                    <strong>Creator Audits:</strong> Mapping conversion leakages
                    in checkout paths or community onboarding flows.
                  </li>
                  <li>
                    <strong>Brand Licensing Audits:</strong> Reviewing incoming
                    brand contracts to structure fair UGC pricing limits and
                    time-bounded usage rights.
                  </li>
                  <li>
                    <strong>Video Audits:</strong> Debugging ad-firing errors or
                    device compatibility problems in media playback pipelines.
                  </li>
                </ul>
              </div>

              <div className="border-border border p-6 md:p-8">
                <h3 className="text-foreground font-heading mb-3 text-lg font-bold uppercase">
                  2. Implementation & Delivery
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                  Engagements focus on rapid, high-quality development sprints
                  with defined timelines:
                </p>
                <ul className="text-muted-foreground list-disc space-y-2 pl-4 text-sm">
                  <li>
                    <strong>Static & eCommerce Builds:</strong> Launching custom
                    platforms built with Next.js, Stripe, and Mux Video.
                  </li>
                  <li>
                    <strong>Workflow Automations:</strong> Deploying Discord
                    verifications, secure filters, and conversational bots.
                  </li>
                  <li>
                    <strong>Client Hand-off:</strong> Packaging codebases with
                    clean inline documentation and instructions for easy
                    maintenance.
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
            Ready to build custom checkout flows, optimize video streaming, or
            set up automated community pipelines?
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
