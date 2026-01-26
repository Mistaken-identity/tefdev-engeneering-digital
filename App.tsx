
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Projects from './components/Projects';
import WhyTefDevs from './components/WhyTefDevs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Partners from './components/Partners';

// Full Page Components
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import PortfolioPage from './components/PortfolioPage';
import ProcessPage from './components/ProcessPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'pricing': return <PricingPage setCurrentView={setCurrentView} />;
      case 'portfolio': return <PortfolioPage setCurrentView={setCurrentView} />;
      case 'process': return <ProcessPage setCurrentView={setCurrentView} />;
      case 'contact': return <ContactPage />;
      default: return (
        <>
          <Hero setCurrentView={setCurrentView} />
          <Partners />
          <About />
          <Philosophy />
          <Services />
          <Process />
          <Projects setCurrentView={setCurrentView} />
          <WhyTefDevs />
          <Testimonials />
          <Contact />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-tef-black font-sans selection:bg-tef-gold selection:text-tef-black">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled} 
        setCurrentView={setCurrentView}
        currentView={currentView}
      />
      
      <main className="pt-20 md:pt-0">
        {renderView()}
      </main>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};

export default App;
