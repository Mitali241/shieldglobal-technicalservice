import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/data/services";
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Contact Shield Global Technical Services LLC for technical project inquiries, tender submissions, RFQs, and quotation requests.",
      },
      { property: "og:title", content: "Contact — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  }

  return (
    <>
      <PageIntro
        index="08"
        title="Contact Shield Global Technical Services LLC"
        description="Connect with our technical estimation, tendering, and engineering divisions. Request a quotation or discuss your technical project scope."
      />

      <section className="technical-container grid gap-8 py-10 sm:py-12 md:py-14 lg:grid-cols-[.7fr_1.3fr]">
        <div className="space-y-6">
          <div>
            <div className="section-label text-primary font-bold">Direct Communication</div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">Head Office & Operations</h2>
          </div>

          <div className="space-y-3.5 text-sm text-muted-foreground">
            <div className="border border-border bg-card p-4 space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Shield Global Technical Services LLC</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Industrial & Commercial Operations Hub
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-4 space-y-2.5">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground font-medium text-xs sm:text-sm">info@shieldglobaltech.ae</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground font-medium text-xs sm:text-sm">+971 4 000 0000 / +971 50 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs">Mon - Sat: 8:00 AM – 6:00 PM (GST)</span>
              </div>
            </div>

            <div className="border border-border bg-card p-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-foreground">Quality Assurance & Safety</div>
                <div className="text-[11px] text-muted-foreground">Zero-Incident HSE • Traceable QA/QC Inspection Controls</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="section-label text-primary font-bold">Tender & Quotation Form</div>
            <h3 className="mt-1 font-display text-2xl md:text-3xl text-foreground">
              Send an Inquiry or RFP
            </h3>
            <p className="mt-1 text-xs text-muted-foreground mb-6">
              Fill in your project details and our engineering estimators will respond promptly.
            </p>

            {sent ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="mt-4 font-display text-2xl font-semibold text-foreground">Message Transmitted</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out to Shield Global Technical Services LLC. Our team has received your submission and will get in touch with you shortly.
                </p>
                <Button
                  onClick={() => setSent(false)}
                  variant="outline"
                  size="sm"
                  className="mt-5"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground">
                  Your Full Name *
                  <input
                    required
                    type="text"
                    placeholder="e.g. Michael Vance"
                    className="mt-1.5 w-full border-0 border-b border-input bg-transparent px-0 py-2 text-sm normal-case outline-none focus:border-primary placeholder:text-muted-foreground"
                  />
                </label>

                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground">
                  Company / Organization *
                  <input
                    required
                    type="text"
                    placeholder="e.g. Apex Industrial LLC"
                    className="mt-1.5 w-full border-0 border-b border-input bg-transparent px-0 py-2 text-sm normal-case outline-none focus:border-primary placeholder:text-muted-foreground"
                  />
                </label>

                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground">
                  Official Email *
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="mt-1.5 w-full border-0 border-b border-input bg-transparent px-0 py-2 text-sm normal-case outline-none focus:border-primary placeholder:text-muted-foreground"
                  />
                </label>

                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground">
                  Telephone / Mobile *
                  <input
                    required
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="mt-1.5 w-full border-0 border-b border-input bg-transparent px-0 py-2 text-sm normal-case outline-none focus:border-primary placeholder:text-muted-foreground"
                  />
                </label>

                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground md:col-span-2">
                  Service Division Required
                  <select
                    className="mt-1.5 w-full border-0 border-b border-input bg-background px-0 py-2 text-sm normal-case outline-none focus:border-primary text-foreground"
                  >
                    <option value="">-- Select Division --</option>
                    {servicesList.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Turnkey Multi-disciplinary">Turnkey Multi-disciplinary</option>
                    <option value="General Technical Support">General Technical Support</option>
                  </select>
                </label>

                <label className="text-xs uppercase tracking-[.12em] font-semibold text-foreground md:col-span-2">
                  Project Scope & Bill of Quantities Outline *
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your project requirements, location, target delivery schedule, and any technical standards..."
                    className="mt-1.5 w-full resize-none border-0 border-b border-input bg-transparent px-0 py-2 text-sm normal-case outline-none focus:border-primary placeholder:text-muted-foreground"
                  />
                </label>

                <div className="md:col-span-2 pt-1">
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="editorial"
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs"
                  >
                    {loading ? "Sending..." : "Submit Inquiry / Request Quotation"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}