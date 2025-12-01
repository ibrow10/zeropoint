import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Sparkles,
  Target,
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Building2,
  Menu,
  Linkedin,
  Twitter,
  Instagram,
  Layers,
  Network,
  GraduationCap,
  Banknote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Zero Point — Landing Page
 * Visual: full-page black grid, oversized uppercase typography, minimal borders, square CTA buttons.
 */

// ---------- Helpers ----------
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" }
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const StackCard = ({ icon: Icon, title, text, layer }) => (
  <Card className="rounded-2xl border border-white/10 bg-white/0 backdrop-blur-[1px] hover:border-white/20 transition-colors">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
          <Icon aria-hidden className="h-5 w-5 text-[#00ff88]" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/50">Layer {layer}</span>
          <CardTitle className="text-lg tracking-tight text-white">{title}</CardTitle>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-white/70 leading-relaxed font-body">{text}</p>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-headline">{value}</div>
    <div className="text-white/60 mt-1 uppercase text-xs tracking-wider font-body">{label}</div>
  </div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors">{children}</a>
);

// ---------- Main ----------
export default function ZeroPointLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const phrases = [
    "Build the ecosystem",
    "Connect ambitious founders",
    "Scale from Belfast",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, []);

  const words = phrases[idx].split(" ");

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* global grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "80px 80px, 80px 80px",
          backgroundPosition: "0 0, 0 0",
        }}
      />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <a href="#/" className="h-8 w-8 grid place-content-center rounded-sm border border-[#00ff88] bg-black text-[#00ff88] font-black text-sm">ZP</a>
            <span className="hidden sm:block text-sm tracking-[0.2em] uppercase text-white/80">Zero Point</span>
          </div>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
            <NavLink href="#/programmes">Programmes</NavLink>
            <NavLink href="#/events">Events</NavLink>
            <NavLink href="#/capital">Capital</NavLink>
            <NavLink href="#/faq">FAQ</NavLink>
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

      <main id="main">
        {/* HERO */}
        <div className="relative min-h-[88vh] overflow-hidden pt-12 pb-20">
          {/* Background Video (full-bleed) */}
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              src="/hero-background.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff88]/5 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-black/35"></div>
          </div>

          {/* Constrained content */}
          <Section className="grid content-center relative">
            <motion.div {...fadeUp} className="relative z-10">
              <div className="text-[14vw] sm:text-[9vw] font-extrabold tracking-tight uppercase leading-[0.9] font-headline">
                <div className="whitespace-nowrap"><span className="text-[#00ff88]">{words[0]}</span></div>
                <div className="text-white whitespace-nowrap">{words[1] ?? ''}</div>
                <div className="text-white whitespace-nowrap">{words.slice(2).join(' ')}</div>
              </div>
              <p className="mt-6 max-w-2xl text-white/70 text-base sm:text-lg font-body">
                A long-term, partner-driven platform that builds and connects Northern Ireland's startup ecosystem — from first idea to global scale — with a particular strength in AI-native, software-first companies.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#/programmes" className="inline-flex">
                  <Button size="lg" className="rounded-none border border-[#00ff88] bg-[#00ff88] text-black hover:bg-[#00ff88]/90">Explore Programmes</Button>
                </a>
                <a href="#/capital" className="inline-flex">
                  <Button size="lg" variant="ghost" className="rounded-none border border-white/20 bg-transparent text-white hover:bg-white/10">For Investors</Button>
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Stat value="400+" label="Startup ideas launched" />
                <Stat value="40+" label="Companies accelerated" />
                <Stat value="1000+" label="Community members" />
              </div>
              {/* Partner logos previewed in hero */}
              <div className="mt-6 pt-8 overflow-x-auto">
                <div className="flex space-x-8 px-1 py-2 items-center">
                  <img src="/partners/ormeaulabs.png" alt="Ormeau Labs" className="h-6 sm:h-8 w-auto grayscale brightness-0 invert opacity-90" />
                  <img src="/partners/qub.png" alt="Queen's University Belfast" className="h-6 sm:h-8 w-auto grayscale brightness-0 invert opacity-90" />
                  <img src="/partners/dogpatch.png" alt="Dogpatch Labs" className="h-6 sm:h-8 w-auto grayscale brightness-0 invert opacity-90" />
                  <img src="/partners/the-amp.png" alt="The AMP" className="h-6 sm:h-8 w-auto grayscale brightness-0 invert opacity-90" />
                </div>
              </div>
            </motion.div>
          </Section>
        </div>

        {/* What is Zero Point */}
        <Section id="what-is-zero-point" className="pt-12 md:pt-16 pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: What is Zero Point */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase max-w-3xl font-headline">What is <span className="text-[#00ff88]">Zero Point</span></h2>
              <p className="mt-3 text-white/70 font-body leading-relaxed">
                Zero Point is the evolution of Founder Labs into a whole-ecosystem platform for Northern Ireland. We're not just an accelerator or a fund — we're the system orchestrator for NI's startup stack.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5"><Layers className="h-4 w-4 text-[#00ff88]" /></div>
                  <div>
                    <div className="font-medium text-white">Runs Programmes</div>
                    <div className="text-sm text-white/60">Founder Labs, Techstars community products, RAEng Regional Talent Engine</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5"><Network className="h-4 w-4 text-[#00ff88]" /></div>
                  <div>
                    <div className="font-medium text-white">Orchestrates Partners</div>
                    <div className="text-sm text-white/60">Ormeau Labs, QUB, Ulster University, Dogpatch Labs, Techstars, RAEng</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5"><Banknote className="h-4 w-4 text-[#00ff88]" /></div>
                  <div>
                    <div className="font-medium text-white">Provides Capital</div>
                    <div className="text-sm text-white/60">Zero Point Capital I micro-fund for AI-native pre-seed/seed rounds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quote card */}
            <div className="relative">
              <div className="relative max-w-xl md:ml-auto">
                <div className="absolute -top-6 -right-6 z-20">
                  <img
                    src="/people/davidopinly.jpeg"
                    alt="David, CEO Opinly"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-white/70 shadow-2xl object-cover bg-white"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-3xl border border-white/20 bg-black/60 backdrop-blur-md p-6 pr-24 shadow-2xl">
                  <blockquote className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                    "The ecosystem support changed everything. We increased our MRR, raised capital and made our first hires — all within a few months."
                  </blockquote>
                  <div className="mt-4 text-white/85 text-sm">
                    <span className="font-bold">David</span>, CEO Opinly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* The Zero Point Stack */}
        <Section id="zero-point-stack" className="py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase font-headline">The Zero Point <span className="text-[#00ff88]">Stack</span></h2>
            <p className="mt-3 text-white/70 font-body">Four interconnected layers that address critical gaps in NI's ecosystem. Zero Point makes these layers coherent and connected.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <StackCard
              icon={Lightbulb}
              layer="1"
              title="Inspiration & Community"
              text="Techstars Startup Weekend, Startup Week, Startup Digest, and regular meetups at Ormeau Labs. Getting thousands thinking about startups."
            />
            <StackCard
              icon={Users}
              layer="2"
              title="Talent & Team Formation"
              text="RAEng Regional Talent Engine, Zero Point Fellowship for AI-native founders, and university talent pathways. Turning curious people into founders."
            />
            <StackCard
              icon={Rocket}
              layer="3"
              title="Venture Creation & Acceleration"
              text="Founder Labs Pre-Accelerator and Accelerator. Turning teams with ideas into investable, globally-oriented startups."
            />
            <StackCard
              icon={TrendingUp}
              layer="4"
              title="Capital & Global Connections"
              text="Zero Point Capital I micro-fund, integration with grants and VCs, and curated trips to London and NYC for top teams."
            />
          </div>
        </Section>

        {/* Who will you hear from */}
        <Section id="who-will-you-hear-from" className="py-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase max-w-3xl font-headline">Who will you hear from</h2>
            <p className="mt-3 text-white/70 font-body">World-class mentors and operators who have walked the path</p>
          </div>
          <div className="mt-8 overflow-x-auto scrollbar-none">
            <div className="flex animate-scroll-fast space-x-6 min-w-max">
              {[
                { name: "Sarah Friar", image: "/people/sarahfriar.jpeg" },
                { name: "David Singleton", image: "/people/davidsingleton.jpg" },
                { name: "Jon Bradford", image: "/people/jonbradford.jpg" },
                { name: "Toyosi Ogedengbe", image: "/people/toyosi.png" },
                { name: "Alan Carson", image: "/people/alancarson.jpg" },
                { name: "Carmen Alfonso Rico", image: "/people/carmen.jpg" },
                // Duplicate for seamless scrolling
                { name: "Sarah Friar", image: "/people/sarahfriar.jpeg" },
                { name: "David Singleton", image: "/people/davidsingleton.jpg" },
                { name: "Jon Bradford", image: "/people/jonbradford.jpg" },
                { name: "Toyosi Ogedengbe", image: "/people/toyosi.png" },
                { name: "Alan Carson", image: "/people/alancarson.jpg" },
                { name: "Carmen Alfonso Rico", image: "/people/carmen.jpg" },
              ].map((person, index) => (
                <div key={index} className="flex-shrink-0 relative group">
                  <div className="w-48 h-64 sm:w-56 sm:h-72 overflow-hidden rounded-lg bg-gray-800">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg tracking-tight font-headline">{person.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Strategic Goals */}
        <Section id="goals" className="py-16">
          <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-transparent">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-headline text-center">2025–2029 Goals</h3>
            <p className="text-center text-white/70 mt-2 max-w-2xl mx-auto">Building a visible, functioning pipeline from "thinking about a startup" to "raising from London / Dublin / EU / US VCs"</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-[#00ff88]">20+</div>
                <div className="text-white/70 text-sm mt-1">Companies funded at pre-seed/seed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-[#00ff88]">5-10</div>
                <div className="text-white/70 text-sm mt-1">Raising £1-3m+ from non-NI investors</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-[#00ff88]">250+</div>
                <div className="text-white/70 text-sm mt-1">Mentors activated</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-[#00ff88]">30+</div>
                <div className="text-white/70 text-sm mt-1">Community events per year</div>
              </div>
            </div>
          </div>
        </Section>

        {/* International Access */}
        <Section id="international" className="py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase font-headline">Global <span className="text-[#00ff88]">Connections</span></h2>
            <p className="mt-3 text-white/70 max-w-prose font-body">Belfast tightly linked to Dublin, London, and NYC. Opening doors for partners, customers and capital through curated trips and warm introductions.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Dublin */}
            <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/0">
              <div className="overflow-hidden h-40 sm:h-48 md:h-56">
                <img
                  src="/dublin.jpg"
                  alt="Dublin skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white font-headline">Dublin</CardTitle>
                <CardDescription className="text-white/70 font-body">Dogpatch/NDRC syndicates, all-island dealflow, and Ireland's VC ecosystem.</CardDescription>
              </CardHeader>
            </Card>

            {/* London */}
            <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/0">
              <div className="overflow-hidden h-40 sm:h-48 md:h-56">
                <img
                  src="/london.jpeg"
                  alt="London skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white font-headline">London</CardTitle>
                <CardDescription className="text-white/70 font-body">Investor intros, enterprise buyers and world-class GTM talent via Zero Point Atlantic trips.</CardDescription>
              </CardHeader>
            </Card>

            {/* New York City */}
            <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/0">
              <div className="overflow-hidden h-40 sm:h-48 md:h-56">
                <img
                  src="/NYC.jpeg"
                  alt="New York City skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white font-headline">New York</CardTitle>
                <CardDescription className="text-white/70 font-body">US market discovery, customer pilots and capital connections through Techstars network.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Section>

        {/* Partners */}
        <Section id="partners" className="py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase font-headline">Our <span className="text-[#00ff88]">Partners</span></h2>
            <p className="mt-3 text-white/70 max-w-prose font-body">Zero Point is deliberately partner-heavy, not a standalone institution. Leveraging proven playbooks and global networks.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center p-4">
              <img src="/partners/ormeaulabs.png" alt="Ormeau Labs" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/qub.png" alt="Queen's University Belfast" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/dogpatch.png" alt="Dogpatch Labs" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/the-amp.png" alt="The AMP" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/InvestNI.png" alt="Invest Northern Ireland" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/techstart.jpeg" alt="Techstart" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-emerald-600/10 to-teal-600/10"></div>
            <div className="relative p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-headline mb-6">Ready to build from <span className="text-[#00ff88]">Belfast</span>?</h2>
              <p className="text-xl text-white/90 font-body leading-relaxed mb-8">Whether you're exploring an idea, forming a team, or ready to raise — Zero Point has a path for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#/programmes" className="bg-[#00ff88] text-black px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-[#00ff88]/90 transition-all transform hover:scale-105">Explore Programmes</a>
                <a href="#/capital" className="border border-white/20 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-white/10 transition-all">For Investors</a>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
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
      </main>
    </div>
  );
}
