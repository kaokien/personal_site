'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const systemStats = [
  { label: 'Weight', value: '166 lbs' },
  { label: 'Squat', value: '330 lbs' },
  { label: 'Deadlift', value: '355 lbs' },
  { label: 'Bench', value: '325 lbs' },
  { label: 'OHP', value: '220 lbs' },
];

export function AboutTeaser() {
  return (
    <section className="border-border border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — Headshot + Label */}
          <div className="lg:col-span-3">
            <span className="text-accent-lime mb-3 block font-mono text-xs font-bold tracking-widest uppercase">
              § 00 &nbsp;·&nbsp; About
            </span>
            <h2 className="text-foreground font-heading text-3xl leading-[0.95] font-bold uppercase lg:text-4xl">
              About{' '}
              <span className="text-accent-lime font-serif font-normal normal-case italic">
                me
              </span>
            </h2>

            <figure className="mt-8 max-w-[180px]">
              <div className="border-border aspect-square overflow-hidden border">
                <Image
                  src="/images/kevin-headshot.jpg"
                  alt="Kevin Adu-Poku"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="text-muted-foreground mt-2 font-serif text-xs italic">
                Kevin Adu-Poku, Growth Engineer.
              </figcaption>
            </figure>
          </div>

          {/* Right — Bio + Performance Stack */}
          <div className="lg:col-span-7 lg:col-start-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-foreground/90 text-lg leading-[1.7]">
                I build digital products that convert and systems that
                don&apos;t break at scale. Solutions engineer at JW Player,
                where I kept video running for Forbes, NPR, Fox, and a dozen
                others. Before that, Apple and Yale.
              </p>
              <p className="text-foreground/85 text-lg leading-[1.7]">
                I train with Coach Josh Boxing in Hamden, CT and run my own
                5-day strength cycle. The discipline carries over. I scope
                tight, ship fast, and treat every system I touch the way I treat
                a training block: structured, progressive, no wasted sets.
              </p>

              {/* The Performance Stack */}
              <div className="border-border mt-8 border-t pt-8">
                <span className="text-accent-lime mb-4 block font-mono text-[10px] font-bold tracking-widest uppercase">
                  Current System Stats · Q3 2026
                </span>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
                  {systemStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                        {stat.label}
                      </dt>
                      <dd className="text-foreground font-heading text-xl font-bold">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                  <div className="col-span-2 sm:col-span-3">
                    <dt className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                      Operational Tempo
                    </dt>
                    <dd className="text-foreground font-heading text-sm font-bold uppercase">
                      5-Day High-Intensity Strength Cycle
                    </dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="border-border border-t pt-6">
                <Link
                  href="/services"
                  className="text-accent-lime font-mono text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
                >
                  See how I work &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
