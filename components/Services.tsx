
import React from 'react';
import { Code2, Layers, ShoppingBag, Database, Cpu, Palette } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX & Brand Design",
    desc: "Luxury-focused interfaces designed for high-end user experiences."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Platforms",
    desc: "Scalable, high-performance web applications built on modern stacks."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full-Stack Systems",
    desc: "Complex architectures designed for data-heavy operations."
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce Solutions",
    desc: "Conversion-optimized digital storefronts for premium brands."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "API & Backend",
    desc: "Robust, secure, and lightning-fast server-side engineering."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Automation & AI",
    desc: "Custom intelligent workflows that eliminate operational friction."
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">The Toolkit</h2>
          <h3 className="text-4xl md:text-5xl font-tech text-white mb-6">SERVICES.</h3>
          <div className="w-24 h-[2px] bg-tef-gold mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-card border border-tef-gold/10 p-10 rounded-xl transition-all duration-500 hover:border-tef-gold/40 hover:translate-y-[-10px] gold-glow-hover"
            >
              <div className="text-tef-gold mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h4 className="text-white font-tech text-lg mb-4 tracking-tight group-hover:text-tef-gold transition-colors">{service.title}</h4>
              <p className="text-tef-silver/40 text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
