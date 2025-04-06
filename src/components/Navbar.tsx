import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-500',
        isScrolled ? 'backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl font-bold relative group"
        >
          <span className="sr-only">Pratham Raghuvanshi</span>
          <span className="inline-block gradient-text">PR</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium relative group transition-colors px-1 py-1",
                  isActive ? 'text-primary' : 'text-foreground'
                )}
              >
                {link.name}
                {/* Hover underline effect */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300",
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-background/20 backdrop-blur-lg hover:bg-background/40 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-background/90 mt-2 p-4 rounded-xl animate-fade-in mx-4 border border-white/10">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-4 py-2 rounded-lg transition-colors relative overflow-hidden",
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'hover:bg-white/5'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
