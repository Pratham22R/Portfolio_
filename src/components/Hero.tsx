import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import SocialLinks from './SocialLinks';
import ThreeDModel from './ThreeDModel';
import { cn } from '@/lib/utils';
import { useTypewriter } from '@/lib/animations';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    'Digital Experiences',
    'Full stack apps',
    'Frontend Designs'
  ];

  const mobileTaglines = taglines.map(tag =>
    tag.length > 20 && isMobile ? tag.substring(0, 20) + '...' : tag
  );
  const displayTagline = isMobile ? mobileTaglines[taglineIndex] : taglines[taglineIndex];

  const { displayText: typedTagline, isTyping, restart } = useTypewriter(displayTagline, 70);
  const { displayText: skill1 } = useTypewriter('AI-Driven Design', 50);
  const { displayText: skill2, isTyping: isTyping1 } = useTypewriter('Full Stack Engineer', 50);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const pauseTimeout = setTimeout(() => {
        const nextIndex = (taglineIndex + 1) % taglines.length;
        setTaglineIndex(nextIndex);
        restart();
      }, 2000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [isTyping, taglineIndex, restart, taglines.length]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[calc(100vh-80px)] md:min-h-screen pt-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 blur-3xl opacity-60 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl opacity-60 animate-float animate-delay-500" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/5 blur-2xl opacity-40 animate-pulse-subtle" />
      </div>

      <div className="container px-4 max-w-6xl mx-auto rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={cn(
            "space-y-5 md:space-y-8 text-center lg:text-left transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="space-y-2">
              <p className="text-sm md:text-base font-medium text-muted-foreground animate-fade-in">
                <span className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold animate-fade-in animate-delay-300 border border-white/10 hover:border-purple-500/20 transition-all shadow-md shadow-purple-500/10">
                  Web Developer & Designer
                </span>
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in animate-delay-100">
                Hey, I'm <span className="gradient-text">Pratham Raghuvanshi</span>,
              </h1>

              <div className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                <span className="typewriter-container inline-flex overflow-hidden">
                  <span className="typewriter-text">{typedTagline}</span>
                </span>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-4 max-w-lg mx-auto lg:mx-0 animate-fade-in animate-delay-200">
                Creating meaningful and performant web applications with a focus on user experience and accessibility.
              </p>
            </div>

            <div className="h-6 font-mono text-xs md:text-sm lg:text-base animate-fade-in animate-delay-400">
              <span className="inline-block">
                {skill1}{!isTyping1 && ' | '}{skill2}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in animate-delay-500">
              <Button
                asChild
                className="w-full sm:w-auto btn-hover btn-shimmer px-4 md:px-6 py-4 md:py-6 h-auto rounded-full text-sm font-medium 
                  bg-gradient-to-r from-purple-400/90 to-pink-400/90 hover:from-purple-500/90 hover:to-pink-500/90 
                  text-white font-medium transition-all duration-300 shadow-lg 
                  hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto btn-hover px-4 md:px-6 py-4 md:py-6 h-auto rounded-full text-sm font-medium 
                  border border-purple-400/30 hover:border-purple-400/80 
                  hover:bg-purple-400/10 text-white transition-all duration-300 
                  transform hover:scale-105"
              >
                <a href="#about">About Me</a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start animate-fade-in animate-delay-600">
              <SocialLinks iconSize={20} />
            </div>
          </div>

          <div className={cn(
            "transition-all duration-1000 transform h-full min-h-[300px]",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <ThreeDModel />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full glass hover:bg-white/20 transition-all duration-300 pulse-glow"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
