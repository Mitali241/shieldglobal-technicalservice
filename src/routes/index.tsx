import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Flame,
  HardHat,
  Layers,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import heroTurbine from "@/assets/hero-turbine.jpg";
import qualityImg from "@/assets/quality-detail.jpg";
import processImg from "@/assets/industry-process.jpg";
import machiningImg from "@/assets/product-machining.jpg";
import valveImg from "@/assets/product-valve.jpg";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shield Global Technical Services LLC — Engineering & Project Excellence" },
      {
        name: "description",
        content:
          "Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.",
      },
      { property: "og:title", content: "Shield Global Technical Services LLC" },
      {
        property: "og:description",
        content:
          "Engineering. Technical Services. Project Excellence. Integrated solutions across the UAE & beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// The 5 Main Pillars with visual imagery, numbers, and descriptions
const mainPillars = [
  {
    number: "01",
    title: "Building Construction",
    tagline: "Civil & Structural Excellence",
    desc: "Civil construction, renovation, structural works, finishing and project support.",
    image: heroTurbine,
    icon: Building2,
    slug: "building-construction",
    features: ["Civil & Structural Works", "Commercial & Industrial Buildings", "Renovation & Fit-out", "Turnkey Finishing"],
  },
  {
    number: "02",
    title: "Facility Management",
    tagline: "Total Asset Lifecycle Care",
    desc: "Hard FM, technical maintenance, MEP maintenance, building services and facility support.",
    image: machiningImg,
    icon: Wrench,
    slug: "facility-management",
    features: ["Hard FM Solutions", "Planned Preventive Maintenance (PPM)", "Building Automation & HVAC", "24/7 Operations Support"],
  },
  {
    number: "03",
    title: "Oil & Gas",
    tagline: "Onshore & Offshore Operations",
    desc: "Onshore & offshore technical services, maintenance, shutdown, turnaround and project support.",
    image: processImg,
    icon: Flame,
    slug: "oil-gas",
    features: ["Pipeline & Plant Maintenance", "Offshore & Onshore Support", "Shutdown Management", "API & ASME Code Compliance"],
  },
  {
    number: "04",
    title: "Energy & Utilities",
    tagline: "Power & Grid Infrastructure",
    desc: "Technical services and maintenance support for power, water, energy and utility infrastructure.",
    image: qualityImg,
    icon: Zap,
    slug: "energy-utilities",
    features: ["Substation & Grid Installations", "Water & Wastewater Systems", "Renewable & Solar Support", "HV / MV Cabling & Testing"],
  },
  {
    number: "05",
    title: "MEP Services",
    tagline: "Integrated Systems & Controls",
    desc: "Mechanical, electrical, HVAC, plumbing, BMS and associated building systems.",
    image: valveImg,
    icon: Cpu,
    slug: "mep-services",
    features: ["HVAC & Chilled Water Piping", "Fire Fighting & Alarm Systems", "Electrical Distribution & LV", "BMS & Smart Building Setup"],
  },
];

// Secondary Specialized Technical Capabilities
const secondaryServices = [
  {
    title: "Welding & Fabrication",
    badge: "Specialized Shop & Field",
    desc: "Heavy structural steel fabrication, ASME/AWS coded pipe spooling, skid-mounted units, and certified NDT-compliant welding.",
    icon: Layers,
    link: "/services#welding-fabrication",
  },
  {
    title: "EPC/EPCM Technical Support",
    badge: "Engineering & Supervision",
    desc: "Multi-disciplinary engineering manpower, QA/QC certified inspection, third-party audits, and comprehensive project controls.",
    icon: HardHat,
    link: "/services#technical-support",
  },
  {
    title: "Project Mobilization",
    badge: "Rapid Response Deployment",
    desc: "Fast-track site setup, specialized equipment logistics, certified manpower mobilization, and structured tooling deployment across the region.",
    icon: Truck,
    link: "/contact",
  },
  {
    title: "Shutdown & Turnaround Support",
    badge: "24/7 Outage Management",
    desc: "Critical-path turnaround execution, heat exchanger & valve overhaul, emergency mechanical repairs, and rapid re-commissioning.",
    icon: RotateCcw,
    link: "/services#oil-gas",
  },
];

function HomePage() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[96svh] flex flex-col justify-between overflow-hidden bg-foreground text-hero-foreground">
        {/* Background Image with Parallax & Industrial Overlay */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[115%] w-full">
          <img
            src={heroTurbine}
            width={1920}
            height={1080}
            alt="Shield Global Technical Services LLC industrial operations"
            className="h-full w-full object-cover object-[60%_center] opacity-45 sm:opacity-55"
          />
        </motion.div>
        
        {/* Tech Grid Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/30" />

        {/* Hero Content */}
        <div className="technical-container relative z-10 flex flex-1 flex-col justify-center pb-12 pt-32 lg:pb-16 lg:pt-36">
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 border border-primary/40 bg-primary/10 px-3.5 py-1.5 backdrop-blur-md self-start"
          >
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
              SHIELD GLOBAL TECHNICAL SERVICES LLC
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-5xl font-display text-4xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight text-hero-foreground"
          >
            Engineering. <br className="hidden sm:inline" />
            Technical Services. <br />
            <em className="font-normal text-accent not-italic">Project Excellence.</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-hero-foreground/85 sm:text-base md:text-lg font-normal"
          >
            Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.
          </motion.p>

          {/* Buttons: Our Services | Request a Quotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-hero-foreground/30 bg-hero-foreground/5 text-hero-foreground hover:bg-hero-foreground hover:text-foreground backdrop-blur-sm text-xs uppercase tracking-widest font-semibold px-7 py-6"
            >
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <QuoteModal>
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs uppercase tracking-widest font-bold px-7 py-6 shadow-lg shadow-primary/20"
              >
                Request a Quotation
              </Button>
            </QuoteModal>
          </motion.div>
        </div>

        {/* Bottom Trust & Compliance Bar */}
        <div className="relative z-10 border-t border-white/10 bg-foreground/60 backdrop-blur-md py-4">
          <div className="technical-container grid grid-cols-2 gap-4 sm:grid-cols-4 text-hero-foreground/75 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>ISO 9001 / 14001 / 45001</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary shrink-0" />
              <span>Civil & MEP Contracting</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-primary shrink-0" />
              <span>Oil & Gas / Energy Specs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>UAE & Regional Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY SERVICES – 5 MAIN PILLARS */}
      <section id="key-services" className="py-24 lg:py-32 bg-background border-b border-border scroll-mt-24">
        <div className="technical-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border">
              <div>
                <div className="section-label text-primary">01 / Key Services</div>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
                  5 Main Pillars of Excellence
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                Integrated technical, engineering, and maintenance solutions tailored to the demanding standards of modern industrial infrastructure.
              </p>
            </div>
          </Reveal>

          {/* 5 Visual Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isLargeCard = index === 0 || index === 1;

              return (
                <Reveal
                  key={pillar.number}
                  className={index === 3 || index === 4 ? "sm:col-span-1 lg:col-span-1" : ""}
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-xl">
                    {/* Visual Card Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground">
                      <img
                        loading="lazy"
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center border border-white/20 bg-foreground/80 backdrop-blur-md text-primary font-mono text-xs font-bold shadow-md">
                          {pillar.number}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-md shadow-md">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Tagline */}
                      <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-primary font-semibold">
                        {pillar.tagline}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors">
                          {pillar.number} — {pillar.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {pillar.desc}
                        </p>

                        {/* Capabilities Bullet points */}
                        <div className="pt-3 border-t border-border/70 space-y-1.5">
                          {pillar.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                              <span className="h-1.5 w-1.5 bg-primary/60 rounded-full shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                        <Link
                          to="/services"
                          hash={pillar.slug}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                        >
                          Explore Details <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <QuoteModal defaultService={pillar.title}>
                          <button
                            type="button"
                            className="text-[11px] font-mono uppercase tracking-wider text-primary hover:underline font-medium"
                          >
                            Get Quote
                          </button>
                        </QuoteModal>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY SPECIALIZED TECHNICAL CAPABILITIES */}
      <section className="py-24 lg:py-32 bg-card border-b border-border">
        <div className="technical-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
              <div>
                <div className="section-label text-primary">02 / Secondary Capabilities</div>
                <h2 className="mt-3 font-display text-3xl sm:text-5xl text-foreground">
                  Specialized Technical & Support Services
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                Complementing our main pillars with certified shop fabrication, technical secondment, and fast mobilization across turnaround projects.
              </p>
            </div>
          </Reveal>

          {/* 4 Secondary Service Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <Reveal key={idx}>
                  <div className="group flex h-full flex-col justify-between border border-border bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center border border-border bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                          <SecIcon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-primary">
                        {sec.badge}
                      </div>

                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                        {sec.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        to={sec.link}
                        className="text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-primary inline-flex items-center gap-1"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <QuoteModal defaultService={sec.title}>
                        <button
                          type="button"
                          className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground hover:text-primary"
                        >
                          RFQ
                        </button>
                      </QuoteModal>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY SHIELD GLOBAL & HSEQ EXCELLENCE */}
      <section className="py-24 lg:py-32 bg-foreground text-hero-foreground">
        <div className="technical-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="section-label text-accent">HSEQ & Precision Standards</div>
              <h2 className="font-display text-4xl sm:text-6xl leading-[1.02] text-hero-foreground">
                Rigorous Safety Culture. <br />
                <em className="font-normal text-accent not-italic">Zero-Compromise Quality.</em>
              </h2>
              <p className="text-sm leading-relaxed text-hero-foreground/80 sm:text-base max-w-xl">
                Every project executed by Shield Global Technical Services LLC adheres strictly to international ISO standards and regional regulatory requirements. We provide complete transparency through Inspection Test Plans (ITP), Material Test Certificates (MTC), and certified QA/QC oversight.
              </p>

              <div className="grid gap-4 pt-3 sm:grid-cols-3">
                <div className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl text-accent">ISO 9001</div>
                  <div className="text-[11px] text-hero-foreground/70 uppercase tracking-wider mt-1">Quality Management</div>
                </div>
                <div className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl text-accent">ISO 45001</div>
                  <div className="text-[11px] text-hero-foreground/70 uppercase tracking-wider mt-1">Occupational Health & Safety</div>
                </div>
                <div className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl text-accent">ISO 14001</div>
                  <div className="text-[11px] text-hero-foreground/70 uppercase tracking-wider mt-1">Environmental Management</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild variant="editorial" size="lg">
                  <Link to="/hse-quality">
                    Explore HSE & Quality Manual <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-hero-foreground hover:bg-white/10">
                  <Link to="/about">About Our Leadership</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden border border-white/15 bg-black/40">
                <img
                  src={qualityImg}
                  alt="Quality assurance inspection and dimensional verification"
                  className="aspect-square w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-mono">
                  <span>Shield Global QA/QC</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" /> 100% Traceability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / REQUEST A QUOTATION */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="technical-container">
          <Reveal>
            <div className="relative overflow-hidden border border-border bg-background p-8 sm:p-12 lg:p-16 shadow-xl">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="space-y-4 lg:col-span-8">
                  <div className="section-label text-primary">Start Your Technical Tender</div>
                  <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-foreground">
                    Ready to mobilize your next industrial or construction project?
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                    Contact Shield Global Technical Services LLC for competitive bids, project proposals, and technical consultations across the UAE and Gulf region.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:col-span-4 lg:items-end justify-center">
                  <QuoteModal>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto bg-primary text-primary-foreground py-6 px-8 text-xs uppercase tracking-widest font-bold shadow-lg"
                    >
                      Request a Quotation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteModal>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto py-6 px-8 text-xs uppercase tracking-widest font-semibold"
                  >
                    <Link to="/contact">Contact Technical Desk</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}