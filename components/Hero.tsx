
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tef-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tef-gold/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        {/* Particle effect simulation via grid and dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C9A24D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-tef-gold/30 bg-tef-gold/5 rounded-full">
          <p className="text-tef-gold text-[10px] md:text-xs tracking-[0.3em] font-tech uppercase">Built in private. Delivered with impact.</p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-tech font-bold text-white mb-8 tracking-tighter leading-tight max-w-5xl mx-auto">
          ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-tef-gold to-white">DIGITAL PRECISION</span>
        </h1>
        
        <p className="text-lg md:text-xl text-tef-silver/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Custom web platforms, elite systems, and automation architecture built for aggressive growth and silent dominance.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setCurrentView('contact')}
            className="group relative px-10 py-5 bg-tef-gold text-tef-black font-tech font-bold tracking-widest uppercase overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Start a Project <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
          <button 
            onClick={() => setCurrentView('portfolio')}
            className="px-10 py-5 border border-tef-gold/40 text-white font-tech tracking-widest uppercase hover:border-tef-gold hover:text-tef-gold transition-all duration-300"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-tef-gold/0 via-tef-gold to-tef-gold/0 opacity-50"></div>
        <p className="mt-4 text-[10px] tracking-[0.5em] text-tef-gold/40 uppercase font-tech">Scroll</p>
      </div>
    </div>
  );
};

export default Hero;
