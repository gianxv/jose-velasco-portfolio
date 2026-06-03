import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi';
import { ButtonLink } from './ButtonLink';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-5 pt-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 top-1/2 border-t border-ink-200 bg-white dark:border-slate-800 dark:bg-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-12 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-ink-900 dark:text-white sm:text-6xl lg:text-7xl">
            Jose Velasco
          </h1>
          <p className="mt-5 text-xl font-medium text-accent-600 dark:text-accent-400">
            Computer Science Student
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#experience">
              View Experience
              <FiArrowDown aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
              <FiMail aria-hidden="true" />
            </ButtonLink>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          aria-label="Developer workspace preview"
        >
          <div className="rounded-lg border border-ink-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3 dark:border-slate-800">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-accent-500" />
              </div>
              <span className="text-xs font-medium text-ink-400 dark:text-slate-500">portfolio.tsx</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm leading-7 text-ink-700 dark:text-slate-300">
              <p><span className="text-accent-600">const</span> focus = ['software engineering', 'AI and ML', 'community'];</p>
              <p><span className="text-accent-600">function</span> buildImpact() {'{'}</p>
              <p className="pl-6">return accessibleTools.map(improveWorkflow);</p>
              <p>{'}'}</p>
              <div className="grid grid-cols-3 gap-3 pt-3 font-sans">
                {['React', 'TypeScript', 'Automation'].map((item) => (
                  <span key={item} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-center text-xs font-semibold text-ink-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href="https://github.com/gianxv"
            className="absolute -bottom-5 right-5 inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-800 shadow-line transition hover:-translate-y-0.5 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
