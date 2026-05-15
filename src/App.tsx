import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  BrainCircuit, 
  Zap, 
  Server, 
  Globe, 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  CheckCircle2,
  Layers,
  Microchip,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SERVICES = [
  {
    title: "Embedded Systems",
    description: "Rigorous firmware development and hardware-software integration for specialized IoT and industrial deployments.",
    icon: <Cpu className="w-8 h-8" />,
    features: ["RTOS Implementation", "Bare Metal Dev", "FPGA Integration", "System Security"],
    color: "bg-primary/5"
  },
  {
    title: "AI & Machine Learning",
    description: "Developing efficient algorithms that transform raw industrial data into predictive operational insights.",
    icon: <BrainCircuit className="w-8 h-8" />,
    features: ["Edge Intelligence", "Visual Inspection", "Condition Monitoring", "Signal Processing"],
    color: "bg-primary/5"
  },
  {
    title: "Hardware Design",
    description: "Technical PCB engineering for high-performance systems requiring extreme reliability and efficiency.",
    icon: <Microchip className="w-8 h-8" />,
    features: ["High-Speed Design", "Design for Mfg", "Power Mgmt", "EMI Shielding"],
    color: "bg-primary/5"
  },
  {
    title: "IT Services",
    description: "Managing technical infrastructure for high-growth tech companies focusing on security and resilience.",
    icon: <Server className="w-8 h-8" />,
    features: ["Secure Cloud", "Network Ops", "Infrastructure", "DevOps Systems"],
    color: "bg-primary/5"
  }
];

const INDUSTRIES = [
  "Automotive", "Healthcare", "Industrial IoT", "Consumer Tech", "Smart Cities", "Aerospace"
];

