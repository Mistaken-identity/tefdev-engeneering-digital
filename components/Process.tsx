
import React from 'react';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Understanding project DNA and defining success.' },
  { id: '02', title: 'Architecture', desc: 'Designing the structural blueprint for scale.' },
  { id: '03', title: 'Build', desc: 'Sprints focused on code integrity and performance.' },
  { id: '04', title: 'Test', desc: 'Rigorous pressure testing and security auditing.' },
  { id: '05', title: 'Deploy', desc: 'Precision launch across global infrastructure.' },
  { id: '06', title: 'Support', desc: 'Long-term evolution and continuous optimization.' },
];

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
        <div>
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">The Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-tech text-white">REFINED <br /> WORKFLOW.</h3>
        </div>
        <p className="text-tef-silver/40 max-w-sm text-sm font-light">
          We follow a disciplined timeline from initial vision to final impact, ensuring precision at every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative">
        {/* Decorative connecting line for desktop */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-tef-gold/0 via-tef-gold/20 to-tef-gold/0 z-0"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-tef-black border border-tef-gold/30 rounded-full flex items-center justify-center text-tef-gold font-tech text-xs group-hover:bg-tef-gold group-hover:text-tef-black transition-all duration-300">
                {step.id}
              </div>
              <div className="h-[1px] flex-grow bg-tef-gold/10 group-hover:bg-tef-gold/30 transition-all"></div>
            </div>
            <h4 className="text-white font-tech text-xl mb-4 tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300">{step.title}</h4>
            <p className="text-tef-silver/40 text-sm font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
