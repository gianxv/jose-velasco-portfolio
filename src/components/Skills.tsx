import { skillGroups } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="A focused toolkit for building responsive web experiences, automations, and software work.">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-ink-200 bg-white p-6 shadow-line dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-accent-500/10 px-3 py-2 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
