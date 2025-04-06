import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Code2, Database, Github,
  Figma, FileCode, ServerCog,
  Braces, Palette, Globe,
  LineChart, Blocks, Layers,
  Monitor, LayoutGrid, ArrowRightLeft,
  Atom, Code, Coffee, CloudSun,
  Network, GitBranch, Brush,
  Cloud, Component, FileType2,
  Flame, LayoutTemplate,
  TerminalSquare, TreePine,
  Wind
} from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const SkillCategory = ({ title, skills, delay = 0 }: { title: string; skills: Skill[]; delay?: number }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card p-4 md:p-6 lg:p-8 transition-all duration-1000 transform hover:shadow-xl hover:shadow-purple-500/20 group",
        isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:gradient-text transition-colors duration-300">{title}</h3>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill, index) => (
          <span
            key={skill.name}
            className="px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium bg-background/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 border border-white/5 flex items-center gap-1 md:gap-2"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, isInView } = useInView();
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 14 : 16;

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FileCode size={iconSize} className="text-orange-500" /> },
        { name: "CSS", icon: <Brush size={iconSize} className="text-blue-500" /> },
        { name: "JavaScript", icon: <FileCode size={iconSize} className="text-yellow-500" /> },
        { name: "TypeScript", icon: <FileType2 size={iconSize} className="text-blue-600" /> },
        { name: "React", icon: <Atom size={iconSize} className="text-cyan-500" /> },
        { name: "TailwindCSS", icon: <Wind size={iconSize} className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <LayoutTemplate size={iconSize} className="text-purple-500" /> },
        { name: "Material UI", icon: <Component size={iconSize} className="text-pink-500" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <TreePine size={iconSize} className="text-green-500" /> },
        { name: "Express", icon: <Network size={iconSize} className="text-gray-300" /> },
        { name: "Firebase", icon: <Flame size={iconSize} className="text-yellow-500" /> },
        { name: "Supabase", icon: <Database size={iconSize} className="text-emerald-500" /> },
        { name: "REST API", icon: <Cloud size={iconSize} className="text-blue-400" /> },
        { name: "Flask", icon: <Network size={iconSize} className="text-gray-300" /> },
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: <GitBranch size={iconSize} className="text-orange-500" /> },
        { name: "GitHub", icon: <Github size={iconSize} className="text-white" /> },
        { name: "VS Code", icon: <TerminalSquare size={iconSize} className="text-blue-500" /> },
        { name: "Figma", icon: <Figma size={iconSize} className="text-purple-400" /> },
        { name: "Render", icon: <ServerCog size={iconSize} className="text-gray-200" /> },
        { name: "Netlify", icon: <CloudSun size={iconSize} className="text-teal-500" /> }
      ]
    },
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Java", icon: <Coffee size={iconSize} className="text-red-500" /> },
        { name: "Python", icon: <Code2 size={iconSize} className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FileCode size={iconSize} className="text-yellow-500" /> },
        { name: "React", icon: <Atom size={iconSize} className="text-blue-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 md:w-80 md:h-80 rounded-full bg-purple-600/5 blur-3xl opacity-60" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 md:w-80 md:h-80 rounded-full bg-indigo-600/5 blur-3xl opacity-60" />
      </div>

      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Skills & Technologies</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full" />
        </div>

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                delay={index * 150}
              />
            ))}
          </div>

          <div className="mt-10 md:mt-16 glass-card p-6 md:p-8 text-center hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 gradient-text">My Development Philosophy</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: "Performance First", description: "Optimizing for speed and responsiveness" },
                { title: "Clean Code", description: "Maintainable and well-structured solutions" },
                { title: "Responsive Design", description: "Perfect experience on all devices" },
                { title: "User-Centric", description: "Focusing on usability and accessibility" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "transition-all duration-1000 transform hover:scale-105 group",
                    isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="font-semibold mb-1 md:mb-2 text-sm md:text-base group-hover:gradient-text transition-colors duration-300">{item.title}</div>
                  <div className="text-xs md:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
