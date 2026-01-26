
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  setCurrentView: (view: string) => void;
}

const projects = [
  {
    title: "Bigi Store",
    stack: "Next.js • Tailwind • GraphQL",
    desc: "A high-performance e-commerce ecosystem designed for rapid retail scaling and high-volume transaction management.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    link: "https://bigi.africa"
  },
  {
    title: "Vanguard Platform",
    stack: "React • Node.js • AWS",
    desc: "A custom financial automation system for high-net-worth investment management and real-time reporting.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
    link: null
  },
  {
    title: "Nexus Core",
    stack: "TypeScript • Python • Docker",
    desc: "Internal infrastructure management tool for a private security firm, handling encrypted data streams.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    link: null
  },
  {
    title: "Lumina Intelligence",
    stack: "Python • TensorFlow • FastAPI",
    desc: "Custom intelligent workflows and AI agents that eliminate operational friction in research environments.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: null
  }
];

const Projects: React.FC<ProjectsProps> = ({ setCurrentView }) => {
  return (
    <div className="py-32 bg-tef-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-tech text-white">SELECTED <span className="text-tef-gold">WORK.</span></h3>
          </div>
          <button 
            onClick={() => setCurrentView('portfolio')}
            className="flex items-center text-tef-gold font-tech text-xs tracking-widest uppercase hover:gap-4 transition-all group"
          >
            See All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border border-tef-gold/10 aspect-video bg-[#111]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-40 group-hover:opacity-70" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-tef-black via-tef-black/60 to-transparent p-10 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-tef-gold font-tech text-[10px] tracking-[0.3em] uppercase mb-2">{project.stack}</p>
                  <h4 className="text-white font-tech text-2xl mb-4 uppercase">{project.title}</h4>
                  <p className="text-tef-silver/60 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-tef-black font-tech text-[10px] tracking-widest uppercase py-3 px-6 bg-tef-gold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.4)] font-bold"
                      >
                        Visit {project.link.replace('https://', '')} <ExternalLink className="ml-2 w-3 h-3" />
                      </a>
                    ) : (
                      <button 
                        onClick={() => setCurrentView('portfolio')}
                        className="inline-flex items-center text-tef-gold font-tech text-[10px] tracking-widest uppercase py-3 px-6 border-2 border-tef-gold bg-tef-gold/5 hover:bg-tef-gold hover:text-tef-black transition-all duration-300 shadow-[0_0_10px_rgba(201,162,77,0.2)] font-bold"
                      >
                        Inspect Case Study <ArrowRight className="ml-2 w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
