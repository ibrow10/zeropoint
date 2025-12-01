import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronDown, Menu, Linkedin, Twitter, Instagram } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export default function FAQPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sections = [
    {
      title: "Overview",
      items: [
        { 
          q: "What is Zero Point?", 
          a: "Zero Point is the evolution of Founder Labs into a whole-ecosystem platform for Northern Ireland. We're not just an accelerator or a fund — we're the system orchestrator for NI's startup stack. We run and coordinate programmes covering the entire founder journey, orchestrate key partners (Ormeau Labs, QUB, Ulster University, Dogpatch Labs, Techstars, RAEng), and provide targeted capital through Zero Point Capital I." 
        },
        { 
          q: "What makes Zero Point different?", 
          a: "Zero Point takes a long-term, partner-driven approach. We're building a self-sustaining founder ecosystem over years, not running one-off programmes. We integrate multiple programmes (Founder Labs, Techstars community products, RAEng RTE, Zero Point Fellowship) into a coherent pipeline, and we ensure founders at any stage have a clear path forward — from first idea to global scale." 
        },
        { 
          q: "Who runs Zero Point?", 
          a: "Zero Point is delivered by a partnership including Ormeau Labs (our physical home), Queen's University Belfast, Ulster University, Dogpatch Labs (Dublin), Techstars, and the Royal Academy of Engineering. These partners have collectively helped founders raise over $200m in venture capital across the island of Ireland." 
        },
        { 
          q: "Where is Zero Point based?", 
          a: "Our primary base is Ormeau Labs in Belfast. We also have presence at The AMP in Derry and access to the Irish Tech Hub Network (Dublin, Cork, Kerry, Galway). International trips take founders to London and New York." 
        },
      ],
    },
    {
      title: "Programmes",
      items: [
        { 
          q: "What programmes does Zero Point offer?", 
          a: "We run five main programmes: (1) Founder Labs Pre-Accelerator — 6-week, part-time validation programme; (2) Founder Labs Accelerator — 6-month, full-time intensive; (3) Techstars Startup Community products — Startup Weekend, Week, Digest, and Founder Catalyst; (4) RAEng Regional Talent Engine — 6-month, equity-free pre-accelerator with £20k grant; (5) Zero Point Fellowship — AI-native co-founder matching programme." 
        },
        { 
          q: "Which programme is right for me?", 
          a: "It depends on your stage: Just exploring? Start with Startup Weekend or community events. Have an idea but need validation? Apply to Founder Labs Pre-Accelerator or RAEng RTE. Ready to scale? The Founder Labs Accelerator takes you from early traction to investment-ready. AI/ML engineer looking for co-founders? Zero Point Fellowship is for you." 
        },
        { 
          q: "How much do the programmes cost?", 
          a: "Our core programmes are free to participants. The Founder Labs Accelerator includes a £25k non-dilutive grant from Invest NI. The RAEng RTE provides a £20k equity-free grant for living costs. We don't take equity through our programmes (though Zero Point Capital I is a separate investment vehicle)." 
        },
        { 
          q: "How do I apply?", 
          a: "Applications for different programmes open at various times throughout the year. Subscribe to Startup Digest Belfast to stay informed, or contact us directly. For Founder Labs, applications typically open quarterly. For RAEng RTE, there's an annual competitive process." 
        },
      ],
    },
    {
      title: "Eligibility",
      items: [
        { 
          q: "Do I need to be based in Northern Ireland?", 
          a: "For Founder Labs programmes, we expect at least one team member to be in-person during core weeks. Not all co-founders need to be based in NI. By programme start, you'll need an NI-registered company (or NI subsidiary) and a UK bank account. For RAEng RTE, you can be based in NI, Northern England, or Wales." 
        },
        { 
          q: "What stage should my startup be at?", 
          a: "We work with founders from idea stage through to early traction. Founder Labs Pre-Accelerator is for early ideas needing validation. The Accelerator is for startups that can realistically reach £1m+ revenue/funding by year 3, with 60%+ sales outside NI. If you've already raised significant investment (e.g., over £500k), you may not benefit as much from our programmes." 
        },
        { 
          q: "What types of startups are a good fit?", 
          a: "We focus on innovation-driven, tech-based companies with global ambition. Particularly strong in AI-native, software-first companies. Not a fit: services businesses, consultancies, agencies, products without a technical aspect, or hardware-heavy solutions still at conceptual stage." 
        },
        { 
          q: "Do I need to be an Invest NI customer?", 
          a: "No, you don't need to be an Invest NI customer to apply. If accepted into Founder Labs, you'll be onboarded as an Invest NI customer to access grant funding." 
        },
      ],
    },
    {
      title: "Capital & Funding",
      items: [
        { 
          q: "What is Zero Point Capital I?", 
          a: "Zero Point Capital I is a small, focused micro-fund providing first institutional money for AI-native startups emerging from our ecosystem. Typical cheques are £150-200k at pre-seed, with selective follow-on reserves for strong seed/Series A rounds. The fund complements grants, angels, and external VCs — it's one tool in a broader capital toolkit, not the centrepiece of Zero Point." 
        },
        { 
          q: "What non-dilutive funding is available?", 
          a: "Several options: RAEng RTE provides £20k equity-free grants for engineering founders. Founder Labs Accelerator includes up to £25k in grant funding from Invest NI. Additional options include Innovate UK grants, university grants, and other public instruments." 
        },
        { 
          q: "How does Zero Point connect founders to investors?", 
          a: "We provide: Investor Days and 1:1 fundraising prep; in-person Demo Days putting you in front of active investors; curated Zero Point Atlantic trips to London and NYC for top teams; warm introductions through our partner network (Techstars, Dogpatch, local VCs); and a clear signal to external investors when we've worked closely with a team." 
        },
        { 
          q: "What VCs does Zero Point work with?", 
          a: "Our investor network includes Frontline, Earlybird, Sure Valley, Concept Ventures, Playfair, Cocoa, General Catalyst, Techstart, and many others. We also connect founders to the broader Techstars network (4,900+ companies, $120B+ cumulative market cap) and Dogpatch/NDRC syndicates in Ireland." 
        },
      ],
    },
    {
      title: "Events & Community",
      items: [
        { 
          q: "What is Techstars Startup Weekend?", 
          a: "A 54-hour event where aspiring founders form teams on Friday night, build and validate ideas over Saturday, and pitch to judges on Sunday evening. It's the perfect way to test if startup life is for you. We run themed weekends like DeepTech Startup Weekend at QUB." 
        },
        { 
          q: "What is Startup Week Belfast?", 
          a: "A 5-day festival of talks, workshops, and meetups showcasing Belfast's startup ecosystem. Includes keynotes from successful founders, hands-on workshops, networking events, and demo showcases. The whole community comes together annually." 
        },
        { 
          q: "How can I stay connected to the ecosystem?", 
          a: "Subscribe to Startup Digest Belfast for weekly curated updates on events and opportunities. Attend events at Ormeau Labs (Founders' Nights, Lunch & Learns, Demo Days). Join our Techstars community events. Follow us on LinkedIn, Twitter, and Instagram." 
        },
        { 
          q: "Can I host events at Ormeau Labs?", 
          a: "Ormeau Labs regularly hosts community events, meetups, and workshops. If you're running something relevant to the startup community, get in touch to discuss using the space." 
        },
      ],
    },
    {
      title: "Other",
      items: [
        { 
          q: "How is Zero Point funded?", 
          a: "Zero Point operates through multiple funding streams: Invest NI supports Founder Labs programmes; Techstars partnership provides community products; RAEng funds the RTE programme; and Zero Point Capital I is a separate investment fund. This diversified model makes us sustainable without heavy reliance on any single source." 
        },
        { 
          q: "What is the relationship between Zero Point and Founder Labs?", 
          a: "Founder Labs is one of the core programmes within Zero Point. Zero Point is the broader ecosystem platform that includes Founder Labs Pre-Accelerator and Accelerator, plus Techstars products, RAEng RTE, Zero Point Fellowship, and Zero Point Capital I. Think of Zero Point as the umbrella that coordinates everything." 
        },
        { 
          q: "Are there other programmes in NI I should know about?", 
          a: "Yes — Northern Ireland has a strong ecosystem with many support channels. We're happy to point you to options that fit your stage if our programmes aren't the right fit. Just get in touch." 
        },
        { 
          q: "How do I get in touch?", 
          a: "Email hello@zeropointni.com or reach out via our social channels. For capital/investment inquiries, contact capital@zeropointni.com. We also run regular Office Hours — check Startup Digest for scheduling." 
        },
      ],
    },
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
            <a href="#/capital" className="text-white/70 hover:text-white">Capital</a>
            <a href="#/faq" className="text-white hover:text-white">FAQ</a>
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

      <Section className="py-12 md:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight font-headline">
          Frequently Asked <span className="text-[#00ff88]">Questions</span>
        </h1>
        <p className="mt-4 text-xl text-white/80 max-w-3xl font-body leading-relaxed">
          Everything you need to know about Zero Point, our programmes, and how to get involved. Can't find your answer? Get in touch.
        </p>
      </Section>

      {sections.map((section, si) => (
        <Section key={si} className="py-6">
          <h2 className="text-xl uppercase tracking-wider text-white/80 mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 gap-4">
            {section.items.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-white/10 bg-white/0 hover:border-white/20 transition-colors">
                <summary className="list-none cursor-pointer p-5 flex items-start justify-between gap-3">
                  <span className="text-white font-medium leading-tight">{f.q}</span>
                  <ChevronDown className="h-4 w-4 text-white/60 transition-transform group-open:rotate-180 mt-1 flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-white/70 whitespace-pre-line font-body leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-emerald-600/10 to-teal-600/10"></div>
          <div className="relative p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight font-headline mb-4">Still have questions?</h2>
            <p className="text-lg text-white/90 font-body leading-relaxed mb-6">We're here to help. Reach out and we'll get back to you within a few days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:hello@zeropointni.com" className="bg-[#00ff88] text-black px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-[#00ff88]/90 transition-all transform hover:scale-105">Email Us</a>
              <a href="#/programmes" className="border border-white/20 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-white/10 transition-all">Explore Programmes</a>
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
