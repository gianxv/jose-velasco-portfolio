import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Skills } from '../components/Skills';
import { navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';

const sectionIds = navItems.map((item) => item.id);

export function PortfolioPage() {
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar items={navItems} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-ink-200 px-5 py-8 text-center text-sm text-ink-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 Jose Velasco.
      </footer>
    </div>
  );
}
