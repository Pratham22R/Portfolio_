
import { useRef } from 'react';
import { useInView, useMouseParallax } from '@/lib/animations';

const ThreeDModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isInView, ref } = useInView();
  const parallax = useMouseParallax(0.03);

  return (
    <div 
      ref={ref} 
      className={`w-full max-w-md mx-auto h-[500px] relative transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transform: `translate(${parallax.x * 15}px, ${parallax.y * 15}px)`,
        }}
      >
        {/* Developer Image with Enhanced Gradient Shadow */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Gradient shadow effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[30px] 
                        bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-full blur-xl"></div>
          
          <img 
            src="/lovable-uploads/2087c64e-dd5e-47ca-8cc0-6989a38e6549.png" 
            alt="Developer working on laptop" 
            className="max-w-full max-h-full object-contain z-10
                     filter drop-shadow-[0_25px_25px_rgba(147,51,234,0.5)]"
          />
        </div>
        
        {/* Background ambient elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-purple-500/20 animate-pulse-subtle"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-pink-500/20 animate-pulse-subtle animate-delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-indigo-500/20 animate-pulse-subtle animate-delay-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDModel;
