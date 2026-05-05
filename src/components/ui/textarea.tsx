import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'focus-visible:border-accent-lime focus-visible:ring-accent-lime/20 aria-invalid:ring-destructive/20 aria-invalid:border-destructive border-border text-foreground placeholder:text-muted-foreground/50 flex field-sizing-content min-h-20 w-full rounded-none border bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
