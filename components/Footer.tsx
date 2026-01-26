
import React from 'react';
import { Github, Twitter, Linkedin, ArrowUp, Mail, Phone, Globe } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Web Development', id: 'services' },
    { name: 'System Integrations', id: 'services' },
    { name: 'E-commerce Solutions', id: 'services' },
    { name: 'Business Automation', id: 'services' },
    { name: 'Support & Maintenance', id: 'services' },
  ];

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center group mb-8">
              <div className="w-10 h-10 border-2 border-tef-gold flex items-center justify-center mr-3">
                <span className="text-tef-gold font-tech font-bold">T</span>
              </div>
              <span className="font-tech text-2xl font-bold tracking-widest text-white uppercase">TEF<span className="text-tef-gold">DEVS</span></span>
            </div>
            <p className="text-tef-silver/30 text-sm font-light leading-relaxed mb-8">
              TefDevs (Teflon Developers) is an elite tech solutions company specializing in precision digital architecture. We deliver scalable, high-performance systems for modern enterprises.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-tef-silver/40 hover:text-tef-gold transition-colors"><Github size={20} /></a>
              <a href="#" className="text-tef-silver/40 hover:text-tef-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-tef-silver/40 hover:text-tef-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-tech text-[10px] tracking-[0.4em] uppercase mb-8">Capabilities</h4>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setCurrentView(service.id)} 
                    className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-tech text-[10px] tracking-[0.4em] uppercase mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentView('about')} className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentView('portfolio')} className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors">Portfolio</button></li>
              <li><button onClick={() => setCurrentView('pricing')} className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentView('process')} className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors">Process</button></li>
              <li><button onClick={() => setCurrentView('contact')} className="text-tef-silver/40 text-xs tracking-widest uppercase hover:text-tef-gold transition-colors">Elite Portal</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-tech text-[10px] tracking-[0.4em] uppercase mb-8">HQ Contact</h4>
            <ul className="space-y-4 text-xs tracking-widest text-tef-silver/40 font-tech">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-tef-gold" />
                <span>+254 769 259 151</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-tef-gold" />
                <span>antonyteflon10@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={14} className="text-tef-gold" />
                <span className="lowercase">tefdev-main-portfolio.vercel.app</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-tef-silver/20 text-[10px] font-tech tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} TefDevs Engineering Collective. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-tef-silver/40 hover:text-tef-gold transition-colors"
          >
            <span className="text-[10px] font-tech tracking-[0.3em] uppercase">Return to Zero</span>
            <div className="w-8 h-8 border border-tef-gold/20 flex items-center justify-center group-hover:border-tef-gold transition-colors">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
