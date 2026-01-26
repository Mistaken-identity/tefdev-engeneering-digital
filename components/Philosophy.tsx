
import React from 'react';
import { Terminal, Box, Activity, Maximize, CheckCircle2 } from 'lucide-react';

const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Code Integrity",
      desc: "We don't just write code; we craft digital architecture. Every line is audited for security, clarity, and intent. No debt, no hacks, just pure engineering."
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Hyper-Scalability",
      desc: "Growth isn't an afterthought. We build systems ready for 100x traffic spikes from Day 1 using cloud-native, decoupled architectures."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Performance First",
      desc: "Latency is a failure. We optimize for millisecond response times across global infrastructure, ensuring a frictionless user journey."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Modular Logic",
      desc: "Decoupled by design. Our modular approach allows for rapid evolution and painless maintenance without compromising core stability."
    }
  ];

  return (
    <div className="py-32 bg-tef-black border-t border-tef-gold/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase">The Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-tech text-white leading-tight">
              ENGINEERING <br />
              <span className="text-tef-gold">MANIFESTO.</span>
            </h3>
            <p className="text-tef-silver/40 font-light leading-relaxed">
              We believe software is more than a tool—it's a competitive advantage. Our methodology is rooted in the pursuit of technical perfection and architectural dominance.
            </p>
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 text-tef-gold border-b border-tef-gold/20 pb-2">
                <span className="font-tech text-xs tracking-widest uppercase">The Zero-Debt Standard</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-tef-gold/10 border border-tef-gold/10">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-tef-black p-10 group hover:bg-tef-gold/5 transition-colors duration-500"
              >
                <div className="text-tef-gold mb-6 transform group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-4 group-hover:text-tef-gold transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-tef-silver/50 text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-3 h-3 text-tef-gold" />
                  <span className="text-[10px] text-tef-gold font-tech tracking-widest uppercase">Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
