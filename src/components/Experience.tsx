import { FiCheckCircle } from 'react-icons/fi';
import { experiences } from '../data/portfolio';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Hands-on work across intranet development, workflow automation, data analysis, and project-based technical learning.">
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-ink-200 dark:before:bg-slate-800">
        {experiences.map((item) => (
          <article key={item.role} className="relative pl-12">
            <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-md bg-accent-500 text-white shadow-line">
              <FiCheckCircle aria-hidden="true" />
            </span>
            <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-line transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink-900 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-500 dark:text-slate-400">{item.organization}</p>
                </div>
                <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">{item.timeframe}</span>
              </div>
              <p className="mt-5 text-base leading-7 text-ink-600 dark:text-slate-300">{item.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-ink-600 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
