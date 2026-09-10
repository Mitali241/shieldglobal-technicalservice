import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-turbine.jpg";
import qualityImage from "@/assets/quality-detail.jpg";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Shield Global Technical Services LLC provides engineering contracting, MEP, civil construction, facility management, and technical support services.",
      },
      { property: "og:title", content: "About — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        index="02"
        title="Engineering Excellence, Integrity & High-Performance Execution"
        description="Shield Global Technical Services LLC is a premier technical solutions and multi-disciplinary contracting firm delivering specialized engineering, construction, facility maintenance, and industrial support."
      />

      <section className="technical-container grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28 lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden border border-border">
            <img
              src={heroImage}
              width={1536}
              height={1280}
              alt="Shield Global Technical operations"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md p-4 border border-border">
              <div className="text-xs font-mono uppercase text-primary font-bold">
                Shield Global Technical Services LLC
              </div>
              <div className="text-[11px] text-muted-foreground">
                Committed to Safety, Quality & Engineering Precision
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <div className="section-label">Corporate Overview</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Delivering robust technical solutions built to last.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            From heavy structural construction and MEP installations to oil & gas infrastructure maintenance and certified technical staffing, Shield Global provides end-to-end expertise tailored to demanding industrial requirements.
          </p>
          <div className="space-y-3 pt-2">
            {[
              "Multi-disciplinary engineering capabilities under one roof",
              "ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certified management",
              "Experienced project managers, certified inspectors, and specialized workforce",
              "Uncompromising adherence to HSE standards and client project timelines",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 flex gap-4">
            <QuoteModal>
              <Button variant="default" size="lg">Request a Quotation</Button>
            </QuoteModal>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Core Values */}
      <section className="border-y border-border bg-card py-20 lg:py-28">
        <div className="technical-container">
          <div className="section-label">Core Pillars</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Our Operating Principles</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Engineering Precision",
                desc: "We bring meticulous planning, certified methodologies, and advanced tooling to every civil, mechanical, and MEP challenge.",
                icon: Target,
              },
              {
                title: "Safety & Integrity First",
                desc: "Zero-harm commitment across all work sites, comprehensive hazard identification, and strict adherence to international safety codes.",
                icon: Shield,
              },
              {
                title: "Client Partnership",
                desc: "Transparent communication, proactive schedule tracking, and adaptable engineering teams that ensure on-time delivery.",
                icon: Users,
              },
            ].map((item, index) => (
              <Reveal key={item.title}>
                <div className="border border-border bg-background p-8 space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <item.icon className="h-7 w-7 text-primary" />
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}