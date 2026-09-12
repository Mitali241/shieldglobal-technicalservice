import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shield Global Technical Services LLC" },
      {
        name: "description",
        content: "Engineering, construction, MEP and technical maintenance project portfolio.",
      },
      { property: "og:title", content: "Projects — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageIntro
        index="05"
        title="Work Measured by Precision & Performance"
        description="A showcase of multidisciplinary engineering contracting, structural fabrication, MEP installations, and industrial facility execution across the UAE."
      />
      <section className="technical-container grid gap-x-6 gap-y-10 py-10 sm:py-12 md:py-14 md:grid-cols-12 bg-background">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            className={
              index === 0
                ? "md:col-span-8"
                : index === 1
                ? "md:col-span-4"
                : "md:col-span-6"
            }
          >
            <article className="border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg">
              <div className="overflow-hidden bg-black aspect-[16/10]">
                <img
                  src={project.image}
                  loading="lazy"
                  width={1280}
                  height={960}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                />
              </div>
              <div className="mt-3.5 section-label text-primary font-bold">{project.type}</div>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl text-foreground">{project.name}</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Engineered to strict ISO and client project specifications with on-time delivery.
              </p>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}