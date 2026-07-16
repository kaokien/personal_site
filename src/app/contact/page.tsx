import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { ContactForm } from '@/components/sections';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Kevin Adu-Poku',
  description:
    'Tell me about your project or platform. I reply within one business day directly to establish fit, scope, and timeline.',
};

export default function ContactPage() {
  return (
    <BaseLayout>
      <section className="border-border border-b py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-lime mb-3 block font-mono text-xs font-bold tracking-widest uppercase">
              § 05 &nbsp;·&nbsp; Start An Engagement
            </span>
            <h1 className="text-foreground font-heading text-[8vw] leading-[0.95] font-bold tracking-tight uppercase md:text-[60px] lg:text-[72px]">
              Tell me about{' '}
              <span className="text-accent-lime font-serif font-normal normal-case italic">
                your project.
              </span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl font-mono text-xs tracking-wider uppercase">
              A short description is plenty. I&apos;ll reply directly to verify
              scope and engineering alignment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Form Section */}
            <div className="space-y-8 lg:col-span-7">
              <div className="border-border bg-muted/10 rounded-none border p-6 md:p-10">
                <span className="text-accent-lime mb-2 block font-mono text-[10px] tracking-widest uppercase">
                  FORM 05.A
                </span>
                <h2 className="text-foreground font-heading mb-6 text-2xl font-bold uppercase">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>

              {/* Quick Contacts */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:border-accent-lime border-border bg-muted/30 flex items-center gap-3 rounded-none border p-4 transition-colors"
                >
                  <div className="bg-muted/30 border-border flex h-10 w-10 items-center justify-center rounded-none border">
                    <svg
                      className="text-muted-foreground h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-medium">
                      Email Directly
                    </div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>
                <a
                  href={
                    siteConfig.socials.find((s) => s.name === 'LinkedIn')
                      ?.url || '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-accent-lime border-border bg-muted/30 flex items-center gap-3 rounded-none border p-4 transition-colors"
                >
                  <div className="bg-muted/30 border-border flex h-10 w-10 items-center justify-center rounded-none border">
                    <svg
                      className="text-muted-foreground h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-medium">
                      LinkedIn Link
                    </div>
                    <div className="text-muted-foreground font-mono text-xs">
                      Connect professionally
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* What's Next Sidebar */}
            <aside className="border-border space-y-6 border p-6 md:p-8 lg:col-span-5">
              <div>
                <span className="text-accent-lime mb-1 block font-mono text-[10px] tracking-widest uppercase">
                  ONBOARDING WORKFLOW
                </span>
                <h3 className="text-foreground font-heading mb-4 text-xl font-bold uppercase">
                  What Happens Next
                </h3>
                <p className="text-muted-foreground mb-6 font-serif text-sm italic">
                  Once you submit this form, here is the structured sequence we
                  follow to verify scope and establish project alignment.
                </p>
              </div>

              <ol className="space-y-6">
                <li className="grid grid-cols-12 gap-3">
                  <span className="text-accent-lime col-span-2 font-serif text-2xl font-normal italic">
                    I.
                  </span>
                  <div className="col-span-10">
                    <h4 className="text-foreground font-heading text-sm font-bold uppercase">
                      One-on-One Response
                    </h4>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                      A personal response directly from me within 24 business
                      hours. No auto-responders, no generic templates.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-3">
                  <span className="text-accent-lime col-span-2 font-serif text-2xl font-normal italic">
                    II.
                  </span>
                  <div className="col-span-10">
                    <h4 className="text-foreground font-heading text-sm font-bold uppercase">
                      30-Minute Fit Call
                    </h4>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                      A brief discovery call to discuss scope, systems
                      architecture, and see if our technical needs align.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-3">
                  <span className="text-accent-lime col-span-2 font-serif text-2xl font-normal italic">
                    III.
                  </span>
                  <div className="col-span-10">
                    <h4 className="text-foreground font-heading text-sm font-bold uppercase">
                      Written Engineering Plan
                    </h4>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                      If there&apos;s fit, I&apos;ll submit a clear proposal
                      outlining the milestones, deliverables, tech stack, and
                      fixed pricing.
                    </p>
                  </div>
                </li>
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
