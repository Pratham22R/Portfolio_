
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize any animations or libraries
    console.log('Homepage mounted');
    
    // Add a class to the body for overall gradient background effects
    document.body.classList.add('gradient-background');
    
    // Smooth scrolling initialization
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80, // Accounting for navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.body.classList.remove('gradient-background');
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background via-background to-background/90">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
