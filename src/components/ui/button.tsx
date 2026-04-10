import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-bold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-white text-black hover:bg-accent-lime hover:text-black transition-colors',
        destructive:
          'bg-accent-lime text-black hover:bg-accent-lime/80 focus-visible:ring-accent-lime/20',
        outline:
          'border border-white/20 bg-transparent hover:border-accent-lime hover:text-accent-lime transition-colors',
        secondary:
          'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white',
        ghost: 'hover:bg-white/5 hover:text-white',
        link: 'text-accent-lime underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2 has-[>svg]:px-4',
        xs: "h-7 gap-1 rounded-none px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-9 rounded-none gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-12 rounded-none px-10 has-[>svg]:px-6 text-base',
        icon: 'size-11',
        'icon-xs': "size-7 rounded-none [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
