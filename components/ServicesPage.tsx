
import React from 'react';
import { Globe, Cpu, ShoppingCart, Settings, ShieldCheck, Palette, ArrowRight } from 'lucide-react';

const servicesDetail = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX & Brand Design",
    desc: "Luxury-focused interfaces and comprehensive design systems engineered for high-end digital presence.",
    problem: "Generic branding and poor user flows that fail to resonate with premium audiences.",
    tech: ["Figma", "Adobe CC", "Prototyping", "Design Ops"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Platforms",
    desc: "Bespoke, high-performance web applications built on modern stacks that prioritize speed and security.",
    problem: "Slow, legacy websites that provide a friction-heavy user experience and low conversion.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "System Integrations",
    desc: "Seamlessly connecting fragmented software tools into a unified, high-performance digital ecosystem.",
    problem: "Data silos and manual workflows that create operational bottlenecks and scaling limits.",
    tech: ["Node.js", "Custom APIs", "Middleware", "AWS"]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    desc: "Conversion-optimized storefronts designed for premium retail brands and high-volume operations.",
    problem: "Standard e-commerce templates that lack the flexibility to scale or match luxury brand standards.",
    tech: ["Hydrogen", "Shopify", "GraphQL", "Stripe"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Automation & AI",
    desc: "Custom intelligent workflows and AI-driven internal tools that eliminate manual operational friction.",
    problem: "High labor costs on repetitive tasks that prevent team focus on high-value strategic growth.",
    tech: ["Python", "OpenAI", "FastAPI", "Docker"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Sustained Evolution",
    desc: "Proactive engineering support, security auditing, and continuous performance optimization.",
    problem: "Technical debt and security vulnerabilities that accumulate when digital assets aren't maintained.",
    tech: ["DevOps", "CI/CD", "Cyber Security", "SLA"]
  }
];

const ServicesPage: React.FC = () => {
  const whatsappNumber = "254769259151";
  const whatsappMessage = encodeURIComponent("Hello TefDevs, I'm interested in a custom architectural consultation for my project.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tef-gold/[0.03] blur-[150px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-tef-gold/[0.03] blur-[150px] translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">The Capabilities</h2>
          <h1 className="text-4xl md:text-6xl font-tech text-white mb-6 uppercase tracking-tighter">ELITE <span className="text-tef-gold">SOLUTIONS.</span></h1>
          <p className="text-tef-silver/40 font-light leading-relaxed">
            We provide precision-engineered services designed to solve high-stakes business challenges and drive digital dominance through technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesDetail.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-card border border-tef-gold/10 p-10 rounded-2xl transition-all duration-500 hover:border-tef-gold/40 hover:-translate-y-2 gold-glow-hover flex flex-col"
            >
              <div className="text-tef-gold mb-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              
              <h3 className="text-white font-tech text-xl mb-4 tracking-tight uppercase group-hover:text-tef-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-tef-silver/70 text-sm font-light leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                <div>
                   <h4 className="text-tef-gold/40 text-[9px] font-tech tracking-[0.3em] uppercase mb-2">Technical Problem</h4>
                   <p className="text-tef-silver/30 text-xs italic font-light leading-snug">
                     "{service.problem}"
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-tef-gold/5 border border-tef-gold/10 text-[8px] text-tef-gold/60 font-tech tracking-widest uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello TefDevs, I'm interested in inquiring about ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-tech text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all hover:text-tef-gold cursor-pointer"
                >
                  Inquire Service <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-32 p-16 border border-tef-gold/10 text-center glass-card gold-glow">
           <h3 className="text-2xl font-tech text-white uppercase mb-6">Need a Specialized Architecture?</h3>
           <p className="text-tef-silver/40 max-w-2xl mx-auto font-light leading-relaxed mb-10">
             If your technical challenge falls outside these standard categories, we offer custom architectural consulting to map out a bespoke mission.
           </p>
           <a 
             href={whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-12 py-5 bg-tef-gold text-tef-black font-tech font-bold tracking-[0.2em] uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(201,162,77,0.3)]"
           >
             Start Custom Consultation
           </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
