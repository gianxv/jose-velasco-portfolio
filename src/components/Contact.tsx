import { FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { contactLinks } from '../data/portfolio';
import { Section } from './Section';

export function Contact() {
  const [status, setStatus] = useState('');
  const [mailtoHref, setMailtoHref] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // This starter keeps the form functional locally. Replace this block with EmailJS when service credentials are available.
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name') ?? 'Visitor'}`);
    const body = encodeURIComponent(`${data.get('message') ?? ''}\n\nReply to: ${data.get('email') ?? ''}`);
    setMailtoHref(`mailto:josetomasgian@gmail.com?subject=${subject}&body=${body}`);
    setStatus('Message ready. Open the email draft to send it.');
    form.reset();
  };

  return (
    <Section id="contact" title="Contact" intro="Reach out for collaboration, internships, or software ideas with community impact.">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-lg border border-ink-200 bg-ink-900 p-7 text-white shadow-soft dark:border-slate-700">
          <h3 className="text-2xl font-semibold">Let’s build something useful.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Email, LinkedIn, and GitHub links are ready for direct contact and profile review.
          </p>
          <div className="mt-7 space-y-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="flex items-center gap-3 rounded-md border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-accent-400 hover:text-accent-400">
                <Icon aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        </aside>
        <form onSubmit={handleSubmit} className="rounded-lg border border-ink-200 bg-white p-7 shadow-line dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-ink-800 dark:text-slate-200">
              Name
              <input name="name" required className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </label>
            <label className="text-sm font-semibold text-ink-800 dark:text-slate-200">
              Email
              <input name="email" type="email" required className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-ink-800 dark:text-slate-200">
            Message
            <textarea name="message" required rows={6} className="mt-2 w-full resize-y rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          </label>
          <button type="submit" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink-900 px-5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-white dark:text-ink-900">
            <FiSend aria-hidden="true" /> Send message
          </button>
          {status ? (
            <div role="status" className="mt-4 text-sm font-medium text-accent-600 dark:text-accent-400">
              <p>{status}</p>
              {mailtoHref ? (
                <a className="mt-2 inline-flex underline decoration-accent-500/40 underline-offset-4" href={mailtoHref}>
                  Open email draft
                </a>
              ) : null}
            </div>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
