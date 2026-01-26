
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('Custom Web Platform');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mission Brief: ${project} from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project Type: ${project}\n\n` +
      `Brief:\n${message}`
    );
    window.location.href = `mailto:antonyteflon10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-32 bg-tef-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-tef-gold/[0.02] -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-tech text-white mb-6">LET'S BUILD SOMETHING SOLID.</h3>
            <p className="text-tef-silver/50 max-w-xl mx-auto font-light">
              We are currently selective with new projects to maintain elite quality. Briefly explain your vision, and we'll be in touch if there's a fit.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-card border border-tef-gold/20 p-8 md:p-12 rounded-xl gold-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-tef-black border-b border-white/10 py-4 px-2 text-white font-light focus:outline-none focus:border-tef-gold transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-tef-black border-b border-white/10 py-4 px-2 text-white font-light focus:outline-none focus:border-tef-gold transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Project Type</label>
              <select 
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full bg-tef-black border-b border-white/10 py-4 px-2 text-white font-light focus:outline-none focus:border-tef-gold transition-colors appearance-none cursor-pointer"
              >
                <option>Custom Web Platform</option>
                <option>Enterprise Backend / API</option>
                <option>E-Commerce Ecosystem</option>
                <option>AI / Automation Integration</option>
                <option>Brand Identity & UI/UX</option>
              </select>
            </div>
            
            <div className="mb-12">
              <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Message / Brief</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-tef-black border-b border-white/10 py-4 px-2 text-white font-light focus:outline-none focus:border-tef-gold transition-colors resize-none"
                placeholder="Tell us about the challenge..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="w-full group py-5 bg-tef-gold text-tef-black font-tech font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 flex items-center justify-center">
              Send Mission Brief <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
             <div className="flex items-center gap-3">
               <Mail className="text-tef-gold w-5 h-5" />
               <span className="text-white font-tech text-xs tracking-widest uppercase">antonyteflon10@gmail.com</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-white font-tech text-xs tracking-widest uppercase">Currently Accepting 2 New Sprints</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
