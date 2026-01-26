
import React from 'react';
import { ShieldCheck, Cpu, Zap, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Founder-Level Attention",
    desc: "Your project is led and touched by the founder, not passed to juniors."
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Clean, Scalable Code",
    desc: "We build for your 10x growth, not just for your today."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance-First Mindset",
    desc: "Speed is a feature. We optimize every millisecond of the user journey."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Long-Term Thinking",
    desc: "We provide strategic partnership that evolves with the market."
  }
];

const WhyTefDevs: React.FC = () => {
  return (
    <div className="py-32 bg-[#080808] border-y border-tef-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="w-full h-full border border-tef-gold/20 p-1">
                <img 
                  src="https://picsum.photos/600/600?grayscale&random=99" 
                  alt="Tech" 
                  className="w-full grayscale opacity-50"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 glass-card p-10 border border-tef-gold/30 gold-glow hidden md:block">
                <span className="block text-4xl font-tech text-tef-gold mb-2">99.9%</span>
                <span className="text-xs font-tech text-white tracking-widest uppercase">System Uptime</span>
             </div>
          </div>
          
          <div>
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Our Advantage</h2>
            <h3 className="text-4xl font-tech text-white mb-12">PRECISION OVER <span className="text-tef-gold">EVERYTHING.</span></h3>
            
            <div className="space-y-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 border border-tef-gold/20 flex items-center justify-center text-tef-gold group-hover:bg-tef-gold group-hover:text-tef-black transition-all">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-2 group-hover:text-tef-gold transition-colors">{reason.title}</h4>
                    <p className="text-tef-silver/40 text-sm font-light leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTefDevs;
