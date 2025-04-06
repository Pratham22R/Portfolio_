
import { useEffect, useState, useRef } from 'react';

// Intersection Observer hook for triggering animations when element enters viewport
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isInView };
};

// Enhanced typing effect hook with backspace functionality
export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(true);
    setIsDeleting(false);
  }, [text]);

  useEffect(() => {
    if (!isTyping && !isDeleting) return;

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Backspace effect - remove characters
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIsTyping(true);
        }
      } else {
        // Typing effect - add characters
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text.charAt(currentIndex));
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      }
    }, isDeleting ? speed / 2 : speed); // Backspace faster than typing

    return () => clearTimeout(timer);
  }, [text, displayText, currentIndex, speed, isTyping, isDeleting]);

  return { 
    displayText, 
    isTyping: isTyping || isDeleting,
    restart: () => {
      setIsDeleting(true);
    }
  };
};

// Mouse parallax effect hook
export const useMouseParallax = (strength = 0.1) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);
  
  return position;
};

// Scroll progress hook
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalHeight;
      setProgress(currentProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return progress;
};
