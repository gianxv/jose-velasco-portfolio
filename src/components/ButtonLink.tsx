import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonLinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const variantClasses = {
  primary:
    'bg-ink-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-slate-100',
  secondary:
    'border border-ink-200 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-accent-400',
  ghost:
    'text-ink-600 hover:text-ink-900 dark:text-slate-300 dark:hover:text-white',
};

export function ButtonLink({ variant = 'primary', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
