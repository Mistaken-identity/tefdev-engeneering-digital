
import React from 'react';

const brands = [
  { name: "Bigi Africa", sector: "Retail & E-commerce" },
  { name: "Digiduka", sector: "Financial Solutions" },
  { name: "Thorne Ventures", sector: "Venture Capital" },
  { name: "Solaris Ops", sector: "Infrastructure" },
  { name: "Nexus Security", sector: "Cyber Intelligence" },
  { name: "Vanguard", sector: "Data Analytics" },
];

const Partners: React.FC = () => {
  return (
    <div className="py-24 bg-tef-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Strategic Alliances</h2>
        <h3 className="text-2xl font-tech text-white uppercase tracking-tight">TRUSTED BY INDUSTRY <span className="text-tef-gold">LEADERS.</span></h3>
      </div>

      {/* Marquee Effect (Simulation) */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-[gradient-move_20s_linear_infinite] whitespace-nowrap gap-12 lg:gap-24 items-center">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center group opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">
              <span className="text-white font-tech text-2xl lg:text-4xl tracking-[0.2em] uppercase mb-2 group-hover:text-tef-gold transition-colors">
                {brand.name}
              </span>
              <span className="text-tef-silver/20 text-[8px] font-tech tracking-widest uppercase group-hover:text-tef-gold/40 transition-colors">
                {brand.sector}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
           {brands.map((brand, idx) => (
             <div key={idx} className="p-8 border border-tef-gold/5 glass-card flex items-center justify-center text-center group hover:border-tef-gold/20 transition-all duration-300">
                <span className="text-white font-tech text-xs tracking-widest uppercase group-hover:text-tef-gold transition-colors">{brand.name}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
