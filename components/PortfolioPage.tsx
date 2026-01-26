
import React from 'react';
import { ExternalLink, Layers, Terminal, Target, ArrowRight, Monitor, Cpu } from 'lucide-react';

interface PortfolioPageProps {
  setCurrentView: (view: string) => void;
}

const caseStudies = [
  {
    title: "Bigi Store",
    client: "Bigi Africa",
    category: "E-commerce Ecosystem",
    problem: "A high-growth retail brand was limited by their previous platform's speed and design inflexibility, leading to high bounce rates and lost mobile revenue.",
    solution: "We engineered a custom digital storefront using Next.js and GraphQL, optimized for lightning-fast loads and an immersive, premium user experience.",
    result: "Sub-second response times and a documented 35% increase in mobile conversion within the first 60 days.",
    tech: ["Next.js", "Tailwind CSS", "GraphQL", "Node.js"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    link: "https://bigi.africa"
  },
  {
    title: "Vanguard Analytics",
    client: "Thorne Ventures",
    category: "System Integration",
    problem: "Investment analysts were manually consolidating data from multiple volatile streams, resulting in delayed market response times.",
    solution: "TefDevs built an automated integration layer that syncs four separate financial APIs into a singular, real-time command center.",
    result: "Automation of 95% of data consolidation tasks, freeing senior analysts for high-level strategy.",
    tech: ["React", "PostgreSQL", "AWS Lambda", "Python"],
    img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
    link: null
  },
  {
    title: "Nexus Infrastructure",
    client: "Solaris Ops",
    category: "Business Automation",
    problem: "Legacy internal tools were failing under increased operational load, threatening supply chain stability.",
    solution: "A complete overhaul of the core infrastructure using a modular, containerized architecture that scales horizontally.",
    result: "Zero system downtime recorded during peak black-friday level volume spikes.",
    tech: ["Docker", "TypeScript", "Redis", "Nginx"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    link: null
  }
];

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tef-gold/[0.02] blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">View Our Work</h2>
          <h1 className="text-4xl md:text-6xl font-tech text-white mb-6 uppercase tracking-tighter">ELITE <span className="text-tef-gold">DEPLOYMENTS.</span></h1>
          <p className="text-tef-silver/40 font-light leading-relaxed">
            We don't just deliver projects; we deploy assets. Each case study represents a unique technical challenge solved with surgical precision.
          </p>
        </div>

        <div className="space-y-40">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''} relative group`}>
                <div className="absolute -inset-4 border border-tef-gold/5 transform rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative aspect-video overflow-hidden border border-tef-gold/20 rounded-lg">
                    <img 
                        src={study.img} 
                        alt={study.title} 
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tef-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex gap-3">
                        <div className="glass-card px-4 py-2 border border-tef-gold/30 rounded">
                           <span className="text-tef-gold font-tech text-[10px] tracking-widest uppercase">{study.category}</span>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 space-y-8">
                <div>
                   <h3 className="text-tef-gold text-xs tracking-[0.4em] uppercase font-tech mb-3">Partner: {study.client}</h3>
                   <h2 className="text-4xl font-tech text-white uppercase tracking-tight leading-none mb-4">{study.title}</h2>
                   <div className="h-[2px] w-12 bg-tef-gold opacity-50"></div>
                </div>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 p-2 bg-tef-gold/5 border border-tef-gold/10 rounded"><Monitor size={16} className="text-tef-gold" /></div>
                      <div>
                        <h4 className="text-white text-[10px] font-tech tracking-widest uppercase mb-1">The Problem</h4>
                        <p className="text-tef-silver/50 text-sm leading-relaxed font-light">{study.problem}</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 p-2 bg-tef-gold/5 border border-tef-gold/10 rounded"><Cpu size={16} className="text-tef-gold" /></div>
                      <div>
                        <h4 className="text-white text-[10px] font-tech tracking-widest uppercase mb-1">Our Solution</h4>
                        <p className="text-tef-silver/50 text-sm leading-relaxed font-light">{study.solution}</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 bg-tef-gold/5 border-l-2 border-tef-gold rounded-r">
                      <div className="flex-shrink-0 mt-1"><Target size={16} className="text-tef-gold" /></div>
                      <div>
                        <h4 className="text-tef-gold text-[10px] font-tech tracking-widest uppercase mb-1">The Result</h4>
                        <p className="text-white font-medium text-sm leading-relaxed">{study.result}</p>
                      </div>
                   </div>
                </div>

                <div className="pt-4">
                   <div className="flex flex-wrap gap-2 mb-10">
                      {study.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-tef-gold/10 border border-tef-gold/20 text-[9px] text-tef-gold/80 font-tech tracking-widest uppercase">{t}</span>
                      ))}
                   </div>
                   {study.link ? (
                     <a 
                      href={study.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-4 px-10 py-4 bg-tef-gold text-tef-black font-tech font-bold text-[10px] tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(201,162,77,0.4)] gold-glow"
                     >
                       Visit {study.link.replace('https://', '')} <ExternalLink size={14} />
                     </a>
                   ) : (
                     <button 
                        onClick={() => setCurrentView('contact')}
                        className="inline-flex items-center gap-3 px-10 py-4 border-2 border-tef-gold text-tef-gold font-tech text-[10px] tracking-widest uppercase hover:bg-tef-gold hover:text-tef-black transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.1)] font-bold"
                     >
                       Inspect Case Study <ArrowRight size={14} />
                     </button>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Contact CTA */}
        <div className="mt-40 pt-24 border-t border-white/5 text-center">
            <h3 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-10">Experience the Standard</h3>
            <h2 className="text-3xl md:text-5xl font-tech text-white uppercase mb-12 max-w-2xl mx-auto">READY TO DEPLOY YOUR OWN ASSET?</h2>
            <button 
                onClick={() => setCurrentView('contact')}
                className="group relative px-12 py-6 bg-tef-black border-2 border-tef-gold text-tef-gold font-tech font-bold tracking-widest uppercase overflow-hidden hover:text-tef-black transition-all duration-500"
            >
                <span className="relative z-10 flex items-center gap-3">
                    Start a Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-tef-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
