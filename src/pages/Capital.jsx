import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Menu, Linkedin, Twitter, Instagram, TrendingUp, Banknote, Gift, Users, ArrowRight, CheckCircle2, Target } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export default function CapitalPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const capitalLayers = [
    {
      id: "non-dilutive",
      icon: Gift,
      title: "Non-Dilutive",
      subtitle: "Grants & Support",
      color: "from-emerald-500/20 to-emerald-600/10",
      items: [
        { name: "RAEng RTE Grant", amount: "£20,000", desc: "Equity-free grant for engineering founders" },
        { name: "Invest NI Grants", amount: "Up to £25,000", desc: "Through Founder Labs programmes" },
        { name: "Innovate UK", amount: "Varies", desc: "R&D and innovation grants" },
        { name: "University Grants", amount: "Varies", desc: "Spin-out and commercialisation support" }
      ]
    },
    {
      id: "pre-seed",
      icon: Banknote,
      title: "Pre-Seed",
      subtitle: "First Cheques",
      color: "from-[#00ff88]/20 to-emerald-600/10",
      items: [
        { name: "Zero Point Capital I", amount: "£150-200k", desc: "AI-native focus, programme graduates" },
        { name: "Angels", amount: "£25-100k", desc: "Local and diaspora networks" },
        { name: "Early Co-investment", amount: "Varies", desc: "Public and regional funds" }
      ]
    },
    {
      id: "seed",
      icon: TrendingUp,
      title: "Seed & Beyond",
      subtitle: "Growth Capital",
      color: "from-blue-500/20 to-blue-600/10",
      items: [
        { name: "UK/Irish Seed Funds", amount: "£500k-3m", desc: "Frontline, Earlybird, Sure Valley, etc." },
        { name: "Corporate VCs", amount: "Varies", desc: "Strategic investors in your sector" },
        { name: "EU/US Funds", amount: "£1m+", desc: "Via Techstars/Dogpatch networks" }
      ]
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
            <a href="#/programmes" className="text-white/70 hover:text-white">Programmes</a>
            <a href="#/events" className="text-white/70 hover:text-white">Events</a>
            <a href="#/capital" className="text-white hover:text-white">Capital</a>
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
          Capital & <span className="text-[#00ff88]">Funding</span>
        </h1>
        <p className="mt-4 text-xl text-white/80 max-w-3xl font-body leading-relaxed">
          Ensuring promising NI startups are properly capitalised. Zero Point coordinates the full capital stack — from non-dilutive grants to pre-seed investment to external VCs.
        </p>
      </Section>

      {/* Capital Stack */}
      <Section className="pb-16">
        <h2 className="text-2xl font-bold uppercase tracking-tight font-headline mb-8">The Capital Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {capitalLayers.map((layer, i) => (
            <Card key={layer.id} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${layer.color} overflow-hidden`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <layer.icon className="h-5 w-5 text-[#00ff88]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white font-headline">{layer.title}</CardTitle>
                    <CardDescription className="text-white/60">{layer.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {layer.items.map((item, j) => (
                    <div key={j} className="border-l-2 border-white/20 pl-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-[#00ff88] font-semibold text-sm">{item.amount}</div>
                      </div>
                      <div className="text-white/60 text-sm">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Zero Point Capital I */}
      <Section className="py-16">
        <div className="rounded-3xl border border-[#00ff88]/30 p-8 md:p-12 bg-gradient-to-br from-[#00ff88]/10 via-black to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/30">
                <Target className="h-6 w-6 text-[#00ff88]" />
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#00ff88]/20 text-[#00ff88] uppercase tracking-wider font-medium">Micro-Fund</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight font-headline mb-4">
              Zero Point Capital I
            </h2>
            <p className="text-xl text-white/80 font-body leading-relaxed max-w-3xl">
              A small, focused fund that plugs a specific gap — first institutional money for NI AI-native startups emerging from the ecosystem stack.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00ff88]">£150-200k</div>
                <div className="text-white/70 text-sm mt-1">Typical cheque size at pre-seed</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00ff88]">AI-Native</div>
                <div className="text-white/70 text-sm mt-1">Focus on software-first companies</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00ff88]">Follow-on</div>
                <div className="text-white/70 text-sm mt-1">Reserve for strong seed/Series A</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00ff88]">De-risked</div>
                <div className="text-white/70 text-sm mt-1">Months of programme engagement</div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-white mb-3">Role in the ecosystem</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Strong signal to external VCs — "we've done the work with this team"</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Ensures best teams don't die at idea stage for lack of early capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">One of several tools alongside grants, angels, and Techstars investment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* For Investors */}
      <Section className="py-16">
        <h2 className="text-2xl font-bold uppercase tracking-tight font-headline mb-8">For Investors & LPs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl border border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-xl text-white font-headline">What Zero Point offers you</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Proprietary dealflow</div>
                  <div className="text-white/60 text-sm">Access to NI's best AI-native startups, de-risked via programme engagement</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Lean structure</div>
                  <div className="text-white/60 text-sm">Platform costs covered outside the fund — your capital sits in equity</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Local co-investor & scout</div>
                  <div className="text-white/60 text-sm">Originate deals in an under-fished region, help portfolio navigate NI support</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-xl text-white font-headline">Our investor network</CardTitle>
              <CardDescription className="text-white/60">We work with leading VCs who have billions under management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <img src="/partners/frontline.png" alt="Frontline" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
                <img src="/partners/earlybird.png" alt="Earlybird" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
                <img src="/partners/surevalley.webp" alt="Sure Valley" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
                <img src="/partners/concept_ventures.png" alt="Concept Ventures" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
                <img src="/partners/playfair.png" alt="Playfair" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
                <img src="/partners/generalcatalyst.png" alt="General Catalyst" className="h-8 w-auto grayscale brightness-0 invert opacity-80" loading="lazy" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* For Founders */}
      <Section className="py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h2 className="text-2xl font-bold uppercase tracking-tight font-headline mb-6 text-center">For Founders</h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-8">
            A clear path to grants, angels, Zero Point Capital I, and external VCs. If you're ambitious, NI is now a credible place to raise.
          </p>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Join a Programme", desc: "Start with events, pre-accelerator, or accelerator" },
              { step: "2", title: "Access Grants", desc: "£20-25k non-dilutive from RTE or Invest NI" },
              { step: "3", title: "Raise Pre-Seed", desc: "Angels + Zero Point Capital I" },
              { step: "4", title: "Go Global", desc: "UK/Irish/US VCs via our networks" }
            ].map((s, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#00ff88]/20 text-[#00ff88] font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <div className="font-semibold text-white mb-1">{s.title}</div>
                <div className="text-white/60 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-emerald-600/10 to-teal-600/10"></div>
          <div className="relative p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-headline mb-6">Interested in investing?</h2>
            <p className="text-xl text-white/90 font-body leading-relaxed mb-8">Whether you're an LP, angel, or VC looking for NI dealflow — let's talk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:capital@zeropointni.com" className="bg-[#00ff88] text-black px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-[#00ff88]/90 transition-all transform hover:scale-105">Get in Touch</a>
              <a href="#/programmes" className="border border-white/20 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-white/10 transition-all">View Programmes</a>
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

