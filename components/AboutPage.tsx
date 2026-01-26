
import React from 'react';
import { Shield, Target, Users, Zap, Terminal, Globe, Cpu } from 'lucide-react';

const teamMembers = [
  {
    name: "Antony Emong'oluk",
    role: "Chief Architect & Founder",
    specialty: "Full-Stack Ecosystems",
    bio: "Visionary leader with a decade of engineering experience in building high-stakes digital assets.",
    skills: ["System Design", "Cloud Architecture", "Performance Optimization"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Cyrus Kipkemoi",
    role: "Senior Backend Engineer",
    specialty: "Automation & AI Integration",
    bio: "Expert in architecting robust API layers and intelligent workflows that eliminate operational friction.",
    skills: ["Python", "Node.js", "AI Pipelines"],
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Lydia Wanjiru",
    role: "UI/UX Lead",
    specialty: "Luxury Brand Interfaces",
    bio: "Pioneering high-end digital aesthetics that merge luxury brand values with seamless usability.",
    skills: ["Design Systems", "Product Strategy", "High-Fidelity UI"],
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Emmanuel Kiplagat",
    role: "Lead Frontend Engineer",
    specialty: "WebGL & Immersive Web",
    bio: "Specialist in high-performance frontend architectures and interactive 3D web experiences.",
    skills: ["React", "Three.js", "Shader Programming"],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Faith Muthoni",
    role: "Systems Security Architect",
    specialty: "Cyber Intelligence",
    bio: "Ensures mission-critical infrastructure is bulletproof against sophisticated digital threats.",
    skills: ["Cyber Security", "DevSecOps", "Network Integrity"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-tef-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Inside the Unit</h2>
          <h1 className="text-4xl md:text-6xl font-tech text-white mb-8 uppercase tracking-tighter">ABOUT <span className="text-tef-gold">TEFDEVS.</span></h1>
          <p className="text-tef-silver/60 text-lg font-light leading-relaxed">
            We are a high-performance tech solutions company dedicated to engineering the future. We don't just build websites; we architect digital infrastructure that fuels business growth.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <div className="p-10 border border-tef-gold/10 glass-card">
              <h3 className="text-2xl font-tech text-white uppercase tracking-tight mb-4">Our Vision</h3>
              <p className="text-tef-silver/50 leading-relaxed font-light">
                To be the global benchmark for digital precision, setting the standard for how businesses leverage technology to achieve silent dominance in their industries.
              </p>
            </div>
            <div className="p-10 border border-tef-gold/10 glass-card">
              <h3 className="text-2xl font-tech text-white uppercase tracking-tight mb-4">Our Mission</h3>
              <p className="text-tef-silver/50 leading-relaxed font-light">
                We equip visionary enterprises with robust, scalable, and high-performance technical solutions. Our mission is to eliminate operational friction and technical debt.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-tech text-white uppercase tracking-tight">What Makes Us Different</h3>
            <p className="text-tef-silver/50 leading-relaxed font-light">
              Unlike traditional agencies that prioritize volume, we prioritize impact. Our approach is deeply rooted in engineering fundamentals and silent execution.
            </p>
            <ul className="space-y-4">
              {[
                "Team-Powered Intelligence",
                "Precision Over Generic Templates",
                "Built in Private, Delivered with Impact",
                "Continuous Long-Term Evolution"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white font-tech text-xs tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 bg-tef-gold rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-sm font-tech text-tef-gold tracking-[0.5em] uppercase mb-4">Elite Operatives</h2>
            <h3 className="text-3xl md:text-5xl font-tech text-white uppercase tracking-tighter">THE <span className="text-tef-gold">TEAM.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group glass-card border border-tef-gold/10 overflow-hidden hover:border-tef-gold/40 transition-all duration-500">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tef-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-white font-tech text-xl uppercase tracking-tighter">{member.name}</h4>
                    <p className="text-tef-gold text-[10px] font-tech tracking-[0.2em] uppercase">{member.role}</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <p className="text-tef-silver/40 text-xs font-light leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-tef-gold/5 border border-tef-gold/10 text-[8px] text-tef-gold/60 font-tech tracking-widest uppercase">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-tef-gold/10">
          <div className="p-8 border border-tef-gold/5 bg-tef-gold/[0.02]">
            <Shield className="text-tef-gold w-8 h-8 mb-6" />
            <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-4">Reliability</h4>
            <p className="text-tef-silver/40 text-sm font-light">We build systems that stay online and performant under the most demanding conditions.</p>
          </div>
          <div className="p-8 border border-tef-gold/5 bg-tef-gold/[0.02]">
            <Target className="text-tef-gold w-8 h-8 mb-6" />
            <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-4">Scalability</h4>
            <p className="text-tef-silver/40 text-sm font-light">Our code is modular and prepared for the rapid growth of your enterprise.</p>
          </div>
          <div className="p-8 border border-tef-gold/5 bg-tef-gold/[0.02]">
            <Users className="text-tef-gold w-8 h-8 mb-6" />
            <h4 className="text-white font-tech text-sm tracking-widest uppercase mb-4">Team-Driven</h4>
            <p className="text-tef-silver/40 text-sm font-light">We bring a collective expertise to solve complex technical challenges with precision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
