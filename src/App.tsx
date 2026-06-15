import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, MapPin, Menu, X, CheckCircle2,
  ArrowRight, Globe, ShieldCheck, Layers
} from 'lucide-react';

const IconEmbedded = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="11" width="10" height="10" rx="0.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="8" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="8" y1="16" x2="5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="8" y1="20" x2="5" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="24" y1="12" x2="27" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="24" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="24" y1="20" x2="27" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="12" y1="8" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="16" y1="8" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="20" y1="8" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="12" y1="24" x2="12" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="16" y1="24" x2="16" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="20" y1="24" x2="20" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
);

const IconHardware = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="24" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="8" y1="10" x2="8" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="12" y1="10" x2="12" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="16" y1="10" x2="16" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="20" y1="10" x2="20" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="24" y1="10" x2="24" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="9" y1="7" x2="9" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="13" y1="7" x2="13" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="17" y1="7" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="21" y1="7" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="9" y1="22" x2="9" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="13" y1="22" x2="13" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="17" y1="22" x2="17" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="21" y1="22" x2="21" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <rect x="6" y="13" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const IconHPC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="3" fill="currentColor"/>
    <line x1="16" y1="5" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="16" y1="19" x2="16" y2="27" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="5" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="19" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="7.9" y1="7.9" x2="13.8" y2="13.8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18.2" y1="18.2" x2="24.1" y2="24.1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="24.1" y1="7.9" x2="18.2" y2="13.8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="13.8" y1="18.2" x2="7.9" y2="24.1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconAI = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="7" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="25" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="13.4" y1="10.8" x2="9.2" y2="19.6" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18.6" y1="10.8" x2="22.8" y2="19.6" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="10" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
    <line x1="14.8" y1="14.8" x2="9.5" y2="20.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5"/>
    <line x1="17.2" y1="14.8" x2="22.5" y2="20.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5"/>
  </svg>
);

const IconIT = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5" width="24" height="15" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="17" x2="28" y2="17" stroke="currentColor" strokeWidth="1"/>
    <rect x="7" y="8" width="5" height="3" rx="0.5" stroke="currentColor" strokeWidth="1"/>
    <rect x="14" y="8" width="5" height="3" rx="0.5" stroke="currentColor" strokeWidth="1"/>
    <circle cx="23" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="12" y1="20" x2="10" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="20" y1="20" x2="22" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="8" y1="25" x2="24" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
  </svg>
);

const IconPrototyping = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5 L12 14 L8 20 L8 27 L24 27 L24 20 L20 14 L20 5 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="12" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <line x1="10" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="1"/>
    <circle cx="16" cy="22" r="2" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="14" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1.5"/>
  </svg>
);

const IconCompliant = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4 L26 8 L26 18 C26 23 21 27 16 28 C11 27 6 23 6 18 L6 8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <polyline points="11,16 14.5,19.5 21,13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconAdaptive = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="26" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="6" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="26" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="8.2" y1="11.2" x2="13" y2="14" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="23.8" y1="11.2" x2="19" y2="14" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="8.2" y1="20.8" x2="13" y2="18" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="23.8" y1="20.8" x2="19" y2="18" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const IconRigorous = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="10" width="12" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="13.5" y="13.5" width="5" height="5" rx="0.3" stroke="currentColor" strokeWidth="1"/>
    <line x1="6" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="1"/>
    <line x1="22" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1"/>
    <line x1="16" y1="6" x2="16" y2="10" stroke="currentColor" strokeWidth="1"/>
    <line x1="16" y1="22" x2="16" y2="26" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const IconIoT = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M8.5 8.5 C5 11 5 21 8.5 23.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M23.5 8.5 C27 11 27 21 23.5 23.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M11 5.5 C6 8.5 6 23.5 11 26.5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
    <path d="M21 5.5 C26 8.5 26 23.5 21 26.5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);


