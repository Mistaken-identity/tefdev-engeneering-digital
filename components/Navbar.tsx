
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  scrolled: boolean;
  setCurrentView: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, scrolled, setCurrentView, currentView }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || currentView !== 'home' ? 'bg-tef-black/90 backdrop-blur-md py-4 border-b border-tef-gold/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <button onClick={() => setCurrentView('home')} className="flex items-center group">
          <div className="w-10 h-10 border-2 border-tef-gold flex items-center justify-center mr-3 group-hover:bg-tef-gold transition-colors duration-300">
            <span className="text-tef-gold font-tech font-bold group-hover:text-tef-black transition-colors duration-300">T</span>
          </div>
          <span className="font-tech text-2xl font-bold tracking-widest text-white">TEF<span className="text-tef-gold">DEVS</span></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setCurrentView(link.id)}
              className={`text-[10px] lg:text-sm font-medium tracking-widest uppercase transition-colors ${currentView === link.id ? 'text-tef-gold' : 'text-white hover:text-tef-gold'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setCurrentView('contact')}
            className="px-6 py-2 border border-tef-gold text-tef-gold text-xs font-bold tracking-widest uppercase hover:bg-tef-gold hover:text-tef-black transition-all duration-300"
          >
            Elite Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-tef-gold focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-tef-black/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 z-40 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => { setCurrentView(link.id); setIsMenuOpen(false); }}
            className={`text-2xl font-tech tracking-widest uppercase hover:text-tef-gold transition-colors ${currentView === link.id ? 'text-tef-gold' : 'text-white'}`}
          >
            {link.name}
          </button>
        ))}
        <button 
          onClick={() => { setCurrentView('contact'); setIsMenuOpen(false); }}
          className="px-8 py-3 border border-tef-gold text-tef-gold text-lg font-tech tracking-widest uppercase"
        >
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
