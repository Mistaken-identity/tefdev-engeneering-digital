
import React from 'react';

const testimonials = [
  {
    quote: "TefDevs didn't just build a website; they built a foundation for our entire digital expansion. Their attention to architectural detail is unmatched.",
    author: "James Gitonga",
    role: "CEO, Digiduka Solutions"
  },
  {
    quote: "The quietest yet most impactful engineering team we've ever worked with. They delivered a complex system ahead of schedule with zero friction.",
    author: "Frank Sifuna",
    role: "CTO, Ministry Dept of Gender & Affirmative Actions"
  },
  {
    quote: "Absolute precision. They understood our brand luxury and translated it into a digital experience that actually converts.",
    author: "Shem Johns",
    role: "CEO, bigi.africa"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-32 bg-tef-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-16">The Network</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-tef-gold rounded-full opacity-60"></div>
                ))}
              </div>
              <p className="text-tef-silver italic font-light text-lg mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-1">{t.author}</h4>
              <p className="text-tef-gold/60 font-tech text-[10px] tracking-[0.2em] uppercase">{t.role}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale filter">
           <div className="font-tech text-xl text-white tracking-widest uppercase">Digiduka</div>
           <div className="font-tech text-xl text-white tracking-widest uppercase">Bigi Africa</div>
           <div className="font-tech text-xl text-white tracking-widest uppercase">Solaris</div>
           <div className="font-tech text-xl text-white tracking-widest uppercase">Vanguard</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
