import { FiBookOpen, FiCpu, FiGlobe } from 'react-icons/fi';
import { Section } from './Section';

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-ink-200 bg-white p-7 shadow-line dark:border-slate-800 dark:bg-slate-900">
          <p className="text-lg leading-8 text-ink-600 dark:text-slate-300">
            I enjoy turning messy operational problems into clearer digital tools. My interests spans software engineering, web development, workflow automation, and early exploration in machine learning and AI.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FiCpu, title: 'Software Engineering' },
              { icon: FiBookOpen, title: 'Machine Learning / AI' },
              { icon: FiGlobe, title: 'Community Impact' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-md border border-ink-200 bg-ink-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <Icon className="text-xl text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-ink-800 dark:text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-ink-200 bg-ink-900 p-7 text-white shadow-soft dark:border-slate-700">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-400">Education</p>
          <h3 className="mt-4 text-2xl font-semibold">University of Hawai‘i at Mānoa</h3>
          <p className="mt-3 text-slate-300">B.S. in Computer Science</p>
        </div>
      </div>
    </Section>
  );
}
