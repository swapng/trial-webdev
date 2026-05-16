import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, BrainCircuit, Server, ChevronRight,
  Mail, MapPin, Menu, X, CheckCircle2,
  Microchip, ShieldCheck, Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SERVICES = [
  { title:"Embedded Systems", description:"Rigorous firmware development and hardware-software integration for specialized IoT and industrial deployments.", icon:<Cpu className="w-8 h-8"/>, features:["RTOS Implementation","Bare Metal Dev","FPGA Integration","System Security"] },
  { title:"AI & Machine Learning", description:"Developing efficient algorithms that transform raw industrial data into predictive operational insights.", icon:<BrainCircuit className="w-8 h-8"/>, features:["Edge Intelligence","Visual Inspection","Condition Monitoring","Signal Processing"] },
  { title:"Hardware Design", description:"Technical PCB engineering for high-performance systems requiring extreme reliability and efficiency.", icon:<Microchip className="w-8 h-8"/>, features:["High-Speed Design","Design for Mfg","Power Mgmt","EMI Shielding"] },
  { title:"IT Services", description:"Managing technical infrastructure for organisations focusing on security, resilience, and scale.", icon:<Server className="w-8 h-8"/>, features:["Secure Cloud","Network Ops","Infrastructure","DevOps Systems"] }
];

const NAV_LINKS = [
  { name:"Capability", href:"#services" },
  { name:"Expertise", href:"#expertise" },
  { name:"Workflow", href:"#process" },
  { name:"Vision", href:"#about" },
  { name:"Contact", href:"#contact" },
];

const PROCESS_STEPS = [
  { step:"01", title:"Audit & Analysis", description:"Deep technical assessment of hurdles and design feasibility for modern hardware systems." },
  { step:"02", title:"Architecture Design", description:"Drafting the blueprint for systems that integrate AI logic with embedded hardware interfaces." },
  { step:"03", title:"Core Engineering", description:"The execution phase where high-level software meets low-level hardware constraints." },
  { step:"04", title:"Validation Cycle", description:"Stress testing across environmental and data-driven parameters to ensure deployment success." }
];

