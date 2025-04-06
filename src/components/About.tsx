
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref, isInView } = useInView();

  const stats = [
    { label: 'Years Experience', value: 'Fresher' },
    { label: 'Projects Completed', value: '4+' },
    { label: 'Technologies', value: '12+' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl opacity-60" />
      </div>

      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className={cn(
            "transition-all duration-1000 transform",
            isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          )}>
            <div className="aspect-square rounded-full p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 transition-all duration-500 group ring-4 ring-purple-500/40 ring-offset-2 ring-offset-black shadow-xl shadow-purple-500/10">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>


          </div>

          <div className={cn(
            "space-y-6 transition-all duration-1000 transform",
            isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          )}>
            <h3 className="text-2xl font-semibold gradient-text">Web Developer & Designer based in Noida</h3>

            <div className="space-y-4 text-muted-foreground">
              <p className="hover:text-foreground transition-colors duration-300">
                I'm a passionate web developer specializing in creating immersive digital experiences that combine cutting-edge technology with thoughtful design.
              </p>

              <p className="hover:text-foreground transition-colors duration-300">
                With expertise in frontend development, Backend Development and AI integration, I build websites that don't just meet requirements but exceed expectations by creating memorable user experiences.
              </p>

              <p className="hover:text-foreground transition-colors duration-300">
                My approach combines clean, efficient code with an eye for design and a focus on performance, accessibility, and user engagement.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "glass-card p-4 text-center transition-all duration-700 transform hover:shadow-lg hover:shadow-blue-500/10 group",
                    isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-xl md:text-2xl font-bold group-hover:gradient-text transition-colors duration-300">{stat.value}</div>
                  <div className="text-s text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
