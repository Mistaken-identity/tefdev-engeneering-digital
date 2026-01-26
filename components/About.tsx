
import React from 'react';
import { ShieldCheck, User, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-tef-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase">The Identity</h2>
            <h3 className="text-4xl md:text-5xl font-tech text-white leading-tight">
              A LEAN, ELITE <br />
              <span className="text-tef-gold">TECH UNIT.</span>
            </h3>
            <p className="text-tef-silver/70 text-lg font-light leading-relaxed max-w-xl">
              Founded by Antony Emong'oluk, TefDevs operates as a high-precision engineering collective. We don't believe in generic solutions or corporate overhead. We believe in performance, scalability, and code that lasts.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-tef-gold/20 rounded-lg">
                  <ShieldCheck className="text-tef-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-tech text-sm tracking-wider uppercase mb-1">Precision Over Noise</h4>
                  <p className="text-tef-silver/50 text-sm">Every line of code is intentional. Every architectural choice is strategic.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 border border-tef-gold/20 rounded-lg">
                  <Zap className="text-tef-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-tech text-sm tracking-wider uppercase mb-1">Impact-Focused</h4>
                  <p className="text-tef-silver/50 text-sm">We build systems that drive results, not just vanity metrics.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-tef-gold/10 rounded-2xl transform rotate-3"></div>
            <div className="relative glass-card border border-tef-gold/20 p-8 md:p-12 rounded-2xl gold-glow">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-tef-gold p-1">
                  <div className="w-full h-full rounded-full bg-tef-gold/10 flex items-center justify-center text-tef-gold">
                    <User size={40} />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-tech text-xl tracking-tight uppercase">Antony Emong'oluk</h4>
                  <p className="text-tef-gold text-xs tracking-[0.2em] uppercase font-tech">Founder & Lead Engineer</p>
                </div>
              </div>
              <blockquote className="text-tef-silver italic font-light text-lg mb-8 leading-relaxed">
                "Our clients don't come to us for templates. They come to us for weapons—digital tools that give them an unfair advantage in their industry."
              </blockquote>
              <div className="flex gap-4">
                <div className="w-8 h-[1px] bg-tef-gold mt-3"></div>
                <div className="text-xs text-tef-gold/60 font-tech tracking-widest uppercase">The TefDevs Philosophy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
