
import { Github, Linkedin, Mail, Twitter, MessagesSquare, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
};

const SocialLinks = ({ className, iconSize = 20, vertical = false }: SocialLinksProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Pratham22R',
      icon: <Github size={iconSize} />,
      color: 'hover:text-[#333] dark:hover:text-white group-hover:scale-110 transition-all duration-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pratham-raghuvanshi-9b782127b',
      icon: <Linkedin size={iconSize} />,
      color: 'hover:text-[#0A66C2] group-hover:scale-110 transition-all duration-300'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/pratham_22_raghuvanshi/',
      icon: <Instagram size={iconSize} />,
      color: 'hover:text-[#E1306C] group-hover:scale-110 transition-all duration-300'
    },
    {
      name: 'Email',
      href: 'mailto:pratham2262003@gmail.com',
      icon: <Mail size={iconSize} />,
      color: 'hover:text-[#EA4335] group-hover:scale-110 transition-all duration-300'
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: <MessagesSquare size={iconSize} />,
      color: 'hover:text-[#34D399] group-hover:scale-110 transition-all duration-300'
    }
  ];

  return (
    <div className={cn(
      vertical ? 'flex flex-col space-y-4' : 'flex space-x-4',
      className
    )}>
      {socialLinks.map((link, index) => (

        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={cn('group relative transition-all duration-300 p-3 glass-card flex items-center justify-center',
            'hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10',
            link.color,
            hoveredIndex === index ? 'scale-110 shadow-lg' : '')}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >

          {link.icon}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.name}
          </span>
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
