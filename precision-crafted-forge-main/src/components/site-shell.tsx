import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "/"], ["About", "/about"], ["Products", "/products"],
  ["Industries", "/industries"], ["Capabilities", "/capabilities"],
  ["Projects", "/projects"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const heroPage = pathname === "/";
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !heroPage || open;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${solid ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-transparent text-hero-foreground"}`}>
        <div className="technical-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center lg:h-24 lg:grid-cols-[auto_1fr_auto]">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Axiom Industrial home">
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-current font-display text-lg">A</span>
            <span className="truncate text-sm font-semibold uppercase tracking-[0.16em]">Axiom Industrial</span>
          </Link>
          <nav className="hidden justify-center gap-7 lg:flex" aria-label="Main navigation">
            {links.map(([label, to]) => <Link key={to} to={to} className="technical-link text-[11px] font-medium uppercase tracking-[0.12em]">{label}</Link>)}
          </nav>
          <Link to="/contact" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] lg:flex">Let's Talk <ArrowUpRight className="h-4 w-4" /></Link>
          <Button variant="ghost" size="icon" className="justify-self-end lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
        <AnimatePresence>
          {open && <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t border-border bg-background px-5 py-8 text-foreground lg:hidden">
            {links.map(([label, to], index) => <Link key={to} to={to} className="flex items-baseline justify-between border-b border-border py-4 font-display text-3xl"><span>{label}</span><span className="font-sans text-[10px] text-muted-foreground">0{index + 1}</span></Link>)}
          </motion.nav>}
        </AnimatePresence>
      </header>
      <AnimatePresence mode="wait"><motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>{children}</motion.main></AnimatePresence>
      <footer className="border-t border-border bg-background">
        <div className="technical-container grid gap-10 py-12 md:grid-cols-2 md:items-end">
          <div><div className="font-display text-3xl">Axiom Industrial</div><p className="mt-2 max-w-sm text-sm text-muted-foreground">Placeholder identity and content for a precision engineering company.</p></div>
          <div className="text-left text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:text-right">Engineering / Precision / Performance<br />Company details to be supplied</div>
        </div>
      </footer>
    </div>
  );
}