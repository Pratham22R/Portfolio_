import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Tech = {
  name: string;
  logo: string;
  color: string;
  glow: string;
};

const techStack: Tech[] = [
  {
    name: 'React',
    logo: '/logos/react-svgrepo-com.svg',
    color: 'from-blue-400 to-cyan-400',
    glow: 'shadow-blue-500/20',
  },
  {
    name: 'Node.js',
    logo: '/logos/node2-svgrepo-com.svg',
    color: 'from-green-400 to-emerald-400',
    glow: 'shadow-green-500/20',
  },
  {
    name: 'MongoDB',
    logo: '/logos/mongodb-svgrepo-com.svg',
    color: 'from-green-500 to-teal-400',
    glow: 'shadow-teal-500/20',
  },
  {
    name: 'Tailwind CSS',
    logo: '/logos/tailwind-svgrepo-com.svg',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20',
  },
];

const TechStackGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-[300px] p-4 sm:p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
        {techStack.map((tech, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={tech.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                'relative group w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden cursor-pointer',
                'flex flex-col items-center justify-center glass-card transition-all duration-500',
                tech.glow,
                isHovered
                  ? 'scale-110 z-10'
                  : isOtherHovered
                  ? 'scale-90 opacity-70'
                  : 'scale-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {/* Logo */}
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              {/* Tech Name */}
              <p
                className={cn(
                  'absolute bottom-3 text-xs md:text-sm font-semibold text-white transition-all duration-300',
                  isHovered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                )}
              >
                {tech.name}
              </p>

              {/* Soft Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackGrid;