const SERVICES = [
  { title:"Embedded Systems & IoT", description:"Rigorous firmware development, hardware-software integration and end-to-end IoT solutions for industrial and connected deployments.", icon:<IconEmbedded/>, features:["RTOS Implementation","Bare Metal Dev","FPGA Integration","IoT Connectivity"] },
  { title:"Hardware Design", description:"Technical PCB engineering for high-performance systems requiring extreme reliability and efficiency.", icon:<IconHardware/>, features:["High-Speed Design","Design for Mfg","Power Mgmt","EMI Shielding"] },
  { title:"High Performance Computing", description:"Designing and optimising systems that operate at the limits of computational capability. Real HPC experience, not theory.", icon:<IconHPC/>, features:["HPC Architecture","System Tuning","Precision Benchmarking","Performance Analysis"] },
  { title:"AI & ML", description:"Building intelligent systems that learn, adapt and decide. From edge inference to production model deployment.", icon:<IconAI/>, features:["Edge Intelligence","Model Optimization","Neural Architectures","MLOps & Deployment"] },
  { title:"IT Engineering", description:"Engineering the infrastructure that organisations depend on. Security, resilience, scale.", icon:<IconIT/>, features:["Secure Cloud","Network Ops","Infrastructure","DevOps Systems"] }
];

const NAV_LINKS = [
  { name:"Capability", href:"#services" },
  { name:"Expertise", href:"#expertise" },
  { name:"Workflow", href:"#process" },
  { name:"Vision", href:"#about" },
  { name:"Contact", href:"#contact" },
];

const PROCESS_STEPS = [
  {
    step:"01", title:"Audit & Analysis",
    description:"Deep technical assessment of the problem — before a single line is written.",
    img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    alt:"Technical audit"
  },
  {
    step:"02", title:"Architecture Design",
    description:"The blueprint comes before the build. Always.",
    img:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
    alt:"Architecture design"
  },
  {
    step:"03", title:"Core Engineering",
    description:"Where high-level thinking meets low-level precision.",
    img:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    alt:"Engineering"
  },
  {
    step:"04", title:"Validation Cycle",
    description:"We don't ship until we're certain. Then we validate again.",
    img:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    alt:"Validation"
  }
];

const EXPERTISE_CARDS = [
  { icon:<IconPrototyping/>, title:'Hardware', sub:'Prototyping Labs', offset:false },
  { icon:<IconCompliant/>, title:'Compliant', sub:'Global Standards', offset:true },
  { icon:<IconAdaptive/>, title:'Adaptive', sub:'AI Methodologies', offset:true },
  { icon:<IconRigorous/>, title:'Rigorous', sub:'Architectures', offset:false },
];

