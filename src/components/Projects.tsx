import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import {
  ExternalLink, Github,
  Layers, Code, Database,
  Globe, Server, FileCode,
  Atom,
  Brain,
  CloudSun,
  FlaskConical,
  LayoutTemplate,
  PanelTopClose,
  Split,
  Wind
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const projects = [
  {
    title: "Wanderlust: Travel Planner",
    description: "A travel planning app that helps users create itineraries, find attractions, and share experiences",
    image: "/Wanderlust.png",
    technologies: [
      { name: "MongoDB", icon: <Database size={16} className="text-blue-400" /> },
      { name: "Express", icon: <Split size={16} className="text-green-400" /> },
      { name: "Node.js", icon: <Server size={16} className="text-green-500" /> },
      { name: "EJS", icon: <FileCode size={16} className="text-red-400" /> },
      { name: "Bootstrap", icon: <LayoutTemplate size={16} className="text-red-400" /> },
    ],
    liveUrl: "https://wanderlust-webs-84qr.onrender.com/listings",
    repoUrl: "https://github.com/Pratham22R/wanderlust_website.git"
  },
  {
    title: "IntriAi",
    description: "An AI-powered interior redesign assistant that transforms room photos into stylish interiors using generative AI.",
    image: "/Screenshot 2025-07-05 151104.png", // make sure you add this image in your public folder
    technologies: [
      { name: "Next.js", icon: <Code size={16} className="text-white" /> },
      { name: "TailwindCSS", icon: <Wind size={16} className="text-cyan-400" /> },
      { name: "Firebase", icon: <Database size={16} className="text-orange-400" /> },
      { name: "Replicate API", icon: <Brain size={16} className="text-green-500" /> }
    ],
    liveUrl: "https://intriai.vercel.app/",
    repoUrl: "https://github.com/Pratham22R/Ai-Interior-design" // replace with actual repo if available
  },
  {
    title: "HealthWise Prediction System",
    description: "A health prediction system that uses machine learning to predict diseases based on user input",
    image: "/Healthwise.png",
    technologies: [
      { name: "Reactjs", icon: <Atom size={16} className="text-white" /> },
      { name: "TailwindCSS", icon: <Wind size={16} className="text-cyan-400" /> },
      { name: "Custom ML model", icon: <Brain size={16} className="text-green-500" /> },
      { name: "Flask", icon: <FlaskConical size={16} className="text-emerald-500" /> }
    ],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Dine-in Menu Mnagement System",
    description: "A web application for managing restaurant menus, orders, and customer interactions",
    image: "/dinein.png",
    technologies: [
      { name: "React", icon: <Atom size={16} className="text-white" /> },
      { name: "ShadCN UI", icon: <PanelTopClose size={16} className="text-purple-400" /> },
      { name: "Supabase", icon: <Database size={16} className="text-green-400" /> },
    ],
    liveUrl: "#",
    repoUrl: "#"
  }
];


const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "group glass-card overflow-hidden transition-all duration-700 transform hover:shadow-xl hover:shadow-blue-500/20",
        isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden border-b border-white/10 rounded-t-2xl">
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out overflow-hidden rounded-t-2xl"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>

        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/95 to-transparent flex items-end p-6 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-2 rounded-full text-xs font-medium bg-background/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 border border-white/5 flex items-center gap-2"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            variant="ghost"
            className="flex items-center gap-2 group hover:bg-blue-500/30 hover:text-white transition-all duration-300 border border-transparent hover:border-blue-400/30"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover"
            >
              <ExternalLink className="w-4 h-4 group-hover:text-blue-300" />
              <span>Live Demo</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2 group hover:bg-purple-500/30 hover:text-white transition-all duration-300 border border-transparent hover:border-purple-400/30"
            asChild
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover"
            >
              <Github className="w-4 h-4 group-hover:text-purple-300" />
              <span>Source Code</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl opacity-60" />
      </div>

      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p
            ref={ref}
            className={cn(
              "mt-4 text-muted-foreground max-w-xl mx-auto transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            A collection of my recent work showcasing web development and 3D interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2 px-6 py-6 h-auto rounded-full text-sm font-medium border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 btn-hover btn-shimmer"
          >
            <a
              href="https://github.com/Pratham22R"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              <span>See More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
