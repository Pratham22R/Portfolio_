import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const { ref, isInView } = useInView();
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-sm sm:text-base hover:text-blue-500 transition-colors duration-300 inline-block relative after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

  return (
    <footer id="contact" className="py-16 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-background/20 to-transparent" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl opacity-60" />
      </div>

      {/* Animated Container */}
      <div
        ref={ref}
        className={cn(
          "container px-4 max-w-6xl mx-auto transition-all duration-1000",
          isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Glass card */}
        <div className="glass-card p-8 sm:p-10 md:p-12 rounded-3xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">
                Let's Work Together
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 hover:text-muted-foreground/80 transition-colors duration-300">
                I'm currently available for freelance work and exciting opportunities.
                Feel free to reach out if you have a project in mind or just want to connect.
              </p>

              <div className="mb-8 group">
                <a
                  href="mailto:pratham2262003@gmail.com"
                  className="text-base sm:text-lg font-medium text-foreground hover:text-blue-500 transition-colors relative"
                  aria-label="Email Pratham"
                >
                  pratham2262003@gmail.com
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              <SocialLinks iconSize={22} />
            </div>

            {/* Right Section - Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li><a href="#home" className={linkClass}>Home</a></li>
                  <li><a href="#about" className={linkClass}>About</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#skills" className={linkClass}>Skills</a></li>
                  <li>
                    <a
                      href="/PrathamRaghuvanshiResume (1).pdf"
                      download
                      className={linkClass}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Pratham Raghuvanshi. All Rights Reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 md:mt-0">
              Designed & Built with <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
