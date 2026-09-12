import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

const capabilities = [
  {
    name: "Engineering & Technical Design",
    desc: "Detailed MEP modeling, structural steel analysis, fabrication shop drawings, and rigorous code compliance.",
  },
  {
    name: "Civil Construction & Structural Works",
    desc: "Commercial and industrial building construction, core structural foundations, turnkey finishing, and renovation.",
  },
  {
    name: "Welding & Precision Fabrication",
    desc: "Coded pipe spooling, pressure vessel support, skid assembly, and certified non-destructive testing (NDT).",
  },
  {
    name: "Quality Verification & Site HSE",
    desc: "ISO 9001/45001/14001 certified QA/QC inspection, continuous risk evaluation, and comprehensive material traceability.",
  },
];

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Shield Global Technical Services LLC" },
      {
        name: "description",
        content: "From concept and manufacture through multi-disciplinary validation.",
      },
      { property: "og:title", content: "Capabilities — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        index="04"
        title="Technical Expertise & Engineering Power"
        description="Shield Global Technical Services LLC combines skilled engineers, certified field crews, and advanced tools to execute complex industrial projects."
      />
      <section className="technical-container py-10 sm:py-12 md:py-14 bg-background">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((cap, index) => (
            <Reveal key={cap.name}>
              <article className="border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md">
                <span className="font-display text-4xl text-primary font-bold">0{index + 1}</span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">{cap.name}</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {cap.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}