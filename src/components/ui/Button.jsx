import React from 'react';
import {cva} from 'class-variance-authority';
import {cn} from '../../lib/utils';

// shadcn/ui Button pattern: locally owned source with CVA variants.
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
    defaultVariants: {variant: 'default'},
  },
);

export const Button = React.forwardRef(({className, variant, ...props}, ref) => (
  <button ref={ref} className={cn(buttonVariants({variant, className}), 'button')} {...props} />
));
Button.displayName = 'Button';
