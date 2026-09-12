import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Shield Global Technical Services LLC" },
      {
        name: "description",
        content: "Delivering engineering contracting and technical services across key industrial sectors.",
      },
      { property: "og:title", content: "Industries — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageIntro
        index="04"
        title="Engineered for Demanding Industrial Environments"
        description="Shield Global Technical Services LLC operates across critical sectors including Building Construction, Oil & Gas, Energy & Utilities, MEP Contracting, and Manufacturing Infrastructure."
      />
      <section className="py-2 bg-background">
        {industries.map((industry, index) => (
          <Reveal key={industry.name}>
            <article className="relative min-h-[45svh] sm:min-h-[50svh] overflow-hidden border-b border-zinc-800">
              <img
                src={industry.image}
                loading="lazy"
                width={1536}
                height={896}
                alt={industry.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
              <div className="technical-container relative flex min-h-[45svh] sm:min-h-[50svh] items-end py-8 sm:py-10 text-white">
                <div>
                  <div className="section-label text-primary font-bold">
                    0{index + 1} / Industry Sector
                  </div>
                  <h2 className="mt-2 font-display text-3xl sm:text-5xl md:text-6xl text-white">
                    {industry.name}
                  </h2>
                  <p className="mt-2 max-w-lg text-xs sm:text-sm text-zinc-300">
                    Comprehensive technical contracting, specialized fabrication, and certified maintenance execution.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}