import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface SectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  intro?: string;
  className?: string;
}

export function Section({ id, title, intro, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {title ? (
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal text-ink-900 dark:text-white sm:text-4xl">
              {title}
            </h2>
            {intro ? <p className="mt-4 text-base leading-7 text-ink-500 dark:text-slate-300">{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </motion.div>
    </section>
  );
}
