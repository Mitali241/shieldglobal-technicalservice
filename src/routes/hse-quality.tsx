import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";
import { ShieldCheck, Award, FileCheck, CheckCircle2, AlertTriangle, HardHat, HeartHandshake } from "lucide-react";
import qualityImage from "@/assets/quality-detail.jpg";

export const Route = createFileRoute("/hse-quality")({
  head: () => ({
    meta: [
      { title: "HSE & Quality — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Health, Safety, Environment, and Quality commitment at Shield Global Technical Services LLC. Zero-incident culture and rigorous ISO quality assurance.",
      },
      { property: "og:title", content: "HSE & Quality — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HseQualityPage,
});

function HseQualityPage() {
  return (
    <>
      <PageIntro
        index="06"
        title="Health, Safety, Environment & Quality (HSEQ)"
        description="At Shield Global Technical Services LLC, HSE is an uncompromising cornerstone. We maintain a zero-incident culture alongside rigorous ISO certified quality assurance across all engineering, fabrication, and field operations."
      />

      {/* Main Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="technical-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="section-label">HSEQ Commitment</div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                Zero harm to people, zero impact to the environment, 100% adherence to quality.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Shield Global Technical Services LLC enforces stringent HSE management systems modeled on international best practices (ISO 45001, ISO 14001, and ISO 9001). Our proactive safety culture empowers every team member with Stop-Work Authority.
              </p>
              
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="border border-border p-5 bg-card">
                  <HardHat className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display text-xl mb-1">Target Zero Incidents</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Continuous toolbox talks, risk assessments (HIRA/JSA), and mandatory PPE compliance on all construction & site projects.
                  </p>
                </div>
                <div className="border border-border p-5 bg-card">
                  <Award className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display text-xl mb-1">ISO 9001 Quality Control</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comprehensive Material Test Certificates (MTC), NDT inspection logs, and traceable Quality Control Plans (ITP).
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-border">
                <img
                  src={qualityImage}
                  alt="Quality assurance inspection and precision measurement"
                  className="w-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Grid */}
      <section className="border-t border-border bg-card py-20 lg:py-28">
        <div className="technical-container">
          <div className="section-label">Core Pillars</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Our HSE & Quality Framework</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Occupational Health & Safety",
                desc: "Certified to ISO 45001:2018. Comprehensive site induction, emergency evacuation drills, hazardous material management, and continuous hazard mitigation.",
                icon: ShieldCheck,
              },
              {
                title: "Environmental Stewardship",
                desc: "Certified to ISO 14001:2015. Sustainable waste segregation, emissions reduction, energy-efficient plant operations, and ecological protection guidelines.",
                icon: HeartHandshake,
              },
              {
                title: "Rigorous Quality Assurance",
                desc: "Certified to ISO 9001:2015. Rigorous WPS/PQR welding qualification, dimensional inspection, calibration verification, and transparent reporting.",
                icon: FileCheck,
              },
            ].map((col, idx) => (
              <div key={idx} className="border border-border bg-background p-8 space-y-4">
                <col.icon className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl">{col.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 technical-container flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-display text-3xl">Require our HSEQ compliance dossier?</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Request our quality manual, ISO certificates, or company HSE policy document.
          </p>
        </div>
        <div className="flex gap-4">
          <QuoteModal>
            <Button variant="default" size="lg">Request a Quotation</Button>
          </QuoteModal>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact HSE Department</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