const NAV_LINKS = [
  { name: "Capability", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Workflow", href: "#process" },
  { name: "Vision", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit & Analysis",
    description: "Deep technical assessment of hurdles and design feasibility for modern hardware systems."
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Drafting the blueprint for systems that integrate AI logic with embedded hardware interfaces."
  },
  {
    step: "03",
    title: "Core Engineering",
    description: "The execution phase where high-level software meets low-level hardware constraints."
  },
  {
    step: "04",
    title: "Validation Cycle",
    description: "Stress testing across environmental and data-driven parameters to ensure deployment success."
  }
];

const BramhaasLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="40" ry="25" stroke="currentColor" strokeWidth="3" transform="rotate(-15 50 55)" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="3" />
    <line x1="35" y1="25" x2="65" y2="25" stroke="#C5A028" strokeWidth="3" />
    <rect x="46" y="51" width="8" height="8" transform="rotate(45 50 55)" fill="#C5A028" />
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary/30">
      {/* Navigation */}
      <nav id="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BramhaasLogo className="w-10 h-10 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-2xl tracking-tighter text-primary">BRAMHAAS</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">TECH</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold hover:text-secondary transition-colors uppercase tracking-[0.2em] text-muted-foreground"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="rounded-none bg-primary text-secondary border border-secondary hover:bg-secondary hover:text-primary transition-all px-6 uppercase tracking-widest text-[10px] font-bold">
              Inquire
            </Button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-display font-bold border-b border-border pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full py-8 text-lg rounded-none">Contact Our Team</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 overflow-hidden bg-[radial-gradient(circle_at_top_right,#C5A02808,transparent_50%)]">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-secondary" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Advanced Engineering Systems</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 leading-[0.9] text-primary">
                  Precision <br /> 
                  <span className="text-secondary">Meets</span> Innovation.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-light">
                  Bramhaas Tech is a high-performance engineering startup delivering rigorous solutions in Embedded Systems, AI/ML, and Hardware Design.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="rounded-none px-10 h-14 bg-primary text-secondary hover:translate-x-2 transition-transform text-xs uppercase tracking-[0.2em] font-bold">
                    Start a Collaboration <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-none px-10 h-14 border-primary text-primary hover:bg-primary hover:text-white text-xs uppercase tracking-[0.2em] font-bold">
                    Check Expertise
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
            <BramhaasLogo className="w-[800px] h-[800px] text-primary" />
          </div>
        </section>

        {/* Brand Focus */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-display font-bold mb-4 text-secondary">Fresh Engineering Perspective</h2>
                <p className="opacity-70 font-light">We leverage the latest industry standards and modern methodologies to build next-generation technical infrastructure.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                {['EMBEDDED', 'AI CORE', 'HARDWARE', 'IT OPS'].map(t => (
                  <div key={t} className="flex flex-col items-center">
                    <span className="text-xs font-bold tracking-[0.3em] opacity-40 mb-2 uppercase">Domain</span>
                    <span className="text-xl font-display font-bold text-secondary uppercase tracking-widest">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-secondary" /> Capabilities
              </h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">Technical Excellence <br />by Design.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full rounded-none border border-border bg-transparent group hover:bg-primary transition-all duration-500 overflow-hidden cursor-default">
                    <CardHeader className="p-8">
                      <div className="w-12 h-12 flex items-center justify-center mb-10 group-hover:text-secondary transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-display font-bold group-hover:text-secondary transition-colors mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <Separator className="mb-6 bg-border group-hover:bg-white/10" />
                      <ul className="space-y-3">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:text-secondary transition-colors opacity-80">
                            <div className="w-1 h-1 bg-secondary rounded-full" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise/Tech Stack */}
        <section id="expertise" className="py-24 bg-slate-50 border-y border-border scroll-mt-20">
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="bg-primary text-secondary mb-8 rounded-none px-4 py-1 uppercase tracking-widest text-[10px]">Technical Foundations</Badge>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-primary">Mastering the <span className="text-secondary">Core.</span></h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg">
                  We are a focused group of engineers dedicated to precision and quality. Our approach is research-driven, ensuring every project meets global safety and performance benchmarks.
                </p>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h4 className="font-bold flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-secondary">
                      <div className="w-4 h-[1px] bg-secondary" /> Systems Logic
                    </h4>
                    <ul className="space-y-3 text-sm font-medium text-primary uppercase tracking-wider">
                      <li>RTOS Frameworks</li>
                      <li>Linux Kernels</li>
                      <li>Scalable Firmware</li>
                      <li>System Architecture</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-secondary">
                      <div className="w-4 h-[1px] bg-secondary" /> AI Integration
                    </h4>
                    <ul className="space-y-3 text-sm font-medium text-primary uppercase tracking-wider">
                      <li>Model Optimization</li>
                      <li>Neural Architectures</li>
                      <li>Edge Computing</li>
                      <li>Machine Learning Ops</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-10 border border-border flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Hardware</h5>
                  <p className="text-xs text-muted-foreground uppercase opacity-60">Prototyping Labs</p>
                </div>
                <div className="bg-white p-10 border border-border translate-y-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Compliant</h5>
                  <p className="text-xs text-muted-foreground uppercase opacity-60">Global Standards</p>
                </div>
                <div className="bg-white p-10 border border-border -translate-y-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                  </div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Adaptive</h5>
                  <p className="text-xs text-muted-foreground uppercase opacity-60">AI Methodologies</p>
                </div>
                <div className="bg-white p-10 border border-border flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Rigorous</h5>
                  <p className="text-xs text-muted-foreground uppercase opacity-60">Architectures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 md:py-32 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-6">Workflow</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-primary">The Bramhaas Lifecycle.</h3>
              </div>
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed italic">"Simplicity is the ultimate sophistication in engineering."</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className="relative group">
                  <div className="text-8xl font-display font-black text-slate-100 absolute -top-12 -left-6 -z-10 group-hover:text-secondary/10 transition-colors">{step.step}</div>
                  <div className="pt-4 border-l-2 border-slate-100 pl-6 group-hover:border-secondary transition-colors">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-primary">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tighter">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-primary text-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 relative">
                <div className="aspect-square border-2 border-secondary/30 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                    alt="Precision Engineering" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary text-primary p-8 hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-[0.4em]">Est. 2026</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-8">Our Vision</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Built to last, engineered to <span className="italic opacity-50">evolve.</span></h3>
                <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed">
                  <p>
                    Bramhaas Tech was established in 2026 to bridge the gap between rapid digital innovation and the fundamental principles of high-quality hardware engineering.
                  </p>
                  <p>
                    As a startup, we aren't bogged down by legacy systems. We operate with extreme agility, using modern tools and a fresh perspective to solve complex problems for the automotive, healthcare, and industrial sectors.
                  </p>
                </div>
                <div className="pt-12 flex items-center gap-6">
                  <BramhaasLogo className="w-16 h-16 text-secondary opacity-50" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Founding Engineering Team</p>
                    <p className="text-sm opacity-60">Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 md:py-32 scroll-mt-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight text-primary">Inquire for <br /><span className="text-secondary italic">Consultation.</span></h2>
                <p className="text-lg text-muted-foreground mb-16 max-w-md font-light">
                  Direct channels for technical discussions, engineering partnerships, and solution modeling.
                </p>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <Mail className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-primary">Engineering Liaison</p>
                      <p className="text-xl font-medium">contact@bramhaastech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <MapPin className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-primary">Foundry Presence</p>
                      <p className="text-xl font-medium">Pune</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-border p-10 md:p-16">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-10"
                    >
                      <CheckCircle2 className="w-16 h-16 text-secondary mb-8" />
                      <h4 className="text-3xl font-display font-bold mb-4 text-primary">Acknowledgement Sent</h4>
                      <p className="text-muted-foreground mb-10">Our engineering lead will review your brief and respond within one business day.</p>
                      <Button variant="outline" className="rounded-none border-primary text-primary" onClick={() => setFormSubmitted(false)}>
                        Initiate New Request
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-primary">Project Specification Form</h4>
                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                          <input required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="First Name" />
                          <input required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="Last Name" />
                        </div>
                        <input required type="email" className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="Work Email" />
                        <select className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm uppercase tracking-widest appearance-none">
                          <option>Domain: Embedded</option>
                          <option>Domain: AI/ML</option>
                          <option>Domain: Hardware</option>
                          <option>Domain: IT Ops</option>
                        </select>
                        <textarea required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest min-h-[100px]" placeholder="Brief context of engineering hurdles..." />
                        <Button 
                          disabled={isSubmitting}
                          className="w-full py-8 text-xs font-bold uppercase tracking-[0.3em] rounded-none bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all"
                        >
                          {isSubmitting ? 'Transmitting Data...' : 'Submit Brief'}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <BramhaasLogo className="w-12 h-12 text-secondary" />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-3xl tracking-tighter text-white">BRAMHAAS</span>
                  <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-secondary">TECH</span>
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-light">
                High-precision engineering solutions bridging the gap between sophisticated hardware design and intelligent software implementations.
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'GitHub', 'ResearchGate'].map(social => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-secondary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Solutions</h4>
              <ul className="space-y-4 text-xs font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Embedded Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom PCB Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Systems Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Corporate</h4>
              <ul className="space-y-4 text-xs font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Startup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Founding Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Intake</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <p>© 2026 Bramhaas Tech Solutions Private Limited.</p>
            <div className="flex gap-10">
              <span className="flex items-center gap-2 underline decoration-secondary">Pune</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action / Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="w-16 h-16 rounded-full shadow-2xl p-0 group">
          <BrainCircuit className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

