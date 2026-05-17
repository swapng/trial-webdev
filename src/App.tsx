import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu, BrainCircuit, Server, Gauge,
  Mail, MapPin, Menu, X, CheckCircle2,
  Microchip, ShieldCheck, Code2, ArrowRight
} from 'lucide-react';

const SERVICES = [
  { title:"Embedded Systems", description:"Rigorous firmware development and hardware-software integration for specialized IoT and industrial deployments.", icon:<Cpu className="w-7 h-7"/>, features:["RTOS Implementation","Bare Metal Dev","FPGA Integration","System Security"] },
  { title:"Hardware Design", description:"Technical PCB engineering for high-performance systems requiring extreme reliability and efficiency.", icon:<Microchip className="w-7 h-7"/>, features:["High-Speed Design","Design for Mfg","Power Mgmt","EMI Shielding"] },
  { title:"High Performance Computing", description:"Designing and optimising systems that operate at the limits of computational capability. Real HPC experience, not theory.", icon:<Gauge className="w-7 h-7"/>, features:["HPC Architecture","System Tuning","Precision Benchmarking","Performance Analysis"] },
  { title:"AI, ML & Data Science", description:"Building intelligent systems and transforming complex data into decisions. From edge models to executive dashboards.", icon:<BrainCircuit className="w-7 h-7"/>, features:["Edge Intelligence","Model Optimization","Predictive Analytics","Reports & Dashboards"] },
  { title:"IT Engineering", description:"Engineering the infrastructure that organisations depend on. Security, resilience, scale.", icon:<Server className="w-7 h-7"/>, features:["Secure Cloud","Network Ops","Infrastructure","DevOps Systems"] }
];

const NAV_LINKS = [
  { name:"Capability", href:"#services" },
  { name:"Expertise", href:"#expertise" },
  { name:"Workflow", href:"#process" },
  { name:"Vision", href:"#about" },
  { name:"Contact", href:"#contact" },
];

const PROCESS_STEPS = [
  { step:"01", title:"Audit & Analysis", description:"Deep technical assessment of the problem — before a single line is written." },
  { step:"02", title:"Architecture Design", description:"The blueprint comes before the build. Always." },
  { step:"03", title:"Core Engineering", description:"Where high-level thinking meets low-level precision." },
  { step:"04", title:"Validation Cycle", description:"We don't ship until we're certain. Then we validate again." }
];

