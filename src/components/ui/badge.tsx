import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-none border border-transparent px-2.5 py-0.5 text-xs font-medium font-mono uppercase tracking-widest w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-colors overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-foreground/10 text-foreground/60 border-foreground/10',
        secondary: 'bg-foreground/5 text-foreground/50 border-foreground/5',
        destructive: 'bg-accent-lime/10 text-accent-lime border-accent-lime/20',
        outline: 'border-border text-foreground/60',
        ghost: '[a&]:hover:bg-foreground/5 [a&]:hover:text-foreground',
        link: 'text-accent-lime underline-offset-4 [a&]:hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
