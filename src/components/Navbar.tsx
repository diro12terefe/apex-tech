import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-morphism-light dark:glass-morphism shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-glow"
        >
          APEX
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-[#FFB32C] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium hover:text-[#FFB32C] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-sm font-medium hover:text-[#FFB32C] transition-colors"
          >
            Work
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-morphism-light dark:glass-morphism hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[#FFB32C]" />
            ) : (
              <Moon className="w-5 h-5 text-[#0A1A35]" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-[#FFB32C] to-[#E69500] text-[#0A1A35] rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-[#FFB32C]/50 transition-all duration-300 hover:scale-105"
          >
            Start Project →
          </button>
        </div>
      </div>
    </nav>
  );
}
