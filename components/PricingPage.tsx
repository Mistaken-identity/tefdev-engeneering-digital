
import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface PricingPageProps {
  setCurrentView: (view: string) => void;
}

const tiers = [
  {
    name: "Starter Website",
    price: "KES 18,000",
    desc: "A precision-built landing page or small brochure site for emerging brands.",
    features: [
      "Custom UI Design",
      "Mobile Optimization",
      "Contact API Integration",
      "SEO Architecture v1",
      "Standard Security SSL"
    ]
  },
  {
    name: "Business Website",
    price: "KES 40,000",
    desc: "A multi-page dynamic platform built for professional lead generation.",
    features: [
      "Up to 10 Engineered Pages",
      "Proprietary CMS Integration",
      "Advanced SEO Dominance",
      "Performance Analytics",
      "Priority Engineering Support"
    ],
    featured: true
  },
  {
    name: "E-commerce Solutions",
    price: "KES 60,000",
    desc: "High-performance digital storefront designed for extreme conversion.",
    features: [
      "Headless Catalog Engine",
      "Secure Payment Matrix",
      "Inventory Sync Logic",
      "Custom Checkout UX",
      "Sales Acceleration Tools"
    ]
  }
];

const PricingPage: React.FC<PricingPageProps> = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Investment Tiers</h2>
          <h1 className="text-4xl md:text-6xl font-tech text-white mb-6 uppercase tracking-tighter">PRICING <span className="text-tef-gold">GUIDE.</span></h1>
          <p className="text-tef-silver/40 font-light leading-relaxed">
            Transparent investment for elite engineering. Our pricing reflects the precision and business value we deliver. Final quotes depend on technical complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative flex flex-col p-10 border ${tier.featured ? 'border-tef-gold gold-glow' : 'border-tef-gold/10'} glass-card rounded-xl hover:border-tef-gold/40 transition-all duration-500`}>
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tef-gold px-4 py-1 text-[10px] font-tech font-bold text-tef-black tracking-widest uppercase whitespace-nowrap">
                  Elite Standard
                </div>
              )}
              <h3 className="text-xl font-tech text-white mb-2 uppercase tracking-wide">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-tech text-tef-gold">from</span>
                <span className="text-4xl font-tech text-white">{tier.price}</span>
              </div>
              <p className="text-tef-silver/40 text-sm font-light leading-relaxed mb-8 h-12">
                {tier.desc}
              </p>
              
              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-tef-gold" />
                    <span className="text-tef-silver/70 text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentView('contact')}
                className={`w-full py-4 font-tech text-xs tracking-[0.2em] uppercase transition-all duration-300 ${tier.featured ? 'bg-tef-gold text-tef-black font-bold hover:bg-white' : 'border border-tef-gold/40 text-white hover:border-tef-gold'}`}
              >
                Initiate Project
              </button>
            </div>
          ))}
        </div>

        {/* Specialized Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="p-10 border border-tef-gold/10 glass-card rounded-xl group hover:border-tef-gold/30 transition-all">
             <Zap className="text-tef-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xl font-tech text-white mb-4 uppercase">Automation & AI Tools</h3>
             <p className="text-tef-silver/40 font-light leading-relaxed mb-8">
               We architect custom internal tools and AI workflows designed to eliminate human friction and operational bottlenecks. 
             </p>
             <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-tech text-white uppercase tracking-widest">Custom Quotes Only</span>
             </div>
             <button 
                onClick={() => setCurrentView('contact')}
                className="flex items-center gap-2 text-tef-gold font-tech text-[10px] tracking-widest uppercase group"
             >
               Request Discovery Phase <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
          
          <div className="p-10 border border-tef-gold/10 glass-card rounded-xl group hover:border-tef-gold/30 transition-all">
             <ShieldCheck className="text-tef-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xl font-tech text-white mb-4 uppercase">Maintenance & Support</h3>
             <p className="text-tef-silver/40 font-light leading-relaxed mb-8">
               Proactive security, weekly updates, and real-time performance monitoring for mission-critical systems. 
             </p>
             <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-tech text-white uppercase tracking-widest">Monthly Retainers</span>
             </div>
             <button 
                onClick={() => setCurrentView('contact')}
                className="flex items-center gap-2 text-tef-gold font-tech text-[10px] tracking-widest uppercase group"
             >
               View Support Protocols <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>

        {/* Confidence Section */}
        <div className="p-16 border-y border-tef-gold/10 text-center">
            <h3 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-12">Why Invest in TefDevs?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <h4 className="text-white font-tech text-xs tracking-widest uppercase">Asset vs Liability</h4>
                    <p className="text-tef-silver/40 text-xs font-light">We build digital assets that generate ROI, not technical liabilities that cost money.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-tech text-xs tracking-widest uppercase">Zero Debt Policy</h4>
                    <p className="text-tef-silver/40 text-xs font-light">Clean, modular code that scales with you, eliminating the need for expensive rewrites.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-tech text-xs tracking-widest uppercase">Elite Reliability</h4>
                    <p className="text-tef-silver/40 text-xs font-light">Direct access to lead engineers ensures your project remains a priority throughout its lifecycle.</p>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-tef-silver/20 text-[9px] font-tech tracking-[0.4em] uppercase max-w-2xl mx-auto leading-loose">
            All prices are starting-from estimates. Project scope, external integrations, and specific SLA requirements will define the final technical proposal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
