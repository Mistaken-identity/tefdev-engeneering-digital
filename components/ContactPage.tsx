
import React, { useState } from 'react';
import { Mail, Phone, Globe, ArrowRight, ShieldCheck, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is the typical project duration?",
    answer: "Our sprints are engineered for efficiency. A standard high-performance web platform typically requires 4-8 weeks from architecture to deployment, while complex full-stack systems may span 12+ weeks depending on the integration matrix."
  },
  {
    question: "Do you offer custom tech stack options?",
    answer: "Yes. While we specialize in Next.js, TypeScript, and Node.js for their elite performance, we architect solutions based on the target objective. We evaluate the best stack for your specific scalability requirements during the Discovery phase."
  },
  {
    question: "How do you handle maintenance after deployment?",
    answer: "We offer proactive 'Sustained Evolution' retainers. This includes 24/7 uptime monitoring, weekly security patches, performance auditing, and iterative feature deployment to ensure your asset remains a market leader."
  },
  {
    question: "Is there a discovery phase before commitment?",
    answer: "Every mission begins with a mandatory Discovery phase. We map out the technical architecture and business logic to ensure total alignment. This prevents technical debt and ensures a zero-friction build process."
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Confidentiality is a pillar of TefDevs. We routinely work with proprietary data and trade secrets. NDAs are standard procedure before we dive into your specific project architecture."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-tef-gold/10 transition-all duration-300 ${isOpen ? 'bg-tef-gold/5 border-tef-gold/30' : 'bg-transparent hover:border-tef-gold/20'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-white font-tech text-xs md:text-sm tracking-widest uppercase">{question}</span>
        {isOpen ? <ChevronUp className="text-tef-gold w-4 h-4 flex-shrink-0" /> : <ChevronDown className="text-tef-gold/40 w-4 h-4 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-0">
          <div className="w-8 h-[1px] bg-tef-gold/30 mb-4"></div>
          <p className="text-tef-silver/50 text-sm font-light leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('Web Platform Engineering');
  const [scope, setScope] = useState('');

  const whatsappNumber = "254769259151";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello TefDevs, I'm initiating a direct line for a technical consultation regarding my project.")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mission Brief: ${objective} - ${org}`);
    const body = encodeURIComponent(
      `Identity: ${name}\n` +
      `Organization: ${org}\n` +
      `Email: ${email}\n` +
      `Objective: ${objective}\n\n` +
      `Mission Scope:\n${scope}`
    );
    window.location.href = `mailto:antonyteflon10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tef-gold/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-10">
            <div>
                <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Elite Portal</h2>
                <h1 className="text-4xl md:text-6xl font-tech text-white mb-8 uppercase tracking-tighter leading-tight">START <span className="text-tef-gold">WORK.</span></h1>
                <p className="text-tef-silver/40 text-lg font-light leading-relaxed mb-6">
                TefDevs operates as a high-precision tech unit. We are currently accepting mission-critical projects that demand elite engineering and architectural dominance.
                </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center p-6 border border-tef-gold/5 bg-tef-gold/[0.02] rounded-lg">
                 <div className="w-12 h-12 border border-tef-gold/20 flex items-center justify-center text-tef-gold">
                    <Phone size={20} />
                 </div>
                 <div>
                    <h4 className="text-white text-[10px] font-tech tracking-widest uppercase mb-1">Secure Line</h4>
                    <p className="text-tef-silver/60">+254 769 259 151</p>
                 </div>
              </div>
              <div className="flex gap-6 items-center p-6 border border-tef-gold/5 bg-tef-gold/[0.02] rounded-lg">
                 <div className="w-12 h-12 border border-tef-gold/20 flex items-center justify-center text-tef-gold">
                    <Mail size={20} />
                 </div>
                 <div>
                    <h4 className="text-white text-[10px] font-tech tracking-widest uppercase mb-1">Digital Dispatch</h4>
                    <p className="text-tef-silver/60">antonyteflon10@gmail.com</p>
                 </div>
              </div>
              <div className="flex gap-6 items-center p-6 border border-tef-gold/5 bg-tef-gold/[0.02] rounded-lg">
                 <div className="w-12 h-12 border border-tef-gold/20 flex items-center justify-center text-tef-gold">
                    <Globe size={20} />
                 </div>
                 <div>
                    <h4 className="text-white text-[10px] font-tech tracking-widest uppercase mb-1">Global Repository</h4>
                    <p className="text-tef-silver/60 text-xs truncate">tefdev-main-portfolio.vercel.app</p>
                 </div>
              </div>
            </div>

            <div className="p-8 border-l-2 border-tef-gold bg-tef-gold/[0.05] rounded-r-lg space-y-4">
               <div className="flex items-center gap-3 text-tef-gold">
                  <ShieldCheck size={18} />
                  <span className="text-[11px] font-tech tracking-[0.2em] uppercase font-bold">Privacy Commitment</span>
               </div>
               <p className="text-tef-silver/40 text-xs leading-relaxed italic">
                 "All communication remains strictly confidential. We build in private to ensure your competitive edge remains protected."
               </p>
            </div>
          </div>

          <div className="glass-card border border-tef-gold/20 p-10 md:p-12 rounded-xl gold-glow flex flex-col h-full">
            <h3 className="text-xl font-tech text-white mb-10 uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-tef-gold"></span>
                Mission Briefer
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Your Identity</label>
                  <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-tef-gold transition-colors font-light" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Organization</label>
                  <input required type="text" value={org} onChange={(e) => setOrg(e.target.value)} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-tef-gold transition-colors font-light" placeholder="Business Name" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Email Address</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-tef-gold transition-colors font-light" placeholder="secure@email.com" />
              </div>
              <div>
                <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Target Objective</label>
                <select value={objective} onChange={(e) => setObjective(e.target.value)} className="w-full bg-tef-black border-b border-white/10 py-3 text-white focus:outline-none focus:border-tef-gold transition-colors appearance-none cursor-pointer font-light">
                  <option>Web Platform Engineering</option>
                  <option>System Integration Architecture</option>
                  <option>E-commerce Ecosystem</option>
                  <option>Operational Automation</option>
                  <option>Long-term Asset Support</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-tech text-tef-gold tracking-widest uppercase mb-3">Mission Scope</label>
                <textarea rows={5} required value={scope} onChange={(e) => setScope(e.target.value)} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-tef-gold transition-colors resize-none font-light" placeholder="Briefly detail the technical challenge..."></textarea>
              </div>
              <button type="submit" className="w-full group py-5 bg-tef-gold text-tef-black font-tech font-bold tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-3">
                Dispatch Mission Brief <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-3 opacity-50">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[9px] font-tech text-white tracking-[0.3em] uppercase">Security Level: Encrypted Transmission</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-tef-gold mb-4">
              <HelpCircle size={20} />
              <h2 className="text-sm font-tech tracking-[0.5em] uppercase">Operational intelligence</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-tech text-white uppercase tracking-tight">FREQUENTLY ASKED <span className="text-tef-gold">QUESTIONS.</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-20 p-12 border border-tef-gold/10 glass-card text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tef-gold/5 blur-3xl group-hover:bg-tef-gold/10 transition-all"></div>
            <h3 className="text-white font-tech text-lg uppercase mb-4 tracking-widest">Still have technical queries?</h3>
            <p className="text-tef-silver/40 font-light text-sm mb-8 max-w-lg mx-auto">
              If your inquiry requires a deeper technical discussion, our lead engineers are available for direct secure line consultation.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-tef-gold font-tech text-xs tracking-[0.3em] uppercase border-b border-tef-gold/30 pb-1 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              Initiate Direct Line <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