// Real PNG logo mark — uses actual finalised logo files
const BramhaasLogo = ({ className = "w-10 h-10", darkBg = false }: { className?: string; darkBg?: boolean }) => (
  <img
    src={darkBg ? '/assets/mark_dark.png' : '/assets/mark_light.png'}
    alt="Bramhaas Tech Mark"
    className={className}
    style={{ objectFit: 'contain' }}
  />
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setFormSubmitted(true); }, 1500);
  };

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary/30">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <BramhaasLogo className="w-8 h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-2xl tracking-tighter text-primary">BRAMHAAS</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-secondary">TECH</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold hover:text-secondary transition-colors uppercase tracking-[0.2em] text-muted-foreground">{link.name}</a>
            ))}
            <Button size="sm" className="rounded-none bg-primary text-secondary border border-secondary hover:bg-secondary hover:text-primary transition-all px-6 uppercase tracking-widest text-[10px] font-bold">Inquire</Button>
          </div>
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity:0, x:'100%' }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:'100%' }} className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-3xl font-display font-bold border-b border-border pb-4" onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              ))}
              <Button className="w-full py-8 text-lg rounded-none">Get in Touch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 overflow-hidden bg-[radial-gradient(circle_at_top_right,theme(colors.secondary/0.05),transparent_50%)]">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-secondary" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Advanced Engineering Systems</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 leading-[0.9] text-primary">
                  Precision <br /><span className="text-secondary">Meets</span> Innovation.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-light">
                  Bramhaas Tech is a high-performance engineering company delivering rigorous solutions in Embedded Systems, AI/ML, Hardware Design, and IT Services.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="rounded-none px-10 h-14 bg-primary text-secondary hover:translate-x-2 transition-transform text-xs uppercase tracking-[0.2em] font-bold">
                    Start a Collaboration <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-none px-10 h-14 border-primary text-primary hover:bg-primary hover:text-white text-xs uppercase tracking-[0.2em] font-bold">
                    Our Expertise
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute right-[0px] top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block w-[500px] h-[580px]" style={{ backgroundImage: "url('/assets/mark_light.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 0.09, filter: 'grayscale(100%)'}}/>
        </section>

        {/* Brand Band */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-display font-bold mb-4 text-secondary">Engineering Without Boundaries</h2>
                <p className="opacity-70 font-light">We operate across every domain that demands precision — not defined by industry, defined by the depth of our thinking and the quality of our execution.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                {['EMBEDDED','AI CORE','HARDWARE','IT OPS'].map(t => (
                  <div key={t} className="flex flex-col items-center">
                    <span className="text-xs font-bold tracking-[0.3em] opacity-40 mb-2 uppercase">Domain</span>
                    <span className="text-xl font-display font-bold text-secondary uppercase tracking-widest">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 md:py-32 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-6 flex items-center gap-3"><div className="w-8 h-[1px] bg-secondary" /> Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">Technical Excellence <br />by Design.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:index*0.1 }} viewport={{ once:true }}>
                  <Card className="h-full rounded-none border border-border bg-transparent group hover:bg-primary transition-all duration-500 overflow-hidden cursor-default">
                    <CardHeader className="p-8">
                      <div className="w-12 h-12 flex items-center justify-center mb-10 group-hover:text-secondary transition-colors">{service.icon}</div>
                      <CardTitle className="text-2xl font-display font-bold group-hover:text-secondary transition-colors mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <Separator className="mb-6 bg-border group-hover:bg-white/10" />
                      <ul className="space-y-3">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:text-secondary transition-colors opacity-80">
                            <div className="w-1 h-1 bg-secondary rounded-full" />{f}
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

        {/* Expertise */}
        <section id="expertise" className="py-24 bg-slate-50 border-y border-border scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="bg-primary text-secondary mb-8 rounded-none px-4 py-1 uppercase tracking-widest text-[10px]">Technical Foundations</Badge>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-primary">Mastering the <span className="text-secondary">Core.</span></h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg">A focused group of engineers dedicated to precision and quality. Research-driven, ensuring every project meets global safety and performance benchmarks.</p>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h4 className="font-bold flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-secondary"><div className="w-4 h-[1px] bg-secondary" /> Systems Logic</h4>
                    <ul className="space-y-3 text-sm font-medium text-primary uppercase tracking-wider">
                      <li>RTOS Frameworks</li><li>Linux Kernels</li><li>Scalable Firmware</li><li>System Architecture</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-secondary"><div className="w-4 h-[1px] bg-secondary" /> AI Integration</h4>
                    <ul className="space-y-3 text-sm font-medium text-primary uppercase tracking-wider">
                      <li>Model Optimization</li><li>Neural Architectures</li><li>Edge Computing</li><li>ML Operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon:<Cpu className="w-6 h-6 text-primary"/>, title:'Hardware', sub:'Prototyping Labs', offset:'' },
                  { icon:<ShieldCheck className="w-6 h-6 text-secondary"/>, title:'Compliant', sub:'Global Standards', offset:'translate-y-6' },
                  { icon:<BrainCircuit className="w-6 h-6 text-primary"/>, title:'Adaptive', sub:'AI Methodologies', offset:'-translate-y-6' },
                  { icon:<Code2 className="w-6 h-6 text-secondary"/>, title:'Rigorous', sub:'Architectures', offset:'' },
                ].map(item => (
                  <div key={item.title} className={`bg-white p-10 border border-border flex flex-col items-center justify-center text-center ${item.offset}`}>
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">{item.icon}</div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.title}</h5>
                    <p className="text-xs text-muted-foreground uppercase opacity-60">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
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
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative group">
                  <div className="text-8xl font-display font-black text-slate-100 absolute -top-12 -left-6 -z-10 group-hover:text-secondary/10 transition-colors">{step.step}</div>
                  <div className="pt-4 border-l-2 border-slate-100 pl-6 group-hover:border-secondary transition-colors">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-primary">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tighter">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="about" className="py-24 md:py-32 bg-primary text-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 relative">
                <div className="aspect-square border-2 border-secondary/30 p-4">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Precision Engineering" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary text-primary p-8 hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-[0.4em]">Pune, India</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-8">Our Vision</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Built to last, engineered to <span className="italic opacity-50">evolve.</span></h3>
                <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed">
                  <p>Bramhaas Tech was founded on a single conviction — that India has the engineering depth to build technology the world depends on. Not services. Not outsourcing. Real, original engineering.</p>
                  <p>We are not defined by a single domain. We operate across embedded systems, AI/ML, hardware design, and IT — wherever rigorous engineering is needed. We follow the problem, not the industry.</p>
                  <p>Every decision we make is measured against one question: will we be proud of this in 20 years?</p>
                </div>
                <div className="pt-12 flex items-center gap-6">
                  <BramhaasLogo className="w-14 h-16 opacity-60" darkBg={true} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Bramhaas Tech Pvt Ltd</p>
                    <p className="text-sm opacity-60">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 scroll-mt-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight text-primary">Inquire for <br /><span className="text-secondary italic">Consultation.</span></h2>
                <p className="text-lg text-muted-foreground mb-16 max-w-md font-light">Direct channels for technical discussions, engineering partnerships, and solution modelling.</p>
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
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-primary">Location</p>
                      <p className="text-xl font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border border-border p-10 md:p-16">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="h-full flex flex-col items-center justify-center text-center py-10">
                      <CheckCircle2 className="w-16 h-16 text-secondary mb-8" />
                      <h4 className="text-3xl font-display font-bold mb-4 text-primary">Message Received</h4>
                      <p className="text-muted-foreground mb-10">Our team will review your brief and respond within one business day.</p>
                      <Button variant="outline" className="rounded-none border-primary text-primary" onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-primary">Project Specification Form</h4>
                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                          <input required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="First Name" />
                          <input required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="Last Name" />
                        </div>
                        <input required type="email" className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest" placeholder="Work Email" />
                        <select className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm uppercase tracking-widest appearance-none">
                          <option>Domain: Embedded Systems</option>
                          <option>Domain: AI / ML</option>
                          <option>Domain: Hardware Design</option>
                          <option>Domain: IT Services</option>
                        </select>
                        <textarea required className="w-full bg-transparent border-b border-border py-4 focus:border-secondary transition-all outline-none text-sm placeholder:uppercase placeholder:tracking-widest min-h-[100px]" placeholder="Brief context of your engineering requirements..." />
                        <Button disabled={isSubmitting} className="w-full py-8 text-xs font-bold uppercase tracking-[0.3em] rounded-none bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all">
                          {isSubmitting ? 'Sending...' : 'Submit Brief'}
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
                <BramhaasLogo className="w-10 h-12" darkBg={true} />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-3xl tracking-tighter text-white">BRAMHAAS</span>
                  <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-secondary">TECH</span>
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-light">High-precision engineering solutions bridging sophisticated hardware design and intelligent software — built for the long run.</p>
              <div className="flex gap-6">
                {['LinkedIn','GitHub'].map(s => (
                  <a key={s} href="#" className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-secondary transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Solutions</h4>
              <ul className="space-y-4 text-xs font-medium text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Embedded Systems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Optimization</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Custom PCB Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">IT Infrastructure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Company</h4>
              <ul className="space-y-4 text-xs font-medium text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">Our Vision</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Project Intake</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <p>© Bramhaas Tech Pvt Ltd. All rights reserved.</p>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
