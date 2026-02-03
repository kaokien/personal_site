'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="border-primary/20 bg-background relative flex min-h-screen flex-col justify-between overflow-hidden border-b-2 px-4 py-12 sm:px-8">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex w-full items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="text-xs sm:text-sm">
            Based in New York, NY
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground hidden text-right font-mono text-xs tracking-widest uppercase sm:block"
        >
          Portfolio 2024
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
          className="font-heading text-foreground text-[15vw] leading-[0.85] font-bold tracking-tighter uppercase select-none"
        >
          Solutions
        </motion.h1>

        <div className="flex items-center gap-4 sm:gap-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-destructive h-2 w-full max-w-[100px] sm:max-w-[150px] lg:max-w-[300px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-muted-foreground/50 hover:text-primary text-[15vw] leading-[0.85] font-bold tracking-tighter uppercase transition-colors duration-500 select-none"
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
          <p className="text-destructive mb-2 font-mono text-xs font-bold tracking-widest uppercase">
            Kevin Adupoku
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium sm:text-xl">
            I build scalable web applications and craft premium digital
            experiences that solve real business problems. Specializing in video
            engineering and creative development.
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
            className="h-14 bg-transparent px-8 text-lg"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
