import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useState } from 'react';
import type { NavItem } from '../types/portfolio';

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Navbar({ items, activeSection, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200/70 bg-white/86 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/84">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-sm font-bold text-ink-900 dark:text-white" onClick={closeMenu}>
          JV
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                activeSection === item.id
                  ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                  : 'text-ink-500 hover:text-ink-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="border-t border-ink-200 bg-white px-5 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className={`block rounded-md px-3 py-3 text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                  : 'text-ink-600 dark:text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
