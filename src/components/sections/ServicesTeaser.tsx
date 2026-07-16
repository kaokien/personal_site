'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    numeral: 'I.',
    title: 'Creator Product Platforms',
    description: 'eCommerce, PWAs, and checkout funnels for content creators.',
    tag: 'eCommerce & PWAs',
  },
  {
    numeral: 'II.',
    title: 'Enterprise Video Solutions',
    description:
      'Player SDKs, ad tech, DRM. The infra behind high-traffic media.',
    tag: 'Ad Tech & Playback',
  },
  {
    numeral: 'III.',
    title: 'Community Backend & AI',
    description:
      'Discord systems, verification flows, and conversational AI bots.',
    tag: 'Discord & Automations',
  },
];

export function ServicesTeaser() {
  return (
    <section className="border-border bg-muted/5 border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
              § 02 &nbsp;·&nbsp; Services
            </span>
            <h2 className="text-foreground font-heading text-3xl leading-[0.95] font-bold uppercase lg:text-4xl">
              What I{' '}
              <span className="text-accent-lime font-serif font-normal normal-case italic">
                offer
              </span>
            </h2>
          </div>
          <div className="self-end lg:col-span-7 lg:col-start-6">
            <p className="text-muted-foreground font-serif text-base leading-relaxed italic">
              Three domains of engineering work. Each one grounded in real
              deployment experience, not theory.
            </p>
          </div>
        </div>

        {/* Service List */}
        <ol className="border-border border-t">
          {services.map((service, i) => (
            <motion.li
              key={service.numeral}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`border-border py-6 ${i < services.length - 1 ? 'border-b' : ''}`}
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-12">
                <div className="flex items-baseline gap-3 md:contents">
                  <span className="text-accent-lime font-serif text-2xl font-normal italic md:col-span-1">
                    {service.numeral}
                  </span>
                  <h3 className="text-foreground font-heading text-xl font-bold uppercase md:col-span-3 md:text-2xl md:leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground col-span-1 text-sm leading-relaxed sm:text-base md:col-span-7">
                  <span className="text-muted-foreground/70 font-serif italic">
                    {service.tag}.
                  </span>{' '}
                  {service.description}
                </p>
                <span className="text-muted-foreground/40 hidden font-mono text-[10px] tracking-wider uppercase md:col-span-1 md:block md:self-center md:text-right">
                  02.{String.fromCharCode(97 + i)}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-8 text-right">
          <Link
            href="/services"
            className="text-accent-lime font-mono text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
          >
            Read services in full &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