const Logo = ({ size = 36, dark = false }: { size?: number; dark?: boolean }) => (
  <img
    src={dark ? '/assets/mark_light.png' : '/assets/mark_light.png'}
    alt="Bramhaas Tech"
    width={size}
    height={size}
    style={{ objectFit:'contain', display:'block', mixBlendMode: dark ? 'screen' : 'multiply' }}
  />
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem('bt_cookie_consent');
    if (!consent) {
      const t = setTimeout(() => setCookieVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('bt_cookie_consent', 'accepted');
    setCookieVisible(false);
    // Load GA immediately after consent
    if (!(window as any).gtag) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=G-W1P64STVKM';
      document.head.appendChild(s);
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]){ (window as any).dataLayer.push(args); }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-W1P64STVKM');
    }
  };

  const declineCookies = () => {
    localStorage.setItem('bt_cookie_consent', 'declined');
    setCookieVisible(false);
  };

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
              <span className="font-black text-[15px] tracking-[3px] text-[#0f172a] relative">
                BRAMHAAS
                <span className={`absolute -bottom-[2px] left-0 h-[1.5px] bg-[#d4a017] transition-all duration-700 ${scrolled ? 'w-full' : 'w-0'}`}/>
              </span>
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
        <section className="min-h-screen flex items-center bg-[#f7f5f2] relative overflow-hidden">

          {/* Corner brackets */}
          <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#d4a017]/30 pointer-events-none z-20"/>
          <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#d4a017]/30 pointer-events-none z-20"/>

          {/* Gold top rule — draws in */}
          <motion.div
            initial={{scaleX:0}} animate={{scaleX:1}}
            transition={{duration:1.4, ease:[0.25,0.46,0.45,0.94], delay:0.15}}
            style={{transformOrigin:'center'}}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a017] to-transparent opacity-45 z-20"
          />

          {/* Subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{backgroundImage:'radial-gradient(circle, #1a0d2e 1px, transparent 1px)', backgroundSize:'44px 44px', opacity:0.027}}/>

          {/* ── LEFT CONTENT ── */}
          <div className="max-w-7xl mx-auto px-8 w-full pt-28 pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>

                {/* Live pulsing tag */}
                <motion.div
                  initial={{opacity:0, y:12}} animate={{opacity:1, y:0}}
                  transition={{duration:0.6, delay:0.35}}
                  className="inline-flex items-center gap-2 mb-9"
                  style={{border:'0.5px solid rgba(212,160,23,0.4)', padding:'6px 14px 6px 10px'}}
                >
                  <motion.div
                    animate={{scale:[1,0.65,1], opacity:[1,0.4,1]}}
                    transition={{duration:2, repeat:Infinity, ease:'easeInOut'}}
                    style={{width:5, height:5, background:'#d4a017', borderRadius:'50%', flexShrink:0}}
                  />
                  <span className="text-[8.5px] font-bold tracking-[3px] text-[#d4a017] uppercase">Advanced Engineering Systems</span>
                </motion.div>

                {/* Headline — each word slides up */}
                <div className="mb-6">
                  {[
                    {text:'Precision', cls:'font-light text-[#0f172a]'},
                    {text:'meets',     cls:'italic text-[#d4a017]'},
                    {text:'innovation.',cls:'font-semibold text-[#0f172a]'},
                  ].map((line, i) => (
                    <motion.div key={line.text}
                      initial={{opacity:0, y:42}} animate={{opacity:1, y:0}}
                      transition={{duration:0.8, delay:0.42 + i*0.13, ease:[0.16,1,0.3,1]}}
                      style={{display:'block', overflow:'hidden'}}
                    >
                      <span
                        className={`block text-[72px] leading-[1.02] tracking-[-2px] ${line.cls}`}
                        style={{fontFamily:'Georgia,serif'}}
                      >{line.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Gold divider line */}
                <motion.div
                  initial={{scaleX:0}} animate={{scaleX:1}}
                  transition={{duration:0.9, delay:0.85, ease:[0.25,0.46,0.45,0.94]}}
                  style={{transformOrigin:'left', height:1, background:'linear-gradient(to right, #d4a017, transparent)', marginBottom:20, width:200}}
                />

                {/* Description */}
                <motion.p
                  initial={{opacity:0, y:16}} animate={{opacity:1, y:0}}
                  transition={{duration:0.7, delay:0.95, ease:[0.25,0.46,0.45,0.94]}}
                  className="text-[14px] text-[#64748b] leading-[1.9] font-light max-w-sm mb-10"
                >
                  Where rigorous engineering meets real-world problems. Built for what matters — not what is easy.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{opacity:0, y:16}} animate={{opacity:1, y:0}}
                  transition={{duration:0.7, delay:1.1, ease:[0.25,0.46,0.45,0.94]}}
                  className="flex items-center"
                >
                  <a href="#contact"
                    className="group relative bg-[#1a0d2e] text-[#f7f5f2] px-8 py-4 text-[10px] font-bold tracking-[3px] uppercase flex items-center gap-3 overflow-hidden"
                    style={{transition:'color 0.3s'}}
                    onMouseEnter={e => (e.currentTarget.style.color='#1a0d2e')}
                    onMouseLeave={e => (e.currentTarget.style.color='#f7f5f2')}
                  >
                    <span className="absolute inset-0 bg-[#d4a017] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{transform:'translateX(-101%)'}}
                      onMouseEnter={e => (e.currentTarget.style.transform='translateX(0)')}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      Start a Collaboration
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200"/>
                    </span>
                  </a>
                  <a href="#services"
                    className="px-7 py-4 text-[10px] font-bold tracking-[3px] uppercase text-[#0f172a] hover:text-[#d4a017] transition-colors duration-300 flex items-center gap-2">
                    Our Capability
                    <motion.span animate={{x:[0,4,0]}} transition={{repeat:Infinity, duration:2, ease:'easeInOut'}}>→</motion.span>
                  </a>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{opacity:0}} animate={{opacity:1}}
                  transition={{duration:0.8, delay:1.25}}
                  className="flex items-center gap-3 mt-10"
                >
                  <div className="w-5 h-[1px] bg-[#d4a017] opacity-50"/>
                  <span className="text-[8px] font-semibold tracking-[4px] text-[#bbb] uppercase">Pune · India</span>
                </motion.div>



              </div>

              {/* Right column — orbital visual */}
              <motion.div
                initial={{opacity:0, scale:0.92}} animate={{opacity:1, scale:1}}
                transition={{duration:1.2, delay:0.3, ease:[0.16,1,0.3,1]}}
                className="hidden lg:flex items-center justify-center"
                style={{height:'560px', position:'relative'}}
              >
                <div style={{width:'520px', height:'520px', position:'relative', flexShrink:0}}>

                  <motion.div animate={{rotate:360}} transition={{duration:90, repeat:Infinity, ease:'linear'}}
                    style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
                      <ellipse cx="260" cy="260" rx="242" ry="155" stroke="#d4a017" strokeWidth="0.7" strokeDasharray="7 18" opacity="0.22"/>
                      <line x1="260" y1="12" x2="260" y2="32" stroke="#d4a017" strokeWidth="2.5" opacity="0.45"/>
                      <line x1="260" y1="488" x2="260" y2="508" stroke="#d4a017" strokeWidth="2.5" opacity="0.3"/>
                      <line x1="12" y1="260" x2="32" y2="260" stroke="#d4a017" strokeWidth="2.5" opacity="0.22"/>
                      <line x1="488" y1="260" x2="508" y2="260" stroke="#d4a017" strokeWidth="2.5" opacity="0.38"/>
                    </svg>
                  </motion.div>

                  <motion.div animate={{rotate:-360}} transition={{duration:55, repeat:Infinity, ease:'linear'}}
                    style={{position:'absolute', inset:'32px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <svg width="456" height="456" viewBox="0 0 456 456" fill="none">
                      <ellipse cx="228" cy="228" rx="212" ry="135" stroke="#1a0d2e" strokeWidth="0.8" opacity="0.05"/>
                      <ellipse cx="228" cy="228" rx="212" ry="135" stroke="#d4a017" strokeWidth="0.6" strokeDasharray="4 14" opacity="0.13"/>
                    </svg>
                  </motion.div>

                  <motion.div animate={{rotate:360}} transition={{duration:30, repeat:Infinity, ease:'linear'}}
                    style={{position:'absolute', inset:'86px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <svg width="348" height="348" viewBox="0 0 348 348" fill="none">
                      <ellipse cx="174" cy="174" rx="158" ry="100" stroke="#d4a017" strokeWidth="0.5" strokeDasharray="3 11" opacity="0.11"/>
                      <circle cx="174" cy="74" r="5" fill="#d4a017" opacity="0.65"/>
                      <circle cx="174" cy="74" r="10" fill="#d4a017" opacity="0.1"/>
                    </svg>
                  </motion.div>

                  <svg width="820" height="820" viewBox="0 0 520 520" fill="none" style={{position:'absolute', inset:0}}>
                    <motion.line x1="260" y1="18" x2="260" y2="502" stroke="#d4a017" strokeWidth="0.9" opacity="0.2"
                      initial={{pathLength:0}} animate={{pathLength:1}}
                      transition={{duration:1.6, delay:0.85, ease:[0.25,0.46,0.45,0.94]}}/>
                    <motion.line x1="136" y1="158" x2="384" y2="158" stroke="#d4a017" strokeWidth="2.8" opacity="0.38"
                      initial={{pathLength:0}} animate={{pathLength:1}}
                      transition={{duration:1.0, delay:1.15, ease:[0.25,0.46,0.45,0.94]}}/>
                    <motion.line x1="136" y1="150" x2="136" y2="166" stroke="#d4a017" strokeWidth="2" opacity="0.5"
                      initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:1.5, duration:0.3}}/>
                    <motion.line x1="384" y1="150" x2="384" y2="166" stroke="#d4a017" strokeWidth="2" opacity="0.5"
                      initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:1.5, duration:0.3}}/>
                    <motion.rect x="248" y="248" width="24" height="24" fill="#d4a017" opacity="0.14"
                      transform="rotate(45 260 260)"
                      initial={{scale:0, opacity:0}} animate={{scale:1, opacity:0.14}}
                      transition={{delay:1.38, duration:0.5, ease:[0.34,1.56,0.64,1]}}/>
                    <motion.rect x="252" y="252" width="16" height="16" fill="none" stroke="#d4a017" strokeWidth="1.8" opacity="0.65"
                      transform="rotate(45 260 260)"
                      initial={{scale:0, opacity:0}} animate={{scale:1, opacity:0.65}}
                      transition={{delay:1.52, duration:0.5, ease:[0.34,1.56,0.64,1]}}/>
                  </svg>

                  <motion.div
                    initial={{opacity:0, scale:0.88}} animate={{opacity:1, scale:1}}
                    transition={{duration:1.3, delay:0.45, ease:[0.16,1,0.3,1]}}
                    style={{position:'absolute', top:'0%', left:'0%', transform:'translate(-50%,-50%)', zIndex:5}}
                  >
                    <div style={{position:'absolute', inset:'40px', borderRadius:'50%',
                      background:'radial-gradient(ellipse 58% 55% at 50% 54%, rgba(212,160,23,0.09) 0%, transparent 68%)'}}/>
                    <img
                      src="/assets/mark_light.png"
                      alt="Bramhaas Tech"
                      style={{
                        width: '500px',
                        height: '500px',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        opacity: 0.93,
                        display: 'block',
                        position: 'relative',
                        zIndex: 1,
                        marginTop: '-50px' // adjust as needed
                      }}
                    />
                                      </motion.div>

                  {[
                    {x:257, y:36,  r:3,   delay:1.55, op:0.5},
                    {x:257, y:472, r:2,   delay:1.75, op:0.3},
                    {x:488, y:255, r:2.5, delay:1.65, op:0.4},
                    {x:10,  y:248, r:1.8, delay:1.85, op:0.22},
                    {x:404, y:82,  r:2,   delay:1.95, op:0.32},
                    {x:82,  y:392, r:1.5, delay:2.05, op:0.2},
                  ].map((p, i) => (
                    <motion.div key={i}
                      initial={{opacity:0, scale:0}} animate={{opacity:p.op, scale:1}}
                      transition={{delay:p.delay, duration:0.4, ease:[0.34,1.56,0.64,1]}}
                      style={{position:'absolute', left:p.x-p.r, top:p.y-p.r, width:p.r*2, height:p.r*2, borderRadius:'50%', background:'#d4a017'}}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.85, duration:0.8}}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[7.5px] tracking-[4px] text-[#ccc] uppercase">Scroll</span>
            <motion.div
              animate={{y:[0,7,0], opacity:[0.6,1,0.6]}}
              transition={{repeat:Infinity, duration:2, ease:'easeInOut'}}
              className="w-[1px] h-7 bg-gradient-to-b from-[#d4a017] to-transparent"
            />
          </motion.div>
        </section>

        {/* DOMAIN STRIP */}
        <div className="bg-[#1a0d2e] py-5 overflow-hidden">
          <div className="flex gap-16 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, i) =>
              ['EMBEDDED SYSTEMS & IOT','AI · ML','HARDWARE DESIGN','IT ENGINEERING','HPC','BRAMHAAS TECH · PUNE'].map(t => (
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
                  {/* Icon with geometric container */}
                  <div className="mb-8 relative w-14 h-14">
                    <div className="absolute inset-0 border border-[#e2ddd8] group-hover:border-[#d4a017]/30 transition-colors duration-500 rotate-45"/>
                    <div className="absolute inset-[6px] border border-[#d4a017]/20 group-hover:border-[#d4a017]/50 transition-colors duration-500 rotate-45"/>
                    <div className="absolute inset-0 flex items-center justify-center text-[#0f172a] group-hover:text-[#d4a017] transition-colors duration-500">
                      {s.icon}
                    </div>
                  </div>
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
              {/* Expertise cards — with hover highlight */}
              <div className="grid grid-cols-2 gap-[1px] bg-[#e8e6e0]">
                {EXPERTISE_CARDS.map((item) => (
                  <div key={item.title}
                    className={`bg-[#f9f8f6] p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a0d2e] transition-all duration-500 cursor-default ${item.offset ? 'translate-y-4' : ''}`}>
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 border border-[#e2ddd8] group-hover:border-[#d4a017]/30 transition-colors duration-500 rotate-45"/>
                      <div className="absolute inset-0 flex items-center justify-center text-[#0f172a] group-hover:text-[#d4a017] transition-colors duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-[11px] font-bold tracking-widest text-[#0f172a] group-hover:text-[#f9f8f6] uppercase mb-1 transition-colors duration-500">{item.title}</div>
                    <div className="text-[10px] text-[#aaa] group-hover:text-[#d4a017]/70 uppercase tracking-wider transition-colors duration-500">{item.sub}</div>
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
                  className="bg-[#f9f8f6] group hover:bg-[#1a0d2e] transition-all duration-500 cursor-default overflow-hidden">
                  {/* Step image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Step number overlay on image */}
                    <div className="absolute top-4 left-4">
                      <span style={{fontFamily:'Georgia,serif'}} className="text-[48px] font-light text-white/80 leading-none">{step.step}</span>
                    </div>
                    {/* Gold bottom line on image */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4a017] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
                  </div>
                  <div className="p-8">
                    <div className="w-6 h-[2px] bg-[#d4a017] mb-5"/>
                    <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#0f172a] group-hover:text-[#f9f8f6] mb-4 transition-colors duration-500">{step.title}</h3>
                    <p className="text-[12px] text-[#94a3b8] group-hover:text-white/50 leading-relaxed transition-colors duration-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-32 bg-[#1a0d2e] scroll-mt-20 relative overflow-hidden">
          {/* Decorative geometric background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="#d4a017"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"/>
            </svg>
          </div>
          {/* Large decorative quote mark */}
          <div className="absolute top-8 left-8 opacity-5" style={{fontFamily:'Georgia,serif',fontSize:'240px',color:'#d4a017',lineHeight:1}}>"</div>

          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 mb-24">
              {[
                { num:'10+', label:'Years of combined engineering experience', small:false },
                { num:'∀', label:'Every problem we take on, we own completely', small:true },
                { num:'1', label:'Standard of work. World class or nothing.', small:false },
              ].map((item) => (
                <div key={item.num} className="bg-[#1a0d2e] p-10 text-center group hover:bg-[#221040] transition-colors duration-300">
                  <div style={{fontFamily:'Georgia,serif'}} className={`font-light text-[#d4a017] leading-none mb-4 ${item.small ? 'text-[44px]' : 'text-[64px]'}`}>{item.num}</div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-light uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy cards — with left accent bar and subtle hover */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title:'Depth over breadth.', body:'When we take on a problem, we go deep. Into the architecture, the edge cases, the things others miss. You get engineers who think, not people who execute checklists.', icon:<Globe className="w-5 h-5"/> },
                { title:'We say what we mean.', body:'If a problem is not solvable the way you have imagined it, we will say so — and offer a better path. Honesty is not a policy here. It is how we work.', icon:<ShieldCheck className="w-5 h-5"/> },
                { title:'Built for generations.', body:'Every decision measured against one question: will we be proud of this in 20 years? If the answer is no, we do not do it.', icon:<Layers className="w-5 h-5"/> },
              ].map((item) => (
                <div key={item.title} className="bg-[#1a0d2e] p-10 border border-white/5 hover:border-[#d4a017]/20 transition-all duration-500 group relative overflow-hidden">
                  {/* Gold left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#d4a017]"/>
                  {/* Icon top right */}
                  <div className="absolute top-8 right-8 text-[#d4a017]/20 group-hover:text-[#d4a017]/40 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 style={{fontFamily:'Georgia,serif'}} className="text-[22px] font-light text-[#fafafa] mb-5 leading-tight italic pr-8">{item.title}</h3>
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
                            <option>Embedded Systems & IoT</option>
                            <option>AI / ML</option>
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
                {['Embedded Systems & IoT','AI & ML','Hardware Design','IT Engineering','High Performance Computing'].map(item => (
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

      {/* COOKIE BANNER */}
      <AnimatePresence>
        {cookieVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-2xl"
          >
            <div className="bg-[#1a0d2e] border border-white/10 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-2xl">
              {/* Gold left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#d4a017]"/>
              {/* Cookie icon */}
              <div className="flex-shrink-0 hidden sm:block">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="11" stroke="#d4a017" strokeWidth="1.5"/>
                  <circle cx="11" cy="12" r="1.5" fill="#d4a017"/>
                  <circle cx="19" cy="10" r="1" fill="#d4a017"/>
                  <circle cx="20" cy="18" r="1.5" fill="#d4a017"/>
                  <circle cx="13" cy="20" r="1" fill="#d4a017"/>
                  <circle cx="16" cy="15" r="1" fill="rgba(212,160,23,0.4)"/>
                </svg>
              </div>
              {/* Text */}
              <p className="text-[12px] text-white/60 leading-relaxed font-light flex-1">
                We use cookies on our website to see how you interact with it.{' '}
                By accepting, you agree to our use of such cookies.
              </p>
              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={declineCookies}
                  className="text-[9px] font-bold tracking-[3px] uppercase text-white/40 hover:text-white/70 transition-colors duration-200 px-3 py-2">
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="text-[9px] font-bold tracking-[3px] uppercase bg-[#d4a017] text-[#1a0d2e] px-6 py-3 hover:bg-white hover:text-[#1a0d2e] transition-all duration-300">
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
