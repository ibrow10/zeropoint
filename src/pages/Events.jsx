import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Menu, Linkedin, Twitter, Instagram, Calendar, Clock, Users, MapPin, Sparkles, Newspaper, GraduationCap, Building2 } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export default function EventsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const techstarsProducts = [
    {
      id: "startup-weekend",
      icon: Sparkles,
      title: "Startup Weekend",
      duration: "54 hours",
      description: "Intense 54-hour events where aspiring founders form teams, build prototypes, and pitch. Experience the full startup journey compressed into one weekend.",
      highlights: [
        "Form teams around ideas on Friday night",
        "Build and validate over Saturday",
        "Pitch to judges on Sunday evening",
        "Win prizes and mentorship opportunities"
      ],
      example: "DeepTech Startup Weekend at QUB focuses on AI and deep tech innovations"
    },
    {
      id: "startup-week",
      icon: Calendar,
      title: "Startup Week",
      duration: "5 days",
      description: "A 5-day festival of talks, workshops, and meetups showcasing Belfast's startup ecosystem. Connect with founders, investors, and ecosystem builders.",
      highlights: [
        "Keynotes from successful founders",
        "Hands-on workshops and masterclasses",
        "Networking events and founder meetups",
        "Demo showcases and pitch sessions"
      ],
      example: "Belfast Startup Week brings together the entire NI ecosystem annually"
    },
    {
      id: "startup-digest",
      icon: Newspaper,
      title: "Startup Digest",
      duration: "Weekly",
      description: "Your curated weekly newsletter covering local opportunities, events, and content. Stay connected to what's happening in Belfast's startup scene.",
      highlights: [
        "Curated event listings",
        "Founder spotlights and success stories",
        "Funding and programme opportunities",
        "Community news and updates"
      ],
      example: "Subscribe to never miss an opportunity in NI's ecosystem"
    },
    {
      id: "founder-catalyst",
      icon: Users,
      title: "Founder Catalyst",
      duration: "10 weeks",
      description: "Global virtual pre-accelerator with masterclasses and mentorship. Belfast founders can be nominated through our Techstars partnership.",
      highlights: [
        "10-week virtual curriculum",
        "Access to Techstars mentor network",
        "No equity taken",
        "Global founder cohort connections"
      ],
      example: "Perfect for non-technical or later-career founders"
    },
    {
      id: "community-dev-lab",
      icon: GraduationCap,
      title: "Community Development Lab",
      duration: "2 days",
      description: "Intensive workshop for ecosystem leaders on how to build and sustain a thriving startup community. Learn proven frameworks from Techstars.",
      highlights: [
        "Community building frameworks",
        "Event programming strategies",
        "Mentor network development",
        "Sustainability models"
      ],
      example: "For ecosystem builders, accelerator managers, and community leaders"
    }
  ];

  const ormeauEvents = [
    {
      title: "Founders' Nights",
      description: "Regular evening gatherings where founders share wins, challenges, and learnings in a relaxed setting.",
      frequency: "Monthly"
    },
    {
      title: "Demo Days",
      description: "Showcase events where cohort companies present to investors and the broader community.",
      frequency: "Per cohort"
    },
    {
      title: "Mentor Office Hours",
      description: "Drop-in sessions with experienced operators for quick guidance and unblocking.",
      frequency: "Weekly"
    },
    {
      title: "Lunch & Learns",
      description: "Informal sessions covering practical topics from legal to marketing to hiring.",
      frequency: "Bi-weekly"
    }
  ];

  const universityEvents = [
    {
      title: "Campus Hackathons",
      description: "24-48 hour building sprints at QUB and UU bringing together students, researchers, and external mentors.",
      partner: "QUB / Ulster University"
    },
    {
      title: "QUBIS DeepTech Weekend",
      description: "Techstars Startup Weekend focused on commercialising research and deep tech from Queen's.",
      partner: "QUBIS"
    },
    {
      title: "Researcher to Founder",
      description: "Workshops helping PhDs and postdocs explore the startup path for their research.",
      partner: "QUB / Ulster University"
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
            <a href="#/events" className="text-white hover:text-white">Events</a>
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
          Community <span className="text-[#00ff88]">Events</span>
        </h1>
        <p className="mt-4 text-xl text-white/80 max-w-3xl font-body leading-relaxed">
          Getting thousands of people in NI thinking about startups, meeting each other, and seeing role models. Regular events that feed the ecosystem pipeline.
        </p>
      </Section>

      {/* Impact Stats */}
      <Section className="pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "~400", label: "Startup ideas launched", sub: "4-year target" },
            { value: "40+", label: "Companies pre-accelerated", sub: "4-year target" },
            { value: "1,000+", label: "Community members", sub: "Engaged annually" },
            { value: "30+", label: "Events per year", sub: "Across all formats" }
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#00ff88]">{stat.value}</div>
              <div className="text-white font-medium mt-1">{stat.label}</div>
              <div className="text-white/50 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Techstars Community Products */}
      <Section className="py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
            <Sparkles className="h-6 w-6 text-[#00ff88]" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight font-headline">Techstars Community Products</h2>
            <p className="text-white/70 font-body">Through our 4-year Techstars Startup Community Partnership</p>
          </div>
        </div>

        <div className="grid gap-6">
          {techstarsProducts.map((product) => (
            <Card key={product.id} className="rounded-2xl border border-white/10 bg-white/0 hover:border-white/20 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/5">
                      <product.icon className="h-5 w-5 text-[#00ff88]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white font-headline">{product.title}</h3>
                        <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{product.duration}</span>
                      </div>
                      <p className="text-white/70 font-body leading-relaxed mt-2">{product.description}</p>
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border-l-2 border-[#00ff88]/50">
                        <div className="text-white/80 text-sm italic">"{product.example}"</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-3">Highlights</div>
                  <ul className="space-y-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Ormeau Labs Programming */}
      <Section className="py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
            <Building2 className="h-6 w-6 text-[#00ff88]" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight font-headline">Ormeau Labs Programming</h2>
            <p className="text-white/70 font-body">The physical home of the ecosystem in Belfast</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ormeauEvents.map((event, i) => (
            <Card key={i} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white font-headline">{event.title}</CardTitle>
                  <span className="text-xs px-2 py-1 rounded bg-[#00ff88]/20 text-[#00ff88]">{event.frequency}</span>
                </div>
                <CardDescription className="text-white/70 font-body">{event.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* University Events */}
      <Section className="py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
            <GraduationCap className="h-6 w-6 text-[#00ff88]" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight font-headline">University Events</h2>
            <p className="text-white/70 font-body">Partnering with QUB and Ulster University</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {universityEvents.map((event, i) => (
            <Card key={i} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{event.partner}</span>
                </div>
                <CardTitle className="text-lg text-white font-headline">{event.title}</CardTitle>
                <CardDescription className="text-white/70 font-body">{event.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Venue Partners */}
      <Section className="py-12">
        <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-xl font-bold uppercase tracking-tight font-headline text-center mb-6">Event Venues & Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-4">
              <img src="/partners/ormeaulabs.png" alt="Ormeau Labs" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/the-amp.png" alt="The AMP" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/qub.png" alt="Queen's University Belfast" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/partners/dogpatch.png" alt="Dogpatch Labs" className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </div>
      </Section>

      {/* Subscribe CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-emerald-600/10 to-teal-600/10"></div>
          <div className="relative p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-headline mb-6">Never miss an event</h2>
            <p className="text-xl text-white/90 font-body leading-relaxed mb-8">Subscribe to Startup Digest Belfast for weekly curated updates on events, opportunities, and community news.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:hello@zeropointni.com?subject=Subscribe to Startup Digest" className="bg-[#00ff88] text-black px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-[#00ff88]/90 transition-all transform hover:scale-105">Subscribe Now</a>
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

