import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/data/services";
import { CheckCircle2, Send, ShieldAlert, Sparkles } from "lucide-react";

interface QuoteModalProps {
  children?: React.ReactNode;
  defaultService?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function QuoteModal({
  children,
  defaultService = "",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: QuoteModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? setControlledOpen : setInternalOpen;

  const [service, setService] = useState(defaultService || servicesList[0]?.title || "");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOpen?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-w-2xl border-zinc-800 bg-card p-0 text-card-foreground shadow-2xl sm:max-h-[90vh] overflow-y-auto">
        <div className="border-b border-zinc-800 bg-[#0a0a0a] p-6 text-white sm:p-8">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Fast Response Engineering Quotation
          </div>
          <DialogTitle className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-4xl text-white">
            Request a Quotation
          </DialogTitle>
          <DialogDescription className="mt-2 text-xs sm:text-sm text-zinc-300">
            Shield Global Technical Services LLC — Share your technical requirements, specifications, or bill of quantities for an engineered proposal.
          </DialogDescription>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Quotation Request Received</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Thank you for contacting Shield Global Technical Services LLC. Our technical estimation department has logged your project scope and will review specifications within 24 hours.
              </p>
              <div className="mt-6">
                <Button onClick={handleReset} variant="default" size="lg">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="quote-service" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                  Select Required Service Division *
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-none border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multi-disciplinary / Turnkey">Multi-disciplinary / Turnkey Project</option>
                  <option value="General Technical Consultation">General Technical Consultation</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="quote-name" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="quote-name"
                    required
                    type="text"
                    placeholder="e.g. Johnathan Miller"
                    className="w-full border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="quote-company" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                    Company / Organization *
                  </label>
                  <input
                    id="quote-company"
                    required
                    type="text"
                    placeholder="e.g. Petrochem Industries"
                    className="w-full border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="quote-email" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                    Work Email *
                  </label>
                  <input
                    id="quote-email"
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="quote-phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                    Phone / Mobile *
                  </label>
                  <input
                    id="quote-phone"
                    required
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="w-full border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="quote-scope" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                  Project Scope & Technical Details *
                </label>
                <textarea
                  id="quote-scope"
                  required
                  rows={4}
                  placeholder="Outline key project deliverables, location, site timeline, specifications or standards required..."
                  className="w-full resize-none border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-[11px] text-muted-foreground">
                  Direct inquiry to: <span className="font-medium text-foreground">tenders@shieldglobal.com</span>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      Submit Request <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
