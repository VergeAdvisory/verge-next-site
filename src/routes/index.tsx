import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Compass, Coins, Users, Building2, Briefcase, GraduationCap, Award, Network, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import jillHeadshot from "@/assets/jill-headshot.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Verge Advisory — Strategy & Management Advisory, Vancouver" },
      { name: "description", content: "Verge Advisory adds capacity to organizations at important moments of growth, transition, and capital formation. Led by Jill Earthy in Vancouver, Canada." },
      { property: "og:title", content: "Verge Advisory" },
      { property: "og:description", content: "Supporting organizations at the verge of what's next." },
    ],
  }),
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#who", label: "Who We Support" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-[0_1px_20px_rgba(44,49,80,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center">
          <img src="/logo.svg" alt="Verge Advisory" style={{ width: 200 }} />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary font-light tracking-[0.15em] uppercase hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-44 pb-32 md:pt-56 md:pb-40 px-6 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary leading-[1.15] tracking-tight font-light">
          Supporting organizations at the<br className="hidden md:block" /> Verge of What&rsquo;s Next.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          Verge Advisory adds capacity to organizations at important moments of growth, transition, and capital formation.
        </p>
        <div className="mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-6 text-sm tracking-[0.2em] uppercase font-light">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1">
          <img
            src={jillHeadshot}
            alt="Jill Earthy"
            width={800}
            height={1024}
            loading="lazy"
            className="w-36 md:w-44 aspect-[4/5] object-cover object-top rounded-2xl shadow-sm"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">About</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary leading-tight font-light">
            Experienced Judgment When It Matters Most
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            Over the past several decades, Jill Earthy has built and led organizations at the intersection of innovation, finance, and economic growth across Canada. Today, that experience is focused on helping companies navigate pivotal moments — bringing strategic insight, governance expertise, and deep connections across Canada&rsquo;s investment and innovation ecosystem to organizations ready to move beyond the verge.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl mt-28 md:mt-36 border-l-2 border-accent pl-8 md:pl-12">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-5">Beyond the Core</p>
        <h3 className="text-3xl md:text-4xl text-primary font-light leading-tight">The Lattice</h3>
        <p className="mt-8 text-xl md:text-2xl text-primary font-light italic leading-relaxed">
          &ldquo;Sometimes a challenge calls for multiple perspectives.&rdquo;
        </p>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
          Verge Advisory collaborates with The Lattice, bringing access to a trusted group of senior leaders with deep experience across key business functions — available to engage as needed.
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Compass,
    title: "Strategy",
    items: ["Growth strategy development", "Executive decision support", "Board and partnership management"],
  },
  {
    icon: Coins,
    title: "Capital",
    items: ["Capital strategy development", "Financing navigation", "Capital raising guidance"],
  },
  {
    icon: Users,
    title: "Advisory Boards",
    items: ["Needs assessment", "Advisor identification", "Governance support"],
  },
];

function Services() {
  return (
    <section id="services" className="py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Services</p>
          <h2 className="text-3xl md:text-5xl text-primary font-light leading-tight">Core Areas of Support</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
          {services.map((s) => (
            <div key={s.title}>
              <s.icon className="h-8 w-8 text-accent mb-6 stroke-[1.25]" />
              <h3 className="text-xl text-primary mb-5 font-light tracking-wide">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed font-light">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const audience = [
  { icon: Building2, title: "Growth-Stage Companies", desc: "Founder-led businesses entering growth, transition, or capital raising." },
  { icon: Briefcase, title: "Entrepreneurial Support Organizations", desc: "Organizations seeking strategic capacity, partnership development, and sustainable revenue models." },
  { icon: TrendingUp, title: "Venture Capital Firms", desc: "Firms looking to support portfolio companies through advisory, capital guidance, and access to advisors." },
  { icon: GraduationCap, title: "Post-Secondary & Financial Institutions", desc: "Institutions seeking deeper engagement with growth-stage companies and innovation strategies." },
];

function Who() {
  return (
    <section id="who" className="bg-secondary py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Clients</p>
          <h2 className="text-3xl md:text-5xl text-primary font-light leading-tight">Who We Support</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {audience.map((a) => (
            <div key={a.title} className="bg-background border border-border rounded-2xl p-10 md:p-12">
              <a.icon className="h-7 w-7 text-accent mb-6 stroke-[1.25]" />
              <h3 className="text-xl md:text-2xl text-primary mb-4 font-light">{a.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const why = [
  { icon: Award, title: "Executive Leadership Perspective", desc: "Former CEO and Board Director across innovation, investment, and economic development." },
  { icon: Coins, title: "Capital Landscape Expertise", desc: "Deep experience with founders, investors, government, and institutional partners." },
  { icon: Network, title: "Ecosystem-Level Connections", desc: "Strong networks across Canada's innovation, investment, policy, and entrepreneurship communities." },
];

function Why() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Why Verge</p>
          <h2 className="text-3xl md:text-5xl text-primary font-light leading-tight">Why Engage Verge</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {why.map((w) => (
            <div key={w.title}>
              <w.icon className="h-7 w-7 text-accent mb-6 stroke-[1.25]" />
              <h3 className="text-xl text-primary mb-4 font-normal">{w.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Contact</p>
          <h2 className="text-4xl md:text-5xl text-primary font-light">Let&rsquo;s Talk.</h2>
          <p className="mt-6 text-muted-foreground font-light">
            Reach out to explore how Verge Advisory can support your next chapter.
          </p>
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:jillearthy@gmail.com";
          }}
        >
          <Input placeholder="Name" required className="bg-background border-border rounded-none h-14 px-5 font-light" />
          <Input placeholder="Organization" className="bg-background border-border rounded-none h-14 px-5 font-light" />
          <Input type="email" placeholder="Email" required className="bg-background border-border rounded-none h-14 px-5 font-light" />
          <Textarea placeholder="Message" required rows={5} className="bg-background border-border rounded-none px-5 py-4 font-light" />
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-6 text-sm tracking-[0.2em] uppercase font-light">
            Send Message
          </Button>
        </form>
        <div className="mt-16 text-center">
          <p className="text-primary font-light tracking-wide">Jill Earthy &middot; Vancouver, Canada</p>
          <div className="mt-5 flex items-center justify-center gap-6">
            <a href="https://www.linkedin.com/in/jillearthy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 stroke-[1.25]" />
            </a>
            <a href="mailto:jillearthy@gmail.com" className="text-accent hover:opacity-70 transition-opacity" aria-label="Email">
              <Mail className="h-5 w-5 stroke-[1.25]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 text-center">
      <p className="text-xs text-muted-foreground tracking-wider font-light">
        © 2026 Verge Advisory. All rights reserved.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Who />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
