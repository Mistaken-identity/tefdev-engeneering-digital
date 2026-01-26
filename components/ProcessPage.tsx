
import React from 'react';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

interface ProcessPageProps {
  setCurrentView: (view: string) => void;
}

const steps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    icon: <Search className="w-8 h-8" />,
    desc: "We begin with a deep dive into your business logic, market positioning, and core objectives. This phase is about alignment and defining the success metrics for the mission."
  },
  {
    id: "02",
    title: "Planning & Proposal",
    icon: <PenTool className="w-8 h-8" />,
    desc: "A detailed technical blueprint is architected. We define the tech stack, data structures, and project roadmap. No development begins without a solid strategic foundation."
  },
  {
    id: "03",
    title: "Design & Development",
    icon: <Code className="w-8 h-8" />,
    desc: "Using agile sprints, we engineer the solution with a focus on modularity and performance. You get transparent progress updates and access to staging environments."
  },
  {
    id: "04",
    title: "Testing & Review",
    icon: <CheckCircle className="w-8 h-8" />,
    desc: "Rigorous quality assurance, security audits, and load testing. We ensure the system is bulletproof and optimized for high-traffic environments before launch."
  },
  {
    id: "05",
    title: "Launch & Support",
    icon: <Rocket className="w-8 h-8" />,
    desc: "Deployment across global infrastructure. Post-launch, we provide continuous monitoring and optimization to ensure long-term stability and business growth."
  }
];

const ProcessPage: React.FC<ProcessPageProps> = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">The Methodology</h2>
          <h1 className="text-4xl md:text-6xl font-tech text-white mb-6 uppercase tracking-tighter">HOW WE <span className="text-tef-gold">WORK.</span></h1>
          <p className="text-tef-silver/40 max-w-2xl mx-auto font-light leading-relaxed">
            Our process is built on clarity, accountability, and engineering excellence. We minimize noise and maximize execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="absolute left-10 top-24 w-[1px] h-20 bg-gradient-to-b from-tef-gold/20 to-transparent"></div>
              )}
              <div className="flex flex-col md:flex-row gap-8 items-start glass-card p-10 border border-tef-gold/10 group-hover:border-tef-gold/30 transition-all duration-500">
                <div className="flex-shrink-0 w-20 h-20 border border-tef-gold/20 flex items-center justify-center text-tef-gold group-hover:bg-tef-gold group-hover:text-tef-black transition-all">
                   {step.icon}
                </div>
                <div>
                   <div className="flex items-center gap-4 mb-3">
                      <span className="text-tef-gold font-tech text-xs tracking-widest uppercase">{step.id}</span>
                      <div className="h-[1px] w-8 bg-tef-gold/20"></div>
                   </div>
                   <h3 className="text-2xl font-tech text-white uppercase mb-4">{step.title}</h3>
                   <p className="text-tef-silver/50 font-light leading-relaxed">
                      {step.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 border border-tef-gold/10 text-center glass-card">
           <h3 className="text-2xl font-tech text-white uppercase mb-6">Built for Partners, Not Just Clients</h3>
           <p className="text-tef-silver/40 max-w-2xl mx-auto font-light leading-relaxed mb-10">
             We view every project as a long-term technical partnership. Our goal is to grow with you, evolving your digital assets as your business scales.
           </p>
           <button 
              onClick={() => setCurrentView('contact')}
              className="px-12 py-4 bg-tef-gold text-tef-black font-tech font-bold tracking-[0.2em] uppercase hover:bg-white transition-all"
           >
             Start Your Journey
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
