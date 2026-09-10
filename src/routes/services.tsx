import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";
import { servicesList } from "@/data/services";
import {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import heroTurbine from "@/assets/hero-turbine.jpg";
import qualityImg from "@/assets/quality-detail.jpg";
import processImg from "@/assets/industry-process.jpg";
import machiningImg from "@/assets/product-machining.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Comprehensive technical services: Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP, Welding & Fabrication, Technical Support.",
      },
      { property: "og:title", content: "Services — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons: Record<string, typeof Building2> = {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
};

const serviceImages: Record<string, string> = {
  "building-construction": heroTurbine,
  "facility-management": machiningImg,
  "oil-gas": processImg,
  "energy-utilities": qualityImg,
  "mep-services": machiningImg,
  "welding-fabrication": processImg,
  "technical-support": heroTurbine,
};

function ServicesPage() {
  return (
    <>
      <PageIntro
        index="03"
        title="Comprehensive Technical & Industrial Services"
        description="Shield Global Technical Services LLC delivers multi-disciplinary contracting, engineering fabrication, maintenance, and facility solutions across critical industry sectors."
      />

      {/* Services List Section */}
      <section className="py-20 lg:py-28">
        <div className="technical-container space-y-24">
          {servicesList.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Building2;
            const img = serviceImages[service.id] || heroTurbine;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 border-t border-border pt-16"
              >
                <Reveal>
                  <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div
                      className={`space-y-6 ${
                        isEven
                          ? "lg:col-span-6 lg:order-2 lg:pl-6"
                          : "lg:col-span-6 lg:order-1 lg:pr-6"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Service Division 0{index + 1}
                        </span>
                      </div>

                      <h2 className="font-display text-4xl leading-tight md:text-5xl">
                        {service.title}
                      </h2>

                      <p className="text-base leading-relaxed text-muted-foreground">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                          Key Capabilities:
                        </div>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {service.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2 text-sm text-foreground/85"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <QuoteModal defaultService={service.title}>
                          <Button variant="default" size="lg">
                            Request Quotation for {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </QuoteModal>
                        <Link
                          to="/contact"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground underline underline-offset-4"
                        >
                          Technical Inquiry
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden border border-border bg-card ${
                        isEven
                          ? "lg:col-span-6 lg:order-1"
                          : "lg:col-span-6 lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={img}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-hero-foreground">
                          <span className="text-xs uppercase tracking-widest font-mono opacity-80">
                            Shield Global Specs // Ref-0{index + 1}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-accent">
                            <ShieldCheck className="h-4 w-4" /> ISO Certified Execution
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-foreground py-20 text-hero-foreground lg:py-28">
        <div className="technical-container text-center max-w-3xl">
          <div className="section-label text-accent">Turnkey Engineering & Contracting</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Need a customized solution for your project?
          </h2>
          <p className="mt-6 text-sm text-hero-foreground/75 md:text-base leading-relaxed">
            Our multi-disciplinary engineering teams provide detailed proposals, site inspections, and quotation breakdowns for projects across the region.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <QuoteModal>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground">
                Request a Quotation
              </Button>
            </QuoteModal>
            <Button asChild variant="outline" size="lg" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10">
              <Link to="/contact">Speak with an Engineer</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
