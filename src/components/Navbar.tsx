
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleResumeDownload = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/pratham-raghuvanshi-resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Pratham_Raghuvanshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + (isMobile ? 80 : 100); // Adjust offset based on device

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial call to set correct section on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks, isMobile]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 px-4 md:px-6 lg:px-12 transition-all duration-500',
        isScrolled ? 'backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl md:text-2xl font-bold relative group"
        >
          <span className="sr-only">Pratham Raghuvanshi</span>
          <span className="inline-block gradient-text">PR</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium relative px-1 py-1 group transition-all',
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
              )}
            >
              <span>{link.name}</span>
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300',
                  'group-hover:w-full',
                  activeSection === link.href.substring(1) && 'w-full'
                )}
              />
            </a>

          ))}
        </nav>

        {/* Desktop right side controls */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 
                       text-white font-medium px-4 py-2 rounded-full transition-all duration-300 
                       hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>


        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-background/20 backdrop-blur-lg hover:bg-background/40 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-background/90 mt-2 p-4 rounded-xl animate-fade-in mx-4 border border-white/10">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium px-4 py-2 rounded-lg transition-colors relative overflow-hidden",
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'hover:bg-white/5'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10">
              <Button
                onClick={() => {
                  handleResumeDownload();
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 
                           text-white font-medium px-4 py-2 rounded-full transition-all duration-300 mr-3"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>


            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;