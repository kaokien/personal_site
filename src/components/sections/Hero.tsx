'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden border-b border-white/10 px-4 py-12 sm:px-8">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex w-full items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="text-xs sm:text-sm">
            Based in New Haven, CT
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden text-right font-mono text-xs tracking-widest text-white/30 uppercase sm:block"
        >
          Portfolio 2025
          <br />
          Vol. 01
        </motion.div>
      </div>

      {/* Main Typography Stack */}
      <div className="relative z-10 my-auto flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[12vw] leading-[0.85] font-bold tracking-tighter text-white uppercase select-none sm:text-[15vw]"
        >
          Growth
        </motion.h1>

        <div className="flex items-center gap-4 sm:gap-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-accent-lime h-2 w-full max-w-[100px] sm:max-w-[150px] lg:max-w-[300px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[12vw] leading-[0.85] font-bold tracking-tighter text-white/20 uppercase transition-colors duration-500 select-none hover:text-white sm:text-[15vw]"
          >
            Engineer
          </motion.h1>
        </div>
      </div>

      {/* Bottom Info & CTA */}
      <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl"
        >
          <p className="text-accent-lime mb-2 font-mono text-xs font-bold tracking-widest uppercase">
            Kevin Adu-Poku
          </p>
          <p className="text-lg leading-relaxed font-medium text-white/50 sm:text-xl">
            Engineering Growth Systems. Architecting performance, optimizing
            platforms, and driving measurable revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="h-14 px-8 text-lg">
            <Link href="/projects">VIEW WORK</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
