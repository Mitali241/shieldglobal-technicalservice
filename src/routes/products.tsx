import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Systems — Shield Global Technical Services LLC" },
      {
        name: "description",
        content: "Engineered equipment and fabrication solutions for demanding industrial applications.",
      },
      { property: "og:title", content: "Products & Systems — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageIntro
        index="03"
        title="Fabricated Systems & Engineered Equipment"
        description="High-grade industrial components, precision pipe spools, skid-mounted units, and structural assemblies built to exacting standards."
      />
      <section className="technical-container py-10 sm:py-12 md:py-14 bg-background">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name}>
              <article className="border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg">
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={product.image}
                    loading="lazy"
                    width={1280}
                    height={960}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                  />
                </div>
                <div className="mt-3 section-label text-primary font-bold">{product.category}</div>
                <h2 className="mt-1 font-display text-2xl text-foreground">{product.name}</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Certified to ASME, API, and ISO manufacturing specifications.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}