const Logo = ({ size = 36, dark = false }: { size?: number; dark?: boolean }) => (
  <img
    src={dark ? '/assets/mark_dark.png' : '/assets/mark_light.png'}
    alt="Bramhaas Tech"
    width={size}
    height={size}
    style={{ objectFit:'contain', display:'block' }}
  />
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // ── Init EmailJS once on mount ──
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    setSubmitError(false);
    // ── No public key as 4th arg — already initialised above ──
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current
    ).then(() => {
      setSubmitting(false);
      setSubmitted(true);
    }).catch((err) => {
      console.error('EmailJS error:', err);
      setSubmitting(false);
      setSubmitError(true);
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-foreground font-sans">

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#f9f8f6]/95 backdrop-blur-md border-b border-[#ececec] py-4 shadow-sm' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
            <Logo size={34} />
            <div className="flex flex-col leading-none">
              <span className="font-black text-[15px] tracking-[3px] text-[#0f172a]">BRAMHAAS</span>
              <span className="text-[8px] tracking-[5px] font-bold text-[#d4a017] mt-0.5">TECH</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(l => (
              <a key={l.name} href={l.href}
                className="text-[11px] font-semibold tracking-[2px] uppercase text-[#94a3b8] hover:text-[#0f172a] transition-colors duration-300">
                {l.name}
              </a>
            ))}
            <a href="#contact"
              className="text-[10px] font-bold tracking-[3px] uppercase bg-[#1a0d2e] text-[#f9f8f6] px-6 py-3 hover:bg-[#d4a017] hover:text-[#1a0d2e] transition-all duration-300">
              Inquire
            </a>
          </div>
          <button className="md:hidden text-[#0f172a]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity:0,x:'100%'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'100%'}}
            className="fixed inset-0 z-40 bg-[#f9f8f6] pt-24 px-8 md:hidden flex flex-col gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.name} href={l.href}
                className="text-3xl font-black tracking-tight text-[#0f172a] border-b border-[#ececec] pb-6"
                onClick={() => setMenuOpen(false)}>{l.name}</a>
            ))}
            <a href="#contact" className="bg-[#1a0d2e] text-[#f9f8f6] text-center py-5 text-sm font-bold tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Get in Touch</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>

        {/* HERO */}
        <section className="min-h-screen flex items-center bg-[#f9f8f6] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a017] to-transparent opacity-40"/>
          <div className="max-w-7xl mx-auto px-8 w-full pt-28 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,ease:[0.25,0.46,0.45,0.94]}}>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-[1px] bg-[#d4a017]"/>
                  <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Advanced Engineering Systems</span>
                </div>
                <h1 style={{fontFamily:'Georgia,serif'}} className="text-[72px] leading-[1] font-light text-[#0f172a] tracking-[-2px] mb-8">
                  Precision<br/>
                  <em className="text-[#d4a017]" style={{fontStyle:'italic'}}>meets</em><br/>
                  <span className="font-semibold">innovation.</span>
                </h1>
                <p className="text-[15px] text-[#64748b] leading-[1.9] font-light max-w-md mb-12">
                  Where rigorous engineering meets real-world problems. Built for what matters — not what is easy.
                </p>
                <div className="flex items-center gap-0">
                  <a href="#contact" className="bg-[#1a0d2e] text-[#f9f8f6] px-8 py-4 text-[10px] font-bold tracking-[3px] uppercase hover:bg-[#d4a017] hover:text-[#1a0d2e] transition-all duration-300 flex items-center gap-3">
                    Start a Collaboration <ArrowRight size={14}/>
                  </a>
                  <a href="#services" className="px-8 py-4 text-[10px] font-bold tracking-[3px] uppercase text-[#0f172a] hover:text-[#d4a017] transition-colors duration-300">
                    Our Capability →
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-16">
                  <div className="w-5 h-[1px] bg-[#d4a017] opacity-60"/>
                  <span className="text-[9px] font-semibold tracking-[4px] text-[#aaa] uppercase">Pune · India</span>
                </div>
              </motion.div>
              <motion.div
                initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}
                transition={{duration:1.1,ease:[0.25,0.46,0.45,0.94],delay:0.2}}
                className="flex items-center justify-center">
                <img
                  src="/assets/mark_light.png"
                  alt="Bramhaas Tech"
                  className="w-[460px] h-[460px] object-contain opacity-95"
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[8px] tracking-[4px] text-[#ccc] uppercase">Scroll</span>
            <motion.div animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.8,ease:'easeInOut'}}
              className="w-[1px] h-8 bg-gradient-to-b from-[#d4a017] to-transparent"/>
          </div>
        </section>

        {/* DOMAIN STRIP */}
        <div className="bg-[#1a0d2e] py-5 overflow-hidden">
          <div className="flex gap-16 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, i) =>
              ['EMBEDDED SYSTEMS','AI · ML · DATA SCIENCE','HARDWARE DESIGN','IT ENGINEERING','HPC','BRAMHAAS TECH · PUNE'].map(t => (
                <span key={`${i}-${t}`} className="text-[10px] font-bold tracking-[4px] text-[#d4a017] uppercase flex-shrink-0">
                  {t} <span className="text-[#3a2a5a] mx-6">·</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* CAPABILITY */}
        <section id="services" className="py-32 bg-[#f9f8f6] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-[#d4a017]"/>
                <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Capability</span>
              </div>
              <h2 style={{fontFamily:'Georgia,serif'}} className="text-[52px] font-light text-[#0f172a] tracking-tight leading-tight">
                Technical excellence<br/><em style={{fontStyle:'italic'}}>by design.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[1px] bg-[#ececec]">
              {SERVICES.map((s, i) => (
                <motion.div key={s.title}
                  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
                  transition={{delay:i*0.1}} viewport={{once:true}}
                  className="bg-[#f9f8f6] p-10 group hover:bg-[#1a0d2e] transition-all duration-500 cursor-default">
                  <div className="mb-8 text-[#0f172a] group-hover:text-[#d4a017] transition-colors duration-500">{s.icon}</div>
                  <h3 className="text-[17px] font-bold text-[#0f172a] group-hover:text-[#f9f8f6] transition-colors duration-500 mb-4 leading-tight">{s.title}</h3>
                  <p className="text-[13px] text-[#94a3b8] leading-relaxed mb-8">{s.description}</p>
                  <div className="h-[1px] bg-[#ececec] group-hover:bg-white/10 mb-6 transition-colors duration-500"/>
                  <ul className="space-y-2">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#94a3b8] group-hover:text-[#d4a017] transition-colors duration-500">
                        <div className="w-1 h-1 bg-[#d4a017] rounded-full flex-shrink-0"/>{f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-32 bg-[#f2f0ec] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#d4a017]"/>
                  <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Expertise</span>
                </div>
                <h2 style={{fontFamily:'Georgia,serif'}} className="text-[48px] font-light text-[#0f172a] leading-tight tracking-tight mb-8">
                  Mastering<br/><em style={{fontStyle:'italic'}}>the core.</em>
                </h2>
                <p className="text-[15px] text-[#64748b] leading-[1.9] font-light mb-12 max-w-md">
                  A focused group of engineers dedicated to precision and quality. Research-driven, ensuring every project meets global safety and performance benchmarks.
                </p>
                <div className="grid grid-cols-2 gap-10">
                  {[
                    { label:'Systems Logic', items:['RTOS Frameworks','Linux Kernels','Scalable Firmware','System Architecture'] },
                    { label:'AI Integration', items:['Model Optimization','Neural Architectures','Edge Computing','ML Operations'] }
                  ].map(col => (
                    <div key={col.label}>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-[1px] bg-[#d4a017]"/>
                        <span className="text-[9px] font-bold tracking-[3px] text-[#d4a017] uppercase">{col.label}</span>
                      </div>
                      <ul className="space-y-3">
                        {col.items.map(it => (
                          <li key={it} className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[1px] bg-[#e8e6e0]">
                {[
                  { icon:<Cpu className="w-5 h-5 text-[#0f172a]"/>, title:'Hardware', sub:'Prototyping Labs', offset:false },
                  { icon:<ShieldCheck className="w-5 h-5 text-[#d4a017]"/>, title:'Compliant', sub:'Global Standards', offset:true },
                  { icon:<BrainCircuit className="w-5 h-5 text-[#0f172a]"/>, title:'Adaptive', sub:'AI Methodologies', offset:true },
                  { icon:<Code2 className="w-5 h-5 text-[#d4a017]"/>, title:'Rigorous', sub:'Architectures', offset:false },
                ].map((item) => (
                  <div key={item.title}
                    className={`bg-[#f9f8f6] p-10 flex flex-col items-center justify-center text-center ${item.offset ? 'translate-y-4' : ''}`}>
                    <div className="w-11 h-11 bg-[#f2f0ec] rounded-full flex items-center justify-center mb-5">{item.icon}</div>
                    <div className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase mb-1">{item.title}</div>
                    <div className="text-[10px] text-[#aaa] uppercase tracking-wider">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="process" className="py-32 bg-[#f9f8f6] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#d4a017]"/>
                  <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Workflow</span>
                </div>
                <h2 style={{fontFamily:'Georgia,serif'}} className="text-[48px] font-light text-[#0f172a] tracking-tight leading-tight">
                  The Bramhaas<br/><em style={{fontStyle:'italic'}}>lifecycle.</em>
                </h2>
              </div>
              <p className="max-w-xs text-[13px] text-[#94a3b8] leading-relaxed italic font-light">
                "Simplicity is the ultimate sophistication in engineering."
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-[1px] bg-[#ececec]">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={step.step}
                  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
                  transition={{delay:i*0.1}} viewport={{once:true}}
                  className="bg-[#f9f8f6] p-10 group hover:bg-[#f2f0ec] transition-all duration-300">
                  <div style={{fontFamily:'Georgia,serif'}} className="text-[72px] font-light text-[#ececec] group-hover:text-[#e8e4dc] leading-none mb-6 transition-colors duration-300">{step.step}</div>
                  <div className="w-6 h-[2px] bg-[#d4a017] mb-5"/>
                  <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#0f172a] mb-4">{step.title}</h3>
                  <p className="text-[12px] text-[#94a3b8] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-32 bg-[#1a0d2e] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 mb-24">
              {[
                { num:'10+', label:'Years of combined engineering experience', small:false },
                { num:'∀', label:'Every problem we take on, we own completely', small:true },
                { num:'1', label:'Standard of work. World class or nothing.', small:false },
              ].map((item) => (
                <div key={item.num} className="bg-[#1a0d2e] p-10 text-center">
                  <div style={{fontFamily:'Georgia,serif'}} className={`font-light text-[#d4a017] leading-none mb-4 ${item.small ? 'text-[44px]' : 'text-[64px]'}`}>{item.num}</div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-light uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
              {[
                { title:'Depth over breadth.', body:'When we take on a problem, we go deep. Into the architecture, the edge cases, the things others miss. You get engineers who think, not people who execute checklists.' },
                { title:'We say what we mean.', body:'If a problem is not solvable the way you have imagined it, we will say so — and offer a better path. Honesty is not a policy here. It is how we work.' },
                { title:'Built for generations.', body:'Every decision measured against one question: will we be proud of this in 20 years? If the answer is no, we do not do it.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#1a0d2e] p-12 border-t-2 border-[#d4a017]">
                  <h3 style={{fontFamily:'Georgia,serif'}} className="text-[22px] font-light text-[#fafafa] mb-5 leading-tight italic">{item.title}</h3>
                  <p className="text-[13px] text-white/45 leading-[1.9] font-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="about" className="py-32 bg-[#1a0d2e] scroll-mt-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="aspect-square border border-[#d4a017]/20 p-4">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                    alt="Engineering" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer"/>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#d4a017] p-8 hidden md:block">
                  <p className="text-[9px] font-bold tracking-[4px] uppercase text-[#1a0d2e]">Pune, India</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#d4a017]"/>
                  <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Vision</span>
                </div>
                <h2 style={{fontFamily:'Georgia,serif'}} className="text-[48px] font-light text-[#f9f8f6] leading-tight tracking-tight mb-10">
                  Built to last,<br/>engineered to <em style={{fontStyle:'italic',opacity:0.5}}>evolve.</em>
                </h2>
                <div className="space-y-6 text-[15px] text-white/60 font-light leading-[1.9]">
                  <p>Bramhaas Tech was founded on a single conviction — that India has the engineering depth to build technology the world depends on. Not services. Not outsourcing. Real engineering.</p>
                  <p>We are not defined by a single domain. We follow the problem, not the industry.</p>
                  <p>Every decision we make is measured against one question: will we be proud of this in 20 years?</p>
                </div>
                <div className="mt-12 flex items-center gap-5">
                  <Logo size={44} dark={true}/>
                  <div>
                    <p className="text-[9px] font-bold tracking-[3px] text-[#d4a017] uppercase">Bramhaas Tech Pvt Ltd</p>
                    <p className="text-[13px] text-white/40 mt-1">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 bg-[#f9f8f6] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#d4a017]"/>
                  <span className="text-[9px] font-bold tracking-[5px] text-[#d4a017] uppercase">Contact</span>
                </div>
                <h2 style={{fontFamily:'Georgia,serif'}} className="text-[52px] font-light text-[#0f172a] leading-tight tracking-tight mb-6">
                  Bring us a<br/>hard <em style={{fontStyle:'italic',color:'#d4a017'}}>problem.</em>
                </h2>
                <p className="text-[15px] text-[#64748b] font-light leading-[1.9] max-w-sm mb-14">
                  Tell us what you're trying to solve. We'll tell you honestly if and how we can help.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 border-b border-[#ececec] pb-8">
                    <Mail className="w-5 h-5 text-[#d4a017] mt-1 flex-shrink-0"/>
                    <div>
                      <p className="text-[9px] font-bold tracking-[3px] text-[#0f172a] uppercase mb-2">Email</p>
                      <a href="mailto:contact@bramhaastech.com" className="text-[16px] font-light text-[#0f172a] hover:text-[#d4a017] transition-colors">contact@bramhaastech.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 border-b border-[#ececec] pb-8">
                    <MapPin className="w-5 h-5 text-[#d4a017] mt-1 flex-shrink-0"/>
                    <div>
                      <p className="text-[9px] font-bold tracking-[3px] text-[#0f172a] uppercase mb-2">Location</p>
                      <p className="text-[16px] font-light text-[#0f172a]">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f2f0ec] p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="h-full flex flex-col items-center justify-center text-center py-16">
                      <CheckCircle2 className="w-14 h-14 text-[#d4a017] mb-8"/>
                      <h3 style={{fontFamily:'Georgia,serif'}} className="text-[28px] font-light text-[#0f172a] mb-4">Message received.</h3>
                      <p className="text-[14px] text-[#64748b] mb-10 font-light">We will be in touch soon.</p>
                      <button className="text-[10px] font-bold tracking-[3px] uppercase border border-[#0f172a] px-6 py-3 text-[#0f172a] hover:bg-[#1a0d2e] hover:text-[#f9f8f6] transition-all" onClick={() => setSubmitted(false)}>
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                      <h3 className="text-[10px] font-bold tracking-[4px] uppercase text-[#0f172a] mb-10">Start a Conversation</h3>
                      <form ref={formRef} className="space-y-7" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="text-[9px] font-bold tracking-[3px] uppercase text-[#94a3b8] block mb-2">First Name</label>
                            <input required name="first_name" className="w-full bg-transparent border-b border-[#d8d4e0] py-3 text-[14px] text-[#0f172a] outline-none focus:border-[#d4a017] transition-colors placeholder:text-[#ccc]" placeholder="—"/>
                          </div>
                          <div>
                            <label className="text-[9px] font-bold tracking-[3px] uppercase text-[#94a3b8] block mb-2">Last Name</label>
                            <input required name="last_name" className="w-full bg-transparent border-b border-[#d8d4e0] py-3 text-[14px] text-[#0f172a] outline-none focus:border-[#d4a017] transition-colors placeholder:text-[#ccc]" placeholder="—"/>
                          </div>
                        </div>
                        <div>
                          <label className="text-[9px] font-bold tracking-[3px] uppercase text-[#94a3b8] block mb-2">Work Email</label>
                          <input required type="email" name="user_email" className="w-full bg-transparent border-b border-[#d8d4e0] py-3 text-[14px] text-[#0f172a] outline-none focus:border-[#d4a017] transition-colors placeholder:text-[#ccc]" placeholder="—"/>
                        </div>
                        <div>
                          <label className="text-[9px] font-bold tracking-[3px] uppercase text-[#94a3b8] block mb-2">Area of Work</label>
                          <select name="domain" className="w-full bg-transparent border-b border-[#d8d4e0] py-3 text-[14px] text-[#0f172a] outline-none focus:border-[#d4a017] transition-colors appearance-none">
                            <option>Embedded Systems</option>
                            <option>AI / ML & Data Science</option>
                            <option>Hardware Design</option>
                            <option>IT Engineering</option>
                            <option>High Performance Computing</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[9px] font-bold tracking-[3px] uppercase text-[#94a3b8] block mb-2">What are you trying to solve?</label>
                          <textarea required rows={4} name="message" className="w-full bg-transparent border-b border-[#d8d4e0] py-3 text-[14px] text-[#0f172a] outline-none focus:border-[#d4a017] transition-colors resize-none placeholder:text-[#ccc]" placeholder="—"/>
                        </div>
                        <button type="submit" disabled={submitting}
                          className="w-full bg-[#1a0d2e] text-[#f9f8f6] py-5 text-[10px] font-bold tracking-[4px] uppercase hover:bg-[#d4a017] hover:text-[#1a0d2e] transition-all duration-300 disabled:opacity-60">
                          {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {submitError && (
                          <p className="text-[11px] text-red-500 text-center mt-4">Something went wrong. Please email us directly at contact@bramhaastech.com</p>
                        )}
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1a0d2e] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-14 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-7">
                <Logo size={36} dark={true}/>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-[15px] tracking-[3px] text-white">BRAMHAAS</span>
                  <span className="text-[8px] tracking-[5px] font-bold text-[#d4a017] mt-0.5">TECH</span>
                </div>
              </div>
              <p className="text-[13px] text-white/40 font-light leading-relaxed max-w-sm">
                High-precision engineering. Built for the long run.
              </p>
            </div>
            <div>
              <h4 className="text-[9px] font-bold tracking-[4px] text-[#d4a017] uppercase mb-7">Engineering</h4>
              <ul className="space-y-4">
                {['Embedded Systems','AI, ML & Data Science','Hardware Design','IT Engineering','High Performance Computing'].map(item => (
                  <li key={item}><a href="#services" className="text-[12px] text-white/40 hover:text-white transition-colors font-light">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] font-bold tracking-[4px] text-[#d4a017] uppercase mb-7">Company</h4>
              <ul className="space-y-4">
                {[['Vision','#about'],['Expertise','#expertise'],['Workflow','#process'],['Contact','#contact']].map(([name,href]) => (
                  <li key={name}><a href={href} className="text-[12px] text-white/40 hover:text-white transition-colors font-light">{name}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-white/20 tracking-[2px] uppercase">© Bramhaas Tech Pvt Ltd. All rights reserved.</p>
            <p className="text-[10px] text-white/20 tracking-[2px] uppercase">Pune, Maharashtra, India</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
