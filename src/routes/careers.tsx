import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Build your career with Shield Global Technical Services LLC. Explore opportunities in civil engineering, MEP, welding, project management, and HSE.",
      },
      { property: "og:title", content: "Careers — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CareersPage,
});

const openPositions = [
  {
    title: "Senior MEP Project Engineer",
    department: "MEP Services",
    location: "UAE / Middle East",
    type: "Full-Time",
    experience: "7+ Years",
    desc: "Lead HVAC, electrical, and plumbing project execution, site coordination, submittals, and client liaison on large industrial projects.",
  },
  {
    title: "Civil & Structural QA/QC Engineer",
    department: "Building Construction",
    location: "UAE",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Manage inspection and test plans (ITP), material approvals, non-conformance reports, and ensure compliance with ISO standards.",
  },
  {
    title: "Lead Piping & Welding Inspector (CSWIP / AWS)",
    department: "Welding & Fabrication",
    location: "Fabrication Facility",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Supervise structural and pressure pipe welding, verify WPS/PQR, perform visual inspection and coordinate NDT testing.",
  },
  {
    title: "HSE Officer (NEBOSH Certified)",
    department: "HSE & Quality",
    location: "Site Based",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Enforce safety policies, perform daily risk assessments, conduct toolbox talks, and maintain zero-incident site performance.",
  },
  {
    title: "Facility Management Operations Supervisor",
    department: "Facility Management",
    location: "Regional Projects",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Oversee preventive and corrective maintenance schedules for MEP and commercial building infrastructure.",
  },
];

function CareersPage() {
  return (
    <>
      <PageIntro
        index="07"
        title="Careers at Shield Global"
        description="Join a dynamic, precision-driven engineering contracting organization. We invest in talent, continuous technical growth, safety leadership, and impactful industrial projects."
      />

      <section className="py-20 lg:py-28">
        <div className="technical-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
            <div>
              <div className="section-label">Opportunities</div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Open Positions</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Don't see your specific role? Send your CV and portfolio to <span className="text-foreground font-medium">careers@shieldglobal.com</span>
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {openPositions.map((job, idx) => (
              <Reveal key={idx}>
                <div className="group border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                        <span className="text-primary font-semibold">{job.department}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed pt-1">
                        {job.desc}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <Button asChild variant="editorial" size="default">
                        <Link to="/contact">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
