import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Menu, Linkedin, Twitter, Instagram, CheckCircle2, Clock, Users, GraduationCap, Sparkles, Rocket, Calendar, ArrowRight } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export default function ProgrammesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllContributors, setShowAllContributors] = useState(false);
  const testimonialsRef = useRef(null);
  const testimonialsRef2 = useRef(null);

  // Track mobile viewport for mentor grid behavior
  useEffect(() => {
    const update = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Auto-scroll for testimonials
  useEffect(() => {
    const row1 = testimonialsRef.current;
    const row2 = testimonialsRef2.current;
    if (!row1 && !row2) return;

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const baseSpeed = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.25 : 0.6;

    const attachLoop = (el, speed, reverse = false) => {
      if (!el) return () => {};
      let rafId = 0;
      let half = 0;

      const computeHalf = () => { half = Math.max(1, el.scrollWidth / 2); };
      computeHalf();

      const onResize = () => { computeHalf(); };
      window.addEventListener('resize', onResize);

      const step = () => {
        if (!reverse) {
          el.scrollLeft += speed;
          if (el.scrollLeft >= half) el.scrollLeft -= half;
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) el.scrollLeft += half;
        }
        rafId = requestAnimationFrame(step);
      };
      const start = () => { if (!rafId) rafId = requestAnimationFrame(step); };
      const stop = () => { if (rafId) { cancelAnimationFrame(rafId); rafId = 0; } };
      const timer = setTimeout(start, 700);
      el.addEventListener('mouseenter', stop);
      el.addEventListener('mouseleave', start);
      return () => { clearTimeout(timer); stop(); el.removeEventListener('mouseenter', stop); el.removeEventListener('mouseleave', start); window.removeEventListener('resize', onResize); };
    };

    const cleanups = [attachLoop(row1, baseSpeed, false), attachLoop(row2, baseSpeed * 0.85, true)];
    return () => { cleanups.forEach(fn => fn && fn()); };
  }, []);

  // Highlight helper for terms inside quotes
  const highlightTerm = (text, term) => {
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((p, i) =>
      p.toLowerCase() === term.toLowerCase() ? <span key={i} className="text-[#00ff88]">{p}</span> : <React.Fragment key={i}>{p}</React.Fragment>
    );
  };

  const programmes = [
    {
      id: "pre-accelerator",
      icon: Sparkles,
      title: "Founder Labs Pre-Accelerator",
      duration: "6 weeks",
      type: "Part-time",
      description: "A part-time pre-accelerator for innovation-driven tech ideas in NI. Refine your business model, validate your market, and expand your network.",
      forWhom: "Early-stage founders with a tech-based idea but limited validation",
      outcomes: [
        "Sharper value proposition and customer segment",
        "First experiments and validation",
        "Clear path to Accelerator, RTE, or Techstars"
      ],
      highlight: "Funded by Invest NI"
    },
    {
      id: "accelerator",
      icon: Rocket,
      title: "Founder Labs Accelerator",
      duration: "6 months",
      type: "Full-time",
      description: "A full-time accelerator backing high-potential, technology-based startups across NI. Intensive mentoring, funding to focus, and global network access.",
      forWhom: "Ambitious startups targeting £1m+ revenue/funding by year 3, with 60%+ sales outside NI",
      outcomes: [
        "Investment-ready, globally scalable business",
        "Pre-seed/seed round preparation",
        "Access to all-island and global investor networks"
      ],
      highlight: "Direct funding support included"
    },
    {
      id: "techstars",
      icon: Users,
      title: "Techstars Startup Community",
      duration: "4-year partnership",
      type: "Various formats",
      description: "A full stack of community products through our Techstars partnership: Startup Weekend (54-hour events), Startup Week (5-day festival), Startup Digest, and Founder Catalyst.",
      forWhom: "Anyone curious about startups, from first-timers to experienced founders",
      outcomes: [
        "~400 startup ideas launched over 4 years",
        "~40 companies pre-accelerated",
        "1000+ community members engaged"
      ],
      highlight: "Global Techstars network access"
    },
    {
      id: "rte",
      icon: GraduationCap,
      title: "RAEng Regional Talent Engine",
      duration: "6 months",
      type: "Competitive",
      description: "Equity-free pre-accelerator from the Royal Academy of Engineering for early-stage engineering and tech entrepreneurs. Includes £20,000 grant for living costs.",
      forWhom: "Engineering and technology founders in NI, Northern England, and Wales",
      outcomes: [
        "£20,000 equity-free grant",
        "Intensive workshops and 1:1 coaching",
        "Lifetime access to RAEng co-working spaces UK-wide"
      ],
      highlight: "£20k equity-free grant"
    },
    {
      id: "fellowship",
      icon: Sparkles,
      title: "Zero Point Fellowship",
      duration: "6-8 weeks",
      type: "AI-Native Focus",
      description: "An EF-style talent engine focused on AI-native founders. Curated co-founder matching, problem discovery, and a clear path to investment.",
      forWhom: "AI/ML engineers, data scientists, technical leads, and domain experts wanting to team with technologists",
      outcomes: [
        "Co-founder matching with complementary skills",
        "AI opportunity space workshops",
        "Path to Founder Labs Accelerator or micro-fund"
      ],
      highlight: "Intentionally small and selective"
    }
  ];

  const contributors = [
    { name: "Alan Carson", image: "/people/alancarson.jpg", linkedin: "#" },
    { name: "Amy Tez", image: "/people/amytez.jpeg", linkedin: "#" },
    { name: "Andrew Sheffield", image: "/people/andrewsheffield.jpeg", linkedin: "#" },
    { name: "Andrew Steele", image: "/people/andrewsteele.jpeg", linkedin: "#" },
    { name: "Andrew Trimble", image: "/people/andrewtrimble.jpg", linkedin: "#" },
    { name: "Carmen Alfonso Rico", image: "/people/carmen.jpg", linkedin: "#" },
    { name: "Gina London", image: "/people/ginalondon.jpg", linkedin: "#" },
    { name: "Laura Haldane", image: "/people/laurahaldane.jpeg", linkedin: "#" },
    { name: "David Singleton", image: "/people/davidsingleton.jpg", linkedin: "#" },
    { name: "DC Cahalane", image: "/people/dccahalane.jpeg", linkedin: "#" },
    { name: "Isabelle O'Keefe", image: "/people/isabelleokeefe.jpeg", linkedin: "#" },
    { name: "Jamie Heaslip", image: "/people/jamieheaslip.jpeg", linkedin: "#" },
    { name: "John Cassidy", image: "/people/johncassidy.jpeg", linkedin: "#" },
    { name: "John Collison", image: "/people/johncollison.jpeg", linkedin: "#" },
    { name: "Jon Bradford", image: "/people/jonbradford.jpg", linkedin: "#" },
    { name: "Lorraine Curham", image: "/people/lorrainecurham.jpeg", linkedin: "#" },
    { name: "Mark Fosdike", image: "/people/markfosdike.jpeg", linkedin: "#" },
    { name: "Martin McKay", image: "/people/martinmckay.jpeg", linkedin: "#" },
    { name: "Michael Black", image: "/people/michaelblack.jpeg", linkedin: "#" },
    { name: "Michelle Fogarty", image: "/people/michellefogarty.jpeg", linkedin: "#" },
    { name: "Nigel Eccles", image: "/people/nigeleccles.jpeg", linkedin: "#" },
    { name: "Oisin O'Hanrahan", image: "/people/oisiunohanrahan.jpeg", linkedin: "#" },
    { name: "Pat Collins", image: "/people/patcollins.jpeg", linkedin: "#" },
    { name: "Patrick Walsh", image: "/people/patrickwalsh.jpeg", linkedin: "#" },
    { name: "Sarah Friar", image: "/people/sarahfriar.jpeg", linkedin: "#" },
    { name: "Sean Blanchfield", image: "/people/seanblanchfield.jpeg", linkedin: "#" },
    { name: "Stephen Kelly", image: "/people/stephenkelly.jpeg", linkedin: "#" },
    { name: "Tadhg O'Leary", image: "/people/tadhgoleary.jpeg", linkedin: "#" },
    { name: "Toyosi Ogedengbe", image: "/people/toyosi.png", linkedin: "#" },
    { name: "Will McQuillan", image: "/people/williamquillan.png", linkedin: "#" },
  ];

  const testimonials = [
    {
      quote: "Founder Labs is like adding a super experienced set of co-founders to your team. We increased our MRR, raised capital and made our first hires in months.",
      name: "David",
      title: "CEO, Opinly",
      avatar: "/people/davidopinly.jpeg"
    },
    {
      quote: "We doubled prices, doubled customers and closed our first round. The cadence and quality of support changed our trajectory.",
      name: "Gareth",
      title: "CEO, Farmdrive",
      avatar: "/people/garethfarmdrive.jpg"
    },
    {
      quote: "Without Founder Labs we would've been back in day jobs long ago! FL raised our ambition levels, gave us structure and direction, warm intros you could only dream of and a group of other founders to be inspired and motivated by.",
      name: "Dan",
      title: "Founder, Liquid",
      avatar: "/people/danscott.jpeg"
    },
    {
      quote: "Without founder labs I would still be validating a concept. Instead I've talked to over 100 customers, pivoted twice, built two small MVPs, and currently prepping for a fundraise.",
      name: "Beth",
      title: "Founder, DevDay",
      avatar: "/people/bethglenfield.jpeg"
    },
    {
      quote: "Clear thinking and rigorous execution. We shipped faster and spoke to more users than ever before.",
      name: "Keiran",
      title: "Founder, Opinly",
      avatar: "/people/kieranmckenna.jpeg"
    },
    {
      quote: "Being a first-time founder is tough, but it doesn't have to be. Founder Labs is like having the insight of a second- or third-time founder built into your business.",
      name: "Chirag",
      title: "Founder, Lumion",
      avatar: "/people/chiragkumar.jpeg"
    },
    {
      quote: "Founder Labs believed in my idea, backed it with funding, mentorship, and world-class speakers, and gave me the confidence to walk into any room and talk about my business.",
      name: "Rachel",
      title: "Founder, Sergio",
      avatar: "/people/rachelbrammar.jpeg"
    },
    {
      quote: "Founder Labs unlocked more for us than just funding & knowledge. It was a launchpad for us to think bigger. Since then we've raised more money, supercharged our network, and even expanded into the US!",
      name: "Nick",
      title: "Founder, Lumion",
      avatar: "/people/nicklumion.jpeg"
    },
    {
      quote: "Between the core programme, wider ecosystem connections, international opportunities, and true inspiration from peer entrepreneurs... I would strongly recommend all new NI founders to get in contact.",
      name: "Ben",
      title: "Founder, Loquerion Security",
      avatar: "/people/benloquerion.jpeg"
    },
    {
      quote: "Founder Labs gave me seasoned founders in my corner, giving me clear direction on what really mattered, the confidence to act on it, and the reassurance that I could achieve it.",
      name: "Gillian",
      title: "Founder, Lastsay",
      avatar: "/people/gillianlastsay.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20" style={{
        backgroundImage:
          `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "80px 80px, 80px 80px",
        backgroundPosition: "0 0, 0 0",
      }} />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <a href="#/" className="h-8 w-8 grid place-content-center rounded-sm border border-[#00ff88] bg-black text-[#00ff88] font-black text-sm">ZP</a>
            <span className="hidden sm:block text-sm tracking-[0.2em] uppercase text-white/80">Zero Point</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider">
            <a href="#/programmes" className="text-white hover:text-white">Programmes</a>
            <a href="#/events" className="text-white/70 hover:text-white">Events</a>
            <a href="#/capital" className="text-white/70 hover:text-white">Capital</a>
            <a href="#/faq" className="text-white/70 hover:text-white">FAQ</a>
          </nav>
          <button aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(o => !o)} className="md:hidden p-2 rounded border border-white/15 text-white/80 hover:text-white hover:border-white/30">
            <Menu className="h-5 w-5" />
          </button>
      </Section>
    </header>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="md:hidden fixed right-4 top-14 z-50">
            <div className="bg-black/95 border border-white/15 rounded-md shadow-lg p-3 w-56 text-right">
              <a href="#/programmes" onClick={() => setMobileOpen(false)} className="block py-2 text-xs uppercase tracking-wider text-white/80 hover:text-white">Programmes</a>
              <a href="#/events" onClick={() => setMobileOpen(false)} className="block py-2 text-xs uppercase tracking-wider text-white/80 hover:text-white">Events</a>
              <a href="#/capital" onClick={() => setMobileOpen(false)} className="block py-2 text-xs uppercase tracking-wider text-white/80 hover:text-white">Capital</a>
              <a href="#/faq" onClick={() => setMobileOpen(false)} className="block py-2 text-xs uppercase tracking-wider text-white/80 hover:text-white">FAQ</a>
            </div>
          </div>
        </>
      )}

      {/* Hero */}
      <Section className="py-12 md:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight font-headline">
          Our <span className="text-[#00ff88]">Programmes</span>
        </h1>
        <p className="mt-4 text-xl text-white/80 max-w-3xl font-body leading-relaxed">
          From first idea to global scale. Zero Point runs and coordinates programmes that cover the entire founder journey — whether you're just curious or ready to raise.
        </p>
      </Section>

      {/* Programme Cards */}
      <Section className="pb-16">
        <div className="grid gap-8">
          {programmes.map((prog, i) => (
            <Card key={prog.id} className="rounded-2xl border border-white/10 bg-white/0 hover:border-white/20 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left side - Main info */}
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
                      <prog.icon className="h-6 w-6 text-[#00ff88]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-[10px] px-2 py-1 rounded bg-[#00ff88]/20 text-[#00ff88] uppercase tracking-wider font-medium">{prog.highlight}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white font-headline">{prog.title}</h2>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/60">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {prog.duration}</span>
                        <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {prog.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-white/70 font-body leading-relaxed">{prog.description}</p>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg border-l-2 border-[#00ff88]/50">
                    <div className="text-xs uppercase tracking-wider text-white/50 mb-1">Who it's for</div>
                    <div className="text-white/80 text-sm">{prog.forWhom}</div>
                  </div>
                </div>
                {/* Right side - Outcomes */}
                <div className="bg-white/5 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-4">What you get</div>
                  <ul className="space-y-3">
                    {prog.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#00ff88] mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm font-body">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Which programme is right for you */}
      <Section className="py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight font-headline text-center">Which programme is right for you?</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl mb-3">💡</div>
              <div className="font-semibold text-white mb-2">Just exploring?</div>
              <div className="text-white/70 text-sm">Start with Techstars Startup Weekend or community events to test if startup life is for you.</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl mb-3">🔬</div>
              <div className="font-semibold text-white mb-2">Have an idea?</div>
              <div className="text-white/70 text-sm">Apply to Founder Labs Pre-Accelerator or RAEng RTE to validate and get support to commit.</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl mb-3">🚀</div>
              <div className="font-semibold text-white mb-2">Ready to scale?</div>
              <div className="text-white/70 text-sm">The Founder Labs Accelerator takes you from early traction to investment-ready.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight font-headline text-center mb-6">What founders say</h3>
        <div className="relative">
          <div className="overflow-x-auto scrollbar-none" ref={testimonialsRef}>
            <div className="flex gap-4 min-w-max pb-2">
              {[...testimonials, ...testimonials.slice(1), testimonials[0]].map((t, i) => (
                <article key={`r1-${i}`} className="relative w-[20rem] sm:w-[26rem] flex-shrink-0 rounded-2xl border border-white/12 bg-white/5 backdrop-blur-sm p-6">
                  <blockquote className="text-white font-semibold leading-relaxed text-base sm:text-lg">
                    "{highlightTerm(t.quote, 'Founder Labs')}"
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/70" 
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-white/70 text-sm">{t.title}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-4 overflow-x-auto scrollbar-none" ref={testimonialsRef2}>
            <div className="flex gap-4 min-w-max pb-2">
              {(() => { const r = testimonials.slice().reverse(); return [...r, ...r.slice(1), r[0]]; })().map((t, i) => (
                <article key={`r2-${i}`} className="relative w-[20rem] sm:w-[26rem] flex-shrink-0 rounded-2xl border border-white/12 bg-white/5 backdrop-blur-sm p-6">
                  <blockquote className="text-white font-semibold leading-relaxed text-base sm:text-lg">
                    "{highlightTerm(t.quote, 'Founder Labs')}"
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/70" 
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-white/70 text-sm">{t.title}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/90 to-transparent" />
        </div>
      </Section>

      {/* Mentors & Supporters */}
      <Section className="py-16">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight font-headline mb-2 text-center">Mentors & Supporters</h3>
        <p className="text-center text-white/80 mb-6 max-w-4xl mx-auto font-body">
          Hundreds of people generously contribute their time. Below is just a sample of the world-class operators who support founders in our network.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {(isMobile && !showAllContributors ? contributors.slice(0, 8) : contributors).map((c, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10">
              <img src={c.image} alt={c.name} className="h-36 sm:h-48 w-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='flex';}} />
              <div className="hidden absolute inset-0 items-center justify-center bg-white/10">
                <div className="text-xl font-semibold tracking-tight text-white">{c.name.split(' ').map(w=>w[0]).join('').slice(0,3)}</div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-1 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-center">
                <div className="text-[11px] text-white/85 font-medium truncate px-1">{c.name}</div>
              </div>
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="mt-6 text-center">
            <button onClick={() => setShowAllContributors((v) => !v)} className="px-4 py-2 border border-white/25 text-white rounded-md text-xs uppercase tracking-wider">
              {showAllContributors ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </Section>

      {/* Partners */}
      <Section className="py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/10 to-transparent">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight font-headline text-center">Perks & Partners</h3>
          <p className="text-center text-white/80 mt-2">Over £500k in credits and support</p>
          <div className="mt-8 overflow-x-auto">
            <div className="flex space-x-10 items-center justify-start min-w-max px-2">
              <img src="/partners/openai.png" alt="OpenAI" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/perplexity.png" alt="Perplexity" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/anthropic.png" alt="Anthropic" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/microsoft.png" alt="Microsoft" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/stripe.png" alt="Stripe" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/google.png" alt="Google" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
              <img src="/partners/aws.png" alt="AWS" className="h-8 w-auto grayscale brightness-0 invert opacity-90" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-emerald-600/10 to-teal-600/10"></div>
          <div className="relative p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-headline mb-6">Ready to start your journey?</h2>
            <p className="text-xl text-white/90 font-body leading-relaxed mb-8">Get in touch to find the right programme for your stage and ambition.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:hello@zeropointni.com" className="bg-[#00ff88] text-black px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-[#00ff88]/90 transition-all transform hover:scale-105">Get in Touch</a>
              <a href="#/faq" className="border border-white/20 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-white/10 transition-all">Read FAQ</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10">
        <Section className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider text-white/60">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 grid place-content-center rounded-sm border border-[#00ff88] bg-black text-[#00ff88] font-black">ZP</div>
            <span className="text-sm tracking-[0.15em] text-white/80">Zero Point</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/joinfounderlabs" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/founderlabs__" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/founderlabs_" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <img src="/partners/InvestNI.png" alt="Invest Northern Ireland" className="h-16 sm:h-20 w-auto" />
          </div>
        </Section>
      </footer>
    </div>
  );
}
