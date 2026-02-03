'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn('flex w-full overflow-hidden whitespace-nowrap', className)}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-4"
        animate={{
          x: reverse ? ['-100%', '0%'] : ['0%', '-100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
